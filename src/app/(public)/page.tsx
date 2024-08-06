/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jL9P1CRFAzF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { HomePage } from "@/components/home-page";
import { Awards, Customers, Hero } from "./components";
import { Products } from "./components";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Hero />
        <Products />
        <Awards />
        <Customers />
      </main>
    </div>
  );
}
