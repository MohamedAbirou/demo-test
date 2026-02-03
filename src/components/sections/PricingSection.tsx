import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const PricingSection = () => {
  return (
    <section className="flex w-full items-center justify-center py-8 md:py-5 px-4 relative bg-[linear-gradient(to_top,#2b2d32_50%,#fefefe_50%)]">
      <Card className="w-full max-w-7xl bg-neutral-100 rounded-3xl border-0 overflow-hidden">
        <CardContent className="p-8 md:p-16 lg:p-24">
          <div className="flex flex-col items-start max-w-3xl">
            <img
              className="w-16 h-24 md:w-20 md:h-32 mb-8"
              alt="Setapp logo"
              src="/images/setapp-logo-svg.svg"
            />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#26262b] tracking-tight leading-tight mb-8 md:mb-12">
              Superpowers starting $9.99/month.
              <br />
              Free for 7 days.
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
              <Button className="bg-[#26262b] hover:bg-[#26262b]/90 text-white px-8 py-3 rounded-md text-base font-normal tracking-wide">
                Get started now
              </Button>

              <Button
                variant="outline"
                className="rounded-md border border-[#26262b] bg-transparent hover:bg-[#26262b]/5 text-[#26262b] px-8 py-3 text-base font-normal tracking-wide"
              >
                More about Setapp
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
