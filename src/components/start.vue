<template>
  <v-container class="bg" fill-height>
    <v-layout align-center>
      <v-flex>
        <h3 style="font-size:200% !important;" class="headline mb-4">Flygsektionens <br /> Arbetsmarknadsenhet </h3>
        <span class=" txt body-2">En samlad plattform för sammarbeten mellan studenter och företag. <br /> Som företag kan du logga in här och registrera er för utvalda events.</span>
        <v-divider class="my-3"></v-divider>
        <v-btn large color="green" @click.stop="dialog = true" class="mb-3 mx-0">Logga in</v-btn>
        <div class="caption my-4">Har du inget företagskonto? <br /> <v-btn class="my-1" flat small color="" @click.stop="dialog2 = true"> Skapa ett här! </v-btn></div>
        <v-dialog v-model="dialog" class="white scroll" max-width="600px">
          <v-card class="scroll white">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Inloggning</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                prepend-icon="person"
                name="login"
                label="Företagsmail"
                type="email">
              </v-text-field>
              <v-text-field prepend-icon="lock" name="password" label="Lösenord" id="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green" href="#/farmen" >Logga in</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
      v-model="dialog2"
      fullscreen
      transition="dialog-bottom-transition"
      :overlay="false"
      scrollable
      >
      <v-card class="white" tile>
        <v-toolbar card dark color="primary">
          <v-btn class="grey" icon @click.native="dialog2 = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Skapa konto</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat color="black" @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-list three-line subheader>
            <v-subheader>Skapa ett konto för Flygsektionens Arbetsmarknadsenhet.</v-subheader>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Varför behöver jag ett företagskonto?</v-list-tile-title>
                <v-list-tile-sub-title>Genom att skapa ett konto kommer vi enkelt kunna följa vad ni är ute efter.</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-divider></v-divider>
          <v-list three-line subheader>
            <v-container>
              <v-subheader>Kontaktperson</v-subheader>
              <v-layout row wrap>
                    <v-flex sm4>
                      <v-text-field  label="Förnamn"></v-text-field>
                    </v-flex>
                    <v-flex sm4>
                      <v-text-field  label="Efternamn"></v-text-field>
                    </v-flex>
              </v-layout>
              <v-layout row wrap>
                    <v-flex sm4>
                      <v-text-field label="Mailadress"></v-text-field>
                    </v-flex>
                    <v-flex sm4>
                      <v-text-field label="Telefonnummer"></v-text-field>
                    </v-flex>
              </v-layout>

              <v-subheader class="mt-5">Företagsinformation</v-subheader>
              <v-layout row wrap>
                    <v-flex sm4>
                      <v-text-field  label="Företagsnamn"></v-text-field>
                    </v-flex>
                    <v-flex sm4>
                      <v-text-field  label="Organisationsnummer"></v-text-field>
                    </v-flex>
              </v-layout>
              <v-layout row wrap>
                    <v-flex sm4>
                      <v-text-field label="Faktureringsadress"></v-text-field>
                    </v-flex>
                    <v-flex sm4>
                      <v-text-field label="Övrig information"></v-text-field>
                    </v-flex>
              </v-layout>
            </v-container>


          </v-list>
        </v-card-text>

        <div style="flex: 1 1 auto;"/>
      </v-card>
    </v-dialog>
  </v-flex>
</v-layout>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      dialog2: false,
      notifications: false,
      sound: true,
      widgets: false
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button,
.button:link,
.button:active,
.button:visited {
  color: #2c3e50 !important;
}
a:-webkit-any-link {
  color: inherit;
  cursor: pointer;
  text-decoration: none;
}

.sublink {
  color: #259935 !important;
}

.txt {
  max-width:100px !important;
  width: 200px !important;
}

.scroll {
  overflow-x: hidden;
}

.bg {
  background: linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)),url(./farm.jpg) center;
  height: 100vh;
  background-size: cover;
  margin: 0;
  max-width: none;

}
</style>
