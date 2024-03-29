'use client'
import { hasCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export const CookieConsent = () => {
	const [showConsent, setShowConsent] = useState(false);

	useEffect(() => {
		// If no consent cookie is present, show the consent popup
		if (!hasCookie('consent')) {
			setShowConsent(true);
		}
	}, []);

	const acceptConsent = () => {
		// When user accepts consent, hide the popup and set a consent cookie
		setShowConsent(false);
		setCookie('consent', 'true');

		// Trigger GTM script load
		if (typeof window !== 'undefined') {
			window.dispatchEvent(new Event('updateGTMConsent'));
		}
	};

	const declineConsent = () => {
		// When user declines the consent, simply hide the popup
		setShowConsent(false);
	};

	if (!showConsent) {
		return null;
	}

	return (

		<div className="fixed bottom-4 item-center text-center left-1/2 transform -translate-x-1/2 inline-flex flex-wrap justify-center gap-2 px-5 py-3 rounded-[2rem] border border-foreground bg-card tablet:px-8 tablet:py-4">
			<div>
				By using this website, you agree to{" "}
				<a
					className="inline-flex underline text-primary"
					href="/privacy-policy"
				>
					our use of cookies
				</a>
				.
			</div>
			<Button variant="primary" size="sm">
				<span className="tracking-[0.01em] font-mono text-base uppercase leading-[1.1] font-semibold">
					Ok, got it
				</span>
			</Button>
		</div>
	);
};

export default CookieConsent;
