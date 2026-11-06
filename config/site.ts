export interface AreaInfo {
  slug: string;
  name: string;
  description?: string;
  landmark?: string;
}

export interface ServiceInfo {
  id: string;
  name: string;
  heading: string;
  subheading: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  price: string;
  features: string[];
}

export const siteConfig = {
  name: "detox pipa kotor",
  brandName: "DetoxPipaKotor.id",
  legalName: "Detox Pipa Kotor Bandung",
  siteTitle: "Jasa Detox Pipa Kotor Bandung | detox pipa kotor",
  tagline: "Ahli Pembersihan Pipa & Saluran Air Mampet",
  heroHeading: "Detox Pipa Kotor Bandung: Ahli Pembersihan Pipa & Saluran Air Mampet",
  description:
    "Promo - Jasa Detox Pipa Kotor Bandung, detox pipa kotor, pipa mampet, WC mampet, dan wastafel mampet di Bandung. harga terjangkau. 📞 0851-2277-7253",
  heroSubtitle:
    "DetoxPipaKotor.id adalah layanan pembersihan pipa dan saluran air yang siap mengatasi sumbatan, kerak, lemak, dan kotoran membandel. Menggunakan alat profesional tanpa bongkar, kami memastikan aliran air kembali lancar, bersih, dan bebas bau.",
  domain: "https://detoxpipakotor.id",
  email: "info@detoxpipakotor.id",
  phone: "+62 851-2277-7253",
  phoneRaw: "+6285122777253",
  whatsappNumber: "6285122777253",
  whatsappUrl:
    "https://api.whatsapp.com/send/?phone=6285122777253&text=Halo+DetoxPipaKotor.id,+saya+butuh+bantuan+pembersihan+saluran+pipa+kotor.&type=phone_number&app_absent=0",
  address: {
    street: "Jl. Baladewa No. 114, Kel. Pamoyanan, Kec. Cicendo",
    city: "Kota Bandung",
    province: "Jawa Barat",
    postalCode: "40173",
    country: "ID",
    full: "Jl. Baladewa No. 114, Kel. Pamoyanan, Kec. Cicendo, Kota Bandung",
    geo: {
      latitude: -6.902389,
      longitude: 107.590422,
    },
  },
  openingHours: "Mo-Su 08:00-22:00",
  openingHoursDisplay: "Pukul 08.00 - 22.00",
  openingHoursText: "08.00 - 22.00 (Setiap Hari)",
  testimonials: [
    {
      name: "Ibu Ani",
      city: "Cicendo, Bandung",
      location: "Cicendo, Bandung",
      comment: "Pelayanan cepat dan hasilnya memuaskan, pipa mampet langsung lancar tanpa ribet!",
      rating: 5,
    },
    {
      name: "Budi",
      city: "Sukajadi, Bandung",
      location: "Sukajadi, Bandung",
      comment: "Pelayanan cepat dan bersih, pipa mampet langsung lancar tanpa ribet.",
      rating: 5,
    },
    {
      name: "Dewi",
      city: "Antapani, Bandung",
      location: "Antapani, Bandung",
      comment: "Teknisi ramah dan harga masuk akal, sangat puas dengan hasilnya!",
      rating: 5,
    },
  ],
  priceRange: "Rp150.000 - Rp450.000",
  rating: {
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
  },
  partners: [
    { name: "medinajayateknik.com", url: "https://medinajayateknik.com/" },
    { name: "deteksipipabocor.id", url: "https://deteksipipabocor.id" },
    { name: "perbaikansaluranmampet.com", url: "https://perbaikansaluranmampet.com" },
  ],
  services: [
    {
      id: "pipa-tersumbat",
      name: "Pipa Tersumbat",
      heading: "Pipa Tersumbat",
      subheading: "Membersihkan pipa mampet tanpa merusak",
      shortDesc: "Solusi cepat dan penanganan pipa mampet tanpa bongkar dan tanpa merusak instalasi pipa rumah maupun tempat usaha Anda.",
      fullDesc:
        "Cepat tangani saluran air tersumbat dengan teknik tanpa bongkar yang efisien. Mengatasi sumbatan lemak dapur, rambut, buih sabun, dan kotoran membandel.",
      iconName: "FaTools",
      price: "Mulai Rp150.000",
      features: [
        "Teknik tanpa bongkar yang efisien",
        "Aman untuk pipa PVC, stainless, besi, dan HDPE",
        "Menghilangkan kerak lemak seketika",
        "Pengerjaan cepat rata-rata 20 - 40 menit",
      ],
    },
    {
      id: "wastafel",
      name: "Wastafel",
      heading: "Wastafel & Kitchen Sink",
      subheading: "Cepat tangani saluran air tersumbat",
      shortDesc: "Perbaikan dan pembersihan wastafel dapur atau saluran cuci piring dari endapan lemak membandel agar air kembali lancar.",
      fullDesc:
        "Seiring waktu, lemak dapur, sabun, minyak, dan sisa makanan membentuk lapisan keras di dalam pipa. Detox pipa bertujuan membersihkan seluruh lapisan tersebut.",
      iconName: "FaSink",
      price: "Mulai Rp150.000",
      features: [
        "Pipa dapur / kitchen sink & pipa cuci piring",
        "Mengangkat minyak beku & lemak membandel",
        "Menghilangkan bau tidak sedap",
        "Aliran kembali lancar optimal",
      ],
    },
    {
      id: "saluran-air",
      name: "Saluran Air",
      heading: "Saluran Air & Floor Drain",
      subheading: "Teknik tanpa bongkar yang efisien",
      shortDesc: "Membersihkan saluran kamar mandi, floor drain, dan saluran pipa rumah tangga hingga bangunan komersial.",
      fullDesc:
        "Membersihkan saluran kamar mandi dan saluran lantai (floor drain) yang tersumbat, kotor, maupun berbau agar bebas genangan dan higienis.",
      iconName: "FaBroom",
      price: "Mulai Rp150.000",
      features: [
        "Saluran kamar mandi & floor drain lantai",
        "Pipa pembuangan AC & pipa rumah",
        "Pipa vertikal & horizontal",
        "Bebas bau dan bebas genangan air",
      ],
    },
    {
      id: "detox-pipa-kotor",
      name: "Detox Pipa Air Bersih",
      heading: "Detox Pipa",
      subheading: "Pembersihan menyeluruh tanpa bahan kimia",
      shortDesc: "Pembersihan menyeluruh pada bagian dalam pipa saluran air menggunakan metode mekanis / jetting tanpa bahan berbahaya.",
      fullDesc:
        "Berbeda dengan cara biasa seperti soda api atau pembersih kimia, detox pipa tidak menggunakan bahan berbahaya, sehingga aman untuk pipa PVC, pipa lama, maupun instalasi rumah dan bisnis.",
      iconName: "FaWater",
      price: "Mulai Rp450.000",
      features: [
        "Aman untuk pipa lama & pipa PVC",
        "Tanpa bahan kimia korosif seperti soda api",
        "Memperpanjang usia instalasi pipa",
        "Menjaga kebersihan lingkungan rumah & usaha",
      ],
    },
  ] as ServiceInfo[],
  tujuanDetox: [
    {
      no: "1",
      title: "Menghilangkan Endapan Lemak & Kerak yang Menyumbat",
      desc: "Seiring waktu, lemak dapur, sabun, minyak, dan sisa makanan membentuk lapisan keras di dalam pipa. Detox pipa bertujuan membersihkan seluruh lapisan tersebut.",
    },
    {
      no: "2",
      title: "Mengatasi Pipa Mampet Tanpa Merusak Instalasi",
      desc: "Karena menggunakan alat khusus, detox pipa bisa mengatasi mampet tanpa perlu membongkar pipa atau mengganti bagian tertentu.",
    },
    {
      no: "3",
      title: "Membersihkan Pipa Secara Total agar Tidak Mudah Mampet Lagi",
      desc: "Setelah dilakukan detox, bagian dalam pipa kembali bersih sehingga aliran air lebih lancar dan tidak mudah terjadi sumbatan ulang.",
    },
    {
      no: "4",
      title: "Menghilangkan Bau Tidak Sedap",
      desc: "Bau dari saluran air biasanya berasal dari tumpukan kotoran lama. Detox pipa mengangkat seluruh endapan penyebab bau.",
    },
    {
      no: "5",
      title: "Memperpanjang Usia Pipa",
      desc: "Pipa yang bersih dari endapan akan lebih awet dan tidak mudah rusak.",
    },
    {
      no: "6",
      title: "Menjaga Kebersihan Lingkungan Rumah & Usaha",
      desc: "Khusus untuk restoran, kafe, dan hotel, detox pipa sangat penting untuk menjaga higienitas dan standar kebersihan.",
    },
  ],
  kapanDetox: [
    {
      no: "1",
      title: "Aliran Air Mulai Lambat",
      desc: "Jika air mengalir lama, itu tanda endapan sudah menumpuk cukup tebal.",
    },
    {
      no: "2",
      title: "Wastafel atau Floor Drain Menghasilkan Bau Tidak Sedap",
      desc: "Bau adalah gejala awal penumpukan organik di dalam pipa.",
    },
    {
      no: "3",
      title: "Pipa Sering Mampet Berulang",
      desc: "Walaupun sudah disedot atau dibersihkan dengan alat sederhana, sumbatan kembali lagi. Ini berarti bagian dalam pipa dipenuhi kerak yang harus dibersihkan secara total.",
    },
    {
      no: "4",
      title: "Air Balik ke Atas atau Menggembung",
      desc: "Tanda bahwa pipa tidak mampu menampung aliran karena endapan sudah penuh.",
    },
    {
      no: "5",
      title: "Rumah atau Usaha Sudah Lebih dari 1 Tahun Tidak Pernah Dibersihkan",
      desc: "Idealnya detox pipa dilakukan setiap 6 hingga 12 bulan, terutama untuk dapur yang sering digunakan.",
    },
    {
      no: "6",
      title: "Untuk Restoran, Kafe, atau Tempat Usaha Makanan",
      desc: "Area dapur bisnis menghasilkan limbah lemak jauh lebih besar daripada rumah. Maka detox pipa disarankan setiap 1 hingga 3 bulan untuk mencegah tersumbat total.",
    },
  ],
  advantages: [
    {
      title: "1. Tanpa Bongkar",
      desc: "Proses pembersihan menggunakan mesin khusus, sehingga pipa tidak perlu dibongkar.",
      icon: "FaTools",
    },
    {
      title: "2. Teknisi Berpengalaman",
      desc: "Tenaga ahli dengan pengalaman 5 hingga 10 tahun dalam menangani pipa mampet.",
      icon: "FaUserShield",
    },
    {
      title: "3. Harga Transparan",
      desc: "Mulai dari Rp150.000, menyesuaikan kondisi pipa & jarak lokasi.",
      icon: "FaCheckCircle",
    },
    {
      title: "4. Pengerjaan Cepat",
      desc: "Rata-rata waktu pengerjaan hanya 20 - 40 menit.",
      icon: "FaClock",
    },
    {
      title: "5. Garansi",
      desc: "Jika pipa kembali mampet dalam waktu tertentu, kami siap datang lagi.",
      icon: "FaShieldAlt",
    },
  ],
  prosesPengerjaan: [
    {
      step: "1",
      title: "Survey Area",
      desc: "Teknisi mengecek lokasi pipa yang tersumbat.",
    },
    {
      step: "2",
      title: "Analisa Sumbatan",
      desc: "Menentukan penyebab & lokasi penyumbatan.",
    },
    {
      step: "3",
      title: "Detox Mesin Khusus",
      desc: "Menggunakan spiral cleaner atau mesin pembersih otomatis.",
    },
    {
      step: "4",
      title: "Uji Aliran Air",
      desc: "Memastikan pipa benar-benar lancar.",
    },
    {
      step: "5",
      title: "Edukasi & Tips Perawatan",
      desc: "Pelanggan diberi tips agar pipa tidak cepat mampet kembali.",
    },
  ],
  areas: [
    {
      slug: "cicendo",
      name: "Cicendo",
      description: "Pusat kantor & armada operasional Detox Pipa Kotor di Jl. Baladewa, Pamoyanan, Cicendo untuk pembersihan pipa & saluran mampet tanpa bongkar.",
      landmark: "Jl. Baladewa, Stasiun Bandung, Rajawali, Pasirkaliki",
    },
    {
      slug: "bandung",
      name: "Bandung Kota",
      description: "Layanan pembersihan pipa dan saluran air mampet di seluruh wilayah Kota Bandung. Mengatasi sumbatan lemak, kerak, dan kotoran tanpa bongkar.",
      landmark: "Alun-Alun Bandung, Gedung Sate, Pasupati",
    },
    {
      slug: "bandung-barat",
      name: "Bandung Barat",
      description: "Layanan pembersihan pipa saluran air mampet dan detox pipa kotor area Bandung Barat, Padalarang, Lembang, dan sekitarnya tanpa bongkar keramik.",
      landmark: "Padalarang, Kota Baru Parahyangan, Lembang, Cimareme",
    },
    {
      slug: "sukajadi",
      name: "Sukajadi",
      description: "Pembersihan pipa mampet wastafel dapur, kamar mandi & cuci pipa air keran tanpa bongkar untuk rumah & resto area Sukajadi.",
      landmark: "Paris Van Java, Pasteur, Gunung Batu",
    },
    {
      slug: "pasteur",
      name: "Pasteur",
      description: "Layanan reaksi cepat pembersihan pipa saluran air mampet restoran, kafe, hotel & hunian area Pasteur.",
      landmark: "Gerbang Tol Pasteur, Setrasari, Surya Sumantri, Maranatha",
    },
    {
      slug: "antapani",
      name: "Antapani",
      description: "Penanganan saluran WC, wastafel & floor drain mampet tanpa merusak keramik di wilayah Antapani.",
      landmark: "Gasibu Antapani, Terusan Jakarta",
    },
    {
      slug: "cibiru",
      name: "Cibiru",
      description: "Pembersihan saluran got & pipa pembuangan mampet area Cibiru, Panyileukan & Gedebage.",
      landmark: "Bundaran Cibiru, UIN Sunan Gunung Djati, Stadion GBLA, Summarecon",
    },
    {
      slug: "buah-batu",
      name: "Buah Batu",
      description: "Pembersihan saluran air, wastafel cuci piring & detox pipa air bersih bebas bau area Buah Batu & Batununggal.",
      landmark: "Passer Kalapa, Batununggal, Terusan Buah Batu",
    },
    {
      slug: "kiaracondong",
      name: "Kiaracondong",
      description: "Pembersihan saluran pembuangan mampet & pelancaran pipa air rumah tinggal area Kiaracondong.",
      landmark: "Stasiun Kiaracondong, Ibrahim Adjie",
    },
    {
      slug: "cimahi",
      name: "Cimahi",
      description: "Layanan pembersihan saluran air mampet & detox pipa kotor bergaransi area Kota Cimahi & sekitarnya.",
      landmark: "Alun-Alun Cimahi, Leuwigajah, Cihanjuang",
    },
    {
      slug: "dago",
      name: "Dago / Coblong",
      description: "Pembersihan pipa saluran air wastafel & kamar mandi indekos, resto, kafe & hunian Dago, Dipatiukur & Simpang Dago.",
      landmark: "ITB, Simpang Dago, Dago Pakar",
    },
    {
      slug: "cileunyi",
      name: "Cileunyi",
      description: "Jasa pembersihan pipa pembuangan mampet & saluran air kotor wilayah Cileunyi & Jatinangor.",
      landmark: "Gerbang Tol Cileunyi, Ubertos, Cibiru",
    },
    {
      slug: "ujungberung",
      name: "Ujungberung",
      description: "Pembersihan pipa saluran mampet tanpa bobok keramik area Ujungberung & sekitarnya.",
      landmark: "Alun-Alun Ujungberung, AH Nasution",
    },
    {
      slug: "kopo",
      name: "Kopo",
      description: "Penanganan pipa wastafel dapur & saluran pembuangan mampet area Kopo, Margahayu & Caringin.",
      landmark: "Miko Mall, Kopo Sayati, Terusan Kopo, Pasar Caringin",
    },
    {
      slug: "lembang",
      name: "Lembang",
      description: "Pembersihan kerak pipa air & pelancaran saluran air villa, cafe & hunian area Lembang & Maribaya.",
      landmark: "Floating Market, Alun-Alun Lembang, Setiabudi Atas, Maribaya",
    },
    {
      slug: "soreang",
      name: "Soreang",
      description: "Spesialis pembersihan saluran air pipa mampet tanpa bongkar di Soreang, Banjaran & Katapang.",
      landmark: "Stadion Si Jalak Harupat, Komplek Pemda Soreang, Tol Soroja",
    },
    {
      slug: "bojongsoang",
      name: "Bojongsoang",
      description: "Pembersihan saluran air mampet kosan/rumah tinggal wilayah Bojongsoang & Baleendah.",
      landmark: "Telkom University, Buah Batu Square, Podomoro Park",
    },
    {
      slug: "batununggal",
      name: "Batununggal",
      description: "Layanan profesional pembersihan wastafel mampet & saluran air berbau Batununggal.",
      landmark: "Komplek Batununggal Indah, Soekarno Hatta, Mengger",
    },
    {
      slug: "padalarang",
      name: "Padalarang",
      description: "Pembersihan saluran pembuangan mampet area Padalarang & Kota Baru Parahyangan tanpa bongkar.",
      landmark: "Stasiun Whoosh Padalarang, Kota Baru Parahyangan, Tagog Padalarang",
    },
  ] as AreaInfo[],
};
