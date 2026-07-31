import { useEffect, useState, type ReactNode } from "react";
import { Home, FolderKanban, UserCircle2, Mail, Sparkles } from "lucide-react";

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
      const heroSectionHeight = window.innerHeight * 0.9;
      const atHeroTop = currentScrollY < heroSectionHeight;

      if (atHeroTop) {
        setVisible(true);
      } else {
        setVisible(currentScrollY < lastScrollY || currentScrollY < 80);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 flex w-fit -translate-x-1/2 justify-center px-4 transition-all duration-300 ease-out ${visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0 pointer-events-none"}`}
    >
      <nav
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
        className={`relative flex min-w-[3.75rem] items-center overflow-visible rounded-full border border-white/15 bg-white/10 px-2.5 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-[width,transform] duration-300 ease-out sm:px-3 sm:py-3 ${expanded ? "w-[max-content]" : "w-[3.75rem] sm:w-[4.25rem]"}`}
      >
        <div className="flex shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/20 p-1.5 text-white sm:p-2">
          <Sparkles size={16} className="sm:size-[17px]" />
        </div>

        <div className={`ml-2 overflow-hidden transition-all duration-300 ${expanded ? "max-w-[70px] opacity-100 sm:max-w-[90px]" : "max-w-0 opacity-0"}`}>
          <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-[10px] sm:tracking-[0.35em]">
            Menu
          </span>
        </div>

        <div className="ml-2 flex flex-1 items-center justify-end gap-1 sm:ml-3 sm:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`group flex items-center justify-center rounded-full px-2 py-2 text-white transition-all duration-300 hover:bg-white/15 sm:px-2.5 ${expanded ? "gap-1.5 pr-2.5 sm:gap-2 sm:pr-3" : "gap-0"}`}
            >
              <span className="shrink-0 text-white/90">{item.icon}</span>
              <span
                className={`overflow-hidden whitespace-nowrap text-xs font-medium transition-all duration-300 sm:text-sm ${expanded ? "max-w-[70px] translate-x-0 opacity-100 sm:max-w-[90px]" : "max-w-0 -translate-x-2 opacity-0"}`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;