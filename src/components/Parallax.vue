<template>
<div class="flex items-center">
      <div class="w-full sm:w-11/12 space-y-5 md:space-y-10">
        <h3 class="text-gray-700 w-fit pt-3 lg:text-3xl md:text-2xl sm:text-left font-semibold font-work_sans">
          👋 Hi There,
        </h3>
        <h1
          class="lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700"
        >
          We are
          <a href="#" target="_blank" class="text-black hover:underline">SOS4IT Team</a>, 
          Looking For Services, Website, Api, Profile And Hosting We Are Hear To Help.
        </h1>

        <div class="md:flex gap-1 md:gap-10">
          <a href="https://www.facebook.com/sos.4.it/"
            class="text-gray-800 border-2 border-gray-800 lg:text-xl md:text-xl text-xs py-2 px-4  lg:py-4 lg:px-8 rounded-2xl font-work_sans font-semibold mb-5 md:mb-0"
          >
            Visit Us
          </a>
        </div>
      </div>

      <div class="w-8/12 sm:flex justify-end hidden">
        <img
          class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          :src="require('@/assets/images/parallex.svg')"
          alt="user image"
        />
      </div>
</div>
</template>
    
<script>
export default {
  components: {
  },
}
</script>