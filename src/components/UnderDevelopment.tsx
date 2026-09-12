"use client";

import Image from "next/image";

export default function UnderDevelopment() {
	return (
		<div className="w-full bg-white">
			<Image
				src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1789189250/WhatsApp_Image_2026-09-12_at_10.27.28_AM_e1mp8u.jpg"
				alt="Under Development"
				width={2000}
				height={1125}
				priority
				className="w-full h-auto"
			/>
		</div>
	);
}
