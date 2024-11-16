import { cn } from '@/utility/mergeClassNames'
import { useEffect, useState } from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { RiHeart3Line, RiShoppingBag3Line } from 'react-icons/ri'

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0)
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className={cn(
				'sticky top-0 z-50 flex w-full justify-center',
				isScrolled ? 'bg-cream-white via-gray-100 to-white' : 'bg-transparent'
			)}
		>
			<div className="container flex w-full items-center justify-between py-4">
				<span className="h-5 text-xl font-bold uppercase leading-5 tracking-wider text-violet-800">
					Violet
				</span>
				<div className="flex gap-6 align-middle">
					<div className="relative flex flex-col items-center gap-0.5">
						<span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-yellow text-[10px] font-semibold">
							3
						</span>
						<RiShoppingBag3Line className="h-5 w-5 fill-midnight-blue" />
						<span className="text-[10px] font-semibold tracking-wider text-midnight-blue">
							Cart
						</span>
					</div>
					<div className="flex flex-col items-center gap-0.5">
						<RiHeart3Line className="h-5 w-5 fill-midnight-blue" />
						<span className="text-[10px] font-semibold tracking-wider text-midnight-blue">
							Favorites
						</span>
					</div>
					<div className="flex h-9 w-9 items-end justify-center overflow-clip rounded-full bg-slate-200">
						<FaUserLarge className="h-7 w-7 fill-midnight-blue" />
					</div>
				</div>
			</div>
		</div>
	)
}
