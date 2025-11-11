export const DonationSection = () => (
	<section id="donations" className="py-20 bg-slate-900">
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="bg-slate-800/60 rounded-3xl p-8 sm:p-10 md:p-14 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
					<div className="text-center mb-10">
						<div className="w-16 h-16 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20 mx-auto mb-6">
							<div className="i-heroicons-heart-solid w-8 h-8 text-white" />
						</div>
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
							Soutenez l'association
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
							Votre soutien nous permet de maintenir et développer nos projets
							pour la communauté
						</p>
					</div>

					<div className="mb-10">
						<p className="text-slate-300 mb-6 leading-relaxed">
							Les dons contribuent à couvrir les frais de fonctionnement de
							l'association :
						</p>
						<ul className="space-y-4 text-slate-300">
							<li className="flex items-start gap-3">
								<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-3 h-3 text-emerald-400" />
								</div>
								<span>
									<strong className="text-white">Infrastructure</strong> :
									serveurs pour héberger nos projets (UserBot, UserDiag, etc.)
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-3 h-3 text-emerald-400" />
								</div>
								<span>
									<strong className="text-white">Sécurité</strong> : certificats
									SSL pour garantir la sécurité des utilisateurs
								</span>
							</li>
							<li className="flex items-start gap-3">
								<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-3 h-3 text-emerald-400" />
								</div>
								<span>
									<strong className="text-white">Développement</strong> :
									maintenance et amélioration continue de nos outils
								</span>
							</li>
						</ul>
					</div>

					<div className="flex justify-center">
						<a
							href="https://lien.ctrl-f.info/don"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-base font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-600/25 active:scale-100"
						>
							<div className="i-heroicons-heart-solid w-5 h-5 transition-transform group-hover:scale-110" />
							<span>Faire un don</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
);

