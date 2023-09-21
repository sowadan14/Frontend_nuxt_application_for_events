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
									<li class="breadcrumb-item"><a href="index.html">Acceuil</a></li>
									<li class="breadcrumb-item"><a href="create.html">Créer</a></li>
									<li class="breadcrumb-item active" aria-current="page">Créer évènement en ligne</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="event-dt-block p-80">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-12 col-md-12">
						<div class="main-title text-center">
							<h3>Créer évènement en ligne</h3>
						</div>
					</div>
					<div class="col-xl-8 col-lg-9 col-md-12">
						<div class="wizard-steps-block">
							<div id="add-event-tab" class="step-app">
								<ul class="step-steps">
									<li class="active">
										<a href="#tab_step1">
											<span class="number"></span>
											<span class="step-name">Détails de l'évènement</span>
										</a>
									</li>
									<li>
										<a href="#tab_step2">
											<span class="number"></span>
											<span class="step-name">Tickets</span>
										</a>
									</li>
									<li>
										<a href="#tab_step3">
											<span class="number"></span>
											<span class="step-name">Parametres</span>
										</a>
									</li>
								</ul>
								<div class="step-content">
									<div class="step-tab-panel step-tab-info active" id="tab_step1"> 
										<div class="tab-from-content">
											<div class="main-card">
												<div class="bp-title">
													<h4><i class="fa-solid fa-circle-info step_icon me-3"></i>Détails de l'évènement</h4>
												</div>
												<div class="p-4 bp-form main-form">
													<div class="row">
														<div class="col-lg-12 col-md-12">
															<div class="form-group border_bottom pb_30">
																<label class="form-label fs-16">Donnez un nom à votre évènement.*</label>
																<!--<p class="mt-2 d-block fs-14 mb-3">Voyez comment votre nom apparaît sur la page de l'événement et une liste de tous les endroits où le nom de votre événement sera utilisé. <a href="#" class="a-link">apprendre encore plus</a></p>-->
																<input class="form-control h_50" type="text" placeholder="Entrer le nom de votre évènement" value="">
															</div>
															<div class="form-group border_bottom pt_30 pb_30">
																<label class="form-label fs-16">Choisissez une catégorie pour votre événement.*</label>
																<!--<p class="mt-2 d-block fs-14 mb-3">Le choix de catégories pertinentes contribue à améliorer la découvrabilité de votre événement. <a href="#" class="a-link">Learn more</a></p>-->
																<select class="selectpicker" multiple="" data-size="5" title="Choisissez une catégorie d'évènements" data-live-search="true">
																	<option value="01">Arts</option>
																	<option value="02">Business</option>
																	<option value="03">Accompagnement et Conseil</option>
																	<option value="04">Communauté et culture</option>
																	<option value="05">Entrepreneuriat</option>
																	<option value="06">Éducation et formation</option>
																	<option value="07">La famille et les amis</option>
																	<option value="08">Mode et Beauté</option>
																	<option value="09">Film et divertissement</option>
																	<option value="10">Nourriture et boisson</option>
																	<option value="11">Gouvernement et politique</option>
																	<option value="12">Santé et bien-être</option>
																	<option value="13">Passe-temps et intérêts</option>
																	<option value="14">Musique et Théâtre</option>
																	<option value="15">Religion et spiritualité</option>
																	<option value="16">Science et Technologie</option>
																	<option value="17">Sports et aptitudes</option>
																	<option value="18">Voyage et plein air</option>
																	<option value="19">Arts visuels</option>
																	<option value="20">Autres</option>
																</select>
															</div>
															<div class="form-group border_bottom pt_30 pb_30">
																<label class="form-label fs-16">Quand est lieu votre événement?*</label>
																<!--<p class="mt-2 fs-14 d-block mb-3">Informez vos participants du début de votre événement afin qu'ils puissent se préparer à y assister.</p>-->
																<div class="row g-2">
																	<div class="col-md-6">
																		<label class="form-label mt-3 fs-6"> Date de l'évènement.*</label>																
																		<div class="loc-group position-relative">
																			<input class="form-control h_50 datepicker-here" data-language="fr" type="text" placeholder="MM/DD/YYYY" value="">
																			<span class="absolute-icon"><i class="fa-solid fa-calendar-days"></i></span>
																		</div>
																	</div>
																	<div class="col-md-6">																		
																		<div class="row g-2">
																			<div class="col-md-6">
																				<div class="clock-icon">
																					<label class="form-label mt-3 fs-6">Temps</label>	
																					<select class="selectpicker" data-size="5" data-live-search="true">
																						<option value="00:00">12:00 AM</option>
																						<option value="00:15">12:15 AM</option>
																						<option value="00:30">12:30 AM</option>
																						<option value="00:45">12:45 AM</option>
																						<option value="01:00">01:00 AM</option>
																						<option value="01:15">01:15 AM</option>
																						<option value="01:30">01:30 AM</option>
																						<option value="01:45">01:45 AM</option>
																						<option value="02:00">02:00 AM</option>
																						<option value="02:15">02:15 AM</option>
																						<option value="02:30">02:30 AM</option>
																						<option value="02:45">02:45 AM</option>
																						<option value="03:00">03:00 AM</option>
																						<option value="03:15">03:15 AM</option>
																						<option value="03:30">03:30 AM</option>
																						<option value="03:45">03:45 AM</option>
																						<option value="04:00">04:00 AM</option>
																						<option value="04:15">04:15 AM</option>
																						<option value="04:30">04:30 AM</option>
																						<option value="04:45">04:45 AM</option>
																						<option value="05:00">05:00 AM</option>
																						<option value="05:15">05:15 AM</option>
																						<option value="05:30">05:30 AM</option>
																						<option value="05:45">05:45 AM</option>
																						<option value="06:00">06:00 AM</option>
																						<option value="06:15">06:15 AM</option>
																						<option value="06:30">06:30 AM</option>
																						<option value="06:45">06:45 AM</option>
																						<option value="07:00">07:00 AM</option>
																						<option value="07:15">07:15 AM</option>
																						<option value="07:30">07:30 AM</option>
																						<option value="07:45">07:45 AM</option>
																						<option value="08:00">08:00 AM</option>
																						<option value="08:15">08:15 AM</option>
																						<option value="08:30">08:30 AM</option>
																						<option value="08:45">08:45 AM</option>
																						<option value="09:00">09:00 AM</option>
																						<option value="09:15">09:15 AM</option>
																						<option value="09:30">09:30 AM</option>
																						<option value="09:45">09:45 AM</option>
																						<option value="10:00" selected="selected">10:00 AM</option>
																						<option value="10:15">10:15 AM</option>
																						<option value="10:30">10:30 AM</option>
																						<option value="10:45">10:45 AM</option>
																						<option value="11:00">11:00 AM</option>
																						<option value="11:15">11:15 AM</option>
																						<option value="11:30">11:30 AM</option>
																						<option value="11:45">11:45 AM</option>
																						<option value="12:00">12:00 PM</option>
																						<option value="12:15">12:15 PM</option>
																						<option value="12:30">12:30 PM</option>
																						<option value="12:45">12:45 PM</option>
																						<option value="13:00">01:00 PM</option>
																						<option value="13:15">01:15 PM</option>
																						<option value="13:30">01:30 PM</option>
																						<option value="13:45">01:45 PM</option>
																						<option value="14:00">02:00 PM</option>
																						<option value="14:15">02:15 PM</option>
																						<option value="14:30">02:30 PM</option>
																						<option value="14:45">02:45 PM</option>
																						<option value="15:00">03:00 PM</option>
																						<option value="15:15">03:15 PM</option>
																						<option value="15:30">03:30 PM</option>
																						<option value="15:45">03:45 PM</option>
																						<option value="16:00">04:00 PM</option>
																						<option value="16:15">04:15 PM</option>
																						<option value="16:30">04:30 PM</option>
																						<option value="16:45">04:45 PM</option>
																						<option value="17:00">05:00 PM</option>
																						<option value="17:15">05:15 PM</option>
																						<option value="17:30">05:30 PM</option>
																						<option value="17:45">05:45 PM</option>
																						<option value="18:00">06:00 PM</option>
																						<option value="18:15">06:15 PM</option>
																						<option value="18:30">06:30 PM</option>
																						<option value="18:45">06:45 PM</option>
																						<option value="19:00">07:00 PM</option>
																						<option value="19:15">07:15 PM</option>
																						<option value="19:30">07:30 PM</option>
																						<option value="19:45">07:45 PM</option>
																						<option value="20:00">08:00 PM</option>
																						<option value="20:15">08:15 PM</option>
																						<option value="20:30">08:30 PM</option>
																						<option value="20:45">08:45 PM</option>
																						<option value="21:00">09:00 PM</option>
																						<option value="21:15">09:15 PM</option>
																						<option value="21:30">09:30 PM</option>
																						<option value="21:45">09:45 PM</option>
																						<option value="22:00">10:00 PM</option>
																						<option value="22:15">10:15 PM</option>
																						<option value="22:30">10:30 PM</option>
																						<option value="22:45">10:45 PM</option>
																						<option value="23:00">11:00 PM</option>
																						<option value="23:15">11:15 PM</option>
																						<option value="23:30">11:30 PM</option>
																						<option value="23:45">11:45 PM</option>
																					</select>
																				</div>
																			</div>
																			<div class="col-md-6">
																				<label class="form-label mt-3 fs-6">Durée</label>	
																				<select class="selectpicker" data-size="5" data-live-search="true">
																					<option value="15">15m</option>
																					<option value="30">30m</option>
																					<option value="45">45m</option>
																					<option value="60" selected="selected">1h</option>
																					<option value="75">1h 15m</option>
																					<option value="90">1h 30m</option>
																					<option value="105">1h 45m</option>
																					<option value="120">2h</option>
																					<option value="135">2h 15m</option>
																					<option value="150">2h 30m</option>
																					<option value="165">2h 45m</option>
																					<option value="180">3h</option>
																					<option value="195">3h 15m</option>
																					<option value="210">3h 30m</option>
																					<option value="225">3h 45m</option>
																					<option value="240">4h</option>
																					<option value="255">4h 15m</option>
																					<option value="310">4h 30m</option>
																					<option value="325">4h 30m</option>
																					<option value="340">4h 45m</option>
																					<option value="355">5h</option>
																					<option value="410">5h 15m</option>
																					<option value="425">5h 30m</option>
																				</select>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div class="form-group pt_30 pb_30">
																<label class="form-label fs-16">Ajoutez quelques images à votre bannière d'événement.</label>
																<!--<p class="mt-2 fs-14 d-block mb-3 pe_right">Téléchargez des images colorées et vibrantes comme bannière pour votre événement ! Découvrez comment de belles images aident la page de détails de votre événement. <a href="#" class="a-link">Apprendre plus</a></p>-->
																<div class="content-holder mt-4">
																	<div class="default-event-thumb">   
																		<div class="default-event-thumb-btn">
																			<div class="thumb-change-btn">
																				<input type="file" id="thumb-img">
																				<label for="thumb-img">Changer l'image</label>
																			</div>
																		</div>
																		<img src="images/banners/banner3.png" alt="">
																	</div>
																</div>
															</div>
															<div class="form-group border_bottom pb_30">
																<label class="form-label fs-16">Décrivez votre événement.</label>
																<!--<p class="mt-2 fs-14 d-block mb-3">Écrivez quelques mots ci-dessous pour décrire votre événement et fournissez toute information supplémentaire telle que les horaires, l'itinéraire ou toute instruction spéciale requise pour assister à votre événement..</p>-->
																<div class="text-editor mt-4">
																	<div id="pd_editor"></div>
																</div>
															</div>
															<div class="form-group pt_30 pb-2">
																<label class="form-label fs-16">Quel type d'événement en ligne organisez-vous?*</label>
																<!--<p class="mt-2 fs-14 d-block mb-3">Le choix du type de votre événement nous aide à créer une expérience plus personnalisée pour vous. <a href="#" class="a-link">Learn more</a></p>-->
																<div class="stepper-data-set">
																	<div class="content-holder template-selector">
																		<div class="row g-3">
																			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
																				<div class="template-item mt-3">
																					<input id="standard_webinar" type="radio" name="template_id" value="standard webinar">
																					<label class="template sw-template" for="standard_webinar">
																						<img src="images/icons/standard-webinar.png" alt="">
																					</label>											
																					<h6 class="hosting-title fs-14 mt-2 mb-0">Webinaire standard</h6>
																				</div>
																			</div>
																			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
																				<div class="template-item mt-3">
																					<input id="traning_workshop" type="radio" name="template_id" value="traning workshop">
																					<label class="template tw-template" for="traning_workshop">
																						<img src="images/icons/health-and-welbeing.png" alt="">
																					</label>											
																					<h6 class="hosting-title fs-14 mt-2 mb-0">Formation et atelier</h6>
																				</div>
																			</div>
																			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
																				<div class="template-item mt-3">
																					<input id="online_classes" type="radio" name="template_id" value="online classes">
																					<label class="template oc-template" for="online_classes">
																						<img src="images/icons/e-learning.png" alt="">
																					</label>											
																					<h6 class="hosting-title fs-14 mt-2 mb-0">Classes en ligne</h6>
																				</div>
																			</div>
																			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
																				<div class="template-item mt-3">
																					<input id="talk_show" type="radio" name="template_id" value="talk show">
																					<label class="template ts-template" for="talk_show">
																						<img src="images/icons/talk-show-1.png" alt="">
																					</label>											
																					<h6 class="hosting-title fs-14 mt-2 mb-0">Talk-Show</h6>
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
									
									<div class="step-tab-panel step-tab-gallery" id="tab_step2">
										<div class="tab-from-content">
											<div class="main-card">
												<div class="bp-title">
													<h4><i class="fa-solid fa-ticket step_icon me-3"></i>Tickets</h4>
												</div>
												<div class="p-4 bp-form main-form">
													<div class="form-group border_bottom pb_30">
														<div class="ticket-section">
															<label class="form-label fs-16">Création des tickets!</label>
															
															<div class="content-holder">
																<div class="row g-3">
																	<div class="col-md-6 disabled-action">
																		<label class="form-label mt-3 fs-6">Prix*</label>
																		<div class="loc-group position-relative input-group">
																			<input class="form-control h_50" type="text" placeholder="" value="100">
																			<div class="pp-select">
																				<select class="selectpicker dropdown-no-bg">
																					<option value="AUD" selected="selected">F CFA</option>
																				</select> 
																			</div>
																		</div> 
																	</div>
																	<div class="col-md-6">
																		<label class="form-label mt-3 fs-6">Nombre total de tickets disponibles*</label>
																		<div class="input-number">
																			<input class="form-control h_50" type="number" placeholder="" value="5">
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="free-event pt_30">
															<div class="content-holder">
																<div class="form-group">
																	<div class="d-flex align-items-start">
																		<label class="btn-switch m-0 me-3">
																			<input type="checkbox" class="" id="free-event-ticketing" value="">
																			<span class="checkbox-slider"></span>
																		</label>
																		<div class="d-flex flex-column">
																			<label class="color-black fs-14 fw-bold mb-1">Les tickets sont gratuits</label>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="stepper-data-set pt_30 disabled-action">
														<div class="content-holder">
															<div class="form-group">
																<div class="d-flex align-items-start">
																	<label class="btn-switch m-0 me-3">
																		<input type="checkbox" class="" id="bird-discount" value="">
																		<span class="checkbox-slider"></span>
																	</label>
																	<div class="d-flex flex-column">
																		<label class="color-black mb-1">Je veux offrir une réduction pour les lève-tôt.</label>
																		<!--<p class="mt-2 fs-14 d-block mb-3">L'activation de cette réduction permet à vos participants d'obtenir toutes les fonctionnalités des billets réguliers à un prix réduit.</p>-->
																	</div>
																</div>
																<div class="online-event-discount-wrapper" style="display: none;">
																	<div class="row g-3">
																		<div class="col-md-3">
																			<label class="form-label mt-3 fs-6">Réduction*</label>
																			<input class="form-control h_50" type="text" placeholder="0" value="">
																		</div>
																		<div class="col-md-3">
																			<label class="form-label mt-3 fs-6">Prix*</label>
																			<select class="selectpicker">
																				<option value="Percentage" selected="">Pour cent(%)</option>
																				<option value="Fixed">Fixée(F CFA)</option>
																			</select>
																		</div>
																		<div class="col-md-3">
																			<label class="form-label mt-3 fs-6">La réduction se termine le*</label>
																			<div class="loc-group position-relative">
																				<input class="form-control h_50 datepicker-here" data-language="en" type="text" placeholder="MM/DD/YYYY" value="">
																				<span class="absolute-icon"><i class="fa-solid fa-calendar-days"></i></span>
																			</div>
																		</div>
																		<div class="col-md-3">
																			<div class="clock-icon">
																				<label class="form-label mt-3 fs-6">Temps</label>	
																				<select class="selectpicker" data-size="5" data-live-search="true">
																					<option value="00:00">12:00 AM</option>
																					<option value="00:15">12:15 AM</option>
																					<option value="00:30">12:30 AM</option>
																					<option value="00:45">12:45 AM</option>
																					<option value="01:00">01:00 AM</option>
																					<option value="01:15">01:15 AM</option>
																					<option value="01:30">01:30 AM</option>
																					<option value="01:45">01:45 AM</option>
																					<option value="02:00">02:00 AM</option>
																					<option value="02:15">02:15 AM</option>
																					<option value="02:30">02:30 AM</option>
																					<option value="02:45">02:45 AM</option>
																					<option value="03:00">03:00 AM</option>
																					<option value="03:15">03:15 AM</option>
																					<option value="03:30">03:30 AM</option>
																					<option value="03:45">03:45 AM</option>
																					<option value="04:00">04:00 AM</option>
																					<option value="04:15">04:15 AM</option>
																					<option value="04:30">04:30 AM</option>
																					<option value="04:45">04:45 AM</option>
																					<option value="05:00">05:00 AM</option>
																					<option value="05:15">05:15 AM</option>
																					<option value="05:30">05:30 AM</option>
																					<option value="05:45">05:45 AM</option>
																					<option value="06:00">06:00 AM</option>
																					<option value="06:15">06:15 AM</option>
																					<option value="06:30">06:30 AM</option>
																					<option value="06:45">06:45 AM</option>
																					<option value="07:00">07:00 AM</option>
																					<option value="07:15">07:15 AM</option>
																					<option value="07:30">07:30 AM</option>
																					<option value="07:45">07:45 AM</option>
																					<option value="08:00">08:00 AM</option>
																					<option value="08:15">08:15 AM</option>
																					<option value="08:30">08:30 AM</option>
																					<option value="08:45">08:45 AM</option>
																					<option value="09:00">09:00 AM</option>
																					<option value="09:15">09:15 AM</option>
																					<option value="09:30">09:30 AM</option>
																					<option value="09:45">09:45 AM</option>
																					<option value="10:00" selected="selected">10:00 AM</option>
																					<option value="10:15">10:15 AM</option>
																					<option value="10:30">10:30 AM</option>
																					<option value="10:45">10:45 AM</option>
																					<option value="11:00">11:00 AM</option>
																					<option value="11:15">11:15 AM</option>
																					<option value="11:30">11:30 AM</option>
																					<option value="11:45">11:45 AM</option>
																					<option value="12:00">12:00 PM</option>
																					<option value="12:15">12:15 PM</option>
																					<option value="12:30">12:30 PM</option>
																					<option value="12:45">12:45 PM</option>
																					<option value="13:00">01:00 PM</option>
																					<option value="13:15">01:15 PM</option>
																					<option value="13:30">01:30 PM</option>
																					<option value="13:45">01:45 PM</option>
																					<option value="14:00">02:00 PM</option>
																					<option value="14:15">02:15 PM</option>
																					<option value="14:30">02:30 PM</option>
																					<option value="14:45">02:45 PM</option>
																					<option value="15:00">03:00 PM</option>
																					<option value="15:15">03:15 PM</option>
																					<option value="15:30">03:30 PM</option>
																					<option value="15:45">03:45 PM</option>
																					<option value="16:00">04:00 PM</option>
																					<option value="16:15">04:15 PM</option>
																					<option value="16:30">04:30 PM</option>
																					<option value="16:45">04:45 PM</option>
																					<option value="17:00">05:00 PM</option>
																					<option value="17:15">05:15 PM</option>
																					<option value="17:30">05:30 PM</option>
																					<option value="17:45">05:45 PM</option>
																					<option value="18:00">06:00 PM</option>
																					<option value="18:15">06:15 PM</option>
																					<option value="18:30">06:30 PM</option>
																					<option value="18:45">06:45 PM</option>
																					<option value="19:00">07:00 PM</option>
																					<option value="19:15">07:15 PM</option>
																					<option value="19:30">07:30 PM</option>
																					<option value="19:45">07:45 PM</option>
																					<option value="20:00">08:00 PM</option>
																					<option value="20:15">08:15 PM</option>
																					<option value="20:30">08:30 PM</option>
																					<option value="20:45">08:45 PM</option>
																					<option value="21:00">09:00 PM</option>
																					<option value="21:15">09:15 PM</option>
																					<option value="21:30">09:30 PM</option>
																					<option value="21:45">09:45 PM</option>
																					<option value="22:00">10:00 PM</option>
																					<option value="22:15">10:15 PM</option>
																					<option value="22:30">10:30 PM</option>
																					<option value="22:45">10:45 PM</option>
																					<option value="23:00">11:00 PM</option>
																					<option value="23:15">11:15 PM</option>
																					<option value="23:30">11:30 PM</option>
																					<option value="23:45">11:45 PM</option>
																				</select>
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
									 <div class="step-tab-panel step-tab-location" id="tab_step3">
										<div class="tab-from-content">											
											<div class="main-card">
												<div class="bp-title">
													<h4><i class="fa-solid fa-gear step_icon me-3"></i>Parametres</h4>
												</div>
												<div class="p_30 bp-form main-form">
													<div class="form-group">
														<div class="ticket-section">
															<label class="form-label fs-16">Configurons quelques options supplémentaires pour votre événement!</label>
															
															<div class="content-holder">
																<div class="setting-item border_bottom pb_30 pt-4">
																	<div class="d-flex align-items-start">
																		<label class="btn-switch m-0 me-3">
																			<input type="checkbox" class="" id="booking-start-time-btn" value="" checked>
																			<span class="checkbox-slider"></span>
																		</label>
																		<div class="d-flex flex-column">
																			<label class="color-black fw-bold mb-1">Je veux que les réservations commencent immédiatement.</label>
																			<p class="mt-2 fs-14 d-block mb-0">Ddésactivez cette option si vous souhaitez démarrer votre réservation à partir d'une date et d'une heure spécifiques.</p>
																		</div>
																	</div>
																	<div class="booking-start-time-holder" style="display:none;">
																		<div class="form-group pt_30">
																			<label class="form-label fs-16">La réservation commence le</label>
																			<p class="mt-2 fs-14 d-block mb-0">Précisez la date et l'heure auxquelles vous souhaitez que la réservation commence.</p>
																			<div class="row g-3">
																				<div class="col-md-6">
																					<label class="form-label mt-3 fs-6">Date de l'évènement.*</label>																
																					<div class="loc-group position-relative">
																						<input class="form-control h_50 datepicker-here" data-language="en" type="text" placeholder="MM/DD/YYYY" value="">
																						<span class="absolute-icon"><i class="fa-solid fa-calendar-days"></i></span>
																					</div>
																				</div>
																				<div class="col-md-6">																		
																					<div class="clock-icon">
																						<label class="form-label mt-3 fs-6">Temps</label>	
																						<select class="selectpicker" data-size="5" data-live-search="true">
																							<option value="00:00">12:00 AM</option>
																							<option value="00:15">12:15 AM</option>
																							<option value="00:30">12:30 AM</option>
																							<option value="00:45">12:45 AM</option>
																							<option value="01:00">01:00 AM</option>
																							<option value="01:15">01:15 AM</option>
																							<option value="01:30">01:30 AM</option>
																							<option value="01:45">01:45 AM</option>
																							<option value="02:00">02:00 AM</option>
																							<option value="02:15">02:15 AM</option>
																							<option value="02:30">02:30 AM</option>
																							<option value="02:45">02:45 AM</option>
																							<option value="03:00">03:00 AM</option>
																							<option value="03:15">03:15 AM</option>
																							<option value="03:30">03:30 AM</option>
																							<option value="03:45">03:45 AM</option>
																							<option value="04:00">04:00 AM</option>
																							<option value="04:15">04:15 AM</option>
																							<option value="04:30">04:30 AM</option>
																							<option value="04:45">04:45 AM</option>
																							<option value="05:00">05:00 AM</option>
																							<option value="05:15">05:15 AM</option>
																							<option value="05:30">05:30 AM</option>
																							<option value="05:45">05:45 AM</option>
																							<option value="06:00">06:00 AM</option>
																							<option value="06:15">06:15 AM</option>
																							<option value="06:30">06:30 AM</option>
																							<option value="06:45">06:45 AM</option>
																							<option value="07:00">07:00 AM</option>
																							<option value="07:15">07:15 AM</option>
																							<option value="07:30">07:30 AM</option>
																							<option value="07:45">07:45 AM</option>
																							<option value="08:00">08:00 AM</option>
																							<option value="08:15">08:15 AM</option>
																							<option value="08:30">08:30 AM</option>
																							<option value="08:45">08:45 AM</option>
																							<option value="09:00">09:00 AM</option>
																							<option value="09:15">09:15 AM</option>
																							<option value="09:30">09:30 AM</option>
																							<option value="09:45">09:45 AM</option>
																							<option value="10:00" selected="selected">10:00 AM</option>
																							<option value="10:15">10:15 AM</option>
																							<option value="10:30">10:30 AM</option>
																							<option value="10:45">10:45 AM</option>
																							<option value="11:00">11:00 AM</option>
																							<option value="11:15">11:15 AM</option>
																							<option value="11:30">11:30 AM</option>
																							<option value="11:45">11:45 AM</option>
																							<option value="12:00">12:00 PM</option>
																							<option value="12:15">12:15 PM</option>
																							<option value="12:30">12:30 PM</option>
																							<option value="12:45">12:45 PM</option>
																							<option value="13:00">01:00 PM</option>
																							<option value="13:15">01:15 PM</option>
																							<option value="13:30">01:30 PM</option>
																							<option value="13:45">01:45 PM</option>
																							<option value="14:00">02:00 PM</option>
																							<option value="14:15">02:15 PM</option>
																							<option value="14:30">02:30 PM</option>
																							<option value="14:45">02:45 PM</option>
																							<option value="15:00">03:00 PM</option>
																							<option value="15:15">03:15 PM</option>
																							<option value="15:30">03:30 PM</option>
																							<option value="15:45">03:45 PM</option>
																							<option value="16:00">04:00 PM</option>
																							<option value="16:15">04:15 PM</option>
																							<option value="16:30">04:30 PM</option>
																							<option value="16:45">04:45 PM</option>
																							<option value="17:00">05:00 PM</option>
																							<option value="17:15">05:15 PM</option>
																							<option value="17:30">05:30 PM</option>
																							<option value="17:45">05:45 PM</option>
																							<option value="18:00">06:00 PM</option>
																							<option value="18:15">06:15 PM</option>
																							<option value="18:30">06:30 PM</option>
																							<option value="18:45">06:45 PM</option>
																							<option value="19:00">07:00 PM</option>
																							<option value="19:15">07:15 PM</option>
																							<option value="19:30">07:30 PM</option>
																							<option value="19:45">07:45 PM</option>
																							<option value="20:00">08:00 PM</option>
																							<option value="20:15">08:15 PM</option>
																							<option value="20:30">08:30 PM</option>
																							<option value="20:45">08:45 PM</option>
																							<option value="21:00">09:00 PM</option>
																							<option value="21:15">09:15 PM</option>
																							<option value="21:30">09:30 PM</option>
																							<option value="21:45">09:45 PM</option>
																							<option value="22:00">10:00 PM</option>
																							<option value="22:15">10:15 PM</option>
																							<option value="22:30">10:30 PM</option>
																							<option value="22:45">10:45 PM</option>
																							<option value="23:00">11:00 PM</option>
																							<option value="23:15">11:15 PM</option>
																							<option value="23:30">11:30 PM</option>
																							<option value="23:45">11:45 PM</option>
																						</select>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="setting-item border_bottom pb_30 pt_30">
																	<div class="d-flex align-items-start">
																		<label class="btn-switch m-0 me-3">
																			<input type="checkbox" class="" id="booking-end-time-btn" value="" checked>
																			<span class="checkbox-slider"></span>
																		</label>
																		<div class="d-flex flex-column">
																			<label class="color-black fw-bold mb-1">Je souhaite que les réservations se poursuivent jusqu'à la fin de mon événement.</label>
																			<p class="mt-2 fs-14 d-block mb-0">Désactivez cette option si vous souhaitez mettre fin à votre réservation à partir d'une date et d'une heure précises.</p>
																		</div>
																	</div>
																	<div class="booking-end-time-holder" style="display:none;">
																		<div class="form-group pt_30">
																			<label class="form-label fs-16">La réservation se termine le</label>
																			<p class="mt-2 fs-14 d-block mb-0">Précisez la date et l'heure auxquelles vous souhaitez que la réservation commence.</p>
																			<div class="row g-3">
																				<div class="col-md-6">
																					<label class="form-label mt-3 fs-6">Date de l'évènement.*</label>																
																					<div class="loc-group position-relative">
																						<input class="form-control h_50 datepicker-here" data-language="en" type="text" placeholder="MM/DD/YYYY" value="">
																						<span class="absolute-icon"><i class="fa-solid fa-calendar-days"></i></span>
																					</div>
																				</div>
																				<div class="col-md-6">																		
																					<div class="clock-icon">
																						<label class="form-label mt-3 fs-6">Temps</label>	
																						<select class="selectpicker" data-size="5" data-live-search="true">
																							<option value="00:00">12:00 AM</option>
																							<option value="00:15">12:15 AM</option>
																							<option value="00:30">12:30 AM</option>
																							<option value="00:45">12:45 AM</option>
																							<option value="01:00">01:00 AM</option>
																							<option value="01:15">01:15 AM</option>
																							<option value="01:30">01:30 AM</option>
																							<option value="01:45">01:45 AM</option>
																							<option value="02:00">02:00 AM</option>
																							<option value="02:15">02:15 AM</option>
																							<option value="02:30">02:30 AM</option>
																							<option value="02:45">02:45 AM</option>
																							<option value="03:00">03:00 AM</option>
																							<option value="03:15">03:15 AM</option>
																							<option value="03:30">03:30 AM</option>
																							<option value="03:45">03:45 AM</option>
																							<option value="04:00">04:00 AM</option>
																							<option value="04:15">04:15 AM</option>
																							<option value="04:30">04:30 AM</option>
																							<option value="04:45">04:45 AM</option>
																							<option value="05:00">05:00 AM</option>
																							<option value="05:15">05:15 AM</option>
																							<option value="05:30">05:30 AM</option>
																							<option value="05:45">05:45 AM</option>
																							<option value="06:00">06:00 AM</option>
																							<option value="06:15">06:15 AM</option>
																							<option value="06:30">06:30 AM</option>
																							<option value="06:45">06:45 AM</option>
																							<option value="07:00">07:00 AM</option>
																							<option value="07:15">07:15 AM</option>
																							<option value="07:30">07:30 AM</option>
																							<option value="07:45">07:45 AM</option>
																							<option value="08:00">08:00 AM</option>
																							<option value="08:15">08:15 AM</option>
																							<option value="08:30">08:30 AM</option>
																							<option value="08:45">08:45 AM</option>
																							<option value="09:00">09:00 AM</option>
																							<option value="09:15">09:15 AM</option>
																							<option value="09:30">09:30 AM</option>
																							<option value="09:45">09:45 AM</option>
																							<option value="10:00" selected="selected">10:00 AM</option>
																							<option value="10:15">10:15 AM</option>
																							<option value="10:30">10:30 AM</option>
																							<option value="10:45">10:45 AM</option>
																							<option value="11:00">11:00 AM</option>
																							<option value="11:15">11:15 AM</option>
																							<option value="11:30">11:30 AM</option>
																							<option value="11:45">11:45 AM</option>
																							<option value="12:00">12:00 PM</option>
																							<option value="12:15">12:15 PM</option>
																							<option value="12:30">12:30 PM</option>
																							<option value="12:45">12:45 PM</option>
																							<option value="13:00">01:00 PM</option>
																							<option value="13:15">01:15 PM</option>
																							<option value="13:30">01:30 PM</option>
																							<option value="13:45">01:45 PM</option>
																							<option value="14:00">02:00 PM</option>
																							<option value="14:15">02:15 PM</option>
																							<option value="14:30">02:30 PM</option>
																							<option value="14:45">02:45 PM</option>
																							<option value="15:00">03:00 PM</option>
																							<option value="15:15">03:15 PM</option>
																							<option value="15:30">03:30 PM</option>
																							<option value="15:45">03:45 PM</option>
																							<option value="16:00">04:00 PM</option>
																							<option value="16:15">04:15 PM</option>
																							<option value="16:30">04:30 PM</option>
																							<option value="16:45">04:45 PM</option>
																							<option value="17:00">05:00 PM</option>
																							<option value="17:15">05:15 PM</option>
																							<option value="17:30">05:30 PM</option>
																							<option value="17:45">05:45 PM</option>
																							<option value="18:00">06:00 PM</option>
																							<option value="18:15">06:15 PM</option>
																							<option value="18:30">06:30 PM</option>
																							<option value="18:45">06:45 PM</option>
																							<option value="19:00">07:00 PM</option>
																							<option value="19:15">07:15 PM</option>
																							<option value="19:30">07:30 PM</option>
																							<option value="19:45">07:45 PM</option>
																							<option value="20:00">08:00 PM</option>
																							<option value="20:15">08:15 PM</option>
																							<option value="20:30">08:30 PM</option>
																							<option value="20:45">08:45 PM</option>
																							<option value="21:00">09:00 PM</option>
																							<option value="21:15">09:15 PM</option>
																							<option value="21:30">09:30 PM</option>
																							<option value="21:45">09:45 PM</option>
																							<option value="22:00">10:00 PM</option>
																							<option value="22:15">10:15 PM</option>
																							<option value="22:30">10:30 PM</option>
																							<option value="22:45">10:45 PM</option>
																							<option value="23:00">11:00 PM</option>
																							<option value="23:15">11:15 PM</option>
																							<option value="23:30">11:30 PM</option>
																							<option value="23:45">11:45 PM</option>
																						</select>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="setting-item border_bottom pb_30 pt_30">
																	<div class="d-flex align-items-start">
																		<label class="btn-switch m-0 me-3">
																			<input type="checkbox" class="" id="passing-service-charge-btn" value="" checked>
																			<span class="checkbox-slider"></span>
																		</label>
																		<div class="d-flex flex-column">
																			<label class="color-black fw-bold mb-1">Je souhaite que mes clients paient les frais de service applicables au moment où ils effectuent la réservation.</label>
																			<!--<p class="mt-2 fs-14 d-block mb-0 pe_right">En répercutant vos frais de service, vos participants paieront vos frais de service en plus du prix du billet.</p>-->
																		</div>
																	</div>
																</div>
																<div class="setting-item border_bottom pb_30 pt_30">
																	<div class="d-flex align-items-start">
																		<label class="btn-switch m-0 me-3">
																			<input type="checkbox" class="" id="refund-policies-btn" value="" checked>
																			<span class="checkbox-slider"></span>
																		</label>
																		<div class="d-flex flex-column">
																			<label class="color-black fw-bold mb-1">Je ne souhaite pas offrir à mes clients la possibilité d'annuler leurs commandes et de recevoir un remboursement..</label>
																			<p class="mt-2 fs-14 d-block mb-0">Désactivez ce curseur si vous souhaitez permettre à vos clients d'annuler leur commande et de sélectionner une politique de remboursement.</p>
																		</div>
																	</div>
																	<div class="refund-policies-holder" style="display:none;">
																		<div class="refund-policies-content border_top mt-4">
																			<div class="row grid-padding-8">
																				<div class="col-md-12 mb-6">
																					<div class="refund-method">
																						<div class="form-group mb-0">
																							<label class="brn-checkbox-radio mb-0 mt-4">
																								<input type="radio" required="" name="refund_policy_id" value="refund-id-1" class="form-check-input br-checkbox refund-policy1" checked>
																								<span class="fs-14 fw-bold ms-xl-2">Je souhaite offrir à mes clients la possibilité d'annuler leurs commandes. Cependant, je gérerai le remboursement manuellement.</span>
																								<span class="ms-xl-4 d-block sub-label mt-2 mb-4">Sélectionnez cette option si vous souhaitez rembourser votre client manuellement.</span>
																							</label>
																							<div class="refund-input-content" data-method="refund-id-1">
																								<div class="input-content mb-3">
																									<label class="color-black mb-2 fs-14 fw-bold">L'annulation doit être faite<span class="red">*</span></label>
																									<div class="d-block d-md-flex align-items-center flex-wrap flex-lg-wrap-reverse">
																										<div class="col-md-4 pl-0">
																											<div class="input-group mr-3 mx-width-135 input-number">
																												<input type="number" min="0" max="30" class="form-control" placeholder="Nombre de jours">
																											</div>
																										</div>
																										<div class="input-sign ms-md-3 mt-3 mb-3">jours avant l'événement</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div class="refund-method">
																						<label class="brn-checkbox-radio mb-0 mt-4">
																							<input type="radio" name="refund_policy_id" value="refund-id-2" class="form-check-input br-checkbox refund-polic-2">
																							<span class="fs-14 fw-bold ms-xl-2">Je souhaite offrir à mes clients la possibilité d'annuler leurs commandes et de recevoir un remboursement automatiquement.</span>
																							<span class="ms-xl-4 d-block sub-label mt-2 mb-4">Choisissez cette option si vous souhaitez rembourser automatiquement votre client.</span>
																						</label>
																						<div class="refund-input-content" data-method="refund-id-2">
																							<div class="input-content mb-3">
																								<label class="color-black mb-2 fs-14 fw-bold">L'annulation doit être faite<span class="red">*</span></label>
																								<div class="d-block d-md-flex align-items-center flex-wrap flex-lg-wrap-reverse">
																									<div class="col-md-4">
																										<div class="input-group input-number">
																											<input type="number" min="0" max="30" class="form-control" placeholder="Nombre de jours">
																										</div>
																									</div>
																									<div class="input-sign ms-md-3 mt-3 mb-3">jours avant l'évènement</div>
																								</div>
																							</div>
																							<div class="input-content mb-3">
																								<label class="color-black mb-2 fs-14 fw-bold">Montant du remboursement <span class="red">*</span></label>
																								<div class="d-block d-md-flex align-items-center flex-wrap flex-lg-wrap-reverse">
																									<div class="col-md-4">
																										<div class="input-group loc-group position-relative">
																											<input type="text" value="" class="form-control" placeholder="Montant">
																											<span class="percentage-icon"><i class="fa-solid fa-percent"></i></span>
																										</div>
																									</div>
																									<div class="input-sign ms-md-3 mt-3 mb-3">Jours avant l'événement</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>																	
																		</div>
																	</div>
																</div>
																<div class="setting-item border_bottom pb_30 pt_30">
																	<div class="d-flex align-items-start">
																		<label class="btn-switch m-0 me-3">
																			<input type="checkbox" class="" id="ticket-instructions-btn" value="" checked>
																			<span class="checkbox-slider"></span>
																		</label>
																		<div class="d-flex flex-column">
																			<label class="color-black fw-bold mb-1">Je n'ai pas besoin d'ajouter d'instructions particulières sur les tickets.</label>
																			<p class="mt-2 fs-14 d-block mb-0">Utilisez cet espace pour fournir toutes les listes de contrôle de dernière minute que vos participants doivent connaître afin d'assister à votre événement. Tout ce que vous fournissez ici sera imprimé sur votre ticket.</p>
																		</div>
																	</div>		
																	<div class="ticket-instructions-holder" style="display:none;">
																		<div class="ticket-instructions-content mt-4">
																			<textarea class="form-textarea" placeholder="About"></textarea>
																		</div>
																	</div>
																</div>
																<!--<div class="setting-item pb-0 pt_30">
																	<div class="d-flex align-items-start">
																		<label class="btn-switch m-0 me-3">
																			<input type="checkbox" class="" id="tags-btn" value="" checked>
																			<span class="checkbox-slider"></span>
																		</label>
																		<div class="d-flex flex-column">
																			<label class="color-black fw-bold mb-1">Je ne souhaite pas ajouter de tags dans mon événement</label>
																			
																		</div>
																	</div>
																	<div class="tags-holder" style="display:none;">
																		<div class="ticket-instructions-content tags-container mt-4">
																			<input class="form-control tags-input" type="text" placeholder="Tapez vos balises et appuyez sur Entrée">
																			<div class="tags-list">
																												
																			</div>
																		</div>																		
																	</div>
																</div>-->
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>														   
								</div>
								<div class="step-footer step-tab-pager mt-4">
									<button data-direction="prev" class="btn btn-default btn-hover steps_btn">Précendent</button>
									<button data-direction="next" class="btn btn-default btn-hover steps_btn">Suivant</button>
									<button data-direction="finish" class="btn btn-default btn-hover steps_btn">Créer</button>
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