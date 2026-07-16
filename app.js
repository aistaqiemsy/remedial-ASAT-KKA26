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
