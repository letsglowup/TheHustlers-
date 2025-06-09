'use client'

import React, { useEffect, useState } from 'react'
import { Hourglass } from 'lucide-react'

const STARTING_DATE = new Date('2025-06-01T00:00:00Z')
const ENDING_DATE = new Date('2025-07-01T00:00:00Z')
const DURATION_DAYS = 7

export default function TopTimer() {
    const [timeLeft, setTimeLeft] = useState(null)

    useEffect(() => {
        const update = () => {
            const result = getTimeLeft()
            setTimeLeft(result)
        }

        update()
        const interval = setInterval(update, 1000)

        return () => clearInterval(interval)
    }, [])

    function getTimeLeft() {
        const now = new Date().getTime()
        const start = STARTING_DATE.getTime()
        const end = ENDING_DATE.getTime()
        const durationMs = DURATION_DAYS * 24 * 60 * 60 * 1000

        if (now >= end) return null

        const elapsed = Math.max(0, now - start)
        const cyclesPassed = Math.floor(elapsed / durationMs)
        const nextTarget = start + (cyclesPassed + 1) * durationMs

        if (nextTarget > end) return null

        const total = nextTarget - now
        const seconds = Math.floor((total / 1000) % 60)
        const minutes = Math.floor((total / 1000 / 60) % 60)
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
        const days = Math.floor(total / (1000 * 60 * 60 * 24))

        return { total, days, hours, minutes, seconds }
    }

    if (!timeLeft) return null

    return (
        <div className='bg-gradient-to-r from-black via-red-900 to-black border-b border-primary flex py-3 lg:p-4 items-center justify-center gap-2 text-foreground font-semibold'>
            <Hourglass className="w-4 h-4 text-white" />
            <span className="uppercase">Price increases in</span>
            <div className='border-b border-foreground'>
                {timeLeft.days} <span className='font-normal text-muted-foreground'>D</span> : {timeLeft.hours} <span className='font-normal text-muted-foreground'>H</span> : {timeLeft.minutes} <span className='font-normal text-muted-foreground'>M</span> : {timeLeft.seconds} <span className='font-normal text-muted-foreground'>S</span>
            </div>
        </div>
    )
}
