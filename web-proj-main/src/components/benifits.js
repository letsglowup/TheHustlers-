import { ArrowRight } from 'lucide-react';
import React from 'react'
import Link from 'next/link';

const CheckMark = () => (
    <span className="bg-primary/30 size-6 rounded-full flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-glow-red">
            <path d="M20 6 9 17l-5-5"></path>
        </svg>
    </span>
)

export default function Benifits() {
    const benefitsList = [
        "The Project Millionaire Access",
        "Money Making secret strategies",
        "Unlimited access to all premium guides",
        "Weekly masterclasses with experts",
        "Private community access",
        "Lifetime updates to all Workshops",
        "Future courses included FREE",
        "Personalized growth roadmap",
        "Master Communication Skills",
        "High Value Session by Professors",
        "Master Looksmaxxing by Pro Experts",
        "Master Video Editing Skills"
    ];

    return (
        <>
            <div id="features"></div>
            <div className="flex flex-col items-center justify-center p-4">
                <span className="inline-block px-5 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider mb-4 border border-primary/20">
                    Features
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground uppercase leading-tight mb-4">
                    <span>
                        what you will get?
                    </span>
                </h2>
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mx-auto text-left max-w-2xl lg:max-w-4xl">
                    {benefitsList.map((benefit, idx) => (
                        <div key={idx} className="flex gap-2">
                            <CheckMark />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>
                <Link href="/payment" className='mt-8 lg:mt-12'>
                    <button className="w-full bg-gradient-to-r from-primary/80 to-primary text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-md md:text-lg">
                        BECOME A MEMBER NOW
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </>
    )
}
