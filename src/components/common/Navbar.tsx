"use client";

import Image from "next/image";
import Link from "next/link";

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
	return (
		<header className="sticky top-0 z-50 bg-white border-b border-stone-200">
			<div className="max-w-7xl mx-auto px-6">
				<div className="h-24 flex items-center justify-between">
					{/* Logo */}
					<Link href="/">
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1789118855/WhatsApp_Image_2026-09-11_at_1.10.53_PM_yyt8x0.jpg"
							alt="Samrachana Projects"
							width={280}
							height={90}
							priority
							className="w-auto h-14 md:h-16"
						/>
					</Link>

					{/* Menu */}
					<nav className="hidden lg:flex items-center gap-10">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="
                  text-[14px]
                  uppercase
                  tracking-[2px]
                  text-neutral-700
                  hover:text-[#B08D45]
                  transition-colors
                ">
								{item.name}
							</Link>
						))}
					</nav>

					{/* CTA */}
					<Link
						href="/contact"
						className="
              hidden md:flex
              px-6 py-3
              bg-[#B08D45]
              text-white
              rounded-full
              text-sm
              tracking-wide
              hover:opacity-90
              transition
            ">
						Enquire Now
					</Link>
				</div>
			</div>
		</header>
	);
}
