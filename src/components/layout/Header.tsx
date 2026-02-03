import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const navigationItems = [
  { label: "How it works", href: "#" },
  { label: "All apps", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "For Teams", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Podcast", href: "#" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${isScrolled 
          ? "bg-black/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"}
      `}
    >
      <nav className="container flex items-center justify-between py-3">
        <a href="/" className="flex-shrink-0">
          <img
            className="h-8 w-auto"
            alt="Setapp Logo"
            src="/images/link---go-to-homepage.svg"
          />
        </a>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-white hover:opacity-80 transition-opacity tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-px h-5 bg-white" />

          <div className="flex items-center gap-6">
            <img className="w-6 h-auto" alt="Search" src="/images/item.png" />

            <a
              href="#"
              className="text-sm font-medium text-white hover:opacity-80 transition-opacity tracking-wide"
            >
              Sign In
            </a>

            <Button
              variant="outline"
              className="rounded-md border border-white bg-transparent text-white text-sm font-normal tracking-wide px-6 py-2 hover:bg-white hover:text-black transition-colors"
            >
              Try free
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full overflow-hidden transition-transform duration-300 ease-in-out transform origin-top bg-black ${
          isMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {navigationItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-sm font-medium text-white hover:opacity-80 transition-opacity tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li className="flex justify-center">
            <img className="w-6 h-auto" alt="Search" src="/images/item.png" />
          </li>

          <li>
            <a
              href="#"
              className="text-sm font-medium text-white hover:opacity-80 transition-opacity tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </a>
          </li>

          <li>
            <Button
              variant="outline"
              className="rounded-md border border-white bg-transparent text-white text-sm font-normal tracking-wide px-6 py-2 hover:bg-white hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Try free
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};