<template>
  <div class="min-h-screen bg-gray-50 font-sans">
    <!-- Header -->
    <header class="text-center py-6 bg-pink-200">
      <h1 class="text-3xl font-bold text-gray-800">Undangan Pernikahan</h1>
      <p class="text-gray-600">Hibatul & Pasangan</p>
    </header>

    <!-- Navigation -->
    <nav class="flex justify-center gap-4 py-4 bg-white shadow">
      <a href="#galeri" class="text-blue-600">Galeri</a>
      <a href="#musik" class="text-blue-600">Musik</a>
      <a href="#ucapan" class="text-blue-600">Ucapan</a>
      <a href="#kado" class="text-blue-600">Kado</a>
      <a href="#streaming" class="text-blue-600">Streaming</a>
    </nav>

    <!-- Galeri -->
    <section id="galeri" class="p-6">
      <h2 class="text-2xl font-bold mb-4">Galeri Foto & Video</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/foto1.jpg" class="rounded-lg shadow" alt="Foto 1">
        <img src="/foto2.jpg" class="rounded-lg shadow" alt="Foto 2">
      </div>
    </section>

    <!-- Musik -->
    <section id="musik" class="p-6 bg-pink-50">
      <h2 class="text-2xl font-bold mb-4">Musik Latar</h2>
      <audio controls autoplay loop>
        <source src="/musik.mp3" type="audio/mpeg" />
      </audio>
    </section>

    <!-- Ucapan -->
    <section id="ucapan" class="p-6">
      <h2 class="text-2xl font-bold mb-4">Ucapan & Do'a</h2>
      <form @submit.prevent="addUcapan" class="flex gap-2 mb-4">
        <input v-model="nama" placeholder="Nama" class="border p-2 flex-1 rounded"/>
        <input v-model="pesan" placeholder="Ucapan" class="border p-2 flex-1 rounded"/>
        <button class="bg-blue-600 text-white px-4 rounded">Kirim</button>
      </form>
      <ul>
        <li v-for="(u, i) in ucapan" :key="i" class="mb-2 p-2 bg-gray-100 rounded">
          <strong>{{ u.nama }}</strong>: {{ u.pesan }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const nama = ref("");
const pesan = ref("");
const ucapan = ref([]);

function addUcapan() {
  if (nama.value && pesan.value) {
    ucapan.value.push({ nama: nama.value, pesan: pesan.value });
    nama.value = "";
    pesan.value = "";
  }
}
</script>
