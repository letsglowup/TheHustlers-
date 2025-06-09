'use client'
import React, { useMemo, useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { AnimatedShinyText } from './magicui/animated-shiny-text'

const STARTING_DATE = new Date('2025-06-01T00:00:00Z')
const DURATION_DAYS = 7

const Item = ({ text1, text2 }) => {
    return (
        <div className="bg-gradient-to-br from-card to-card/70 hover:opacity-70 hover:-skew-x-3 hover:-rotate-3 hover:scale-105 transition-all duration-300 border rounded-lg gap-2 md:gap-4 p-4 md:px-6 md:py-8 w-16 sm:w-auto flex flex-col items-center cursor-default">
            <h2 className='text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-primary font-semibold text-center'>{text1}</h2>
            <p className='text-sm sm:text-md md:text-lg lg:text-xl text-center text-muted-foreground'>{text2}</p>
        </div>
    )
}

export default function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const getNextCycleTime = () => {
            const now = Date.now()
            const start = STARTING_DATE.getTime()
            const durationMs = DURATION_DAYS * 24 * 60 * 60 * 1000

            const elapsed = Math.max(0, now - start)
            const cyclesPassed = Math.floor(elapsed / durationMs)
            const nextTarget = start + (cyclesPassed + 1) * durationMs

            const diff = Math.floor((nextTarget - now) / 1000)
            return diff > 0 ? diff : 0
        }

        setCount(getNextCycleTime())

        const interval = setInterval(() => {
            setCount(prev => {
                if (prev <= 1) return getNextCycleTime()
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const timeDat = useMemo(() => {
        const days = Math.floor(count / (60 * 60 * 24))
        const hours = Math.floor((count % (60 * 60 * 24)) / (60 * 60))
        const mins = Math.floor((count % (60 * 60)) / 60)
        const secs = count % 60

        return {
            days: String(days).padStart(2, '0'),
            hours: String(hours).padStart(2, '0'),
            mins: String(mins).padStart(2, '0'),
            secs: String(secs).padStart(2, '0'),
        }
    }, [count])

    return (
        <div className='mt-32'>
            <div className="flex flex-col items-center justify-center p-4">
                <span className="inline-block px-5 py-2 bg-primary/10 text-primary text-sm font-bold rounded-full uppercase tracking-wider mb-4 border border-primary/20">
                    Discount
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground uppercase leading-tight">
                    <span>
                        Offer closes in:
                    </span>
                </h2>
            </div>
            <div className="flex flex-row gap-3 md:gap-4 justify-center items-center justify-self-center my-4">
                <Item text1={timeDat.days} text2="Days" />
                <Item text1={timeDat.hours} text2="Hours" />
                <Item text1={timeDat.mins} text2="Mins" />
                <Item text1={timeDat.secs} text2="Secs" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 gap-6">
                <Link href="/payment">
                    <button className="w-full bg-gradient-to-r from-primary/80 to-primary text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-md md:text-lg">
                        Get Tickets for TheHustlersCampus
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
                <AnimatedShinyText className="border rounded-full inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                    <span className='mr-2'>Just at</span>
                    <span className="text-yellow-400">₹299</span>
                </AnimatedShinyText>
            </div>
        </div>
    )
}
