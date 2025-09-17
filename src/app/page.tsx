import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HeartPulse, Briefcase, Scale, Landmark, ArrowRight } from 'lucide-react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');

const sdgData = [
  {
    value: "sdg-3",
    title: "SDG 3: Good Health and Well-being",
    icon: HeartPulse,
    content: "Our platform provides accessible digital health records, empowering migrant workers to manage their health effectively. This directly contributes to ensuring healthy lives and promoting well-being for all at all ages."
  },
  {
    value: "sdg-8",
    title: "SDG 8: Decent Work and Economic Growth",
    icon: Briefcase,
    content: "A healthy workforce is a productive workforce. By facilitating better health outcomes, we help ensure that migrant workers are fit for work, supporting sustained, inclusive, and sustainable economic growth."
  },
  {
    value: "sdg-10",
    title: "SDG 10: Reduced Inequalities",
    icon: Scale,
    content: "Migrant workers often face barriers to healthcare. Our system aims to reduce these inequalities by providing a consistent and portable health record, ensuring they receive the care they need, regardless of their location within Kerala."
  },
  {
    value: "sdg-16",
    title: "SDG 16: Peace, Justice and Strong Institutions",
    icon: Landmark,
    content: "By providing a formal and reliable health record system, we contribute to building more inclusive institutions. This ensures that migrant workers are not left behind and have access to essential services, promoting a more just society."
  }
];

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
                <Link href="#learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-headline font-bold mb-4 text-primary">About The Project</h2>
            <p className="text-lg text-foreground/80">
              KeralaCare is a dedicated platform designed to provide migrant workers in Kerala with a secure, reliable, and portable digital health record system. Our mission is to bridge the healthcare gap for this vulnerable population, ensuring continuity of care and promoting better health outcomes. By aligning with key UN Sustainable Development Goals, we are committed to not only improving individual lives but also contributing to a more equitable and sustainable future for all.
            </p>
          </div>
        </section>

        {/* SDG Alignment Section */}
        <section id="learn-more" className="py-16 md:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-headline font-bold text-center mb-12 text-primary">Our Commitment to Sustainable Development</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible defaultValue="sdg-3" className="w-full">
                {sdgData.map((item) => (
                  <AccordionItem value={item.value} key={item.value} className="bg-card shadow-sm rounded-lg mb-4">
                    <AccordionTrigger className="p-6 text-lg font-semibold hover:no-underline text-accent">
                      <div className="flex items-center gap-4">
                        <item.icon className="h-8 w-8 text-accent" />
                        {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-6 pt-0 text-base text-foreground/80">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
