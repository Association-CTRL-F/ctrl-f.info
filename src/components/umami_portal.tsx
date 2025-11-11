import { getUmamiEnv } from '#data/env';
import { createPortal } from 'react-dom';

const umamiEnv = getUmamiEnv();

export const UmamiPortal = () =>
	createPortal(
		<script
			async
			defer
			data-website-id={umamiEnv?.UMAMI_WEBSITE_ID}
			src={umamiEnv?.UMAMI_URL}
		></script>,
		document.body
	);
