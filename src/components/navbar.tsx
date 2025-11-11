import { useScroll } from '#hooks/use_scroll';
import clsx from 'clsx';

const LINKS = [
	{
		label: (
			<span className="flex items-center gap-2">
				<img src="/favicon-96x96.png" alt="ctrl-f" className="w-8 h-8" /> ctrl-F
			</span>
		),
		href: '#hero',
	},
	{
		label: 'Donations',
		href: '#donations',
	},
	{
		label: 'Projets',
		href: '#projects',
	},
	{
		label: 'Discord',
		href: 'https://discord.gg/informatique',
		className:
			'bg-sky-600 hover:bg-sky-700 text-white text-xs rounded-full px-5 py-2.5 transition-all duration-200 hover:shadow-lg hover:shadow-sky-600/25',
	},
] satisfies {
	label: string | React.ReactNode;
	href: string;
	className?: string;
}[];

export function Navbar() {
	const scrollY = useScroll();
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href') ?? '';
		if (href.startsWith('http')) {
			window.open(href, '_blank');
		} else {
			scrollToSection(href.split('#')[1] ?? '');
		}
	};

	const navbarLinks = LINKS.map((link) => (
		<a
			key={link.href}
			href={link.href}
			onClick={handleLinkClick}
			target="_blank"
			rel="noopener noreferrer"
			className={clsx(
				'text-slate-300 hover:text-white transition-colors font-medium text-sm sm:text-base',
				link.className
			)}
		>
			{link.label}
		</a>
	));

	const hasScrolled = scrollY > 100;
	return (
		<nav
			className={clsx(
				'z-50 fixed transition-all duration-300 left-0 right-0 mx-0 px-6 sm:px-8 py-3 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-center flex-wrap',
				hasScrolled
					? 'top-4 w-fit rounded-full shadow-xl shadow-black/20 mx-auto gap-x-5 sm:gap-x-6'
					: 'top-0 w-full rounded-none gap-x-8 sm:gap-x-12'
			)}
		>
			{navbarLinks}
		</nav>
	);
}
