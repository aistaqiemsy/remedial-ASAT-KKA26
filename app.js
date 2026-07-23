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
  },
  {
    nis: "12511192",
    jurusan: "DKV X-2",
    etika: 88,
    prompt: 92,
    evaluasi: 90,
    karya: 90,
    nilaiAkhir: 79.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 natural dengan salah ketik alami ('printah', 'efesiensi'). Bagian 2 membuat prompt RTCC mandiri dan melakukan evaluasi perbaikan slide secara detail.",
    feedback: "Pemahaman teori etika AI kamu sudah sangat baik dan orisinal. Prompt yang kamu buat terstruktur dengan baik, serta evaluasi perbaikan slide-nya detail dan praktis. Pertahankan kerja bagus ini!"
  },
  {
    nis: "12511368",
    jurusan: "DKV X-2",
    etika: 70,
    prompt: 50,
    evaluasi: 50,
    karya: 55,
    nilaiAkhir: 75.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Bukan Prompt",
    catatanDeteksi: "Jawaban teori sangat singkat dan kurang niat. Bagian 2 tidak menulis prompt asli (hanya 'untuk teks / materi') dan tidak melakukan evaluasi ('tidak ada').",
    feedback: "Materi remedial kamu sudah tuntas. Namun, untuk tugas-tugas berikutnya, cobalah untuk lebih serius dalam merancang prompt dan memberikan ulasan evaluasi agar pemahamanmu lebih optimal. Semangat belajar!"
  },
  {
    nis: "12510994",
    jurusan: "TJKT X-3",
    etika: 85,
    prompt: 95,
    evaluasi: 98,
    karya: 95,
    nilaiAkhir: 79.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 orisinal dan singkat. Evaluasi prompt di Bagian 2 sangat istimewa karena menunjukkan pemahaman teknis nyata TJKT (koreksi eth0 ke enp0s3 dan systemctl restart networking di Debian 11).",
    feedback: "Luar biasa! Evaluasi teknis kamu mengenai interface jaringan (eth0 vs enp0s3) dan perintah restart systemd pada Debian 11 menunjukkan pemahaman praktis TJKT yang sangat kuat dan nyata. Kerja yang sangat cerdas!"
  },
  {
    nis: "12511075",
    jurusan: "TJKT X-1",
    etika: 88,
    prompt: 92,
    evaluasi: 90,
    karya: 90,
    nilaiAkhir: 79.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori ditulis sendiri dengan rapi. Bagian 2 merancang prompt dengan baik dan mengoreksi istilah teknis berat (DDoS) menjadi contoh yang relevan untuk siswa kelas 10.",
    feedback: "Pekerjaan yang sangat baik! Jawaban teori ditulis sendiri secara rapi. Langkahmu menyederhanakan contoh serangan DDoS menjadi kasus hack akun Instagram agar lebih dipahami pemula adalah keputusan pengajaran yang sangat tepat."
  },
  {
    nis: "12511170",
    jurusan: "TJKT X-1",
    etika: 87,
    prompt: 92,
    evaluasi: 75,
    karya: 85,
    nilaiAkhir: 78.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Penjelasan teori orisinal dan menyebutkan sekolah secara spesifik. Prompt dirancang sangat terperinci, meskipun evaluasinya masih sederhana.",
    feedback: "Sangat mengapresiasi keaslian jawaban teorimu yang menyebutkan lingkungan belajarmu. Prompt yang kamu buat sudah sangat lengkap dan terstruktur. Ke depannya, cobalah membuat analisis evaluasi yang lebih kritis terhadap hasil AI."
  },
  {
    nis: "12510801",
    jurusan: "TJKT X-1",
    etika: 75,
    prompt: 70,
    evaluasi: 50,
    karya: 70,
    nilaiAkhir: 76.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori sangat singkat dan minimal. Prompt dasar dan tidak menulis ulasan evaluasi ('Tidak ada').",
    feedback: "Jawaban teorimu sudah ditulis secara mandiri. Namun, di tugas berikutnya, pastikan untuk merancang prompt dengan lebih terperinci dan mengisi ulasan evaluasi agar nilai kamu bisa lebih maksimal. Terus berusaha!"
  },
  {
    nis: "12510880",
    jurusan: "DKV X-2",
    etika: 60,
    prompt: 85,
    evaluasi: 78,
    karya: 80,
    nilaiAkhir: 77.3,
    kategoriEtika: "Copy-Paste AI",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori ditulis dalam bahasa yang sangat formal dan sempurna tanpa typo, terindikasi menyalin dari AI. Prompt dikerjakan dengan cukup baik, namun evaluasinya agak umum.",
    feedback: "Nilai remedial kamu sudah tuntas. Di tugas mendatang, cobalah untuk menuliskan jawaban teori menggunakan gaya bahasamu sendiri secara jujur daripada menyalin teks formal AI. Menulis sendiri akan melatih pemahamanmu!"
  },
  {
    nis: "12511191",
    jurusan: "DKV X-2",
    etika: 94,
    prompt: 92,
    evaluasi: 80,
    karya: 90,
    nilaiAkhir: 79.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas sangat baik. Jawaban teori memberikan contoh kasus riil DKV yang sangat spesifik (AI Comic Colorist dan mengevaluasi warna foto gambar). Prompt dibuat mandiri dengan baik.",
    feedback: "Kreatif dan orisinal! Penggunaan contoh profesi AI Comic Colorist serta ide mengirimkan foto gambar untuk dievaluasi AI menunjukkan pemahaman praktis DKV yang sangat kontekstual. Pertahankan kreativitas hebat ini!"
  },
  {
    nis: "12511336",
    jurusan: "DKV X-1",
    etika: 74,
    prompt: 80,
    evaluasi: 55,
    karya: 75,
    nilaiAkhir: 77.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Pemahaman teori dan evaluasi dikerjakan dengan sangat minimalis dan terburu-buru. Prompt menggunakan format RTCC sederhana dengan bahasa kasual.",
    feedback: "Jawaban teorimu ditulis secara mandiri. Di tugas-tugas mendatang, luangkan waktu lebih banyak untuk menguraikan teori dan memberikan ulasan evaluasi secara lengkap dan detail agar pemahaman belajarmu tergambar optimal."
  },
  {
    nis: "12511078",
    jurusan: "DKV X-1",
    etika: 82,
    prompt: 80,
    evaluasi: 60,
    karya: 75,
    nilaiAkhir: 77.6,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Campuran",
    catatanDeteksi: "Bagian 1 dikerjakan sendiri dengan banyak typo alami. Namun, prompt di Bagian 2 sangat rumit dan profesional, kontras dengan evaluasi yang hanya berupa 4 kata ('Ubah manjadi semi formal'), terindikasi menyalin prompt dari luar.",
    feedback: "Teori etika AI sudah dikerjakan sendiri dengan baik. Di tugas berikutnya, usahakan agar rancangan prompt ditulis secara mandiri menggunakan bahasa sendiri, dan sertakan ulasan evaluasi yang lebih mendalam untuk melatih pemikiran kritis."
  },
  {
    nis: "12511030",
    jurusan: "DKV X-1",
    etika: 78,
    prompt: 70,
    evaluasi: 55,
    karya: 70,
    nilaiAkhir: 77.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan sendiri secara singkat. Prompt yang dibuat sangat sederhana dan evaluasinya hanya menyatakan bahwa prompt kurang detail tanpa mengkritisi hasil AI.",
    feedback: "Pemahaman teori sudah mandiri. Untuk tugas merancang prompt selanjutnya, berusahalah menyertakan instruksi yang lebih lengkap sejak awal dan lakukan kritik atau analisis terhadap hasil AI secara konkret. Semangat belajar!"
  },
  {
    nis: "12511059",
    jurusan: "DKV X-1",
    etika: 85,
    prompt: 88,
    evaluasi: 92,
    karya: 90,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Pengerjaan mandiri dengan orisinalitas tinggi. Bagian 2 merancang prompt dengan baik dan memberikan catatan evaluasi konkret tentang penyesuaian warna serta penyederhanaan konten presentasi.",
    feedback: "Kerja yang sangat baik dan jujur! Ulasan evaluasimu mengenai perbaikan warna tema visual serta penyederhanaan konten di Gamma AI sangat bagus dan relevan dengan kompetensi DKV. Teruskan prestasi belajarmu!"
  },
  {
    nis: "12511171",
    jurusan: "TJKT X-2",
    etika: 94,
    prompt: 92,
    evaluasi: 96,
    karya: 92,
    nilaiAkhir: 79.4,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Sangat Baik! Penjelasan teori menggunakan analogi asisten pembaca buku yang komunikatif. Evaluasi prompt sangat cerdas dan kritis secara teknis (mendeteksi dan mengoreksi protokol keamanan WEP yang usang ke WPA2/WPA3).",
    feedback: "Sangat istimewa! Penjelasan analogi asisten pembaca buku kamu sangat mudah dipahami. Selain itu, kejelianmu mengoreksi saran enkripsi WEP yang usang dari AI menjadi WPA2/WPA3 menunjukkan kompetensi teknis TKJ yang luar biasa. Hebat!"
  },
  {
    nis: "12510965",
    jurusan: "TJKT X-1",
    etika: 93,
    prompt: 90,
    evaluasi: 50,
    karya: 80,
    nilaiAkhir: 78.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori sangat baik dengan analogi subnetting rumah. Prompt dirancang dengan format CCNA terstruktur. Namun, tidak menulis ulasan evaluasi sama sekali.",
    feedback: "Pemahaman teorimu sangat mendalam dan kreatif dengan analogi subnetting rumah. Desain prompt instruktur CCNA juga sangat baik. Sayangnya, kamu tidak mengisi bagian evaluasi. Jangan lupa melengkapinya di tugas berikutnya ya!"
  },
  {
    nis: "12511020",
    jurusan: "DKV X-3",
    etika: 85,
    prompt: 88,
    evaluasi: 88,
    karya: 88,
    nilaiAkhir: 78.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori ditulis secara orisinal dengan gaya bahasa sendiri. Bagian 2 merancang prompt dengan baik dan menyertakan ulasan evaluasi berupa perintah tindak lanjut untuk menyederhanakan output.",
    feedback: "Hasil pekerjaan yang orisinal. Kamu sudah merancang prompt dengan baik dan memberikan evaluasi yang sangat praktis, yaitu meminta AI meringkas ulang output yang dirasa terlalu panjang. Teruskan langkah belajar mandirimu!"
  },
  // === SISWA BARU (Hasil Pengerjaan Remedial Bag 1.xlsx - Batch 2) ===
  {

    nis: "12510980",
    jurusan: "DKV X-1",
    etika: 85,
    prompt: 82,
    evaluasi: 80,
    karya: 82,
    nilaiAkhir: 78.6,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 orisinal dan cukup panjang, menjelaskan AI dengan analogi programmer yang memasukkan ilmu pengetahuan. Bagian 2 membuat prompt Gemini sederhana tentang fotografi dan mengevaluasi dengan permintaan perubahan slide awal dan warna background pink pastel yang personal.",
    feedback: "Penjelasan teori etika AI kamu cukup baik dan ditulis secara mandiri dengan gaya bahasamu sendiri. Rancangan prompt dan evaluasinya juga sudah menunjukkan inisiatif yang baik, terutama permintaan perubahan visual yang spesifik. Pertahankan kreativitasmu!"
  },
  {
    nis: "12511244",
    jurusan: "TJKT X-1",
    etika: 72,
    prompt: 78,
    evaluasi: 60,
    karya: 72,
    nilaiAkhir: 77.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 sangat singkat dan kurang mendalam, hanya menyebutkan 'menggunakan algoritma internet'. Bagian 2 membuat prompt cyber security yang cukup baik, namun evaluasinya hanya berupa keluhan 'masih belum 100% mahir' tanpa kritik konkret terhadap hasil AI.",
    feedback: "Jawaban teori kamu sudah orisinal meskipun masih sangat singkat. Untuk tugas mendatang, cobalah menjelaskan cara kerja AI dengan lebih detail dan memberikan evaluasi yang lebih spesifik terhadap kualitas output AI, bukan hanya meminta konten yang lebih panjang. Semangat!"
  },
  {
    nis: "12511222",
    jurusan: "TJKT X-2",
    etika: 84,
    prompt: 92,
    evaluasi: 90,
    karya: 90,
    nilaiAkhir: 79.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 bahasanya cukup natural dan orisinal. Bagian 2 sangat baik: prompt pertama tentang konfigurasi LAN Cisco Packet Tracer sudah terstruktur, dan pada prompt revisi ditambahkan elemen teknis sangat spesifik (contoh IP kelas C 192.168.1.0/24, konfigurasi per perangkat PC/Switch/Router, dan bagian kesalahan umum). Menunjukkan pemahaman teknis TJKT yang nyata.",
    feedback: "Kerja yang sangat baik! Pemahaman teori ditulis sendiri dengan baik. Peningkatan prompt Cisco Packet Tracer kamu sangat teknis dan spesifik, mencerminkan pengetahuan jaringan yang nyata. Penambahan contoh IP kelas C dan troubleshooting umum adalah langkah yang sangat cerdas. Luar biasa!"
  },
  {
    nis: "12511024",
    jurusan: "DKV X-1",
    etika: 86,
    prompt: 85,
    evaluasi: 72,
    karya: 82,
    nilaiAkhir: 78.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 cukup orisinal dan natural, menjelaskan cara kerja AI dengan baik. Bagian 2 membuat prompt prinsip desain grafis dengan format yang baik meski ada beberapa typo ('prinsif', 'emmilih', 'bahsanya'). Evaluasi hanya berupa perintah tambahan sederhana (mengubah format pembukaan), bukan analisis kritis terhadap hasil AI.",
    feedback: "Pemahaman teori etika AI kamu sudah baik dan ditulis secara mandiri, terlihat dari beberapa typo alami. Rancangan prompt DKV tentang prinsip desain juga terstruktur. Di tugas berikutnya, coba berikan evaluasi yang lebih mendalam terhadap kualitas output AI daripada sekadar menambah perintah format. Terus berkembang!"
  },
  {
    nis: "12510948",
    jurusan: "TJKT X-1",
    etika: 72,
    prompt: 50,
    evaluasi: 50,
    karya: 55,
    nilaiAkhir: 76.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Bukan Prompt",
    catatanDeteksi: "Bagian 1 sangat singkat (hanya 1 kalimat: 'AI itu merangkai kata berdasarkan pola, bukan ahli berpikir'). Bagian 2 bermasalah serius: prompt yang diisi bukan materi pembelajaran sesuai jurusan TJKT, melainkan narasi video promosi SMK Wikrama yang terindikasi disalin dari AI ('Bosan dengan sekolah yang itu-itu saja?'). Tidak ada evaluasi prompt.",
    feedback: "Nilai remedial kamu sudah tuntas. Jawaban teori kamu orisinal meski sangat singkat. Namun, untuk tugas prompt engineering, pastikan kamu menulis prompt materi pembelajaran sesuai jurusanmu (TJKT), bukan menyalin materi promosi. Tulislah prompt sendiri tentang topik jaringan atau cyber security yang kamu pelajari. Semangat belajar!"
  },
  {
    nis: "12511211",
    jurusan: "TJKT X-1",
    etika: 80,
    prompt: 75,
    evaluasi: 60,
    karya: 75,
    nilaiAkhir: 77.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 cukup orisinal dan singkat dengan pemahamannya sendiri. Bagian 2 prompt cyber security sangat generik dan hampir identik antara prompt pertama dan revisi (hanya perubahan minor dari 'artikel informatif' menjadi 'Artikel Informatif'), evaluasinya tidak menunjukkan perubahan yang berarti.",
    feedback: "Pemahaman teori etika AI kamu sudah mandiri dan cukup baik. Untuk bagian prompt, di tugas berikutnya cobalah membuat perbedaan yang lebih signifikan antara prompt pertama dan revisi, serta berikan evaluasi yang lebih kritis tentang kualitas output AI. Tambahkan detail teknis spesifik TJKT agar hasilnya lebih optimal!"
  },
  {
    nis: "12510920",
    jurusan: "DKV X-3",
    etika: 85,
    prompt: 88,
    evaluasi: 85,
    karya: 85,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 cukup natural dan orisinal, menjelaskan cara kerja AI dengan bahasa sendiri. Bagian 2 membuat prompt tentang jurusan DKV dengan baik dan melakukan revisi yang konkret dengan menambahkan peluang kerja dan hiasan presentasi yang tidak berlebihan. Evaluasi mandiri dan menunjukkan kepraktisan.",
    feedback: "Kerja yang baik! Penjelasan teori etika AI ditulis secara mandiri. Prompt tentang jurusan DKV terstruktur dan revisi yang meminta tambahan peluang karier serta elemen visual merupakan langkah evaluasi yang praktis dan relevan. Pertahankan kemampuan analisismu!"
  },
  {
    nis: "12510987",
    jurusan: "TJKT X-2",
    etika: 90,
    prompt: 88,
    evaluasi: 88,
    karya: 85,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 sangat baik dan panjang, ditulis secara mandiri dengan penjelasan lengkap tentang cara kerja AI yang orisinal. Bagian 2 membuat prompt keamanan jaringan yang terstruktur dengan format RTCC yang baik. Kolom evaluasi juga telah diperbaiki dengan menuliskan prompt revisi dan parameter perubahan yang spesifik.",
    feedback: "Penjelasan teori etika AI kamu sangat baik, panjang, dan ditulis secara mandiri. Rancangan prompt keamanan jaringan juga sudah terstruktur dengan format yang tepat. Evaluasi prompt yang kamu tambahkan pada pengumpulan ulang juga sangat baik dan menjelaskan perubahan parameter secara spesifik. Pertahankan kualitas belajarmu! Kerja bagus!"
  },  // === SISWA BATCH 3 (Penilaian Terbaru) ===
  {
    nis: "12511240",
    jurusan: "DKV X-2",
    etika: 85,
    prompt: 88,
    evaluasi: 85,
    karya: 85,
    nilaiAkhir: 78.6,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis dengan bahasa yang natural dan mengalir. Pemahaman cara kerja AI cukup baik, menjelaskan AI sebagai mesin prediksi teks berbasis pola. Manfaat & risiko spesifik dan kontekstual (ketergantungan, plagiarisme). Bagian 2 membuat prompt RTCC sangat lengkap dan terstruktur dengan role, context, task, dan constraint yang jelas. Evaluasi menyertakan permintaan perubahan yang spesifik pada konten presentasi.",
    feedback: "Penjelasan teori etika AI kamu sudah baik dan ditulis secara mandiri dengan bahasa yang natural. Prompt RTCC yang kamu rancang sangat terstruktur dan lengkap — menunjukkan pemahaman prompt engineering yang solid! Evaluasi yang kamu berikan juga cukup spesifik. Pertahankan semangat belajar mandirimu!"
  },
  {
    nis: "12511015",
    jurusan: "DKV X-2",
    etika: 82,
    prompt: 82,
    evaluasi: 85,
    karya: 82,
    nilaiAkhir: 78.3,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis mandiri meski singkat. Manfaat AI di bidang fotografi (memperbaiki gambar, mengedit) relevan dengan jurusan DKV. Cara etis menggunakan AI dijelaskan dengan baik. Bagian 2 membuat prompt desain grafis cukup terstruktur dengan role dan konteks yang jelas. Evaluasi menunjukkan pemikiran kritis yang baik terhadap output AI.",
    feedback: "Penjelasan teori etika AI kamu sudah cukup baik dan orisinal. Prompt yang kamu buat untuk materi DKV sudah terstruktur. Evaluasimu menunjukkan pemikiran kritis yang bagus. Di tugas berikutnya, cobalah mengembangkan jawaban teori lebih panjang dan mendalam agar pemahamanmu tergambar lebih optimal. Semangat!"
  },
  {
    nis: "12510997",
    jurusan: "DKV X-2",
    etika: 85,
    prompt: 85,
    evaluasi: 88,
    karya: 85,
    nilaiAkhir: 78.6,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis mandiri dengan pemahaman cara kerja AI yang baik dan analogi yang tepat. Manfaat & risiko relevan. Cara menghindari plagiarisme dijelaskan secara orisinal. Profesi AI Designer sangat relevan untuk jurusan DKV. Bagian 2 membuat prompt RTCC lengkap tentang peran AI dalam DKV. Evaluasi sangat baik: menjelaskan proses perbaikan prompt secara naratif dan konkret.",
    feedback: "Penjelasan teori etika AI kamu sudah sangat baik dan ditulis secara mandiri! Prompt RTCC tentang peran AI dalam DKV terstruktur dengan baik. Evaluasi perbaikan prompt kamu menunjukkan proses berpikir yang sistematis dan mandiri — sangat bagus! Pertahankan semangat belajarmu yang luar biasa ini!"
  },
  // === SISWA BATCH 4 (Data Remedial Terbaru) ===
  {
    nis: "12511184",
    jurusan: "DKV X-3",
    etika: 88,
    prompt: 90,
    evaluasi: 88,
    karya: 88,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis dengan bahasa yang alami dan mengalir. Penjelasan cara kerja AI menggunakan analogi yang tepat dan mudah dipahami. Profesi AI Motion Designer sangat relevan dan spesifik untuk jurusan DKV. Bagian 2 membuat prompt RTCC detail dengan konteks target audiens SMK yang jelas. Evaluasi sangat baik, menunjukkan analisis kritis terhadap output AI.",
    feedback: "Hasil pekerjaan yang sangat baik! Penjelasan cara kerja AI mengalir natural dengan analogi yang tepat. Pilihan profesi AI Motion Designer menunjukkan pemahaman mendalam tentang potensi AI di bidang DKV. Prompt RTCC yang kamu buat terstruktur dan detail. Evaluasimu juga menunjukkan pemikiran kritis yang kuat. Pertahankan prestasi ini!"
  },
  {
    nis: "12510909",
    jurusan: "DKV X-3",
    etika: 85,
    prompt: 82,
    evaluasi: 82,
    karya: 82,
    nilaiAkhir: 78.3,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis secara orisinal dan mandiri. Pemahaman cara kerja AI cukup baik. Cara menggunakan AI secara etis dijelaskan dengan langkah yang konkret. Bagian 2 membuat prompt dengan role, task, dan context yang cukup jelas. Evaluasi spesifik, meminta perubahan pada bagian tertentu dari output AI dengan alasan yang jelas.",
    feedback: "Penjelasan teori etika AI kamu orisinal dan ditulis secara mandiri. Cara penggunaan AI secara etis yang kamu jelaskan sangat praktis dan konkret. Prompt kamu sudah cukup terstruktur. Evaluasi dengan menyebutkan bagian spesifik yang perlu diubah menunjukkan kemampuan analitis yang baik. Terus tingkatkan kualitas kerjamu!"
  },
  {
    nis: "12511395",
    jurusan: "DKV X-2",
    etika: 82,
    prompt: 78,
    evaluasi: 82,
    karya: 80,
    nilaiAkhir: 78.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis secara orisinal dengan bahasa yang mengalir. Manfaat dan risiko AI dijelaskan dengan baik dan relevan. Profesi desainer grafis yang memanfaatkan AI sangat relevan dengan DKV Multimedia. Bagian 2 membuat prompt yang cukup spesifik meski tanpa format RTCC ketat. Evaluasi menjelaskan perubahan spesifik (lebih singkat, tambah contoh relevan DKV).",
    feedback: "Pemahaman teori etika AI kamu sudah baik dan ditulis secara mandiri. Cara penggunaan AI yang etis dijabarkan dengan jelas. Prompt yang kamu buat cukup spesifik sesuai jurusan DKV Multimedia. Evaluasi yang meminta konten lebih ringkas dan contoh yang relevan menunjukkan pemikiran kritis yang baik. Pertahankan semangat belajarmu!"
  },
  {
    nis: "12511235",
    jurusan: "DKV X-1",
    etika: 70,
    prompt: 72,
    evaluasi: 75,
    karya: 72,
    nilaiAkhir: 77.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 sangat singkat dan kurang mendalam. Q3 dijawab 'Belum terpikirkan saat ini' yang menunjukkan kurangnya eksplorasi terhadap potensi AI di bidang DKV. Q4 juga dijawab sangat singkat. Bagian 2 membuat prompt sangat singkat tanpa format RTCC. Evaluasi cukup spesifik (meminta 7 prinsip desain dan maks 10 slide).",
    feedback: "Jawaban teori kamu sudah orisinal dan ditulis mandiri. Namun, di tugas berikutnya, cobalah mengeksplorasi lebih dalam tentang potensi AI di bidang DKV dan cara penggunaannya secara etis. Untuk bagian prompt, gunakan format RTCC agar instruksimu lebih terstruktur dan hasilnya lebih optimal. Semangat belajar!"
  },
  {
    nis: "12511321",
    jurusan: "DKV X-1",
    etika: 82,
    prompt: 80,
    evaluasi: 85,
    karya: 82,
    nilaiAkhir: 78.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis secara mandiri dengan penjelasan yang logis dan terstruktur. Manfaat dan risiko AI dijelaskan dengan baik. Profesi Desain Grafis dikaitkan dengan pemanfaatan AI secara konkret. Bagian 2 membuat prompt dengan role guru DKV yang jelas, konteks, dan batasan yang terstruktur. Evaluasi konstruktif meminta presentasi lebih interaktif, singkat, namun tetap profesional.",
    feedback: "Pemahaman teori etika AI kamu baik dan ditulis secara mandiri. Profesi desain grafis yang dikaitkan dengan AI menunjukkan wawasan yang relevan. Prompt dengan role guru DKV sudah cukup terstruktur. Evaluasimu yang meminta presentasi lebih interaktif sekaligus profesional menunjukkan pemikiran yang matang. Pertahankan kualitas kerjamu!"
  },
  {
    nis: "12511239",
    jurusan: "DKV X-1",
    etika: 75,
    prompt: 82,
    evaluasi: 72,
    karya: 80,
    nilaiAkhir: 77.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 sangat singkat dan kurang detail. Q2 menyebutkan risiko 'malas berinteraksi sosial' yang kurang relevan dengan konteks AI dalam pembelajaran. Bagian 2 membuat prompt sangat detail dengan konteks SMK Wikrama Bogor yang spesifik dan mencakup banyak komponen materi fotografi. Evaluasi hanya berupa pengulangan prompt dengan sedikit modifikasi, kurang menjelaskan alasan perubahan.",
    feedback: "Prompt yang kamu buat untuk materi fotografi sangat detail dan spesifik dengan menyebutkan SMK Wikrama Bogor — menunjukkan pemahaman konteks yang baik! Untuk bagian teori, cobalah menguraikan jawaban lebih mendalam di tugas berikutnya. Evaluasi prompt juga perlu menjelaskan alasan perubahan yang kamu buat agar lebih bermakna. Semangat!"
  },
  {
    nis: "12511236",
    jurusan: "DKV X-2",
    etika: 85,
    prompt: 80,
    evaluasi: 88,
    karya: 82,
    nilaiAkhir: 78.4,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 ditulis runtut dan mandiri. Penjelasan cara kerja AI cukup baik. Profesi fotografer dikaitkan dengan pemanfaatan AI (mengedit foto, memperbaiki kualitas gambar) yang sangat relevan untuk DKV. Bagian 2 membuat prompt dengan role fotografer profesional yang baik. Evaluasi sangat spesifik: membaca ulang hasil AI, menyederhanakan kalimat yang terlalu panjang, dan menambah contoh foto produk yang konkret.",
    feedback: "Penjelasan teori etika AI kamu runtut dan orisinal. Profesi fotografer yang memanfaatkan AI sangat relevan dengan jurusan DKV. Evaluasi yang kamu buat sangat baik — kamu membaca ulang output AI, menyederhanakan kalimat yang terlalu panjang, dan menambahkan contoh konkret foto produk. Kemampuan analitis yang sangat bagus! Pertahankan!"
  },
  {
    nis: "12511055",
    jurusan: "DKV X-3",
    etika: 68,
    prompt: 68,
    evaluasi: 70,
    karya: 68,
    nilaiAkhir: 76.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 sangat singkat dan kurang detail. Q3 hanya dijawab 2 kata ('Ai prompt engineer') tanpa penjelasan. Q4 sangat pendek. Bagian 2 membuat prompt tanpa format RTCC. Evaluasi prompt berubah namun tidak menjelaskan alasan atau analisis kritis terhadap hasil AI sebelumnya.",
    feedback: "Nilai remedial kamu sudah tuntas. Di tugas berikutnya, cobalah untuk menguraikan jawaban teori lebih panjang dan mendalam — khususnya menjelaskan cara kerja AI dan contoh profesi yang spesifik untuk jurusan DKV kamu. Gunakan format RTCC saat membuat prompt, dan sertakan evaluasi yang menjelaskan mengapa kamu mengubah prompt tersebut. Semangat belajar!"
  },
  {
    nis: "12511198",
    jurusan: "DKV X-2",
    etika: 72,
    prompt: 75,
    evaluasi: 58,
    karya: 70,
    nilaiAkhir: 76.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bagian 1 sangat singkat dan umum. Penjelasan cara kerja AI tidak mendalam. Q2 menyebutkan 'minimnya literasi tentanggg AI' (typo alami) sebagai risiko — menunjukkan keaslian tulisan. Bagian 2 membuat prompt dengan role ganda (ahli AI dan DKV) yang cukup kreatif dan kontekstual. Evaluasi sangat singkat hanya 1 kalimat ('buat kerangka pptnya lebih simple dan mudah di pahami') tanpa menunjukkan pemikiran kritis.",
    feedback: "Tulisan teori kamu orisinal, terlihat dari typo alami yang muncul. Prompt dengan role ganda ahli AI dan DKV menunjukkan kreativitas yang baik! Namun, evaluasi yang sangat singkat tidak menunjukkan proses berpikir kritis terhadap output AI. Di tugas berikutnya, tuliskan evaluasi yang lebih mendalam: apa yang kurang dari hasil AI pertama dan mengapa kamu memintanya berubah. Semangat!"
  },
  {
    nis: "12511009",
    jurusan: "DKV X-2",
    etika: 82,
    prompt: 85,
    evaluasi: 78,
    karya: 80,
    nilaiAkhir: 78.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori ditulis sendiri dengan bahasa sederhana dan typo alami ('promt', 'ilustrator'). Prompt dirancang mandiri dengan menyertakan instruksi slide dan saran visual. Evaluasi prompt sangat singkat namun menjelaskan alasan perubahan.",
    feedback: "Pemahaman etika AI kamu sudah sangat baik dan ditulis secara mandiri. Rancangan prompt juga terstruktur dengan baik. Di tugas berikutnya, cobalah untuk lebih memperdalam bagian evaluasi prompt agar analisismu semakin tajam. Semangat!"
  },
  {
    nis: "12511069",
    jurusan: "DKV X-3",
    etika: 88,
    prompt: 75,
    evaluasi: 80,
    karya: 78,
    nilaiAkhir: 78.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori ditulis secara mandiri dengan gaya bahasa siswa yang khas dan kasual ('kaya', 'nyocokin', 'ngawur'). Prompt dirancang secara mandiri meskipun cukup sederhana. Evaluasi menjelaskan proses penyederhanaan bahasa prompt dengan kritis.",
    feedback: "Penjelasan teori etika AI kamu sangat orisinal dan ditulis dengan bahasa sendiri yang natural dan jujur. Evaluasi prompt yang kamu lakukan juga menunjukkan pemikiran kritis yang baik. Di tugas mendatang, cobalah merancang prompt yang lebih detail dengan menambahkan batasan (constraint) seperti jumlah slide agar hasil AI lebih presisi. Semangat!"
  },
  {
    nis: "12511011",
    jurusan: "DKV X-3",
    etika: 88,
    prompt: 92,
    evaluasi: 76,
    karya: 84,
    nilaiAkhir: 78.6,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori ditulis mandiri secara terstruktur dan logis. Prompt awal dirancang dengan sangat baik menggunakan seluruh kriteria RTCC. Evaluasi prompt berupa instruksi perbaikan yang orisinal meskipun cukup singkat.",
    feedback: "Pekerjaan yang sangat baik! Penjelasan teorimu orisinal dan mudah dipahami. Prompt pertama yang kamu buat sangat bagus dan memenuhi seluruh kriteria prompt engineering (RTCC). Ulasan evaluasi prompt juga sudah menunjukkan upaya perbaikan hasil. Pertahankan prestasi belajarmu!"
  },
  {
    nis: "12510874",
    jurusan: "TJKT X-3",
    etika: 86,
    prompt: 92,
    evaluasi: 76,
    karya: 82,
    nilaiAkhir: 78.4,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori ditulis secara mandiri dan logis. Prompt awal dirancang dengan sangat baik, mencakup detail materi yang relevan dengan jurusan TJKT. Evaluasi prompt tertulis secara manual berupa instruksi revisi yang terarah.",
    feedback: "Kerja bagus! Pemahaman teorimu orisinal dan terstruktur. Prompt kejuruan TJKT yang kamu buat sangat detail dan lengkap dengan kriteria RTCC. Evaluasi prompt yang kamu tulis juga menunjukkan kemampuan perbaikan yang terarah. Terus kembangkan kemampuanmu!"
  },
  {
    nis: "12510794",
    jurusan: "TJKT X-2",
    etika: 85,
    prompt: 90,
    evaluasi: 90,
    karya: 85,
    nilaiAkhir: 78.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori ditulis secara mandiri. Perbandingan prompt sebelum dan sesudah perubahan dibuat secara sistematis untuk materi dasar jaringan SMK kelas X.",
    feedback: "Kerja yang sangat baik dan orisinal! Kamu menulis penjelasan teori secara mandiri. Perbandingan prompt awal dan revisi dasar jaringan juga dibuat secara terperinci dan sistematis. Pertahankan!"
  },
  {
    nis: "12510800",
    jurusan: "TJKT X-3",
    etika: 65,
    prompt: 50,
    evaluasi: 50,
    karya: 55,
    nilaiAkhir: 75.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Bukan Prompt",
    catatanDeteksi: "Pengerjaan teori sangat singkat dan Q3 dikosongkan. Kolom prompt dan evaluasi tidak dikerjakan dengan benar (hanya mencantumkan link).",
    feedback: "Tuntas remedial. Untuk tugas mendatang, harap mengisi seluruh jawaban teori secara lengkap dan pastikan menuliskan prompt secara langsung di lembar kerja daripada menempelkan link Drive. Kamu pasti bisa!"
  },
  {
    nis: "12510802",
    jurusan: "TJKT X-2",
    etika: 85,
    prompt: 82,
    evaluasi: 85,
    karya: 82,
    nilaiAkhir: 78.4,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori ditulis secara mandiri. Prompt cyber security terstruktur dengan baik, dan evaluasinya menambahkan referensi web yang memiliki lab praktikum.",
    feedback: "Orisinalitas pengerjaan teori and prompt sudah baik. Penambahan saran situs pembelajaran dengan lab interaktif pada revisi prompt menunjukkan inisiatif belajar yang sangat baik!"
  },
  {
    nis: "12510808",
    jurusan: "TJKT X-3",
    etika: 78,
    prompt: 90,
    evaluasi: 50,
    karya: 75,
    nilaiAkhir: 77.4,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori mandiri dan singkat. Perancangan prompt VLAN sangat baik, namun sayang kolom evaluasi dikosongkan.",
    feedback: "Pemahaman teori dan rancangan prompt VLAN Cisco sudah sangat terstruktur dan baik. Namun, jangan mengosongkan kolom evaluasi pada tugas berikutnya. Latihan evaluasi sangat penting untuk mengasah ketelitian!"
  },
  {
    nis: "12510815",
    jurusan: "TJKT X-1",
    etika: 80,
    prompt: 82,
    evaluasi: 50,
    karya: 70,
    nilaiAkhir: 77.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan secara mandiri. Prompt jaringan dasar sudah terstruktur, namun kolom evaluasi dikosongkan.",
    feedback: "Remedial selesai. Teori dan prompt jaringan dasar kamu sudah ditulis secara mandiri dengan cukup terstruktur. Namun, ke depannya jangan mengosongkan kolom evaluasi untuk melatih analisis kritis. Semangat!"
  },
  {
    nis: "12510822",
    jurusan: "TJKT X-1",
    etika: 88,
    prompt: 88,
    evaluasi: 76,
    karya: 82,
    nilaiAkhir: 78.4,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Penjelasan teori ditulis secara mandiri. Prompt dasar jaringan SMK kelas X terstruktur dengan baik, evaluasinya cukup.",
    feedback: "Pekerjaan mandiri yang baik! Pemahaman teori ditulis orisinal. Prompt presentasi dasar jaringan kelas X yang kamu susun juga terstruktur dengan baik. Terus tingkatkan kualitas evaluasimu!"
  },
  {
    nis: "12510829",
    jurusan: "TJKT X-2",
    etika: 75,
    prompt: 88,
    evaluasi: 95,
    karya: 90,
    nilaiAkhir: 78.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan sendiri dengan bahasa sederhana. Prompt Debian Linux sangat terstruktur, dan ulasan evaluasi luar biasa detail dalam merancang adegan video sinematik TJKT.",
    feedback: "Kerja bagus! Teori orisinal, prompt Debian Linux terstruktur. Ulasan evaluasimu dalam merancang adegan video sinematik TJKT kelas XI sangat detail, kreatif, dan profesional. Sangat mengapresiasi usahamu!"
  },
  {
    nis: "12510841",
    jurusan: "DKV X-1",
    etika: 84,
    prompt: 80,
    evaluasi: 65,
    karya: 75,
    nilaiAkhir: 77.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan sendiri dengan gaya bahasa alami. Prompt bertema AI cukup baik, tetapi ulasan evaluasi sangat singkat.",
    feedback: "Pemahaman teori dikerjakan secara mandiri dengan baik. Namun, cobalah memberikan ulasan evaluasi yang lebih mendalam pada tugas prompt engineering berikutnya. Semangat belajar!"
  },
  {
    nis: "12510848",
    jurusan: "TJKT X-1",
    etika: 88,
    prompt: 85,
    evaluasi: 92,
    karya: 88,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan secara mandiri dengan baik. Evaluasi prompt sangat baik dengan menambahkan komponen kuis pilihan ganda dan glosarium istilah.",
    feedback: "Pekerjaan yang orisinal dan sangat baik! Evaluasi prompt kamu sangat lengkap dan kreatif dengan menambahkan modul tes pilihan ganda serta glosarium untuk siswa SMK kelas X. Pertahankan!"
  },
  {
    nis: "12510866",
    jurusan: "TJKT X-1",
    etika: 50,
    prompt: 85,
    evaluasi: 86,
    karya: 82,
    nilaiAkhir: 77.1,
    kategoriEtika: "Copy-Paste AI",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori di Q1 tidak menjawab pertanyaan, namun perancangan prompt dan evaluasi konfigurasi dasar MikroTik (NAT/DNS/Ethernet) dikerjakan secara spesifik dan teknis.",
    feedback: "Tuntas remedial. Teori Q1 tidak relevan dengan topik, namun rancangan prompt dan evaluasi konfigurasi Routerboard MikroTik (NAT, DNS, interface) sangat spesifik dan teknis. Tingkatkan ketelitian menjawab teori!"
  },
  {
    nis: "12510879",
    jurusan: "DKV X-1",
    etika: 78,
    prompt: 78,
    evaluasi: 68,
    karya: 75,
    nilaiAkhir: 77.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori ditulis secara mandiri meskipun ringkas. Prompt prinsip desain grafis cukup baik, namun evaluasinya sangat mendasar.",
    feedback: "Pekerjaan mandiri yang baik! Pemahaman teori orisinal meskipun ringkas. Tingkatkan lagi ulasan evaluasi prompt agar hasil revisi prompt menjadi lebih optimal di masa depan."
  },
  {
    nis: "12510916",
    jurusan: "TJKT X-2",
    etika: 93,
    prompt: 92,
    evaluasi: 90,
    karya: 88,
    nilaiAkhir: 79.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas sangat baik. Resubmission meningkatkan bagian evaluasi dengan menuliskan prompt routing statis MikroTik secara rinci.",
    feedback: "Kerja keras yang luar biasa! Pengerjaan ulang (resubmission) kamu menunjukkan peningkatan yang sangat besar pada bagian evaluasi dengan merancang konfigurasi routing statis MikroTik secara mendalam. Luar biasa!"
  },
  {
    nis: "12510938",
    jurusan: "TJKT X-3",
    etika: 50,
    prompt: 50,
    evaluasi: 50,
    karya: 55,
    nilaiAkhir: 75.1,
    kategoriEtika: "Copy-Paste AI",
    kategoriPrompt: "Bukan Prompt",
    catatanDeteksi: "Pengerjaan sangat minimalis. Q1 tidak menjawab pertanyaan dan kolom evaluasi hanya berisi tautan dokumen tanpa analisis tertulis.",
    feedback: "Nilai remedial kamu sudah tuntas. Namun, untuk tugas ke depan, harap menjawab pertanyaan teori sesuai topik dan menuliskan analisis secara langsung di kolom lembar kerja (jangan hanya memberikan link Drive)."
  },
  {
    nis: "12510941",
    jurusan: "TJKT X-3",
    etika: 88,
    prompt: 60,
    evaluasi: 92,
    karya: 85,
    nilaiAkhir: 78.3,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Campuran",
    catatanDeteksi: "Teori dikerjakan sendiri dengan baik. Prompt awal terpotong, namun evaluasi prompt sangat baik dengan menambahkan panduan CLI Windows dan Linux Debian secara spesifik.",
    feedback: "Orisinalitas teori sangat baik. Meskipun prompt awal terpotong, ulasan evaluasi prompt revisi kamu sangat luar biasa detail dengan menyertakan panduan CLI Windows dan Linux Debian untuk praktikum siswa."
  },
  {
    nis: "12510944",
    jurusan: "TJKT X-1",
    etika: 88,
    prompt: 86,
    evaluasi: 88,
    karya: 85,
    nilaiAkhir: 78.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan sendiri dengan bahasa natural. Evaluasi prompt kritis terhadap penyederhanaan bahasa Cloud Computing bagi siswa SMK.",
    feedback: "Pengerjaan mandiri yang sangat baik! Ulasan evaluasi kamu sangat tepat dalam mengkritik penggunaan bahasa teknis AI yang terlalu teoritis dan menyarankan analogi kehidupan sehari-hari."
  },
  {
    nis: "12510945",
    jurusan: "TJKT X-2",
    etika: 85,
    prompt: 88,
    evaluasi: 90,
    karya: 85,
    nilaiAkhir: 78.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas teori baik. Perancangan prompt pembuatan video promosi SMK sangat terstruktur, dan ulasan evaluasinya menjelaskan 5 poin optimasi prompt secara sistematis.",
    feedback: "Kerja bagus! Pemahaman teori ditulis orisinal. Prompt promosi SMK Wikrama dirancang sangat baik, dan ulasan evaluasimu dalam merinci 5 aspek perbaikan prompt sangat sistematis dan terperinci."
  },
  {
    nis: "12510962",
    jurusan: "TJKT X-3",
    etika: 84,
    prompt: 82,
    evaluasi: 72,
    karya: 78,
    nilaiAkhir: 78.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori ditulis secara mandiri. Prompt dasar jaringan sudah baik, namun evaluasi hanya berupa penjelasan naratif tanpa melampirkan teks prompt revisi.",
    feedback: "Penjelasan teori and prompt dasar jaringan kamu sudah baik dan mandiri. Ke depannya, cobalah untuk menuliskan teks prompt hasil revisi secara langsung agar ulasan evaluasimu lebih konkrit."
  },
  {
    nis: "12511012",
    jurusan: "DKV X-1",
    etika: 92,
    prompt: 92,
    evaluasi: 92,
    karya: 90,
    nilaiAkhir: 79.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas sangat baik dengan penjelasan etika yang mendalam. Prompt dan evaluasi bertema Gestalt logo dikerjakan secara profesional dan terstruktur.",
    feedback: "Sangat bagus! Uraian etika AI ditulis secara mandiri dan mendalam. Rencana prompt serta evaluasi mengenai prinsip Gestalt pada logo dirancang dengan terstruktur dan profesional. Terus pertahankan!"
  },
  {
    nis: "12511051",
    jurusan: "TJKT X-1",
    etika: 85,
    prompt: 80,
    evaluasi: 50,
    karya: 75,
    nilaiAkhir: 77.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Pemahaman etika ditulis secara mandiri. Prompt penerapan AI cukup baik, namun ulasan evaluasi dikosongkan (hanya menyalin ulang prompt awal).",
    feedback: "Remedial selesai. Teori dan prompt penerapan AI kamu sudah mandiri dan cukup baik. Namun, jangan mengosongkan atau menyalin ulang kolom evaluasi di tugas-tugas mendatang agar analisis kritsmu terus terlatih."
  },
  {
    nis: "12511056",
    jurusan: "TJKT X-2",
    etika: 85,
    prompt: 86,
    evaluasi: 85,
    karya: 82,
    nilaiAkhir: 78.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Penjelasan teori ditulis secara mandiri. Prompt kerangka esai bertema AI cukup baik, dan evaluasinya menambahkan batasan kuantitatif (3 manfaat, 2 risiko) secara jelas.",
    feedback: "Pekerjaan mandiri yang baik! Pemahaman teori ditulis secara orisinal. Penambahan batasan kuantitatif yang jelas (minimal 3 manfaat dan 2 risiko) pada revisi prompt menunjukkan pemahaman yang baik."
  },
  {
    nis: "12511062",
    jurusan: "DKV X-3",
    etika: 85,
    prompt: 92,
    evaluasi: 95,
    karya: 90,
    nilaiAkhir: 78.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas teori baik. Perancangan prompt Animasi 2D sangat lengkap, dan evaluasinya sangat detail dengan revisi struktur 10 slide presentasi.",
    feedback: "Luar biasa! Penjelasan teori kamu mandiri dan orisinal. Rancangan prompt dan ulasan evaluasi presentasi Animasi 2D sangat lengkap, rapi, dan terperinci. Pertahankan prestasi luar biasa ini!"
  },
  {
    nis: "12511090",
    jurusan: "TJKT X-2",
    etika: 85,
    prompt: 50,
    evaluasi: 78,
    karya: 75,
    nilaiAkhir: 77.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Bukan Prompt",
    catatanDeteksi: "Pengerjaan teori mandiri. Prompt awal terlalu pendek ('buatkan vidio hasil ai'), namun ulasan evaluasinya menjelaskan perbaikan parameter video promosi dengan baik.",
    feedback: "Pengerjaan teori sudah orisinal dan mandiri. Meskipun prompt awal terlalu singkat, ulasan evaluasi revisi kamu sudah menunjukkan pemahaman yang baik tentang detail parameter pembuatan video promosi."
  },
  {
    nis: "12511093",
    jurusan: "TJKT X-2",
    etika: 78,
    prompt: 90,
    evaluasi: 82,
    karya: 85,
    nilaiAkhir: 78.3,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan sendiri dengan bahasa singkat. Prompt gambar merakit PC di lab TJKT sangat spesifik dan detail, evaluasinya terstruktur.",
    feedback: "Kerja bagus! Rancangan prompt visual perakitan PC di laboratorium TJKT ditulis secara mandiri dan sangat detail. Ulasan evaluasi perbaikannya juga terstruktur dengan baik. Terus pertahankan!"
  },
  {
    nis: "12511102",
    jurusan: "DKV X-3",
    etika: 78,
    prompt: 75,
    evaluasi: 70,
    karya: 72,
    nilaiAkhir: 77.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori cukup singkat namun orisinal. Prompt dan evaluasinya sangat sederhana, hanya menambahkan merek kamera.",
    feedback: "Pemahaman etika AI sudah mandiri meskipun ringkas. Cobalah meningkatkan kualitas prompt dan evaluasi agar lebih spesifik dan mendalam pada tugas-tugas berikutnya!"
  },
  {
    nis: "12511128",
    jurusan: "TJKT X-3",
    etika: 85,
    prompt: 88,
    evaluasi: 95,
    karya: 90,
    nilaiAkhir: 78.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan secara mandiri. Evaluasi prompt sangat kritis dengan menambahkan firewall, enkripsi, dan backup data untuk melengkapi saran antivirus dari AI.",
    feedback: "Sangat bagus! Pemahaman teori ditulis orisinal. Ulasan evaluasi prompt kamu juga sangat kritis dan mendalam dengan melengkapi fitur keamanan (firewall, enkripsi, backup) yang dilewatkan oleh AI."
  },
  {
    nis: "12511133",
    jurusan: "TJKT X-3",
    etika: 90,
    prompt: 90,
    evaluasi: 92,
    karya: 88,
    nilaiAkhir: 79.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan secara mandiri dengan sangat runtut. Prompt pemrograman Python terstruktur dengan baik, dan evaluasinya menambahkan rincian visual 10-12 slide yang sangat detail.",
    feedback: "Pekerjaan yang istimewa! Penjelasan teori kamu ditulis secara runtut dan mandiri. Prompt presentasi Python dan ulasan evaluasinya dirancang dengan sangat detail, lengkap dengan visualisasi slide. Pertahankan!"
  },
  {
    nis: "12511151",
    jurusan: "TJKT X-3",
    etika: 86,
    prompt: 60,
    evaluasi: 92,
    karya: 85,
    nilaiAkhir: 78.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Salin Panduan",
    catatanDeteksi: "Teori dikerjakan sendiri dengan bahasa alami. Prompt awal menyalin panduan, tetapi evaluasi dan revisi prompt dikerjakan dengan sangat kritis menggunakan format tabel studi kasus.",
    feedback: "Orisinalitas teori baik. Meskipun prompt awal menyalin panduan, ulasan evaluasi dan revisi prompt kamu dikerjakan dengan sangat kritis dan rapi menggunakan format tabel studi kasus nyata. Kerja bagus!"
  },
  {
    nis: "12511155",
    jurusan: "TJKT X-1",
    etika: 85,
    prompt: 92,
    evaluasi: 75,
    karya: 82,
    nilaiAkhir: 78.4,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Bahasa teori sangat orisinal dan jujur (menggunakan kata 'plek ketiplek'). Prompt Cisco Packet Tracer sangat komprehensif, ulasan evaluasi terstruktur.",
    feedback: "Sangat menghargai kejujuran dan orisinalitas tulisanmu (penggunaan istilah 'plek ketiplek'). Prompt konfigurasi Cisco Packet Tracer yang kamu rancang juga sangat lengkap dan terstruktur. Terus pertahankan!"
  },
  {
    nis: "12511185",
    jurusan: "TJKT X-3",
    etika: 86,
    prompt: 88,
    evaluasi: 92,
    karya: 88,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas sangat baik dengan bahasa kasual murid. Evaluasi prompt sangat kreatif dengan menyarankan analogi warnet untuk IaaS/PaaS/SaaS.",
    feedback: "Kerja bagus dan sangat orisinal! Penggunaan analogi warnet untuk menjelaskan konsep IaaS, PaaS, dan SaaS pada ulasan evaluasi sangat cerdas dan mudah dipahami siswa SMK. Pertahankan kreativitas ini!"
  },
  {
    nis: "12511186",
    jurusan: "TJKT X-1",
    etika: 88,
    prompt: 75,
    evaluasi: 95,
    karya: 88,
    nilaiAkhir: 78.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Pemahaman etika baik dan ditulis secara mandiri. Prompt awal sangat sederhana, namun evaluasinya sangat luar biasa dengan merancang modul 10 pertemuan siber security dalam bentuk tabel.",
    feedback: "Luar biasa! Penjelasan teori ditulis secara mandiri. Meskipun prompt awal sederhana, evaluasi and revisi prompt yang kamu susun untuk modul keamanan siber 10 pertemuan sangat rapi dan detail. Hebat!"
  },
  {
    nis: "12511296",
    jurusan: "TJKT X-3",
    etika: 94,
    prompt: 85,
    evaluasi: 88,
    karya: 88,
    nilaiAkhir: 79.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas sangat tinggi dengan penjelasan auto-complete yang sangat logis. Ulasan evaluasi prompt terperinci dengan batasan visual dan slide.",
    feedback: "Luar biasa! Penjelasan teori kamu mengenai cara kerja AI dengan analogi auto-complete sangat orisinal dan tepat sasaran. Evaluasi prompt keamanan data pribadi juga diuraikan dengan sangat lengkap. Hebat!"
  },
  {
    nis: "12511299",
    jurusan: "TJKT X-1",
    etika: 78,
    prompt: 50,
    evaluasi: 50,
    karya: 55,
    nilaiAkhir: 76.2,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Bukan Prompt",
    catatanDeteksi: "Pengerjaan teori mandiri tetapi singkat. Kolom prompt sangat tidak terstruktur dan kolom evaluasi dikosongkan.",
    feedback: "Remedial tuntas. Untuk tugas-tugas berikutnya, harap tidak mengosongkan kolom evaluasi dan cobalah belajar menyusun prompt yang terstruktur sesuai panduan (RTCC). Kamu pasti bisa!"
  },
  {
    nis: "12511327",
    jurusan: "TJKT X-3",
    etika: 92,
    prompt: 92,
    evaluasi: 60,
    karya: 80,
    nilaiAkhir: 78.3,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Pemahaman etika sangat baik dan ditulis secara mandiri. Prompt VLAN Cisco sangat terstruktur, tetapi ulasan evaluasinya sangat minimal.",
    feedback: "Pemahaman etika AI kamu luar biasa dan ditulis dengan bahasa sendiri yang kuat. Prompt VLAN Cisco juga sangat detail. Namun, tingkatkan lagi kualitas analisis evaluasimu agar lebih mendalam."
  },
  {
    nis: "12511328",
    jurusan: "TJKT X-1",
    etika: 65,
    prompt: 50,
    evaluasi: 75,
    karya: 60,
    nilaiAkhir: 76.3,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Bukan Prompt",
    catatanDeteksi: "Pengerjaan teori sangat pendek dan Q4 dikosongkan. Prompt awal terlalu pendek, namun kolom evaluasi menunjukkan kemampuan mengkritisi kelemahan prompt dasar.",
    feedback: "Remedial selesai. Teori tulisanmu sudah orisinal meskipun singkat. Kolom evaluasi menunjukkan kamu memahami kriteria prompt yang baik dengan mengkritisi kelemahan prompt awal. Tingkatkan terus!"
  },
  {
    nis: "12511335",
    jurusan: "TJKT X-3",
    etika: 76,
    prompt: 65,
    evaluasi: 68,
    karya: 70,
    nilaiAkhir: 77.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dijawab secara mandiri namun singkat. Prompt dan evaluasinya sangat dasar tanpa mengikuti struktur RTCC.",
    feedback: "Pengerjaan teori sudah mandiri. Untuk tugas-tugas berikutnya, cobalah merancang prompt menggunakan struktur RTCC (Role, Task, Context, Constraint) agar instruksinya lebih jelas dan efektif."
  },
  {
    nis: "12511341",
    jurusan: "TJKT X-1",
    etika: 88,
    prompt: 88,
    evaluasi: 88,
    karya: 85,
    nilaiAkhir: 78.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Pemahaman etika sangat baik dan ditulis secara mandiri. Evaluasi prompt kritis terhadap pendalaman fungsi Router dan Switch.",
    feedback: "Orisinalitas pengerjaan teori dan prompt sangat baik. Analisis evaluasi kamu juga kritis dan tepat dalam memperdalam fungsi Switch serta Router di laboratorium sekolah. Bagus sekali!"
  },
  {
    nis: "12511364",
    jurusan: "DKV X-3",
    etika: 86,
    prompt: 80,
    evaluasi: 60,
    karya: 75,
    nilaiAkhir: 77.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan sendiri dengan analogi yang baik. Prompt digital poster cukup kreatif, namun evaluasinya sangat minimal.",
    feedback: "Analogi teori yang kamu buat sudah bagus dan orisinal. Namun, ulasan evaluasi prompt poster digital masih sangat singkat. Cobalah berlatih memberikan revisi prompt yang lebih terarah."
  },
  {
    nis: "12511392",
    jurusan: "TJKT X-1",
    etika: 85,
    prompt: 75,
    evaluasi: 78,
    karya: 78,
    nilaiAkhir: 78.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Penjelasan teori ditulis mandiri. Perbaikan prompt menunjukkan inisiatif spesifikasi materi TJKT yang baik.",
    feedback: "Teori ditulis secara mandiri dengan baik. Inisiatif kamu dalam mendetailkan kompetensi perakitan PC dan manajemen LAN pada prompt revisi juga sudah menunjukkan perkembangan yang bagus!"
  },
  {
    nis: "12511416",
    jurusan: "TJKT X-1",
    etika: 85,
    prompt: 85,
    evaluasi: 88,
    karya: 82,
    nilaiAkhir: 78.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas pengerjaan teori baik. Prompt dasar konfigurasi sudah terstruktur, dan evaluasinya menambahkan tujuan pembelajaran secara runtut.",
    feedback: "Pemahaman teori dan prompt konfigurasi dasar jaringan sudah dikerjakan mandiri dengan baik. Revisi prompt pada bagian evaluasi juga sudah memuat tujuan pembelajaran yang runtut. Bagus sekali!"
  }
,
  {
    nis: "12511181",
    jurusan: "TJKT X-2",
    etika: 82,
    prompt: 88,
    evaluasi: 68,
    karya: 78,
    nilaiAkhir: 78.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori mandiri meskipun penempatan kolom Q1-Q4 tertukar. Perancangan prompt RTCC di Q4 sangat terstruktur, dan resubmission prompt (kolom Prompt) menambahkan tabel perbandingan LAN/MAN/WAN serta soal latihan secara mandiri.",
    feedback: "Pekerjaan mandiri yang baik! Prompt RTCC dasar jaringan yang kamu rancang sangat terstruktur dengan format Role-Task-Context-Constraint. Resubmisi prompt juga meningkat secara signifikan. Untuk tugas berikutnya, pastikan jawaban diletakkan di kolom yang sesuai ya!"
  },
  {
    nis: "12511100",
    jurusan: "TJKT X-3",
    etika: 80,
    prompt: 75,
    evaluasi: 50,
    karya: 68,
    nilaiAkhir: 77.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan secara mandiri meskipun penempatan kolom tertukar. Prompt enkripsi data untuk TKJ cukup baik. Namun kolom evaluasi kosong/hanya nama tools — tidak ada analisis revisi prompt yang dikerjakan.",
    feedback: "Penjelasan teori ditulis secara orisinal dengan baik. Prompt enkripsi data kamu juga cukup spesifik dan relevan untuk jurusan TJKT. Namun, jangan mengosongkan kolom evaluasi prompt di tugas-tugas berikutnya agar kemampuan analisismu terus berkembang!"
  },
  {
    nis: "12511215",
    jurusan: "TJKT X-2",
    etika: 88,
    prompt: 90,
    evaluasi: 55,
    karya: 80,
    nilaiAkhir: 78.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori sangat lengkap dan ditulis secara mandiri. Perancangan prompt artikel jaringan komputer menggunakan struktur RTCC yang sangat baik dengan batasan topologi dan format artikel. Sayang kolom evaluasi hanya berisi nama tools AI.",
    feedback: "Kerja yang sangat baik! Teori ditulis mandiri dan komprehensif. Rancangan prompt artikel jaringan komputer RTCC-nya sangat terstruktur dan detail. Tingkatkan lagi dengan menuliskan analisis evaluasi prompt secara langsung, bukan hanya nama tools!"
  },
  {
    nis: "12511094",
    jurusan: "TJKT X-2",
    etika: 82,
    prompt: 60,
    evaluasi: 85,
    karya: 78,
    nilaiAkhir: 77.7,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Campuran",
    catatanDeteksi: "Teori dikerjakan sendiri dengan benar. Kolom Q1-Q4 tertukar urutannya. Prompt awal terpotong hanya berisi peran. Namun, kolom Prompt berisi analisis kritis yang sangat baik tentang perbedaan prompt buruk vs prompt yang spesifik dan efektif.",
    feedback: "Pemahaman teori cara kerja AI sangat baik dan orisinal! Analisis kritismu tentang ciri-ciri prompt buruk (terlalu umum, tidak menyebut teknologi, tidak ada format output) sangat tepat dan menunjukkan pemahaman yang mendalam. Pertahankan!"
  },
  {
    nis: "12510854",
    jurusan: "TJKT X-3",
    etika: 60,
    prompt: 75,
    evaluasi: 50,
    karya: 60,
    nilaiAkhir: 76.1,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Hampir semua jawaban teori sangat singkat dan minimalis. Prompt Cisco Packet Tracer di Q4 cukup spesifik untuk simulasi jaringan LAN kelas X. Kolom evaluasi dikosongkan dan kolom Prompt tidak diisi.",
    feedback: "Remedial selesai. Jawaban teori kamu sudah orisinal meskipun sangat singkat. Prompt Cisco Packet Tracer yang kamu buat sudah cukup spesifik dan teknis. Ke depannya, lengkapi semua kolom terutama evaluasi agar nilaimu semakin optimal. Semangat!"
  },
  {
    nis: "12510936",
    jurusan: "DKV X-2",
    etika: 70,
    prompt: 78,
    evaluasi: 60,
    karya: 70,
    nilaiAkhir: 77.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori sangat singkat namun orisinal. Prompt presentasi prinsip desain grafis 8 slide di Q4 cukup lengkap dengan poin-poin spesifik. Evaluasi prompt sangat minimal hanya menambahkan 'poster' pada materi.",
    feedback: "Pemahaman etika AI sudah ditulis mandiri meskipun singkat. Prompt prinsip desain grafis kamu cukup terstruktur. Namun untuk tugas berikutnya, cobalah menulis evaluasi dan revisi prompt yang lebih mendalam agar kemampuan prompt engineering-mu makin tajam!"
  },
{
    nis: "12510995",
    jurusan: "TJKT X-1",
    etika: 86,
    prompt: 88,
    evaluasi: 82,
    karya: 84,
    nilaiAkhir: 78.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban teori mandiri dan lengkap meskipun penempatan kolom Q1-Q4 tertukar. Prompt RTCC instalasi jaringan LAN sangat terstruktur (8-10 slide, bahasa mudah, troubleshooting). Evaluasi prompt menjelaskan perbaikan parameter secara kritis.",
    feedback: "Kerja yang sangat baik dan orisinal! Prompt instalasi jaringan LAN RTCC yang kamu buat sangat terstruktur dan lengkap. Evaluasi yang menjelaskan penambahan jumlah slide dan contoh praktis juga sudah sangat baik. Pastikan mengisi kolom sesuai urutannya di tugas berikutnya!"
  },
  {
    nis: "12511275",
    jurusan: "DKV X-2",
    etika: 78,
    prompt: 78,
    evaluasi: 60,
    karya: 72,
    nilaiAkhir: 77.3,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori dikerjakan mandiri meskipun singkat. Prompt pembuatan poster DKV menggunakan AI cukup spesifik. Evaluasi hanya meminta format paragraf tanpa analisis mendalam tentang kualitas prompt.",
    feedback: "Pemahaman teori sudah orisinal meskipun ringkas. Prompt poster DKV menggunakan AI cukup baik. Namun, cobalah meningkatkan kualitas evaluasi prompt dengan memberikan analisis yang lebih mendalam di tugas berikutnya. Semangat belajar!"
  },
  {
    nis: "12510796",
    jurusan: "DKV X-3",
    etika: 72,
    prompt: 80,
    evaluasi: 55,
    karya: 68,
    nilaiAkhir: 76.9,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Jawaban sangat singkat tapi orisinal dengan bahasa kasual murid. Prompt RTCC dasar penggunaan Blender untuk kelas XI DKV cukup spesifik dengan batasan 4 poin dan bahasa mudah. Evaluasi sangat minimal.",
    feedback: "Orisinalitas jawaban terlihat dari bahasa kasual yang kamu gunakan. Prompt Blender RTCC kamu cukup baik dan spesifik. Tingkatkan lagi kualitas jawaban teori dan evaluasi promptmu agar lebih mendalam di tugas berikutnya. Kamu pasti bisa!"
  },
  {
    nis: "12511402",
    jurusan: "DKV X-3",
    etika: 78,
    prompt: 78,
    evaluasi: 68,
    karya: 75,
    nilaiAkhir: 77.5,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori orisinal meskipun singkat. Prompt presentasi DKV ditulis dalam Bahasa Inggris yang menunjukkan kreativitas. Evaluasi menambahkan permintaan teks penjelasan yang lebih panjang meskipun masih sederhana.",
    feedback: "Pemahaman teori ditulis secara mandiri. Kreativitas dalam menggunakan Bahasa Inggris pada prompt presentasi DKV patut diapresiasi! Untuk tugas berikutnya, coba tingkatkan kedalaman evaluasi prompt dengan menjelaskan alasan perubahan yang kamu buat secara lebih terperinci."
  },
  {
    nis: "12511153",
    jurusan: "TJKT X-2",
    etika: 92,
    prompt: 92,
    evaluasi: 85,
    karya: 88,
    nilaiAkhir: 79.0,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Orisinalitas sangat tinggi. Teori sangat lengkap dengan terminologi yang tepat. Prompt RTCC dasar jaringan komputer 8 slide sangat sempurna dengan semua elemen terpenuhi. Evaluasi prompt menambahkan contoh kontekstual dari lingkungan sekolah.",
    feedback: "Luar biasa! Penjelasan teori kamu sangat lengkap, runtut, dan ditulis secara mandiri. Rancangan prompt RTCC dasar jaringan komputer memenuhi semua kriteria dengan sangat baik. Ulasan evaluasimu juga kritis dengan menambahkan contoh kehidupan sehari-hari. Pertahankan prestasi ini!"
  },
  {
    nis: "12511342",
    jurusan: "TJKT X-2",
    etika: 82,
    prompt: 90,
    evaluasi: 95,
    karya: 90,
    nilaiAkhir: 78.8,
    kategoriEtika: "Murni Murid",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Teori orisinal dengan bahasa kasual alami. Prompt master JSON untuk generative video sangat kreatif dan teknis. Evaluasi prompt sangat luar biasa detail dengan panduan karakter konsisten, transisi kamera bertahap, sinkronisasi lip-sync, ekspresi, dan gerakan tubuh.",
    feedback: "Kerja yang luar biasa kreatif! Prompt JSON generative video yang kamu buat sangat teknis dan inovatif. Yang paling mengesankan adalah evaluasi prompt yang sangat mendetail — mulai dari character lock, continuity, transisi kamera, hingga sinkronisasi bibir. Ini level prompt engineering yang sangat tinggi!"
  },
  {
    nis: "12510913",
    jurusan: "DKV X-1",
    etika: 50,
    prompt: 92,
    evaluasi: 88,
    karya: 85,
    nilaiAkhir: 77.3,
    kategoriEtika: "Copy-Paste AI",
    kategoriPrompt: "Murni Murid",
    catatanDeteksi: "Q1 tidak menjawab pertanyaan (hanya 'pencarian ide'). Teori Q2-Q4 sangat singkat. Namun, prompt/blueprint produksi video DKV sangat luar biasa detail dengan storyboard lengkap, naskah narasi, palet warna, dan spesifikasi teknis yang sangat profesional.",
    feedback: "Tuntas remedial. Teori di bagian awal perlu ditingkatkan agar menjawab pertanyaan dengan benar. Namun, blueprint produksi video DKV yang kamu buat sangat luar biasa profesional — mulai dari storyboard, narasi, palet warna hingga tips desain. Bakat DKV-mu sangat terlihat di sini!"
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

// === INTERACTIVE EXCEL VIEWER LOGIC ===

// DOM Elements for Excel Viewer
const excelModal = document.getElementById("excel-modal");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalSearchInput = document.getElementById("modal-search-input");
const modalDownloadLink = document.getElementById("modal-download-link");
const modalLoader = document.getElementById("modal-loader");
const modalErrorMessage = document.getElementById("modal-error-message");
const modalErrorDownload = document.getElementById("modal-error-download");
const excelDataTable = document.getElementById("excel-data-table");
const excelTableHeader = document.getElementById("excel-table-header");
const excelTableBody = document.getElementById("excel-table-body");
const modalSearchEmpty = document.getElementById("modal-search-empty");

let currentExcelData = []; // Store parsed row data for filtering

// Open Excel Viewer
async function openExcelViewer(jurusan) {
  const fileName = `Data Peserta Remedial_${jurusan}.xlsx`;
  
  // Reset modal state
  modalTitle.textContent = `Daftar Peserta Remedial ${jurusan}`;
  modalSubtitle.textContent = "Memuat data excel...";
  modalSearchInput.value = "";
  excelTableHeader.innerHTML = "";
  excelTableBody.innerHTML = "";
  
  modalLoader.classList.remove("hidden");
  modalErrorMessage.classList.add("hidden");
  excelDataTable.classList.add("hidden");
  modalSearchEmpty.classList.add("hidden");
  
  // Set download links
  modalDownloadLink.href = fileName;
  modalErrorDownload.href = fileName;
  
  // Show modal overlay
  excelModal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Disable background scrolling

  try {
    const response = await fetch(fileName);
    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: "array" });
    
    // Parse first sheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const rawRows = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
    
    if (rawRows.length === 0) {
      throw new Error("Excel file is empty");
    }

    // Process rows
    let headerRowIndex = 0;
    let subtitleParts = [];
    
    // Find the header row (typically row 2, e.g. ["No.", "NIS"] or containing "No" & "NIS")
    for (let i = 0; i < rawRows.length; i++) {
      const row = rawRows[i];
      const hasNo = row.some(cell => typeof cell === 'string' && cell.toLowerCase().startsWith('no'));
      const hasNis = row.some(cell => typeof cell === 'string' && cell.toLowerCase() === 'nis');
      
      if (hasNo && hasNis) {
        headerRowIndex = i;
        break;
      } else {
        // Collect pre-header texts for subtitle
        const textVal = row.filter(cell => cell !== null && cell !== "").join(" - ");
        if (textVal) {
          subtitleParts.push(textVal);
        }
      }
    }
    
    // Update subtitle
    if (subtitleParts.length > 0) {
      modalSubtitle.textContent = subtitleParts.join(" | ");
    } else {
      modalSubtitle.textContent = `File: ${fileName}`;
    }
    
    // Header cells
    const headerRow = rawRows[headerRowIndex];
    headerRow.forEach(headerText => {
      const th = document.createElement("th");
      th.textContent = headerText || "";
      excelTableHeader.appendChild(th);
    });
    
    // Data rows
    currentExcelData = [];
    for (let i = headerRowIndex + 1; i < rawRows.length; i++) {
      const row = rawRows[i];
      // Skip completely empty rows
      if (row.every(cell => cell === null || cell === "")) continue;
      currentExcelData.push(row);
    }
    
    renderExcelTable(currentExcelData);
    
    modalLoader.classList.add("hidden");
    excelDataTable.classList.remove("hidden");
    
  } catch (error) {
    console.error("Error reading excel file:", error);
    modalLoader.classList.add("hidden");
    modalErrorMessage.classList.remove("hidden");
  }
}

// Render Table Rows
function renderExcelTable(rows) {
  excelTableBody.innerHTML = "";
  
  if (rows.length === 0) {
    modalSearchEmpty.classList.remove("hidden");
    return;
  }
  
  modalSearchEmpty.classList.add("hidden");
  
  rows.forEach(rowData => {
    const tr = document.createElement("tr");
    rowData.forEach((cellVal, colIdx) => {
      const td = document.createElement("td");
      td.textContent = cellVal !== undefined ? cellVal : "";
      
      // Highlight the NIS column specifically
      if (colIdx === 1) {
        td.style.fontWeight = "600";
        td.style.color = "var(--text-primary)";
      }
      
      tr.appendChild(td);
    });
    excelTableBody.appendChild(tr);
  });
}

// Close Excel Viewer Modal
function closeExcelViewer() {
  excelModal.classList.add("hidden");
  document.body.style.overflow = ""; // Restore background scrolling
}

// Modal Search Filter Logic
modalSearchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  
  if (!query) {
    renderExcelTable(currentExcelData);
    return;
  }
  
  // Filter row content
  const filtered = currentExcelData.filter(row => {
    return row.some(cell => {
      if (cell === null || cell === undefined) return false;
      return String(cell).toLowerCase().includes(query);
    });
  });
  
  renderExcelTable(filtered);
});

// Modal close button event listener
modalCloseBtn.addEventListener("click", closeExcelViewer);

// Close on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !excelModal.classList.contains("hidden")) {
    closeExcelViewer();
  }
});

// Close modal when clicking outside the container
excelModal.addEventListener("click", (e) => {
  if (e.target === excelModal) {
    closeExcelViewer();
  }
});
