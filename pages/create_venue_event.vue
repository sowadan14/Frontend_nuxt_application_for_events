<template>
    <div>
        	<!-- Create Single Ticket Model Start-->
	<div class="modal fade" id="singleTicketModal" tabindex="-1" aria-labelledby="singleTicketModalLabel" aria-hidden="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="singleTicketModalLabel">Créer un ticket unique</h5>
					<button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i class="uil uil-multiply"></i></button>
				</div>
				<div class="modal-body">
					<div class="model-content main-form">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<div class="form-group mt-4">
									<label class="form-label">Nom du ticket*</label>
									<input class="form-control h_40" type="text" placeholder="Event Ticket Name" value="">																								
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="main-card p-4 mt-4">
									<div class="form-label mb-4 fs-16">Restrictions de tickets</div>
									<div class="form-group border_bottom">
										<div class="d-flex align-items-center flex-wrap pb-4 flex-nowrap">
											<h4 class="fs-14 mb-0 me-auto">Nombre total de tickets disponible</h4>
											<label class="btn-switch m-0 me-3">
												<input type="checkbox" id="is-restrict-total-ticket" checked="">
												<span class="checkbox-slider"></span>
											</label>
											<div>
											   <label class="fs-12 m-0">Illimiter</label>
											</div>
										</div>
										<div class="p-0 mb-4 total_ticket_per_level" style="display:none;">
											<div class="form-group">
												<div class="input-number">
													<input class="form-control h_40" type="number" min="0" max="30" placeholder="Enter Total Tickets">
												</div>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="d-flex align-items-center flex-wrap pt-4 flex-nowrap">
											<h4 class="fs-14 mb-0 me-auto">Nombre maximun de tickets pour chaque client</h4>
											<label class="btn-switch m-0 me-3">
												<input type="checkbox" id="is-restrict-ticket-per-user" checked="">
												<span class="checkbox-slider"></span>
											</label>
											<div>
											   <label class="fs-12 m-0">Illimité</label>
											</div>
										</div>
										<div class="p-0 mt-4 total_ticket_per_user" style="display:none;">
											<div class="form-group">
												<div class="input-number">
													<input class="form-control h_40" type="number" min="0" max="30" placeholder="Enter Max. per order">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="main-card p-4 mt-4">
									<div class="form-label mb-4 fs-16">Restrictions de tickets</div>
									<div class="form-group">
										<label class="form-label mb-2 fs-14">Commande de tickets*</label>
										<input class="form-control h_40" type="number" value="1" min="1" max="30" placeholder="Enter Sort Order">
									</div>
									<div class="form-group mt-4">
										<label class="form-label mb-2 fs-14">Description de tickets*</label>
										<textarea class="form-textarea" placeholder="Description will go here"></textarea>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="main-card p-4 mt-4">
									<div class="d-flex align-items-center justify-content-between price-variation-head">
										<h5 class="m-0 color-black fs-16"> 
										Variantes (<span class="ticket-subtype-count">1</span>)</h5>
										<span class="add-btn btn-hover">  
											<i class="fa-regular fa-square-plus"></i>
										</span>
									</div>
									<div class="table-responsive">
										<div class="div-base-table border-0 mt-2 full-width small-table ticket-subtype-table">
											<div class="table-row table-head no-bg">
												<div class="table-col fs-14 text-light3">Prix <span class="red">*</span></div>
												<div class="table-col fs-14 text-light3">Nom de la variante <span class="red">*</span></div>
												<div class="table-col fs-14 text-light3 text-right">Actions</div>
											</div>
											<div class="table-row ticket-subtype-row">
												<div class="table-col first-col">
													<div class="form-group m-0 form-custom-validation">                  
														<input class="form-control h_40" type="number" min="0" max="10000" required="" placeholder="Price" value="">
													</div>
												</div>
												<div class="table-col second-col">
													<div class="form-group m-0">
														<input class="form-control h_40" type="text" maxlength="75" required="" value="">
													</div>
												</div>
												<div class="table-col third-col">
													<button type="button" class="v-btn-close btn-hover">
														<i class="fa-solid fa-xmark"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="main-card p-4 mt-4">
									<div class="form-group">
										<div class="d-flex align-items-start">
											<label class="btn-switch m-0 me-3">
												<input type="checkbox" class="" id="bird-discount" value="">
												<span class="checkbox-slider"></span>
											</label>
											<div class="d-flex flex-column">
												<label class="color-black mb-1">Je souhaite offrir une réduction pour les lève-tôt.</label>
												<!--<p class="mt-2 fs-14 d-block mb-3">L'activation de cette réduction permet à vos participants d'obtenir toutes les fonctionnalités des billets réguliers à un prix réduit.</p>-->
											</div>
										</div>
										<div class="online-event-discount-wrapper" style="display: none;">
											<div class="row g-3">
												<div class="col-md-3">
													<label class="form-label mt-3 fs-6">Réduction*</label>
													<input class="form-control h_40" type="text" placeholder="0" value="">
												</div>
												<div class="col-md-3">
													<label class="form-label mt-3 fs-6">Prix*</label>
													<select class="selectpicker">
														<option value="Percentage" selected="">Pour cent(%)</option>
														<option value="Fixed">Fixéé(F CFA)</option>
													</select>
												</div>
												<div class="col-md-3">
													<label class="form-label mt-3 fs-6">La réduction se termine le*</label>
													<div class="loc-group position-relative">
														<input class="form-control h_40 datepicker-here" data-language="en" data-position="top left" type="text" placeholder="MM/DD/YYYY" value="">
														<span class="absolute-icon top_0"><i class="fa-solid fa-calendar-days"></i></span>
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
				<div class="modal-footer">
					<button type="button" class="co-main-btn min-width btn-hover h_40" data-bs-target="#aboutModal" data-bs-toggle="modal" data-bs-dismiss="modal">Annuler</button>
					<button type="button" class="main-btn min-width btn-hover h_40">Enregistrer</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Create Single Ticket Model End-->
	<!-- Create Group Ticket Model Start-->
	<div class="modal fade" id="groupTicketModal" tabindex="-1" aria-labelledby="groupTicketModalLabel" aria-hidden="false">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="groupTicketModalLabel">Créer un ticket de groupe</h5>
					<button type="button" class="close-model-btn" data-bs-dismiss="modal" aria-label="Close"><i class="uil uil-multiply"></i></button>
				</div>
				<div class="modal-body">
					<div class="model-content main-form">
						<div class="row">
							<div class="col-lg-12 col-md-12">
								<div class="form-group mt-4">
									<label class="form-label">Nom du ticket*</label>
									<input class="form-control h_40" type="text" placeholder="Enter Ticket Type - Group Name (E.g Gold - Family Pass)" value="">																								
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="main-card p-4 mt-4">
									<div class="form-label mb-4 fs-16">Variantes de tickets</div>
									<div class="form-group border_bottom">
										<div class="d-flex align-items-center flex-wrap pb-4 flex-nowrap">
											<h4 class="fs-14 mb-0 me-auto">Nombre total de ticket disponible</h4>
											<label class="btn-switch m-0 me-3">
												<input type="checkbox" id="is-restrict-total-ticket2" checked="">
												<span class="checkbox-slider"></span>
											</label>
											<div>
											   <label class="fs-12 m-0">Illimité</label>
											</div>
										</div>
										<div class="p-0 mb-4 total_ticket_per_level2" style="display:none;">
											<div class="form-group">
												<div class="input-number">
													<input class="form-control h_40" type="number" min="0" max="30" placeholder="Enter Total Tickets">
												</div>
											</div>
										</div>
									</div>
									<div class="form-group">
										<div class="d-flex align-items-center flex-wrap pt-4 flex-nowrap">
											<h4 class="fs-14 mb-0 me-auto">Nombre maximum de tickets pour chaque client</h4>
											<label class="btn-switch m-0 me-3">
												<input type="checkbox" id="is-restrict-ticket-per-user2" checked="">
												<span class="checkbox-slider"></span>
											</label>
											<div>
											   <label class="fs-12 m-0">Illimité</label>
											</div>
										</div>
										<div class="p-0 mt-4 total_ticket_per_user2" style="display:none;">
											<div class="form-group">
												<div class="input-number">
													<input class="form-control h_40" type="number" min="0" max="30" placeholder="Enter Max. per order">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="main-card p-4 mt-4">
									<div class="form-label mb-4 fs-16">Variante de tickets</div>
									<div class="form-group">
										<label class="form-label mb-2 fs-14">Commande de tickets*</label>
										<input class="form-control h_40" type="number" value="1" min="1" max="30" placeholder="Enter Sort Order">
									</div>
									<div class="form-group mt-4">
										<label class="form-label mb-2 fs-14">Description du ticket *</label>
										<textarea class="form-textarea" placeholder="Description will go here"></textarea>
									</div>
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="form-group mt-4">
									<label class="form-label mb-2 fs-14">Prix du ticket*</label>
									<input class="form-control h_40" type="number" value="10" placeholder="Enter Ticket Price">
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="form-group mt-4">
									<label class="form-label mb-2 fs-14">Nombre de billets pour chaque groupe*</label>
									<input class="form-control h_40" type="number" min="0" value="" placeholder="Enter Total Tickets Per Group">
								</div>
							</div>
							<div class="col-lg-12 col-md-12">
								<div class="main-card p-4 mt-4">
									<div class="form-group">
										<div class="d-flex align-items-start">
											<label class="btn-switch m-0 me-3">
												<input type="checkbox" class="" id="bird-discount2" value="">
												<span class="checkbox-slider"></span>
											</label>
											<div class="d-flex flex-column">
												<label class="color-black mb-1">Je veux offrir une réduction pour les lève-tôt.</label>
												<!--<p class="mt-2 fs-14 d-block mb-3">L'activation de cette réduction permet à vos participants d'obtenir toutes les fonctionnalités des billets réguliers à un prix réduit.</p>-->
											</div>
										</div>
										<div class="online-event-discount-wrapper2" style="display: none;">
											<div class="row g-3">
												<div class="col-md-3">
													<label class="form-label mt-3 fs-6">Réduction*</label>
													<input class="form-control h_40" type="text" placeholder="0" value="">
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
														<input class="form-control h_40 datepicker-here" data-language="en" data-position="top left" type="text" placeholder="MM/DD/YYYY" value="">
														<span class="absolute-icon top_0"><i class="fa-solid fa-calendar-days"></i></span>
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
				<div class="modal-footer">
					<button type="button" class="co-main-btn min-width btn-hover h_40" data-bs-target="#aboutModal" data-bs-toggle="modal" data-bs-dismiss="modal">Annuler</button>
					<button type="button" class="main-btn min-width btn-hover h_40">Enregistrer</button>
				</div>
			</div>
		</div>
	</div>
	<!-- Create Group Ticket Model End-->
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
									<li class="breadcrumb-item active" aria-current="page">Créer évènement sur place</li>
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
							<h3>Créer évènement sur place</h3>
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
													<h4><i class="fa-solid fa-circle-info step_icon me-3"></i>Détails</h4>
												</div>
												<div class="p-4 bp-form main-form">
													<div class="row">
														<div class="col-lg-12 col-md-12">
															<div class="form-group border_bottom pb_30">
																<label class="form-label fs-16">Donnez un nom à votre évènement*</label>
																
																<input class="form-control h_50" type="text" placeholder="Enter event name here" value="">
															</div>
															<div class="form-group border_bottom pt_30 pb_30">
																<label class="form-label fs-16">Choisissez une catégorie pour votre événement.*</label>
																
																<select class="selectpicker" multiple="" data-size="5" title="Select category" data-live-search="true">
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
																
																<div class="row g-2">
																	<div class="col-md-6">
																		<label class="form-label mt-3 fs-6">Date de l'évènement.*</label>																
																		<div class="loc-group position-relative">
																			<input class="form-control h_50 datepicker-here" data-language="en" type="text" placeholder="MM/DD/YYYY" value="">
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
																
																<div class="content-holder mt-4">
																	<div class="default-event-thumb">   
																		<div class="default-event-thumb-btn">
																			<div class="thumb-change-btn">
																				<input type="file" id="thumb-img">
																				<label for="thumb-img">Changer l'image</label>
																			</div>
																		</div>
																		<img src="images/banners/banner1.jpeg" alt="">
																	</div>
																</div>
															</div>
															<div class="form-group border_bottom pb_30">
																<label class="form-label fs-16">Décrivez votre évènement.</label>
																
																<div class="text-editor mt-4">
																	<div id="pd_editor"></div>
																</div>
															</div>
															<div class="form-group pt_30 pb-2">
																<label class="form-label fs-16">Où se déroule votre événement ? *</label>
															
																<div class="stepper-data-set">
																	<div class="content-holder template-selector">
																		<div class="row g-4">
																			<div class="col-md-12">
																				<div class="venue-event">
																					<div class="map">
																						<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d27382.59422947023!2d75.84077125074462!3d30.919535510612153!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1534312417365" style="border:0" allowfullscreen></iframe>	
																					</div>
																				</div>
																			</div>
																			<div class="col-md-12">
																				<div class="form-group mt-1">
																					<label class="form-label fs-6">Lieu*</label>
																					<input class="form-control h_50" type="text" placeholder="" value="">
																				</div>
																			</div>
																			<div class="col-md-6">
																				<div class="form-group mt-1">
																					<label class="form-label fs-6">Address*</label>
																					<input class="form-control h_50" type="text" placeholder="" value="">
																				</div>
																			</div>
																			
																			<div class="col-md-6">
																				<div class="form-group main-form mt-1">
																					<label class="form-label">Pays*</label>
																					<select class="selectpicker" data-size="5" title="Nothing selected" data-live-search="true">
																						<option value="Algeria">Algeria</option>
																						<option value="Argentina">Argentina</option>
																						<option value="Australia" selected="">Togo</option>
																						<option value="Austria">Austria (Österreich)</option>
																						<option value="Belgium">Belgium (België)</option>
																						<option value="Bolivia">Bolivia</option>
																						<option value="Brazil">Brazil</option>
																						<option value="Canada">Canada</option>
																						<option value="Chile">Chile</option>
																						<option value="Colombia">Colombia</option>
																						<option value="Costa Rica">Costa Rica</option>
																						<option value="Cyprus">Cyprus</option>
																						<option value="Czech Republic">Czech Republic</option>
																						<option value="Denmark">Denmark</option>
																						<option value="Dominican Republic">Dominican Republic</option>
																						<option value="Estonia">Estonia</option>
																						<option value="Finland">Finland</option>
																						<option value="France">France</option>
																						<option value="Germany">Germany</option>
																						<option value="Greece">Greece</option>
																						<option value="Hong Kong">Hong Kong</option>
																						<option value="Iceland">Iceland</option>
																						<option value="India">India</option>
																						<option value="Indonesia">Indonesia</option>
																						<option value="Ireland">Ireland</option>
																						<option value="Israel">Israel</option>
																						<option value="Italy">Italy</option>
																						<option value="Japan">Japan</option>
																						<option value="Latvia">Latvia</option>
																						<option value="Lithuania">Lithuania</option>
																						<option value="Luxembourg">Luxembourg</option>
																						<option value="Malaysia">Malaysia</option>
																						<option value="Mexico">Mexico</option>
																						<option value="Nepal">Nepal</option>
																						<option value="Netherlands">Netherlands</option>
																						<option value="New Zealand">New Zealand</option>
																						<option value="Norway">Norway</option>
																						<option value="Paraguay">Paraguay</option>
																						<option value="Peru">Peru</option>
																						<option value="Philippines">Philippines</option>
																						<option value="Poland">Poland</option>
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
																				<div class="form-group mt-1">
																					<label class="form-label">Ville/Banlieue*</label>
																					<input class="form-control h_50" type="text" placeholder="" value="Lomé">																								
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
												<div class="bp-form main-form">
													<div class="p-4 form-group border_bottom pb_30">
														<div class="">
															<div class="ticket-section">
																<label class="form-label fs-16">Création de tickets!</label>
																<p class="mt-2 fs-14 d-block mb-3 pe_right">Créez des Tickets pour votre événement en cliquant sur le bouton « Ajouter des tickets ci-dessous.</p>
															</div>
															<div class="d-flex align-items-center justify-content-between pt-4 pb-3 full-width">
																<h3 class="fs-18 mb-0">Tickets<span class="venue-event-ticket-counter">3</span>)</h3>
																<div class="dropdown dropdown-default dropdown-normal btn-ticket-type-top">
																	<button class="dropdown-toggle main-btn btn-hover h_40 pe-4 ps-4" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																		<span>Ajouter Tickets</span>
																	</button>
																	<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style="">
																		<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#singleTicketModal">
																			<i class="fa-solid fa-ticket me-2"></i>
																			Un seul Ticket
																		</a>
																		<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#groupTicketModal">
																			<i class="fa-solid fa-ticket me-2"></i>
																			 Ticket de groupe
																		</a>
																	</div>
																</div>
															</div>
															<div class="ticket-type-item-empty d-none text-center p_30">
																<div class="ticket-list-icon d-inline-block">
																	<img src="images/ticket.png" alt="">
																</div>
																<h4 class="color-black mt-4 mb-3 fs-18">Vous n'avez  pas encore de Tickets.</h4>
																<p class="mb-0">Vous n'avez pas encore créé de ticket. Veuillez cliquer sur le bouton ci-dessus pour créer votre Ticket d'événement.</p>
															</div>
															<div class="ticket-type-item-list mt-4">
																<div class="price-ticket-card mt-4">
																	<div class="price-ticket-card-head d-md-flex flex-wrap align-items-start justify-content-between position-relative p-4">
																		<div class="d-flex align-items-center top-name">
																			<div class="icon-box">
																				<span class="icon-big rotate-icon icon icon-purple">
																					<i class="fa-solid fa-ticket"></i>
																				</span>
																				<h5 class="fs-16 mb-1 mt-1">Nouveau petit - 500 F CFA</h5>
																				<p class="text-gray-50 m-0"><span class="visitor-date-time">22 Août, 2023</span></p>
																			</div>
																		</div>
																		<div class="d-flex align-items-center">
																			<div class="price-badge">
																				<img src="images/discount.png" alt="">
																			</div>
																			<label class="btn-switch tfs-8 mb-0 me-4 mt-1">
																				<input type="checkbox" value="" checked>
																				<span class="checkbox-slider"></span>
																			</label>
																			<div class="dropdown dropdown-default dropdown-text dropdown-icon-item">
																				<button class="option-btn-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																					<i class="fa-solid fa-ellipsis-vertical"></i>
																				</button>
																				<div class="dropdown-menu dropdown-menu-end">
																					<a href="#" class="dropdown-item"><i class="fa-solid fa-pen me-3"></i>Modifier</a>
																					<a href="#" class="dropdown-item"><i class="fa-solid fa-trash-can me-3"></i>Supprimer</a>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="price-ticket-card-body border_top p-4">
																		<div class="full-width d-flex flex-wrap justify-content-between align-items-center">
																			<div class="icon-box">
																				<div class="icon me-3">
																					<i class="fa-solid fa-ticket"></i>
																				</div>
																				<span class="text-145">Nombre total de tickets</span>
																				<h6 class="coupon-status">20</h6>
																			</div>
																			<div class="icon-box">
																				<div class="icon me-3">
																					<i class="fa-solid fa-users"></i>
																				</div>
																				<span class="text-145">Limite de Tickets par client</span>
																				<h6 class="coupon-status">2</h6>
																			</div>
																			<div class="icon-box">
																				<div class="icon me-3">
																					<i class="fa-solid fa-cart-shopping"></i>
																				</div>
																				<span class="text-145">Réduction</span>
																				<h6 class="coupon-status">10%</h6>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="price-ticket-card mt-4">
																	<div class="price-ticket-card-head d-md-flex flex-wrap align-items-start justify-content-between position-relative p-4">
																		<div class="d-flex align-items-center top-name">
																			<div class="icon-box">
																				<span class="icon-big rotate-icon icon icon-yellow">
																					<i class="fa-solid fa-ticket"></i>
																				</span>
																				<h5 class="fs-16 mb-1 mt-1">Groupe - 500 F CFA</h5>
																				<p class="text-gray-50 m-0"><span class="visitor-date-time">22 Août, 2023</span></p>
																			</div>
																		</div>
																		<div class="d-flex align-items-center">
																			<div class="price-badge">
																				<img src="images/discount.png" alt="">
																			</div>
																			<label class="btn-switch tfs-8 mb-0 me-4 mt-1">
																				<input type="checkbox" value="" checked>
																				<span class="checkbox-slider"></span>
																			</label>
																			<div class="dropdown dropdown-default dropdown-text dropdown-icon-item">
																				<button class="option-btn-1" type="button" data-bs-toggle="dropdown" aria-expanded="false">
																					<i class="fa-solid fa-ellipsis-vertical"></i>
																				</button>
																				<div class="dropdown-menu dropdown-menu-end">
																					<a href="#" class="dropdown-item"><i class="fa-solid fa-pen me-3"></i>Modifier</a>
																					<a href="#" class="dropdown-item"><i class="fa-solid fa-trash-can me-3"></i>Supprimer</a>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="price-ticket-card-body border_top p-4">
																		<div class="full-width d-flex flex-wrap justify-content-between align-items-center">
																			<div class="icon-box">
																				<div class="icon me-3">
																					<i class="fa-solid fa-ticket"></i>
																				</div>
																				<span class="text-145">Nombre total de tickets</span>
																				<h6 class="coupon-status">Illimité</h6>
																			</div>
																			<div class="icon-box">
																				<div class="icon me-3">
																					<i class="fa-solid fa-users"></i>
																				</div>
																				<span class="text-145">limite de tickts par client</span>
																				<h6 class="coupon-status">Illimité</h6>
																			</div>
																			<div class="icon-box">
																				<div class="icon me-3">
																					<i class="fa-solid fa-cart-shopping"></i>
																				</div>
																				<span class="text-145">Réduction</span>
																				<h6 class="coupon-status">5%</h6>
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
																			<p class="mt-2 fs-14 d-block mb-0">Désactivez cette option si vous souhaitez démarrer votre réservation à partir d'une date et d'une heure précises.</p>
																		</div>
																	</div>
																	<div class="booking-start-time-holder" style="display:none;">
																		<div class="form-group pt_30">
																			<label class="form-label fs-16">La réservation commence le</label>
																			
																			<div class="row g-3">
																				<div class="col-md-6">
																					<label class="form-label mt-3 fs-6"> Date de l'évènement.*</label>																
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
																			
																		</div>
																	</div>
																	<div class="booking-end-time-holder" style="display:none;">
																		<div class="form-group pt_30">
																			<label class="form-label fs-16">Booking ends on</label>
																			<p class="mt-2 fs-14 d-block mb-0">Sprécisez la date et l'heure auxquelles vous souhaitez que la réservation commence.</p>
																			<div class="row g-3">
																				<div class="col-md-6">
																					<label class="form-label mt-3 fs-6"> Date de l'évènement.*</label>																
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
																		
																		</div>
																	</div>
																	<div class="refund-policies-holder" style="display:none;">
																		<div class="refund-policies-content border_top mt-4">
																			<div class="row grid-padding-8">
																				<div class="col-md-12 mb-6">
																					<div class="refund-method">
																						<div class="form-group mb-0">
																							<label class="brn-checkbox-radio mb-0 mt-4">
																								<input type="radio" required="" name="refund_policy_id" value="refund-id-1" class="form-check-input br-checkbox refund-policy1">
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
																										<div class="input-sign ms-md-3 mt-3 mb-3">jour avant l'évènement</div>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																					<div class="refund-method">
																						<label class="brn-checkbox-radio mb-0 mt-4">
																							<input type="radio" name="refund_policy_id" value="refund-id-2" class="form-check-input br-checkbox refund-polic-2">
																							<span class="fs-14 fw-bold ms-xl-2">Je souhaite offrir à mes clients la possibilité d'annuler leurs commandes et de recevoir un remboursement automatiquement.</span>
																							<span class="ms-xl-4 d-block sub-label mt-2 mb-4">Sélectionnez cette option si vous souhaitez rembourser automatiquement votre client.</span>
																						</label>
																						<div class="refund-input-content" data-method="refund-id-2">
																							<div class="input-content mb-3">
																								<label class="color-black mb-2 fs-14 fw-bold">L'annulation doit être faite <span class="red">*</span></label>
																								<div class="d-block d-md-flex align-items-center flex-wrap flex-lg-wrap-reverse">
																									<div class="col-md-4">
																										<div class="input-group input-number">
																											<input type="number" min="0" max="30" class="form-control" placeholder="nombre de jours">
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
																									<div class="input-sign ms-md-3 mt-3 mb-3">jours avant l'évènement</div>
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
																			
																		</div>
																	</div>		
																	<div class="ticket-instructions-holder" style="display:none;">
																		<div class="ticket-instructions-content mt-4">
																			<textarea class="form-textarea" placeholder="About"></textarea>
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
								<div class="step-footer step-tab-pager mt-4">
									<button data-direction="prev" class="btn btn-default btn-hover steps_btn">Précédent</button>
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