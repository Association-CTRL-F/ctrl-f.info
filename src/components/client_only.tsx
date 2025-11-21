// Source https://github.com/gfmio/react-client-only/blob/master/index.ts#L1C1-L12C3

import { useClientOnly } from '#hooks/use_client_only';
import { createElement, Fragment, type PropsWithChildren } from 'react';

/** React component that renders its children client-side only / after first mount */
export function ClientOnly({ children }: PropsWithChildren) {
	const hasMounted = useClientOnly();

	if (!hasMounted) {
		return null;
	}

	return createElement(Fragment, { children });
}
