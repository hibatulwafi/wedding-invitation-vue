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
            Undangan Pernikahan
          </h1>
          <p class="mb-6 text-white font-handwriting text-2xl drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
            Wafi & Tisa
          </p>
          <button @click="bukaUndangan"
            class="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition transform hover:scale-105"
            data-aos="zoom-in-up" data-aos-delay="400">
            Buka Undangan
          </button>
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
              Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. <br />
              Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara kami
              untuk mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang
              <span class="font-semibold">sakinah, mawaddah, warahmah</span>.
            </p>

            <!-- Save The Date -->
            <div class="mb-6" data-aos="zoom-in" data-aos-delay="600">
              <h2 class="text-2xl font-handwriting text-pink-600 mb-2">Save The Date</h2>
              <p class="text-lg font-semibold text-gray-800">Minggu, 12 Oktober 2025</p>
              <p class="text-sm text-gray-600">Pukul 10:00 WIB</p>
            </div>

            <!-- Countdown -->
            <div class="flex justify-center gap-4 mt-6 mb-6" data-aos="fade-up" data-aos-delay="800">
              <div class="bg-white shadow rounded-lg px-4 py-2">
                <p class="text-xl font-bold text-pink-600">{{ countdown.days }}</p>
                <p class="text-xs text-gray-600">Hari</p>
              </div>
              <div class="bg-white shadow rounded-lg px-4 py-2">
                <p class="text-xl font-bold text-pink-600">{{ countdown.hours }}</p>
                <p class="text-xs text-gray-600">Jam</p>
              </div>
              <div class="bg-white shadow rounded-lg px-4 py-2">
                <p class="text-xl font-bold text-pink-600">{{ countdown.minutes }}</p>
                <p class="text-xs text-gray-600">Menit</p>
              </div>
              <div class="bg-white shadow rounded-lg px-4 py-2">
                <p class="text-xl font-bold text-pink-600">{{ countdown.seconds }}</p>
                <p class="text-xs text-gray-600">Detik</p>
              </div>
            </div>

            <!-- Save The Date -->
            <div class="mb-6 mt-6" data-aos="zoom-in" data-aos-delay="600">
              <h2 class="text-2xl font-handwriting text-pink-600 mb-2">Save The Date</h2>
              <p class="text-lg font-semibold text-gray-800">Minggu, 12 Oktober 2025</p>
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
            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu
            dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
            di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat
            tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
          </p>
          <p class="mt-2 text-gray-600 font-bold font-handwriting " data-aos="fade-up" data-aos-delay="200">
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
              <h3 class="text-2xl font-handwriting text-pink-700 mb-2">Akad Nikah</h3>
              <p class="text-gray-700">Minggu, 12 Oktober 2025</p>
              <p class="text-gray-700">Pukul 10.00 WIB</p>
              <p class="text-gray-600 mt-2">Masjid Agung Al-Akbar</p>
              <p class="text-gray-600 mb-3">Jl. Raya Masjid No. 123, Surabaya</p>

              <!-- Tombol Google Maps -->
              <a href="https://www.google.com/maps?q=-7.3389,112.7271" target="_blank"
                class="inline-flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-pink-600 transition">
                <MapPin class="w-5 h-5" />
                <span>Lihat Lokasi</span>
              </a>
            </div>

            <!-- Resepsi -->
            <div class="p-6 bg-pink-50 rounded-xl shadow" data-aos="fade-left" data-aos-delay="200">
              <h3 class="text-2xl font-handwriting text-pink-700 mb-2">Resepsi</h3>
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
                <p><strong>2018</strong> — Pertemuan pertama kami di kampus. Saat itu, semua masih terasa biasa saja,
                  tanpa pernah
                  membayangkan bahwa inilah awal dari kisah panjang yang Allah takdirkan.</p>
              </div>

              <div data-aos="fade-left" data-aos-delay="200">
                <p><strong>2019</strong> — Mulai terjalin komunikasi. Dari sekedar percakapan singkat hingga menjadi
                  teman berbagi cerita, perlahan kami saling mengenal lebih dalam.</p>
              </div>

              <div data-aos="fade-right" data-aos-delay="400">
                <p><strong>2020</strong> — Hari istimewa, kami resmi berpacaran. Menjalani hari-hari penuh warna, suka
                  dan duka kami lewati bersama dengan saling menguatkan.</p>
              </div>

              <div data-aos="fade-left" data-aos-delay="600">
                <p><strong>2022</strong> — Tahun penuh tantangan. Kami belajar arti kesabaran, ketulusan, dan bagaimana
                  tetap bersama meski badai datang menghadang.</p>
              </div>

              <div data-aos="fade-right" data-aos-delay="800">
                <p><strong>2024</strong> — Sebuah momen tak terlupakan. Wafi melamar Tisa di hadapan keluarga,
                  mengukuhkan niat untuk melangkah ke tahap yang lebih serius.</p>
              </div>

              <div data-aos="fade-left" data-aos-delay="1000">
                <p><strong>2025</strong> — Dengan izin Allah, kami memutuskan untuk menikah ❤️. Semoga perjalanan ini
                  menjadi langkah awal menuju kehidupan baru yang penuh berkah.</p>
              </div>

            </div>
          </div>
        </section>


        <!-- Galeri -->
        <section id="galeri" class="p-6">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-10 text-center" data-aos="zoom-in">
            Cerita dalam Foto
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="col-span-2 row-span-2 cursor-pointer" data-aos="zoom-in"
              @click="openModal('../public/image/foto-1.jpg')">
              <img src="../public/image/foto-1.jpg" class="w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 1" />
            </div>
            <div class="cursor-pointer" data-aos="fade-up" data-aos-delay="100"
              @click="openModal('../public/image/foto-2.jpg')">
              <img src="../public/image/foto-2.jpg" class="w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 2" />
            </div>
            <div class="cursor-pointer" data-aos="fade-up" data-aos-delay="200"
              @click="openModal('../public/image/foto-3.jpg')">
              <img src="../public/image/foto-3.jpg" class="w-full h-full object-cover rounded-xl shadow-lg"
                alt="Foto 3" />
            </div>
            <div class="col-span-2 cursor-pointer" data-aos="zoom-in-up" data-aos-delay="300"
              @click="openModal('../public/image/foto-4.jpg')">
              <img src="../public/image/foto-4.jpg" class="w-full h-48 object-cover rounded-xl shadow-lg"
                alt="Foto 4" />
            </div>
          </div>
        </section>

        <!-- Wedding Gift -->
        <section id="gift" class="p-6 bg-pink-50 text-center">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-8" data-aos="zoom-in">
            Wedding Gift
          </h2>
          <p class="text-gray-700 mb-6 max-w-2xl mx-auto" data-aos="fade-up">
            Doa dan restu Anda merupakan hadiah terindah bagi kami. Namun jika ingin memberikan tanda kasih, kami dengan
            senang hati menerimanya melalui transfer berikut:
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
        <section id="guestbook" class="p-6">
          <h2 class="text-3xl font-handwriting text-pink-600 mb-6">Guestbook</h2>

          <!-- Form -->
          <form @submit.prevent="addUcapan" class="flex flex-col md:flex-row gap-2 mb-4">
            <input v-model="nama" placeholder="Nama" class="border p-2 rounded w-full md:flex-1" />
            <input v-model="pesan" placeholder="Ucapan" class="border p-2 rounded w-full md:flex-1" />
            <button class="bg-pink-500 text-white px-4 py-2 rounded w-full md:w-auto">
              Kirim
            </button>
          </form>

          <!-- Daftar Ucapan -->
          <ul class="space-y-3">
            <li v-for="u in ucapan" :key="u.id" class="p-3 bg-gray-100 rounded shadow-sm">
              <p class="font-semibold text-pink-600">{{ u.nama }}</p>
              <p class="text-gray-700 text-sm">{{ u.pesan }}</p>
            </li>
          </ul>
        </section>


        <!-- Penutup -->
        <section id="penutup" class="p-8 bg-pink-50 text-center relative pb-32">
          <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-handwriting text-pink-600 mb-6" data-aos="fade-down">
              Penutup
            </h2>
            <p class="text-gray-700 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="200">
              Dengan penuh rasa syukur, kami memohon doa restu agar pernikahan kami
              senantiasa diberkahi oleh Allah SWT.
              Semoga kami dapat membina rumah tangga yang
              <span class="font-semibold text-pink-600">sakinah, mawaddah, warahmah</span>.
            </p>
            <p class="italic text-gray-600" data-aos="fade-up" data-aos-delay="400">
              "Semoga Allah menghimpun yang terserak dari kalian berdua,
              memberkahi kalian, menumbuhkan rasa kasih di antara kalian,
              dan menghimpun kalian berdua dalam kebaikan."
            </p>
            <div class="mt-8 text-lg font-handwriting text-pink-700" data-aos="zoom-in" data-aos-delay="600">
              Wafi & Tisa 💕
            </div>
          </div>
        </section>


        <!-- Navigation Sticky -->
        <nav
          class="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50 flex justify-between md:justify-evenly px-2 md:px-6 py-2">
          <a href="#mempelai" class="flex flex-col items-center text-gray-600 flex-1 scroll-smooth">
            <Heart class="w-6 h-6 bounce-anim" />
            <span class="text-[10px] md:text-xs">Mempelai</span>
          </a>
          <a href="#story" class="flex flex-col items-center text-gray-600 flex-1 scroll-smooth">
            <BookOpen class="w-6 h-6 bounce-anim delay-200" />
            <span class="text-[10px] md:text-xs">Story</span>
          </a>
          <a href="#galeri" class="flex flex-col items-center text-gray-600 flex-1 scroll-smooth">
            <Image class="w-6 h-6 bounce-anim delay-400" />
            <span class="text-[10px] md:text-xs">Galeri</span>
          </a>
        </nav>

        <!-- Floating Music Disc -->
        <div v-if="isOpened" class="fixed bottom-20 right-4 z-50 flex flex-col items-center cursor-pointer"
          @click="toggleMusic">
          <div :class="[
            'w-16 h-16 rounded-full border-4 border-pink-400 shadow-lg flex items-center justify-center bg-white transition',
            isPlaying ? 'animate-spin-slow' : ''
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

import { db } from "./firebase.js"; 
import { collection, addDoc, onSnapshot, serverTimestamp, orderBy, query } from "firebase/firestore";

// Countdown
const countdown = ref({ days: "00", hours: "00", minutes: "00", seconds: "00" });
const weddingDate = new Date("2025-10-12T10:00:00+07:00").getTime();
let timer;

// UI states
const isLoading = ref(true);
const isOpened = ref(false);
const musikRef = ref(null);
const isPlaying = ref(false);
const selectedImage = ref(null);

// Google Calendar link
const googleCalendarUrl = computed(() => {
  const start = "20251012T100000";
  const end = "20251012T120000";
  const text = encodeURIComponent("Pernikahan Wafi & Tisa 💍");
  const details = encodeURIComponent("Dengan penuh syukur, kami mengundang Anda untuk menghadiri pernikahan kami.");
  const location = encodeURIComponent("Jakarta, Indonesia");
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
});

// Guestbook
const nama = ref("");
const pesan = ref("");
const ucapan = ref([]);

// Load guestbook realtime
onMounted(() => {
  document.fonts.ready.then(() => {
    setTimeout(() => { isLoading.value = false; }, 800);
  });

  updateCountdown();
  timer = setInterval(updateCountdown, 1000);

  AOS.init({ duration: 1000, once: true });

  const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
  onSnapshot(q, (snapshot) => {
    ucapan.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  });
});

onUnmounted(() => clearInterval(timer));

// Countdown logic
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    countdown.value = { days: "00", hours: "00", minutes: "00", seconds: "00" };
    clearInterval(timer);
    return;
  }
  countdown.value = {
    days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
    hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0"),
    minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0"),
    seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0"),
  };
}

// Music toggle
function bukaUndangan() {
  isOpened.value = true;
  musikRef.value?.play().then(() => {
    isPlaying.value = true;
  }).catch(() => {
    console.log("Autoplay mungkin diblokir");
  });
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

// Modal
function openModal(src) {
  selectedImage.value = src;
}
function closeModal() {
  selectedImage.value = null;
}

// Add guestbook
async function addUcapan() {
  if (!nama.value || !pesan.value) return;
  await addDoc(collection(db, "guestbook"), {
    nama: nama.value,
    pesan: pesan.value,
    createdAt: serverTimestamp()
  });
  nama.value = "";
  pesan.value = "";
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
