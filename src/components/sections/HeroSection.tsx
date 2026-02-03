import { Button } from "../ui/button";

const floatingIcons = [
  { src: "/images/teamwork-svg.png", className: "top-[60%] left-[7%] hidden lg:block" },
  { src: "/images/secure-svg.png", className: "top-[74%] left-[7%] hidden lg:block" },
  { src: "/images/pics-svg.png", className: "top-[5%] left-[7%] hidden lg:block" },
  { src: "/images/macpaw-svg.png", className: "top-[27%] left-[7%] hidden md:block" },
  { src: "/images/pdf-svg.png", className: "top-[27%] left-[14%] hidden xl:block" },
  { src: "/images/wifi-svg.png", className: "top-[8%] right-[7%] hidden lg:block" },
  { src: "/images/plan-svg.png", className: "top-[19%] right-[15%] hidden xl:block" },
  { src: "/images/manage-svg.png", className: "top-[60%] right-[11%] hidden lg:block" },
  { src: "/images/converter-svg.png", className: "top-[42%] right-[7%] hidden xl:block" },
  { src: "/images/code-svg.png", className: "top-[78%] right-[13%] hidden lg:block" },
];

const socialLinks = [
  { src: "/images/link-1.svg", alt: "Apple App Store" },
  { src: "/images/link-2.svg", alt: "Google Play Store" },
];

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#26262b] py-24 md:py-32 lg:py-40 px-4 overflow-hidden">
      <div className="container relative">
        <div className="relative max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <img
              className="w-32 h-32 md:w-40 md:h-40"
              alt="Setapp 15th Birthday"
              src="/images/setapp-icon-birthday-15-svg.svg"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-12 leading-tight tracking-tight">
            Dozens of apps.
            <br />
            One subscription.
            <br />
            $9.99
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-8">
            <Button className="bg-white text-[#26262b] hover:bg-white/90 px-8 h-14 rounded-md font-normal text-base tracking-wide">
              Try free for 7 days
            </Button>

            <div className="flex items-center gap-5">
              {socialLinks.map((link, index) => (
                <a key={index} href="#" className="block">
                  <img
                    className="h-14 w-auto"
                    alt={link.alt}
                    src={link.src}
                  />
                </a>
              ))}
            </div>
          </div>

          <p className="text-lg text-white text-center leading-relaxed max-w-md mx-auto">
            Power up your workflow with Setapp, a
            <br className="hidden sm:block" />
            smart way to get apps.
          </p>

        </div>
          {floatingIcons.map((icon, index) => (
            <img
              key={index}
              className={`absolute ${icon.className}`}
              alt={`Floating icon ${index + 1}`}
              src={icon.src}
            />
          ))}
      </div>
    </section>
  );
};
