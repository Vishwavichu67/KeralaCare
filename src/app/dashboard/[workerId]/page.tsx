


import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, LogOut } from "lucide-react";
import HealthRecord from "@/components/dashboard/HealthRecord";
import SdgAlignmentTool from "@/components/dashboard/SdgAlignmentTool";
import HealthIdCard from "@/components/dashboard/HealthIdCard";
import MedicalReports from "@/components/dashboard/MedicalReports";
import Chatbot from "@/components/dashboard/Chatbot";
import workerData from '@/app/lib/worker-data.json';
import { notFound } from "next/navigation";

// Define the worker type based on the JSON structure
type Worker = {
  id: string;
  personalInfo: {
    name: string;
    age: number;
    gender: string;
    contact: string;
    healthId: string;
  };
  emergencyInfo: {
    bloodGroup: string;
    allergies: string[];
  };
  vitals: {
    bloodPressure: string;
    heartRate: string;
    temperature: string;
    bloodSugar: string;
  };
  medicalHistory: string[];
  lifestyle: {
    smoker: string;
    alcohol: string;
    diet: string;
    exercise: string;
  };
};

function getWorkerById(id: string): Worker | undefined {
  return workerData.workers.find((worker) => worker.id === id);
}

export default function DashboardPage({ params }: { params: { workerId: string } }) {
  const worker = getWorkerById(params.workerId);

  if (!worker) {
    notFound();
  }

  const healthRecords = worker;

  const healthRecordsSummary = `
  Personal Information: Name - ${healthRecords.personalInfo.name}, Age - ${healthRecords.personalInfo.age}, Gender - ${healthRecords.personalInfo.gender}.
  Emergency Info: Blood Group - ${healthRecords.emergencyInfo.bloodGroup}, Allergies - ${healthRecords.emergencyInfo.allergies.join(', ')}.
  Vitals: Blood Pressure - ${healthRecords.vitals.bloodPressure}, Heart Rate - ${healthRecords.vitals.heartRate}, Blood Sugar - ${healthRecords.vitals.bloodSugar}.
  Medical History: ${healthRecords.medicalHistory.join(' ')}
  Lifestyle Choices: ${JSON.stringify(healthRecords.lifestyle)}
`;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">KeralaCare Dashboard</span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button asChild variant="ghost">
                <Link href="/"><LogOut className="mr-2 h-4 w-4" /> Logout</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8 container">
        <div className="space-y-4 mb-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">Welcome, {healthRecords.personalInfo.name}</h1>
            <p className="text-muted-foreground">Here is your digital health record and personalized SDG alignment advice.</p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <HealthIdCard 
              workerName={healthRecords.personalInfo.name}
              healthId={healthRecords.personalInfo.healthId}
            />
            <HealthRecord records={healthRecords} />
            <MedicalReports />
          </div>
          <div className="lg:col-span-1">
            <SdgAlignmentTool healthRecords={healthRecordsSummary} />
          </div>
        </div>
      </main>
      <Chatbot />
    </div>
  );
}
