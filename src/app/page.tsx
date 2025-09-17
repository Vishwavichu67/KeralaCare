import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeartPulse, Briefcase, Scale, Landmark, ArrowRight } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');

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
                <div key={index} className="text-center p-6 bg-card rounded-lg shadow-sm">
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
      </main>
      <Footer />
    </>
  );
}
