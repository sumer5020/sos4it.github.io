<template>
<div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
    <div
    class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center"
    >
    <img class="absolute h-full w-full object-cover" :src="src" :alt="alt"/>
    <div class="absolute inset-0 bg-gray-700 opacity-75"></div>
    <h2 class="relative text-2xl text-teal-50 font-bold">
        <slot name="title"></slot>
    </h2>
    </div>
    <div class="relative lg:w-7/12 bg-white">
    <svg
        class="absolute h-full text-white w-24 -ml-12"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
    >
        <polygon points="50,0 100,0 50,100 0,100" />
    </svg>
    <div class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
        <slot name="desc"></slot>
        <p class="mt-6">
            <a :href="url" class="font-medium text-indigo-600 hover:text-indigo-900 uppercase">
                <span class="font-bold text-2xl">&rarr;</span> <slot name="link"></slot>
            </a>
        </p>
    </div>
    </div>
</div>
</template>
    
<script>
export default {
  props:{
      src:{
          default: require('@/assets/work/IT_2.jpg')
      },
      alt:{
          default:"project"
      },
      url:{
          default:"#"
      }
  },
  components: {
  },
}
</script>