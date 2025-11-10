import { Footer } from '#components/footer';
import { Hero } from '#components/hero';
import { Navbar } from '#components/navbar';
import { ProjectsSection } from '#components/projects/projects_section';

export const App = () => (
	<div className="min-h-screen flex flex-col bg-slate-950 antialiased">
		<Navbar />
		<main className="flex-grow">
			<Hero />
			<ProjectsSection />
		</main>
		<Footer />
	</div>
);
