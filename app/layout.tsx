import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
    src: "/JetBrainsMono.ttf",
});

export const metadata: Metadata = {
    title: "PrivacyPack",
    description:
        "Pick the mainstream apps you used before, show the privacy-respecting tools you have switched to, and share your privacy wins!",
    openGraph: {
        title: "PrivacyPack",
        description:
            "Pick the mainstream apps you used before, show the privacy-respecting tools you have switched to, and share your privacy wins!",
        url: "https://europick.eu",
        siteName: "PrivacyPack",
        images: [
            {
                url: "https://europick.eu/og-image.png",
                width: 1200,
                height: 630,
                alt: "PrivacyPack Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PrivacyPack",
        description:
            "Pick the mainstream apps you used before, show the privacy-respecting tools you have switched to, and share your privacy wins!",
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
            <body className={`${jetBrainsMono.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
