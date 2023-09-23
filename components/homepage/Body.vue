<template>
    <div>
        <!-- Body Start-->
<div class="wrapper">
    <div class="hero-banner">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-7 col-lg-9 col-md-10">
                    <div class="hero-banner-content">
                        <h2>La réservation et l'achat de tickets pour les événements en ligne le plus proche de vous</h2>
                        <p>Event-CERIL est une plateforme de réservation et d'achat de tickets en ligne pour les organisateurs, les promoteurs et les gestionnaires d'événements. Créez, promouvez et gérez facilement vos événements de tout type et de toute taille.</p>
                        <NuxtLink to="/create" class="main-btn btn-hover">Créer évènement <i class="fa-solid fa-arrow-right ms-3"></i></NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="explore-events p-80">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="main-title">
                        <h3>Tous les évènements</h3>
                    </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="event-filter-items">
                        <div class="featured-controls">
                            <div class="filter-tag">
                                <NuxtLink to="explore_events_by_date" class="active">Tout</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">Aujourd'hui</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">Demain</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">Cette semaine</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">Cette fin de semaine</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">La semaine prochaine</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">Le weekend prochain</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">Ce mois</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">Le mois prochain</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">Cette année</NuxtLink>
                                <NuxtLink to="/explore_events_by_date">L'année prochaine</NuxtLink>
                            </div>
                            <div class="controls">
                                <button type="button" class="control" data-filter="all">Tout</button>
                                <button type="button" class="control" data-filter=".arts">Arts</button>
                                <button type="button" class="control" data-filter=".business">Business</button>
                                <button type="button" class="control" data-filter=".concert">Concert</button>
                                <button type="button" class="control" data-filter=".workshops">Conférence</button>
                                <button type="button" class="control" data-filter=".coaching_consulting">Coaching and Consulting</button>
                                <button type="button" class="control" data-filter=".health_Wellness">Santé et bien être</button>									
                                <button type="button" class="control" data-filter=".volunteer">Bénévol</button>
                                <button type="button" class="control" data-filter=".sports">Sports</button>
                                <button type="button" class="control" data-filter=".free">Gratuit</button>	
                            </div>
                            <div class="row" data-ref="event-filter-content">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix arts concert workshops volunteer sports health_Wellness" data-ref="mixitup-target">
                                    <div class="main-card mt-4">
                                        <div class="event-thumbnail">
                                            <NuxtLink to="/venue_event_detail_view" class="thumbnail-img">
                                                <img src="images/event-imgs/ev9.jpg" alt="">
                                            </NuxtLink>
                                            <span class="bookmark-icon" title="Bookmark"></span>
                                        </div>
                                        <div class="event-content">
                                            <NuxtLink to="/venue_event_detail_view" class="event-title">Promotion de la jeune fille dans le milieu scolaire</NuxtLink>
                                            <div class="duration-price-remaining">
                                                <span class="duration-price">5000 F CFA*</span>
                                                <span class="remaining"></span>
                                            </div>
                                        </div>
                                        <div class="event-footer">
                                            <div class="event-timing">
                                                <div class="publish-date">
                                                    <span><i class="fa-solid fa-calendar-day me-2"></i>25 novembre 2022</span>
                                                    <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                    <span>samedi, 15h 30</span>
                                                </div>
                                                <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix business workshops volunteer sports health_Wellness" data-ref="mixitup-target">
                                    <div class="main-card mt-4">
                                        <div class="event-thumbnail">
                                            <NuxtLink to="/online_event_detail_view" class="thumbnail-img">
                                                <img src="images/event-imgs/event7.jpeg" alt="">
                                            </NuxtLink>
                                            <span class="bookmark-icon" title="Bookmark"></span>
                                        </div>
                                        <div class="event-content">
                                            <NuxtLink to="/online_event_detail_view" class="event-title">Développement individuel</NuxtLink>
                                            <div class="duration-price-remaining">
                                                <span class="duration-price">10 000 F CFA*</span>
                                                <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>10 restante </span>
                                            </div>
                                        </div>
                                        <div class="event-footer">
                                            <div class="event-timing">
                                                <div class="publish-date">
                                                    <span><i class="fa-solid fa-calendar-day me-2"></i>12 decembre 2023</span>
                                                    <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                    <span>Dimanche, 17h 00 </span>
                                                </div>
                                                <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>2h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix coaching_consulting free concert volunteer health_Wellness bussiness" data-ref="mixitup-target">
                                    <div class="main-card mt-4">
                                        <div class="event-thumbnail">
                                            <NuxtLink to="/venue_event_detail_view" class="thumbnail-img">
                                                <img src="images/event-imgs/event6.jpeg" alt="">
                                            </NuxtLink>
                                            <span class="bookmark-icon" title="Bookmark"></span>
                                        </div>
                                        <div class="event-content">
                                            <NuxtLink to="/venue_event_detail_view" class="event-title">Réunion hbdomadaire</NuxtLink>
                                            <div class="duration-price-remaining">
                                                <span class="duration-price">gratuit*</span>
                                                <span class="remaining"></span>
                                            </div>
                                        </div>
                                        <div class="event-footer">
                                            <div class="event-timing">
                                                <div class="publish-date">
                                                    <span><i class="fa-solid fa-calendar-day me-2"></i>05 Août</span>
                                                    <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                    <span>Samedi, 16h 30 </span>
                                                </div>
                                                <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>3h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 mix health_Wellness concert volunteer sports free business" data-ref="mixitup-target">
                                    <div class="main-card mt-4">
                                        <div class="event-thumbnail">
                                            <NuxtLink to="/online_event_detail_view" class="thumbnail-img">
                                                <img src="images/event-imgs/event4.jpeg" alt="">
                                            </NuxtLink>
                                            <span class="bookmark-icon" title="Bookmark"></span>
                                        </div>
                                        <div class="event-content">
                                            <NuxtLink to="/online_event_detail_view" class="event-title">Vie de couple</NuxtLink>
                                            <div class="duration-price-remaining">
                                                <span class="duration-price">55 000 F CFA</span>
                                                <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 restants</span>
                                            </div>
                                        </div>
                                        <div class="event-footer">
                                            <div class="event-timing">
                                                <div class="publish-date">
                                                    <span><i class="fa-solid fa-calendar-day me-2"></i>01 Février</span>
                                                    <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                    <span>Mardi, 17h 30 </span>
                                                </div>
                                                <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix concert sports health_Wellness free arts" data-ref="mixitup-target">
                                    <div class="main-card mt-4">
                                        <div class="event-thumbnail">
                                            <NuxtLink to="/venue_event_detail_view" class="thumbnail-img">
                                                <img src="images/event-imgs/event7.jpeg" alt="">
                                            </NuxtLink>
                                            <span class="bookmark-icon" title="Bookmark"></span>
                                        </div>
                                        <div class="event-content">
                                            <NuxtLink to="/venue_event_detail_view" class="event-title">Comémoration de la 27ème anniversaire de l'indépendance du Togo</NuxtLink>
                                            <div class="duration-price-remaining">
                                                <span class="duration-price">35 000 F CFA*</span>
                                                <span class="remaining"></span>
                                            </div>
                                        </div>
                                        <div class="event-footer">
                                            <div class="event-timing">
                                                <div class="publish-date">
                                                    <span><i class="fa-solid fa-calendar-day me-2"></i>27 Mai</span>
                                                    <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                    <span>Jeudi, 11h 00 </span>
                                                </div>
                                                <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>5h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix workshops concert arts volunteer sports" data-ref="mixitup-target">
                                    <div class="main-card mt-4">
                                        <div class="event-thumbnail">
                                            <NuxtLink to="/venue_event_detail_view" class="thumbnail-img">
                                                <img src="images/event-imgs/event2.jpeg" alt="">
                                            </NuxtLink>
                                            <span class="bookmark-icon" title="Bookmark"></span>
                                        </div>
                                        <div class="event-content">
                                            <NuxtLink to="/venue_event_detail_view" class="event-title">Démarrer le business</NuxtLink>
                                            <div class="duration-price-remaining">
                                                <span class="duration-price">250 000 F CFA*</span>
                                                <span class="remaining"></span>
                                            </div>
                                        </div>
                                        <div class="event-footer">
                                            <div class="event-timing">
                                                <div class="publish-date">
                                                    <span><i class="fa-solid fa-calendar-day me-2"></i>30 Juin</span>
                                                    <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                    <span>Mercredi, 16h 30 </span>
                                                </div>
                                                <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix volunteer free health_Wellness" data-ref="mixitup-target">
                                    <div class="main-card mt-4">
                                        <div class="event-thumbnail">
                                            <NuxtLink to="/online_event_detail_view" class="thumbnail-img">
                                                <img src="images/event-imgs/event1.jpg" alt="">
                                            </NuxtLink>
                                            <span class="bookmark-icon" title="Bookmark"></span>
                                        </div>
                                        <div class="event-content">
                                            <NuxtLink to="/online_event_detail_view" class="event-title">Tutoriel pour comprendre le développement des applications informatique</NuxtLink>
                                            <div class="duration-price-remaining">
                                                <span class="duration-price">30 000 F CFA*</span>
                                                <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>17 restants</span>
                                            </div>
                                        </div>
                                        <div class="event-footer">
                                            <div class="event-timing">
                                                <div class="publish-date">
                                                    <span><i class="fa-solid fa-calendar-day me-2"></i>17 Juillet</span>
                                                    <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                    <span>Dimanche, 17h 30 </span>
                                                </div>
                                                <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>1h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mix sports concert volunteer arts" data-ref="mixitup-target">
                                    <div class="main-card mt-4">
                                        <div class="event-thumbnail">
                                            <NuxtLink to="/venue_event_detail_view" class="thumbnail-img">
                                                <img src="images/event-imgs/event12.jpeg" alt="">
                                            </NuxtLink>
                                            <span class="bookmark-icon" title="Bookmark"></span>
                                        </div>
                                        <div class="event-content">
                                            <a href="venue_event_detail_view.vue" class="event-title">Trainee Program on Leadership' 2022</a>
                                            <div class="duration-price-remaining">
                                                <span class="duration-price">100 000 F CFA*</span>
                                                <span class="remaining"><i class="fa-solid fa-ticket fa-rotate-90"></i>7 Restant</span>
                                            </div>
                                        </div>
                                        <div class="event-footer">
                                            <div class="event-timing">
                                                <div class="publish-date">
                                                    <span><i class="fa-solid fa-calendar-day me-2"></i>20 Août</span>
                                                    <span class="dot"><i class="fa-solid fa-circle"></i></span>
                                                    <span>Samedi, 11h 30</span>
                                                </div>
                                                <span class="publish-time"><i class="fa-solid fa-clock me-2"></i>12h</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="browse-btn">
                                <NuxtLink to="explore_events" class="main-btn btn-hover ">Parcourir tout</NuxtLink>
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