import React from "react";
import type { Route } from "./+types/events";
import Layout from "../components/layout/Layout";
import Workshop from '../components/layout/Workshop';
import Page9 from "~/components/sections/Page9";
import Page10 from "~/components/sections/Page10";
import Page11 from "~/components/sections/Page11";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Events - Abhyudaya" },
    { name: "description", content: "Join our events and workshops." },
  ];
}

export default function Events() {
    return (
       <Layout>
        <Workshop/>
        <Page9/>
        <Page10/>
        <Page11/>
       </Layout>
    )
}

