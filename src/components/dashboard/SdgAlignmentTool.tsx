"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAdviceAction } from "@/app/actions";
import { Loader, Sparkles, AlertTriangle } from "lucide-react";

type SdgAlignmentToolProps = {
  healthRecords: string;
};

export default function SdgAlignmentTool({ healthRecords }: SdgAlignmentToolProps) {
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetAdvice = async () => {
    setError("");
    setIsLoading(true);
    setAdvice("");

    try {
      const result = await getAdviceAction(healthRecords);
      if (result.advice) {
        setAdvice(result.advice);
      } else {
        setError("Failed to get advice. The response was empty.");
      }
    } catch (e) {
      setError("An unexpected error occurred. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="sticky top-24 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <Sparkles className="text-accent"/>
            SDG Alignment Tool
        </CardTitle>
        <CardDescription>
          Get personalized advice on how your health decisions can align with global sustainability goals.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleGetAdvice} disabled={isLoading} className="w-full bg-primary text-primary-foreground">
          {isLoading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Generating Advice...
            </>
          ) : (
            "Analyze My Health Record"
          )}
        </Button>
        
        {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md text-destructive flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                <p className="text-sm">{error}</p>
            </div>
        )}

        {advice && !isLoading && (
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-md animate-in fade-in-50">
                <h3 className="font-semibold mb-2 text-primary">Your Personalized SDG-Aligned Health Advice:</h3>
                <p className="text-sm text-foreground/90 whitespace-pre-wrap">{advice}</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
