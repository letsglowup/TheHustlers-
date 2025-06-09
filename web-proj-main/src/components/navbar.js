"use client";

import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { ChevronUp } from 'lucide-react';
import { Menu } from 'lucide-react'
import TopTimer from './top-timer'
import { Dock, DockIcon, DockLink } from "@/components/magicui/dock";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { motion } from 'framer-motion'

const links = [
    { href: "#about", label: "About" },
    { href: "#wins", label: "Wins" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
]

const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.4,
            ease: "easeOut",
        }
    })
}

export default function Navbar() {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed z-999 top-0 w-full bg-black/10 backdrop-blur backdrop-saturate-150"
        >
            <TopTimer />
            <nav className="px-3 py-2 lg:py-3 lg:px-4 max-w-7xl m-auto flex items-center justify-start">
                <Link href="/">
                    <Image
                        height={500}
                        width={1195}
                        alt='logo'
                        className='h-12 lg:h-14 w-auto'
                        src="/logo.png"
                    />
                </Link>
                <div className="flex-1 flex items-center justify-center">
                    <Dock direction="middle" className="bg-card px-4 hidden sm:flex">
                        {links.map((link) => <DockLink key={link.href} href={link.href}>{link.label}</DockLink>)}
                    </Dock>
                </div>
                <Link href="/payment" className='hidden sm:block'>
                    <Button className="bg-foreground text-background hover:bg-foreground/90 hover:text-background">Purchase Now</Button>
                </Link>
                <div className='sm:hidden'>
                    <Drawer direction="top">
                        <DrawerTrigger asChild>
                            <Menu />
                        </DrawerTrigger>
                        <DrawerContent className="z-1000 bg-card">
                            <DrawerHeader>
                                <DrawerTitle className="text-primary uppercase">The Hustlers Campus</DrawerTitle>
                            </DrawerHeader>
                            <DrawerDescription className="hidden">India's Largest Community for Hustlers.</DrawerDescription>
                            <div className="flex flex-col gap-4 px-6 py-4">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        custom={index}
                                        initial="hidden"
                                        animate="visible"
                                        variants={itemVariants}
                                    >
                                        <DrawerClose asChild>
                                            <Link href={link.href} className="text-2xl font-medium hover:text-primary focus:text-primary transition-colors">
                                                {link.label}
                                            </Link>
                                        </DrawerClose>
                                    </motion.div>
                                ))}
                            </div>
                            <DrawerFooter>
                                <DrawerClose className="flex items-center justify-center"><ChevronUp /></DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </nav>
        </motion.div>
    )
}