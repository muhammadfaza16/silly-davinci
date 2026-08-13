import fs from 'fs';

const masterBooks = [
  // 1-8: Russian Classics & Realism
  {
    title: "War and Peace", author: "Leo Tolstoy", year: 1869, pages: 1225, type: "fiction",
    desc: "Epik Napoleon-era Rusia yang mengikuti lima keluarga bangsawan di tengah perang dan damai, mempertanyakan apakah sejarah digerakkan oleh tokoh besar atau kekuatan kolektif.",
    takeaways: ["Filsafat Sejarah Tolstoy: Kritik atas 'Great Man Theory'.", "Dinamika Perang & Damai: Kontras medan tempur dan ruang keluarga bangsawan.", "Pencarian Makna Pierre Bezukhov."],
    context: "Epik sejarah paling berpengaruh dalam sastra peradaban dunia."
  },
  {
    title: "Anna Karenina", author: "Leo Tolstoy", year: 1878, pages: 864, type: "fiction",
    desc: "Tragedi perselingkuhan sosial dan pencarian nilai hidup spiritual di Rusia abad ke-19. Dibuka dengan kalimat ikonik tentang kebahagiaan dan ketidakbahagiaan keluarga.",
    takeaways: ["Benturan Hasrat Individu vs Norma Sosial.", "Paralelisme Kisah Anna & Levin.", "Kritik Kebangsawanan dan Institusi Pernikahan."],
    context: "Mahakarya realisme psikologis dan analisis struktur sosial kebangsawanan."
  },
  {
    title: "The Death of Ivan Ilyich", author: "Leo Tolstoy", year: 1886, pages: 86, type: "fiction",
    desc: "Novella eksistensial tentang seorang hakim borjuis yang menyadari bahwa seluruh hidupnya yang 'tertata rapi' sebenarnya dangkal ketika menghadapi penyakit mematikan.",
    takeaways: ["Konfrontasi Kematian & Pembongkaran Kepalsuan.", "Kritik Karirisme & Materialisme Dangkal.", "Penebusan Eksistensial di Detik Akhir."],
    context: "Karya paling ringkas namun tajam dalam menelanjangi kepalsuan borjuis."
  },
  {
    title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880, pages: 824, type: "fiction",
    desc: "Puncak novel dialektis Dostoevsky. Bab 'The Grand Inquisitor' mempertemukan kebebasan nurani lawan jaminan keamanan dari institusi agama dan negara.",
    takeaways: ["The Grand Inquisitor: Kebebasan manusia vs beban tanggung jawab.", "Jika Tuhan Tidak Ada, Apakah Semua Boleh?: Dilema moral Ivan.", "Kasih Eksistensial Alyosha: Kepraktisan moral di atas skeptisisme."],
    context: "Puncak pergulatan filosofis tentang kebebasan, agama, dan moralitas."
  },
  {
    title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, pages: 671, type: "fiction",
    desc: "Raskolnikov menguji apakah manusia luar biasa berhak melanggar moralitas — dan menanggung konsekuensi psikologis ketika teori bertemu realitas.",
    takeaways: ["Bahaya Ideologi Tanpa Moral: Prekursor Übermensch.", "Penebusan Lewat Penderitaan & Nurani.", "Menguji teori abstrak di dunia nyata."],
    context: "Penyelidikan psikologis mendalam terhadap dorongan kejahatan dan guilt."
  },
  {
    title: "Notes from Underground", author: "Fyodor Dostoevsky", year: 1864, pages: 144, type: "fiction",
    desc: "Proto-existentialist manifesto. Manusia bawah tanah menolak rasionalisme murni dan determinisme utilitarian, menegaskan irasionalitas kehendak bebas.",
    takeaways: ["Kritik Rasionalisme Utilitarian: Manusia bukan kalkulator kenikmatan.", "Unreliable Narrator sebagai instrumen kritik sosial.", "Dilema Kehendak Bebas: Penderitaan sebagai bukti kebebasan."],
    context: "Landasan dasar menuju eksistensialisme modern."
  },
  {
    title: "The Idiot", author: "Fyodor Dostoevsky", year: 1869, pages: 656, type: "fiction",
    desc: "Eksperimentasi Dostoevsky menghadirkan karakter yang 'sepenuhnya baik' (Pangeran Myshkin) di tengah masyarakat Rusia yang korup dan penuh intrik.",
    takeaways: ["Tragedi Kebaikan Murni di Dunia Pragmatis.", "Ketidakmampuan Masyarakat Menerima Ketulusan.", "Kekacauan Akibat Kepolosan Radikal."],
    context: "Eksplorasi unik tentang paradoks kebaikan murni."
  },
  {
    title: "Demons", author: "Fyodor Dostoevsky", year: 1872, pages: 768, type: "fiction",
    desc: "Prophetic novel tentang radikalisme nihilistik di Rusia. Dostoevsky memprediksi bagaimana ideologi radikal ekstrem akan melahirkan teror politik abad ke-20.",
    takeaways: ["Nihilisme Politik & Teror Ideologis.", "Bahaya Gagasan Impor Tanpa Akar Moral.", "Dinamika Kelompok Radikal Underground."],
    context: "Prediksi sastra paling akurat tentang totalitarianisme abad ke-20."
  },

  // 9-16: Modernism & Literary Landmarks
  {
    title: "Ulysses", author: "James Joyce", year: 1922, pages: 730, type: "fiction",
    desc: "Mahakarya modernisme yang merekam perjalanan Leopold Bloom di Dublin dalam satu hari (16 Juni 1904), memanfaatkan teknik stream of consciousness secara revolusioner.",
    takeaways: ["Stream of Consciousness: Rekaman kesadaran manusia tanpa filter.", "Paralelisme Modern dengan Epik Odyssey Homer.", "Bahasa sebagai Eksperimen Seni Murni."],
    context: "Novel paling berpengaruh dalam eksperimentasi bentuk sastra modern."
  },
  {
    title: "A Portrait of the Artist as a Young Man", author: "James Joyce", year: 1916, pages: 299, type: "fiction",
    desc: "Kisah perkembangan Stephen Dedalus yang melepaskan diri dari dogma agama, keluarga, dan kebangsaan demi menemukan identitas seni independen.",
    takeaways: ["Pemberontakan Intelektual terhadap Dogma Agama.", "Perkembangan Bahasa Seiring Kematangan Kognitif.", "Panggilan Seni sebagai Pembebasan."],
    context: "Bildungsroman klasik pencarian otentisitas seniman."
  },
  {
    title: "In Search of Lost Time", author: "Marcel Proust", year: 1913, pages: 4215, type: "fiction",
    desc: "Eksplorasi monumental tentang memori involuntar (Madeleine moment), waktu, seni, dan ilusi sosial kebangsawanan Prancis abad ke-19.",
    takeaways: ["Involuntary Memory: Memori yang ter-trigger rasa dan aroma.", "Subjektivitas Waktu dan Pengalaman.", "Seni sebagai Satu-satunya Penakluk Waktu."],
    context: "Puncak eksplorasi memori dan kesadaran dalam sastra dunia."
  },
  {
    title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967, pages: 417, type: "fiction",
    desc: "Kisah tujuh generasi keluarga Buendía di Macondo. Puncak realisme magis yang menggabungkan sejarah tragis Amerika Latin dengan alegori eksistensial.",
    takeaways: ["Realisme Magis sebagai Lensa Realitas Sosial.", "Siklus Kesepian dan Trauma Berulang.", "Alegori Kolonialisme dan Eksploitasi."],
    context: "Mahakarya realisme magis Amerika Latin paling berpengaruh."
  },
  {
    title: "Love in the Time of Cholera", author: "Gabriel García Márquez", year: 1985, pages: 348, type: "fiction",
    desc: "Kisah cinta Florentino Ariza yang bertahan lebih dari 50 tahun menantikan Fermina Daza. Eksplorasi cinta sebagai penyakit biologis dan obsesi eksistensial.",
    takeaways: ["Cinta sebagai Perasaan sekaligus Obsesi Fisik.", "Ketahanan Waktu vs Penuaan Tubuh.", "Keteguhan di Tengah Peta Perubahan Sosial."],
    context: "Studi komprehensif tentang spektrum cinta manusia."
  },
  {
    title: "Don Quixote", author: "Miguel de Cervantes", year: 1605, pages: 863, type: "fiction",
    desc: "Novel modern pertama. Benturan antara idealisme romantis Don Quixote dan realitas pragmatis Sancho Panza di Spanyol abad ke-17.",
    takeaways: ["Benturan Idealisme vs Realitas Pragmatis.", "Peran Narasi Fiksi dalam Membentuk Kognisi.", "Cikal Bakal Formats Novel Modern."],
    context: "Novel modern pertama dalam sejarah peradaban Barat."
  },
  {
    title: "Moby-Dick", author: "Herman Melville", year: 1851, pages: 635, type: "fiction",
    desc: "Perburuan Kapten Ahab terhadap paus putih Moby Dick. Alegori kosmik tentang obsesi manusia, perlawanan terhadap alam, dan kehendak absolut.",
    takeaways: ["Obsesi Fanatik dan Kehancuran Diri.", "Paus Putih sebagai Simbol Absurditas Alam.", "Metafora Industri Penangkapan Paus."],
    context: "Epik alegoris Amerika Serikat tentang batas ambisi manusia."
  },
  {
    title: "Middlemarch", author: "George Eliot", year: 1871, pages: 800, type: "fiction",
    desc: "Studi sosial mendalam tentang kota provinsi Inggris. Menelusuri bagaimana idealisme individu terbentur oleh harapan sosial, kelas, dan kompromi perkawinan.",
    takeaways: ["Studi Komprehensif Jejaring Sosial Provinsi.", "Kompromi Idealisme dalam Realitas Domestik.", "Empati Kritis terhadap Karakter Manusia."],
    context: "Karya puncak realisme Victorian Inggris."
  },

  // 17-22: Classical Epics & Shakespeare
  {
    title: "The Odyssey", author: "Homer", year: -800, pages: 448, type: "fiction",
    desc: "Perjalanan pulang Odysseus dari Perang Troya. Epik tentang kecerdasan (metis), ketahanan, keluarga, dan hubungan manusia dengan para dewa.",
    takeaways: ["Kecerdasan (Metis) vs Kekuatan Fisik Murni.", "Konsep Nostos (Kerinduan Rumah).", "Xenia: Etika Kesopanan Menerima Tamu."],
    context: "Epik perjalanan paling mendasar dalam tradisi sastra Barat."
  },
  {
    title: "The Iliad", author: "Homer", year: -800, pages: 683, type: "fiction",
    desc: "Kemarahan Achilles dalam Perang Troya. Epik tentang kehormatan (kleos), mortalitas, ketidakpastian perang, dan nasib tragedi manusia.",
    takeaways: ["Kemarahan Achilles dan Konsekuensinya.", "Kleos: Kematian Tragis demi Keabadian Nama.", "Kemanusiaan di Tengah Kekejaman Perang."],
    context: "Fondasi tradisi narasi epik perang dan kehormatan."
  },
  {
    title: "Hamlet", author: "William Shakespeare", year: 1601, pages: 144, type: "fiction",
    desc: "Tragedi Pangeran Denmark yang ragu-ragu membalas dendam atas kematian ayahnya. Meditasi mendalam tentang aksi, keraguan, dan moralitas.",
    takeaways: ["To be or not to be: Paralisis Kognitif akibat Overthinking.", "Keledatan Korupsi Istana (Something is rotten).", "Teater di Dalam Teater sebagai Cermin Realitas."],
    context: "Tragedi paling terkenal dalam sejarah teater dunia."
  },
  {
    title: "King Lear", author: "William Shakespeare", year: 1606, pages: 160, type: "fiction",
    desc: "Raja tua yang membagi kerajaannya berdasarkan sanjungan palsu, melahirkan kehancuran keluarga, kegilaan, dan penelanjangan eksistensial.",
    takeaways: ["Sanjungan Palsu vs Kejujuran Radikal (Cordelia).", "Kebutaan Kekuasaan dan Kegilaan.", "Kemanusiaan Telanjang (Unaccommodated Man)."],
    context: "Eksplorasi paling kelam Shakespeare tentang kegilaan dan kekuasaan."
  },
  {
    title: "Macbeth", author: "William Shakespeare", year: 1606, pages: 112, type: "fiction",
    desc: "Ambisi politik tak bertepi yang memicu pembunuhan raja dan kehancuran psikologis Macbeth serta Lady Macbeth akibat rasa bersalah.",
    takeaways: ["Ambisi Tanpa Batas sebagai Racun Jiwa.", "Rasa Bersalah yang Memvisualisasikan Hantu.", "Prophesi dan Self-Fulfilling Illusion."],
    context: "Studi psikologis tercepat dan paling intensif tentang paranoia kekuasaan."
  },
  {
    title: "Othello", author: "William Shakespeare", year: 1604, pages: 144, type: "fiction",
    desc: "Jenderal Moor Othello di-hancurkan oleh manipulasi psikologis Iago yang membakar cemburu buta terhadap istrinya Desdemona.",
    takeaways: ["Manipulasi Iago: Racun Kecemburuan Sederhana.", "Rasisme dan Rasa Tidak Aman Sosial.", "Kerapuhan Kepercayaan di Bawah Insentif Keraguan."],
    context: "Studi puncak tentang cemburu, manipulasi, dan prasangka."
  },

  // 23-30: Dystopia, Social Critique & Latin American Classics
  {
    title: "1984", author: "George Orwell", year: 1949, pages: 328, type: "fiction",
    desc: "Diagnostik totalitarianisme mutlak: Newspeak, Doublethink, manipulasi sejarah, dan penundukan pikiran individu oleh Party.",
    takeaways: ["Siapa Mengontrol Bahasa, Mengontrol Pikiran.", "Doublethink & Reality Control.", "Totalitarianisme Demi Kekuasaan Murni."],
    context: "Manual diagnostik utama terhadap rekayasa realitas dan otoritarianisme."
  },
  {
    title: "Animal Farm", author: "George Orwell", year: 1945, pages: 112, type: "fiction",
    desc: "Alegori politik tentang revolusi hewan ternak yang mengusir manusia, namun perlahan berubah menjadi tirani baru para babi.",
    takeaways: ["Semua Hewan Setara, Tapi Ada Yang Lebih Setara.", "Korupsi Kekuasaan Pasca-Revolusi.", "Manipulasi Slogan oleh Elit baru."],
    context: "Alegori politik paling populer tentang korupsi sistem pasca-revolusi."
  },
  {
    title: "Brave New World", author: "Aldous Huxley", year: 1932, pages: 268, type: "fiction",
    desc: "Dystopia kontrol sosial berbasis kenikmatan (soma), rekayasa biologi, dan komodifikasi kebahagiaan. Komplementer utama 1984.",
    takeaways: ["Kontrol Lewat Kenikmatan vs Ketakutan.", "Penghapusan Penderitaan = Penghapusan Kedalaman Seni.", "Rekayasa Sosial Berbasis Biologi."],
    context: "Diagnostik komplementer 1984 tentang kontrol sosial modern."
  },
  {
    title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, pages: 281, type: "fiction",
    desc: "Pengacara Atticus Finch membela pria kulit hitam yang dituduh memperkosa di Amerika Selatan yang sarat prasangka rasial.",
    takeaways: ["Integritas Moral di Tengah Histerisme Massa.", "Melihat Dunia dari Kacamata Orang Lain.", "Mockingbird sebagai Simbol Kepolosan."],
    context: "Novel klasik Amerika tentang keadilan dan integritas moral."
  },
  {
    title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, pages: 180, type: "fiction",
    desc: "Kisah Jay Gatsby dan cintanya pada Daisy Buchanan di era Jazz Age. Pembongkaran ilusi American Dream dan kekosongan moral kelas atas.",
    takeaways: ["Pembongkaran Ilusi American Dream.", "Kelas Sosial dan Kepalsuan Kemewahan.", "Kerinduan pada Masa Lalu yang Tak Kembali."],
    context: "Potret paling ikonik Jazz Age dan dekadensi moral."
  },
  {
    title: "Beloved", author: "Toni Morrison", year: 1987, pages: 324, type: "fiction",
    desc: "Mantan budak Sethe dihantui secara fisik oleh arwah bayinya yang dia bunuh demi menyelamatkannya dari perbudakan.",
    takeaways: ["Trauma Sejarah Perbudakan yang Mewujud.", "Dilema Keibuan di Bawah Penindasan Sistemik.", "Memori Kolektif dan Pemulihan Jiwa."],
    context: "Mahakarya pemenang Pulitzer tentang warisan perbudakan."
  },
  {
    title: "Song of Solomon", author: "Toni Morrison", year: 1977, pages: 337, type: "fiction",
    desc: "Perjalanan Milkman Dead menelusuri asal-usul keluarganya dari Utara ke Selatan Amerika, menemukan akar identitas dan mitos penerbangan.",
    takeaways: ["Pencarian Identitas dan Akar Keluarga.", "Mitos Terbang sebagai Pembebasan Fisik dan Spiritual.", "Kritik Materialisme Hitam."],
    context: "Epik pencarian identitas dan sejarah Afro-Amerika."
  },
  {
    title: "Pedro Páramo", author: "Juan Rulfo", year: 1955, pages: 128, type: "fiction",
    desc: "Juan Preciado mencari ayahnya di kota hantu Comala yang dihuni oleh bisikan-bisikan arwah orang mati. Karya cikal bakal realisme magis.",
    takeaways: ["Kota Hantu Comala sebagai Ruang Arwah.", "Kekuasaan Koruptif Caciq (Pedro Páramo).", "Peleburan Waktu dan Batas Kematian."],
    context: "Karya paling ringkas dan berpengaruh yang menginspirasi Márquez."
  },

  // 31-40: Kafka, Bulgakov & German Literature
  {
    title: "The Trial", author: "Franz Kafka", year: 1925, pages: 255, type: "fiction",
    desc: "Josef K. ditangkap tanpa tahu kejahatannya dan tidak pernah bisa menghadapi penuduhnya. Alienasi birokrasi dan ketidakberdayaan individu.",
    takeaways: ["Kafkaesque: Birokrasi absurd yang tak tersentuh.", "Rasa Bersalah Tanpa Kejahatan Jelas.", "Hukum sebagai Konstruksi Tak Terjangkau."],
    context: "Dramatisasi paling tajam tentang alienasi manusia modern."
  },
  {
    title: "The Metamorphosis", author: "Franz Kafka", year: 1915, pages: 70, type: "fiction",
    desc: "Gregor Samsa bangun dan mendapati dirinya berubah menjadi serangga raksasa. Menelanjangi hubungan keluarga berbasis utilitas ekonomi.",
    takeaways: ["Manusia Dihargai Sejauh Utilitas Ekonomisnya.", "Reaksi Keluarga: Dari Kasihan ke Kejijikan.", "Alienasi Tubuh dan Pekerjaan."],
    context: "Novella eksistensial paling terkenal dalam sastra modern."
  },
  {
    title: "The Castle", author: "Franz Kafka", year: 1926, pages: 352, type: "fiction",
    desc: "K. berusaha mengakses otoritas misterius di Istana yang mengontrol desa, namun terus menerus dihalangi oleh birokrasi licin.",
    takeaways: ["Usaha Tak Berujung Mengakses Otoritas.", "Labirin Birokrasi dan Ilusi Tujuan.", "Ketidakpastian Status Individu dalam Sistem."],
    context: "Eksplorasi Kafka tentang kerinduan akan kepastian yang tak pernah datang."
  },
  {
    title: "The Master and Margarita", author: "Mikhail Bulgakov", year: 1967, pages: 384, type: "fiction",
    desc: "Iblis (Woland) mengunjungi Moscow Stalinis dan mengekspos kemunafikan birokrasi Soviet lewat satire supernatural dan kisah Pontius Pilatus.",
    takeaways: ["Manuscripts Don't Burn: Keabadian Seni Murni.", "Kritik Totalitarianism lewat Absurditas.", "Penakut Adalah Dosa Terbesar."],
    context: "Satire supernatural Soviet paling brilian abad ke-20."
  },
  {
    title: "Doctor Zhivago", author: "Boris Pasternak", year: 1957, pages: 592, type: "fiction",
    desc: "Dokter dan penyair Yuri Zhivago menavigasi Perang Dunia I, Revolusi Rusia, dan Perang Saudara di tengah cinta tragisnya pada Lara.",
    takeaways: ["Individu dan Jiwa Seni di Tengah Badai Revolusi.", "Tragedi Kemanusiaan dalam Perang Politik.", "Puisi Zhivago sebagai Pembelaan Jiwa."],
    context: "Novel pemenang Nobel yang dilarang di Uni Soviet selama puluhan tahun."
  },
  {
    title: "The Gulag Archipelago", author: "Aleksandr Solzhenitsyn", year: 1973, pages: 1400, type: "non-fiction",
    desc: "Investigasi naratif monumental tentang sistem kamp kerja paksa (Gulag) di Uni Soviet berdasarkan riset dan pengalaman pribadi.",
    takeaways: ["Sistem Teror Birokratis Kamp Kerja Paksa.", "Garis Antara Baik dan Jahat Ada di Setiap Hati Manusia.", "Kebenaran Saksi Mata Menghancurkan Mitos Rezim."],
    context: "Dokumen non-fiksi yang membongkar ilusi totalitarianisme Soviet ke mata dunia."
  },
  {
    title: "One Day in the Life of Ivan Denisovich", author: "Aleksandr Solzhenitsyn", year: 1962, pages: 144, type: "fiction",
    desc: "Satu hari dalam kehidupan tahanan Ivan Denisovich Shukhov di kamp Gulag Siberia. Menunjukkan perjuangan menjaga martabat manusiawi.",
    takeaways: ["Kemenangan Kecil Bertahan Hidup di Kamp Siberia.", "Martabat Manusiawi dalam Situasi Ekstrem.", "Kritik Sistemik lewat Detail Keseharian."],
    context: "Karya pertama yang membuka mata publik Soviet tentang kamp Gulag."
  },
  {
    title: "Buddenbrooks", author: "Thomas Mann", year: 1901, pages: 736, type: "fiction",
    desc: "Kemunduran empat generasi keluarga pedagang kaya di Lübeck. Penurunan vitalitas bisnis seiring meningkatnya kepekaan seni dan kelemahan fisik.",
    takeaways: ["Konflik Antara Vitalitas Bisnis dan Sensitivitas Seni.", "Kemunduran Bertahap Keluarga Borjuis.", "Dinamika Generasi dan Perubahan Abad."],
    context: "Novel perdana Thomas Mann yang membawanya meraih Nobel."
  },
  {
    title: "The Magic Mountain", author: "Thomas Mann", year: 1924, pages: 720, type: "fiction",
    desc: "Hans Castorp mengunjungi sanatorium di Pegunungan Alpen dan menetap 7 tahun. Sanatorium sebagai mikrokosmos Eropa pra-Perang Dunia I.",
    takeaways: ["Sanatorium sebagai Mikrokosmos Ideologi Eropa.", "Perdebatan Humanisme vs Totalitarianisme (Settembrini vs Naphta).", "Waktu dan Penyakit sebagai Metamorfosis Jiwa."],
    context: "Novel ide-ide terpenting Eropa abad ke-20."
  },
  {
    title: "Death in Venice", author: "Thomas Mann", year: 1912, pages: 112, type: "fiction",
    desc: "Penulis senior Gustav von Aschenbach mengalami kemerosotan disiplin moral dan estetika akibat obsesinya pada seorang remaja pria di Venesia yang terserang kolera.",
    takeaways: ["Konflik Disiplin Apollonian vs Hasrat Dionysian.", "Keindahan, Ketakutan, dan Penyakit.", "Kemerosotan Seniman di Akhir Hayat."],
    context: "Novella estetika dan psikologis paling dipuji Thomas Mann."
  },

  // 41-50: American Modernism, Existentialism & McCarthy
  {
    title: "The Sound and the Fury", author: "William Faulkner", year: 1929, pages: 326, type: "fiction",
    desc: "Kemunduran keluarga bangsawan Compson di Selatan Amerika, diceritakan dari empat perspektif berbeda termasuk penderita disabilitas mental Benjy.",
    takeaways: ["Stream of Consciousness dengan Perspektif Ganda.", "Kemunduran Nilai Selatan Amerika Pasca-Perang Saudara.", "Waktu sebagai Beban dan Penjara Jiwa."],
    context: "Eksperimentasi teknik narasi paling berani dalam sastra Amerika."
  },
  {
    title: "As I Lay Dying", author: "William Faulkner", year: 1930, pages: 267, type: "fiction",
    desc: "Keluarga Bundren membawa jenazah sang ibu (Addie) menyeberangi sungai dan badai untuk dimakamkan. Diceritakan lewat 15 narator bergiliran.",
    takeaways: ["Multi-perspektif Narasi Keluarga Miskin Selatan.", "Absurditas dan Keteguhan Perjalanan Pemakaman.", "Pikir vs Kata dalam Pengalaman Manusia."],
    context: "Studi narasi eksperimental tentang kesedihan dan motif keluarga."
  },
  {
    title: "Absalom, Absalom!", author: "William Faulkner", year: 1936, pages: 384, type: "fiction",
    desc: "Kisah ambisi Thomas Sutpen membangun dinasti di Selatan Amerika yang hancur akibat rasisme, perang, dan rahasia keluarga.",
    takeaways: ["Tragedi Dosa Rasisme dalam Dinasti Keluarga.", "Ketidakmungkinan Rekonstruksi Sejarah yang Utuh.", "Mitos Selatan Amerika yang Tragis."],
    context: "Novel terbaik Faulkner tentang warisan kelam rasisme Selatan."
  },
  {
    title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939, pages: 464, type: "fiction",
    desc: "Keluarga Joad migrasi dari Dust Bowl Oklahoma ke California saat Great Depression, menghadapi eksploitasi dan ketidakadilan ekonomi.",
    takeaways: ["Dignitas Buruh Tani di Tengah Great Depression.", "Transformasi dari Egoisme Keluarga ke Solidaritas Kolektif.", "Kritik Kapitalisme Pertanian."],
    context: "Novel protest sosial Amerika paling legendaris."
  },
  {
    title: "East of Eden", author: "John Steinbeck", year: 1952, pages: 601, type: "fiction",
    desc: "Epik dua keluarga (Trask dan Hamilton) di Salinas Valley yang mendaur ulang kisah Kain dan Habel. Tema utama: Timshel (engkau boleh memilih).",
    takeaways: ["Timshel: Manusia Punya Kehendak Bebas Memilih Kebaikan.", "Pengulangan Mitos Kain dan Habel Lintas Generasi.", "Dualitas Kebaikan dan Kejahatan dalam Diri."],
    context: "Magnum opus Steinbeck tentang moralitas dan kehendak bebas."
  },
  {
    title: "Catch-22", author: "Joseph Heller", year: 1961, pages: 453, type: "fiction",
    desc: "Kapt. Yossarian mencoba keluar dari tugas penerbangan Perang Dunia II, namun terperangkap aturan birokrasi absurd 'Catch-22.'",
    takeaways: ["Catch-22: Logika Muter Birokrasi yang Tak Terlawan.", "Absurditas Perang dan Militerisme.", "Kegilaan sebagai Satu-satunya Respons Rasional."],
    context: "Satire perang paling terkenal dalam bahasa Inggris."
  },
  {
    title: "Slaughterhouse-Five", author: "Kurt Vonnegut", year: 1969, pages: 275, type: "fiction",
    desc: "Billy Pilgrim mengalami pengeboman Dresden dan terlepas dari dimensi waktu (unbound in time) bersama alien Tralfamadore. 'So it goes.'",
    takeaways: ["So It Goes: Kepasrahan Tragis terhadap Kematian.", "Trauma Pengeboman Dresden yang Diacak Waktu.", "Kritik Perang lewat Satire Sci-Fi."],
    context: "Novel anti-perang sci-fi paling unik abad ke-20."
  },
  {
    title: "Blood Meridian", author: "Cormac McCarthy", year: 1985, pages: 337, type: "fiction",
    desc: "Perjalanan Glanton Gang membantai penduduk asli di perbatasan US-Meksiko. Tokoh Judge Holden sebagai personifikasi perang yang abadi.",
    takeaways: ["War is God: Perang sebagai Elemen Primal Keberadaan.", "Kekejaman Tanpa Filter di Frontier Amerika.", "Prosa Epik Alkitabiah Cormac McCarthy."],
    context: "Masterpiece sastra neo-western dan eksplorasi kekerasan primal."
  },
  {
    title: "The Road", author: "Cormac McCarthy", year: 2006, pages: 287, type: "fiction",
    desc: "Ayah dan anak berjalan menelusuri Amerika pasca-apokaliptik yang hancur dan dingin, menjaga 'api kemanusiaan' di tengah kanibalisme.",
    takeaways: ["Carrying the Fire: Menjaga Kemanusiaan di Dunia Hancur.", "Cinta Kasih Orang Tua dalam Kehampaan Mutlak.", "Prosa Minimalis dan Gelap."],
    context: "Novel post-apocalyptic paling menyentuh dan puitis."
  },
  {
    title: "Lolita", author: "Vladimir Nabokov", year: 1955, pages: 336, type: "fiction",
    desc: "Humbert Humbert menceritakan obsesi terlarangnya pada Dolores Haze (Lolita). Pencapaian bahasa Inggris luar biasa oleh penulis Rusia.",
    takeaways: ["Keindahan Prosa vs Kekejaman Subjek.", "Unreliable Narrator yang Memikat dan Menyesatkan.", "Eksploitasi Estetika terhadap Manusia Real."],
    context: "Puncak keahlian gaya bahasa Inggris dalam sastra dunia."
  },

  // 51-60: French Existentialism, European Classics & Gothic
  {
    title: "Pale Fire", author: "Vladimir Nabokov", year: 1962, pages: 304, type: "fiction",
    desc: "Puisi 999 baris oleh John Shade dengan catatan kaki obsesif-gila oleh Charles Kinbote yang membajak arti puisi demi narsisisme narasinya.",
    takeaways: [
      "Struktur Pembajakan Teks lewat Catatan Kaki.",
      "Solipsisme dan Ilusi Pembacaan Seni.",
      "Eksperimentasi Bentuk Sastra Pasca-Modern."
    ],
    context: "Salah satu novel metafiksi paling jenius yang pernah ditulis."
  },
  {
    title: "Invisible Man", author: "Ralph Ellison", year: 1952, pages: 581, type: "fiction",
    desc: "Pria kulit hitam anonim menelusuri ketidakjarakan dirinya di mata masyarakat Amerika yang menolak melihatnya sebagai individu utuh.",
    takeaways: [
      "Ketidakjarakan Sosial (Invisibility) Rasial.",
      "Kritik terhadap Kanan Ideologis maupun Kiri Ideologis.",
      "Pencarian Autentisitas Individu Afro-Amerika."
    ],
    context: "Novel paling seminal tentang eksistensi rasial di Amerika."
  },
  {
    title: "The Stranger", author: "Albert Camus", year: 1942, pages: 123, type: "fiction",
    desc: "Meursault membunuh seorang pria Arab di pantai Aljazair tanpa alasan jelas. Dihukum mati bukan karena pembunuhan, tapi karena tidak menangis di pemakaman ibunya.",
    takeaways: [
      "Absurditas Hukum dan Norma Sosial.",
      "Kejujuran Radikal Meursault menolak berpura-pura emosi.",
      "Konfrontasi Absurditas Semesta menjelang Eksekusi."
    ],
    context: "Karya fiksi utama yang memperkenalkan Absurdisme Camus."
  },
  {
    title: "The Plague", author: "Albert Camus", year: 1947, pages: 308, type: "fiction",
    desc: "Wabah menimpa Oran. Dr. Rieux merespons penderitaan dengan perlawanan tanpa ilusi (Lucid Resistance) dan solidaritas kemanusiaan.",
    takeaways: [
      "Lucid Resistance: Perlawanan tanpa ilusi kemenangan.",
      "Solidaritas Kemanusiaan di Tengah Absurditas.",
      "Alegori Perlawanan terhadap Pendudukan Fasisme."
    ],
    context: "Novel eksistensial tentang solidaritas dan integritas moral."
  },
  {
    title: "The Fall", author: "Albert Camus", year: 1956, pages: 147, type: "fiction",
    desc: "Mantan pengacara Jean-Baptiste Clamence berpidato di bar Amsterdam, membongkar kepalsuan moralitas dirinya sendiri dan seluruh manusia.",
    takeaways: [
      "Judge-Penitent: Mengadili diri sendiri agar bisa mengadili orang lain.",
      "Pembongkaran Egoisme dan Kepalsuan Altrusime.",
      "Kejatuhan Moral Tanpa Penebusan."
    ],
    context: "Monolog eksplorasi moralitas paling tajam dan sinis Camus."
  },
  {
    title: "Nausea", author: "Jean-Paul Sartre", year: 1938, pages: 178, type: "fiction",
    desc: "Antoine Roquentin mengalami rasa mual (Nausea) saat menyadari keberadaan benda-benda sekitar yang kontingensi murni tanpa alasan.",
    takeaways: [
      "Existence Precedes Essence: Keberadaan mendahului makna.",
      "Kontingensi Murni Realitas Fisik.",
      "Bad Faith: Pembongkaran penipuan diri sosial."
    ],
    context: "Novel manifes utama eksistensialisme ateistik Sartre."
  },
  {
    title: "Steppenwolf", author: "Hermann Hesse", year: 1927, pages: 237, type: "fiction",
    desc: "Harry Haller merasa dirinya terbagi dua: manusia borjuis rasional dan serigala steppa yang liar. Krisis identitas di Jerman antar-perang.",
    takeaways: [
      "Dualitas Jiwa Manusia vs Serigala.",
      "Magic Theater: Rekonsiliasi Banyak Sisi Kepribadian.",
      "Humor dan Ketawa sebagai Antidote Despair."
    ],
    context: "Novel krisis identitas dan integrasi psikologis Hesse."
  },
  {
    title: "Siddhartha", author: "Hermann Hesse", year: 1922, pages: 152, type: "fiction",
    desc: "Perjalanan pemuda India Siddhartha mencari pencerahan spiritual melalui ajaran, kenikmatan duniawi, sampai kesederhanaan tepi sungai.",
    takeaways: [
      "Pencerahan Tidak Bisa Diajarkan, Harus Dialami.",
      "Siklus Pertapaan, Kekayaan, dan Penemuan Diri.",
      "Sungai sebagai Simbol Kesatuan dan Kebijaksanaan Waktu."
    ],
    context: "Kisah pencarian kebijaksanaan spiritual timur paling populer di Barat."
  },
  {
    title: "Frankenstein", author: "Mary Shelley", year: 1818, pages: 280, type: "fiction",
    desc: "Victor Frankenstein menciptakan makhluk hidup dari mayat. Tragedi penolakan pencipta terhadap ciptaannya dan bahaya sains tanpa etika.",
    takeaways: [
      "Bahaya Sains Tanpa Tanggung Jawab Moral.",
      "Tragedi Penolakan dan Kebutuhan akan Empati.",
      "Makhluk Monster sebagai Korban Penelantaran Sosial."
    ],
    context: "Pionir novel science fiction dan gothic modern."
  },
  {
    title: "Wuthering Heights", author: "Emily Brontë", year: 1847, pages: 416, type: "fiction",
    desc: "Cinta obsesif dan merusak antara Heathcliff dan Catherine Earnshaw di padang moor Yorkshire yang memicu dendam lintas generasi.",
    takeaways: [
      "Cinta Obsesif sebagai Kekuatan Destruktif.",
      "Dendam Lintas Generasi dan Keterasingan Sosial.",
      "Atmfer Gothic Padang Moor Yorkshire."
    ],
    context: "Mahakarya sastra Victorian berpola emosi liar dan gothic."
  },

  // 61-70: Victorian & French Realism
  {
    title: "Jane Eyre", author: "Charlotte Brontë", year: 1847, pages: 500, type: "fiction",
    desc: "Gadis yatim piatu Jane Eyre mempertahankan kemandirian moral dan spiritualnya saat bekerja di Thornfield Hall dan mencintai Mr. Rochester.",
    takeaways: [
      "Kemandirian Moral dan Integritas Wanita.",
      "Rahasia Kelam Thornfield Hall (Bertha Mason).",
      "Kesetaraan Jiwa di Atas Status Sosial."
    ],
    context: "Pionir novel kesadaran individual dan feminisme Victorian."
  },
  {
    title: "Pride and Prejudice", author: "Jane Austen", year: 1813, pages: 279, type: "fiction",
    desc: "Elizabeth Bennet dan Mr. Darcy mengatasi prasangka kelas dan kebanggaan pribadi di tengah tekanan sosial pernikahan Inggris abad ke-19.",
    takeaways: [
      "Prasangka First Impression vs Karakter Sebenarnya.",
      "Ekonomi Pernikahan dan Kebebasan Wanita.",
      "Wit dan Satire Sosial Jane Austen."
    ],
    context: "Komedi karakter dan satire sosial Inggris paling dicintai."
  },
  {
    title: "Emma", author: "Jane Austen", year: 1815, pages: 474, type: "fiction",
    desc: "Emma Woodhouse yang kaya dan merasa pintar suka menjodohkan orang lain, sampai kesalahan persepsinya membuka matanya pada hatinya sendiri.",
    takeaways: [
      "Bahaya Ketertutupan Persepsi dan Kepercayaan Diri Berlebih.",
      "Perkembangan Kematangan Emosional Emma.",
      "Kritik Halus Dinamika Komunitas Pedesaan."
    ],
    context: "Puncak keahlian konstruksi plot dan pengembangan karakter Austen."
  },
  {
    title: "Great Expectations", author: "Charles Dickens", year: 1861, pages: 544, type: "fiction",
    desc: "Anak yatim Pip mendapat kekayaan misterius yang mengubah sikapnya, sebelum menyadari sumber kekayaannya dan arti sejati martabat manusia.",
    takeaways: [
      "Kepalsuan Kelas Gentility vs Nilai Kemanusiaan Sejati.",
      "Penebusan Pip dari Kesombongan Sosial.",
      "Karakter Ikonik Miss Havisham dan Magwitch."
    ],
    context: "Salah satu novel Bildungsroman paling sempurna Dickens."
  },
  {
    title: "Bleak House", author: "Charles Dickens", year: 1853, pages: 1012, type: "fiction",
    desc: "Kasus hukum Jarndyce v Jarndyce yang menyeret bertahun-tahun di pengadilan Chancery, menghancurkan hidup siapapun yang terlibat.",
    takeaways: [
      "Kritik Tajam Sistem Pengadilan dan Birokrasi Hukum.",
      "Metafora Kabut London sebagai Kebutaan Sistemik.",
      "Studi Karakter Lintas Lapisan Masyarakat."
    ],
    context: "Kritik institusional Dickens yang paling tajam dan kompleks."
  },
  {
    title: "David Copperfield", author: "Charles Dickens", year: 1850, pages: 882, type: "fiction",
    desc: "Novel paling otobiografis Dickens yang mengikuti perjalanan David dari masa kecil penuh penderitaan menjadi penulis sukses.",
    takeaways: [
      "Perjuangan Menghadapi Kemiskinan dan Kerja Anak.",
      "Karakter-karakter Ikonik (Mr. Micawber, Uriah Heep).",
      "Kematangan Jiwa Lewat Ketekunan."
    ],
    context: "Novel favorit Dickens sendiri yang kaya akan pengalaman personal."
  },
  {
    title: "Madame Bovary", author: "Gustave Flaubert", year: 1856, pages: 329, type: "fiction",
    desc: "Emma Bovary bosan dengan kehidupan desa dan suaminya yang biasa, melarikan diri ke perselingkuhan dan utang demi mengejar impian romantis novel.",
    takeaways: [
      "Bovarysm: Bahaya Ilusi Romantis yang Tak Realistis.",
      "Realisme Tajam tanpa Pengadilan Moral Penulis.",
      "Le Mot Juste: Keberhasilan Gaya Bahasa Flaubert."
    ],
    context: "Karya pembuka realisme modern yang mengubah standar fiksi."
  },
  {
    title: "Les Misérables", author: "Victor Hugo", year: 1862, pages: 1462, type: "fiction",
    desc: "Mantan narapidana Jean Valjean mencari penebusan dosa di Prancis abad ke-19, dikejar tanpa ampun oleh Inspektur Javert di tengah pergolakan sosial.",
    takeaways: [
      "Penebusan Kasih vs Keadilan Hukum Kaku (Valjean vs Javert).",
      "Kritik Kemiskinan dan Ketidakadilan Sosial Prancis.",
      "Semangat Perlawanan Barikade 1832."
    ],
    context: "Epik kemanusiaan dan keadilan sosial Prancis terbesar."
  },
  {
    title: "The Count of Monte Cristo", author: "Alexandre Dumas", year: 1844, pages: 1276, type: "fiction",
    desc: "Edmond Dantès difitnah dan dipenjara 14 tahun di Château d'If. Setelah lolos dan kaya, ia menyusun pembalasan dendam metodis kepada musuh-musuhnya.",
    takeaways: [
      "Pembalasan Dendam Metodis dan Batas Keadilan Manusia.",
      "Ketahanan Mental di Penjara dan Perencanaan Jangka Panjang.",
      "Kesadaran bahwa Keadilan Hakiki milik Tuhan."
    ],
    context: "Petualangan balas dendam paling epik dalam sastra populer klasik."
  },
  {
    title: "A Tale of Two Cities", author: "Charles Dickens", year: 1859, pages: 341, type: "fiction",
    desc: "Setting London dan Paris saat Revolusi Prancis. Pengorbanan Sydney Carton di tiang guillotine demi wanita yang dicintainya.",
    takeaways: [
      "It was the best of times, it was the worst of times.",
      "Bahaya Teror Revolusi yang Membalas Kekejaman Lama.",
      "Pengorbanan Diri Tertinggi demi Kasih."
    ],
    context: "Novel sejarah paling dramatis Dickens tentang Revolusi Prancis."
  },

  // 71-80: Enlightenment, Poetic Epics & Asian Classics
  {
    title: "Candide", author: "Voltaire", year: 1759, pages: 120, type: "fiction",
    desc: "Satire kocak membanting doktrin optimisme Leibniz ('semua terbaik di dunia terbaik'). Candide mengalami berbagai bencana dunia sebelum memutuskan 'menanam kebun sendiri.'",
    takeaways: [
      "Pembongkaran Optimisme Filosofis Panglossian.",
      "Ilusi Teologis di Hadapan Bencana Alam dan Perang.",
      "Il Faut Cultiver Notre Jardin: Fokus pada kerja nyata yang pragmatis."
    ],
    context: "Satire Pencerahan Prancis paling tajam terhadap filosofi abstrak."
  },
  {
    title: "The Divine Comedy", author: "Dante Alighieri", year: 1320, pages: 798, type: "fiction",
    desc: "Perjalanan spiritual Dante menembus Neraka (Inferno), Api Penyucian (Purgatorio), dan Surga (Paradiso) dibimbing oleh Virgil dan Beatrice.",
    takeaways: [
      "Struktur Moral Kosmik Peradaban Abad Pertengahan.",
      "Inferno: Hukum Pembalasan Setimpal (Contrapasso).",
      "Perjalanan Jiwa dari Kehilangan menuju Pencerahan Kasih."
    ],
    context: "Puncak puisi teologis dan filosofis Italia Abad Pertengahan."
  },
  {
    title: "Paradise Lost", author: "John Milton", year: 1667, pages: 453, type: "fiction",
    desc: "Epik puisi Inggris tentang pemberontakan Lucifer di Surga dan kejatuhan Adam dan Hawa dari Taman Eden. 'Better to reign in Hell than serve in Heaven.'",
    takeaways: [
      "Psikologi Pembebasan dan Kesombongan Lucifer.",
      "Kehendak Bebas Manusia dan Pertanggungjawaban Moral.",
      "Justifikasi Jalan Tuhan kepada Manusia."
    ],
    context: "Epik puisi teologis terbesar dalam bahasa Inggris."
  },
  {
    title: "The Canterbury Tales", author: "Geoffrey Chaucer", year: 1400, pages: 504, type: "fiction",
    desc: "Kumpulan cerita oleh rombongan peziarah dari berbagai lapisan masyarakat Inggris Abad Pertengahan menuju Katedral Canterbury.",
    takeaways: [
      "Potret Sosiologis Komprehensif Inggris Abad Pertengahan.",
      "Humor, Wit, dan Satire Kelas Agama dan Ksatria.",
      "Cikal Bakal Penggunaan Bahasa Inggris Modern (Middle English)."
    ],
    context: "Foundational text sastra Inggris dan sosiologi Abad Pertengahan."
  },
  {
    title: "Faust", author: "Johann Wolfgang von Goethe", year: 1808, pages: 464, type: "fiction",
    desc: "Dr. Faust menjual jiwanya kepada Iblis Mephistopheles demi pengetahuan mutlak dan pengalaman hidup tak terbatas.",
    takeaways: [
      "Perjanjian Faustian: Jiwa demi Pengetahuan/Kenikmatan.",
      "Dilema Manusia Modern yang Tak Pernah Puas (Streben).",
      "Penebusan Lewat Usaha Pencarian Tanpa Henti."
    ],
    context: "Mahakarya terbesar sastra Jerman tentang pencarian manusia modern."
  },
  {
    title: "The Sorrows of Young Werther", author: "Johann Wolfgang von Goethe", year: 1774, pages: 160, type: "fiction",
    desc: "Novel epistolari tentang keputusasaan Werther akibat cintanya yang tak terbalas pada Lotte, memicu gerakan Sturm und Drang di Eropa.",
    takeaways: [
      "Emosionalisme Radikal Sturm und Drang.",
      "Bahaya Sensitivitas Jiwa yang Tak Terkendali.",
      "Dampak Fenomena Budaya 'Werther Fever' di Eropa."
    ],
    context: "Novel romantis Jerman yang memicu gelombang budaya emosionalisme."
  },
  {
    title: "The Tale of Genji", author: "Murasaki Shikibu", year: 1010, pages: 1182, type: "fiction",
    desc: "Novel pertama di dunia. Merekam kehidupan istana Heian Jepang, intrik politik, dan estetika Mono no Aware (keindahan kesedihan ketidakabadian).",
    takeaways: [
      "Mono no Aware: Kepekaan Estetika pada Ketidakabadian.",
      "Kehidupan dan Intrik Istana Jepang Heian.",
      "Cikal Bakal Novel Panjang Pertama dalam Sejarah Dunia."
    ],
    context: "Novel pertama dalam sejarah peradaban manusia dari Jepang abad ke-11."
  },
  {
    title: "Dream of the Red Chamber", author: "Cao Xueqin", year: 1791, pages: 2339, type: "fiction",
    desc: "Kemunduran keluarga bangsawan Jia di Dinasti Qing. Mahakarya sastra Tiongkok yang menggabungkan rincian budaya dengan pandangan Taois/Buddhis.",
    takeaways: [
      "Kemunduran Peradaban dan Keluarga Bangsawan Tiongkok.",
      "Pandangan Illusory Dunia (Emptiness vs Form).",
      "Studi Sosiologi Budaya Dinasti Qing."
    ],
    context: "Puncak pencapaian 4 Mahakarya Klasik Tiongkok."
  },
  {
    title: "Journey to the West", author: "Wu Cheng'en", year: 1592, pages: 2340, type: "fiction",
    desc: "Perjalanan biksu Xuanzang bersama Sun Wukong (Kera Sakti) ke India mencari kitab suci. Alegori spiritual perjalanan menuju pencerahan.",
    takeaways: [
      "Alegori Empat Elemen Jiwa Manusia.",
      "Sun Wukong sebagai Pikiran Liar yang Harus Diteskann.",
      "Sintesis Mitologi Buddhis, Taois, dan Rakyat Tiongkok."
    ],
    context: "Epik petualangan alegoris paling populer di Asia Timur."
  },
  {
    title: "Romance of the Three Kingdoms", author: "Luo Guanzhong", year: 1368, pages: 2340, type: "fiction",
    desc: "Epik sejarah persaingan 3 kerajaan (Wei, Shu, Wu) pasca-Dinasti Han. Pelajaran strategi perang, diplomasi, dan kesetiaan.",
    takeaways: [
      "Trik Strategi Militer dan Diplomasi (Zhuge Liang).",
      "Konsep Kesetiaan dan Ambisi Politik Tiongkok Klasik.",
      "Dunia yang Bersatu Akan Terpecah, Yang Terpecah Akan Bersatu."
    ],
    context: "Manual strategi politik dan militer paling legendaris dalam sastra Tiongkok."
  },

  // 81-90: Ancient Wisdom, Epics & Greek Philosophy
  {
    title: "The Epic of Gilgamesh", author: "Anonim", year: -2100, pages: 120, type: "fiction",
    desc: "Epik tertua peradaban Mesopotamia. Raja Gilgamesh mencari keabadian pasca kematian sahabatnya Enkidu, hanya untuk menyadari mortalitas manusia.",
    takeaways: [
      "Pencarian Keabadian vs Penerimaan Mortalitas.",
      "Persahabatan Gilgamesh & Enkidu.",
      "Mitos Air Bah Tertua dalam Peradaban Manusia."
    ],
    context: "Karya sastra tertua yang tercatat dalam sejarah peradaban."
  },
  {
    title: "The Analects", author: "Confucius", year: -475, pages: 160, type: "non-fiction",
    desc: "Kumpulan aforisme dan dialog Confucius tentang etika (Ren), ritual (Li), kepemimpinan bijak (Junzi), dan keharmonisan sosial.",
    takeaways: [
      "Ren & Li: Kemanusiaan dan Kesopanan Ritual.",
      "Junzi: Manusia Unggul Berintegritas.",
      "Keharmonisan Sosial lewat Penghormatan Keluarga."
    ],
    context: "Fondasi etika dan tata sosial peradaban Tiongkok dan Asia Timur."
  },
  {
    title: "Tao Te Ching", author: "Laozi", year: -400, pages: 160, type: "non-fiction",
    desc: "81 bait filosofis tentang Tao (Jalan Alam) dan Wu Wei (Tindakan Tanpa Memaksa). Fondasi filsafat Taoisme.",
    takeaways: [
      "Wu Wei: Bertindak Selaras dengan Arus Alam.",
      "Dualitas Yin & Yang.",
      "Kekuatan dalam Kesederhanaan dan Kelembutan Air."
    ],
    context: "Teks filsafat metafisika dan kepemimpinan alamiah paling berpengaruh."
  },
  {
    title: "The Bhagavad Gita", author: "Anonim", year: -200, pages: 120, type: "non-fiction",
    desc: "Dialog di medan perang Kurukshetra antara ksatria Arjuna dan Krishna tentang kewajiban (Dharma), aksi tanpa terikat hasil (Nishkama Karma).",
    takeaways: [
      "Nishkama Karma: Bertindak Tanpa Terikat pada Hasil.",
      "Dharma: Menjalankan Kewajiban Hidup.",
      "Perspektif Spiritual Jiwa yang Tak Terhancurkan (Atman)."
    ],
    context: "Puncak distilasi filsafat dan spiritualitas Hindu klasik."
  },
  {
    title: "The Mahabharata (Abridged)", author: "Vyasa", year: -400, pages: 800, type: "fiction",
    desc: "Epik raksasa konflik Pandawa dan Kurawa. Eksplorasi kompleksitas moralitas, politik, tugas hidup, dan takdir.",
    takeaways: [
      "Kompleksitas Moralitas: Tidak Ada Karakter Hitam-Putih Murni.",
      "Hukum Karma dan Takdir Peradaban.",
      "Perang Kurukshetra sebagai Alegori Ujian Hidup."
    ],
    context: "Epik terpanjang dalam sejarah dunia dari peradaban India."
  },
  {
    title: "The Ramayana (Abridged)", author: "Valmiki", year: -500, pages: 600, type: "fiction",
    desc: "Perjalanan Pangeran Rama menyelamatkan istrinya Sita dari raja raksasa Ravana. Epik tentang kebajikan, kesetiaan, dan pengorbanan.",
    takeaways: [
      "Rama sebagai Personifikasi Kebajikan Ideal.",
      "Kesetiaan Sita dan Hanuman.",
      "Kemenangan Kebaikan (Dharma) atas Kejahatan (Adharma)."
    ],
    context: "Epik fondasi nilai etika dan budaya masyarakat India dan Asia Tenggara."
  },
  {
    title: "Meditations", author: "Marcus Aurelius", year: 180, pages: 256, type: "non-fiction",
    desc: "Catatan pribadi Kaisar Roma tentang Stoikisme praktis: dikotomi kendali, memento mori, dan ketenangan diri di tengah kekuasaan.",
    takeaways: [
      "Dikotomi Kendali: Fokus hanya pada apa yang di bawah kendali.",
      "Memento Mori: Kematian sebagai pengingat kebajikan.",
      "Ketenangan Diri di Tengah Beban Negara."
    ],
    context: "Buku filsafat Stoikisme praktis paling populer sepanjang masa."
  },
  {
    title: "The Republic", author: "Plato", year: -375, pages: 416, type: "non-fiction",
    desc: "Dialog Sokratik tentang keadilan, tatanan negara ideal (Philosopher-King), dan Alegori Gua tentang batas persepsi manusia.",
    takeaways: [
      "Metode Sokratik: Membongkar Asumsi lewat Pertanyaan.",
      "Alegori Gua: Bayangan Persepsi vs Kebenaran Hakiki.",
      "Struktur Negara Ideal dan Keadilan Jiwa."
    ],
    context: "Starting point filsafat politik dan epistemologi Barat."
  },
  {
    title: "The Symposium", author: "Plato", year: -385, pages: 112, type: "non-fiction",
    desc: "Serangkaian pidato jamuan makan di Athena tentang hakikat Cinta (Eros), dari hasrat fisik hingga Tangga Cinta menuju Keindahan Abadi.",
    takeaways: [
      "Platonic Love: Tangga Cinta dari Fisik menuju Keindahan Bentuk.",
      "Mitos Manusia Androgynous Aristophanes.",
      "Pidato Socrates & Diotima tentang Filosofi Cinta."
    ],
    context: "Teks filosofis paling puitis Plato tentang hakikat cinta."
  },
  {
    title: "Nicomachean Ethics", author: "Aristotle", year: -350, pages: 352, type: "non-fiction",
    desc: "Penyelidikan Aristotle tentang kebahagiaan hakiki (Eudaimonia) dan bagaimana karakter baik dibentuk melalui kebajikan etis (Golden Mean).",
    takeaways: [
      "Eudaimonia: Kebahagiaan sebagai Tujuan Akhir Manusia.",
      "Golden Mean: Kebajikan adalah Titik Tengah Antara Dua Ekstrem.",
      "Habituasi: Karakter Baik Dibentuk lewat Latihan Rutin."
    ],
    context: "Foundational text etika kebajikan (virtue ethics) peradaban Barat."
  },

  // 91-100: Philosophy, Modern Epistemology & Political Theory
  {
    title: "Poetics", author: "Aristotle", year: -335, pages: 112, type: "non-fiction",
    desc: "Analisis ilmiah pertama tentang drama dan tragedi. Konsep Catharsis (pembersihan emosi) dan Hamartia (kesalahan fatal pahlawan).",
    takeaways: [
      "Catharsis: Pembersihan Emosi Takut dan Belas Kasih.",
      "Hamartia: Kesalahan Tragis Karakter Utama.",
      "Mimesis: Seni sebagai Peniruan Realitas yang Bermakna."
    ],
    context: "Buku teori sastra dan drama paling fundamental dalam sejarah."
  },
  {
    title: "Beyond Good and Evil", author: "Friedrich Nietzsche", year: 1886, pages: 240, type: "non-fiction",
    desc: "Kritik tajam Nietzsche terhadap prasangka filsuf tradisional. Menyerukan filosofi masa depan yang melampaui moralitas dogmatis.",
    takeaways: [
      "Kritik Prasangka Filsuf Tradisional.",
      "Will to Power sebagai Penggerak Realitas.",
      "Perspektivisme: Tidak Ada Kebenaran Tunggal Tanpa Lensa."
    ],
    context: "Dekonstruksi radikal Nietzsche terhadap dogmatisme filsafat Barat."
  },
  {
    title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", year: 1883, pages: 352, type: "non-fiction",
    desc: "Karya puitis-filosofis Nietzsche melalui narasi nabi Zarathustra. Konsep Übermensch, Kematian Tuhan, dan Eternal Recurrence.",
    takeaways: [
      "God is Dead: Kehilangan Fondasi Nilai Tradisional.",
      "Übermensch: Manusia yang Menciptakan Nilainya Sendiri.",
      "Eternal Recurrence: Ujian Cinta pada Takdir (Amor Fati)."
    ],
    context: "Karya paling ikonik dan eksperimental Nietzsche."
  },
  {
    title: "On the Genealogy of Morals", author: "Friedrich Nietzsche", year: 1887, pages: 192, type: "non-fiction",
    desc: "Penelusuran sejarah moralitas 'Baik/Buruk' (Master-Slave Morality), psikologi Ressentiment, dan pembongkaran ideal-ideal askesis.",
    takeaways: [
      "Master vs Slave Morality.",
      "Ressentiment: Dengki Kolektif Pembalik Nilai.",
      "Dekonstruksi Sejarah Moralitas Abad Pertengahan."
    ],
    context: "Karya Nietzsche yang paling argumentatif dan terstruktur."
  },
  {
    title: "Fear and Trembling", author: "Søren Kierkegaard", year: 1843, pages: 160, type: "non-fiction",
    desc: "Eksplorasi pengorbanan Abraham: Teleological Suspension of the Ethical dan Leap of Faith sebagai batas rasionalisme murni.",
    takeaways: [
      "Teleological Suspension of the Ethical.",
      "Leap of Faith di Tengah Ketidakpastian.",
      "Knight of Faith vs Tragic Hero."
    ],
    context: "Fondasi eksistensialisme religius dan kritik rasionalisme."
  },
  {
    title: "Being and Time", author: "Martin Heidegger", year: 1927, pages: 589, type: "non-fiction",
    desc: "Penyelidikan ontology radikal tentang hakikat Keberadaan (Dasein), Being-in-the-world, dan kesadaran akan kematian (Being-towards-death).",
    takeaways: [
      "Dasein: Manusia sebagai Keberadaan di Dalam Dunia.",
      "Being-towards-death: Autentisitas Hidup Menghadapi Kematian.",
      "Temporality sebagai Dimensi Hakiki Keberadaan."
    ],
    context: "Karya metafisika dan fenomenologi paling berpengaruh abad ke-20."
  },
  {
    title: "The Myth of Sisyphus", author: "Albert Camus", year: 1942, pages: 160, type: "non-fiction",
    desc: "Formulasi filosofis Absurditas: konfrontasi antara pencarian makna manusia dan keheningan semesta. Sisyphus yang bahagia dalam perlawanan.",
    takeaways: [
      "Tiga Pilihan Hadapi Absurditas.",
      "Pemberontakan Eksistensial Tanpa Ilusi.",
      "One Must Imagine Sisyphus Happy."
    ],
    context: "Teks landasan utama filosofi Absurdisme Camus."
  },
  {
    title: "Man's Search for Meaning", author: "Viktor Frankl", year: 1946, pages: 184, type: "non-fiction",
    desc: "Psikiater survivalis Auschwitz menulis tentangLogotherapy: penderitaan manusia bisa ditanggung jika menemukan 'mengapa' (meaning).",
    takeaways: [
      "Dorongan Utama Manusia Adalah Pencarian Makna.",
      "Kebebasan Terakhir: Memilih Sikap terhadap Penderitaan.",
      "Logotherapy dalam Praktik Hidup."
    ],
    context: "Buku kesaksian psikiatri dan keabadian jiwa manusia."
  },
  {
    title: "The Denial of Death", author: "Ernest Becker", year: 1973, pages: 336, type: "non-fiction",
    desc: "Tesis bahwa seluruh kebudayaan manusia adalah 'Hero System' — ilusi kolektif yang dibangun untuk mengendalikan ketakutan akan kematian.",
    takeaways: [
      "Hero System: Kebudayaan sebagai Pertahanan terhadap Ketakutan Kematian.",
      "Dualitas Manusia: Pikiran Tak Terbatas dalam Tubuh Pembusuk.",
      "Karakter Armor dan Neurosis Modern."
    ],
    context: "Pemenang Pulitzer yang menggabungkan psikoanalisis dan sosiologi."
  },
  {
    title: "Leviathan", author: "Thomas Hobbes", year: 1651, pages: 600, type: "non-fiction",
    desc: "Argumen bahwa tanpa negara (State of Nature), hidup manusia adalah 'nasty, brutish, and short.' Negara sebagai monster Leviathan yang diperlukan.",
    takeaways: [
      "State of Nature: Perang Semua Lawan Semua.",
      "Social Contract: Penyerahan Hak demi Keamanan.",
      "Legitimasi Kekuasaan Berdasarkan Efektivitas Orde."
    ],
    context: "Foundational text filsafat politik modern dan teori kontrak sosial."
  },

  // 101-115: Economics, Science, Totalitarianism & History
  {
    title: "The Wealth of Nations", author: "Adam Smith", year: 1776, pages: 1152, type: "non-fiction",
    desc: "Foundational text ekonomi kapitalis modern: pembagian kerja, invisible hand, dan kritik terhadap merkantilisme.",
    takeaways: [
      "Division of Labor Meningkatkan Produktivitas.",
      "Invisible Hand dan Kepentingan Diri yang Produktif.",
      "Kritik Smith terhadap Monopoli dan Greed."
    ],
    context: "Buku fondasi ilmu ekonomi modern."
  },
  {
    title: "Capital", author: "Karl Marx", year: 1867, pages: 1152, type: "non-fiction",
    desc: "Kritik ekonomi politik komprehensif tentang dinamika kapitalisme, nilai lebih (surplus value), alienasi buruh, dan krisis kontradiksi internal.",
    takeaways: [
      "Surplus Value: Sumber Keuntungan dari Eksploitasi Buruh.",
      "Commodity Fetishism: Hubungan Sosial Tersembunyi di Balik Barang.",
      "Kontradiksi Internal Kapitalisme."
    ],
    context: "Karya analisis ekonomi terbesar gerakan sosialisme ilmiah."
  },
  {
    title: "The Communist Manifesto", author: "Marx & Engels", year: 1848, pages: 80, type: "non-fiction",
    desc: "Pamflet politik paling berpengaruh dalam sejarah. Sejarah adalah sejarah pertentangan kelas antara Bourgeoisie dan Proletariat.",
    takeaways: [
      "Sejarah sebagai Pertentangan Kelas.",
      "Materialisme Historis.",
      "Seruan Bersatunya Kaum Buruh Sedunia."
    ],
    context: "Pamflet politik paling legendaris abad ke-19."
  },
  {
    title: "On the Origin of Species", author: "Charles Darwin", year: 1859, pages: 502, type: "non-fiction",
    desc: "Buku yang mengubah sains selamanya: teori evolusi melalui seleksi alam (Natural Selection).",
    takeaways: [
      "Natural Selection: Keberlangsungan Yang Paling Adaptif.",
      "Descent with Modification dari Nenek Moyang Bersama.",
      "Perubahan Paradigma Biologi Dunia."
    ],
    context: "Buku sains paling transformatif dalam sejarah peradaban."
  },
  {
    title: "The Selfish Gene", author: "Richard Dawkins", year: 1976, pages: 360, type: "non-fiction",
    desc: "Pandangan evolusi berpusat pada gen. Pengenalan konsep Meme — unit replikasi informasi budaya.",
    takeaways: [
      "Gen sebagai Replikator Utama Organisme.",
      "Konsep Meme Budaya.",
      "Altruisme Timbal Balik secara Biologis."
    ],
    context: "Revolusi pemahaman evolusi dan pengenalan memetika."
  },
  {
    title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, pages: 256, type: "non-fiction",
    desc: "Pengantar populer kosmologi modern: Big Bang, Lubang Hitam, Relativitas, dan Kuantum.",
    takeaways: [
      "Teori Relativitas & Kuantum.",
      "Radiasi Hawking & Lubang Hitam.",
      "Pencarian Theory of Everything."
    ],
    context: "Buku kosmologi populer paling laris sepanjang masa."
  },
  {
    title: "Cosmos", author: "Carl Sagan", year: 1980, pages: 365, type: "non-fiction",
    desc: "Perjalanan naratif sains, sejarah, dan filsafat untuk menempatkan posisi manusia dalam skala kosmik yang luas.",
    takeaways: [
      "Perspektif Pale Blue Dot.",
      "Sains sebagai Pembebas dari Takhayul.",
      "Kita Adalah Cara Kosmos Memahami Diri Sendiri."
    ],
    context: "Buku sains puitis paling menggugah kesadaran kosmik."
  },
  {
    title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", year: 1962, pages: 264, type: "non-fiction",
    desc: "Kemajuan sains tidak linear melainkan lewat pergeseran paradigma (Paradigm Shift) dan revolusi sains.",
    takeaways: [
      "Paradigm Shift.",
      "Normal Science vs Revolutionary Science.",
      "Inkomensurabilitas Paradigma."
    ],
    context: "Filsafat sains yang meruntuhkan asumsi akumulasi fakta linear."
  },
  {
    title: "Sapiens", author: "Yuval Noah Harari", year: 2011, pages: 443, type: "non-fiction",
    desc: "Makro-sejarah Homo sapiens: Imagined Orders (fiksi kolektif) yang memungkinkan kerja sama massal.",
    takeaways: [
      "Imagined Orders (Uang, Negara, HAM).",
      "Revolusi Kognitif, Pertanian & Industri.",
      "Biologi Memungkinkan, Budaya Melarang."
    ],
    context: "Buku makro-sejarah manusia paling populer abad ke-21."
  },
  {
    title: "Guns, Germs, and Steel", author: "Jared Diamond", year: 1997, pages: 480, type: "non-fiction",
    desc: "Kenapa peradaban berkembang secara berbeda di berbagai benua: faktor geografi, axis kontinental, dan domestikasi.",
    takeaways: [
      "Determinisme Biogeografis.",
      "Axis Kontinental Eurasia vs Afrika/Amerika.",
      "Membongkar Mitos Superioritas Rasial."
    ],
    context: "Analisis sejarah peradaban berbasis biogeografi terpenting."
  },
  {
    title: "The Origins of Totalitarianism", author: "Hannah Arendt", year: 1951, pages: 576, type: "non-fiction",
    desc: "Studi genesis totalitarianisme Nazi dan Stalinisme: dari Antisemitisme, Imperialisme, hingga Teror Sistemik.",
    takeaways: [
      "Atomisasi Masyarakat & Kesepian Politik.",
      "Ideologi Total Penjelas Realitas.",
      "Teror sebagai Alat Pemerintahan."
    ],
    context: "Studi politik mendalam mengenai kehancuran ruang publik."
  },
  {
    title: "Democracy in America", author: "Alexis de Tocqueville", year: 1835, pages: 864, type: "non-fiction",
    desc: "Analisis sosiologi politik Amerika abad ke-19: kekuatan kesetaraan dan bahaya Tyranny of the Majority.",
    takeaways: [
      "Tyranny of the Majority.",
      "Peran Asosiasi Sipil dalam Demokrasi.",
      "Tension Antara Equality dan Liberty."
    ],
    context: "Analisis paling tajam tentang karakteristik demokrasi."
  },
  {
    title: "History of the Peloponnesian War", author: "Thucydides", year: -400, pages: 600, type: "non-fiction",
    desc: "Buku sejarah analitis pertama tentang perang Athena-Sparta. Melian Dialogue dan realpolitik murni.",
    takeaways: [
      "Melian Dialogue: Realpolitik Murni.",
      "Thucydides Trap.",
      "Dinamika Ketakutan dan Kekuasaan."
    ],
    context: "Analisis hubungan internasional dan realpolitik tertua."
  },
  {
    title: "The Histories", author: "Herodotus", year: -430, pages: 720, type: "non-fiction",
    desc: "Bapak Sejarah mencatat konflik Yunani-Persia beserta geografi, adat istiadat, dan mitologi berbagai suku bangsa.",
    takeaways: [
      "Penyelidikan (Historia) Pertama dalam Sejarah.",
      "Keragaman Adat Budaya Bangsa (Etnografi).",
      "Bahaya Hubris Penguasa Persia."
    ],
    context: "Karya sejarah naratif dan etnografi pertama di dunia Barat."
  },
  {
    title: "The Decline and Fall of the Roman Empire", author: "Edward Gibbon", year: 1776, pages: 1100, type: "non-fiction",
    desc: "Studi monumental Gibbon menelusuri kemunduran Kekaisaran Roma dari era keemasan hingga kejatuhan Konstantinopel.",
    takeaways: [
      "Faktor Internal Keruntuhan Roma (Dekadensi & Agama).",
      "Prosa Bahasa Inggris Abad 18 yang Elegan.",
      "Siklus Kejayaan dan Kehancuran Kekaisaran."
    ],
    context: "Mahakarya historiografi klasik peradaban Barat."
  },

  // 116-130: Global Literature, Memoirs & Post-War Classics
  {
    title: "Things Fall Apart", author: "Chinua Achebe", year: 1958, pages: 209, type: "fiction",
    desc: "Kehidupan Okonkwo di suku Igbo Nigeria saat kedatangan misionaris dan pemerintah kolonial Inggris menghancurkan tatanan adat.",
    takeaways: [
      "Dampak Kehancuran Adat Tradisional oleh Kolonialisme.",
      "Tragedi Kekakuan Karakter Okonkwo.",
      "Suara Sastra Afrika Pertama yang Mendunia."
    ],
    context: "Novel Afrika paling seminal yang merespons narasi kolonial."
  },
  {
    title: "Midnight's Children", author: "Salman Rushdie", year: 1981, pages: 463, type: "fiction",
    desc: "Saleem Sinai lahir persis pada detik kemerdekaan India (15 Agustus 1947), hidupnya terhubung secara magis dengan nasib bangsa India modern.",
    takeaways: [
      "Realisme Magis Sejarah India Modern.",
      "Anak-anak Kemerdekaan dengan Kekuatan Khusus.",
      "Politik dan Identitas Pasca-Kolonial."
    ],
    context: "Pemenang Booker of Bookers — mahakarya sastra pasca-kolonial."
  },
  {
    title: "The Remains of the Day", author: "Kazuo Ishiguro", year: 1989, pages: 245, type: "fiction",
    desc: "Pelayan Inggris Stevens mengenang seumur hidup pengabdiannya pada majikannya, menyadari bahwa ia telah mengorbankan cinta dan kehidupan pribadi demi ilusi 'dignity'.",
    takeaways: [
      "Dignity Palsu yang Mengorbankan Kehidupan Pribadi.",
      "Unreliable Narrator yang Menutupi Penyesalan.",
      "Kritik Kebutaan Politik Pelayan Setia."
    ],
    context: "Novel puitis pemenang Booker Prize karya Ishiguro."
  },
  {
    title: "Never Let Me Go", author: "Kazuo Ishiguro", year: 2005, pages: 288, type: "fiction",
    desc: "Kathy, Tommy, dan Ruth tumbuh di sekolah asrama Hailsham, perlahan menyadari bahwa mereka adalah klon yang dibesarkan untuk donor organ.",
    takeaways: [
      "Dystopia Lembut tentang Hakikat Kemanusiaan.",
      "Penerimaan Pasrah terhadap Takdir Tragis.",
      "Nilai Seni dan Memori di Tengah Kepenuhan Waktu."
    ],
    context: "Novel sci-fi distopia emosional tentang mortalitas."
  },
  {
    title: "If This Is a Man", author: "Primo Levi", year: 1947, pages: 182, type: "non-fiction",
    desc: "Kesaksian kimiawan Italia Primo Levi tentang pengalaman bertahan hidup di kamp konsentrasi Auschwitz. Analisis dingin dehumanisasi.",
    takeaways: [
      "Dehumanisasi Sistemik di Kamp Auschwitz.",
      "Zona Kelabu (Grey Zone) Moralitas Tahanan.",
      "Kewajiban Mengingat demi Kemanusiaan."
    ],
    context: "Kesaksian Holocaust paling jernih dan berharga secara analisis."
  },
  {
    title: "The Diary of a Young Girl", author: "Anne Frank", year: 1947, pages: 283, type: "non-fiction",
    desc: "Catatan harian gadis remaja Anne Frank saat bersembunyi di lampau rumah Amsterdam dari kejaran Nazi selama Perang Dunia II.",
    takeaways: [
      "Kepolosan dan Harapan di Tengah Kegelapan Perang.",
      "Perkembangan Pemikiran Gadis Remaja.",
      "Kesaksian Manusiawi Korbannya Holocaust."
    ],
    context: "Dokumen kesaksian pribadi paling terkenal dalam sejarah."
  },
  {
    title: "Waiting for Godot", author: "Samuel Beckett", year: 1953, pages: 120, type: "fiction",
    desc: "Naskah teater absurd: Vladimir dan Estragon menunggu sosok bernama Godot yang tak pernah datang di tepi jalan sepi.",
    takeaways: [
      "Teater Absurd: Menunggu Tanpa Kepastian.",
      "Repetisi dan Komedi Konyol dalam Ketiadaan Makna.",
      "Kondisi Manusia yang Terjebak dalam Waktu."
    ],
    context: "Naskah drama absurd paling ikonik abad ke-20."
  },
  {
    title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", year: 1979, pages: 777, type: "non-fiction",
    desc: "Eksplorasi interdisipliner tentang bagaimana kesadaran dan 'Self' muncul dari sistem tak berkesadaran lewat Strang Loops matematika, seni, dan musik.",
    takeaways: [
      "Strange Loops & Self-Reference.",
      "Teorema Ketidaklengkapan Gödel.",
      "Sintesis Matematika, Seni Escher, dan Musik Bach."
    ],
    context: "Mahakarya interdisipliner pemenang Pulitzer tentang sains kognitif."
  },
  {
    title: "The Sun Also Rises", author: "Ernest Hemingway", year: 1926, pages: 251, type: "fiction",
    desc: "Generasi Hilang (Lost Generation) veteran Perang Dunia I menjelajahi Paris dan adu banteng di Pamplona dengan kekosongan moral.",
    takeaways: [
      "Generasi Hilang Pasca Perang Dunia I.",
      "Gaya Penulisan Iceberg Theory Hemingway.",
      "Festival Pamplona dan Maskulinitas Terluka."
    ],
    context: "Novel pembuka ikonik gaya penulisan minimalis Hemingway."
  },
  {
    title: "For Whom the Bell Tolls", author: "Ernest Hemingway", year: 1940, pages: 480, type: "fiction",
    desc: "Relawan Amerika Robert Jordan bertugas meledakkan jembatan dalam Perang Saudara Spanyol. Meditasi tentang tugas, ideologi, dan kematian.",
    takeaways: [
      "Tidak Ada Manusia yang Berdiri Sendiri (No Man is an Island).",
      "Kewajiban Militer di Tengah Perang Saudara Tragis.",
      "Puncak Prosa Naratif Hemingway."
    ],
    context: "Novel perang saudara Spanyol terbaik Hemingway."
  },
  {
    title: "The Old Man and the Sea", author: "Ernest Hemingway", year: 1952, pages: 127, type: "fiction",
    desc: "Nelayan tua Santiago bertarung 3 hari melawan ikan marlin raksasa di Gulf Stream. 'A man can be destroyed but not defeated.'",
    takeaways: [
      "Keteguhan Martabat Manusia Hadapi Kegagalan.",
      "Penghormatan terhadap Alam dan Musuh.",
      "Iceberg Theory dalam Perjuangan Sederhana."
    ],
    context: "Novella pemenang Pulitzer yang menghantarkan Hemingway ke Nobel."
  },
  {
    title: "A Farewell to Arms", author: "Ernest Hemingway", year: 1929, pages: 332, type: "fiction",
    desc: "Pengemudi ambulans Frederic Henry jatuh cinta pada suster Catherine Barkley di medan perang Italia Perang Dunia I.",
    takeaways: [
      "Kekejaman Perang dan Ketiadaan Slogan Heroik.",
      "Pelarian Cinta di Tengah Kehancuran Dunia.",
      "Tragedi Nasib Manusia yang Tak Terelakkan."
    ],
    context: "Novel anti-perang dan percintaan tragis paling terkenal Hemingway."
  },
  {
    title: "Cry, the Beloved Country", author: "Alan Paton", year: 1948, pages: 320, type: "fiction",
    desc: "Pendeta kulit hitam Stephen Kumalo mencari putranya Absalom di Johannesburg, mengekspos tragedi rasial Afrika Selatan sebelum Apartheid rasmi.",
    takeaways: [
      "Tragedi Kehancuran Tatanan Sosial Kulit Hitam.",
      "Pengampunan dan Kasih di Tengah Ketakutan Rasial.",
      "Ratapan Puitis untuk Tanah Afrika Selatan."
    ],
    context: "Novel protes sosial paling berpengaruh dari Afrika Selatan."
  },
  {
    title: "Disgrace", author: "J.M. Coetzee", year: 1999, pages: 220, type: "fiction",
    desc: "Profesor David Lurie dipecat akibat skandal perselingkuhan, lalu mengungsi ke peternakan putrinya di Afrika Selatan pasca-Apartheid yang sarat kekerasan.",
    takeaways: [
      "Pergeseran Kekuasaan dan Kehilangan Hak Istimewa.",
      "Kekerasan Pasca-Apartheid dan Kerentanan Individu.",
      "Penebusan Dosa tanpa Kepahlawanan."
    ],
    context: "Novel pemenang Booker Prize Coetzee yang sangat tajam."
  },
  {
    title: "Life and Fate", author: "Vasily Grossman", year: 1960, pages: 880, type: "fiction",
    desc: "Epik Pertempuran Stalingrad. Grossman membandingkan totalitarianisme Nazi dan Stalinisme, serta ketahanan kebaikan kecil individu.",
    takeaways: [
      "Kesamaan Paralel Fasisme Nazi & Stalinisme Soviet.",
      "Kebaikan Kecil Tanpa Pamor sebagai Penyelamat Kemanusiaan.",
      "Pertempuran Stalingrad sebagai Titik Balik Abad 20."
    ],
    context: "War and Peace-nya abad ke-20 yang sempat disita KGB."
  },

  // 131-151: International Postmodernism, Contemporary Masterworks & World Literature
  {
    title: "The Leopard", author: "Giuseppe Tomasi di Lampedusa", year: 1958, pages: 320, type: "fiction",
    desc: "Pangeran Salina menavigasi perubahan sosial Risorgimento Italia abad 19. 'If we want things to stay as they are, things will have to change.'",
    takeaways: [
      "Kemunduran Aristokrasi Tua dan Kebangkitan Borjuis Baru.",
      "Adaptasi Kekuasaan demi Mempertahankan Status Quo.",
      "Nostalgia Estetika Zaman yang Memudar."
    ],
    context: "Novel sejarah Italia paling anggun dan berpengaruh."
  },
  {
    title: "If on a winter's night a traveler", author: "Italo Calvino", year: 1979, pages: 260, type: "fiction",
    desc: "Novel metafiksi tentang Pembaca (Anda) yang mencoba membaca novel, namun selalu terputus di bab pertama dan berpindah ke cerita lain.",
    takeaways: [
      "Seni Membaca dan Hubungan Pembaca dengan Teks.",
      "Metafiksi Pasca-Modern yang Bermain Bentuk.",
      "10 Cikal Bakal Cerita Berbeda dalam Satu Buku."
    ],
    context: "Mahakarya metafiksi pasca-modern eksperimental Calvino."
  },
  {
    title: "Invisible Cities", author: "Italo Calvino", year: 1972, pages: 165, type: "fiction",
    desc: "Marco Polo menceritakan 55 kota imajiner kepada Kublai Khan. Setiap kota adalah alegori tentang kebiasaan, bahasa, dan pikiran manusia.",
    takeaways: [
      "Kota sebagai Metafora Jiwa dan Bahasa Manusia.",
      "Dialog Imajinatif Penjelajah dan Penguasa Kosmik.",
      "Prosa Puitis Estetika arsitektur pikiran."
    ],
    context: "Karya meditasi arsitektur imajinasi dan kota terbaik Calvino."
  },
  {
    title: "The Name of the Rose", author: "Umberto Eco", year: 1980, pages: 503, type: "fiction",
    desc: "Biarawan William of Baskerville menyelidiki pembunuhan misterius di biara Abad Pertengahan yang memiliki perpustakaan labirin terlarang.",
    takeaways: [
      "Semiotika dan Detektif Abad Pertengahan.",
      "Perpustakaan Labirin dan Bahaya Penindasan Kebenaran/Humor.",
      "Konflik Teologi Kemiskinan Kristus."
    ],
    context: "Novel misteri sejarah dan semiotika paling laris Umberto Eco."
  },
  {
    title: "Blindness", author: "José Saramago", year: 1995, pages: 326, type: "fiction",
    desc: "Wabah 'Kebutaan Putih' mendadak menimpa seluruh kota. Keruntuhan peradaban dan kejamnya tatanan sosial ketika manusia kehilangan penglihatan.",
    takeaways: [
      "Keruntuhan Tatanan Sosial dalam Krisis Murni.",
      "Satu-satunya Wanita yang Bisa Melihat sebagai Saksi Kebenaran.",
      "Gaya Penulisan Tanpa Tanda Baca Tradisional."
    ],
    context: "Alegori pemenang Nobel Saramago tentang kebutaan moral manusia."
  },
  {
    title: "The Tin Drum", author: "Günter Grass", year: 1959, pages: 588, type: "fiction",
    desc: "Oskar Matzerath memutuskan berhenti tumbuh pada usia 3 tahun, mengekspos kegilaan Jerman era Nazi lewat tabuhan drum kalengnya di RS Jiwa.",
    takeaways: [
      "Perspektif Anak Kecil yang Menolak Tumbuh Dewasa.",
      "Drum Kaleng sebagai Suara Kritik terhadap Nazisme.",
      "Realisme Grotesk dan Rasa Bersalah Jerman."
    ],
    context: "Novel paling berpengaruh Jerman pasca-Perang Dunia II."
  },
  {
    title: "Austerlitz", author: "W.G. Sebald", year: 2001, pages: 415, type: "fiction",
    desc: "Jacques Austerlitz menelusuri kembali masa kecilnya yang terputus akibat dievakuasi (Kindertransport) dari Praha saat Holocaust.",
    takeaways: [
      "Pengikisan Memori dan Waktu oleh Trauma Holocaust.",
      "Penggunaan Foto Asli dalam Prosa Fiksi Puitis.",
      "Arsitektur sebagai Saksi Sejarah Kelam."
    ],
    context: "Mahakarya prosa memori dan trauma sejarah abad ke-21."
  },
  {
    title: "The Books of Jacob", author: "Olga Tokarczuk", year: 2014, pages: 912, type: "fiction",
    desc: "Epik sejarah tentang Jacob Frank, pemimpin sekte Yahudi kontroversial di Polandia abad ke-18 yang mengklaim sebagai Mesias.",
    takeaways: [
      "Epik Sejarah Lintas Perbatasan Budaya Eropa Timur.",
      "Mesianisme, Heresi, dan Identitas Komunitas.",
      "Prosa Luas Pemenang Nobel Tokarczuk."
    ],
    context: "Mahakarya epik sejarah kontemporer pemenang Nobel."
  },
  {
    title: "Kafka on the Shore", author: "Haruki Murakami", year: 2002, pages: 505, type: "fiction",
    desc: "Dua alur paralel: remaja Kafka Tamura melarikan diri dari kutukan ayahnya, dan kakek Nakata yang bisa berbicara dengan kucing.",
    takeaways: [
      "Magical Realism Jepang Modern.",
      "Kutukan Oedipal dan Pencarian Identitas.",
      "Dunia Mimpi dan Dunia Nyata yang Saling Melengkapi."
    ],
    context: "Novel realisme magis paling populer Haruki Murakami."
  },
  {
    title: "Norwegian Wood", author: "Haruki Murakami", year: 1987, pages: 296, type: "fiction",
    desc: "Toru Watanabe mengenang masa mudanya di Tokyo tahun 1960-an, terjebak antara hubungannya dengan Naoko yang rapuh dan Midori yang hidup.",
    takeaways: [
      "Kesepian, Duka, dan Ketidakmampuan Menyelamatkan Orang Lain.",
      "Nostalgia Masa Muda dan Musik Beatles.",
      "Realisme Melankolis Murakami."
    ],
    context: "Novel romantis melankolis yang membesarkan nama Murakami."
  },
  {
    title: "The Wind-Up Bird Chronicle", author: "Haruki Murakami", year: 1994, pages: 607, type: "fiction",
    desc: "Toru Okada mencari kucingnya yang hilang, berujung pada penjelajahan labirin bawah tanah dan rahasia kejahatan sejarah perang Jepang.",
    takeaways: [
      "Sumur Bawah Tanah sebagai Ruang Kesadaran Bawah Sadar.",
      "Dosa Sejarah Tentara Jepang di Manchuria.",
      "Pencarian Istri yang Hilang dalam Realita Paralel."
    ],
    context: "Novel terbesar dan paling kompleks Murakami."
  },
  {
    title: "Kokoro", author: "Natsume Sōseki", year: 1914, pages: 248, type: "fiction",
    desc: "Hubungan antara mahasiswa muda dan 'Sensei' yang menyimpan rahasia rasa bersalah masa lalu di era transisi Meiji Jepang.",
    takeaways: [
      "Rasa Bersalah Moral Sensei dan Budaya Bunuh Diri.",
      "Pergeseran Era Meiji dari Tradisional ke Modern.",
      "Keterasingan dan Kesepian Manusia Modern Jepang."
    ],
    context: "Novel paling berpengaruh dalam sastra Jepang modern."
  },
  {
    title: "Snow Country", author: "Yasunari Kawabata", year: 1948, pages: 175, type: "fiction",
    desc: "Pria kaya Shimamura mengunjungi geisha Komako di daerah salju terpencil. Prosa puitis estetika keindahan dan kesepian murni.",
    takeaways: [
      "Estetika Kesepian dan Keindahan Nyata Jepang.",
      "Hubungan Shimamura & Komako yang Tak Berpengharapan.",
      "Prosa Puitis Pemenang Nobel Kawabata."
    ],
    context: "Mahakarya estetika puitis Nobelis pertama Jepang."
  },
  {
    title: "The Setting Sun", author: "Osamu Dazai", year: 1947, pages: 175, type: "fiction",
    desc: "Kemunduran keluarga bangsawan Tokyo pasca-Perang Dunia II lewat sudut pandang Kazuko dan saudaranya Naoji yang ketergantungan obat.",
    takeaways: [
      "Kemunduran Aristokrasi Jepang Pasca-Perang.",
      "Keputusasaan Generasi Muda Dazai.",
      "Keberanian Bertahan Hidup Kazuko di Tengah Reruntuhan."
    ],
    context: "Potret paling jujur tentang kemunduran Jepang pasca-Perang Dunia II."
  },
  {
    title: "No Longer Human", author: "Osamu Dazai", year: 1948, pages: 176, type: "fiction",
    desc: "Catatan harian Oba Yozo yang merasa terasing sepenuhnya dari masyarakat manusia, berpura-pura menjadi badut untuk menutupi kecemasannya.",
    takeaways: [
      "Mine is a life of much shame: Alienasi Manusiawi Mutlak.",
      "Topeng Badut Sosial demi Bertahan Hidup.",
      "Kemerosotan Otobiografis Dazai."
    ],
    context: "Novel klasik Jepang kedua paling laris sepanjang masa."
  },
  {
    title: "Silence", author: "Shūsaku Endō", year: 1966, pages: 300, type: "fiction",
    desc: "Biksu Yesuit Sebastião Rodrigues pergi ke Jepang abad ke-17 di tengah penganiayaan terkejam terhadap umat Kristen, menghadapi diamnya Tuhan.",
    takeaways: [
      "Diamnya Tuhan di Tengah Penderitaan Manusia.",
      "Dilema Fumie: Murtad Lahiriah demi Menyelamatkan Sesama.",
      "Benturan Iman Barat dan Tanah Rawa Jepang."
    ],
    context: "Novel teologi dan penderitaan iman terbaik dari Jepang."
  },
  {
    title: "One Thousand and One Nights", author: "Anonim", year: 800, pages: 1000, type: "fiction",
    desc: "Scheherazade menceritakan kisah bersambung setiap malam kepada Raja Shahryar demi menunda eksekusi matinya. Induk cerita Timur Tengah.",
    takeaways: [
      "Bercerita sebagai Alat Bertahan Hidup.",
      "Struktur Cerita di Dalam Cerita (Frame Narrative).",
      "Kekayaan Mitologi Budaya Islam Klasik."
    ],
    context: "Kumpulan cerita rakyat Timur Tengah paling ikonik di dunia."
  },
  {
    title: "Season of Migration to the North", author: "Tayeb Salih", year: 1966, pages: 169, type: "fiction",
    desc: "Mustafa Sa'eed kembali ke desa Sudan setelah bertahun-tahun di Inggris. Novel counter-Heart of Darkness tentang dampak psikologis kolonialisme.",
    takeaways: [
      "Counter-Heart of Darkness: Penaklukan Kebalikan dari Selatan ke Utara.",
      "Dua Identitas Terbelah Pasca-Kolonial.",
      "Tragedi Kekerasan Budaya di Tepi Sungai Nil."
    ],
    context: "Novel Arab terbaik abad ke-20 menurut Persatuan Penulis Arab."
  },
  {
    title: "The Radiance of the King", author: "Camara Laye", year: 1954, pages: 284, type: "fiction",
    desc: "Pria kulit putih Clarence terdampar di Afrika tanpa uang dan berusaha menemui Raja Afrika. Pembalikan mitos pencarian Eropa.",
    takeaways: [
      "Pembalikan Peran Kolonialisme: Orang Putih Mencari Rahmat Afrika.",
      "Pencarian Spiritual dan Kerendahan Hati.",
      "Karya Kafkaesque Afrika Paling Unik."
    ],
    context: "Novel alegori spiritual Afrika paling orisinal."
  },
  {
    title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", year: 2006, pages: 433, type: "fiction",
    desc: "Perang Saudara Biafra Nigeria tahun 1960-an dilihat lewat hidup 5 karakter: profesor, perempuan elit, pembantu desa, dan penulis Inggris.",
    takeaways: [
      "Tragedi Kemanusiaan Perang Persemakmuran Biafra.",
      "Perbedaan Kelas dan Ras di Tengah Perang.",
      "Kekuatan Cinta dan Kerentanan Hidup Manusia."
    ],
    context: "Novel sejarah Afrika kontemporer pemenang Orange Prize."
  },
  {
    title: "The Sellout", author: "Paul Beatty", year: 2015, pages: 304, type: "fiction",
    desc: "Satire pedas Amerika: pria kulit hitam diadili di Mahkamah Agung karena mencoba mengembalikan perbudakan dan segregasi di kotanya.",
    takeaways: [
      "Satire Pedas Rasial Amerika Abad ke-21.",
      "Pembongkaran Wacana Post-Racial America.",
      "Humor Gelap dan Prosa Cerdas Beatty."
    ],
    context: "Novel Amerika pertama yang memenangkan Man Booker Prize."
  }
];

// Wrap in single master catalog structure (no phase limitations)
const roadmapData = [
  {
    id: "katalog-master",
    tag: "150 MASTERWORKS",
    tagClass: "comm",
    title: "Katalog Masterwork Klasik & Filsafat",
    note: "Daftar Terbuka 150 Karya Utama Dunia Tanpa Limitasi Fase",
    sections: [
      {
        label: "Katalog 150 Karya Klasik Utama",
        books: masterBooks.map((b, idx) => ({
          id: `m-${idx + 1}`,
          type: b.type,
          title: b.title,
          author: b.author,
          year: b.year,
          pages: b.pages,
          desc: b.desc,
          takeaways: b.takeaways,
          context: b.context
        }))
      }
    ]
  }
];

const fileContent = `export const ROADMAP_DATA = ${JSON.stringify(roadmapData, null, 2)};\n`;

fs.writeFileSync('src/data/roadmapData.js', fileContent, 'utf8');
console.log('Successfully wrote 150 masterwork titles to src/data/roadmapData.js');
