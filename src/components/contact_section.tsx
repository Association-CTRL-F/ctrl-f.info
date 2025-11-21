import { CONTACT_EMAIL } from '#data/contact';

export const ContactSection = () => (
	<section id="contact" className="py-8 sm:py-16 md:py-20 bg-slate-950">
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="bg-slate-800/60 rounded-3xl p-8 sm:p-10 md:p-14 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
					<div className="max-w-4xl mx-auto">
						<div className="flex items-center gap-4 mb-8">
							<div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
								<div className="i-heroicons-envelope-solid w-7 h-7 text-white" />
							</div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
								Contactez-nous
							</h2>
						</div>

						<p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
							Vous avez une question, une suggestion ou souhaitez nous contacter
							? N'hésitez pas à nous écrire à l'adresse suivante.
						</p>

						<div className="flex justify-center">
							<a
								href={`mailto:${CONTACT_EMAIL}`}
								className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base	 rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-600/25 active:scale-100"
							>
								<div className="i-heroicons-envelope-solid w-5 h-5 transition-transform group-hover:scale-110" />
								<span>{CONTACT_EMAIL}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
