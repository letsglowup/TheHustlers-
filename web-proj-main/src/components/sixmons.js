import React from 'react'
import Image from 'next/image'
import { Crown } from 'lucide-react'
import { Flame } from 'lucide-react'

export default function SixMonthsFocus() {
    return (
        <div className='flex items-center justify-center p-4 gap-8 max-w-280 m-auto flex-col lg:flex-row mb-8 sm:mb-18 md:mb-24 lg:mb-32'>
            <div className='flex-1 rounded-lg overflow-hidden w-full max-w-120'>
                <Image
                    height={1000}
                    width={1000}
                    alt="last chance image"
                    src="/falling-money.png"
                    className="w-full"
                />
            </div>
            <div className='flex-1'>
                <p className='text-foreground/90'>IT DOESN'T TAKE 10 YEARS</p>
                <h2 className='text-2xl lg:text-3xl border-yellow-400 border-b-3 font-black inline-block mb-2'>YOU CAN GET RICH IN 6 MONTHS</h2>
                <div className="lg:text-lg flex flex-col gap-4 mt-2 text-muted-foreground">
                    <p>In The Hustler Campus you will get access to secret money making Strategies and blueprints. Step by Step Roadmap and Premium Workshops!</p>
                </div>
                <div className='flex justify-self-center gap-4 mt-4 flex-col sm:flex-row max-w-180'>
                    <div className='p-4 border-2 rounded-xl border-primary'>
                        <h1 className='flex items-center text-lg lg:text-xl font-semibold gap-2 mb-2 text-primary'>
                            <Crown /> 14 days
                        </h1>
                        <p className='text-foreground/80'>Develop an Aura of immense power and influence in 14 Days.</p>
                    </div>
                    <div className='p-4 border-2 rounded-xl border-primary'>
                        <h1 className='flex items-center text-lg lg:text-xl font-semibold gap-2 mb-2 text-primary'>
                            <Flame /> Skills
                        </h1>
                        <p className='text-foreground/80'>Money Making is a skill. We will Teach you the Top High income skills!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
