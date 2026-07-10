// Database Hasil Remedial Siswa
const studentDatabase = [
  {
    nis: "12511063",
    jurusan: "DKV X-1",
    etika: 92,
    prompt: 60,
    evaluasi: 60,
    karya: 70,
    nilaiAkhir: 77.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Copy-Paste AI",
    catatanDeteksi: "Bagian 1 dikerjakan sendiri dengan baik (menggunakan bahasa lisan seperti 'bukan pengganti otak kita'). Namun, Bagian 2 murid men-copy-paste materi draf slide buatan AI ke kolom prompt, bukan menulis prompt asli.",
    feedback: "Pemahaman mengenai etika AI sangat baik, ditulis menggunakan bahasa sendiri yang ekspresif. Untuk tugas berikutnya pada bagian prompt engineering, cobalah merancang prompt yang berisi instruksi kerja (bukan menyalin materi draf presentasi). Semangat terus belajarnya!"
  },
  {
    nis: "12511147",
    jurusan: "TJKT X-2",
    etika: 85,
    prompt: 92,
    evaluasi: 80,
    karya: 85,
    nilaiAkhir: 78.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis sangat singkat dalam poin-poin sederhana. Bagian 2 menulis prompt RTCC mandiri dengan baik.",
    feedback: "Analisis teori etika AI kamu sudah orisinal, namun disarankan untuk diuraikan lebih panjang dan detail di masa depan. Selamat, rancangan prompt engineering kamu sudah sangat baik dan sesuai kriteria!"
  },
  {
    nis: "12510826",
    jurusan: "DKV X-2",
    etika: 88,
    prompt: 90,
    evaluasi: 88,
    karya: 90,
    nilaiAkhir: 78.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Pengerjaan teori natural dengan beberapa salah ketik alami ('kreatifitas'). Bagian 2 menulis prompt RTCC secara logis dan mandiri.",
    feedback: "Kerja yang sangat baik dan jujur! Pemahaman etika AI disajikan dengan gaya bahasa sendiri yang natural. Rencana prompt yang kamu susun juga terstruktur dan logis. Pertahankan integritas belajarmu!"
  },
  {
    nis: "12510974",
    jurusan: "DKV X-2",
    etika: 93,
    prompt: 70,
    evaluasi: 70,
    karya: 80,
    nilaiAkhir: 78.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Copy-Paste AI",
    catatanDeteksi: "Bagian 1 natural ('menebak kata berdasar pola'). Namun, Bagian 2 menyalin kritik akademis AI secara mendalam, lengkap dengan sitasi ilmiah tahun penerbitan buku ('Satyendra Singh (2006)').",
    feedback: "Sangat baik dalam pemahaman teori AI yang ditulis secara orisinal. Pada bagian evaluasi prompt, ke depannya cobalah menyusun kalimat kritik secara mandiri menggunakan bahasa sendiri agar lebih sesuai dengan jenjang kelasmu."
  },
  {
    nis: "12511159",
    jurusan: "TJKT X-2",
    etika: 70,
    prompt: 50,
    evaluasi: 50,
    karya: 60,
    nilaiAkhir: 76.0,
    kategoriEtika: "Campuran",
    kategoriPrompt: "Bukan Prompt",
    catatanDeteksi: "Menulis deskripsi MLE yang terlalu formal di Q3 (AI), tetapi Q2 dan Q4 menggunakan kata kasual murid ('beketergantungan'). Bagian 2 hanya berisi salinan link Google Drive, bukan teks prompt asli.",
    feedback: "Telah memahami definisi dasar kecerdasan buatan dengan cukup baik. Untuk tugas mendatang di bagian prompt engineering, tulislah teks perintah secara lengkap di kolom jawaban daripada menempelkan link Drive. Kamu pasti bisa lebih baik!"
  },
  {
    nis: "12510983",
    jurusan: "DKV X-2",
    etika: 92,
    prompt: 92,
    evaluasi: 88,
    karya: 90,
    nilaiAkhir: 79.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Penjelasan teori terstruktur namun bahasanya mengalir alami khas siswa. Prompt RTCC ditulis secara manual dengan baik.",
    feedback: "Hasil pekerjaan yang luar biasa! Penjelasan teori mengalir dengan sangat alami dan orisinal. Struktur prompt RTCC yang kamu buat juga ditulis dengan sangat rapi dan logis. Terus pertahankan prestasi ini!"
  },
  {
    nis: "12511131",
    jurusan: "TJKT X-2",
    etika: 90,
    prompt: 92,
    evaluasi: 88,
    karya: 90,
    nilaiAkhir: 79.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Banyak salah ketik alami ('kexil', 'di akses', 'Ai'), menunjukkan pengetikan manual namun pemahamannya bagus. Menulis prompt dan evaluasi secara mandiri.",
    feedback: "Kerja bagus! Jawaban kamu ditulis secara mandiri dengan alur pemikiran yang orisinal dan kuat. Penulisan prompt beserta evaluasinya juga tersusun dengan sangat terstruktur. Sangat bangga dengan usahamu!"
  },
  {
    nis: "12511130",
    jurusan: "TJKT X-1",
    etika: 87,
    prompt: 90,
    evaluasi: 88,
    karya: 88,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori pendek dan personal. Evaluasi prompt menggunakan perbandingan topologi Star vs Ring yang orisinal.",
    feedback: "Pemahaman teori ditulis dengan ringkas dan jelas. Ulasan evaluasi prompt kamu sangat kreatif dan mandiri, terutama dalam membandingkan topologi jaringan Star dan Ring. Pertahankan kreativitasmu!"
  },
  {
    nis: "12510952",
    jurusan: "DKV X-2",
    etika: 50,
    prompt: 60,
    evaluasi: 60,
    karya: 70,
    nilaiAkhir: 75.3,
    kategoriEtika: "Copy-Paste AI",
    kategoriPrompt: "Copy-Paste AI",
    catatanDeteksi: "Plagiarisme AI Tinggi. Seluruh jawaban Q1-Q4 dan Prompt 1-2 menggunakan bahasa sangat formal, tata bahasa sempurna tanpa typo, dan dipenuhi konjungsi transisi khas mesin ('Setelah itu...', 'Terakhir...').",
    feedback: "Nilai remedial kamu sudah tuntas. Di tugas-tugas mendatang, usahakan untuk menuangkan pemikiran pribadi secara mandiri dan kurangi menyalin kalimat formal dari AI secara langsung. Menulis dengan bahasa sendiri akan melatih pemahamanmu dengan lebih mendalam! Semangat belajar mandiri!"
  },
  {
    nis: "12511152",
    jurusan: "TJKT X-1",
    etika: 93,
    prompt: 95,
    evaluasi: 98,
    karya: 95,
    nilaiAkhir: 79.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Sangat Baik! Teori ditulis sendiri. Evaluasi prompt sangat kreatif menggunakan analogi teriak dengan pengeras suara (Hub), kurir paket (Switch), dan kantor pos (Router).",
    feedback: "Luar biasa kreatif! Sangat mengapresiasi penjelasan teori kamu yang orisinal. Terutama ulasan evaluasimu yang menggunakan analogi Hub (teriak pakai megafon), Switch (kurir paket kosan), dan Router (kantor pos). Analogi yang cerdas dan tepat!"
  },
  {
    nis: "12511089",
    jurusan: "DKV X-2",
    etika: 78,
    prompt: 88,
    evaluasi: 80,
    karya: 85,
    nilaiAkhir: 78.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban etika sangat pendek dan penuh typo ('mambaca', 'promnt', 'Di salah gunakan'), membuktikan orisinalitas pemikiran murid. Prompt ditulis mandiri.",
    feedback: "Jawaban teori ditulis secara orisinal berdasarkan pemikiran sendiri meskipun singkat. Rancangan prompt dan ulasan evaluasinya sudah cukup baik. Terus asah kemampuan menulis mandirimu!"
  },
  {
    nis: "12510904",
    jurusan: "DKV X-2",
    etika: 88,
    prompt: 90,
    evaluasi: 88,
    karya: 88,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Menulis dengan ejaan tidak baku ('di pahami', 'pemograman'). Prompt ditulis manual.",
    feedback: "Kerja bagus! Penjelasan etika AI ditulis secara mandiri dengan gaya tulisan yang santai dan mengalir. Penyusunan prompt dan evaluasi juga dikerjakan dengan sangat baik. Terus kembangkan!"
  },
  {
    nis: "12511027",
    jurusan: "DKV X-2",
    etika: 85,
    prompt: 92,
    evaluasi: 98,
    karya: 95,
    nilaiAkhir: 79.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Sangat Baik! Teori singkat dengan format buatan sendiri. Prompt bagian kedua direvisi sangat detail dan menyertakan nama asli siswa ('Kiran Nanda Malika Putri').",
    feedback: "Hasil pengerjaan yang istimewa! Teori etika AI dijelaskan secara mandiri. Prompt yang dirancang juga sangat mendalam, personal, dan detail, bahkan mencantumkan nama lengkapmu. Pertahankan kinerja luar biasa ini!"
  },
  {
    nis: "12511274",
    jurusan: "DKV X-1",
    etika: 80,
    prompt: 75,
    evaluasi: 70,
    karya: 78,
    nilaiAkhir: 77.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Menulis tanpa huruf kapital sama sekali di Bagian 1, menunjukkan pengetikan mandiri yang cepat. Prompt dan revisi sangat sederhana.",
    feedback: "Pengerjaan teori sudah mandiri dan ditulis secara orisinal. Pada tugas selanjutnya, usahakan merancang prompt dan evaluasi dengan lebih mendalam dan terperinci agar pemahaman materimu terlihat lebih optimal."
  },
  {
    nis: "12511190",
    jurusan: "DKV X-2",
    etika: 91,
    prompt: 92,
    evaluasi: 92,
    karya: 90,
    nilaiAkhir: 79.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori panjang namun ditulis manual (format penomoran tanpa spasi: '1.AI...'). Menulis prompt RTCC dengan baik.",
    feedback: "Orisinalitas pengerjaan sangat baik. Kamu mampu menuliskan penjelasan teori, perancangan prompt, serta evaluasi secara mandiri dan terstruktur dengan rapi. Pertahankan kualitas kerjamu!"
  },
  {
    nis: "12510924",
    jurusan: "DKV X-2",
    etika: 82,
    prompt: 60,
    evaluasi: 55,
    karya: 65,
    nilaiAkhir: 76.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Salin Panduan",
    catatanDeteksi: "Bagian 1 penuh salah ketik ('memasukan', 'bekarja', 'Preofesinya'). Namun, Bagian 2 murid hanya menyalin panduan pengerjaan guru ('Tips: Gunakan teknik Role...') daripada menulis prompt asli.",
    feedback: "Pemahaman teori etika AI kamu sudah cukup baik dan orisinal. Namun, untuk perancangan prompt, pastikan untuk menuliskan prompt buatan sendiri yang kreatif dan bukan menyalin ulang kalimat tips/instruksi dari lembar kerja guru. Tetap semangat!"
  },
  {
    nis: "12511061",
    jurusan: "DKV X-2",
    etika: 94,
    prompt: 65,
    evaluasi: 70,
    karya: 75,
    nilaiAkhir: 78.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Copy-Paste AI",
    catatanDeteksi: "Bagian 1 ditulis mandiri menggunakan metafora kreatif ('Kompas, Bukan Joki'). Namun, Bagian 2 murid menyalin template prompt kosong dengan placeholder '[...]' dan menyalin analisis teknis tingkat tinggi AI ('Rich Black', 'Convert to Curves').",
    feedback: "Sangat kagum dengan analogi etika AI yang kamu buat ('AI sebagai Kompas, Bukan Joki') yang sangat orisinal! Untuk bagian prompt, ke depannya pastikan mengisi bagian kurung siku template dengan tugas nyata secara mandiri."
  },
  {
    nis: "12511197",
    jurusan: "TJKT X-1",
    etika: 85,
    prompt: 75,
    evaluasi: 50,
    karya: 75,
    nilaiAkhir: 77.4,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Menulis penjelasan Q1 menggunakan analogi sederhana autocorrect HP. Prompt sangat dasar dan tidak menulis evaluasi.",
    feedback: "Analogi teori etika AI dengan menggunakan fitur autocorrect di HP sangat orisinal dan mudah dipahami. Pada bagian prompt, usahakan agar kolom evaluasi juga dilengkapi di tugas berikutnya agar nilaimu lebih maksimal."
  },
  {
    nis: "12511288",
    jurusan: "DKV X-1",
    etika: 88,
    prompt: 90,
    evaluasi: 85,
    karya: 88,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Terjadi salah ketik alami ('mencocok', 'di ujicoba', 'iini'). Prompt ditulis manual.",
    feedback: "Hasil pengerjaan yang sangat jujur dan mandiri. Penjelasan etika dan penulisan prompt ditulis secara manual dengan baik. Terus pertahankan integritas akademik dan kejujuran belajarmu!"
  },
  {
    nis: "12511425",
    jurusan: "TJKT X-3",
    etika: 86,
    prompt: 90,
    evaluasi: 88,
    karya: 88,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Menggunakan singkatan ('yg'), salah spasi ('1 .'), dan salah ketik ('Membatu'). Prompt ditulis mandiri secara logis.",
    feedback: "Penjelasan teori etika AI kamu ditulis mandiri dengan sangat natural. Langkah perancangan prompt dengan teknik RTCC juga logis dan tepat. Kerja bagus, pertahankan!"
  },
  {
    nis: "12511067",
    jurusan: "DKV X-2",
    etika: 75,
    prompt: 80,
    evaluasi: 75,
    karya: 78,
    nilaiAkhir: 77.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban super pendek dan minimalis. Ada salah ketik ('Membuang kerangka'). Prompt sangat sederhana.",
    feedback: "Hasil pekerjaan kamu orisinal dan ditulis secara mandiri. Untuk tugas-tugas mendatang, cobalah menguraikan jawaban teori dan merancang prompt secara lebih detail agar pemahaman materimu tergambar dengan lebih jelas."
  },
  {
    nis: "12511355",
    jurusan: "DKV X-2",
    etika: 50,
    prompt: 90,
    evaluasi: 50,
    karya: 75,
    nilaiAkhir: 76.3,
    kategoriEtika: "Copy-Paste AI",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori ditulis dalam bahasa sangat formal tanpa satu pun kesalahan ketik, menggunakan terminologi kaku khas AI ('selama proses pelatihan'). Namun, prompt Bagian 2 ditulis manual.",
    feedback: "Rancangan prompt pada Bagian 2 sudah ditulis sendiri dengan baik. Namun, untuk bagian pemahaman teori dan evaluasi, cobalah menuangkan hasil pemikiran sendiri secara mandiri di tugas berikutnya tanpa menyalin teks AI. Semangat belajar!"
  },
  {
    nis: "12511117",
    jurusan: "TJKT X-1",
    etika: 88,
    prompt: 90,
    evaluasi: 50,
    karya: 80,
    nilaiAkhir: 77.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bahasa teori santai dan memakai kata kasual ('bikin malas berpikir'). Prompt ditulis mandiri.",
    feedback: "Penjelasan teori etika AI sangat jujur dan santai dengan bahasa sendiri. Rancangan prompt juga ditulis sendiri secara lugas. Jangan lupa untuk melengkapi bagian evaluasi di tugas berikutnya ya!"
  },
  {
    nis: "12511322",
    jurusan: "DKV X-2",
    etika: 88,
    prompt: 70,
    evaluasi: 70,
    karya: 80,
    nilaiAkhir: 77.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Copy-Paste AI",
    catatanDeteksi: "Bagian 1 ditulis manual, ada typo ('mecari', 'sertacek'). Bagian 2 menyalin prompt terstruktur AI secara utuh lengkap dengan format penulisan tebal ('**') dan instruksi teknis yang rumit.",
    feedback: "Pemahaman teori etika AI ditulis sendiri dengan gaya bahasa yang sangat alami. Di bagian prompt engineering, ke depannya cobalah untuk merancang prompt dan analisis evaluasi secara mandiri menggunakan kata-kata sendiri."
  }
];

// DOM Elements
const searchInput = document.getElementById("nis-search");
const searchBtn = document.getElementById("search-btn");
const resultArea = document.getElementById("result-area");
const errorArea = document.getElementById("error-area");

// Elements inside active result card
const studentJurusan = document.getElementById("student-jurusan");
const studentNisTitle = document.getElementById("student-nis-title");
const studentFinalScore = document.getElementById("student-final-score");
const scoreEtika = document.getElementById("score-etika");
const scorePrompt = document.getElementById("score-prompt");
const scoreEvaluasi = document.getElementById("score-evaluasi");
const scoreKarya = document.getElementById("score-karya");
const barEtika = document.getElementById("bar-etika");
const barPrompt = document.getElementById("bar-prompt");
const barEvaluasi = document.getElementById("bar-evaluasi");
const barKarya = document.getElementById("bar-karya");

// Originality Elements
const statusEtika = document.getElementById("status-etika");
const statusPrompt = document.getElementById("status-prompt");
const analysisNotesText = document.getElementById("analysis-notes-text");

const feedbackText = document.getElementById("student-feedback-text");

// Get appropriate HTML symbol for status
function getStatusSymbol(status) {
  if (status === "Murni Murid") {
    // Green check mark circle
    return `
      <span class="symbol-indicator status-murni" title="Orisinalitas Tinggi (Murni Murid)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="symbol-icon" style="width: 1.25rem; height: 1.25rem; display: inline-block; vertical-align: middle;">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </span>
    `;
  } else if (status === "Campuran" || status === "Salin Panduan") {
    // Yellow question mark circle
    return `
      <span class="symbol-indicator status-campuran" title="Deteksi AI Sedang (Campuran/Salin Panduan)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="symbol-icon" style="width: 1.25rem; height: 1.25rem; display: inline-block; vertical-align: middle;">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
        </svg>
      </span>
    `;
  } else {
    // Red cross circle
    return `
      <span class="symbol-indicator status-plagiat" title="Deteksi AI Tinggi (Copy-Paste AI/Bukan Prompt)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="symbol-icon" style="width: 1.25rem; height: 1.25rem; display: inline-block; vertical-align: middle;">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      </span>
    `;
  }
}

// Perform Lookup
function performSearch(nis) {
  const query = nis.trim();
  
  if (!query) {
    alert("Silakan masukkan NIS terlebih dahulu.");
    return;
  }
  
  const student = studentDatabase.find(s => s.nis === query);
  
  if (student) {
    // Hide error
    errorArea.classList.add("hidden");
    
    // Set text values
    studentJurusan.textContent = student.jurusan;
    studentNisTitle.textContent = `NIS: ${student.nis}`;
    studentFinalScore.textContent = student.nilaiAkhir.toFixed(1);
    
    scoreEtika.textContent = `${student.etika} / 100`;
    scorePrompt.textContent = `${student.prompt} / 100`;
    scoreEvaluasi.textContent = `${student.evaluasi} / 100`;
    scoreKarya.textContent = `${student.karya} / 100`;
    
    // Set Originality Badges & Notes
    statusEtika.innerHTML = getStatusSymbol(student.kategoriEtika);
    statusPrompt.innerHTML = getStatusSymbol(student.kategoriPrompt);
    
    analysisNotesText.textContent = student.catatanDeteksi;
    
    // Set widths for animated progress bars (with slight timeout to trigger transition)
    barEtika.style.width = "0%";
    barPrompt.style.width = "0%";
    barEvaluasi.style.width = "0%";
    barKarya.style.width = "0%";
    
    feedbackText.textContent = `"${student.feedback}"`;
    
    // Show results area
    resultArea.classList.remove("hidden");
    
    setTimeout(() => {
      barEtika.style.width = `${student.etika}%`;
      barPrompt.style.width = `${student.prompt}%`;
      barEvaluasi.style.width = `${student.evaluasi}%`;
      barKarya.style.width = `${student.karya}%`;
    }, 50);

    // Scroll to results smoothly on mobile
    resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
  } else {
    // Hide results
    resultArea.classList.add("hidden");
    // Show error
    errorArea.classList.remove("hidden");
    errorArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Event Listeners
searchBtn.addEventListener("click", () => performSearch(searchInput.value));

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch(searchInput.value);
  }
});

// Auto-tugas filter typing numbers only
searchInput.addEventListener("input", (e) => {
  searchInput.value = searchInput.value.replace(/[^0-9]/g, '');
});
