import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
    const features = [
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
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans mt-32" id="pricing">
            {/* Main Pricing Card */}
            <div className="flex flex-col items-center justify-center px-4 py-8 lg:py-16">
                <div className="w-full max-w-md lg:max-w-lg relative">
                    {/* Limited Time Offer Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-gradient-to-r from-primary/80 to-primary px-4 py-2 rounded-full text-sm font-semibold">
                            Limited Time Offer
                        </div>
                    </div>

                    {/* Main Card */}
                    <div className="bg-card border border-primary rounded-2xl p-6 lg:p-8 relative overflow-hidden">
                        {/* Header */}
                        <div className="mb-6 pt-4">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Special Offer</h2>
                            <span className='line-through decoration-primary text-xl text-muted-foreground'>₹1999</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl lg:text-5xl font-bold">₹299</span>
                                <span className="text-gray-400 text-lg">only</span>
                            </div>
                            <div className="text-primary text-sm mt-1">
                                Worth ₹33,000
                            </div>
                            <div className="bg-primary mt-2 px-3 py-2 rounded-full text-xs font-semibold items-center inline-flex">
                                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                For first 300 students
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm lg:text-base">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* One-time Investment Box */}
                        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 lg:p-6 mb-6">
                            <h3 className="text-xl font-bold text-center mb-3">ONE-TIME INVESTMENT</h3>
                            <p className="text-gray-300 text-sm lg:text-base text-center leading-relaxed mb-4">
                                The Hustlers Campus is a one-time investment. You will have to invest only once and you will get the benefit of it for a
                                lifetime. All the future courses and lectures will be free then.
                            </p>
                            <p className="text-primary text-center font-semibold text-sm lg:text-base">
                                A single investment that can change your life.
                            </p>
                        </div>

                        {/* Register Button */}
                        <Link href="/payment">
                            <button className="w-full bg-gradient-to-r from-primary/80 to-primary text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg">
                                REGISTER NOW
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>

                        {/* Bottom Text */}
                        <p className="text-gray-400 text-center text-sm mt-4">
                            One-time payment • Lifetime access • No hidden fees
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;