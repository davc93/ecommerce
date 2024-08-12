import React from "react";

export const Products = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Exquisite Wine Varieties
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our carefully curated selection of premium wines, each
              with its own unique flavor profile and story.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="group grid gap-4">
            <img
              src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_scale,q_60,w_500/v1723493601/583075_cabernet_sauvignon_wine__xl-1024-v1-0_snw3sj.webp"
              width="400"
              height="400"
              alt="Wine 1"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Cabernet Sauvignon</h3>
              <p className="text-muted-foreground">
                A bold and full-bodied red wine with notes of black cherry,
                cassis, and toasted oak.
              </p>
            </div>
          </div>
          <div className="group grid gap-4">
            <img
              src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_scale,q_60,w_500/v1723493847/719859_chardonnay_wine__xl-1024-v1-0_hxiics.webp"
              width="400"
              height="400"
              alt="Wine 2"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Chardonnay</h3>
              <p className="text-muted-foreground">
                A crisp and refreshing white wine with flavors of green apple,
                citrus, and a touch of vanilla.
              </p>
            </div>
          </div>
          <div className="group grid gap-4">
            <img
              src="https://res.cloudinary.com/dxryc5jgr/image/upload/c_scale,q_60,w_500/v1723493723/178859_pinot_noir_wine__xl-1024-v1-0_o7xin2.webp"
              width="400"
              height="400"
              alt="Wine 3"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center group-hover:scale-105 transition-transform"
            />
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Pinot Noir</h3>
              <p className="text-muted-foreground">
                A light and elegant red wine with notes of red berries, earthy
                mushrooms, and a silky texture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
