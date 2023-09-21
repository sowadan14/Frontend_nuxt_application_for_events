<template>
    <div>
        <!-- Body Start-->
	<div class="wrapper">
		<div class="breadcrumb-block">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-10">
						<div class="barren-breadcrumb">
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Accueil</a></li>
									<li class="breadcrumb-item"><a href="explore_events.html">Liste des évènements</a></li>
									<li class="breadcrumb-item"><a href="online_event_detail_view.html"> Détails de l'événement en ligne</a></li>
									<li class="breadcrumb-item active" aria-current="page">Vérifier</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="event-dt-block p-80">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12">
						<div class="main-title checkout-title">
							<h3>Confirmation de commande</h3>
						</div>
					</div>
					<div class="col-xl-8 col-lg-12 col-md-12">
						<div class="checkout-block">
							<div class="main-card">
								<div class="bp-title">
									<h4>Informations de facturation</h4>
								</div>
								<div class="bp-content bp-form">
									<div class="row">
										<div class="col-lg-6 col-md-12">
											<div class="form-group mt-4">
												<label class="form-label">Prénom*</label>
												<input class="form-control h_50" type="text" placeholder="" value="Basile">																								
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group mt-4">
												<label class="form-label">Nom*</label>
												<input class="form-control h_50" type="text" placeholder="" value="SOWADAN">																								
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group mt-4">
												<label class="form-label">Email*</label>
												<input class="form-control h_50" type="text" placeholder="" value="basile14sowadan@gmail.com" disabled>																								
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group mt-4">
												<label class="form-label">Address*</label>
												<input class="form-control h_50" type="text" placeholder="" value="">																								
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group main-form mt-4">
												<label class="form-label">Pays*</label>
												<select class="selectpicker" data-size="5" title="Rien de sélectionné" data-live-search="true">
													<option value="Algeria">Togo</option>
													<option value="Argentina">Bénin</option>
													<option value="Australia">Bénin</option>
													<option value="Austria">Ghana</option>
													<option value="Belgium"> Cameroun</option>
													<option value="Bolivia">Bolivie</option>
													<option value="Brazil">Brazil</option>
													<option value="Canada">Canada</option>
													<option value="Chile">Chilie</option>
													<option value="Colombia">Colombie</option>
													<option value="Costa Rica">Costa Rica</option>
													<option value="Cyprus">Niger</option>
													<option value="Czech Republic">Nigéria</option>
													<option value="Denmark">Denemark</option>
													<option value="Dominican Republic">Côte d'Ivoire</option>
													<option value="Estonia">Afrique du sud</option>
													<option value="Finland">Finland</option>
													<option value="France">France</option>
													<option value="Germany">Allemagne</option>
													<option value="Greece">Egypte</option>
													<option value="Hong Kong">Hong Kong</option>
													<option value="Iceland">Island</option>
													<option value="India">Inde</option>
													<option value="Indonesia">Indonesie</option>
													<option value="Ireland">Irland</option>
													<option value="Israel">Israel</option>
													<option value="Italy">Italie</option>
													<option value="Japan">Japan</option>
													<option value="Latvia">Argentine</option>
													<option value="Lithuania">Lithuanie</option>
													<option value="Luxembourg">Luxembourg</option>
													<option value="Malaysia">Malaysia</option>
													<option value="Mexico">Mexique</option>
													<option value="Nepal">Nepal</option>
													<option value="Netherlands">Netherlands</option>
													<option value="New Zealand">Angleterre</option>
													<option value="Norway">Norvèque</option>
													<option value="Paraguay">Paraguay</option>
													<option value="Peru">Peru</option>
													<option value="Philippines">Philippines</option>
													<option value="Poland">Pologne</option>
													<option value="Portugal">Portugal</option>
													<option value="Singapore">Singapore</option>
													<option value="Slovakia">Slovakia</option>
													<option value="Slovenia">Slovenia</option>
													<option value="South Africa">South Africa</option>
													<option value="South Korea">South Korea</option>
													<option value="Spain">Spain</option>
													<option value="Sweden">Sweden</option>
													<option value="Switzerland">Switzerland</option>
													<option value="Tanzania">Tanzania</option>
													<option value="Thailand">Thailand</option>
													<option value="Turkey">Turkey</option>
													<option value="United Kingdom">United Kingdom</option>
													<option value="United States">United States</option>
													<option value="Vietnam">Vietnam</option>																					
												</select>
											</div>
										</div>
										
										<div class="col-lg-6 col-md-12">
											<div class="form-group mt-4">
												<label class="form-label">Ville / Banlieue*</label>
												<input class="form-control h_50" type="text" placeholder="" value="">																								
											</div>
										</div>
										
									</div>
								</div>
							</div>
							<div class="main-card mt-5">
								<div class="bp-title">
									<h4>Montant total à payer : 35 000 F CFA</h4>
								</div>
								<div class="bp-content bp-form">
									<div class="row">
										<div class="col-lg-12 col-md-12">
											<div class="form-group mt-4">
												<label class="form-label">Numéro de carte*</label>
												<input class="form-control h_50" type="text" placeholder="" value="">																								
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group mt-4">
												<label class="form-label">Date d'expiration*</label>
												<input class="form-control h_50" type="text" placeholder="MM/YY" value="">																								
											</div>
										</div>
										<div class="col-lg-6 col-md-12">
											<div class="form-group mt-4">
												<label class="form-label">CVC(Code de validation de la carte)*</label>
												<input class="form-control h_50" type="text" placeholder="" value="">																								
											</div>
										</div>
										<div class="col-lg-12 col-md-12">
											<button class="main-btn btn-hover h_50 w-100 mt-5" type="button" onclick="window.location.href='booking_confirmed.html'">Confirmer et payer</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-4 col-lg-12 col-md-12">
						<div class="main-card order-summary">
							<div class="bp-title">
								<h4>Informations de facturation</h4>
							</div>
							<div class="order-summary-content p_30">
								<div class="event-order-dt">
									<div class="event-thumbnail-img">
										<img src="images/event-imgs/ev10.jpg" alt="">
									</div>
									<div class="event-order-dt-content">
										<h5>Tutoriel sur la peinture sur toile pour débutants</h5>
										<span>Mercredi, 01 juin, 2022 17h 30 </span>
										<div class="category-type">Evènement en ligne</div>
									</div>
								</div>
								<div class="order-total-block">
									<div class="order-total-dt">
										<div class="order-text"> Ticket total</div>
										<div class="order-number">1</div>
									</div>
									<div class="order-total-dt">
										<div class="order-text">Sous-total</div>
										<div class="order-number">35 000 F CFA</div>
									</div>
									<div class="divider-line"></div>
									<div class="order-total-dt">
										<div class="order-text">Total</div>
										<div class="order-number ttl-clr">35 000 F CFA</div>
									</div>
								</div>
								<div class="coupon-code-block">
									<div class="form-group mt-4">
										<label class="form-label">Code promo*</label>
										<div class="position-relative">
											<input class="form-control h_50" type="text" placeholder="Code" value="">
											<button class="apply-btn btn-hover" type="button">Appliquer</button>
										</div>
									</div>
								</div>
								<div class="confirmation-btn">
									<button class="main-btn btn-hover h_50 w-100 mt-5" type="button" onclick="window.location.href='booking_confirmed.html'">Confirmer et payer</button>
									<span>Le prix comprend toutes les taxes applicables</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Body End-->
    </div>
</template>