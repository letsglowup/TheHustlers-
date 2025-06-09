'use client';

import React from 'react'
import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail, Send, Heart, Dot } from "lucide-react";
import Link from 'next/link';

const CheckMark = () => (
    <span className="bg-primary/30 size-6 rounded-full flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-glow-red">
            <path d="M20 6 9 17l-5-5"></path>
        </svg>
    </span>
)

const IconHolder = ({ children }) => {
    return <motion.div
        className="p-2 rounded-full bg-primary/10 border border-primary/20 group"
        whileHover={{
            backgroundColor: "hsl(var(--primary))",
            borderColor: "hsl(var(--primary))",
            scale: 1.05
        }}
        transition={{ duration: 0.15 }}
    >
        {children}
    </motion.div>
}

const QuickLinkItem = ({ text, link = "#" }) => {
    return (
        <Link href={link}>
            <div className="flex items-center text-muted-foreground text-md hover:translate-x-2 hover:text-foreground transition-all duration-150 cursor-pointer">
                <Dot className="text-primary" />
                {text}
            </div>
        </Link>
    )
}

export default function Footer() {

    return (
        <div className="flex flex-col items-center justify-center p-6 lg:p-12 xl:px-26 bg-gradient-to-br from-primary/8 to-primary/15 border-t border-primary/20 overflow-x-hidden">

            <div className="flex flex-col md:flex-row w-full justify-between gap-4 items-center md:items-start md:pb-6">
                <div className="flex flex-col w-70 md:w-auto gap-4 pb-6">
                    <div className="uppercase font-bold text-xl sm:text-2xl cursor-pointer origin-left hover:scale-102 transition-all duration-150"
                        onClick={() => window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        })}>
                        <span className="text-primary">The Hustlers</span> Campus
                    </div>
                    <div className="text-muted-foreground max-w-75">
                        Transform your life with practical skills and expert guidance at The Hustlers Campus.
                    </div>
                    <div className="flex gap-2 md:gap-3 lg:gap-4">
                        {/* <IconHolder>
                            <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-150" />
                        </IconHolder>
                        <IconHolder>
                            <Twitter className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-150" />
                        </IconHolder>
                        <IconHolder>
                            <Facebook className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-150" />
                        </IconHolder> */}
                        <Link href="mailto:smartstoriesig@gmail.com" target="_blank">
                            <IconHolder>
                                <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-150" />
                            </IconHolder>
                        </Link>
                        <Link href="https://t.me/smartstoriesyt" target="_blank">
                            <IconHolder>
                                <Send className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-150" />
                            </IconHolder>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-70 md:w-auto gap-2 pb-6">
                    <div className="flex items-center gap-4 font-semibold text-lg">
                        Quick Links
                        <div className="w-15 h-[1.5px] bg-gradient-to-r from-primary to-primary/0" />
                    </div>
                    <QuickLinkItem text="Home" link="#home" />
                    <QuickLinkItem text="Wins" link="#wins" />
                    <QuickLinkItem text="About" link="#about" />
                    <QuickLinkItem text="Features" link="#features" />
                    <QuickLinkItem text="Pricing" link="#pricing" />
                    <QuickLinkItem text="Purchase" link="/payment" />
                </div>
                <div className="flex flex-col w-70 md:w-auto gap-4 pb-6 lg:pr-10">
                    <div className="flex items-center gap-4 font-semibold text-lg">
                        Contact Us
                        <div className="w-15 h-[1.5px] bg-gradient-to-r from-primary to-primary/0" />
                    </div>
                    <Link href="mailto:smartstoriesig@gmail.com" target="_blank">
                        <div className="flex items-center gap-2 text-muted-foreground text-md group hover:translate-x-2 hover:text-foreground transition-all duration-150 cursor-pointer">
                            <Mail className="w-5 h-5 text-primary group-hover:scale-120 group-hover:text-primary/80 transition-all duration-150" />
                            smartstoriesig@gmail.com
                        </div>
                    </Link>
                    <Link href="https://t.me/smartstoriesyt" target="_blank">
                        <div className="flex items-center gap-2 text-muted-foreground text-md group hover:translate-x-2 hover:text-foreground transition-all duration-150 cursor-pointer">
                            <Send className="w-5 h-5 text-primary group-hover:scale-120 group-hover:text-primary/80 transition-all duration-150" />
                            @smartstoriesyt
                        </div>
                    </Link>
                </div>
            </div>
            <div className="flex w-full justify-between border-t border-primary/20 pt-4 flex-wrap gap-3">
                <div className="text-sm text-muted-foreground">
                    &copy; 2025 The Hustlers Campus. All rights reserved.
                </div>
                <div className="flex items-center text-sm text-muted-foreground gap-1 group cursor-default">
                    Made with
                    <Heart className="w-4 h-4 text-primary group-hover:scale-110 transition-all duration-150" />
                    for achievers
                </div>
            </div>
        </div>
    )
}
