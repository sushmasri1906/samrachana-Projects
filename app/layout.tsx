import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/common/Navbar";
import Footer from "@/src/components/common/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Samrachana Projects",
	description:
		"Samrachana Projects is a leading construction company dedicated to delivering high-quality projects with a focus on innovation, sustainability, and client satisfaction. Explore our portfolio of completed and ongoing projects, learn about our team, and get in touch with us for your next construction endeavor.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
