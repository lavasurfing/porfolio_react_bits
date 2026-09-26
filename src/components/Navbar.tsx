import { useEffect, useState, type ReactNode } from "react";
import { Home, FolderKanban, UserCircle2, Mail } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: <Home size={18} /> },
  { label: "Project", href: "#project", icon: <FolderKanban size={18} /> },
  { label: "Profile", href: "#profile", icon: <UserCircle2 size={18} /> },
  { label: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      if (currentScrollY < 24) {
        setVisible(true);
      } else if (delta > 6) {
        setVisible(false);
      } else if (delta < -6) {
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 sm:w-fit sm:max-w-none">
      <div
        className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          visible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-8 opacity-0"
        }`}
      >
        <nav className="flex items-center justify-center gap-1 rounded-full bg-transparent px-1 py-1 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="flex h-11 w-11 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </nav>

        <nav
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          onFocus={() => setExpanded(true)}
          onBlur={() => setExpanded(false)}
          className={`relative mx-auto hidden origin-center items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/10 py-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-300 ease-out sm:flex ${
            expanded ? "w-[max-content] min-w-[28rem] px-3" : "w-[3.75rem] px-2"
          }`}
        >
          <a
            href="#home"
            aria-label="Ashish Hansdah"
            className={`flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/30 text-[13px] font-semibold tracking-[0.18em] text-white transition-all duration-300 ${
              expanded ? "pointer-events-none h-0 w-0 scale-75 overflow-hidden border-0 opacity-0" : "h-11 w-11 opacity-100"
            }`}
          >
            AH
          </a>

          <div
            className={`grid grid-cols-4 items-center overflow-hidden transition-all duration-300 ${
              expanded ? "w-[26rem] opacity-100" : "w-0 opacity-0"
            }`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-center gap-2 rounded-full px-2 py-2 text-white transition-colors duration-300 hover:bg-white/15"
              >
                <span className="shrink-0 text-white/90">{item.icon}</span>
                <span className="whitespace-nowrap text-sm font-medium">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
