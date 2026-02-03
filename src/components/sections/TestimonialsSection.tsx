import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem
} from "../ui/carousel";

const testimonials = [
  {
    quote:
      "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    author: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    bgColor: "bg-[#71719a]",
    socialIcon: "/div-testimonial-card--social-icon-1.svg",
  },
  {
    quote:
      "My favorites ❤ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    author: "Mauricio Sanchez",
    handle: "@m741s",
    bgColor: "bg-[#d9ae89]",
    socialIcon: "/div-testimonial-card--social-icon.svg",
  },
  {
    quote:
      "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    author: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    bgColor: "bg-[#765070]",
    socialIcon: "/div-testimonial-card--social-icon-2.svg",
  },
  {
    quote:
      "Setapp is a game-changer for Mac users. Access to hundreds of apps for one monthly fee is incredible value.",
    author: "David Martinez",
    handle: "@davidm",
    bgColor: "bg-[#4a6fa5]",
    socialIcon: "/div-testimonial-card--social-icon.svg",
  },
  {
    quote:
      "I've saved so much money by switching to Setapp. No more individual app subscriptions!",
    author: "Sophie Chen",
    handle: "@sophiechen",
    bgColor: "bg-[#6b8e7f]",
    socialIcon: "/div-testimonial-card--social-icon-1.svg",
  },
  {
    quote:
      "The variety of apps available on Setapp is impressive. There's something for every task.",
    author: "Alex Thompson",
    handle: "@alexthompson",
    bgColor: "bg-[#c77b8d]",
    socialIcon: "/div-testimonial-card--social-icon-2.svg",
  },
];

export const TestimonialsSection = () => {
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
    // Jump to the first slide of that group
    api?.scrollTo(index * 3);
  };

  const totalDots = Math.ceil(testimonials.length / 3);

  return (
    <section className="w-full bg-[#FEFEFE] py-16 md:py-24">
      <div className="container-custom">
        <div className="flex items-center justify-between flex-wrap gap-6 md:gap-8 mb-12 md:mb-16">
          <h2 className="text-4xl font-extrabold text-[#26262b] tracking-wider">
            Setapp in your words.
          </h2>

          <p className="body-lg text-[#26262b] line-clamp-2">
            What you say about how Setapp powers you up.
          </p>

          <div className="flex items-center gap-3">
            <img src="/Facebook.png" className="w-12 h-12" alt="facebook" />
            <img src="/Twitter.png" className="w-12 h-12" alt="twitter" />
            <img src="/Instagram.png" className="w-12 h-12" alt="instagram" />
            <img src="/Youtube.png" className="w-12 h-12" alt="youtube" />
          </div>

        </div>
        <div className="md:col-span-3 flex items-center justify-start md:justify-end mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-gray-400 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-neutral-100 rounded-2xl border-0 shadow-none h-full">
                  <CardContent className="p-2 relative flex flex-col h-full min-h-[420px]">
                    <div
                      className={`flex items-start p-6 flex-1 ${testimonial.bgColor} rounded-xl mb-24`}
                    >
                      <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between px-4">
                      <div className="flex flex-col">
                        <p className="text-lg font-bold text-[#26262b]">
                          {testimonial.author}
                        </p>
                        <p className="text-sm font-bold text-[#9f9f9f]">
                          {testimonial.handle}
                        </p>
                      </div>

                      <img
                        className="w-auto h-8"
                        alt="Social media icon"
                        src={testimonial.socialIcon}
                      />
                    </div>

                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="carousel-dots">
          {Array.from({ length: totalDots }).map((_, index) => {
            const isActive = Math.floor(current / 3) === index;

            return (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`carousel-dot ${isActive
                  ? "carousel-dot-active"
                  : "carousel-dot-inactive"
                  }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />

            )
          }
          )}
        </div>
      </div>
    </section>
  );
};
