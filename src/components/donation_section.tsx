export const DonationSection = () => (
	<section id="donations" className="py-24 bg-slate-950">
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="bg-slate-800/60 rounded-3xl p-8 sm:p-10 md:p-14 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
					<div className="max-w-4xl mx-auto">
						<div className="flex items-center gap-4 mb-8">
							<div className="w-14 h-14 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/20">
								<div className="i-heroicons-heart-solid w-7 h-7 text-white" />
							</div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
								Soutenez l'association
							</h2>
						</div>

						<p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
							Vos dons sont essentiels pour assurer le bon fonctionnement de
							l'association. Ils nous aident à couvrir les frais de nos
							infrastructures (serveurs, certificats) et à soutenir le
							développement de nos projets comme UserBot, UserDiag et
							InstallerWindows.fr.
						</p>

						<ul className="space-y-5 mb-10">
							<li className="flex items-start gap-4">
								<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-4 h-4 text-emerald-400" />
								</div>
								<div>
									<span className="text-white font-semibold">
										Infrastructure
									</span>
									<span className="text-slate-400"> : </span>
									<span className="text-slate-300">
										Serveurs pour héberger nos projets (UserBot, UserDiag,
										InstallerWindows.fr, etc.)
									</span>
								</div>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-4 h-4 text-emerald-400" />
								</div>
								<div>
									<span className="text-white font-semibold">Sécurité</span>
									<span className="text-slate-400"> : </span>
									<span className="text-slate-300">
										Certificat Microsoft pour signer numériquement l'exécutable
										de UserDiag
									</span>
								</div>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-4 h-4 text-emerald-400" />
								</div>
								<div>
									<span className="text-white font-semibold">
										Développement
									</span>
									<span className="text-slate-400"> : </span>
									<span className="text-slate-300">
										Maintenance et amélioration continue de nos outils
									</span>
								</div>
							</li>
						</ul>

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
		</div>
	</section>
);
