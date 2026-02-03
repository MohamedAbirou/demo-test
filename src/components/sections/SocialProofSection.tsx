import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";

const slides = [
  {
    id: 1,
    title: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    image: "/images/image-67.png",
    bgColor: "bg-[#765070]",
    videoPreview: "/images/div-video-preview--image-container.svg",
  },
  {
    id: 2,
    title: "Designers use Setapp to streamline their creative workflow and focus on what matters most.",
    author: "Sarah Johnson",
    image: "/images/image-67.png",
    bgColor: "bg-[#4a6fa5]",
    videoPreview: "/images/div-video-preview--image-container.svg",
  },
  {
    id: 3,
    title: "Developers rely on Setapp to access the best tools without the subscription fatigue.",
    author: "Mike Chen",
    image: "/images/image-67.png",
    bgColor: "bg-[#d9ae89]",
    videoPreview: "/images/div-video-preview--image-container.svg",
  },
  {
    id: 4,
    title: "Content creators trust Setapp to manage their ever-growing toolkit efficiently.",
    author: "Emma Williams",
    image: "/images/image-67.png",
    bgColor: "bg-[#6b8e7f]",
    videoPreview: "/images/div-video-preview--image-container.svg",
  },
];

export const SocialProofSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="relative w-full bg-[linear-gradient(to_bottom,#26262b_50%,#fefefe_50%)] py-16">
      <div className="container">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <Card className={`relative ${slide.bgColor} rounded-3xl overflow-hidden border-0`}>
                  <CardContent className="p-0">
                    <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[720px]">
                      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative z-10 flex flex-col justify-center px-8 md:px-12 lg:px-20">
                          <p className="text-xl md:text-2xl font-medium text-white mb-6">
                            {slide.title}
                          </p>

                          <p className="text-base text-white font-extralight">
                            {slide.author}
                          </p>

                          <div className="flex items-start mt-28">
                            <button className="w-16 h-16 rounded-full bg-white hover:bg-white/80 transition-colors flex items-center justify-center">
                              <svg className="w-6 h-6 text-[#9D9CA2] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="absolute right-0 bottom-0 hidden lg:flex items-center justify-center">
                          <img
                            className="w-full max-w-[670px] h-auto object-cover"
                            alt={slide.author}
                            src={slide.image}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute top-8 right-8 md:top-12 md:right-12 flex gap-2 z-20">
            <CarouselPrevious className="static translate-y-0 bg-white/10 hover:bg-white/20 border-0 text-white" />
            <CarouselNext className="static translate-y-0 bg-white/10 hover:bg-white/20 border-0 text-white" />
          </div>
        </Carousel>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`carousel-dot ${current === index ? "carousel-dot-active" : "carousel-dot-inactive"
                }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
