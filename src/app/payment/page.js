'use client'

import React, { useState } from 'react'
import Backbar from '@/components/backbar'
import { Lock, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const CheckMark = () => (
    <span className="bg-primary/30 size-6 rounded-full flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-glow-red">
            <path d="M20 6 9 17l-5-5"></path>
        </svg>
    </span>
)

export default function Page() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            window.location.href = 'https://forms.gle/MU4dyP3QVvPCrRUTA'
        }, 1500)
    }

    return (
        <div>
            <Backbar />
            <div className="flex items-center justify-center p-4 sm:p-6">
                <div className="p-4 sm:p-6 border flex flex-col items-center justify-center w-full max-w-md sm:max-w-132 rounded-lg shadow-glow-md">
                    <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center">COMPLETE YOUR</h1>
                    <h1 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">PAYMENT</h1>
                    <p className='text-base sm:text-lg font-semibold text-muted-foreground text-center'>Scan the QR code to pay ₹299 only</p>
                    <p className="flex gap-2 items-center text-primary/90 text-sm sm:text-base mt-2 mb-4">
                        <Lock size={16} />
                        <span>One-time payment for lifetime access</span>
                    </p>
                    <Image
                        height={100}
                        width={100}
                        src="/qr.png"
                        alt="QR Code for payment"
                        className="w-40 h-40 sm:size-52 m-4 border border-primary"
                    />
                    <div className='w-full p-4 bg-card rounded-lg border font-semibold text-sm sm:text-base'>
                        <div className='flex items-center justify-between w-full mb-4'>
                            <span className="text-muted-foreground">Course Price:</span>
                            <span>₹299</span>
                        </div>
                        <div className='flex items-center justify-between w-full mb-4'>
                            <span className="text-muted-foreground">Lifetime Updates:</span>
                            <div className="flex items-center gap-2">
                                <CheckMark />
                                <span className='text-primary'>Included</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between w-full mb-4'>
                            <span className="text-muted-foreground">Community Support:</span>
                            <div className="flex items-center gap-2">
                                <CheckMark />
                                <span className='text-primary'>Included</span>
                            </div>
                        </div>
                    </div>
                    <Button onClick={handleClick} className="mt-4 w-full p-4 sm:p-6 text-base sm:text-lg" disabled={loading}>
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin mr-2" size={20} />
                                Checking...
                            </>
                        ) : (
                            <>
                                <CheckMark /> I Have Paid
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    )
}
