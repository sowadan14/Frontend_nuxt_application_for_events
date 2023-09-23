<template>
    <div>
        <!-- Header Start-->
<header class="header">
	<div class="header-inner">
		<nav class="navbar navbar-expand-lg bg-barren barren-head navbar fixed-top justify-content-sm-start pt-0 pb-0">
			<div class="container">	
				<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
					<span class="navbar-toggler-icon">
						<i class="fa-solid fa-bars"></i>
					</span>
				</button>
				<!--<NuxtLink to="/" class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto">Accueil</NuxtLink>-->
				<NuxtLink class="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 me-auto" to="/index">
					<div class="res-main-logo">
						<img src="images/logo-icon.svg" alt="">
					</div>
					<div class="main-logo" id="logo">
						<img src="images/logo.jpeg" alt="">
						<img class="logo-inverse" src="images/dark-logo.svg" alt="">
					</div>
				</NuxtLink>
				<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
					<div class="offcanvas-header">
						<div class="offcanvas-logo" id="offcanvasNavbarLabel">
							<img src="images/logo-icon.svg" alt="">
						</div>
						<button type="button" class="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
							<i class="fa-solid fa-xmark"></i>
						</button>
					</div>
					<div class="offcanvas-body">
						<div class="offcanvas-top-area">
							<div class="create-bg">
								<a href="create.vue" class="offcanvas-create-btn">
									<i class="fa-solid fa-calendar-days"></i>
									<span>Créer évènement</span>
								</a>
							</div>
						</div>							
						<ul class="navbar-nav justify-content-end flex-grow-1 pe_5">
							<li class="nav-item">
								<NuxtLink class="nav-link active" to="/" aria-current="page"> Accueil </NuxtLink>
							</li>
							<li class="nav-item dropdown">

							   
								<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Tous les évènements
								</a>
								<ul class="dropdown-menu dropdown-submenu">
									<li>
									   <NuxtLink class="dropdown-item" to="/explore_events" aria-current="page"> Liste d'événements </NuxtLink>
									</li>
									<li>
									   <NuxtLink class="dropdown-item" to="/venue_event_detail_view" aria-current="page"> Liste d'évènement sur place </NuxtLink>
									</li>

									<li>
									   <NuxtLink class="dropdown-item" to="/online_event_detail_view" aria-current="page"> Liste d'évènement en ligne </NuxtLink>
									</li>

								</ul>
							</li>
							<li class="nav-item">
							  <NuxtLink class="nav-link" to="/pricing"> Tarification </NuxtLink>

							</li>
							<li class="nav-item">
						        <NuxtLink class="nav-link" to="/term_and_conditions"> Termes et conditions </NuxtLink>
							</li>
							<li class="nav-item">
				                  <NuxtLink to="/contact_us" class="nav-link">Contact</NuxtLink>

								<!--<a class="nav-link" href="contact_us.vue">Contact</a>-->
							</li>
						</ul>
					</div>
					<div class="offcanvas-footer">
						<div class="offcanvas-social">
							<h5>Contactez-nous</h5>
							<ul class="social-links">
								<li><a href="#" class="social-link"><i class="fab fa-facebook-square"></i></a></li>
								<li><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
								<li><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
								<li><a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a></li>
								<li><a href="#" class="social-link"><i class="fab fa-youtube"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="right-header order-2">
					<ul class="align-self-stretch">
						<li>

						    <NuxtLink to="/create" class="create-btn btn-hover">
							<a href="create.vue" class="">
								<i class="fa-solid fa-calendar-days icon-white"></i>
								<span class="text-white">Créer évènement</span>
							</a>
							</NuxtLink>
						</li>
						<li class="dropdown account-dropdown">
							<a href="#" class="account-link" role="button" id="accountClick" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
								<img src="images/profile-imgs/client2.png" alt="">
								<i class="fas fa-caret-down arrow-icon"></i>
							</a>
							<ul class="dropdown-menu dropdown-menu-account dropdown-menu-end" aria-labelledby="accountClick">
								<li>
									<div class="dropdown-account-header">
										<div class="account-holder-avatar">
											<img src="images/profile-imgs/client2.png" alt="">
										</div>
										<h5>Basile SOWADAN</h5>
										<p>basile14sowadan@gmail.com</p>
									</div>
								</li>
								<li class="profile-link">
									<a href="my_organisation_dashboard.vue" class="link-item">Tableau de bord Organisation</a>
									<a href="organiser_profile_view.vue" class="link-item">Profile Organisateur</a>	
									<a href="attendee_profile_view.vue" class="link-item">Profil participant</a>									
									<a href="sign_in.vue" class="link-item">Se déconecter</a>									
								</li>
							</ul>
						</li>
						<li>
							<div class="night_mode_switch__btn">
								<div id="night-mode" class="fas fa-moon fa-sun"></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		<div class="overlay"></div>
	</div>
</header>
<!-- Header End-->
    </div>
</template>

<style>

	.icon-white
	{
		color:white;
	}
</style>

