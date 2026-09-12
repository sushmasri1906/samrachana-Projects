import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Footer() {
	const iconClass = "w-4 h-4 text-[#B08D45] flex-shrink-0 mt-1";

	return (
		<footer className="bg-[#111111] text-white">
			<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
				<div className="grid lg:grid-cols-[1.5fr_1fr_1.2fr] gap-10">
					{/* Company Info */}
					<div>
						<Image
							src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1789118855/WhatsApp_Image_2026-09-11_at_1.10.53_PM_yyt8x0.jpg"
							alt="Samrachana Projects"
							width={180}
							height={70}
							className="mb-5 rounded"
						/>

						<div className="mb-5">
							<h3 className="text-2xl font-light text-white">Srinivas Ruppa</h3>

							<p className="text-[#B08D45] text-sm mt-1">Managing Director</p>
						</div>

						<p className="text-sm text-zinc-400 leading-6 max-w-sm">
							Building exceptional spaces with quality, innovation, and trust.
							Creating landmarks that stand the test of time.
						</p>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-[#B08D45] font-medium mb-5">Navigation</h3>

						<ul className="space-y-3 text-sm text-zinc-300">
							<li>
								<Link
									href="/"
									className="hover:text-[#B08D45] transition-colors">
									Home
								</Link>
							</li>

							<li>
								<Link
									href="/about"
									className="hover:text-[#B08D45] transition-colors">
									About Us
								</Link>
							</li>

							<li>
								<Link
									href="/projects"
									className="hover:text-[#B08D45] transition-colors">
									Projects
								</Link>
							</li>

							<li>
								<Link
									href="/gallery"
									className="hover:text-[#B08D45] transition-colors">
									Gallery
								</Link>
							</li>

							<li>
								<Link
									href="/contact"
									className="hover:text-[#B08D45] transition-colors">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div>
						<h3 className="text-[#B08D45] font-medium mb-5">
							Contact Information
						</h3>

						<div className="space-y-4 text-sm text-zinc-300">
							<div className="flex gap-3">
								<Phone className={iconClass} />
								<div>
									<p>+91 9542872999</p>
									<p>+91 7675031977</p>
								</div>
							</div>

							<div className="flex gap-3">
								<Globe className={iconClass} />
								<p>www.samrachanaprojects.com</p>
							</div>

							<div className="flex gap-3">
								<Mail className={iconClass} />
								<p>info@samrachanaprojects.com</p>
							</div>

							<div className="flex gap-3">
								<MapPin className={iconClass} />

								<p>
									B-25, TGICC,
									<br />
									Ashok Nagar, BHEL Ancillary,
									<br />
									R.C Puram,
									<br />
									Sangareddy - 502032
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-zinc-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
					<p className="text-xs text-zinc-500">
						© {new Date().getFullYear()} Samrachana Projects. All Rights
						Reserved.
					</p>

					<p className="text-xs text-zinc-600">
						Building Exceptional Spaces • Creating Lasting Value
					</p>
				</div>
			</div>
		</footer>
	);
}
