import installerwindowsAsset from '#assets/installerwindowsfr.png';
import userdiagAsset from '#assets/userdiag.png';
import type { Project } from '#types/project';

export const projects: Project[] = [
	{
		id: 'userdiag',
		title: 'UserDiag',
		description:
			'Outil de diagnostic PC permettant de recueillir des informations détaillées sur votre appareil.',
		imagePlaceholder: userdiagAsset,
		url: 'https://userdiag.com/fr/',
	},
	{
		id: 'installerwindows',
		title: 'InstallerWindows.fr',
		description:
			'Site proposant différents guides pour apprendre à (ré)installer Windows 11 proprement, avec des optimisations saines pour votre machine. Guides complets accessibles quel que soit votre niveau en informatique.',
		imagePlaceholder: installerwindowsAsset,
		url: 'https://installerwindows.fr',
	},
	{
		id: 'userbot',
		title: 'UserBot',
		description:
			'Bot Discord de modération avec des fonctionnalités utilitaires pour envoyer des formulaires à remplir. Aide à la modération du serveur en détectant de potentiels bots, offre des fonctionnalités pour faciliter les bans/mutes/warn/etc.',
		imagePlaceholder: '/images/userbot-placeholder.png',
	},
	{
		id: 'formunban',
		title: 'Form Unban',
		description:
			"Formulaire (site internet) que les utilisateurs bannis peuvent utiliser pour faire une demande de déban au bout d'un certain temps (normalement 6 mois mais on est assez souple).",
		imagePlaceholder: '/images/formunban-placeholder.png',
	},
];
