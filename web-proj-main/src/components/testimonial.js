'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Quote, Star } from 'lucide-react';
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const testimonials = [
    {
        text: "I've seen and been through many paid communities, but this one felt different. The amount of value and resources available here makes it worth in lakhs! it so affordable Thank you 🔥",
        image: "https://placehold.co/80x80/E02D87/FFFFFF?text=M&font=Inter",
        name: "Manas",
        role: "Student",
        rating: 5,
    },
    {
        text: "The best and the Greatest Community of Hustlers. Thank you G for the support and value!",
        image: "https://placehold.co/80x80/45424A/FFFFFF?text=S&font=Inter",
        name: "Shreya",
        role: "Student",
        rating: 5,
    },
    {
        text: "This server is definitely worth it to pay. Like getting more than 100x value— The masterclasses are so Amazing 🔥",
        image: "https://placehold.co/80x80/E02D87/FFFFFF?text=R&font=Inter",
        name: "Raja",
        role: "Student",
        rating: 5,
    },
    {
        text: "I loved the recent workshop it is very easy to understand me what to do or not. Nobody till now have explain me and given me like this things. Thank you so much bhaiya",
        image: "https://placehold.co/80x80/45424A/FFFFFF?text=T&font=Inter",
        name: "Tanvi",
        role: "Student",
        rating: 5,
    },
    {
        text: "This Community is beyond amazing. Thank you G for sharing this mind blowing powerful power system. It's life changing.",
        image: "https://placehold.co/80x80/E02D87/FFFFFF?text=A&font=Inter",
        name: "Abhinav",
        role: "Student",
        rating: 5,
    },
    {
        text: "Amazing! Finally some original and valuable masterclass. Thanks for putting your time in it 🔥 I'm glad the partner recommended me your community!",
        image: "https://placehold.co/80x80/45424A/FFFFFF?text=S&font=Inter",
        name: "Shivam",
        role: "Student",
        rating: 5,
    },
    {
        text: "I've seen and been through many paid communities, but this one felt different. The amount of value and resources available here makes it worth in lakhs! I you kept it so affordable. Greatest one indeed! 🔥",
        image: "https://placehold.co/80x80/45424A/FFFFFF?text=S&font=Inter",
        name: "Shayan",
        role: "Student",
        rating: 5,
    },
    {
        text: "Joining this community has been one of the best investments of my life!",
        image: "https://placehold.co/80x80/45424A/FFFFFF?text=S&font=Inter",
        name: "Shruti",
        role: "Student",
        rating: 5,
    },
];


const TestimonialCard = ({ text, image, name, role, rating }) => {
    return (
        <div className={cn(
            "p-6 md:p-8 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-xl shadow-primary/5",
            "w-full max-w-sm flex flex-col justify-between min-h-[280px]"
        )} id="wins">
            <div>
                <Quote className="w-8 h-8 text-primary/70 mb-4 transform -scale-x-100" />
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-6 italic">
                    "{text}"
                </p>
            </div>
            <div className="mt-auto">
                {rating && (
                    <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={cn(
                                    "w-5 h-5",
                                    i < rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground/50"
                                )}
                            />
                        ))}
                    </div>
                )}
                <div className="flex items-center gap-4">
                    <img
                        width={56}
                        height={56}
                        src={image}
                        alt={name}
                        className="h-14 w-14 rounded-full border-2 border-primary/50 object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/3A3A3A/FFFFFF?text=??&font=Inter'; }}
                    />
                    <div className="flex flex-col">
                        <div className="font-bold text-lg tracking-tight text-foreground">{name}</div>
                        <div className="text-sm text-primary font-medium tracking-wide">{role}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const TestimonialColumn = ({
    className,
    testimonials: columnTestimonials,
    duration = 20,
    reverse = false,
}) => {
    return (
        <div className={cn("relative overflow-hidden h-full", className)}>
            <motion.div
                initial={{ translateY: reverse ? "-50%" : "0%" }}
                animate={{ translateY: reverse ? "0%" : "-50%" }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >

                {[...columnTestimonials, ...columnTestimonials].map((testimonial, index) => (
                    <TestimonialCard
                        key={`${testimonial.name}-${index}`}
                        text={testimonial.text}
                        image={testimonial.image}
                        name={testimonial.name}
                        role={testimonial.role}
                        rating={testimonial.rating}
                    />
                ))}
            </motion.div>
        </div>
    );
};



export const Testimonials = () => {

    const numColumns = 3;
    const testimonialsPerColumn = Math.ceil(testimonials.length / numColumns);
    const columns = Array.from({ length: numColumns }, (_, i) =>
        testimonials.slice(i * testimonialsPerColumn, (i + 1) * testimonialsPerColumn)
    );


    const durations = [25, 30, 28];

    const sectionAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
        },
    };

    const titleAnimation = {
        hidden: { opacity: 0, y: -30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 },
        },
    };

    return (
        <motion.section
            className="py-24 md:py-32 bg-background text-foreground overflow-hidden max-w-300 m-auto"
            variants={sectionAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-16 md:mb-20"
                    variants={titleAnimation}
                >
                    <span className="inline-block px-5 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider mb-4 border border-primary/20">
                        Student Wins
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground uppercase leading-tight">
                        OUR STUDENTS ARE <span>WINNING!</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl mx-auto">
                        This community is now more than an year old, our students have completely changed their lives being a part.
                    </p>
                </motion.div>


                <div className={cn(
                    "relative flex justify-center gap-6 max-h-[70vh] md:max-h-[800px] overflow-hidden",
                    "[mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]"
                )}>
                    {columns.map((columnTestimonials, index) => (
                        <TestimonialColumn
                            key={index}
                            testimonials={columnTestimonials}
                            duration={durations[index % durations.length]}
                            reverse={index === 1}
                            className={cn(
                                "w-full md:w-[calc(33.333%-1rem)] flex justify-center",
                                { 'hidden md:flex': index > 0 && index < 2 },
                                { 'hidden lg:flex': index >= 2 }
                            )}
                        />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};