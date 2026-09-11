"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UnderDevelopment() {
	const router = useRouter();

	// Automatically redirect to home after 5 seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			router.push("/");
		}, 5000);

		return () => clearTimeout(timer);
	}, [router]);

	return (
		<div className="min-h-[70vh] flex items-center justify-center px-6">
			<div className="text-center max-w-3xl">
				<Image
					src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1789118855/WhatsApp_Image_2026-09-11_at_1.10.53_PM_yyt8x0.jpg"
					alt="Samrachana Projects"
					width={280}
					height={120}
					className="mx-auto mb-8 object-contain"
				/>

				<span className="text-[#B08D45] uppercase tracking-[4px] text-sm">
					Coming Soon
				</span>

				<h1 className="mt-4 text-5xl md:text-7xl font-light text-neutral-900">
					Under Development
				</h1>

				<div className="w-24 h-[2px] bg-[#B08D45] mx-auto my-8" />

				<p className="text-lg text-neutral-600">
					We're building something exceptional. This section will be available
					soon.
				</p>
			</div>
		</div>
	);
}
