import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Activity, HeartPulse, ListPlus, Stethoscope, Cigarette, GlassWater, Utensils, Bike } from "lucide-react";

type HealthRecordProps = {
  records: {
    personalInfo: {
      name: string;
      age: number;
      gender: string;
      contact: string;
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
};

const InfoItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | number }) => (
    <div className="flex items-center gap-4">
        <Icon className="h-5 w-5 text-accent" />
        <div className="flex-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="font-medium">{value}</p>
        </div>
    </div>
)

export default function HealthRecord({ records }: HealthRecordProps) {
  return (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold font-headline text-primary">Your Digital Health Record</h2>
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="text-accent" /> Personal Information
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <InfoItem icon={User} label="Name" value={records.personalInfo.name} />
                    <InfoItem icon={Activity} label="Age" value={records.personalInfo.age} />
                    <InfoItem icon={User} label="Gender" value={records.personalInfo.gender} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <HeartPulse className="text-accent" /> Vitals
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <InfoItem icon={HeartPulse} label="Blood Pressure" value={records.vitals.bloodPressure} />
                    <InfoItem icon={Activity} label="Heart Rate" value={records.vitals.heartRate} />
                    <InfoItem icon={Stethoscope} label="Blood Sugar" value={records.vitals.bloodSugar} />
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ListPlus className="text-accent" /> Medical History
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    {records.medicalHistory.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bike className="text-accent" /> Lifestyle
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoItem icon={Cigarette} label="Smoker" value={records.lifestyle.smoker} />
                <InfoItem icon={GlassWater} label="Alcohol Consumption" value={records.lifestyle.alcohol} />
                <InfoItem icon={Utensils} label="Diet" value={records.lifestyle.diet} />
                <InfoItem icon={Bike} label="Exercise" value={records.lifestyle.exercise} />
            </CardContent>
        </Card>

    </div>
  );
}