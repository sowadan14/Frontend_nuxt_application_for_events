// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from "nuxt/config"




export default defineNuxtConfig({
  app: {
    head: {
      title: 'Réservation et achat de tickets en ligne',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, shrink-to-fit=9'},
      ],
  
      link: [
              {rel: 'icon', type:'image/png', href:'images/fav.png'},
              {rel: 'preconnect', href:'https://fonts.googleapis.com'},
              {rel: 'preconnect', href:'https://fonts.gstatic.com'},
              {rel: 'stylesheet',  href:'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap'},
              {rel: 'stylesheet', href:'css/style.css'},
              {rel: 'stylesheet', href:'vendor/unicons-2.0.1/css/unicons.css'},
              {rel: 'stylesheet', href:'css/style.css'},
              {rel: 'stylesheet', href:'css/responsive.css'},
              {rel: 'stylesheet', href:'css/night-mode.csscss/style.css'},
              {rel: 'stylesheet', href:'vendor/fontawesome-free/css/all.min.css'},
              {rel: 'stylesheet', href:'css/jquery-steps.css'},
              {rel: 'stylesheet', href:'vendor/OwlCarousel/assets/owl.carousel.css'},
              {rel: 'stylesheet', href:'vendor/OwlCarousel/assets/owl.theme.default.min.css'},
              {rel: 'stylesheet', href:'vendor/bootstrap/css/bootstrap.min.css'},
              {rel: 'stylesheet', href:'vendor/bootstrap-select/dist/css/bootstrap-select.min.css'},
           ],
  
      script: [
              {src: 'js/jquery-3.6.0.min.js' },
              {src: 'vendor/bootstrap/js/bootstrap.bundle.min.js'},
              {src: 'vendor/OwlCarousel/owl.carousel.js' },
              {src: 'vendor/bootstrap-select/dist/js/bootstrap-select.min.js'},
              {src: 'vendor/mixitup/dist/mixitup.min.js'},
              {src: 'js/jquery-steps.min.js'},
              {src: 'js/datepicker.min.js'},
              {src: 'js/i18n/datepicker.en.js'},
              {src: 'js/custom.js'},
              {src: 'js/night-mode.js'},
          ],
    }
   }
    //devtools: { enabled: true }
    // body: true
})


