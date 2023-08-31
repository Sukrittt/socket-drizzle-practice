import Link from "next/link";
import { Metadata } from "next";

import { Shell } from "@/components/shell";
import { Separator } from "@/components/ui/separator";
import { features, socials, techStack } from "@/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about our project and its key features. Discover the technology stack we used to create this platform and explore the exciting functionalities it offers.",
};

const About = () => {
  return (
    <Shell variant="markdown" className="pt-0 md:py-0 px-0 ">
      <div>
        <div className="grid gap-1">
          <h1 className="line-clamp-1 text-3xl font-bold tracking-tight py-1">
            About
          </h1>
          <p className="text-muted-foreground text-md">
            About the project and the author of the project.
          </p>
        </div>
        <Separator className="my-4" />
        <p className="font-light">
          Discover a new way to connect with our{" "}
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="underline font-medium tracking-tight underline-offset-4"
          >
            Next.js
          </Link>{" "}
          web app. Engage in real-time global chats and video chat rooms,
          bridging distances and fostering instant connections. Join the
          conversation today and break down barriers through seamless online
          interactions.
        </p>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight">
          Tech stack used
        </h1>
        <Separator className="my-2" />
        <ul className="space-y-2 mx-5 mt-2">
          {techStack.map((tech, index) => (
            <li key={index} className="list-disc">
              <Link
                href={tech.url}
                target="_blank"
                className="underline font-medium tracking-tight underline-offset-4"
              >
                {tech.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight">Credits</h1>
        <Separator className="my-2" />
        <ul className="space-y-2 mx-5 mt-2 list-disc">
          <li>
            <Link
              href="https://ui.shadcn.com/"
              target="_blank"
              className="underline font-medium tracking-tight underline-offset-4"
            >
              shadcn/ui
            </Link>{" "}
            - For the awesome reusable components library
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight">Key features</h1>
        <Separator className="my-2" />
        <ul className="space-y-2 mx-5 mt-2">
          {features.map((feature, index) => (
            <li key={index} className="list-disc">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="text-xl font-semibold tracking-tight">
          About the author
        </h1>
        <Separator className="my-2" />
        <ul className="space-y-2 mx-5 mt-2">
          {socials.map((social) => (
            <li key={social.id} className="list-disc">
              <Link
                href={social.href}
                target="_blank"
                className="underline font-medium tracking-tight underline-offset-4"
              >
                {social.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
};

export default About;
