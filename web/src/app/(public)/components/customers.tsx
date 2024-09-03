/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

export const Customers = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Customers Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about their experience with our
              wines and our winery.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="group grid gap-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-muted-foreground">
                  "The Cabernet Sauvignon from Acme Winery is truly\n
                  exceptional. It's become my go-to wine for special\n
                  occasions."
                </p>
              </div>
            </div>
          </div>
          <div className="group grid gap-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold">Jane Appleseed</h3>
                <p className="text-muted-foreground">
                  "I've been a loyal customer of Acme Winery for years.\n Their
                  wines never disappoint, and the customer service\n is
                  top-notch."
                </p>
              </div>
            </div>
          </div>
          <div className="group grid gap-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold">Tom Smith</h3>
                <p className="text-muted-foreground">
                  "The Chardonnay from Acme Winery is simply divine. It's\n
                  become a staple in my wine collection."
                </p>
              </div>
            </div>
          </div>
          <div className="group grid gap-4">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold">Sarah Anderson</h3>
                <p className="text-muted-foreground">
                  "I'm always impressed by the quality and consistency of\n Acme
                  Winery's wines. They truly are a cut above the\n rest."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
