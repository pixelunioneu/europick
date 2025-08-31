import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
    src: "/JetBrainsMono.ttf",
});

export const metadata: Metadata = {
    title: "EuroPick",
    description:
        "Pick the mainstream apps you used before, show the european tools you have switched to!",
    openGraph: {
        title: "EuroPick",
        description:
            "Pick the mainstream apps you used before, show the european tools you have switched to!",
        url: "https://europick.eu",
        siteName: "EuroPick",
        images: [
            {
                url: "https://europick.eu/og-image.png",
                width: 1200,
                height: 630,
                alt: "EuroPick Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EuroPick",
        description:
            "Pick the mainstream apps you used before, show the european tools you have switched to!",
        images: ["https://europick.eu/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script src="/pulse.js" async></script>
            </head>
            <body className={`${jetBrainsMono.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
