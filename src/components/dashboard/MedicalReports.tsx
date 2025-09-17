"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, FileText, Loader, AlertTriangle } from "lucide-react";

export default function MedicalReports() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; date: string }[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
      setError("");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }
    setIsUploading(true);
    setError("");

    // Placeholder for upload logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setUploadedFiles(prev => [...prev, { name: selectedFile.name, date: new Date().toLocaleDateString() }]);
    setSelectedFile(null);
    setIsUploading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Upload /> Medical Reports
        </CardTitle>
        <CardDescription>
          Upload and manage your medical reports securely.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Input type="file" onChange={handleFileChange} className="max-w-sm" />
          {error && <p className="text-sm text-destructive flex items-center gap-1"><AlertTriangle className="h-4 w-4" />{error}</p>}
        </div>

        <Button onClick={handleUpload} disabled={isUploading || !selectedFile}>
          {isUploading ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            "Upload Report"
          )}
        </Button>

        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Uploaded Reports</h3>
          {uploadedFiles.length === 0 ? (
            <p className="text-sm text-muted-foreground">No reports uploaded yet.</p>
          ) : (
            <ul className="space-y-2">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="flex items-center justify-between p-2 bg-secondary/50 rounded-md">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-accent" />
                    <span className="font-medium">{file.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{file.date}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
