
"use client"

import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Users, Syringe, Activity } from 'lucide-react';

const vaccinationData = [
  { district: 'Thiruvananthapuram', 'Dose 1': 85, 'Dose 2': 70 },
  { district: 'Kollam', 'Dose 1': 82, 'Dose 2': 68 },
  { district: 'Pathanamthitta', 'Dose 1': 90, 'Dose 2': 80 },
  { district: 'Alappuzha', 'Dose 1': 88, 'Dose 2': 75 },
  { district: 'Kottayam', 'Dose 1': 89, 'Dose 2': 78 },
  { district: 'Idukki', 'Dose 1': 78, 'Dose 2': 65 },
  { district: 'Ernakulam', 'Dose 1': 92, 'Dose 2': 85 },
  { district: 'Thrissur', 'Dose 1': 86, 'Dose 2': 72 },
  { district: 'Palakkad', 'Dose 1': 80, 'Dose 2': 67 },
  { district: 'Malappuram', 'Dose 1': 75, 'Dose 2': 60 },
];

const diseaseTrendData = [
  { month: 'Jan', Dengue: 20, Malaria: 5, Chikungunya: 2 },
  { month: 'Feb', Dengue: 25, Malaria: 3, Chikungunya: 4 },
  { month: 'Mar', Dengue: 30, Malaria: 8, Chikungunya: 5 },
  { month: 'Apr', Dengue: 45, Malaria: 12, Chikungunya: 8 },
  { month: 'May', Dengue: 60, Malaria: 15, Chikungunya: 12 },
  { month: 'Jun', Dengue: 80, Malaria: 20, Chikungunya: 18 },
];

const StatCard = ({ title, value, icon: Icon, description }: { title: string, value: string, icon: React.ElementType, description: string }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
)

export default function AdminDashboardPage() {
  const handleExport = () => {
    // Placeholder for export functionality
    alert("Exporting reports... (This is a placeholder)");
  };

  return (
    <div className="min-h-screen bg-secondary/30">
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center">
                <h1 className="text-xl font-bold font-headline tracking-tight">Admin & Government Dashboard</h1>
                <div className="ml-auto">
                    <Button onClick={handleExport}>
                        <Download className="mr-2" />
                        Export Reports
                    </Button>
                </div>
            </div>
      </header>
      <main className="container py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <StatCard title="Total Migrant Workers" value="12,450" icon={Users} description="+201 since last month" />
            <StatCard title="Vaccination Coverage (Dose 1)" value="83.5%" icon={Syringe} description="Target: 95%" />
            <StatCard title="Active Dengue Cases" value="253" icon={Activity} description="+45 this week" />
            <StatCard title="Health Centers Active" value="152" icon={Users} description="Across all 14 districts" />
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
            <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
                <CardTitle>Vaccination Coverage by District (%)</CardTitle>
                <CardDescription>First and second dose administration rates for migrant workers.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vaccinationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="district" angle={-45} textAnchor="end" height={80} interval={0} tick={{fontSize: 12}} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Dose 1" fill="hsl(var(--primary))" />
                    <Bar dataKey="Dose 2" fill="hsl(var(--accent))" />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
            </Card>

            <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
                <CardTitle>Communicable Disease Trends</CardTitle>
                <CardDescription>Reported cases among migrant workers over the past 6 months.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={diseaseTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Dengue" stroke="hsl(var(--destructive))" strokeWidth={2} />
                        <Line type="monotone" dataKey="Malaria" stroke="hsl(var(--chart-4))" strokeWidth={2} />
                        <Line type="monotone" dataKey="Chikungunya" stroke="hsl(var(--chart-5))" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
