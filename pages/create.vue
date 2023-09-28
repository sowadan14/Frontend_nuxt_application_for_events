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
									<li class="breadcrumb-item active" aria-current="page">Créer</li>
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
						<div class="main-title text-center checkout-title">
							<h3>Créer nouvel évènement</h3>
						</div>
					</div>
					<div class="col-xl-6 col-lg-8 col-md-12">
						<div class="create-block">
							<div class="row">
								<div class="col-md-6">
									<div class="main-card create-card mt-4">
										<div class="create-icon">
											<i class="fa-solid fa-video"></i>
										</div>
										<h4>Créer évènement en ligne</h4>
										<!-- <a href="create_online_event.html" class="main-btn btn-hover h_40 w-100">Créer<i class="fa-solid fa-arrow-right ms-2"></i></a> -->
										<NuxtLink to="/create_online_event" class="main-btn btn-hover h_40 w-100">Créer <i class="fa-solid fa-arrow-right ms-2"></i></NuxtLink>
									</div>
								</div>
								<div class="col-md-6">
									<div class="main-card create-card mt-4">
										<div class="create-icon">
											<i class="fa-solid fa-location-dot"></i>
										</div>
										<h4>Créer évènement sur place</h4>
                        				<NuxtLink to="/create_venue_event" class="main-btn btn-hover h_40 w-100">Créer <i class="fa-solid fa-arrow-right ms-2"></i></NuxtLink>

										<!-- <a href="create_venue_event" class="main-btn btn-hover h_40 w-100">Créer<i class="fa-solid fa-arrow-right ms-2"></i></a> -->
									</div>
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