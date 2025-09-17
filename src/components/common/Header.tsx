import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block">
              KeralaCare
            </span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center space-x-2">
            <Link href="/workers" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
                Workers
            </Link>
        </nav>
        <div className="flex items-center justify-end space-x-2">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
