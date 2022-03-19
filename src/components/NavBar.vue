<template>
    <nav
      class="container px-6 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <div class="relative w-10 h-10 md:w-16 md:h-16 my-2">
          <a href="/">
            <img class="rounded-lg shadow-sm" src="../assets/logo.jpg" alt="user image"/>
          </a>
        </div>
        <!-- Mobile menu button -->
        <div @click="showMenu = !showMenu" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col border-y-2 border-yellow-400 py-2 md:my-auto md:border-none text-center items-end my-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class="text-teal-800 w-full lg:text-2xl md:text-xl font-bold font-work_sans hover:text-yellow-500"><a @click.prevent="click" href="/">Home</a></li>
        <li class="text-teal-800 w-full lg:text-2xl md:text-xl font-bold font-work_sans hover:text-yellow-500"><a @click.prevent="click" href="#Works" v-smooth-scroll>Works</a></li>
        <li class="text-teal-800 w-full lg:text-2xl md:text-xl font-bold font-work_sans hover:text-yellow-500"><a @click.prevent="click" href="#About" v-smooth-scroll>About</a></li>
        <li class="text-teal-800 w-full lg:text-2xl md:text-xl font-bold font-work_sans hover:text-yellow-500"><a @click.prevent="click" href="#Contact" v-smooth-scroll>Contact</a></li>
      </ul>
    </nav>
</template>
    
<script>
export default {
  components: {
  },
  data() {
      return {
        showMenu: false,
      }
  },
  methods: {
    click () {
      //console.log(this);
    }
  }
}
</script>