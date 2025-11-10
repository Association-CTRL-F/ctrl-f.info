import clsx from 'clsx';
import { useScroll } from '../hooks/use_scroll';

const LINKS = [
	{
		label: 'ctrl-f',
		href: '#hero',
	},
	{
		label: 'Projets',
		href: '#projects',
	},
	{
		label: 'Discord',
		href: 'https://discord.gg/informatique',
		className:
			'bg-sky-700 hover:bg-sky-800 text-sm text-white rounded-full px-4 py-2 transition-colors',
	},
] satisfies {
	label: string;
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
				'text-slate-300 hover:text-white transition-colors',
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
				'fixed transition-all duration-300 left-0 right-0 mx-0 px-8 py-3 bg-slate-800/95 backdrop-blur-sm border-b border-slate-800 flex items-center justify-center',
				hasScrolled
					? 'top-4 w-fit  rounded-full shadow-lg mx-auto gap-6'
					: 'top-0 w-full rounded-none gap-12'
			)}
		>
			{navbarLinks}
		</nav>
	);
}
