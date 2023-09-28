<template>
    <div>
		<div class="wrapper">
			<div class="hero-banner">
				<div class="container">
					<div class="row justify-content-between">
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="hero-banner-content text-lg-start">
								<h2>Les tarifs de l'événement-ceril </h2>
								<p class="ps-0">Nous pensons que votre expérience événementielle doit être simple, élégante et sans tracas. Notre objectif est de créer cette expérience afin que vous puissiez vous concentrer sur l'organisation de votre événement pendant que nous nous occupons du reste !</p>
								<NuxtLink to="/create" class="main-btn btn-hover"><i class="fa-solid fa-arrow-right ms-3"></i>Créer évènement</NuxtLink>
								
								<!-- <a href="create.html" class="main-btn btn-hover">Créer évènement <i class="fa-solid fa-arrow-right ms-3"></i></a> -->
							</div>
						</div>
						<div class="col-xl-5 col-lg-6 col-md-10">
							<div class="hero-side-banner d-none d-lg-block">
								<img src="images/icons/pricing-banner.gif" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="main-title">
								<h3>Event-CERIL est entièrement gratuit et peut être utilisé pour des événements gratuits ! <span class="fw-normal"> Nous vous facturons uniquement lorsque vous vendez des billets pour vos événements
								</span></h3>
								<p class="fs-18 line-height-32">Vous ne voulez pas payer ces frais de service ? Sélectionnez simplement l'option et nous répercuterons les frais de service sur vos participants lorsqu'ils achèteront vos billets..</p>
								<p class="text-icon fs-16">Affichage du prix du ticket pour <span class="flag-icon"><img src="images/icons/drapeau_Togo.svg" alt=""></span> Togo</p>
							</div>
						</div>
						<div class="col-xl-6 col-lg-6 col-md-12">
							<div class="sell-calculate-banner mt-5 mt-lg-3 text-center">
								<div class="sell-calculate-banner-bg">
									<div class="sell-calculate-banner-content">
										<h3>30</h3>
										<h5>cents</h5>
										<span class="plus">+</span>
										<div class="percent">1%</div>
										<span class="per-text">Par ticket vendu</span>
										<p>*Plus les frais de traitement .</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="host-engaging-event-block p-80">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8">
							<div class="main-title text-center">
								<h3>Calculez vos frais stériles</h3>
								<p>Organisez des événements sur place et organisez des événements en ligne avec des possibilités illimitées à l'aide de notre plateforme d'événements virtuels intégrée. Créez une expérience événementielle unique pour vous et vos participants.</p>
							</div>
						</div>
						<div class="col-lg-12">
							<div class="calculate-holder">
								<div class="row">
									<div class="col-lg-6 col-md-12">
										<div class="calculate-top">
											<div class="row">
												<div class="col-12">
													<div class="form-group mt-4">
														<label class="form-label mb-2 fs-14">Votre événement est-il payant ou gratuit ?</label>
														<div class="switch-field">
															<div class="sw-container">
																<input type="radio" id="payment_type_paid" class="payment_type" name="payment_type" value="paid" checked="">
																<label for="payment_type_paid">Payé</label>
																<input type="radio" id="payment_type_free" class="payment_type" name="payment_type" value="free">
																<label for="payment_type_free" class="me-0">Gratuit</label>
															</div>
														</div>
													</div>
												</div>
												<div class="col-12">
													<div class="form-group mt-4">
														<label class="form-label mb-2 fs-14">Comment souhaitez-vous payer les frais de service ?</label>
														<div class="switch-field">
															<div class="sw-container">
																<input type="radio" id="payment_fee_type_pass" class="payment_fee_type" name="payment_fee_type" value="pass-onto-attendees" checked="">
																<label for="payment_fee_type_pass">Transmettre</label>
																<input type="radio" id="payment_fee_type_absorb" class="payment_fee_type" name="payment_fee_type" value="absorb-the-fee">
																<label for="payment_fee_type_absorb" class="me-0">Absorber</label>
															</div>
														</div>
													</div>
												</div>
												<div class="col-12">										
													<div class="row g-1">
														<div class="col-md-6">
															<div class="form-group mt-4">
																<label class="form-label ellipsis-text mb-2 fs-14">Quel est le prix du ticket ?</label>
																<div class="sw-container">
																	<input class="form-control h_50" type="text" value="" placeholder="0">
																</div>
															</div>
														</div>
														<div class="col-md-6">
															<div class="form-group mt-4">
																<label class="form-label ellipsis-text mb-2 fs-14">Combien de tickets ?</label>
																<div class="sw-container">
																	<input class="form-control h_50" type="text" value="" placeholder="0">
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-md-12">
										<div class="calculate-bottom">
											<div class="row">
												<div class="col-lg-6">
													<div class="main-card price-ticket-box text-center mt-4 mt-lg-0">
														<div class="data-amount">
															<h4>0 F CFA</h4>
															<span>Montant total que vous recevez</span>
														</div>
													</div>
												</div>
												<div class="col-lg-6">
													<div class="main-card price-ticket-box text-center mt-4 mt-lg-0">
														<div class="data-amount">
															<h4>0 F CFA </h4>
															<span>Par tickets, les participants paient</span>
														</div>
													</div>
												</div>
												<div class="col-lg-12">
													<div class="main-card price-ticket-box text-center mt-4">
														<div class="data-amount">
															<h4>0 F CFA </h4>
															<span>Frais de service totaux</span>
															<span>(Hors frais de traitement )</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="feature-block p-80">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-10">
							<div class="main-title text-center mb-4">
								<h3>Questions fréquemment posées</h3>
							</div>
						</div>
						<div class="col-lg-8">
							<div class="faq-accordion mt-4">
								<div class="accordion" id="accordionPanelsStayOpenExample">
									<div class="accordion-item">
										<h2 class="accordion-header" id="panelsStayOpen-heading1">
											<button class="accordion-btn" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse1" aria-expanded="true" aria-controls="panelsStayOpen-collapse1">
												Est-ce que Event-CERIL est vraiment gratuit ?
											</button>
										</h2>
										<div id="panelsStayOpen-collapse1" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-heading1">
											<div class="accordion-body pt-0">
												<p>Event-CERIL est gratuit et est payant</p>
												<p>Gratuit: losque vous organiser des petits évènements</p>
												<p>Payant: Si les évènements sont de grandes tailles comme par exemple, le webinaire, la conference entre les dirigeants d'une entreprise...</p>

											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="panelsStayOpen-heading2">
											<button class="accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse2" aria-expanded="false" aria-controls="panelsStayOpen-collapse2">
												Event-CERIL facture-t-il les événements gratuits ?
											</button>
										</h2>
										<div id="panelsStayOpen-collapse2" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading2">
											<div class="accordion-body pt-0">
												<p>Non, non pas du tout. Tous les évènements gratuits sont gratuits.</p>
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="panelsStayOpen-heading3">
											<button class="accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse3" aria-expanded="false" aria-controls="panelsStayOpen-collapse3">
												Comment recevoir le paiement de mes participants ?
											</button>
										</h2>
										<div id="panelsStayOpen-collapse3" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading3">
											<div class="accordion-body pt-0">
												<p>Les paiement se feront via Tmoney et Flooz</p>
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="panelsStayOpen-heading4">
											<button class="accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false" aria-controls="panelsStayOpen-collapse4">
												Quand dois-je donner les détails de ma carte de crédit ?
											</button>
										</h2>
										<div id="panelsStayOpen-collapse4" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading4">
											<div class="accordion-body pt-0">
												<p>A détailler après</p>
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="panelsStayOpen-heading5">
											<button class="accordion-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false" aria-controls="panelsStayOpen-collapse5">
												Existe-t-il une option d'essai gratuit ?
											</button>
										</h2>
										<div id="panelsStayOpen-collapse5" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading5">
											<div class="accordion-body pt-0">
												<p>Tout a fait. vous pouvez créer des évènemente gratuite</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>