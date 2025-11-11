import React from 'react'
import GradientButton from './GradientButton'

export default function BookDemoSection() {
    return (
        <section className="py-12 flex justify-center items-center">
            <div
                className="rounded-[100px] text-center bg-[url('/smart-cta-bg.png')]  bg-cover bg-center bg-no-repeat px-32 py-10"
            >
                <h2 className="text-4xl md:text-3xl font-semibold mb-4">
                    Ready to stop juggling tools and start making smarter moves?
                </h2>
                <p className="text-muted-foreground mb-8">Schedule a demo today!</p>

                <GradientButton>BOOK A DEMO </GradientButton>
            </div>
        </section>
    )
}
