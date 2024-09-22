<template>
  <div class="q-pa-md h-screen overflow-hidden-y bg-gradient-to-r from-blue-800 to-indigo-900">
    <h1 class="text-white text-center font-jost text-6xl m-2">Testimonials</h1>
    <h2 class="text-white text-center font-alata text-2xl mt-5">These are the collection of testimonials that are
      collected from the users of</h2>
    <span class="flex justify-center font-alata text-3xl mt-2 font-black tracking-widest text-white ">SCIENTIFLOW</span>
    <div class="flex justify-center items-center h-full -mt-20 ml-2">
      <div v-if="!loading && userinfo && userinfo.length > 0" class="q-gutter-xs w-3/6 bg">
        <q-carousel v-model="slide" :key="userinfo.length" transition-prev="jump-right" transition-next="jump-left"
          swipeable animated control-color="black" prev-icon="arrow_left" next-icon="arrow_right" navigation padding
          infinite arrows height="25rem"
          class="bg-gradient-to-r from-blue-200 to-cyan-200 text-black shadow-2xl shadow-black rounded-3xl">
          <q-carousel-slide v-for="user in userinfo" :key="user.id" :name="`slide-${user.id}`" class="column no-wrap ">
            <div class="flex">
              <q-avatar size="6rem" class="border-black border-double rounded-full ">
                <img src="icons/women-working-professional.jpg" alt="User Avatar" />
              </q-avatar>

              <div>
                <h3 class="font-alata text-2xl font-extrabold mx-4 mt-3">
                  {{ user.attributes.name }}
                </h3>
                <p class="font-alata font-bold text-md mx-4 mt-0">
                  {{ user.attributes.position }} at
                  {{ user.attributes.company }}
                </p>
                <div class="font-alata text-sm mx-4 mt-2 font-semibold flex">
                  Rating:
                  <div class="flex items-center ml-2 text-lg">
                    <q-icon v-for="star in 5" :key="star" name="star" :class="{
                      'text-yellow-500': star <= user.attributes.rating,
                      'text-gray-400': star > user.attributes.rating
                    }" />
                  </div>
                </div>
              </div>
            </div>

            <div class="font-alata mt-10 text-xl font-bold">
              <span class="big-quote text-4xl">❝</span>
              <p class="ml-6">{{ user.attributes.testimonial_text }}</p>
              <span class="big-quote text-4xl float-right">❞</span>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <div v-else-if="loading">
        <p class="text-white">Loading user data...</p>
      </div>

      <div v-else>
        <p>No user data available.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInfoStore } from 'src/stores/info_store';
import { onMounted, ref } from 'vue'

const info_store = useInfoStore();
const slide = ref<number>(0);
const userinfo = ref(info_store.userinfo);
const loading = ref(true);

onMounted(async () => {
  await info_store.fetchUserInfo();
  userinfo.value = info_store.userinfo;

  loading.value = false;

})
</script>
