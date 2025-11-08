'use client'

import * as React from "react"

interface GradientLinkButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

export default function LinkButton({
    children = "Click me",
    onClick,
    className = "",
    ...props
}: GradientLinkButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`bg-transparent rounded-full text-base hover:underline focus:outline-none ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
