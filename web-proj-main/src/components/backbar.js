"use client";

import React from 'react'
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Backbar() {
    return (
        <nav className="p-3 flex items-center">
            <Button variant="outline" className="mb-4" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
            </Button>
        </nav>
    )
}