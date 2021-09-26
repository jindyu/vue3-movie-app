<template>
  <div class="about">
    <Loader
      v-if="imageLoading"
      absolute />
    <div 
      :style="`background:url(${image}) center 50% no-repeat; background-size:115%`"
      class="photo">
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '~/components/Loader'
export default {
  components:{
    Loader
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    ...mapState('about', [
      'image',
      'name',
      'email',
      'blog',
      'phone'
    ])
    // image() {
    //   return this.$store.state.about.image
    // },
    // name(){
    //   return this.$store.state.about.name
    // },
    // email(){
    //   return this.$store.state.about.email
    // },
    // blog(){
    //   return this.$store.state.about.blog
    // },
    // phone(){
    //   return this.$store.state.about.phone
    // }
  },
  mounted(){
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  text-align: center;
  .photo{
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    /* padding: 30px; */
    border: 10px solid $gray-300;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    img {
      width: 100%
    }
  }
  .name {
    font-size: 40px;
    font-family: "Oswald", sans-serif;
    margin-bottom: 20px;
  }
}
</style>