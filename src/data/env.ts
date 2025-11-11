const isProduction = import.meta.env.MODE === 'production';

export function getUmamiEnv() {
	const umamiUrl = import.meta.env.VITE_UMAMI_URL;
	const umamiWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
	if (isProduction) {
		if (!umamiUrl || !umamiWebsiteId) {
			throw new Error(
				'UMAMI_URL and UMAMI_WEBSITE_ID are required in production'
			);
		}
	} else {
		console.warn('UMAMI_URL and UMAMI_WEBSITE_ID are not set in development');
		return undefined;
	}

	return {
		UMAMI_URL: umamiUrl,
		UMAMI_WEBSITE_ID: umamiWebsiteId,
	};
}
