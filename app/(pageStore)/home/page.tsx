import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
// image
import heroIMg from '../../../assets/images/hero-img.png';
import Services from '@/Services/services';

export const metadata: Metadata = {
	title: 'HomePage',
};
const year = new Date().getFullYear();
export default function HomePage() {
	return (
		<div>
			<div className="bg-[#d6e5fb]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
						<div className="flex flex-col gap-5 py-12 md:py-20 lg:py-28">
							<p className="text-base md:text-lg">Trending product in {year}</p>

							<h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
								Make Your Interior More Minimalistic & Modern
							</h1>

							<p className="text-gray-600 text-sm md:text-base max-w-lg">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deserunt incidunt hic minima quod maxime voluptate molestias.
							</p>

							<Link
								href="/shop"
								className="inline-flex w-fit bg-[#0a1d37] text-white py-3 px-7 rounded-md text-sm font-medium hover:shadow-lg transition"
							>
								Shop Now
							</Link>
						</div>

						<div className="flex justify-center">
							<Image
								src={heroIMg}
								alt="Hero Image"
								priority
								className="w-full h-auto max-w-md lg:max-w-lg xl:max-w-xl"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* Services */}
			<div className="my-15">
				<Services />
			</div>
			{/* Trending Products */}
		</div>
	);
}
