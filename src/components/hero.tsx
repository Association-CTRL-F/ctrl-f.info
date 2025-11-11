export const Hero = () => (
	<section
		id="hero"
		className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24"
	>
		<div className="container mx-auto px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-20">
					<div className="flex justify-center mb-8">
						<img
							src="/image.webp"
							alt="Logo ctrl-f"
							className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto object-contain"
						/>
					</div>
					<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 text-white tracking-wide leading-none font-serif">
						CTRL-F
					</h1>
					<p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
						Association développant des outils et services informatiques utiles,
						animant une communauté d'entraide passionnée par l'informatique
					</p>
				</div>

				<div className="bg-slate-800/60 rounded-3xl p-8 sm:p-10 md:p-14 border border-slate-700/50 backdrop-blur-xl shadow-2xl">
					<div className="max-w-4xl mx-auto">
						<div className="flex items-center gap-4 mb-8">
							<div className="w-14 h-14 rounded-xl bg-sky-600 flex items-center justify-center shadow-lg shadow-sky-600/20">
								<div className="i-simple-icons-discord w-7 h-7 text-white" />
							</div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
								Serveur Discord d'entraide
							</h2>
						</div>

						<p className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-normal">
							Rejoignez notre communauté d'entraide informatique pour obtenir de
							l'aide sur vos problèmes hardware et software.
						</p>

						<ul className="space-y-5 mb-10">
							<li className="flex items-start gap-4">
								<div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-4 h-4 text-sky-400" />
								</div>
								<div>
									<span className="text-white font-semibold">
										Conseils d'achat
									</span>
									<span className="text-slate-400"> : </span>
									<span className="text-slate-300">
										Demandez de l'aide et des recommandations pour acheter du
										matériel informatique adapté à vos besoins
									</span>
								</div>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-4 h-4 text-sky-400" />
								</div>
								<div>
									<span className="text-white font-semibold">
										Configurations sur mesure
									</span>
									<span className="text-slate-400"> : </span>
									<span className="text-slate-300">
										Mettez à jour votre config ou créez une nouvelle
										configuration en fonction de votre budget
									</span>
								</div>
							</li>
							<li className="flex items-start gap-4">
								<div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
									<div className="i-heroicons-check-circle-solid w-4 h-4 text-sky-400" />
								</div>
								<div>
									<span className="text-white font-semibold">
										Support technique
									</span>
									<span className="text-slate-400"> : </span>
									<span className="text-slate-300">
										Obtenez de l'aide pour résoudre vos problèmes hardware et
										software
									</span>
								</div>
							</li>
						</ul>

						<div className="flex justify-center">
							<a
								href="https://discord.gg/informatique"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-3 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white text-base font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-600/25 active:scale-100"
							>
								<div className="i-simple-icons-discord w-5 h-5 transition-transform group-hover:scale-110" />
								<span>Rejoindre le serveur Discord</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
