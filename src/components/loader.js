"use client";

import React, { useEffect, useState } from 'react'

export default function Loader() {
    const [displayedText, setDisplayedText] = useState('')
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const fullText = "India's Greatest Community of Hustlers"
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
            <p className={`px-4 text-center uppercase text-2xl lg:text-5xl font-semibold text-primary transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                {displayedText}
            </p>
        </div>
    )
}
