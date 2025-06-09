"use client";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import React from 'react'
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div
            className='mb-8 sm:mb-18 md:mb-24 lg:mb-32' id="about">
            {/* Title Section - Fades up first */}
            <motion.div
                className="flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <span className="inline-block px-5 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider mb-4 border border-primary/20">
                    About Us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground uppercase leading-tight">
                    <span>
                        Who are we?
                    </span>
                </h2>
            </motion.div>

            {/* Content Section - Fades up after title */}
            <motion.div
                className="flex flex-col lg:flex-row gap-8 my-8 p-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                    <div className="bg-primary/10 p-4 py-6 shadow-glow-md w-full max-w-140">
                        <h2 className='text-3xl mb-4 font-semibold text-center'>Our Mission</h2>
                        <p className='text-center mb-4'><span className='text-primary font-semibold'>The Hustlers Campus</span> Is a brand established with love! As the leader. Our Aim is to provide most Premium Education in a fair and reasonable price.
                        </p>
                        <AnimatedShinyText className="border rounded-full inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                            <span>🔥 <span className="text-yellow-400">The project Millionaire Sessions comming soon.</span> </span>
                        </AnimatedShinyText>
                        <div className="mt-8 flex items-center justify-center">
                            <Link href="/payment">
                                <Button className="p-6 text-lg">Build a God-Like Aura 🔥</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-center">
                    <div className="bg-card border rounded-lg p-4 w-full max-w-140">
                        <h2 className='text-2xl text-primary mb-4 font-semibold text-center'>Expert Guidance</h2>
                        <p className='text-center mb-4 text-muted-foreground'>
                            Learn from industry professionals with real-world experience and proven success.
                        </p>
                    </div>
                    <div className="bg-card border rounded-lg p-4 w-full max-w-140">
                        <h2 className='text-2xl text-primary mb-4 font-semibold text-center'>Comprehensive Program</h2>
                        <p className='text-center mb-4 text-muted-foreground'>
                            Our curriculum covers everything you need to succeed with practical, actionable insights.
                        </p>
                    </div>
                    <div className="bg-card border rounded-lg p-4 w-full max-w-140">
                        <h2 className='text-2xl text-primary mb-4 font-semibold text-center'>Supportive Community</h2>
                        <p className='text-center mb-4 text-muted-foreground'>
                            Join a network of like-minded individuals on the same journey to excellence.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}