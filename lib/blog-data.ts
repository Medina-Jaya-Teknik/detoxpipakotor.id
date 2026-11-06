export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  servicePrice?: string;
  excerpt: string;
  category: string;
  date: string;
  updatedDate?: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string[];
  image?: string;
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jasa-saluran-mampet-bandung",
    title: "Jasa Saluran Mampet Bandung 24 Jam: Solusi WC, Wastafel & Got Tersumbat",
    metaTitle: "Jasa Saluran Mampet Bandung 24 Jam - Siaga Cepat",
    metaDescription:
      "Jasa saluran mampet Bandung 24 jam untuk WC, wastafel, floor drain, dan got. Tanpa bongkar keramik, garansi tuntas. Hubungi ☎️ 0851-2277-7253.",
    servicePrice: "150000",
    excerpt:
      "Layanan profesional pelancar pipa saluran mampet 24 jam di wilayah Bandung Raya. Mengatasi sumbatan wastafel dapur, kloset WC, floor drain kamar mandi, dan talang got tanpa bongkar keramik.",
    category: "Saluran Mampet",
    date: "2026-05-18",
    updatedDate: "2026-11-06",
    author: "Tim Ahli Detox Pipa Kotor",
    readTime: "6 menit baca",
    tags: [
      "Jasa Saluran Mampet Bandung",
      "Pelancar Pipa Mampet 24 Jam",
      "Wastafel Dapur Tersumbat",
      "Kloset WC Meluap",
      "Floor Drain Kamar Mandi",
      "Tanpa Bongkar Bandung",
    ],
    image: "/images/blog/jasa-saluran-mampet-bandung.webp",
    content: [
      "Saluran pembuangan air kotor yang mendadak mampet adalah masalah darurat yang tidak bisa ditunda. Air buangan wastafel yang meluap membanjiri lantai dapur, kloset WC yang tidak bisa disiram, atau air bekas mandi yang menggenang di kamar mandi dapat mengganggu kenyamanan seluruh penghuni rumah.",
      "Detox Pipa Kotor hadir sebagai solusi terpercaya Jasa Saluran Mampet Bandung Siaga 24 Jam. Kami siap melayani panggilan darurat ke rumah tinggal, apartemen, kafe, restoran, ruko, kos-kosan, hingga pabrik di seluruh wilayah Bandung Raya.",
      "## Masalah Saluran Mampet yang Sering Kami Tangani",
      "1. **Wastafel Dapur (Kitchen Sink) Mampet Lemak:** Sisa minyak goreng, kuah masakan, dan mentega yang membeku menempel di pipa pembuangan hingga menutup total jalur aliran air.",
      "2. **Kloset WC Tersumbat Benda Padat:** Kloset mampet akibat tisu basah, pembalut wanita, puntung rokok, atau mainan anak yang tidak sengaja terjatuh ke dalam leher angsa.",
      "3. **Floor Drain Kamar Mandi Penuh Rambut:** Rontokan rambut yang saling mengikat bersama buih sabun dan endapan daki membentuk gumpalan jaring penyumbat.",
      "4. **Saluran Talang Air Hujan & Got Utama:** Tertimbun pasir, daun rontok kering, lumut tebal, dan lumpur yang memicu luapan air saat hujan deras.",
      "5. **Bak Kontrol Pembuangan Meluap:** Jalur pipa pembuangan akhir dari rumah menuju got kota tersumbat endapan kotoran padat.",
      "## Mengapa Memilih Detox Pipa Kotor Bandung?",
      "- **Metode Tanpa Bongkar Keramik:** Menggunakan mesin spiral fleksibel mekanis torsi tinggi yang membersihkan kotoran dari dalam pipa tanpa merusak lantai rumah.",
      "- **Harga Sangat Transparan Mulai Rp150.000:** Tidak ada biaya jebakan atau tarif tembak di lokasi. Estimasi biaya selalu disepakati di awal sebelum tindakan dimulai.",
      "- **Garansi Lancar Tuntas (No Cure No Pay):** Jika masalah saluran tidak berhasil dilancarkan karena kendala alat kami, Anda tidak perlu membayar biaya jasa penuh.",
      "- **Respon Cepat 25-45 Menit:** Armada teknisi kami tersebar di berbagai titik wilayah Bandung Kota, Bandung Barat, Bandung Timur, Bandung Selatan, dan Kota Cimahi.",
      "## Area Layanan Saluran Mampet Bandung Raya",
      "Kami menjangkau seluruh kecamatan di Bandung:",
      "- Bandung Tengah & Utara: Cicendo, Sukasari, Sukajadi, Coblong, Dago, Cidadap, Cibeunying Kaler/Kidul.",
      "- Bandung Timur & Selatan: Antapani, Arcamanik, Cibiru, Ujungberung, Batununggal, Buahbatu, Kiaracondong, Bojongloa Kaler/Kidul.",
      "- Bandung Barat & Cimahi: Cimahi Utara, Cimahi Tengah, Cimahi Selatan, Padalarang, Ngamprah, Parongpong, Lembang.",
    ],
    faqs: [
      {
        question: "Berapa lama pengerjaan pelancaran pipa mampet?",
        answer:
          "Sebagian besar kasus sumbatan wastafel atau kamar mandi dapat dituntaskan teknisi kami dalam waktu 30 hingga 60 menit.",
      },
      {
        question: "Apakah bisa datang di hari Minggu atau malam hari?",
        answer:
          "Bisa! Layanan teknisi Detox Pipa Kotor beroperasi 24 jam setiap hari termasuk hari Minggu dan hari libur nasional.",
      },
      {
        question: "Bagaimana jika saluran mampet tidak berhasil dilancarkan?",
        answer:
          "Kami memberlakukan jaminan No Cure No Pay: jika sumbatan tidak teratasi akibat keterbatasan alat kami, Anda tidak dikenakan biaya jasa penuh.",
      },
    ],
  },
  {
    slug: "apa-itu-detox-pipa-air-bersih-bandung",
    title: "Apa Itu Detox Pipa Air Bersih? Solusi Air Keran Kuning, Keruh & Berbau Besi",
    metaTitle: "Apa Itu Detox Pipa Air? Solusi Air Keran Kuning & Keruh",
    metaDescription:
      "Apa itu detox pipa air bersih? Ketahui penyebab pipa berkerak, cacing, air kuning, dan metode cuci pipa tanpa bongkar di Bandung. Hubungi ☎️ 0851-2277-7253.",
    servicePrice: "450000",
    excerpt:
      "Pahami proses cuci pipa atau detox pipa air bersih untuk mengikis kerak hitam, endapan karat besi, lumut, dan cacing di dalam jalur pipa distribusi rumah tanpa merusak tembok.",
    category: "Detox Pipa Air Bersih",
    date: "2026-03-05",
    updatedDate: "2026-11-06",
    author: "Tim Ahli Detox Pipa Kotor",
    readTime: "7 menit baca",
    tags: [
      "Apa Itu Detox Pipa",
      "Cuci Pipa Air Bersih",
      "Solusi Air Keran Kuning",
      "Pipa Berkerak Hitam",
      "Detox Pipa Bandung",
      "Kesehatan Air Keluarga",
    ],
    image: "/images/blog/apa-itu-detox-pipa-air-bersih-bandung.webp",
    content: [
      "## Apa Itu Detox Pipa Air Bersih?",
      "Detox pipa air bersih adalah proses pencucian dan pembersihan mendalam (deep cleaning) pada bagian dalam dinding pipa distribusi air yang tertanam di bawah lantai atau di dalam dinding bangunan.",
      "Tujuannya adalah mengikis lapisan kerak mineral menahun, biofilm bakteri, lumut, endapan karat besi, hingga telur atau cacing air yang menempel di sepanjang jalur pemipaan dari toren penampungan menuju seluruh keran rumah Anda.",
      "Di Bandung Raya, kondisi air tanah sering kali mengandung mineral zat besi (Fe) dan mangan (Mn) yang cukup tinggi. Seiring berjalannya waktu, mineral ini mengendap dan mengkristal di dinding pipa, mempersempit debit aliran dan mencemari kualitas air bersih yang digunakan untuk mandi, mencuci piring, dan menggosok gigi.",
      "## Mengapa Kuras Toren Air Saja Belum Cukup?",
      "Banyak masyarakat Bandung rutin menguras tandon atau toren air setiap beberapa bulan sekali. Namun mereka heran mengapa air keran tetap keruh, berbau besi, atau mengeluarkan serpihan kotoran.",
      "Jawabannya sederhana: toren hanyalah titik awal penampungan. Setelah air keluar dari toren, air masih harus melewati pipa PVC berukuran 1/2 hingga 3/4 inci dengan puluhan sambungan siku (elbow) yang panjangnya bisa mencapai 20 hingga 40 meter. Kotoran dan kerak yang mengendap di pipa tidak akan hilang hanya dengan menguras toren di atas atap.",
      "## 7 Tanda Pipa Air Rumah Perlu Didetox",
      "1. Air keran berwarna kuning atau keruh kecokelatan saat pertama kali dibuka di pagi hari.",
      "2. Munculnya cacing darah (cacing merah kecil) di bak mandi atau lantai shower.",
      "3. Air berbau karat besi, tanah, atau apak meski toren dalam keadaan bersih.",
      "4. Tekanan atau debit kucuran air keran makin mengecil padahal pompa dorong normal.",
      "5. Cartridge filter sedimen keran cepat hitam pekat hanya dalam 1-2 minggu pemakaian.",
      "6. Terlihat serpihan hitam halus atau endapan pasir saat air ditampung di ember putih.",
      "7. Kulit terasa gatal sehabis mandi dan pakaian putih cepat berubah kusam kekuningan.",
      "## Metode Detox Pipa Modern: Pulse Hydro Flushing",
      "Detox Pipa Kotor menggunakan teknologi pencucian pipa berstandar modern:",
      "1. **Teknologi Pneumatic Hydro Pulse:** Mesin khusus mengalirkan kombinasi air bertekanan dengan denyut gelombang udara frekuensi tinggi yang menciptakan efek kavitasi mikro. Getaran ini melepaskan kerak yang menempel kuat tanpa mengikis ketebalan dinding pipa PVC.",
      "2. **100% Alami Bebas Bahan Kimia:** Kami tidak menggunakan zat asam atau deterjen keras beracun, sehingga jalur air bersih dijamin aman langsung digunakan untuk kebutuhan keluarga.",
      "3. **Metode Tanpa Bongkar Keramik:** Seluruh proses pengerjaan dilakukan melalui keran keluar yang sudah ada di kamar mandi dan dapur.",
    ],
    faqs: [
      {
        question: "Berapa tahun sekali pipa air bersih rumah sebaiknya didetox?",
        answer:
          "Idealnya pembersihan detox pipa dilakukan setiap 2 hingga 3 tahun sekali untuk menjaga higienitas air keluarga dan mencegah penyempitan diameter pipa.",
      },
      {
        question: "Apakah metode detox pipa bisa membuat pipa lama pecah?",
        answer:
          "Tidak. Mesin hydro pulse kami dilengkapi pengatur tekanan digital yang dikalibrasi aman untuk pipa PVC, PPR, maupun pipa galvanis lama.",
      },
      {
        question: "Berapa lama proses cuci pipa rumah 2 lantai?",
        answer:
          "Pengerjaan rata-rata memakan waktu sekitar 2 hingga 3 jam, mencakup seluruh titik keran dari lantai atas hingga bawah.",
      },
    ],
  },
  {
    slug: "bahaya-soda-api-pipa-pvc-mampet",
    title: "Bahaya Soda Api untuk Saluran Pipa Mampet: Pipa Meleleh & Lemak Mengeras Jadi Batu",
    metaTitle: "Bahaya Soda Api untuk Pipa Mampet - Jangan Pakai!",
    metaDescription:
      "Hindari soda api untuk saluran mampet. Reaksi panas merusak pipa PVC dan membuat lemak mengeras jadi sabun batu. Gunakan mesin spiral tanpa bongkar. ☎️ 0851-2277-7253.",
    servicePrice: "150000",
    excerpt:
      "Mengapa menuangkan soda api pada saluran mampet sangat berbahaya bagi instalasi pipa rumah Anda? Ketahui reaksi kimia eksotermik, risiko pipa meleleh, dan solusi mekanis yang aman.",
    category: "Edukasi Perawatan Pipa",
    date: "2026-08-21",
    updatedDate: "2026-11-06",
    author: "Tim Ahli Detox Pipa Kotor",
    readTime: "7 menit baca",
    tags: [
      "Bahaya Soda Api",
      "Pipa Meleleh Soda Api",
      "Saluran Wastafel Mampet",
      "Mesin Spiral Rigid",
      "Solusi Saluran Mampet Bandung",
      "Pelancar Saluran Tanpa Kimia",
    ],
    image: "/images/blog/bahaya-soda-api-pipa-pvc-mampet.webp",
    content: [
      "## Bahaya Menuang Soda Api ke Saluran Pipa",
      "Saat saluran wastafel dapur atau kloset WC mampet mendadak, banyak pemilik rumah refleks membeli soda api (natrium hidroksida / NaOH) di toko bangunan terdekat. Harganya yang murah dan janji instan sering membuat orang tergiur.",
      "Namun tahukah Anda bahwa menuangkan soda api justru merupakan penyebab nomor satu kerusakan fatal pada sistem pemipaan rumah di Bandung? Bukannya melancarkan saluran, soda api kerap membuat pipa PVC meleleh, sambungan lepas, dan timbunan lemak berubah mengkristal sekeras batu karang.",
      "## 3 Bahaya Fatal Penggunaan Soda Api pada Saluran Rumah",
      "1. **Reaksi Eksotermik Panas Ekstrem (>100°C) Melelehkan Pipa PVC:** Ketika butiran soda api bereaksi dengan air yang menggenang di dalam pipa, terjadi reaksi kimia eksotermik dahsyat yang menghasilkan panas mendidih seketika hingga di atas 100 derajat Celcius. Sementara itu, pipa PVC standar perumahan (tipe AW atau D) hanya memiliki daya tahan panas maksimal 60 derajat Celcius. Akibatnya, dinding pipa melunak, sambungan siku (elbow) terlepas lemnya, dan air limbah merembes masuk ke fondasi atau plafon lantai bawah.",
      "2. **Proses Saponifikasi: Lemak Dapur Berubah Menjadi Sabun Keras Seperti Semen:** Pada saluran wastafel dapur yang tersumbat gumpalan minyak goreng, penambahan soda api memicu reaksi penyabunan (saponifikasi). Reaksi kimia antara asam lemak dan natrium hidroksida ini membentuk garam asam lemak padat yang mengkristal sekeras batu semen. Bila ini terjadi, sumbatan tidak akan pernah bisa dibilas dengan air panas biasa dan membutuhkan mata bor baja khusus untuk menembusnya.",
      "3. **Uap Toksik Beracun dan Risiko Kerusakan Keramik:** Saat soda api bereaksi di dalam pipa, terbentuk uap kimia pekat yang dapat menyembur balik dari lubang afur. Uap ini sangat berbahaya bila terhirup, dapat membutakan mata bila terkena percikan, serta mengikis lapisan glasir keramik kloset dan wastafel hingga bernoda kusam permanen.",
      "## Solusi Aman & Efektif: Pelancaran Mekanis Mesin Spiral Tanpa Kimia",
      "Lalu apa solusi yang benar saat saluran pembuangan tersumbat?",
      "- **Mesin Kawat Spiral Fleksibel (Rigid Drain Cleaner):** Alat mekanis modern ini menggunakan kabel baja lentur yang berputar masuk mengikuti lekukan pipa tanpa merusak ketebalan dinding PVC.",
      "- **Mata Potong Khusus:** Pisau baja berputar akan mencacah bongkahan lemak beku menjadi butiran kecil dan mengait jalinan rambut keluar dari pipa.",
      "- **Ramah Lingkungan & Aman Pipa:** 100% bebas bahan kimia korosif, tanpa risiko pipa bocor atau uap berbahaya bagi keluarga Anda.",
      "## Tips Merawat Saluran Pembuangan Secara Alami",
      "Untuk perawatan rutin harian, hindari membuang minyak goreng bekas ke wastafel. Gunakan perangkap saringan afur, dan gelontor pipa seminggu sekali dengan campuran air hangat kuku dan sabun cuci piring cair untuk melarutkan sisa lemak ringan.",
    ],
    faqs: [
      {
        question: "Apa yang harus dilakukan jika sudah terlanjur menuang soda api dan saluran tetap mampet?",
        answer:
          "Segera hentikan penambahan air atau bahan kimia lainnya. Jangan coba membobok pipa sendiri. Hubungi teknisi Detox Pipa Kotor agar sumbatan keras tersebut dapat dihancurkan menggunakan mesin spiral baja secara aman.",
      },
      {
        question: "Apakah pembersihan dengan mesin spiral bisa membuat pipa PVC retak?",
        answer:
          "Tidak. Mesin kawat spiral profesional kami bekerja secara elastis mengikuti jalur kelokan pipa dengan putaran torsi yang terkalibrasi aman untuk dinding pipa PVC standar rumah tangga.",
      },
      {
        question: "Berapa biaya jasa pelancaran saluran pipa di Detox Pipa Kotor?",
        answer:
          "Tarif jasa pelancaran saluran pipa mampet di Detox Pipa Kotor sangat terjangkau, mulai dari Rp150.000 dengan jaminan garansi lancar tuntas.",
      },
    ],
  },
];
