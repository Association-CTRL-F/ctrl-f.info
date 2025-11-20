import { useEffect } from 'react';
import { getUmamiEnv } from '#data/env';

const umamiEnv = getUmamiEnv();

export const UmamiPortal = () => {
	useEffect(() => {
		if (typeof document === 'undefined' || !umamiEnv) return;

		const script = document.createElement('script');
		script.async = true;
		script.defer = true;
		script.setAttribute('data-website-id', umamiEnv.UMAMI_WEBSITE_ID);
		script.src = umamiEnv.UMAMI_URL;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return null;
};
