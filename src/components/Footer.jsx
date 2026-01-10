import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-1 px-4 bg-card relative border-t border-border mt-6 pt-2 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        Made with &#10084; by Manav Makwana, {new Date().getFullYear()}. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};