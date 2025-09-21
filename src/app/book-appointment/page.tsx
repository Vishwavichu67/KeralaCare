export const dynamic = "force-dynamic";
'use client';
import { useSearchParams } from 'next/navigation';
import AppointmentScheduler from '@/components/appointments/AppointmentScheduler';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function BookAppointmentPage() {
  const searchParams = useSearchParams();
  const doctorId = searchParams.get('doctorId');

  return (
    <>
      <Header />
      <main className="flex-1 py-12 md:py-20 flex justify-center items-start">
        <div className="w-full max-w-2xl px-4">
            <AppointmentScheduler preselectedDoctorId={doctorId || undefined} />
        </div>
      </main>
      <Footer />
    </>
  );
}
