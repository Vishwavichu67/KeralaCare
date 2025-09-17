"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, User } from "lucide-react";
import { QRCode } from "react-qr-code";

type HealthIdCardProps = {
  workerName: string;
  healthId: string;
};

export default function HealthIdCard({ workerName, healthId }: HealthIdCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary font-headline">
          <QrCode className="text-accent" />
          Your Health ID
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-primary/5 border border-primary/10 rounded-lg">
          <div className="bg-white p-3 rounded-md shadow-md">
            <QRCode value={healthId} size={128} />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-semibold">{workerName}</h3>
            <p className="text-sm text-muted-foreground">Health ID:</p>
            <p className="font-mono text-sm bg-muted text-muted-foreground p-2 rounded-md">
              {healthId}
            </p>
            <p className="text-xs text-muted-foreground pt-2">
                Show this QR code at any affiliated health center to securely access your health records.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}