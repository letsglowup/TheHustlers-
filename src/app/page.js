"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import { Testimonials } from "@/components/testimonial";
import About from "@/components/about";
import { ContactUs } from "@/components/contact";
import Loader from "@/components/loader";
import Benifits from "@/components/benifits";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";
import Counter from "@/components/counter";
import Lastchance from "@/components/lastchance";
import SixMonthsFocus from "@/components/sixmons";
import Quote from "@/components/quote";
import { useEffect, useState } from "react";

export default function Home() {

  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return !animationFinished ? <Loader /> : (
    <>
      <div className="pt-12">
        <Navbar />
        <Hero />
        <Quote />
        <About />
        <Testimonials />
        <Lastchance />
        <SixMonthsFocus />
        <Benifits />
        <Pricing />
        <Counter />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
