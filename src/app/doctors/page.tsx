
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Stethoscope, Hospital, MapPin } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import doctorData from '@/app/lib/doctor-data.json';
import { Button } from '@/components/ui/button';

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-secondary/30">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl font-headline font-bold mb-4 text-primary">Healthcare Providers</h1>
              <p className="text-lg text-foreground/80">
                Find affiliated doctors and specialists across Kerala.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {doctorData.doctors.map((doctor) => (
                <Card key={doctor.id} className="shadow-lg hover:shadow-primary/20 transition-shadow flex flex-col">
                  <CardHeader>
                    <div className="flex flex-col items-center gap-4 text-center">
                        <Image
                            src={doctor.imageUrl}
                            alt={`Photo of ${doctor.name}`}
                            width={120}
                            height={120}
                            className="rounded-full border-4 border-primary/20"
                            data-ai-hint="doctor professional headshot"
                        />
                        <div>
                            <CardTitle className="text-xl">{doctor.name}</CardTitle>
                            <CardDescription className="text-accent font-medium pt-1">{doctor.specialty}</CardDescription>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <div className="space-y-3 p-4 bg-secondary/50 rounded-md flex-1">
                        <div className="flex items-start gap-3">
                            <Hospital className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-xs text-muted-foreground">Hospital</p>
                                <p className="font-medium text-sm">{doctor.hospital}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-xs text-muted-foreground">Location</p>
                                <p className="font-medium text-sm">{doctor.location}</p>
                            </div>
                        </div>
                    </div>
                    <Button className="w-full mt-auto">Book Appointment</Button>
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
