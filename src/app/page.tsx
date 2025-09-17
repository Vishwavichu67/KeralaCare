import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeartPulse, Briefcase, Scale, Landmark, ArrowRight, UserPlus, FileUp, Hospital } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');
const getStartedImage = PlaceHolderImages.find(img => img.id === 'get-started-banner');

const features = [
  {
    icon: HeartPulse,
    title: "Digital Health Records",
    description: "Access your complete health history anytime, anywhere. Securely stored and easy to manage."
  },
  {
    icon: Briefcase,
    title: "Appointment Booking",
    description: "Schedule appointments with healthcare providers directly through the platform."
  },
  {
    icon: Scale,
    title: "Multilingual Support",
    description: "Our platform is available in English, Malayalam, Hindi, and Bengali to ensure accessibility for everyone."
  },
  {
    icon: Landmark,
    title: "Aligned with SDGs",
    description: "We are committed to supporting UN Sustainable Development Goals for a healthier, more equitable future."
  }
];

const howItWorksSteps = [
    {
        icon: UserPlus,
        title: "Register in Minutes",
        description: "Create your secure account to get a unique Health ID. It's fast, free, and easy."
    },
    {
        icon: FileUp,
        title: "Upload Your Records",
        description: "Safely upload and organize all your past medical documents, prescriptions, and lab reports."
    },
    {
        icon: Hospital,
        title: "Access Care Anywhere",
        description: "Present your Health ID at any affiliated clinic in Kerala for seamless, informed healthcare."
    }
];

const testimonials = [
    {
        quote: "KeralaCare has been a lifesaver. I moved from West Bengal for work, and carrying my papers was always a hassle. Now, everything is on my phone. Doctors can see my history instantly.",
        name: "Ravi Sharma",
        location: "Kochi"
    },
    {
        quote: "I used to worry about losing my prescriptions. With this platform, all my records are safe. Booking an appointment is also very simple. Thank you for this service.",
        name: "Amina Khatun",
        location: "Thiruvananthapuram"
    }
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] flex items-center justify-center text-center text-white bg-primary/20">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 p-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
              Digital Health Record Management System for Migrant Workers in Kerala
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Empowering migrant workers with accessible and secure digital health records, aligned with UN Sustainable Development Goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/register">Register Now <ArrowRight className="ml-2" /></Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-headline font-bold text-primary">Your Health in Your Hands</h2>
              <p className="text-lg text-foreground/80 mt-2">
                KeralaCare offers a suite of tools designed to empower you with control over your health information.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-card rounded-lg shadow-sm transition-transform transform hover:-translate-y-2">
                  <div className="flex justify-center items-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                       <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-headline font-bold text-primary">Simple Steps to Better Health</h2>
                    <p className="text-lg text-foreground/80 mt-2">
                        Getting started with KeralaCare is quick and straightforward.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {howItWorksSteps.map((step, index) => (
                        <div key={index} className="p-6">
                            <div className="flex justify-center items-center mb-4">
                                <div className="bg-white p-5 rounded-full shadow-md">
                                    <step.icon className="h-10 w-10 text-accent" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
                            <p className="text-foreground/70">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-headline font-bold text-primary">Trusted by Workers Across Kerala</h2>
                    <p className="text-lg text-foreground/80 mt-2">
                        Hear what our users have to say about their experience with KeralaCare.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-card">
                            <CardContent className="p-6">
                                <p className="text-foreground/80 italic mb-4">"{testimonial.quote}"</p>
                                <p className="font-bold text-right text-accent">- {testimonial.name}, <span className="font-normal text-foreground/60">{testimonial.location}</span></p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Get Started Section */}
        <section className="relative w-full py-20 md:py-32 flex items-center justify-center text-center bg-primary/10">
          {getStartedImage && (
            <Image
              src={getStartedImage.imageUrl}
              alt={getStartedImage.description}
              fill
              className="object-cover"
              data-ai-hint={getStartedImage.imageHint}
            />
          )}
           <div className="absolute inset-0 bg-black/60" />
           <div className="relative z-10 p-4 max-w-3xl mx-auto text-white">
             <h2 className="text-4xl font-headline font-bold mb-4">Get Started Today</h2>
             <p className="text-lg text-primary-foreground/90 mb-8">
               Take the first step towards owning your health journey. Join thousands of other migrant workers in Kerala who are managing their health records with confidence and ease.
             </p>
             <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/register">Create Your Free Account <ArrowRight className="ml-2" /></Link>
              </Button>
           </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
