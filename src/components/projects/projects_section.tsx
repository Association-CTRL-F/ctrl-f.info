import { ProjectCard } from '#components/projects/project_card';
import { projects } from '#data/projects';

export const ProjectsSection = () => (
	<section id="projects" className="py-16 sm:py-20 md:py-24 bg-slate-950">
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-20 text-white tracking-tight">
					Nos Projets
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	</section>
);
