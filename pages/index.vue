<template>
    <div>
        
	<HomepageBody/>

    </div>
</template>
<script>
    export default {
        setup(){
            useHead({
                title: 'Réservation et achat de tickets en ligne',
                meta: [
                    {
                        name: 'description',
                        content: 'Gestion des évènemeents en ligne'
                    },
                ],
            })
        },
    }
</script>