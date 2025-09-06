import React from "react";
import type { Route } from "./+types/hackathons";
import Layout from "../components/layout/Layout";
import HackathonHero from "~/components/layout/HackthonHero";
import HackathonIntro from "~/components/layout/HackthonIntro";
import HackthonCaro from "~/components/layout/HackthonCaro";
import HackathonAbout from "~/components/layout/HackthonAbout";
import HackathonResource from "~/components/layout/HackthonResource";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Hackathons - Abhyudaya" },
    { name: "description", content: "Join our exciting hackathons and showcase your coding skills." },
  ];
}

export default function Hackathons() {
  // Provide a background image as required by HackathonHeroProps
  const backgroundImage =
    // "https://hackclub.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fassemble.7af1c0cb.jpg&w=1920&q=75";
    // "https://abhyudaya-svvv.vercel.app/Club.JPG?&text=Club+Team";
    "https://res.cloudinary.com/djtagt9xw/image/upload/v1756979790/WhatsApp_Image_2025-09-04_at_15.22.32_0a943df8_cqpfw0.jpg";
    return (
      <Layout>
        <HackathonHero backgroundImage={backgroundImage} />

        <HackathonIntro/>

        <HackthonCaro />

        <HackathonAbout />

        <HackathonResource />
      </Layout>
  );
}

