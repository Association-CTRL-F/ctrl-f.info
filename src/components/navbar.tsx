export function Navbar() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<button
						onClick={() => scrollToSection('hero')}
						className="text-xl font-bold text-white hover:text-indigo-400 transition-colors"
					>
						ctrl-f
					</button>
					<div className="flex items-center gap-6">
						<button
							onClick={() => scrollToSection('projects')}
							className="text-gray-300 hover:text-white transition-colors"
						>
							Projets
						</button>
						<a
							href="https://discord.gg/informatique"
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
						>
							Discord
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
