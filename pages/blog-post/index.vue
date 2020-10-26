<template>
  <v-container
    id="blog-post"
    class="pa-0"
    fluid
    tag="section"
  >
    
    <v-container
      class="py-12 grey lighten-2"
      fluid
    >
      <v-row justify="center">
        <v-col
          cols="11"
          md="7"
        >
          <h1
            class="display-2 font-weight-bold mb-6"
            v-text="post.title"
          />

          </v-col>

        <template v-for="(t, i) in post.text">
          <v-col
            :key="`col-${i}`"
            cols="11"
            md="7"
          >
            <div
              key="`p-${i}`"
              class="body"
              v-html="t"
            />
          </v-col>

          <v-col
            v-if="post.images[i]"
            :key="`img-${i}`"
            class="my-6"
            cols="11"
          >
            <v-img
              :src="post.images[i]"
              max-height="400"
            />
          </v-col>
        </template>

        
      </v-row>
    </v-container>

  </v-container>
</template>

<script>
  export default {
    name: 'BlogPost',

    components: {
      BlogPostComment: () => import('@/components/Comment'),
    },

    data: () => ({
      post: {
        title: 'Lorem ipsum',
        date: 'September 18, 2018',
        category: 'Nature',
        text: [
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
          '<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.</div>',
        ],
        images: {
          // https://unsplash.com/@lmtthws
          2: require('@/assets/luke-matthews-6D1eGsCruvg-unsplash.jpg'),
          9: require('@/assets/luke-matthews-4FTlby-DERs-unsplash.jpg'),
        },
      },
      
    }),
  }
</script>
