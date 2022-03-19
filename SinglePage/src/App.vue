<template>
  <section class="px-5 pt-5 3xl:px-36 2xl:px-36 xl:px-28 lg:px-24 md:px-16 bg-teal-100 capitalize">
    <nav-bar/>
    <parallax/>
  </section>

  <section id="Works">
    <works/>
  </section>

  <section id="About">
    <about/>
  </section>

  <section id="Contact">
    <contact/>
  </section>

  <section>
    <foot/>
  </section>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Works from '@/components/Works.vue';
import Parallax from '@/components/Parallax.vue';
import Foot from '@/components/Foot.vue';
export default {
  name: 'App',
  components: {
    Parallax,
    Works,
    Contact,
    About,
    NavBar,
    Foot,
  }
}
</script>