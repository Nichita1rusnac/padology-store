export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg text-foreground">Beauty Salon</div>
        <p className="text-muted-foreground font-body text-sm">
          © {new Date().getFullYear()} Lorem Ipsum. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
