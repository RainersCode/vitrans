import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import CtaBanner2 from "@/components/sections/CtaBanner2";
import Hero3 from "@/components/sections/Hero3";
import Project2 from "@/components/sections/Project2";
import Service2 from "@/components/sections/Service2";
import Testimonial2 from "@/components/sections/Testimonial2";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="">
        <Hero3 />
        <About2 />
        <Service2 />
        <Project2 />
        <CtaBanner2 />
        <Testimonial2 />
        <Pricing />
        <Faq />
        <Contact />
      </Layout>
    </>
  );
}
