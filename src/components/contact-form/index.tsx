/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R1hAQBaKpSN
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { IconInstagram, IconLinkedin, IconTwitter } from "../icons";
IconInstagram;
export function ContactForm() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Connect with us</h2>
          <p className="text-muted-foreground">
            Follow us on social media to stay up to date with our latest news
            and updates.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <IconTwitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <IconLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              prefetch={false}
            >
              <IconInstagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="text-muted-foreground">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[120px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
