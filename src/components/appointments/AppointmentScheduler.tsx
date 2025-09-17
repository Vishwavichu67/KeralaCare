
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Loader, CheckCircle } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import doctorData from '@/app/lib/doctor-data.json';

type AppointmentSchedulerProps = {
  preselectedDoctorId?: string;
};

export default function AppointmentScheduler({ preselectedDoctorId }: AppointmentSchedulerProps) {
  const [doctor, setDoctor] = useState(preselectedDoctorId || "");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [booked, setBooked] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBooking = async () => {
    setIsBooking(true);
    setBooked(false);
    // Placeholder for booking logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsBooking(false);
    setBooked(true);
  };

  if (!isClient) {
    return (
        <Card>
            <CardHeader>
                 <CardTitle className="flex items-center gap-2 text-primary">
                    <CalendarIcon /> Book an Appointment
                </CardTitle>
                <CardDescription>
                    Schedule a consultation with an available doctor.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="h-10 w-full bg-muted rounded-md animate-pulse"></div>
                    <div className="h-10 w-full bg-muted rounded-md animate-pulse"></div>
                    <div className="h-10 w-full bg-muted rounded-md animate-pulse"></div>
                </div>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <CalendarIcon /> Book an Appointment
        </CardTitle>
        <CardDescription>
          Schedule a consultation with an available doctor.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Doctor</Label>
            <Select onValueChange={setDoctor} value={doctor}>
              <SelectTrigger>
                <SelectValue placeholder="Select a doctor" />
              </SelectTrigger>
              <SelectContent>
                {doctorData.doctors.map((doc) => (
                  <SelectItem key={doc.id} value={doc.id}>
                    {doc.name} ({doc.specialty})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
           <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>

        <Button onClick={handleBooking} disabled={isBooking || !doctor || !date || !time}>
          {isBooking ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              Booking...
            </>
          ) : (
            "Book Appointment"
          )}
        </Button>
        {booked && (
            <div className="p-3 bg-green-100 border border-green-300 rounded-md text-green-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <p className="text-sm font-medium">Appointment booked successfully!</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
