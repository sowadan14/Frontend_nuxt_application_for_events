<template>
    <div>
        <!-- Left Sidebar Start -->
	<nav class="vertical_nav">
		<div class="left_section menu_left" id="js-menu">
			<div class="left_section">
				<ul>
					<li class="menu--item">
						<a href="my_organisation_dashboard.html" class="menu--link" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-solid fa-gauge menu--icon"></i>
							<span class="menu--label">Tableau de bord</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_events.html" class="menu--link active" title="Events" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-solid fa-calendar-days menu--icon"></i>
							<span class="menu--label">Evènements</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_promotion.html" class="menu--link" title="Promotion" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-solid fa-rectangle-ad menu--icon"></i>
							<span class="menu--label">Promotion</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_contact_lists.html" class="menu--link" title="Contact List" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-regular fa-address-card menu--icon"></i>
							<span class="menu--label">Liste des contacts</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_payout.html" class="menu--link" title="Payouts" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-solid fa-credit-card menu--icon"></i>
							<span class="menu--label">Paiements</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_reports.html" class="menu--link" title="Reports" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-solid fa-chart-pie menu--icon"></i>
							<span class="menu--label">Rapports</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_subscription.html" class="menu--link" title="Subscription" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-solid fa-bahai menu--icon"></i>
							<span class="menu--label">Abonnement</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_conversion_setup.html" class="menu--link" title="Conversion Setup" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-solid fa-square-plus menu--icon"></i>
							<span class="menu--label">Configuration de la conversion</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_about.html" class="menu--link" title="About" data-bs-toggle="tooltip" data-bs-placement="right">
							<i class="fa-solid fa-circle-info menu--icon"></i>
							<span class="menu--label">À propos</span>
						</a>
					</li>
					<li class="menu--item">
						<a href="my_organisation_dashboard_my_team.html" class="menu--link team-lock" title="My Team" data-bs-toggle="tooltip" data-bs-placement="right"> 
							<i class="fa-solid fa-user-group menu--icon"></i>
							<span class="menu--label">Mon équipe</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- Left Sidebar End -->
	<!-- Body Start -->
	<div class="wrapper wrapper-body">
		<div class="dashboard-body">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<div class="d-main-title">
							<h3><i class="fa-solid fa-chart-pie me-3"></i>Rapports</h3>
						</div>
					</div>
					<div class="col-md-12">
						<div class="main-card mt-5">
							<div class="dashboard-wrap-content p-4">
								<div class="nav custom2-tabs btn-group" role="tablist">
									<button class="tab-link ms-0 active" data-bs-toggle="tab" data-bs-target="#orders-tab" type="button" role="tab" aria-controls="orders-tab" aria-selected="true">Ordres (<span class="total_event_counter">1</span>)</button>
									<button class="tab-link" data-bs-toggle="tab" data-bs-target="#customers-tab" type="button" role="tab" aria-controls="customers-tab" aria-selected="false">Clients (<span class="total_event_counter">0</span>)</button>
									<button class="tab-link" data-bs-toggle="tab" data-bs-target="#tickets-tab" type="button" role="tab" aria-controls="tickets-tab" aria-selected="false">Tickets (<span class="total_event_counter">1</span>)</button>
									<button class="tab-link" data-bs-toggle="tab" data-bs-target="#payouts-tab" type="button" role="tab" aria-controls="payouts-tab" aria-selected="false">Paiements (<span class="total_event_counter">1</span>)</button>
								</div>
								<div class="d-md-flex flex-wrap align-items-center">
									<div class="dashboard-date-wrap mt-4">
										<div class="form-group">
											<div class="relative-input position-relative">
												<input class="form-control h_40" type="text" placeholder="Rechercher par nom" value="">
												<i class="uil uil-search"></i>
											</div>
										</div>
									</div>
									<div class="rs ms-auto mt-4 mt_r4">
										<a href="#" class="pe-4 w-100 ps-4 text-center co-main-btn h_40 d-inline-block"><i class="fa-solid fa-arrow-rotate-right me-3"></i>Rafraîchir</a>
									</div>
								</div>
								<div class="main-form mt-4">
									<div class="row g-3">
										<div class="col-lg-3 col-md-6">
											<div class="form-group">
												<select class="selectpicker" data-size="5" data-live-search="true">
													<option value="all events" selected>Tous les évènements</option>																									
												</select>
											</div>
										</div>
										<div class="col-lg-3 col-md-6">
											<div class="form-group">
												<select class="selectpicker">
													<option value="Today">Aujourd'hui</option>																									
													<option value="Yesterday">Hier</option>																									
													<option value="Last 7 Days">Les 7 derniers jours</option>																									
													<option value="Last 30 Days" selected>Les 30 derniers jours</option>																									
													<option value="This Month">Ce mois-ci</option>																									
													<option value="Last Month">Le mois dernier</option>																																																	
													<option value="Custom Range">Gamme personnalisée</option>																																																	
												</select>
											</div>
										</div>
										<div class="col-lg-3 col-md-6">
											<div class="form-group">
												<select class="selectpicker">
													<option value="All Orders" selected>Toutes les commandes</option>																									
													<option value="Refunded">Remboursé</option>																									
													<option value="Refund Rejected">Remboursement rejeté</option>																									
													<option value="Refund Requested">Remboursement demandé</option>																									
													<option value="Partially Refunded">Partiellement remboursé</option>																																																	
												</select>
											</div>
										</div>
										<div class="col-lg-3 col-md-6">
											<div class="form-group">
												<select class="selectpicker">
													<option value="all">Tous</option>																									
													<option value="1">Activs les ordres</option>																									
													<option value="0">Annulé</option>																																																		
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="event-list">
							<div class="tab-content">
								<div class="tab-pane fade show active" id="orders-tab" role="tabpanel">
									<div class="table-card mt-4">
										<div class="main-table">
											<div class="table-responsive">
												<table class="table">
													<thead class="thead-dark">
														<tr>
															<th scope="col">ID</th>
															<th scope="col">Nom</th>
															<th scope="col">Nom évènement</th>
															<th scope="col">Date</th>
															<th scope="col">Référence</th>
															<th scope="col">Statut</th>
															<th scope="col">Total</th>
														</tr>
													</thead>
													<tbody>
														<tr>										
															<td>5291</td>	
															<td>ATTIAGAMA Akouvi</td>	
															<td><a href="#" target="_blank">Événement d'astrologie le dimanche</a></td>	
															<td>22/09/2023</td>	
															<td>E1021100NA8711001</td>
															<td><span class="status-circle red-circle"></span>Annulé</td>
															<td>AUD $0.00</td>
														</tr>
														<tr>										
															<td>5290</td>	
															<td>John Akouto</td>	
															<td><a href="#" target="_blank">Vente des matières premeières à Lomé</a></td>	
															<td>04/09/2023</td>	
															<td>E1021100NA8711002</td>
															<td><span class="status-circle green-circle"></span>Payé</td>
															<td>0 F CFA</td>
														</tr>
														<tr>										
															<td>5289</td>	
															<td>AMAGLO Clément</td>	
															<td><a href="#" target="_blank">Événements de test</a></td>	
															<td>04/10/2023</td>	
															<td>E1021100NA8711003</td>
															<td><span class="status-circle blue-circle"></span>Remboursé</td>
															<td>0 F CFA</td>
														</tr>
													</tbody>									
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="customers-tab" role="tabpanel">
									<div class="table-card mt-4">
										<div class="main-table">
											<div class="table-responsive">
												<table class="table">
													<thead class="thead-dark">
														<tr>
															<th scope="col">ID</th>
															<th scope="col">Nom</th>
															<th scope="col">Adresse email </th>
															<th scope="col">Adresse</th>
														</tr>
													</thead>
													<tbody>
														<tr>										
															<td>2356</td>	
															<td>Basile SOWADAN</td>	
															<td>basile14sowadan@gmail.com</td>	
															<td>Nukafu, Lomé, Togo</td>	
														</tr>
														<tr>										
															<td>2355</td>	
															<td>Carole AMAH</td>	
															<td>caca@yahoo.fr</td>	
															<td>Gbenyedji,Lomé, Togo</td>	
														</tr>
														<tr>										
															<td>2354</td>	
															<td>Jassica NOUVEDJI</td>	
															<td>jassica@gmail.com</td>	
															<td>Kanté, Kara, Togo</td>	
														</tr>
														<tr>										
															<td>2353</td>	
															<td>Roger William</td>	
															<td>william@gmail.com</td>	
															<td>Attitogon, Afagnan, Togo</td>	
														</tr>
														<tr>										
															<td>2352</td>	
															<td>Grégoire TSULA</td>	
															<td>gregoire@yahoo.fr</td>	
															<td>Kégué, Lomé, Togo</td>	
														</tr>
														<tr>										
															<td>2351</td>	
															<td>Chistine ATSU</td>	
															<td>chris@gmail.com</td>	
															<td>Anfoi, Aneho, Togo</td>	
														</tr>
													</tbody>									
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="tickets-tab" role="tabpanel">
									<div class="table-card mt-4">
										<div class="main-table">
											<div class="table-responsive">
												<table class="table">
													<thead class="thead-dark">
														<tr>
															<th scope="col">Numéro de commande</th>
															<th scope="col">Numéro de Référence</th>
															<th scope="col">Nom du client</th>
															<th scope="col">Addresse email </th>
														</tr>
													</thead>
													<tbody>
														<tr>										
															<td>2356</td>	
															<td>F6ACCM-R76MTK-1434658508</td>	
															<td>Basile SOWADAN</td>	
															<td>basile14sowadan.com</td>
														</tr>
														<tr>										
															<td>2355</td>	
															<td>F6ACCM-R76MTK-1434658508</td>	
															<td>Carole AMAH</td>	
															<td>caca@yahoo.fr</td>
														</tr>
														<tr>										
															<td>2354</td>	
															<td>F6ACCM-R76MTK-1434658508</td>	
															<td>Jassica NOUVEDJI</td>	
															<td>jessica@gmaile.com</td>
														</tr>
														<tr>										
															<td>2353</td>	
															<td>F6ACCM-R76MTK-1434658508</td>	
															<td>Chistine ATSU</td>	
															<td>chris@gmail.com</td>
														</tr>
													</tbody>									
												</table>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="payouts-tab" role="tabpanel">
									<div class="table-card mt-4">
										<div class="main-table">
											<div class="table-responsive">
												<table class="table">
													<thead class="thead-dark">
														<tr>
															<th scope="col">Numéro de remise</th>
															<th scope="col"> Date de remise</th>
															<th scope="col">Date de paiement</th>
															<th scope="col">Date</th>
															<th scope="col">Numéro de Transaction </th>
															<th scope="col">Actions</th>
														</tr>
													</thead>
													<tbody>
														<tr>										
															<td>12475</td>	
															<td>28/09/2023</td>	
															<td>26/10/2023</td>	
															<td>22/09/2023</td>	
															<td>TXR21234123UX</td>	
															<td><a href="#" class="a-link">Télécharger</a></td>																
														</tr>														
													</tbody>									
												</table>
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
	<!-- Body End -->
    </div>
</template>