import { projects } from '#data/projects';

export const findFormUnbanUrl = () =>
	projects.find((project) => project.id === 'formunban')?.url;
