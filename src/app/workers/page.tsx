import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, Activity, HeartPulse, Droplets, AlertTriangle } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import workerData from '@/app/lib/worker-data.json';

const InfoItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | number | readonly string[] }) => (
    <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
        <div>
            <p className="text-xs text-muted-foreground">{label}</p>
            {Array.isArray(value) ? (
                 <ul className="font-medium text-sm list-disc list-inside">
                    {value.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            ) : (
                <p className="font-medium text-sm">{value}</p>
            )}
        </div>
    </div>
)

export default function WorkersPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-secondary/30">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl font-headline font-bold mb-4 text-primary">Registered Workers</h1>
              <p className="text-lg text-foreground/80">
                Browse the profiles of migrant workers registered on the KeralaCare platform.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {workerData.workers.map((worker) => (
                <Card key={worker.id} className="shadow-lg hover:shadow-primary/20 transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <User className="h-8 w-8 text-primary" />
                        <div className='flex-1'>
                            {worker.personalInfo.name}
                             <p className="text-sm font-normal text-muted-foreground">
                                {worker.personalInfo.age}, {worker.personalInfo.gender}
                            </p>
                        </div>
                    </CardTitle>
                    <CardDescription className='pt-2'>Health ID: {worker.personalInfo.healthId}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-2">
                    <div className="space-y-3 p-3 bg-secondary/50 rounded-md">
                        <h4 className='text-sm font-semibold flex items-center gap-2'><HeartPulse className='w-4 h-4 text-accent' /> Vitals</h4>
                         <div className='grid grid-cols-2 gap-3'>
                            <InfoItem icon={Activity} label="BP" value={worker.vitals.bloodPressure} />
                            <InfoItem icon={HeartPulse} label="Heart Rate" value={worker.vitals.heartRate} />
                        </div>
                    </div>
                     <div className="space-y-3 p-3 bg-destructive/5 rounded-md">
                        <h4 className='text-sm font-semibold flex items-center gap-2 text-destructive'><AlertTriangle className='w-4 h-4' /> Emergency</h4>
                        <div className='grid grid-cols-2 gap-3'>
                            <InfoItem icon={Droplets} label="Blood Group" value={worker.emergencyInfo.bloodGroup} />
                            <InfoItem icon={AlertTriangle} label="Allergies" value={worker.emergencyInfo.allergies} />
                        </div>
                    </div>
                    <Link href="/dashboard" className="text-sm text-primary hover:underline text-center block pt-2">
                      View Full Dashboard &rarr;
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
