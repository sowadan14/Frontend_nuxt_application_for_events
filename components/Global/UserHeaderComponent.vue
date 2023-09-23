<template>
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
                    <NuxtLink class="link-item" to="/my_organisation_dashboard" aria-current="page"> Tableau de bord Organisation</NuxtLink>
                    <NuxtLink class="link-item" to="/organiser_profil_view" aria-current="page"> Profile Organisateur </NuxtLink>
                    <NuxtLink class="link-item" to="/attendee_profil_view" aria-current="page"> Profil participant </NuxtLink>
                    <NuxtLink class="link-item" to="/sign_in" aria-current="page"> Se déconnecter </NuxtLink>

                </li>
            </ul>
        </li>
</template>

<style>

	.icon-white
	{
		color:white;
	}
</style>

