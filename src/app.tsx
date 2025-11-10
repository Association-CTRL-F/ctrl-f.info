import { Footer } from '#components/footer';
import { Hero } from '#components/hero';
import { Navbar } from '#components/navbar';
import { ProjectsSection } from '#components/projects/projects_section';

const App = () => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-900">
			<Navbar />
			<main className="flex-grow">
				<Hero />
				<ProjectsSection />
			</main>
			<Footer />
		</div>
	);
};

export default App;
