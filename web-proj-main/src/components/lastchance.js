import React from 'react'
import Image from 'next/image'
import { KeyRound } from 'lucide-react'
import { Crown } from 'lucide-react'

export default function Lastchance() {
    return (
        <div className='flex flex-col-reverse items-center justify-center p-4 gap-8 max-w-280 m-auto lg:flex-row mb-8 sm:mb-18 md:mb-24 lg:mb-32'>
            <div className='flex-1'>
                <p className='text-foreground/90'>YOU MUST UNDERSTAND !</p>
                <h2 className='text-2xl lg:text-3xl border-yellow-400 border-b-3 font-black inline-block mb-2'>2025 IS YOUR LAST CHANCE</h2>
                <div className="lg:text-lg flex flex-col gap-4 mt-2 text-muted-foreground">
                    <p>The world will change forever in 2025. They are developing more ways to <span className='font-semibold'>trap you.</span></p>
                    <p className='font-semibold'>What have you been doing to prepare?</p>
                    <p>The <span className='font-semibold'>BEST DECISION</span> of your life will be this, it doesn't matter who you are, and whats your origin.</p>
                    <p className='font-semibold'>WE GATEKEEP NOTHING! </p>
                    <p>You must understand, it's now or never.</p>
                </div>
                <div className='flex justify-self-center gap-4 mt-4 flex-col sm:flex-row max-w-180'>
                    <div className='p-4 border-2 rounded-xl border-primary'>
                        <h1 className='flex items-center text-lg lg:text-xl font-semibold gap-2 mb-2 text-primary'>
                            <KeyRound /> Secret Strategies
                        </h1>
                        <p className='text-foreground/80'>Start your Money Making Journey with the best strategies that are being tested 24/7</p>
                    </div>
                    <div className='p-4 border-2 rounded-xl border-primary'>
                        <h1 className='flex items-center text-lg lg:text-xl font-semibold gap-2 mb-2 text-primary'>
                            <Crown /> King Of Mindset
                        </h1>
                        <p className='text-foreground/80'>The Hustlers Campus will completely transform the way you think. Build a God like Aura in 7 Days!</p>
                    </div>
                </div>
            </div>
            <div className='flex-1 rounded-lg overflow-hidden w-full max-w-120'>
                <Image
                    height={1000}
                    width={1000}
                    alt="last chance image"
                    src="/king.jpg"
                    className="w-full"
                />
            </div>
        </div>
    )
}