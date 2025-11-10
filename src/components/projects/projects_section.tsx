import { ProjectCard } from '#components/projects/project_card';
import { projects } from '#data/projects';

export const ProjectsSection = () => (
	<section id="projects" className="py-20 bg-slate-900">
		<div className="container mx-auto px-4">
			<h2 className="text-4xl md:text-5xl font-medium text-center mb-16 text-white">
				Nos Projets
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	</section>
);
