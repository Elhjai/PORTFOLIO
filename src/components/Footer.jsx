import { personal } from "../data";

const footerLinks = {
  Navigation: ["About", "Projects", "Services", "Process", "Contact"],
  Connect: [
    { label: "GitHub", url: personal.github },
    { label: "LinkedIn", url: personal.linkedin },
    { label: "Portfolio", url: personal.portfolio },
  ],
};

export default function Footer() {
  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/20 px-6 md:px-12 lg:px-20 pt-16 pb-8 relative overflow-hidden">
      {/* Big name watermark */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none">
        <span className="font-display text-[18vw] text-border/5 leading-none select-none whitespace-nowrap">
          ELIJAH PAUL
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="font-display text-4xl tracking-widest text-white mb-3">
              EMP<span className="text-accent">.</span>
            </p>
            <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
              Frontend Engineer building modern, scalable, and high-performance
              web applications.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs text-accent tracking-widest">
                Available for work
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.Navigation.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="font-body text-sm text-muted hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              {footerLinks.Connect.map(({ label, url }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    {label}
                    <span className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-body text-sm text-muted hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  Email
                  <span className="opacity-0 group-hover:opacity-100 transition-all text-xs">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
