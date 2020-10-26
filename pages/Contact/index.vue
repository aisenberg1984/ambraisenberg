<template>
  <v-container
    id="contact"
    class="pa-0 grey lighten-3 flex-wrap align-start fill-height"
    fluid
    tag="section"
  >
    
    <v-row
      class="ma-0"
      justify="center"
    >
      <v-col
        cols="12"
        md="4"
      ><br><br>
        <h1 class="display-1 mb-8 font-weight-bold">
          Contact Info:
        </h1>
<br>
        <div class="mb-8">
          Praesent interdum congue mauris, et fringilla lacus pel vitae. 
        </div>
<br>
        <div class="mb-4">
          <strong>Location</strong> Gardner, KS
        </div>

        <div class="mb-4">
          <strong>Phone</strong> (913) 221-5557
        </div>

        <div class="mb-4">
          <strong>Email</strong> ambraisenberg@gmail.com
        </div>

        </v-col>

      <v-col
        cols="12"
        md="5"
      ><br><br>
        <v-form>
          <v-row class="mb-6">
            <v-col
              cols="12"
              md="6"
            >
              <v-sheet>
                <v-text-field
                  flat
                  hide-details
                  label="Your Name"
                  solo
                />
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-sheet>
                <v-text-field
                  flat
                  hide-details
                  label="Your Email"
                  solo
                />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              <v-sheet>
                <v-textarea
                  flat
                  hide-details
                  label="Your Message"
                  solo
                />
              </v-sheet>
            </v-col>
          </v-row>

          <v-btn
            :block="$vuetify.breakpoint.smAndDown"
            class="white--text"
            color="black"
            x-large
          >
            Send Message
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Contact',
  }
</script>

<style scoped>

</style>