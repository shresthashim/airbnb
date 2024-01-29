import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {Open_Sans} from "next/font/google";
import Navbar from "@/app/components/Navbar/Navbar";


export const metadata: Metadata = {
    title: "Airbnb",
    description: " Vacation Rentals, Cabins, Beach Houses, Unique Homes & Experiences",
};

const font = Open_Sans({subsets: ["latin"]});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={font.className}>
        <Navbar/>
        {children}</body>
        </html>
    );
}
