'use client'

import React from 'react'
import GradientOutlineButton from './GradientOutlineButton'
import GradientButton from './GradientButton'
import LinkButton from './LinkButton'
import Image from 'next/image'

export default function Appbar() {
    return (
        <div className="flex items-center justify-between p-5">
            {/* Logo */}
            <Image src="/tmoraa-logo.png" alt="Tmoraa Logo" width={200} height={0} />

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
                <LinkButton>Home</LinkButton>
                <LinkButton>About Us</LinkButton>
                <LinkButton>Features</LinkButton>
                <LinkButton>Pricing</LinkButton>
                <LinkButton>FAQ</LinkButton>
                <LinkButton>Contact Us</LinkButton>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
                <GradientOutlineButton>Login</GradientOutlineButton>
                <GradientButton>Sign up</GradientButton>
            </div>
        </div>
    )
}
