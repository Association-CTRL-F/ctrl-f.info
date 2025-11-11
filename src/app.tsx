import { DonationSection } from '#components/donation_section';
import { Footer } from '#components/footer';
import { Hero } from '#components/hero';
import { Navbar } from '#components/navbar';
import { ProjectsSection } from '#components/projects/projects_section';
import { UmamiPortal } from '#components/umami_portal';

export const App = () => (
	<div className="min-h-screen flex flex-col bg-slate-950 antialiased">
		<Navbar />
		<main className="flex-grow">
			<Hero />
			<DonationSection />
			<ProjectsSection />
		</main>
		<Footer />
		<UmamiPortal />
	</div>
);
