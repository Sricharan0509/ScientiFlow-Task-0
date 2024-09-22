import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ref } from 'vue';

export const useInfoStore = defineStore('info', () => {
  type userDataType = {
    id: number;
    attributes: {
      name: string;
      position: string;
      company: string;
      testimonial_text: string;
      rating: number;
      featured: boolean;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };

  const userinfo = ref<userDataType[]>([]);

  async function fetchUserInfo() {
    try {
      const response = await api.get('/testimonials/');
      userinfo.value = response.data.data; 
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  }

  return { userinfo, fetchUserInfo };
});
