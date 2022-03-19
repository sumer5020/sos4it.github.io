<template>
<div class="px-5 pt-5 md:pt-10 lg:px-24 md:px-16 bg-yellow-50">
    <div class="space-y-4 grid place-items-center mt-5">
      <h3 class="text-teal-800 md:text-5xl text-xl font-bold font-work_sans tracking-wide">Last Works</h3>
      <p class="font-work_sans text-gray-600 font-semibold leading-relaxed">
        some of our awesome client request projects
      </p>
    </div>
    <div class="max-w-6xl mx-auto px-8 py-16">
      <div class="relative">
      <transition name="project" mode="out-in">
        <project-card v-if="this.projectCount == 1" :src="require('@/assets/work/IT.png')" url="#">
          <template #title>project name 1</template>
          <template #desc>
            <p> As <strong class="text-gray-900 font-medium">Slack</strong> grows
              rapidly, using Stripe helps them scale payments easily &mdash;
              supporting everything from getting paid by users around the
              world to enabling ACH payments for corporate customers.
            </p>
          </template>
          <template #link>Go and chick</template>
        </project-card>

        <project-card v-else-if="this.projectCount == 2" :src="require('@/assets/work/IT_2.jpg')" url="#">
          <template #title>project name 1</template>
          <template #desc>
            <p> As <strong class="text-gray-900 font-medium">Slack</strong> grows
              rapidly, using Stripe helps them scale payments easily &mdash;
              supporting everything from getting paid by users around the
              world to enabling ACH payments for corporate customers.
            </p>
          </template>
          <template #link>Go and chick</template>
        </project-card>

        <project-card v-else-if="this.projectCount == 3" :src="require('@/assets/work/IT_2.jpg')" url="#">
          <template #title>project name 1</template>
          <template #desc>
            <p> As <strong class="text-gray-900 font-medium">Slack</strong> grows
              rapidly, using Stripe helps them scale payments easily &mdash;
              supporting everything from getting paid by users around the
              world to enabling ACH payments for corporate customers.
            </p>
          </template>
          <template #link>Go and chick</template>
        </project-card>
      </transition>

        <div class="absolute inset-y-0 left-0 lg:flex lg:items-center" v-show="this.projectCount != 1">
          <button @click="project(-1)"
            class="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg"
          >
            <svg
              class="h-full w-full text-indigo-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
              />
            </svg>
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 lg:flex lg:items-center" v-show="this.projectCount != this.maxCount">
          <button @click="project(1)"
            class="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg"
          >
            <svg
              class="h-full w-full text-indigo-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
</div>
</template>
    
<script>
import ProjectCard from '@/components/ProjectCard.vue';
export default {
  components: {
    ProjectCard,
  },
  data(){
    return{
      maxCount:3,
      projectCount:1,
    }
  },
  methods: {
      project(val){
        if(val == 1){
          this.projectCount = this.projectCount + 1;
        }
        else if(val == -1){
          this.projectCount = this.projectCount - 1;
        }
      }
    },
}
</script>


<style scoped>

  .project-enter-active{
    animation: project-in 0.5s;
  }
  .project-leave-active{
    animation: project-in 0.5s reverse;
  }

  @keyframes project-in {
    0%{
    transform: scale(0);
    }
    50%{
    transform: scale(1.1);
    }
    100%{
    transform: scale(1);
    }
  }
</style>