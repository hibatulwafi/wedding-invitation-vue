<template>
  <div class="min-h-screen bg-gray-50 font-sans relative">
    <!-- 🔹 Loading Screen -->
    <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-pink-100 z-[9999]">
      <div class="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
      <p class="mt-4 text-pink-600 font-handwriting text-xl animate-pulse">
        Loading...
      </p>
    </div>

    <!-- Halaman Awal -->
    <transition name="fade">
      <section v-if="!isLoading && !isOpened"
        class="relative flex flex-col items-center justify-center h-screen text-center p-6 bg-cover bg-center"
        style="background-image: url('/image/bg-wedding.jpg')">
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
        <div class="relative z-10">
          <h1 class="text-5xl font-handwriting mb-4 text-white drop-shadow-lg" data-aos="zoom-in">
            The Wedding Of
          </h1>
          <p class="mb-6 text-white font-handwriting text-2xl drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
            Wafi & Tisa
          </p>

          <!-- tampilkan nama tamu kalau ada -->
          <p v-if="guestName" class="text-lg text-white mb-4" data-aos="fade-up" data-aos-delay="400">
            Kepada Yth.<br />{{ guestName }}
          </p>

          <div class="flex justify-center">
            <button @click="bukaUndangan"
              class="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition transform hover:scale-105"
              data-aos="zoom-in-up" data-aos-delay="400">
              <Mail class="w-5 h-5" />
              <span>Buka Undangan</span>
            </button>
          </div>
        </div>
      </section>
    </transition>

    <!-- Konten Undangan -->
    <transition name="slide-fade">
      <div v-if="isOpened">
        <!-- Header -->
        <header class="text-center py-12 bg-cover bg-center relative"
          style="background-image: url('/image/bg-header.jpg')">
          <!-- Overlay -->
          <div class="absolute inset-0 bg-white bg-opacity-70"></div>
          <div class="relative z-10 max-w-3xl mx-auto px-4">
            <!-- Judul -->
            <h1 class="text-4xl md:text-5xl font-handwriting text-gray-800 mb-2" data-aos="fade-down">
              Undangan Pernikahan
            </h1>
            <p class="text-2xl font-handwriting text-gray-600 mb-6" data-aos="fade-up" data-aos-delay="200">
              Wafi & Tisa
            </p>

            <!-- Kata Sambutan -->
            <p class="text-gray-700 italic leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="400">
              Assalamualaikum Wr. Wb. <br />
              Maha suci Allah yang telah menciptakan mahluk-Nya
              berpasang-pasangan. <br />
              Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau
              ciptakan diantara kami untuk mengikuti Sunnah Rasul-Mu dalam
              rangka membentuk keluarga yang
              <span class="font-semibold">sakinah, mawaddah, warahmah</span>.
            </p>

            <!-- Save The Date -->
            <div class="mb-6" data-aos="zoom-in" data-aos-delay="600">
              <h2 class="text-2xl font-handwriting text-pink-600 mb-2">
                Save The Date
              </h2>
              <p class="text-lg font-semibold text-gray-800">
                Minggu, 12 Oktober 2025
              </p>
              <p class="text-sm text-gray-600">Pukul 10:00 WIB</p>
            </div>

            <!-- Countdown -->
            <div class="flex justify-center gap-4 mt-6 mb-6" data-aos="fade-up" data-aos-delay="800">
              <div class="bg-white shadow rounded-lg px-4 py-2">
                <p class="text-xl font-bold text-pink-600">
                  {{ countdown.days }}
                </p>
                <p class="text-xs text-gray-600">Hari</p>
              </div>
              <div class="bg-white shadow rounded-lg px-4 py-2">
                <p class="text-xl font-bold text-pink-600">
                  {{ countdown.hours }}
                </p>
                <p class="text-xs text-gray-600">Jam</p>
              </div>
              <div class="bg-white shadow rounded-lg px-4 py-2">
                <p class="text-xl font-bold text-pink-600">
                  {{ countdown.minutes }}
                </p>
                <p class="text-xs text-gray-600">Menit</p>
              </div>
              <div class="bg-white shadow rounded-lg px-4 py-2">
                <p class="text-xl font-bold text-pink-600">
                  {{ countdown.seconds }}
                </p>
                <p class="text-xs text-gray-600">Detik</p>
              </div>
            </div>

            <!-- Save The Date -->
            <div class="mb-6 mt-6" data-aos="zoom-in" data-aos-delay="600">
              <h2 class="text-2xl font-handwriting text-pink-600 mb-2">
                Save The Date
              </h2>
              <p class="text-lg font-semibold text-gray-800">
                Minggu, 12 Oktober 2025
              </p>
              <p class="text-sm text-gray-600">Pukul 10:00 WIB</p>

              <!-- Tombol Google Calendar -->
              <a :href="googleCalendarUrl" target="_blank" rel="noopener noreferrer"
                class="mt-4 inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition">
                <Calendar class="w-5 h-5" />
                <span>Simpan ke Google Calendar</span>
              </a>
            </div>
          </div>
        </header>

        <!-- Mempelai -->
        <section id="mempelai" class="p-6 bg-pink-50 text-center">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-6" data-aos="zoom-in">
            Mempelai
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div class="flex flex-col items-center" data-aos="fade-right">
              <img src="/image/wafi.jpg" alt="Foto Wafi"
                class="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white mb-4" />
              <h3 class="text-2xl font-bold" data-aos="zoom-in" data-aos-delay="200">
                Wafi
              </h3>
              <p class="text-gray-600 font-handwriting text-lg" data-aos="fade-up" data-aos-delay="400">
                Putra Pertama dari Bapak Agus (Alm) & Ibu Rini
              </p>
            </div>
            <div class="flex flex-col items-center" data-aos="fade-left">
              <img src="/image/tisa.jpg" alt="Foto Tisa"
                class="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-white mb-4" />
              <h3 class="text-2xl font-bold" data-aos="zoom-in" data-aos-delay="200">
                Tisa
              </h3>
              <p class="text-gray-600 font-handwriting text-lg" data-aos="fade-up" data-aos-delay="400">
                Putri Kedua dari Bapak Amat & Ibu Imas
              </p>
            </div>
          </div>
        </section>

        <!-- Ayat Al-Quran -->
        <section class="p-6 bg-gray-50 text-center">
          <p class="text-gray-700 italic text-lg max-w-3xl mx-auto" data-aos="fade-up">
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
          </p>
          <p class="mt-2 text-gray-600 font-bold font-handwriting" data-aos="fade-up" data-aos-delay="200">
            (QS. Ar-Rum: 21)
          </p>
        </section>

        <!-- Section Akad & Resepsi -->
        <section id="acara" class="p-6 bg-white text-center">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-8" data-aos="zoom-in">
            Waktu & Tempat
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <!-- Akad -->
            <div class="p-6 bg-pink-50 rounded-xl shadow" data-aos="fade-right">
              <h3 class="text-2xl font-handwriting text-pink-700 mb-2">
                Akad Nikah
              </h3>
              <p class="text-gray-700">Minggu, 12 Oktober 2025</p>
              <p class="text-gray-700">Pukul 10.00 WIB</p>
              <p class="text-gray-600 mt-2">Masjid Agung Al-Akbar</p>
              <p class="text-gray-600 mb-3">
                Jl. Raya Masjid No. 123, Surabaya
              </p>

              <!-- Tombol Google Maps -->
              <a href="https://www.google.com/maps?q=-7.3389,112.7271" target="_blank"
                class="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition">
                <MapPin class="w-5 h-5" />
                <span>Lihat Lokasi</span>
              </a>
            </div>

            <!-- Resepsi -->
            <div class="p-6 bg-pink-50 rounded-xl shadow" data-aos="fade-left" data-aos-delay="200">
              <h3 class="text-2xl font-handwriting text-pink-700 mb-2">
                Resepsi
              </h3>
              <p class="text-gray-700">Minggu, 12 Oktober 2025</p>
              <p class="text-gray-700">Pukul 13.00 WIB - Selesai</p>
              <p class="text-gray-600 mt-2">Gedung Graha Cinta</p>
              <p class="text-gray-600 mb-3">Jl. Mawar Indah No. 45, Surabaya</p>

              <!-- Tombol Google Maps -->
              <a href="https://www.google.com/maps?q=-7.3389,112.7271" target="_blank"
                class="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition">
                <MapPin class="w-5 h-5" />
                <span>Lihat Lokasi</span>
              </a>
            </div>
          </div>
        </section>

        <!-- Live Streaming -->
        <section id="live" class="p-6 bg-gray-50 text-center">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-6" data-aos="zoom-in">
            Live Streaming
          </h2>
          <p class="text-gray-700 mb-6" data-aos="fade-up">
            Bagi keluarga dan sahabat yang tidak dapat hadir, dapat menyaksikan
            momen bahagia kami secara live melalui Instagram.
          </p>

          <a href="https://www.instagram.com/wafi_tisa_live" target="_blank"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transform transition"
            data-aos="zoom-in-up" data-aos-delay="200">
            <Instagram class="w-6 h-6" />
            <span>Tonton di Instagram</span>
          </a>
        </section>

        <!-- Story -->
        <section id="story" class="p-10 bg-cover bg-center relative text-center text-white"
          style="background-image: url('/image/bg-story.jpg')">
          <div class="absolute inset-0 bg-black bg-opacity-50"></div>
          <div class="relative z-10 max-w-3xl mx-auto">
            <h2 class="text-3xl font-handwriting text-pink-200 mb-10" data-aos="zoom-in">
              Our Story
            </h2>
            <div class="relative border-l-2 border-pink-300 pl-6 space-y-8 text-left">
              <div data-aos="fade-right">
                <p>
                  <strong>9 September 2024</strong> — Awal Kenal.
                  Pertama kali saling mengenal lewat Zoom saat memulai
                  perkuliahan di Universitas Paramadina. Siapa sangka, pertemuan virtual itu jadi awal dari kisah
                  panjang kami.
                </p>
              </div>

              <div data-aos="fade-left" data-aos-delay="200">
                <p>
                  <strong>11 Januari 2025</strong> — Pertemuan Pertama.
                  Bertemu langsung saat mengerjakan Kuliah kami. Dari kerja sama itu, rasa nyaman mulai tumbuh.
                </p>
              </div>

              <div data-aos="fade-right" data-aos-delay="400">
                <p>
                  <strong>6 Februari 2025</strong> — Jalan Pertama.
                  Hari ketika kami memutuskan untuk jalan berdua, dan tujuan kami adalah Dufan. Setelah puas bermain,
                  kami lanjut makan dan berbincang lama, semakin mengenal satu sama lain.
                </p>
              </div>

              <div data-aos="fade-left" data-aos-delay="600">
                <p>
                  <strong>23 Maret 2025</strong> — Farah Bertemu Keluarga Fajar.
                  Kesempatan pertama Farah bertemu keluarga Fajar terjadi saat buka bersama di rumahnya. Suasana hangat
                  itu membuat hubungan terasa semakin dekat.
                </p>
              </div>

              <div data-aos="fade-right" data-aos-delay="800">
                <p>
                  <strong>1 Mei 2025</strong> — Fajar Bertemu Mama.
                  Giliran Fajar bertemu dengan mama Farah. Pertemuan ini menjadi salah satu momen penting yang semakin
                  meneguhkan keseriusan kami.
                </p>
              </div>

              <div data-aos="fade-left" data-aos-delay="1000">
                <p>
                  <strong>5 September 2025</strong> — Lamaran.
                  Hari penuh haru dan bahagia. Fajar resmi melamar Farah di hadapan keluarga, mengukuhkan niat kami
                  untuk melangkah ke jenjang pernikahan.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Galeri -->
        <section id="galeri" class="px-4 md:px-20 py-10 bg-white">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-10 text-center" data-aos="zoom-in">
            Cerita dalam Foto
          </h2>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
            <!-- Foto 1 - besar -->
            <div class="col-span-2 row-span-2 relative cursor-pointer" data-aos="zoom-in"
              @click="openModal('/image/foto-1.jpg')">
              <img src="/image/foto-1.jpg" class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 1" />
            </div>

            <!-- Foto 2 -->
            <div class="relative cursor-pointer" data-aos="fade-up" data-aos-delay="100"
              @click="openModal('/image/foto-2.jpg')">
              <img src="/image/foto-2.jpg" class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 2" />
            </div>

            <!-- Foto 3 -->
            <div class="relative cursor-pointer" data-aos="fade-up" data-aos-delay="200"
              @click="openModal('/image/foto-3.jpg')">
              <img src="/image/foto-3.jpg" class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 3" />
            </div>

            <!-- Foto 4 - lebar -->
            <div class="relative cursor-pointer col-span-2" data-aos="fade-up" data-aos-delay="300"
              @click="openModal('/image/foto-4.jpg')">
              <img src="/image/foto-4.jpg" class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 4" />
            </div>

            <!-- Foto 5 -->
            <div class="relative cursor-pointer" data-aos="fade-up" data-aos-delay="400"
              @click="openModal('/image/foto-5.jpg')">
              <img src="/image/foto-5.jpg" class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 5" />
            </div>

            <!-- Foto 6 -->
            <div class="relative cursor-pointer" data-aos="fade-up" data-aos-delay="500"
              @click="openModal('/image/foto-6.jpg')">
              <img src="/image/foto-6.jpg" class="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 6" />
            </div>
          </div>
        </section>

        <!-- Wedding Gift -->
        <section id="gift" class="p-6 bg-pink-50 text-center">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-8" data-aos="zoom-in">
            Wedding Gift
          </h2>
          <p class="text-gray-700 mb-6 max-w-2xl mx-auto" data-aos="fade-up">
            Doa dan restu Anda merupakan hadiah terindah bagi kami. Namun jika
            ingin memberikan tanda kasih, kami dengan senang hati menerimanya
            melalui transfer berikut:
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <!-- BCA -->
            <div class="p-4 bg-white rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up">
              <img src="/image/bca.png" alt="BCA" class="h-12 mx-auto mb-2" />
              <p class="font-semibold text-gray-800">Bank BCA</p>
              <p class="text-gray-600">1234567890</p>
              <p class="text-gray-500 text-sm mb-2">a.n Wafi</p>
              <button @click="copyRekening('1234567890')"
                class="flex items-center gap-1 bg-pink-500 text-white px-3 py-1 rounded text-sm hover:bg-pink-600 transition mx-auto">
                <Copy class="w-4 h-4" />
                <span>Copy</span>
              </button>
            </div>

            <!-- BRI -->
            <div class="p-4 bg-white rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up"
              data-aos-delay="200">
              <img src="/image/bri.png" alt="BRI" class="h-12 mx-auto mb-2" />
              <p class="font-semibold text-gray-800">Bank BRI</p>
              <p class="text-gray-600">9876543210</p>
              <p class="text-gray-500 text-sm mb-2">a.n Tisa</p>
              <button @click="copyRekening('9876543210')"
                class="flex items-center gap-1 bg-pink-500 text-white px-3 py-1 rounded text-sm hover:bg-pink-600 transition mx-auto">
                <Copy class="w-4 h-4" />
                <span>Copy</span>
              </button>
            </div>

            <!-- DANA -->
            <div class="p-4 bg-white rounded-xl shadow hover:shadow-lg transition" data-aos="fade-up"
              data-aos-delay="400">
              <img src="/image/dana.png" alt="Dana" class="h-12 mx-auto mb-2" />
              <p class="font-semibold text-gray-800">DANA</p>
              <p class="text-gray-600">0812-3456-7890</p>
              <p class="text-gray-500 text-sm mb-2">a.n Wafi</p>
              <button @click="copyRekening('081234567890')"
                class="flex items-center gap-1 bg-pink-500 text-white px-3 py-1 rounded text-sm hover:bg-pink-600 transition mx-auto">
                <Copy class="w-4 h-4" />
                <span>Copy</span>
              </button>
            </div>
          </div>

          <!-- Notifikasi -->
          <transition name="fade">
            <div v-if="copiedMessage"
              class="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow">
              {{ copiedMessage }}
            </div>
          </transition>
        </section>

        <!-- Guestbook -->
        <section id="guestbook" class="px-4 md:px-20 py-10 bg-white">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-6 text-center">
            Guestbook
          </h2>

          <!-- Form -->
          <form @submit.prevent="addUcapan" class="flex flex-col md:flex-row gap-2 mb-6">
            <input v-model="nama" placeholder="Nama" class="border p-2 rounded w-full md:flex-1" />
            <input v-model="pesan" placeholder="Ucapan" class="border p-2 rounded w-full md:flex-1" />
            <button class="bg-pink-500 text-white px-4 py-2 rounded w-full md:w-auto">
              Kirim
            </button>
          </form>

          <!-- Daftar Ucapan -->
          <ul class="space-y-3 mb-6">
            <li v-for="u in paginatedUcapan" :key="u.id" class="p-3 bg-gray-100 rounded shadow-sm">
              <div class="flex justify-between items-center">
                <p class="font-semibold text-pink-600">{{ u.nama }}</p>
                <span class="text-xs text-gray-500">
                  {{ formatDate(u.createdAt) }}
                </span>
              </div>
              <p class="text-gray-700 text-sm mt-1">{{ u.pesan }}</p>
            </li>
          </ul>

          <!-- Pagination -->
          <div class="flex justify-center items-center gap-4">
            <button @click="prevPage" :disabled="page === 1" class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
              ‹
            </button>
            <span class="text-sm text-gray-600">
              Halaman {{ page }} dari {{ totalPages }}
            </span>
            <button @click="nextPage" :disabled="page === totalPages"
              class="px-3 py-1 bg-gray-200 rounded disabled:opacity-50">
              ›
            </button>
          </div>
        </section>

        <!-- Penutup -->
        <section id="penutup" class="p-8 bg-pink-50 text-center relative pb-32">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-handwriting text-pink-600 mb-6" data-aos="fade-down">
              Penutup
            </h2>
            <p class="text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
              Dengan penuh rasa syukur, kami memohon doa restu agar pernikahan
              kami senantiasa diberkahi oleh Allah SWT. Semoga kami dapat
              membina rumah tangga yang
              <span class="font-semibold text-pink-600">sakinah, mawaddah, warahmah</span>.
            </p>
            <p class="italic text-gray-600" data-aos="fade-up" data-aos-delay="400">
              "Semoga Allah menghimpun yang terserak dari kalian berdua,
              memberkahi kalian, menumbuhkan rasa kasih di antara kalian, dan
              menghimpun kalian berdua dalam kebaikan."
            </p>
            <div class="mt-8 text-lg font-handwriting text-pink-700" data-aos="zoom-in" data-aos-delay="600">
              Wafi & Tisa 💕
            </div>
          </div>
        </section>

        <!-- Navigation Sticky -->
        <nav
          class="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 flex justify-between md:justify-evenly px-2 md:px-6 py-2"
          style="width: 100vw; max-width: 100vw; box-sizing: border-box">
          <a href="#mempelai" class="flex flex-col items-center text-gray-600 flex-1">
            <Heart class="w-6 h-6 bounce-anim" />
            <span class="text-[10px] md:text-xs">Mempelai</span>
          </a>
          <a href="#story" class="flex flex-col items-center text-gray-600 flex-1">
            <BookOpen class="w-6 h-6 bounce-anim delay-200" />
            <span class="text-[10px] md:text-xs">Story</span>
          </a>
          <a href="#galeri" class="flex flex-col items-center text-gray-600 flex-1">
            <Image class="w-6 h-6 bounce-anim delay-400" />
            <span class="text-[10px] md:text-xs">Galeri</span>
          </a>
          <a href="#guestbook" class="flex flex-col items-center text-gray-600 flex-1">
            <MessageSquare class="w-6 h-6 bounce-anim delay-600" />
            <span class="text-[10px] md:text-xs">Ucapan</span>
          </a>
        </nav>

        <!-- Floating Music Disc -->
        <div v-if="isOpened" class="fixed bottom-20 left-4 z-50 flex flex-col items-center cursor-pointer"
          @click="toggleMusic">
          <div :class="[
            'w-16 h-16 rounded-full border-4 border-pink-400 shadow-lg flex items-center justify-center bg-white transition',
            isPlaying ? 'animate-spin-slow' : '',
          ]">
            <Music class="w-8 h-8 text-pink-600" />
          </div>
          <p class="text-xs mt-1 text-gray-600">
            {{ isPlaying ? "Pause" : "Play" }}
          </p>
        </div>
      </div>
    </transition>

    <!-- Audio -->
    <audio ref="musikRef" loop>
      <source src="../public/music/musik.mp3" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Heart, BookOpen, Image, MessageSquare, Music } from "lucide-vue-next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useHead } from "@vueuse/head";

import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

useHead({
  title: "Undangan Pernikahan Wafi & Tisa 💍",
  meta: [
    {
      name: "description",
      content:
        "Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dan memberikan doa restu pada pernikahan kami.",
    },
    {
      property: "og:title",
      content: "Undangan Pernikahan Wafi & Tisa 💍",
    },
    {
      property: "og:description",
      content:
        "Kami dengan bahagia mengundang Anda untuk menghadiri momen berharga dalam hidup kami. Klik untuk melihat detail undangan.",
    },
    { property: "og:type", content: "website" },
    {
      property: "og:image",
      content: "https://einpi.my.id/og-image.png",
    },
  ],
  link: [{ rel: "canonical", href: "https://einpi.my.id" }],
});

/* ================================
   🔹 STATE
================================ */
const guestName = ref(""); // nama tamu dari query param
const isLoading = ref(true);
const isOpened = ref(false);
const musikRef = ref(null);
const isPlaying = ref(false);
const selectedImage = ref(null);

/* ================================
   🔹 COUNTDOWN
================================ */
const countdown = ref({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});
const weddingDate = new Date("2025-10-12T10:00:00+07:00").getTime();
let timer;

function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdown.value = { days: "00", hours: "00", minutes: "00", seconds: "00" };
    clearInterval(timer);
    return;
  }

  countdown.value = {
    days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0"),
    minutes: String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0"),
    seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
      2,
      "0"
    ),
  };
}

/* ================================
   🔹 GOOGLE CALENDAR LINK
================================ */
const googleCalendarUrl = computed(() => {
  const start = "20251012T100000"; // 12 Okt 2025, 10:00 WIB
  const end = "20251012T120000"; // 2 jam acara
  const text = encodeURIComponent("Pernikahan Wafi & Tisa 💍");
  const details = encodeURIComponent(
    "Dengan penuh syukur, kami mengundang Anda untuk menghadiri pernikahan kami."
  );
  const location = encodeURIComponent("Jakarta, Indonesia");

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
});

/* ================================
   🔹 GUESTBOOK
================================ */
const nama = ref("");
const pesan = ref("");
const ucapan = ref([]);

const page = ref(1);
const perPage = 5;

const paginatedUcapan = computed(() => {
  const start = (page.value - 1) * perPage;
  return ucapan.value.slice(start, start + perPage);
});
const totalPages = computed(() => Math.ceil(ucapan.value.length / perPage));

function nextPage() {
  if (page.value < totalPages.value) page.value++;
}
function prevPage() {
  if (page.value > 1) page.value--;
}

function formatDate(ts) {
  if (!ts) return "";
  const date = ts.toDate ? ts.toDate() : new Date(ts);
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

async function addUcapan() {
  if (!nama.value.trim() || !pesan.value.trim()) return;

  try {
    await addDoc(collection(db, "guestbook"), {
      nama: nama.value.trim(),
      pesan: pesan.value.trim(),
      createdAt: serverTimestamp(),
    });
    nama.value = "";
    pesan.value = "";
  } catch (err) {
    console.error("❌ Gagal menambah ucapan:", err.code, err.message);
    alert("Tidak bisa menambah ucapan. Coba lagi!");
  }
}

/* ================================
   🔹 LIFECYCLE
================================ */
onMounted(() => {
  // ambil nama tamu dari URL param
  const params = new URLSearchParams(window.location.search);
  guestName.value = params.get("to") || "";

  // loading screen
  document.fonts.ready.then(() => {
    setTimeout(() => (isLoading.value = false), 800);
  });

  // countdown
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);

  // init AOS
  AOS.init({ duration: 1000, once: true });

  // load guestbook realtime
  const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
  onSnapshot(
    q,
    (snapshot) => {
      ucapan.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
    (err) => {
      console.error("❌ Firestore error:", err.code, err.message);
    }
  );
});

onUnmounted(() => clearInterval(timer));

/* ================================
   🔹 MUSIC PLAYER
================================ */
function bukaUndangan() {
  isOpened.value = true;
  musikRef.value
    ?.play()
    .then(() => (isPlaying.value = true))
    .catch(() => console.log("🎵 Autoplay diblokir"));
}

function toggleMusic() {
  if (!musikRef.value) return;
  if (isPlaying.value) {
    musikRef.value.pause();
    isPlaying.value = false;
  } else {
    musikRef.value.play().catch(() => { });
    isPlaying.value = true;
  }
}

/* ================================
   🔹 MODAL GALERI
================================ */
function openModal(src) {
  selectedImage.value = src;
}
</script>

<style>
/* Font handwriting */
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&display=swap");

.font-handwriting {
  font-family: "Great Vibes", "Dancing Script", cursive;
}

html {
  scroll-behavior: smooth;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide + fade */
.slide-fade-enter-active {
  transition: all 1s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

/* Disc muter pelan */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

/* Navbar Bounce */
@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

.bounce-anim {
  animation: bounce 1.5s infinite;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-400 {
  animation-delay: 0.4s;
}

.delay-600 {
  animation-delay: 0.6s;
}
</style>
