"use client";

import React, { useEffect, useState } from 'react'

export default function Loader() {
    const [displayedText, setDisplayedText] = useState('')
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const fullText = 'Escape the matrix!'
        let index = 0

        const interval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText(fullText.substring(0, index + 1))
                index++
            } else {
                clearInterval(interval)
                setTimeout(() => {
                    setFadeOut(true)
                }, 500)
            }
        }, 100)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-background h-screen w-screen fixed top-0 left-0 z-99999 flex items-center justify-center">
            <p className={`uppercase text-3xl md:text-5xl lg:text-7xl font-semibold text-primary transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                {displayedText}
            </p>
        </div>
    )
}