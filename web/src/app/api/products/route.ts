import { NextRequest } from "next/server";
const products = [
  {
    id: 1,
    attributes: {
      name: "Royal terroir",
      slug: "royal-terroir",
      price: 13055,
      createdAt: "2023-11-02T17:41:55.641Z",
      updatedAt: "2023-11-02T17:49:22.271Z",
      publishedAt: "2023-11-02T17:41:57.241Z",
      locale: "en",
      image: {
        data: {
          id: 1,
          attributes: {
            url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1698946902/ecommerce/large_498161_wine_bottle_for_ecommerce_xl_1024_v1_0_a745591393.png",
          },
        },
      },
    },
  },
  {
    id: 3,
    attributes: {
      name: "Mary Jane",
      slug: "mary-jane",
      price: 23902,
      createdAt: "2023-11-02T17:50:10.644Z",
      updatedAt: "2023-11-02T17:50:57.936Z",
      publishedAt: "2023-11-02T17:50:12.289Z",
      locale: "en",
      image: {
        data: {
          id: 1,
          attributes: {
            url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1698946902/ecommerce/large_498161_wine_bottle_for_ecommerce_xl_1024_v1_0_a745591393.png",
          },
        },
      },
    },
  },
  {
    id: 5,
    attributes: {
      name: "Santiago",
      price: 4000,
      slug: "santiago",
      createdAt: "2023-11-02T17:52:15.604Z",
      updatedAt: "2023-11-02T17:53:09.906Z",
      publishedAt: "2023-11-02T17:52:34.323Z",
      locale: "en",
      image: {
        data: {
          id: 1,
          attributes: {
            url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1698946902/ecommerce/large_498161_wine_bottle_for_ecommerce_xl_1024_v1_0_a745591393.png",
          },
        },
      },
    },
  },
  {
    id: 7,
    attributes: {
      name: "Magic Valley",
      price: 6000,
      slug:'magic-valley',
      createdAt: "2023-11-02T17:54:37.410Z",
      updatedAt: "2023-11-02T17:55:20.196Z",
      publishedAt: "2023-11-02T17:54:38.828Z",
      locale: "en",
      image: {
        data: {
          id: 1,
          attributes: {
            url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1698946902/ecommerce/large_498161_wine_bottle_for_ecommerce_xl_1024_v1_0_a745591393.png",
          },
        },
      },
    },
  },
  {
    id: 10,
    attributes: {
      name: "Golden Vineyard",
      slug:'golden-vineyard',
      price: 20000,
      createdAt: "2023-11-02T17:41:55.641Z",
      updatedAt: "2023-11-02T17:49:22.271Z",
      publishedAt: "2023-11-02T17:41:57.241Z",
      locale: "es-CL",
      image: {
        data: {
          id: 1,
          attributes: {
            url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1698946902/ecommerce/large_498161_wine_bottle_for_ecommerce_xl_1024_v1_0_a745591393.png",
          },
        },
      },
    },
  },
  {
    id: 20,
    attributes: {
      name: "Silver Mist",
      slug:'silver-mist',
      price: 18000,
      createdAt: "2023-11-02T17:50:10.644Z",
      updatedAt: "2023-11-02T17:50:57.936Z",
      publishedAt: "2023-11-02T17:50:12.289Z",
      locale: "es-CL",
      image: {
        data: {
          id: 1,
          attributes: {
            url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1698946902/ecommerce/large_498161_wine_bottle_for_ecommerce_xl_1024_v1_0_a745591393.png",
          },
        },
      },
    },
  },
  {
    id: 30,
    attributes: {
      name: "Emerald Hills",
      slug:'emerald-hills',
      price: 17000,
      createdAt: "2023-11-02T17:52:15.604Z",
      updatedAt: "2023-11-02T17:53:09.906Z",
      publishedAt: "2023-11-02T17:52:34.323Z",
      locale: "es-CL",
      image: {
        data: {
          id: 1,
          attributes: {
            url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1698946902/ecommerce/large_498161_wine_bottle_for_ecommerce_xl_1024_v1_0_a745591393.png",
          },
        },
      },
    },
  },
  {
    id: 40,
    attributes: {
      name: "Ruby Valley",
      slug:'ruby-valley',
      price: 3500,
      createdAt: "2023-11-02T17:54:37.410Z",
      updatedAt: "2023-11-02T17:55:20.196Z",
      publishedAt: "2023-11-02T17:54:38.828Z",
      locale: "es-CL",
      image: {
        data: {
          id: 1,
          attributes: {
            url: "https://res.cloudinary.com/dxryc5jgr/image/upload/v1698946902/ecommerce/large_498161_wine_bottle_for_ecommerce_xl_1024_v1_0_a745591393.png",
          },
        },
      },
    },
  },
];

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  // console.log(locale);
  if (slug) {
    console.log(slug, "slug");

    return Response.json(
      { data: products.filter((product) => product.attributes.slug == slug) },
      { status: 200 }
    );
  } else {
    return Response.json({ data: products }, { status: 200 });
  }
}
