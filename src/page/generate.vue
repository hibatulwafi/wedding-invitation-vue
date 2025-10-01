<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-black text-white p-6">
        <h1 class="text-3xl font-bold mb-6">Generate Link Undangan</h1>

        <!-- Input Nama Manual -->
        <div class="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg mb-6">
            <label class="block text-sm mb-2">Nama Tamu</label>
            <input v-model="nama" type="text" placeholder="contoh: Wafi Putra"
                class="w-full p-3 rounded bg-white text-black" />

            <button @click="generateLink"
                class="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded">
                Generate
            </button>
        </div>

        <!-- Upload File (CSV / Excel) -->
        <div class="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg mb-6">
            <label class="block text-sm mb-2">Upload CSV / Excel</label>
            <input type="file" accept=".csv,.xlsx,.xls" @change="handleFileUpload" class="w-full text-sm" />
        </div>

        <!-- Hasil Links -->
        <div v-if="links.length" class="mt-6 w-full max-w-2xl text-center">
            <p class="mb-2">Daftar Link Undangan:</p>
            <table class="w-full text-sm text-left bg-white text-black rounded shadow overflow-hidden">
                <thead class="bg-gray-200">
                    <tr>
                        <th class="px-3 py-2">No</th>
                        <th class="px-3 py-2">Nama</th>
                        <th class="px-3 py-2">Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(l, i) in links" :key="i" class="border-t">
                        <td class="px-3 py-2">{{ i + 1 }}</td>
                        <td class="px-3 py-2">{{ l.nama }}</td>
                        <td class="px-3 py-2 text-blue-600 underline">
                            <a :href="l.link" target="_blank">{{ l.link }}</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Tombol Export -->
            <div class="flex justify-center gap-4 mt-4">
                <button @click="exportCSV" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                    Export CSV
                </button>
                <button @click="exportExcel" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Export Excel
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const nama = ref("");
const links = ref([]);

// 🔹 Generate link 1 orang
function generateLink() {
    if (!nama.value.trim()) {
        alert("Nama tamu tidak boleh kosong!");
        return;
    }
    addLink(nama.value.trim());
    nama.value = "";
}

// 🔹 Tambah link ke list
function addLink(guest) {
    const encodedName = encodeURIComponent(guest);
    const url = `${window.location.origin}?to=${encodedName}`;
    links.value.push({ nama: guest, link: url });
}

// 🔹 Handle Upload CSV / Excel
function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const ext = file.name.split(".").pop().toLowerCase();

    if (ext === "csv") {
        Papa.parse(file, {
            complete: (result) => {
                result.data.forEach((row) => {
                    const guest = row[0];
                    if (guest && guest.trim()) addLink(guest.trim());
                });
            },
        });
    } else if (ext === "xlsx" || ext === "xls") {
        const reader = new FileReader();
        reader.onload = (evt) => {
            const data = new Uint8Array(evt.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            rows.forEach((row) => {
                const guest = row[0];
                if (guest && guest.trim()) addLink(guest.trim());
            });
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert("Format file tidak didukung! Gunakan CSV / Excel.");
    }
}

// 🔹 Export CSV
function exportCSV() {
    const csv = Papa.unparse(links.value);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "undangan.csv");
}

// 🔹 Export Excel
function exportExcel() {
    const ws = XLSX.utils.json_to_sheet(links.value);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Undangan");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(blob, "undangan.xlsx");
}
</script>
