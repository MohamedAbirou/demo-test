import { FeatureCard, type Feature } from "../FeatureCard";
import { Button } from "../ui/button";

const featureCards: Feature[] = [
  {
    title: "Keep your Mac clean",
    description: "Remove junk, scan for malware, wipe email attachments",
    icon: "/icon-cmm.png.png",
    image: "/cmm-big@2x.png.png",
    bgColor: "bg-[#df96ae]",
    textColor: "text-[#26262b]",
    layout: "horizontal",
  },
  {
    title: "Write code",
    description: "Create applications in more than 25 languages",
    icon: "/icon-coderunner.png.png",
    image: "/coderunner@2x.png.png",
    bgColor: "bg-[#f4f0e4]",
    textColor: "text-[#26262b]",
    layout: "vertical-image-top",
  },
  {
    title: "Join meetings in a click",
    description: "Quickly access links to your meetings from menu bar",
    icon: "/icon-meeter.png.png",
    image: "/meeter@2x.png.png",
    bgColor: "bg-[#384c75]",
    textColor: "text-white",
    layout: "vertical-image-bottom-flush",
  }
];

export const FeaturesSection = () => {
  const firstFeature = featureCards[0];
  const otherFeatures = featureCards.slice(1);

  return (
    <section className="w-full bg-[#26262b] py-16 md:py-24">
      <div className="container-custom">
        <div className="border-t border-neutral-200 pt-16 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-20">
            <div>
              <h2 className="text-4xl font-extrabold text-white tracking-wider">What you get on Setapp.</h2>
            </div>

            <div>
              <p className="body-md text-white font-extralight">
                With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
              </p>
            </div>
          </div>

          <div className="space-y-5 md:space-y-6">
            {/* First feature — full width, horizontal */}
            <FeatureCard feature={firstFeature} />

            {/* Remaining features — 2-column grid on md+ */}
            {otherFeatures.length > 0 && (
              <div
                className={`grid gap-5 md:gap-6 grid-cols-1 ${otherFeatures.length === 1 ? "" : "md:grid-cols-2"
                  } auto-rows-fr`}
              >
                {otherFeatures.map((feature, idx) => (
                  <FeatureCard key={idx} feature={feature} />
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-center mt-16 md:mt-24">
            <Button
              variant="ghost"
              className="relative h-14 rounded-md text-white hover:text-white/90 hover:bg-transparent group"
            >
              <svg
                className="w-7 h-5 mr-2 transition-transform group-hover:translate-x-1"
                fill="currentColor"
                viewBox="0 0 27 21"
              >
                <path d="M13.5 0L27 10.5L13.5 21V12H0V9H13.5V0Z" />
              </svg>
              <span className="text-2xl font-medium tracking-wider">
                View all superpowers
              </span>
            </Button>
          </div>
        </div>

        <div className="border-b border-neutral-400 mt-16 md:mt-24 pt-16 md:pt-24 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-extrabold text-white tracking-wider">Your Setapp journey.</h2>
            </div>

            <div>
              <p className="body-md text-white font-extralight">
                Type in your task into Setapp search and get instant app recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
