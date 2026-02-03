import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";

const footerLinks = {
  column1: [
    "Home",
    "How It Works",
    "All Apps",
    "Pricing",
    "Setapp for Teams",
    "Blog",
    "Podcast",
    "Download",
  ],
  column2: [
    "About",
    "Support",
    "Education Discount",
    "Family Plan",
    "For Developers",
    "Gift Cards",
    "Redeem Card or Code",
    "Setapp Reviews",
    "Affiliate Program",
    "Mac Developer Survey 2023",
  ],
  column3: [
    "Getting started with Setapp",
    "Remote access to other Mac",
    "Fix macOS Ventura problems",
    "Best productivity apps",
    "Best YouTube downloaders",
    "Uninstall apps",
  ],
};

const legalLinks = ["Terms of Use", "Privacy Policy"];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#2b2d32]">
      <div className="container py-12 md:py-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          <div className="lg:col-span-5">
            <img
              className="w-full max-w-md h-8 mb-12 md:mb-20"
              alt="Setapp Logo"
              src="/images/div-logo.svg"
            />

            <div className="flex flex-col gap-6 max-w-md">
              <div className="flex items-center gap-2">
                <p className="text-base text-white font-normal leading-relaxed">
                  Updates from our team, written with love
                </p>
                <img className="w-4 h-4 flex-shrink-0" alt="Heart" src="/images/svg-1.svg" />
              </div>

              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 bg-[#404547] border-0 rounded-l-md text-white placeholder:text-[#9d9ca2] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="h-12 px-6 bg-[#26262b] hover:bg-[#26262b]/90 rounded-r-md rounded-l-none">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <nav className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              <div className="flex flex-col gap-1">
                {footerLinks.column1.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-base text-white font-normal leading-8 hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                {footerLinks.column2.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-base text-white font-normal leading-8 hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-1">
                {footerLinks.column3.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-base text-white font-normal leading-8 hover:underline"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-start">
            <div className="w-12 h-7 bg-[#969799] flex items-center justify-center">
              <span className="text-xs font-bold text-white">DMCA</span>
            </div>
            <div className="w-24 h-7 bg-[#404547] flex items-center justify-center">
              <span className="text-xs font-bold text-white">PROTECTED</span>
            </div>
          </div>

          <button className="inline-flex items-center gap-2">
            <img className="w-7 h-4" alt="English flag" src="/images/en-svg.svg" />
            <select className="bg-[#2b2d32] text-white text-base font-normal">
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </button>
        </div>

        <Separator className="bg-neutral-200 mb-8" />

        <div className="flex flex-col md:flex-row items-start justify-between gap-6 mb-4">
          <p className="text-xs text-white font-normal leading-relaxed max-w-2xl">
            © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14,
            Ireland. Reg. 584165. VAT ID: IE3425001BH
          </p>

          <img className="w-auto h-auto" alt="Payment methods" src="/images/div-col-12-1.svg" />
        </div>

        <div className="flex items-start gap-3">
          {legalLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="text-xs text-[#969799] font-normal hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
