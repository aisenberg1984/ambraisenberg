<template>
<div>
  <v-container
    id="about"
    class="pa-0"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          height="calc(75vh - 96px - 156px)"
          width="calc(100vh - 96px - 156px)"
          gradient="to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .2)"
          src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/23231134_10212730047664773_5540513551449960603_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=ViJ9hdllmXUAX_b8x33&_nc_ht=scontent-dfw5-1.xx&oh=aa9441d3de195d2f0f3d7300cd33d8e8&oe=5FB73CBE"
        />
      </v-col>
      <v-col
        class="d-block d-md-flex align-center grey lighten-3 pa-6"
        cols="12"
        md="6"
      >
        <v-responsive
          class="mx-auto px-3 px-md-12"
          max-width="750"
        >
          <h1
            class="toolbar-title"
            >
            Hi! I'm Ambra Isenberg.
            
          </h1>
<br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur recusandae esse, vel commodi rem similique totam quis, corrupti rerum veritatis numquam ipsa, nam explicabo nulla! Accusamus deserunt repellendus perspiciatis nulla.
          </p>
<br>
          <p>
            Nulla, porro? Quos architecto vero itaque temporibus in illo nam perferendis ex nemo distinctio?
          </p>
<br>
          <div class="signature">
            Ambra Isenberg
          </div>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container></div>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style>
  .signature{
    font-family:'Cedarville Cursive', cursive !important;
    font-size: 3rem;
    font-style: italic;
    color: #07504a;
    }
</style>
