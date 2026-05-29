'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../../../assets/images/eco-logo.png';
import user_icon from '../../../assets/images/user-icon.png';
import { NavItem } from './typs';

export default function Navigation() {
	const pathname = usePathname();

	const namePage: NavItem[] = [
		{ address: '/home', namePage: 'Home' },
		{ address: '/shop', namePage: 'Shop' },
		{ address: '/cart', namePage: 'Cart' },
	];

	return (
		<header className="sticky top-0 z-50 bg-white shadow-sm">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-3">
						<Image src={logo} alt="logo" className="h-7 w-7 sm:h-8 sm:w-8" />
						<h1 className="font-bold text-lg sm:text-xl text-[#0a1d37]">
							Multimart
						</h1>
					</div>

					{/* Menu */}
					<nav className="hidden md:flex">
						<ul className="flex items-center gap-6 lg:gap-10">
							{namePage.map((item) => (
								<li key={item.address}>
									<Link
										href={item.address}
										className={`relative text-sm lg:text-base transition-all duration-100
                      after:absolute after:bottom-0 after:left-0 after:h-0.5
                     
                      ${
												pathname === item.address
													? 'font-bold text-[#0a1d37] text-base lg:text-lg after:w-full'
													: 'font-medium text-[#0a1d37] hover:text-[#0f56b9] after:w-0 hover:after:w-full'
											}`}
									>
										{item.namePage}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Icons */}
					<div className="flex items-center gap-4 sm:gap-6">
						{/* Cart Icon */}
						<div className="relative cursor-pointer group">
							<i className="ri-shopping-bag-line text-xl sm:text-2xl transition-transform duration-200 group-hover:scale-110 group-active:scale-95"></i>
							<span className="absolute -top-1 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110">
								1
							</span>
						</div>

						{/* Wishlist Icon */}
						<div className="relative cursor-pointer group">
							<i className="ri-heart-3-line text-xl sm:text-2xl transition-transform duration-200 group-hover:scale-110 group-active:scale-95 group-hover:text-red-500 " />
							<span className="absolute -top-1 -right-2 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110">
								1
							</span>
						</div>

						{/* User Avatar */}
						<Image
							src={user_icon}
							alt="user"
							className="h-8 w-8 sm:h-9 sm:w-9 rounded-full cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 hover:ring-2 hover:ring-blue-400"
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
