"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About Us",
		href: "/about",
	},
	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-white border-b border-stone-200">
			<div className="max-w-7xl mx-auto px-4 md:px-6">
				<div className="h-20 md:h-24 flex items-center justify-between">
					{/* Logo */}
					<Link href="/">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1789118855/WhatsApp_Image_2026-09-11_at_1.10.53_PM_yyt8x0.jpg"
							alt="Samrachana Projects"
							width={280}
							height={90}
							priority
							className="h-12 md:h-16 w-auto"
						/>
					</Link>

					{/* Desktop Menu */}
					<nav className="hidden lg:flex items-center gap-10">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm uppercase tracking-[2px] text-neutral-700 hover:text-[#B08D45] transition-colors">
								{item.name}
							</Link>
						))}
					</nav>

					{/* Desktop CTA */}
					<Link
						href="/contact"
						className="hidden lg:flex px-6 py-3 bg-[#B08D45] text-white rounded-full text-sm tracking-wide hover:opacity-90 transition">
						Enquire Now
					</Link>

					{/* Mobile Menu Button */}
					<button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
						{isOpen ? (
							<X className="w-7 h-7 text-neutral-800" />
						) : (
							<Menu className="w-7 h-7 text-neutral-800" />
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-300 ${
					isOpen ? "max-h-96" : "max-h-0"
				}`}>
				<div className="border-t border-stone-200 bg-white">
					<nav className="flex flex-col py-4">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => setIsOpen(false)}
								className="px-6 py-4 text-neutral-700 hover:bg-stone-50 hover:text-[#B08D45] transition">
								{item.name}
							</Link>
						))}

						<div className="px-6 pt-4">
							<Link
								href="/contact"
								onClick={() => setIsOpen(false)}
								className="block text-center bg-[#B08D45] text-white py-3 rounded-full">
								Enquire Now
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
