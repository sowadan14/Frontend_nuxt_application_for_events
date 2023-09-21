<template>
    <div>
        <!-- Body Start-->
	<div class="wrapper">
		<div class="hero-banner">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-8 col-lg-8 col-md-10">
						<div class="hero-banner-content">
							<h2>Découvrez des événements pour tout ce que vous aimez</h2>
							<div class="search-form main-form">
								<div class="row g-3">
									<div class="col-lg-5 col-md-12">
										<div class="form-group search-category">
											<select class="selectpicker" data-width="100%" data-size="5">
												<option value="browse_all" data-icon="fa-solid fa-tower-broadcast" selected>Parcourir tout</option>
												<option value="online_events" data-icon="fa-solid fa-video">Evènements en ligne</option>
												<option value="venue_events" data-icon="fa-solid fa-location-dot">Événements sur place</option>
											</select>
										</div>
									</div>
									<div class="col-lg-5 col-md-12">
										<div class="form-group">
											<select class="selectpicker" data-width="100%" data-size="5" data-live-search="true">
												<option value="01" selected>Tout</option>
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
																	
											</select>
										</div>
									</div>
									<div class="col-lg-2 col-md-12">
										<a href="#" class="main-btn btn-hover w-100">Chercher</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="explore-events p-80">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 col-lg-12 col-md-12">
						<div class="event-filter-items">
							<div class="featured-controls">
								<div class="filter-tag">
									<a href="explore_events_by_date.html" class="active">Tout</a>
									<a href="explore_events_by_date.html">Aujourd'hui</a>
									<a href="explore_events_by_date.html">Demain</a>
									<a href="explore_events_by_date.html">Cette semaine</a>
									<a href="explore_events_by_date.html">Ce Weekend</a>
									<a href="explore_events_by_date.html">Semaine prochaine</a>
									<a href="explore_events_by_date.html">Weekend prochain</a>
									<a href="explore_events_by_date.html">Ce mois</a>
									<a href="explore_events_by_date.html">Mois prochain</a>
									<a href="explore_events_by_date.html">Cette année</a>
									<a href="explore_events_by_date.html">L'année prochaine</a>
								</div>
								<div class="controls">
									<button type="button" class="control" data-filter="all">Tout</button>
									<button type="button" class="control" data-filter=".arts">Arts</button>
									<button type="button" class="control" data-filter=".business">Business</button>
									<button type="button" class="control" data-filter=".concert">Concert</button>
									<button type="button" class="control" data-filter=".workshops">Ateliers</button>
									<button type="button" class="control" data-filter=".coaching_consulting">Coaching et conseil</button>
									<button type="button" class="control" data-filter=".health_Wellness">Santé et bien-être</button>									
									<button type="button" class="control" data-filter=".volunteer">Bénévole</button>
									<button type="button" class="control" data-filter=".sports">Sports</button>
									<button type="button" class="control" data-filter=".free">Gratuit</button>	
								</div>
								<div class="row" data-ref="event-filter-content">
									<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix arts concert workshops volunteer sports health_Wellness" data-ref="mixitup-target">
										<div class="main-card mt-4">
											<div class="event-thumbnail">
												<a href="venue_event_detail_view.html" class="thumbnail-img">
													<img src="images/event-imgs/ev3.png" alt="">
												</a>
												<span class="bookmark-icon" title="Bookmark"></span>
											</div>
											<div class="event-content">
												<a href="venue_event_detail_view.html" class="event-title"> La Semaine africaine de la communication s'ouvre à l'Université de Lomé </a>
												<div class="duration-price-remaining">
													<span class="duration-price">50 000 F CFA*</span>
													<span class="remaining"></span>
												</div>
											</div>
											<div class="event-footer">
												<div class="event-timing">
													<div class="publish-date">
														<span><i class="fa-solid fa-calendar-day me-2"></i>23 mai 2019</span>
														<span class="dot"><i class="fa-solid fa-circle"></i></span>
														<span>Jeudi, 14h 00</span>
													</div>
													<span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix business workshops volunteer sports health_Wellness" data-ref="mixitup-target">
										<div class="main-card mt-4">
											<div class="event-thumbnail">
												<a href="online_event_detail_view.html" class="thumbnail-img">
													<img src="images/event-imgs/ev1.jpg" alt="">
												</a>
												<span class="bookmark-icon" title="Bookmark"></span>
											</div>
											<div class="event-content">
												<a href="online_event_detail_view.html" class="event-title">Salon des études en Europe 2020</a>
												<div class="duration-price-remaining">
													<span class="duration-price">45 000 F CFA*</span>
													<span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>6 restante</span>
												</div>
											</div>
											<div class="event-footer">
												<div class="event-timing">
													<div class="publish-date">
														<span><i class="fa-solid fa-calendar-day me-2"></i>27 octobre - 02 novembre 2020</span>
														<span class="dot"><i class="fa-solid fa-circle"></i></span>
														<span>Samedi, 11h 30 </span>
													</div>
													<span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix coaching_consulting free concert volunteer health_Wellness bussiness" data-ref="mixitup-target">
										<div class="main-card mt-4">
											<div class="event-thumbnail">
												<a href="venue_event_detail_view.html" class="thumbnail-img">
													<img src="images/event-imgs/ev2.png" alt="">
												</a>
												<span class="bookmark-icon" title="Bookmark"></span>
											</div>
											<div class="event-content">
												<a href="venue_event_detail_view.html" class="event-title">La mode, objet d’un colloque international à l’UL!!!</a>
												<div class="duration-price-remaining">
													<span class="duration-price">Gratuit*</span>
													<span class="remaining"></span>
												</div>
											</div>
											<div class="event-footer">
												<div class="event-timing">
													<div class="publish-date">
														<span><i class="fa-solid fa-calendar-day me-2"></i>05 Mai</span>
														<span class="dot"><i class="fa-solid fa-circle"></i></span>
														<span>Dimanche, 16h 30 PM</span>
													</div>
													<span class="publish-time"><i class="fa-solid fa-clock me-2"></i>3h</span>
												</div>
											</div>
										</div>
									</div>
									<div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 mix health_Wellness concert volunteer sports free business" data-ref="mixitup-target">
										<div class="main-card mt-4">
											<div class="event-thumbnail">
												<a href="online_event_detail_view.html" class="thumbnail-img">
													<img src="images/event-imgs/ev5.jpg" alt="">
												</a>
												<span class="bookmark-icon" title="Bookmark"></span>
											</div>
											<div class="event-content">
												<a href="online_event_detail_view.html" class="event-title">EVALA</a>
												<div class="duration-price-remaining">
													<span class="duration-price">10 000 F CFA</span>
													<span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 restant</span>
												</div>
											</div>
											<div class="event-footer">
												<div class="event-timing">
													<div class="publish-date">
														<span><i class="fa-solid fa-calendar-day me-2"></i>23 Juillet</span>
														<span class="dot"><i class="fa-solid fa-circle"></i></span>
														<span>Dimanche, 17h 30</span>
													</div>
													<span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix concert sports health_Wellness free arts" data-ref="mixitup-target">
										<div class="main-card mt-4">
											<div class="event-thumbnail">
												<a href="venue_event_detail_view.html" class="thumbnail-img">
													<img src="images/event-imgs/ev4.png" alt="">
												</a>
												<span class="bookmark-icon" title="Bookmark"></span>
											</div>
											<div class="event-content">
												<a href="venue_event_detail_view.html" class="event-title">
												FESDA - Festival International des Danses Africaines - Togo
											 27 mai 2022</a>
												<div class="duration-price-remaining">
													<span class="duration-price">5 000 F CFA*</span>
													<span class="remaining"></span>
												</div>
											</div>
											<div class="event-footer">
												<div class="event-timing">
													<div class="publish-date">
														<span><i class="fa-solid fa-calendar-day me-2"></i>27 May</span>
														<span class="dot"><i class="fa-solid fa-circle"></i></span>
														<span>Fri, 12.00 PM</span>
													</div>
													<span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix workshops concert arts volunteer sports" data-ref="mixitup-target">
										<div class="main-card mt-4">
											<div class="event-thumbnail">
												<a href="venue_event_detail_view.html" class="thumbnail-img">
													<img src="images/event-imgs/ev7.jpg" alt="">
												</a>
												<span class="bookmark-icon" title="Bookmark"></span>
											</div>
											<div class="event-content">
												<a href="venue_event_detail_view.html" class="event-title">Festival des divinités noires</a>
												<div class="duration-price-remaining">
													<span class="duration-price">2 000 F CFA*</span>
													<span class="remaining"></span>
												</div>
											</div>
											<div class="event-footer">
												<div class="event-timing">
													<div class="publish-date">
														<span><i class="fa-solid fa-calendar-day me-2"></i>30 Juin</span>
														<span class="dot"><i class="fa-solid fa-circle"></i></span>
														<span>Jeudi, 16h 30</span>
													</div>
													<span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix volunteer free health_Wellness" data-ref="mixitup-target">
										<div class="main-card mt-4">
											<div class="event-thumbnail">
												<a href="online_event_detail_view.html" class="thumbnail-img">
													<img src="images/event-imgs/ev6.jpg" alt="">
												</a>
												<span class="bookmark-icon" title="Bookmark"></span>
											</div>
											<div class="event-content">
												<a href="online_event_detail_view.html" class="event-title">Pratique de l'art oratoir</a>
												<div class="duration-price-remaining">
													<span class="duration-price">30 000 F CFA*</span>
													<span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 Remaining</span>
												</div>
											</div>
											<div class="event-footer">
												<div class="event-timing">
													<div class="publish-date">
														<span><i class="fa-solid fa-calendar-day me-2"></i>17 Juillet</span>
														<span class="dot"><i class="fa-solid fa-circle"></i></span>
														<span>Dimanche, 17h 30</span>
													</div>
													<span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
												</div>
											</div>
										</div>
									</div>
									<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix sports concert volunteer arts" data-ref="mixitup-target">
										<div class="main-card mt-4">
											<div class="event-thumbnail">
												<a href="venue_event_detail_view.html" class="thumbnail-img">
													<img src="images/event-imgs/ev8.jpg" alt="">
												</a>
												<span class="bookmark-icon" title="Bookmark"></span>
											</div>
											<div class="event-content">
												<a href="venue_event_detail_view.html" class="event-title">Programme de stagiaires sur le leadership '2022</a>
												<div class="duration-price-remaining">
													<span class="duration-price">65 000 F CFA*</span>
													<span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 restants</span>
												</div>
											</div>
											<div class="event-footer">
												<div class="event-timing">
													<div class="publish-date">
														<span><i class="fa-solid fa-calendar-day me-2"></i>20 Août</span>
														<span class="dot"><i class="fa-solid fa-circle"></i></span>
														<span>Mercredi, 11h 30 </span>
													</div>
													<span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="browse-btn">
									<a href="#" class="main-btn btn-hover ">Voir plus</a>
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