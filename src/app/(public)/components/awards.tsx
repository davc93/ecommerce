import { ContactModal } from "@/components/contact-modal";
import Link from "next/link";
import React from "react";

export const Awards = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our Winemaking Legacy
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              For over a century, our family-owned winery has been dedicated to
              crafting exceptional wines that capture the essence of our
              terroir. Our commitment to quality and sustainability has earned
              us numerous awards and accolades.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <ContactModal
                triggerElement={
                  <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Learn More
                  </button>
                }
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_scale,w_100/v1723494007/703691_Best_Winery_of_the_Year_award_logo__xl-1024-v1-0_b6tbxg.webp"
                width="80"
                height="80"
                alt="Award 1"
                className="aspect-square overflow-hidden rounded-xl object-cover object-center"
              />
              <div>
                <h3 className="text-xl font-bold">Best Winery of the Year</h3>
                <p className="text-muted-foreground">
                  Awarded by Wine Enthusiast Magazine
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_scale,q_60,w_100/v1723494127/414071_Award_logo_of_Organic_Farming_Association__xl-1024-v1-0_ub1rbu.webp"
                width="80"
                height="80"
                alt="Award 2"
                className="aspect-square overflow-hidden rounded-xl object-cover object-center"
              />
              <div>
                <h3 className="text-xl font-bold">
                  Sustainable Winery of the Year
                </h3>
                <p className="text-muted-foreground">
                  Awarded by Organic Farming Association
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_scale,q_60,w_100/v1723494236/764735_Award_logo_of_Best_Cabernet_Sauvignon__xl-1024-v1-0_saoaw3.webp"
                width="80"
                height="80"
                alt="Award 3"
                className="aspect-square overflow-hidden rounded-xl object-cover object-center"
              />
              <div>
                <h3 className="text-xl font-bold">Best Cabernet Sauvignon</h3>
                <p className="text-muted-foreground">
                  Awarded by Wine Spectator
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
