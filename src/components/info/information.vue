<template>
  <div>


<v-app light>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <section>
        <v-parallax class="bg" height="800">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img src="./logo_small.png" alt="Vuetify.js" height="75" class="smallLogo">
            <h1 class="white--text mb-2 display-1 text-xs-center">Välkommen</h1>
            <div class="subheading mb-3 text-xs-center">Nedan kan du läsa om alla våra events och vad vi erbjuder. <br/> Boka även in dig direkt här på hemsidan.</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="#/start"
            >
              Boka här
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Det vi erbjuder</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Events året runt</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Jubileum 2019</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Mottagningsevent</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax class="bg2" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Snabb branding mot studenter</div>
            <em></em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="#/start"
            >
              Boka här snabbt och enkelt
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Hur fungerar det?</div>
                </v-card-title>
                <v-card-text>
                  När du nu har skapat ett företagskonto kommer du enkelt kunna välja precis vad du och ditt företag behöver för att branda er mot våra studenter. Du väljer precis vad du vill ha, du kan till och med önska eventdatum. Därefter kan du skicka ditt förslag till våra säljare direkt från sidan. Vi hör av oss! <br /> Snabbt, smidigt och enkelt.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Frågor?</div>
                </v-card-title>
                <v-card-text>
                  Kontakta oss
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">face</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Soner Vergon - Pernilla Wikström</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>072 926 74 00 - 070 588 10 57</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>arma@t.kth.se</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
  </div>
  </template>

  <script>
  export default {
    data () {
      return {
        dialog: false,
        dialog2: false,
        notifications: false,
        sound: true,
        widgets: false,
        title: 'Flygsektionens Arbetsmarknadsenhet'
      }
    }
  }
  </script>


  <style>

.bg {
  background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.4)),url(./hero.jpg) center;
  background-size: cover;
}

.bg2 {
  background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.4)),url(./fly.jpg) center;
  background-size: cover;
}

.smallLogo {
  margin-bottom: 50px;
  margin-top: -30px;
}

  </style>
