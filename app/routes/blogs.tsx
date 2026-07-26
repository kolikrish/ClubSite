import type { Route } from "./+types/projects";
import Layout from "../components/layout/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Abhyudaya" }
  ];
}

export default function Blogs(){
    return(
        <Layout>
            <div>
              
            </div>
        </Layout>
    )
}

