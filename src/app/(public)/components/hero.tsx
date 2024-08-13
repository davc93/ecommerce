"use client";
import { ContactModal } from "@/components/contact-modal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  // const scrollRef = useRef(null);
  return (
    <section className="w-full pb-12 md:pb-24 lg:pb-32">
      <div  className="container px-4 md:px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0,x:200 }}
          whileInView={{ opacity: 1,x:0 }}
          viewport={{
            once:true
          }}
          transition={{
            type:'spring'
          }}
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
        >
          <img
            src="https://res.cloudinary.com/dxryc5jgr/image/upload/q_60/v1723493169/73720_a_table_with_wines_in_a_winery__xl-1024-v1-0_igqj6j.webp"
            width="550"
            height="550"
            alt="Hero"
            className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover the Art of Winemaking
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore our exquisite selection of premium wines, crafted with
                passion and expertise.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/products"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Shop Wines
              </Link>
              <ContactModal
                triggerElement={<Button variant="outline">Contact us</Button>}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
