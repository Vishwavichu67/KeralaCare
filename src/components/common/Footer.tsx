import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
            <p>&copy; {currentYear} KeralaCare. All rights reserved.</p>
            <div className="flex gap-4">
                <Link href="/about" className="hover:text-primary">About</Link>
                <Link href="/contact" className="hover:text-primary">Contact</Link>
                <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            </div>
        </div>
        <p className="mt-4">A Digital Health Initiative for Migrant Workers in Kerala.</p>
      </div>
    </footer>
  );
}
