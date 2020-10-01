<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile

    >
      <v-card-title class= "tealbanner">
        <strong class="subheading">Connect with me on social networks</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2" white--text text-center >
        {{ new Date().getFullYear() }} — <strong>Ambra Isenberg</strong>
      
      
      </v-card-text>
      
    </v-card>
  </v-footer>
</template>

<style scoped>

.tealbanner{
  background-color: #07504a;
  height: 4rem;
  }
.py-2 {
  font-size: .75rem;
  height: 1.25rem;
}



</style>