export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 py-6">
      <div className="container mx-auto px-4 text-center text-sm text-foreground/60">
        <p>&copy; {currentYear} KeralaCare. All rights reserved.</p>
        <p className="mt-1">A Digital Health Initiative for Migrant Workers in Kerala.</p>
      </div>
    </footer>
  );
}
