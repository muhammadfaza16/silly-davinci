export const ROADMAP_DATA = [
  {
    id: "phase-0",
    tag: "FASE 0",
    tagClass: "comm",
    title: "Communication Foundation",
    note: "Alat berpikir & bicara — dikuasai dulu sebelum masuk isi.",
    sections: [
      {
        label: "Kejernihan Berpikir",
        books: [
          {
            id: "p0-s0-b0",
            type: "non-fiction",
            title: "The Pyramid Principle",
            author: "Barbara Minto",
            year: 1987,
            pages: 176,
            desc: "Metode berpikir dan menulis ala McKinsey: mulai dari kesimpulan, lalu susun argumen pendukung dalam kelompok logis berbentuk piramida. Aslinya ditulis untuk konsultan bisnis, tapi prinsipnya berlaku untuk laporan, presentasi, bahkan cara ngomong sehari-hari — jawab dulu, baru jelaskan kenapa, bukan bangun argumen pelan-pelan sampai kesimpulan muncul di akhir.",
            takeaways: [
              "Prinsip Answer First: Sampaikan kesimpulan atau rekomendasi utama di awal.",
              "Kerangka SCQA: Susun konteks lewat Situation, Complication, Question, dan Answer.",
              "Prinsip MECE: Kelompokkan poin agar Mutually Exclusive (tidak tumpang tindih) dan Collectively Exhaustive (tidak ada yang terlewat)."
            ],
            context: "Alat komunikasi dasar pertama dalam kurikulum untuk mengeliminasi cara penyampaian yang muter-muter."
          },
          {
            id: "p0-s0-b1",
            type: "non-fiction",
            title: "A Rulebook for Arguments",
            author: "Anthony Weston",
            year: 2008,
            pages: 120,
            desc: "Buku pegangan singkat berisi aturan praktis menyusun argumen yang valid — cara pakai contoh, analogi, sampai kausalitas — disusun seperti buku tata bahasa tapi untuk logika. Cocok dibaca ulang sebagai referensi cepat, bukan sekali habis, dan membantu mengenali argumen yang lemah baik milik sendiri maupun orang lain.",
            takeaways: [
              "Konstruksi Argumen Deduktif & Induktif: Memastikan premis benar-benar menopang kesimpulan.",
              "Identifikasi Logical Fallacies: Mengenali kesesatan berpikir seperti ad hominem, straw man, dan false dilemma.",
              "Penggunaan Contoh & Analogi yang Valid: Menyajikan bukti yang representatif dan tidak berlebihan."
            ],
            context: "Fondasi kritis untuk menguji keabsahan argumen sebelum ide diucapkan atau dituliskan."
          },
          {
            id: "p0-s0-b2",
            type: "non-fiction",
            title: "Clear Thinking",
            author: "Shane Parrish",
            year: 2023,
            pages: 304,
            desc: "Ditulis pendiri Farnam Street, buku ini memetakan 'default' mental — respons otomatis otak (ego, emosi, sosial, inersia) yang sering membajak keputusan sebelum sempat berpikir jernih. Parrish menawarkan sistem konkret mengenali momen itu dan menciptakan jeda sebelum bereaksi; fokusnya menghilangkan penghalang berpikir, bukan menambah pengetahuan.",
            takeaways: [
              "Mengenali Default Mental: Mengatasi dorongan otomatis ego, emosi, dan posisi sosial.",
              "Kekuatan Ordinary Moments: Memperbaiki keputusan-keputusan kecil harian yang menentukan hasil jangka panjang.",
              "Menciptakan Jeda (Margin of Safety): Memperlambat reaksi naluriah agar rasionalitas sempat bekerja."
            ],
            context: "Menjaga disiplin emosional dan mental saat mengolah gagasan kompleks."
          },
          {
            id: "p0-s0-b3",
            type: "non-fiction",
            title: "How Not to Be Wrong",
            author: "Jordan Ellenberg",
            year: 2014,
            pages: 480,
            desc: "Matematikawan Jordan Ellenberg menunjukkan bahwa matematika bukanlah hafalan rumus kering, melainkan perpanjangan dari akal sehat. Buku ini mengajarkan cara berpikir kuantitatif — mengenali pemikiran statistik yang salah, memahami probabilitas, dan tidak gampang terkecoh oleh angka dan grafik manipulatif di media.",
            takeaways: [
              "Pemikiran Kuantitatif Sehari-hari: Menggunakan probabilitas untuk menilai klaim publik.",
              "Survivor Bias & Linear Regression Paradox: Mengenali kesalahan pengambilan sampel statistik.",
              "Kritik Kuantitatif: Menguji klaim data sebelum menerimanya sebagai kebenaran."
            ],
            context: "Membangun literasi data dan ketahanan terhadap angka yang dimanipulasi."
          }
        ]
      },
      {
        label: "Presisi Bahasa",
        books: [
          {
            id: "p0-s1-b0",
            type: "non-fiction",
            title: "On Writing Well",
            author: "William Zinsser",
            year: 1976,
            pages: 336,
            desc: "Panduan menulis nonfiksi klasik yang intinya satu: pangkas semua yang tidak perlu. Zinsser menunjukkan lewat contoh nyata bagaimana kalimat berantakan bisa dipangkas jadi tajam tanpa kehilangan makna — prinsip 'clutter is the disease' ini sama persis berlaku ke cara bicara yang efektif.",
            takeaways: [
              "Eliminasi Clutter: Membuang kata sifat, frasa berulang, dan jargon tidak perlu.",
              "Prinsip Kejernihan & Kesederhanaan: Menulis dan berbicara demi audiens, bukan demi pamer kosakata.",
              "Sentuhan Manusiawi (Human Touch): Menjaga kehangatan gaya penulisan agar tetap menjiwai pesan."
            ],
            context: "Memastikan pesan disampaikan dengan presisi tinggi dan efisiensi kata."
          },
          {
            id: "p0-s1-b1",
            type: "non-fiction",
            title: "Politics and the English Language (esai)",
            author: "George Orwell",
            year: 1946,
            pages: 14,
            desc: "Esai pendek Orwell yang membongkar bagaimana bahasa kabur dan klise dipakai menyembunyikan pikiran yang sebenarnya juga kabur — sekaligus dipakai sengaja dalam propaganda politik. Ia memberi aturan sederhana menulis jernih: hindari metafora usang, jangan pakai kata panjang kalau kata pendek cukup, dan potong kata yang bisa dihilangkan.",
            takeaways: [
              "Bahasa Kabur Sebagai Cermin Pikiran Kabur: Bahasa yang berbelit sering kali menutup ketiadaan isi.",
              "6 Aturan Emas Orwell: Mengutamakan kata konkrit, kalimat pendek, dan eufemisme terbuka.",
              "Ketahanan Terhadap Propaganda: Kejernihan bahasa adalah benteng melawan manipulasi politik."
            ],
            context: "Melatih kepekaan terhadap manipulasi istilah dan klise dalam wacana publik."
          }
        ]
      },
      {
        label: "Menjelaskan & Menyederhanakan",
        books: [
          {
            id: "p0-s2-b0",
            type: "non-fiction",
            title: "Made to Stick",
            author: "Chip Heath & Dan Heath",
            year: 2007,
            pages: 291,
            desc: "Menjawab kenapa sebagian ide 'nempel' di kepala orang dan sebagian lain langsung dilupakan, lewat kerangka SUCCES (Simple, Unexpected, Concrete, Credible, Emotional, Story). Tiap prinsip dijelaskan lewat studi kasus nyata, dari urban legend sampai kampanye kesehatan publik — buku paling actionable buat siapa pun yang mau idenya diingat, bukan cuma didengar.",
            takeaways: [
              "Kerangka SUCCES: Simple, Unexpected, Concrete, Credible, Emotional, Story.",
              "Mengatasi Curse of Knowledge: Membawa ide abstrak kembali ke realitas konkret.",
              "Emosi & Narasi: Menghubungkan ide dengan empati dan cerita nyata."
            ],
            context: "Mengemas konsep sains/filsafat tebal agar dapat dipahami dan diingat lawan bicara."
          },
          {
            id: "p0-s2-b1",
            type: "non-fiction",
            title: "The Sense of Style",
            author: "Steven Pinker",
            year: 2014,
            pages: 368,
            desc: "Pinker mendekati 'menulis jernih' dari sudut pandang linguistik dan psikologi kognitif, menjelaskan kenapa sebagian kalimat mudah dipahami dan sebagian lain bikin pusing meski gramatikal benar. Ia juga membongkar mitos aturan menulis yang sebenarnya tidak berdasar — lebih akademis dari Zinsser, tapi menjelaskan 'kenapa' di balik teknik menulis yang baik.",
            takeaways: [
              "Psikologi Kognitif Kalimat: Bagaimana otak memproses struktur subjek, predikat, dan informasi baru.",
              "Curse of Knowledge: Ketidakmampuan membayangkan rasa tidak tahu audiens.",
              "Classic Style: Gaya penjelasan yang memperlakukan pembaca sebagai rekan diskusi yang cerdas."
            ],
            context: "Memahami mekanisme otak audiens saat mencerna struktur kalimat."
          }
        ]
      },
      {
        label: "Delivery Real-Time",
        books: [
          {
            id: "p0-s3-b0",
            type: "non-fiction",
            title: "Speaking Up Without Freaking Out",
            author: "Matt Abrahams",
            year: 2016,
            pages: 226,
            desc: "Fokus khusus ke spontaneous speaking — situasi harus ngomong terstruktur tanpa waktu menyiapkan naskah. Abrahams menjelaskan kenapa filler word dan grogi muncul (gap antara kecepatan mikir dan bicara), lalu memberi teknik konkret menyusun jawaban instan tanpa muter-muter.",
            takeaways: [
              "Kerangka Berpikir Spontan: Menggunakan struktur What? So What? Now What? saat menjawab mendadak.",
              "Manajemen Kecemasan: Teknik fisiologis untuk menurunkan lonjakan adrenalin.",
              "Eliminasi Filler Words: Melatih ketenangan saat jeda berpikir."
            ],
            context: "Keterampilan penting saat harus menyampaikan argumen secara improvisasi."
          },
          {
            id: "p0-s3-b1",
            type: "non-fiction",
            title: "Talk Like TED",
            author: "Carmine Gallo",
            year: 2014,
            pages: 288,
            desc: "Menganalisis pola dari ratusan TED Talk paling populer — struktur cerita, penggunaan data, teknik delivery — yang membuat sebagian talk viral sementara yang lain terlupakan. Gallo memecahnya jadi sembilan prinsip yang bisa ditiru siapa pun buat presentasi formal yang sudah dipersiapkan matang.",
            takeaways: [
              "Visual & Sensori: Memanfaatkan multi-sensory experience dalam penyampaian.",
              "Rule of 18 Minutes: Memanfaatkan rentang perhatian optimum otak manusia.",
              "Momen Yang Mengejutkan (Jaw-Dropping Moment): Menciptakan puncak ingatan utama."
            ],
            context: "Panduan penyampaian presentasi formal bertaraf dunia."
          }
        ]
      },
      {
        label: "Percakapan & Relasi",
        books: [
          {
            id: "p0-s4-b0",
            type: "non-fiction",
            title: "How to Win Friends and Influence People",
            author: "Dale Carnegie",
            year: 1936,
            pages: 291,
            desc: "Buku self-help klasik dari 1936 yang prinsipnya bertahan sampai sekarang: tunjukkan minat tulus ke orang lain, dengarkan lebih banyak dari bicara, dan biarkan orang lain merasa penting secara jujur. Berisi banyak anekdot dan aturan praktis membangun relasi tanpa terasa manipulatif kalau diterapkan dengan tulus.",
            takeaways: [
              "Minat Tulus (Genuine Interest): Berfokus pada perspektif dan kebutuhan lawan bicara.",
              "Menghindari Kritik Merusak: Mengganti kecaman dengan dorongan dan pemahaman.",
              "Membuat Orang Lain Merasa Dihargai: Memenuhi kebutuhan dasar manusia akan rasa diakui."
            ],
            context: "Membangun landasan empati dan relasi antarpribadi yang kokoh."
          },
          {
            id: "p0-s4-b1",
            type: "non-fiction",
            title: "You're Not Listening",
            author: "Kate Murphy",
            year: 2020,
            pages: 304,
            desc: "Mengungkap bahwa mendengarkan adalah skill yang perlahan hilang di era digital, dan menjelaskan konsekuensinya — dari hubungan dangkal sampai keputusan salah. Murphy membedakan mendengar secara pasif dengan mendengarkan secara aktif, dan memberi cara melatihnya sebagai bagian tak terpisahkan dari komunikasi efektif.",
            takeaways: [
              "Active Listening: Mendengarkan bukan sekadar menunggu giliran bicara, melainkan memahami nuansa emosi.",
              "Mati Rasa Otak Digital: Mengatasi gangguan perhatian konstan di era modern.",
              "Kepastian Pertanyaan Terbuka: Menggunakan pertanyaan yang mengundang pemikiran lebih dalam."
            ],
            context: "Meningkatkan kualitas interaksi sosial lewat seni mendengarkan secara mendalam."
          },
          {
            id: "p0-s4-b2",
            type: "non-fiction",
            title: "Thank You for Arguing",
            author: "Jay Heinrichs",
            year: 2007,
            pages: 368,
            desc: "Pengantar retorika klasik Aristoteles — ethos (kredibilitas), pathos (emosi), logos (logika) — dikemas dengan gaya modern dan contoh dari politik, iklan, sampai percakapan keluarga. Heinrichs menunjukkan retorika bukan soal manipulasi, tapi seni membujuk secara etis dan efektif.",
            takeaways: [
              "Tiga Pilar Retorika: Ethos (karakter), Pathos (emosi), Logos (logika).",
              "Retorika Deliberatif: Mengarahkan argumen ke masa depan dan pemecahan masalah.",
              "Kairos: Memilih timing yang tepat untuk menyampaikan persuasi."
            ],
            context: "Memahami seni persuasi dan negosiasi beretika."
          },
          {
            id: "p0-s4-b3",
            type: "non-fiction",
            title: "Crucial Conversations",
            author: "Kerry Patterson dkk",
            year: 2002,
            pages: 256,
            desc: "Fokus ke percakapan bertaruhan tinggi — opini berbeda, emosi tinggi, hasil penting — yang biasanya berujung diam atau meledak. Buku ini memberi kerangka konkret menjaga 'ruang aman' percakapan sambil tetap jujur menyampaikan isi pikiran, sangat aplikatif untuk konflik kerja, keluarga, dan negosiasi personal.",
            takeaways: [
              "Menciptakan Rasa Aman Psikologis (Safety): Mencegah respons silence atau violence saat percakapan panas.",
              "Mastering Stories: Mengendalikan narasi emosional internal sebelum bereaksi.",
              "STATE My Path: Menyampaikan ide kontroversial tanpa memicu perlawanan."
            ],
            context: "Navigasi percakapan berisiko tinggi tanpa merusak relasi."
          }
        ]
      },
      {
        label: "Nonverbal",
        books: [
          {
            id: "p0-s5-b0",
            type: "non-fiction",
            title: "What Every BODY is Saying",
            author: "Joe Navarro",
            year: 2008,
            pages: 260,
            desc: "Ditulis mantan agen kontraintelijen FBI, buku ini mengajarkan membaca bahasa tubuh — dari posisi kaki sampai ekspresi mikro — sebagai sinyal jujur yang sering bertentangan dengan kata-kata. Sekaligus membuat pembaca sadar bahasa tubuhnya sendiri saat berinteraksi, praktis dan penuh contoh visual.",
            takeaways: [
              "Sistem Limbik Otak: Respons Freeze, Flight, Fight pada bahasa tubuh manusia.",
              "Indikator Kenyamanan vs Ketidaknyamanan: Membaca gerakan kaki, batang tubuh, dan tangan.",
              "Sinyal Otentik: Kaki dan tungkai adalah indikator emosi paling jujur."
            ],
            context: "Membaca dinamika psikologis nonverbal lawan bicara."
          }
        ]
      },
      {
        label: "Storytelling",
        books: [
          {
            id: "p0-s6-b0",
            type: "non-fiction",
            title: "Story",
            author: "Robert McKee",
            year: 1997,
            pages: 466,
            desc: "Buku tebal soal struktur cerita dari dunia screenwriting Hollywood — arc karakter, konflik, klimaks — yang prinsipnya ternyata berlaku universal buat bikin penjelasan atau presentasi punya 'narrative pull'. McKee menekankan cerita yang baik dibangun dari struktur, bukan cuma inspirasi acak.",
            takeaways: [
              "Inciting Incident & Gap Realitas: Bagaimana dinamika konflik menggerakkan narasi.",
              "Prinsip Perubahan Nilai (Value Change): Cerita bergerak dari satu keadaan emosional ke keadaan lain.",
              "Struktur vs Dekoresi: Cerita memikat lahir dari desain arsitektural yang matang."
            ],
            context: "Merangkai gagasan dan data menjadi narasi berdaya gugah tinggi."
          }
        ]
      }
    ]
  },
  {
    id: "phase-1",
    tag: "FASE 1",
    tagClass: "",
    title: "Asal-Usul & Hardware Manusia",
    note: "Kosmos, evolusi, dan mekanisme biologis-kognitif individu.",
    sections: [
      {
        label: "Kosmologi & Sains Dasar",
        books: [
          {
            id: "p1-s0-b0",
            type: "non-fiction",
            title: "A Brief History of Time",
            author: "Stephen Hawking",
            year: 1988,
            pages: 256,
            desc: "Pengantar paling ikonik soal kosmologi modern — big bang, black hole, ruang-waktu — ditulis untuk pembaca tanpa latar belakang fisika. Hawking terkenal menghindari rumus matematika demi menjaga buku ini tetap accessible, titik awal baik sebelum masuk ke pertanyaan filosofis yang lebih dalam.",
            takeaways: [
              "Teori Relativitas & Kuantum: Dua pilar fisika modern dan pencarian Theory of Everything.",
              "Panah Waktu (Arrow of Time): Kenapa waktu bergerak maju dan hukum entropi.",
              "Sifat Lubang Hitam: Radiasi Hawking dan dinamika ruang-waktu ekstrem."
            ],
            context: "Membangun perspektif atas skala fisik alam semesta."
          },
          {
            id: "p1-s0-b1",
            type: "non-fiction",
            title: "Cosmos",
            author: "Carl Sagan",
            year: 1980,
            pages: 365,
            desc: "Lebih dari sekadar buku sains, ini perjalanan naratif yang menggabungkan astronomi, sejarah, dan filsafat untuk menempatkan manusia dalam konteks kosmik yang sangat besar. Sagan menulis dengan nada puitis yang membuat sains terasa menggugah, bukan kering — buku yang mengubah cara banyak orang memandang posisi mereka di alam semesta.",
            takeaways: [
              "Perspektif Pale Blue Dot: Kesadaran akan kerapuhan dan keagungan tempat manusia.",
              "Sejarah Penemuan Ilmiah: Bagaimana metode ilmiah membebaskan manusia dari takhayul.",
              "Evolusi Kosmik: Kita adalah cara kosmos memahami dirinya sendiri."
            ],
            context: "Menjembatani pengetahuan sains astronomi dengan apresiasi filosofis."
          },
          {
            id: "p1-s0-b2",
            type: "non-fiction",
            title: "The Big Picture",
            author: "Sean Carroll",
            year: 2016,
            pages: 480,
            desc: "Fisikawan Sean Carroll mencoba menyambungkan hukum fisika dasar dengan pertanyaan besar soal makna, moralitas, dan kesadaran dari sudut pandang naturalisme. Buku ini menjembatani sains keras dengan filsafat eksistensial — berat, tapi transisi bagus dari kosmologi ke pertanyaan makna hidup di fase berikutnya.",
            takeaways: [
              "Poetic Naturalism: Sains menjelaskan realitas fisik, manusia menciptakan makna.",
              "Emergence (Kemunculan): Bagaimana hukum fisika dasar membangun skala biologi dan kesadaran.",
              "Core Theory Fisika: Memahami batasan yang mungkin terjadi di alam semesta."
            ],
            context: "Menghubungkan fisika kuantum ke filsafat eksistensial."
          },
          {
            id: "p1-s0-b3",
            type: "non-fiction",
            title: "A Short History of Nearly Everything",
            author: "Bill Bryson",
            year: 2003,
            pages: 544,
            desc: "Bryson merangkum nyaris semua bidang sains besar — fisika, kimia, geologi, biologi — dengan gaya sangat renyah dan penuh anekdot sejarah tentang ilmuwan di baliknya. Jembatan menyenangkan untuk membangun apresiasi sains secara komprehensif.",
            takeaways: [
              "Keajaiban Keberadaan Bumi: Kondisi geologis dan kimiawi ekstrem yang memungkinkan kehidupan.",
              "Sejarah Manusia Sains: Sisi manusiawi, eksentrik, dan penuh ketidaksengajaan penemu ilmiah.",
              "Skala Waktu Geologis: Betapa singkatnya sejarah peradaban manusia dibanding usia Bumi."
            ],
            context: "Survei komprehensif sejarah penemuan sains populer."
          }
        ]
      },
      {
        label: "Evolusi & Antropologi Evolusi",
        books: [
          {
            id: "p1-s1-b0",
            type: "non-fiction",
            title: "The Selfish Gene",
            author: "Richard Dawkins",
            year: 1976,
            pages: 360,
            desc: "Buku yang mengubah cara berpikir tentang evolusi — bukan individu atau spesies yang berjuang bertahan hidup, tapi gen 'egois' yang menggunakan tubuh sebagai kendaraan bertahan. Dawkins juga memperkenalkan konsep meme di sini, jauh sebelum jadi istilah internet — fondasi wajib memahami logika evolusi.",
            takeaways: [
              "Gene-Centric View of Evolution: Gen sebagai unit utama seleksi alam.",
              "Survival Machines: Organisme biologis dibangun gen demi replikasi.",
              "Konsep Meme: Unit Replikasi Budaya yang berkembang seperti gen."
            ],
            context: "Landasan utama cara berpikir logika evolusioner modern."
          },
          {
            id: "p1-s1-b1",
            type: "non-fiction",
            title: "The Third Chimpanzee",
            author: "Jared Diamond",
            year: 1991,
            pages: 360,
            desc: "Diamond mengeksplorasi kemiripan genetik manusia dengan simpanse (98%) sambil menjelaskan lompatan besar yang membuat manusia sangat berbeda — bahasa, seni, kecanduan zat, sampai kecenderungan menghancurkan lingkungan sendiri. Cara masuk yang baik ke antropologi evolusi, lebih personal dan spekulatif dari Guns, Germs, and Steel.",
            takeaways: [
              "Kemiripan Genetik 98.6%: Batas biologis tipis antara simpanse dan manusia.",
              "Lompatan Besar Kognitif: Bahasa, seni, dan teknologi sebagai pembeda utama.",
              "Sifat Ganda Kemanusiaan: Kecenderungan seni dan budaya vs genosida dan perusakan alam."
            ],
            context: "Memahami aspek biologis unik dan kecenderungan destruktif spesies manusia."
          },
          {
            id: "p1-s1-b2",
            type: "non-fiction",
            title: "The Story of the Human Body",
            author: "Daniel Lieberman",
            year: 2013,
            pages: 460,
            desc: "Ahli antropologi evolusi Harvard ini menjelaskan bagaimana tubuh manusia berevolusi untuk lingkungan pemburu-pengumpul, dan kenapa banyak penyakit modern (diabetes, obesitas, sakit punggung) adalah 'mismatch' antara tubuh purba dan gaya hidup modern. Berisi banyak insight praktis soal makan, gerak, dan tidur.",
            takeaways: [
              "Evolutionary Mismatch: Ketidakcocokan anatomi Paleolitikum dengan gaya hidup modern.",
              "Adaptasi Bipedalisme & Ketahanan Berlari: Bagaimana tubuh manusia berevolusi untuk bertahan di sabana.",
              "Penyakit Modern Mismatch: Diabetes, obesitas, dan penyakit kronis akibat gaya hidup pasif."
            ],
            context: "Dasar biologi kesehatan dan anatomi evolusi manusia."
          },
          {
            id: "p1-s1-b3",
            type: "non-fiction",
            title: "Behave",
            author: "Robert Sapolsky",
            year: 2017,
            pages: 800,
            desc: "Buku tebal dan ambisius yang menjelaskan perilaku manusia dari berbagai skala waktu sekaligus — apa yang terjadi di otak sedetik sebelum tindakan, sampai bagaimana evolusi membentuknya jutaan tahun lalu. Sapolsky terkenal mampu menjelaskan neuroscience kompleks dengan humor dan bahasa jernih.",
            takeaways: [
              "Multiskala Waktu Perilaku: Dari detik (neurobiologi), jam (hormon), hingga ribuan tahun (evolusi).",
              "Dua Sisi Amigdala & Prefrontal Cortex: Konflik emosi naluriah vs kontrol eksekutif.",
              "Us vs Them Dynamics: Mekanisme biologi di balik prasangka sosial dan kesetiaan kelompok."
            ],
            context: "Mahakarya neurobiologi perilaku manusia terlengkap."
          },
          {
            id: "p1-s1-b4",
            type: "non-fiction",
            title: "The Gene: An Intimate History",
            author: "Siddhartha Mukherjee",
            year: 2016,
            pages: 608,
            desc: "Sejarah genetika yang ditulis sangat naratif, dari eksperimen kacang polong Mendel sampai era CRISPR dan rekayasa gen modern, diselingi kisah personal penulis tentang riwayat penyakit mental dalam keluarganya. Memberi konteks sejarah yang hilang kalau langsung loncat ke buku genetika modern.",
            takeaways: [
              "Sejarah Penemuan Genetik: Dari Mendel, Watson-Crick, hingga Proyek Genom Manusia.",
              "Penyuntingan Gen CRISPR: Potensi dan bahaya etis rekayasa genetika.",
              "Genetika vs Takdir: Interaksi kompleks antara gen, lingkungan, dan kebetulan."
            ],
            context: "Perspektif sejarah dan etika biologi molekuler."
          }
        ]
      },
      {
        label: "Neuroscience & Psikologi Individu",
        books: [
          {
            id: "p1-s2-b0",
            type: "non-fiction",
            title: "Incognito",
            author: "David Eagleman",
            year: 2011,
            pages: 304,
            desc: "Eagleman menunjukkan lewat riset neuroscience bahwa sebagian besar keputusan otak diambil di bawah alam sadar — otak 'sadar' hanya melihat hasil akhirnya, seolah dialah yang memutuskan. Buku ini mengguncang asumsi umum soal kehendak bebas dan kontrol diri, ditulis ringan dan penuh contoh kasus nyata.",
            takeaways: [
              "Sub-Personal Machinery: Sebagian besar pengolahan otak terjadi di luar kesadaran.",
              "Ilusi Kontrol Sadar: Otak sadar berfungsi sebagai CEO yang menerima laporan akhir.",
              "Implikasi Hukum & Kehendak Bebas: Mempertanyakan konsep pertanggungjawaban pidana."
            ],
            context: "Membongkar ilusi kesadaran penuh dalam pengambilan keputusan."
          },
          {
            id: "p1-s2-b1",
            type: "non-fiction",
            title: "The Brain That Changes Itself",
            author: "Norman Doidge",
            year: 2007,
            pages: 427,
            desc: "Kumpulan kisah nyata pasien dengan kerusakan otak berat yang pulih lewat neuroplastisitas — kemampuan otak menata ulang dirinya sendiri, jauh melampaui yang dulu dikira mungkin oleh sains medis. Ditulis seperti kumpulan cerita klinis yang mengharukan sekaligus ilmiah.",
            takeaways: [
              "Prinsip Neuroplastisitas: Otak terus mengubah jalurnya berdasarkan pengalaman.",
              "Use It or Lose It: Mekanisme persaingan sirkuit saraf otak.",
              "Pemulihan Trauma & Kerusakan: Kasus klinis nyata penyembuhan otak."
            ],
            context: "Memahami kapasitas fleksibilitas dan pemulihan sistem saraf."
          },
          {
            id: "p1-s2-b2",
            type: "non-fiction",
            title: "The Blank Slate",
            author: "Steven Pinker",
            year: 2002,
            pages: 509,
            desc: "Bantahan panjang terhadap tiga doktrin populer — manusia lahir sebagai kertas kosong, pikiran manusia baik secara alami, dan ada 'ghost in the machine' yang mengendalikan tubuh — dengan bukti bahwa sifat bawaan dan pengalaman selalu berinteraksi. Kontroversial saat terbit karena menantang asumsi ideologis tentang sifat manusia.",
            takeaways: [
              "Bantahan Tabula Rasa: Kodrat biologis bawaan manusia itu nyata.",
              "Interaksi Nature vs Nurture: Gen dan lingkungan saling membentuk secara konstan.",
              "Implikasi Politik & Sosial: Memahami kodrat manusia tanpa dogmatisme ideologis."
            ],
            context: "Penyamaan perspektif biologis vs sosiologis sifat manusia."
          },
          {
            id: "p1-s2-b3",
            type: "non-fiction",
            title: "Attached",
            author: "Amir Levine & Rachel Heller",
            year: 2010,
            pages: 304,
            desc: "Menerapkan teori attachment (awalnya untuk bayi-orang tua) ke hubungan romantis orang dewasa, membagi gaya attachment jadi secure, anxious, dan avoidant. Buku ini memberi kerangka konkret memahami pola berulang dalam hubungan — kenapa sebagian orang butuh kedekatan konstan, sebagian lain menjaga jarak.",
            takeaways: [
              "Tiga Gaya Kelekatan Biologis: Anxious, Avoidant, dan Secure.",
              "Dependency Paradox: Ketergantungan sehat justru memberi kebebasan independen.",
              "Navigasi Hubungan: Mengatasi ketidakcocokan gaya attachment."
            ],
            context: "Peta psikologi hubungan dan kebutuhan keintiman."
          },
          {
            id: "p1-s2-b4",
            type: "non-fiction",
            title: "The Moral Animal",
            author: "Robert Wright",
            year: 1994,
            pages: 466,
            desc: "Menjelaskan moralitas, cemburu, status sosial, dan bahkan perselingkuhan lewat lensa psikologi evolusioner, menggunakan biografi Charles Darwin sendiri sebagai studi kasus. Wright menunjukkan banyak 'dosa' manusia sebenarnya strategi reproduktif yang masuk akal secara evolusi, meski tidak selalu etis di dunia modern.",
            takeaways: [
              "Akar Evolusi Moralitas: Altruisme timbal balik dan seleksi kerabat.",
              "Strategi Reproduktif: Mengapa rasa cemburu dan ambisi status terbentuk secara biologis.",
              "Kesadaran Diri Etis: Memahami dorongan evolusi untuk membuat pilihan etis yang lebih baik."
            ],
            context: "Studi psikologi evolusioner moralitas manusia."
          },
          {
            id: "p1-s2-b5",
            type: "non-fiction",
            title: "How Emotions Are Made",
            author: "Lisa Feldman Barrett",
            year: 2017,
            pages: 448,
            desc: "Pakar neurosains Lisa Feldman Barrett membongkar mitos emosi klasik. Ia membuktikan emosi bukanlah reaksi bawaan otomatis yang terpicu secara universal, melainkan konstruksi otak berdasarkan prediksi, pengalaman masa lalu, dan konsep budaya. Mengubah pemahaman mendasar kita tentang regulasi emosi.",
            takeaways: [
              "Teori Constructed Emotion: Otak memprediksi emosi berdasarkan interosepsi dan konsep.",
              "Bantahan Mitos Emosi Universal: Emosi tidak memiliki 'sidik jari' biologis tetap di otak.",
              "Penguasaan Pengategorian Emosi: Memperkaya kosa kata emosi meningkatkan regulasi diri."
            ],
            context: "Paradigma baru neurosains emosi dan kesehatan mental."
          },
          {
            id: "p1-s2-b6",
            type: "non-fiction",
            title: "The Body Keeps the Score",
            author: "Bessel van der Kolk",
            year: 2014,
            pages: 464,
            desc: "Pakar trauma terkemuka Bessel van der Kolk menjelaskan bagaimana pengalaman trauma secara harfiah mengubah jalur fisik otak dan saraf tubuh. Mengungkap hubungan antara pikiran, tubuh, trauma, dan proses penyembuhan yang melampaui sekadar terapi wicara.",
            takeaways: [
              "Jejak Fisik Trauma: Trauma mengubah amigdala, hipokampus, dan sistem saraf otonom.",
              "Pentingnya Kesadaran Tubuh: Penyembuhan membutuhkan koneksi ulang mind-body.",
              "Metode Pemulihan Somatik: Terapi berbasis tubuh, gerak, dan mindfulness."
            ],
            context: "Landasan penting pemulihan sistem saraf dan pemahaman trauma."
          }
        ]
      },
      {
        label: "Kognisi & Bias",
        books: [
          {
            id: "p1-s3-b0",
            type: "non-fiction",
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            year: 2011,
            pages: 499,
            desc: "Karya pemenang Nobel ini membedah dua sistem berpikir manusia — System 1 yang cepat dan intuitif tapi sering keliru, serta System 2 yang lambat dan analitis tapi malas dipakai. Kahneman memaparkan puluhan bias kognitif lewat eksperimen yang sudah jadi rujukan standar psikologi dan ekonomi perilaku.",
            takeaways: [
              "Dualitas System 1 vs System 2: Berpikir cepat intuitif vs analitis lambat.",
              "Puluhan Bias Kognitif: Anchoring, availability heuristic, loss aversion, dan confirmation bias.",
              "WYSIATI (What You See Is All There Is): Kecenderungan membuat keputusan dari data parsial."
            ],
            context: "Rujukan utama psikologi kognitif dan bias penilaian manusia."
          },
          {
            id: "p1-s3-b1",
            type: "non-fiction",
            title: "Predictably Irrational",
            author: "Dan Ariely",
            year: 2008,
            pages: 304,
            desc: "Kumpulan eksperimen perilaku ekonomi yang menunjukkan keputusan manusia irasional secara konsisten dan bisa diprediksi, bukan acak. Ariely membahas topik konkret sehari-hari — kenapa 'gratis' begitu menggoda, kenapa harga jangkar memengaruhi persepsi nilai — lebih ringan dan aplikatif dibanding Kahneman.",
            takeaways: [
              "Kekuatan Efek 'Gratis': Nilai nol memicu emosi ketakutan rugi irasional.",
              "Norma Sosial vs Norma Pasar: Memisahkan hubungan finansial dan personal.",
              "Efek Penjangkaran (Anchoring): Harga pertama menentukan nilai batas psikologis."
            ],
            context: "Studi kasus eksperimental ekonomi perilaku sehari-hari."
          }
        ]
      }
    ]
  },
  {
    id: "phase-2",
    tag: "FASE 2",
    tagClass: "",
    title: "Pikiran, Makna, & Bahasa",
    note: "Software di atas hardware — cara pikiran membentuk realitas.",
    sections: [
      {
        label: "Bahasa & Kognisi",
        books: [
          {
            id: "p2-s0-b0",
            type: "non-fiction",
            title: "The Language Instinct",
            author: "Steven Pinker",
            year: 1994,
            pages: 494,
            desc: "Berargumen bahasa adalah insting biologis bawaan seperti kemampuan melihat, bukan sekadar produk budaya yang dipelajari dari nol. Pinker memakai bukti dari linguistik, perkembangan anak, dan kasus neurologis untuk mendukung klaim ini — fondasi memahami kenapa semua manusia mengembangkan bahasa dengan struktur serupa.",
            takeaways: [
              "Universal Grammar: Tata bahasa biologis bawaan menurut Noam Chomsky.",
              "Bahasa Sebagai Organ Spesial: Perkembangan bahasa spontan pada anak-anak.",
              "Linguistik Kognitif: Hubungan antara struktur bahasa dan pengolahan pikiran."
            ],
            context: "Fondasi biologis ilmu linguistik dan komunikasi."
          },
          {
            id: "p2-s0-b1",
            type: "non-fiction",
            title: "Metaphors We Live By",
            author: "George Lakoff & Mark Johnson",
            year: 1980,
            pages: 256,
            desc: "Menunjukkan metafora bukan sekadar hiasan bahasa (seperti 'waktu adalah uang'), tapi struktur dasar yang membentuk cara kita berpikir dan bertindak tanpa disadari. Buku pendek tapi berpengaruh besar di linguistik kognitif — setelah membaca ini, sulit tidak memperhatikan metafora tersembunyi di percakapan sehari-hari.",
            takeaways: [
              "Conceptual Metaphor Theory: Metafora membentuk arsitektur persepsi manusia.",
              "Metafora Spasial & Tubuh: Konsep abstrak dibangun dari pengalaman fisik.",
              "Pengaruh Pada Tindakan: Bagaimana metafora mempengaruhi keputusan politik dan sosial."
            ],
            context: "Kunci memahami struktur bawah sadar persepsi pikiran."
          }
        ]
      },
      {
        label: "Filsafat & Epistemologi",
        books: [
          {
            id: "p2-s1-b0",
            type: "fiction",
            title: "Sophie's World",
            author: "Jostein Gaarder",
            year: 1991,
            pages: 518,
            desc: "[Fiksi Pendamping] Novel yang membungkus seluruh sejarah filsafat Barat — dari Socrates sampai Sartre — dalam kisah seorang remaja yang menerima surat misterius berisi pertanyaan filosofis. Cara paling ramah untuk masuk ke dunia filsafat tanpa harus baca teks asli yang berat dulu.",
            takeaways: [
              "Survei Filsafat Barat: Menelusuri pemikiran Pra-Sokrates hingga Eksistensialisme.",
              "Pertanyaan Fondasional: Siapa kita dan dari mana dunia berasal?",
              "Pendidikan Filosofis Naratif: Mengemas sejarah ide secara imajinatif."
            ],
            context: "Gerbang pengantar paling accessible untuk sejarah filsafat."
          },
          {
            id: "p2-s1-b1",
            type: "non-fiction",
            title: "The Structure of Scientific Revolutions",
            author: "Thomas Kuhn",
            year: 1962,
            pages: 264,
            desc: "Buku asal istilah 'paradigm shift' — Kuhn berargumen sains tidak berkembang linear dan akumulatif, tapi lewat periode normal science yang tiba-tiba direvolusi ketika anomali menumpuk dan paradigma lama runtuh. Mengubah cara filsafat ilmu memandang bagaimana pengetahuan ilmiah sebenarnya berubah.",
            takeaways: [
              "Konsep Paradigm Shift: Bagaimana pandangan dunia sains runtuh dan berganti.",
              "Normal Science vs Krisis: Tahapan akumulasi anomali dalam evolusi sains.",
              "Inkomensurabilitas Paradigma: Kesulitan membandingkan dua paradigma yang berbeda."
            ],
            context: "Karya paling monumental dalam sosiologi dan filsafat sains."
          }
        ]
      },
      {
        label: "Kesadaran & Pikiran",
        books: [
          {
            id: "p2-s2-b0",
            type: "non-fiction",
            title: "I Am a Strange Loop",
            author: "Douglas Hofstadter",
            year: 2007,
            pages: 412,
            desc: "Eksplorasi mendalam soal apa itu kesadaran dan 'aku', lewat konsep loop rekursif — sistem yang mengacu pada dirinya sendiri, seperti gambar tangan yang menggambar tangan yang menggambarnya. Hofstadter menyederhanakan idenya dari buku Gödel, Escher, Bach yang lebih tebal.",
            takeaways: [
              "Self-Referential Loop: Kesadaran sebagai umpan balik simbolis rekursif.",
              "Ilusi Entitas 'Aku': Bagaimana sistem matematika dan saraf melahirkan ilusi jiwa.",
              "Tingkatan Simbolik Otak: Dari neuron sederhana hingga ide abstrak berkesadaran."
            ],
            context: "Eksplorasi unik hakikat kesadaran dan jati diri."
          }
        ]
      },
      {
        label: "Sistem & Kompleksitas",
        books: [
          {
            id: "p2-s3-b0",
            type: "non-fiction",
            title: "Thinking in Systems",
            author: "Donella Meadows",
            year: 2008,
            pages: 240,
            desc: "Panduan esensial berpikir sistemik dari pelopor pemodelan kompleksitas Donella Meadows. Mengajarkan cara melihat dunia bukan sebagai rantai sebab-akibat linear, melainkan sebagai jaringan interaktif berisi feedback loops, akumulasi stok, dan leverage points untuk memecahkan masalah kompleks.",
            takeaways: [
              "Feedback Loops (Reinforcing & Balancing): Mekanisme utama dinamika sistem.",
              "Stok & Aliran (Stocks & Flows): Memahami pengakumulasian energi dan data.",
              "Leverage Points: Titik intervensi paling efektif untuk mengubah perilaku sistem."
            ],
            context: "Kerangka berpikir sistemik untuk memahami fenomena kompleks."
          }
        ]
      }
    ]
  },
  {
    id: "phase-3",
    tag: "FASE 3",
    tagClass: "",
    title: "Dari Individu ke Masyarakat",
    note: "Bagaimana kelompok, budaya, dan peradaban kebentuk.",
    sections: [
      {
        label: "Sejarah & Antropologi Budaya",
        books: [
          {
            id: "p3-s0-b0",
            type: "non-fiction",
            title: "Sapiens",
            author: "Yuval Noah Harari",
            year: 2011,
            pages: 443,
            desc: "Sejarah singkat umat manusia yang berargumen kemampuan unik Homo sapiens adalah mempercayai mitos bersama — uang, negara, agama, hak asasi — yang memungkinkan kerja sama dalam skala jutaan orang tak saling kenal. Ditulis sangat readable meski dikritik sejumlah akademisi karena oversimplifikasi.",
            takeaways: [
              "Kemampuan Fiksi Bersama (Inter-subjective Reality): Kunci kolaborasi massal Sapiens.",
              "Tiga Revolusi Besar: Revolusi Kognitif, Pertanian, dan Ilmiah.",
              "Domestikasi Manusia Oleh Tanaman: Sisi gelap revolusi pertanian."
            ],
            context: "Peta makro sejarah peradaban dan mitos kolektif manusia."
          },
          {
            id: "p3-s0-b1",
            type: "non-fiction",
            title: "The Dawn of Everything",
            author: "David Graeber & David Wengrow",
            year: 2021,
            pages: 704,
            desc: "Buku tebal yang sengaja menantang narasi linear ala Sapiens soal evolusi peradaban, dengan bukti arkeologi bahwa masyarakat purba jauh lebih beragam dan eksperimental secara politik dari yang diasumsikan. Ditulis antropolog dan arkeolog, penting sebagai penyeimbang narasi tunggal soal asal-usul peradaban.",
            takeaways: [
              "Bantahan Narasi Evolution Linear: Masyarakat purba bereksperimen dengan berbagai sistem politik.",
              "Kebebasan Manusia Purba: Kebebasan berpindah, membangkang, dan mengubah sistem sosial.",
              "Revisi Arkeologi Modern: Bukti konkret keberagaman peradaban pra-sejarah."
            ],
            context: "Penyeimbang antropologis terhadap sejarah linear peradaban."
          },
          {
            id: "p3-s0-b2",
            type: "non-fiction",
            title: "Guns, Germs, and Steel",
            author: "Jared Diamond",
            year: 1997,
            pages: 480,
            desc: "Menjawab kenapa sebagian peradaban menaklukkan yang lain, bukan sebaliknya — Diamond berargumen jawabannya geografi dan lingkungan (ketersediaan tanaman-hewan yang bisa didomestikasi, arah benua), bukan superioritas ras atau budaya. Pemenang Pulitzer yang jadi rujukan standar, meski juga banyak didebat akademisi.",
            takeaways: [
              "Determinisme Biogeografis: Faktor geografi menentukan nasib bangsa.",
              "Domestikasi Spesies: Keberuntungan flora dan fauna di Benua Eurasia.",
              "Poros Timur-Barat vs Utara-Selatan: Kemudahan penyebaran teknologi dan pertanian."
            ],
            context: "Penjelasan geografi di balik ketimpangan peradaban dunia."
          },
          {
            id: "p3-s0-b3",
            type: "non-fiction",
            title: "Nisa",
            author: "Marjorie Shostak",
            year: 1981,
            pages: 402,
            desc: "Kisah hidup nyata seorang perempuan suku !Kung San di gurun Kalahari, direkam lewat wawancara mendalam oleh seorang antropolog perempuan. Studi kasus konkret dan personal — cinta, seks, kelahiran, kematian — dari cara hidup sangat berbeda, membuka mata bahwa banyak hal yang dianggap 'kodrat manusia' ternyata sangat spesifik budaya.",
            takeaways: [
              "Etnografi Pemburu-Pengumpul: Kehidupan nyata masyarakat skala kecil.",
              "Kesetaraan Gender & Pengasuhan: Struktur sosial !Kung San.",
              "Relativisme Budaya Konkret: Membuka blindspot norma Barat."
            ],
            context: "Studi kasus antropologi intim masyarakat pra-modern."
          },
          {
            id: "p3-s0-b4",
            type: "fiction",
            title: "Things Fall Apart",
            author: "Chinua Achebe",
            year: 1958,
            pages: 209,
            desc: "[Fiksi Pendamping] Mahakarya sastra Afrika karya Chinua Achebe. Mengisahkan kehidupan Okonkwo dan kehancuran gradual struktur masyarakat Igbo di Nigeria akibat datangnya kolonialisme dan misionaris Eropa. Memberikan gambaran naratif konkret atas benturan peradaban.",
            takeaways: [
              "Struktur Sosial Igbo Pra-Kolonial: Norma, tradisi, dan dinamika maskulinitas lokal.",
              "Benturan Peradaban & Institusi Asing: Keruntuhan tatanan tradisional akibat kolonialisme.",
              "Tragedi Budaya: Suara otentik masyarakat yang terkolonisasi."
            ],
            context: "Dramatisasi naratif keruntuhan tatanan budaya lokal."
          },
          {
            id: "p3-s0-b5",
            type: "non-fiction",
            title: "The Social Construction of Reality",
            author: "Berger & Luckmann",
            year: 1966,
            pages: 240,
            desc: "Karya fondasional sosiologi pengetahuan yang menjelaskan bagaimana realitas sosial — institusi, peran, norma — dibangun lewat kebiasaan bersama sampai terasa objektif dan 'taken for granted', padahal hasil konstruksi manusia sendiri. Kunci memahami kenapa 'normal' itu relatif terhadap masyarakat tertentu.",
            takeaways: [
              "Tiga Tahap Konstruksi Sosial: Eksternalisasi, Objektivasi, dan Internalisasi.",
              "Reifikasi (Reification): Menganggap buatan manusia sebagai hukum alam mutlak.",
              "Sosialisasi Primer & Sekunder: Bagaimana generasi baru menyerap norma."
            ],
            context: "Landasan sosiologi pengetahuan dan konstruksi norma sosial."
          },
          {
            id: "p3-s0-b6",
            type: "non-fiction",
            title: "Bowling Alone",
            author: "Robert Putnam",
            year: 2000,
            pages: 544,
            desc: "Menelusuri penurunan tajam modal sosial dan partisipasi komunitas di Amerika sejak pertengahan abad 20 — orang makin jarang gabung klub, kenal tetangga, atau terlibat organisasi lokal. Putnam mengaitkan tren ini dengan berbagai masalah sosial modern, relevan untuk memahami isolasi sosial di era digital.",
            takeaways: [
              "Kemerosotan Modal Sosial (Social Capital): Penurunan ikatan komunitas warga.",
              "Bonding vs Bridging Capital: Perbedaan ikatan internal vs lintas kelompok.",
              "Dampak Pada Demokrasi & Kesehatan: Hubungan partisipasi warga dengan kesejahteraan."
            ],
            context: "Analisis kemerosotan komunitas dan modal sosial masyarakat modern."
          }
        ]
      }
    ]
  },
  {
    id: "phase-4",
    tag: "FASE 4",
    tagClass: "",
    title: "Kekuasaan, Ekonomi, Kepercayaan",
    note: "Struktur yang mengatur tatanan hidup manusia skala besar.",
    sections: [
      {
        label: "Ekonomi Politik & Institusi",
        books: [
          {
            id: "p4-s0-b0",
            type: "non-fiction",
            title: "Why Nations Fail",
            author: "Acemoglu & Robinson",
            year: 2012,
            pages: 544,
            desc: "Berargumen institusi politik-ekonomi — apakah 'inclusive' (memberi insentif luas) atau 'extractive' (menguntungkan segelintir elite) — adalah penentu utama kemakmuran atau kegagalan sebuah bangsa, bukan geografi atau budaya. Didukung studi kasus historis dari berbagai benua.",
            takeaways: [
              "Institusi Inklusif vs Ekstraktif: Kunci utama kemakmuran atau kemiskinan bangsa.",
              "Vicious & Virtuous Circles: Bagaimana institusi mereplikasi dirinya sendiri.",
              "Creative Destruction: Inovasi ekonomi membutuhkan keterbukaan politik."
            ],
            context: "Teori utama ekonomi politik kemakmuran berbangsa."
          },
          {
            id: "p4-s0-b1",
            type: "non-fiction",
            title: "Debt: The First 5000 Years",
            author: "David Graeber",
            year: 2011,
            pages: 544,
            desc: "Menantang narasi standar ekonomi bahwa uang muncul untuk menggantikan sistem barter — Graeber menunjukkan lewat bukti antropologi bahwa utang dan kredit sosial mendahului uang koin, dan sejarah utang selalu terkait erat dengan moralitas dan kekuasaan. Buku tebal dan provokatif yang mengguncang asumsi dasar ekonomi.",
            takeaways: [
              "Mitos Barter Ekonomi: Kredit sosial dan utang telah ada sebelum uang kertas/koin.",
              "Sejarah Moralitas Utang: Hubungan antara utang, kekerasan, dan negara.",
              "Siklus Uang Koin & Perang: Bagaimana ekspansi militer melahirkan sistem mata uang."
            ],
            context: "Sejarah antropologi ekonomi uang dan utang."
          },
          {
            id: "p4-s0-b2",
            type: "non-fiction",
            title: "The Rule of Law",
            author: "Tom Bingham",
            year: 2010,
            pages: 213,
            desc: "Ditulis mantan hakim agung Inggris, buku pendek ini menjelaskan dengan jernih apa sebenarnya makna 'rule of law' — bukan sekadar ada hukum tertulis, tapi delapan prinsip konkret seperti kesetaraan di depan hukum dan pembatasan kekuasaan negara. Sangat accessible untuk pembaca non-hukum.",
            takeaways: [
              "Delapan Pilar Rule of Law: Keadilan, aksesibilitas, dan kesetaraan di hadapan hukum.",
              "Pembatasan Otoritas Negara: Hukum melindungi individu dari kesewenang-wenangan.",
              "Perlindungan Hak Asasi Manasar: Hukum sebagai penjamin kebebasan sipil."
            ],
            context: "Uraian hukum tata negara dan supremasi hukum modern."
          },
          {
            id: "p4-s0-b3",
            type: "non-fiction",
            title: "On Liberty",
            author: "John Stuart Mill",
            year: 1859,
            pages: 128,
            desc: "Manuskrip klasik filosofis politik kebebasan individu. Mill merumuskan 'Harm Principle'—bahwa satu-satunya alasan yang sah bagi masyarakat atau negara untuk membatasi kebebasan seorang individu adalah untuk mencegah bahaya bagi orang lain. Fondasi penting memahami hak asasi dan batas kekuasaan negara.",
            takeaways: [
              "Prinsip Bahaya (Harm Principle): Batas sah kebebasan individu vs campur tangan negara.",
              "Kebebasan Berpikir & Berpendapat: Pentingnya diferensiasi gagasan dan diskusi terbuka.",
              "Bahaya Tirani Mayoritas: Perlindungan bagi minoritas dan cara pandang unorthodox."
            ],
            context: "Manuskrip fondasi filsafat liberalisme politik."
          }
        ]
      },
      {
        label: "Media & Propaganda",
        books: [
          {
            id: "p4-s1-b0",
            type: "non-fiction",
            title: "Manufacturing Consent",
            author: "Chomsky & Herman",
            year: 1988,
            pages: 412,
            desc: "Noam Chomsky dan Edward Herman membedah model propaganda media massa. Mengungkap bagaimana filter institusional (kepemilikan media, iklan, sumber otoritas, flak, dan ideologi musuh bersama) menyaring berita secara sistematis untuk mendukung agenda elite ekonomi dan politik.",
            takeaways: [
              "Model Propaganda Lima Filter: Kepemilikan, Iklan, Sourcing, Flak, dan Anti-Enemik.",
              "Penyaringan Informasi Organik: Tanpa konspirasi terbuka, media bekerja demi kepentingan sistem.",
              "Konsensus Yang Dibuat (Manufactured Consent): Mengarahkan persepsi publik secara halus."
            ],
            context: "Bedah struktural media massa dan kontrol opini publik."
          },
          {
            id: "p4-s1-b1",
            type: "fiction",
            title: "1984",
            author: "George Orwell",
            year: 1949,
            pages: 328,
            desc: "[Fiksi Pendamping] Distopia totaliter di mana kebenaran dikendalikan lewat manipulasi bahasa (Newspeak) dan pengawasan total Big Brother. Orwell mendramatisasi secara nyata apa yang ia tulis di esainya soal bahasa dan propaganda politik.",
            takeaways: [
              "Newspeak & Kontrol Pikiran: Membatasi kosa kata untuk membatasi kemampuan berpikir kritis.",
              "Doublethink & Pengawasan Total: Kemampuan mempercayai dua hal bertolak belakang sekaligus.",
              "Manipulasi Sejarah: 'Siapa yang menguasai masa lalu menguasai masa depan'."
            ],
            context: "Dramatisasi novel distopia totaliter dan kontrol informasi."
          }
        ]
      },
      {
        label: "Agama & Kepercayaan Komparatif",
        books: [
          {
            id: "p4-s2-b0",
            type: "non-fiction",
            title: "The World's Religions",
            author: "Huston Smith",
            year: 1991,
            pages: 416,
            desc: "Overview komparatif agama-agama besar dunia — Hindu, Buddha, Konghucu, Tao, Islam, Yahudi, Kristen — ditulis dengan nada penuh empati, mencoba memahami tiap agama dari dalam sebagaimana penganutnya memahaminya, bukan menghakimi dari luar. Salah satu pengantar studi agama paling dihormati.",
            takeaways: [
              "Perspektif Empatis Dari Dalam: Memahami nilai batiniah tiap tradisi agama.",
              "Kearifan Esoteris Bersama: Pencarian makna tertinggi dalam keberagaman doktrin.",
              "Studi Agama Komparatif: Memetakan tradisi Timur dan Barat."
            ],
            context: "Overview studi agama komparatif dunia paling dihormati."
          },
          {
            id: "p4-s2-b1",
            type: "non-fiction",
            title: "The Idea of the Holy",
            author: "Rudolf Otto",
            year: 1917,
            pages: 232,
            desc: "Karya fenomenologi agama yang memperkenalkan konsep 'numinous' — pengalaman terhadap yang sakral yang membuat manusia merasa kecil sekaligus terpukau, lepas dari doktrin agama tertentu manapun. Buku berat tapi penting untuk memahami agama 'dari dalam', bukan cuma sebagai fenomena sosial.",
            takeaways: [
              "Pengalaman Numinous: Misteri sakral di luar konsep rasional formal.",
              "Mysterium Tremendum et Fascinans: Keagungan yang menakutkan sekaligus memikat.",
              "Fenomenologi Keagamaan: Membedakan pengalaman langsung vs doktrin institusi."
            ],
            context: "Fenomenologi mendalam pengalaman religius manusia."
          }
        ]
      }
    ]
  },
  {
    id: "phase-5",
    tag: "FASE 5",
    tagClass: "",
    title: "Eksistensial & Makna",
    note: "Manusia berhadapan dengan kebebasan, makna, dan kematian.",
    sections: [
      {
        label: "Makna & Mortalitas",
        books: [
          {
            id: "p5-s0-b0",
            type: "non-fiction",
            title: "Man's Search for Meaning",
            author: "Viktor Frankl",
            year: 1946,
            pages: 184,
            desc: "Kesaksian seorang psikiater yang bertahan hidup di kamp konsentrasi Nazi, digabung dengan teori logoterapi-nya: manusia bisa bertahan dari penderitaan paling ekstrem sekalipun kalau menemukan makna di baliknya. Salah satu buku paling banyak mengubah hidup pembacanya sepanjang sejarah penerbitan.",
            takeaways: [
              "Prinsip Logoterapi: Kehendak untuk mencari makna (*Will to Meaning*) sebagai penggerak utama.",
              "Kebebasan Terakhir Manusia: Memilih sikap di tengah kondisi penderitaan apapun.",
              "Tiga Sumber Makna: Lewat karya/penciptaan, pengalaman/cinta, dan keberanian menderita."
            ],
            context: "Kesaksian eksistensial dan teori pencarian makna hidup."
          },
          {
            id: "p5-s0-b1",
            type: "non-fiction",
            title: "The Denial of Death",
            author: "Ernest Becker",
            year: 1973,
            pages: 314,
            desc: "Berargumen ketakutan akan kematian adalah motivator tersembunyi di balik hampir semua perilaku manusia — ambisi, agama, budaya, bahkan kekejaman — sebagai cara tak sadar melawan kefanaan diri. Pemenang Pulitzer ini jadi dasar Terror Management Theory dalam psikologi sosial modern.",
            takeaways: [
              "Hero Projects (Proyek Keabadian): Kebudayaan sebagai mekanisme pertahanan dari kematian.",
              "Dualitas Tubuh vs Pikiran: Tubuh fana vs imajinasi manusia yang tak terbatas.",
              "Terror Management Theory: Bagaimana kecemasan kematian membentuk perilaku kelompok."
            ],
            context: "Analisis psikologis ketakutan kematian dan dorongan budaya."
          },
          {
            id: "p5-s0-b2",
            type: "non-fiction",
            title: "Being Mortal",
            author: "Atul Gawande",
            year: 2014,
            pages: 282,
            desc: "Dokter bedah ini merefleksikan bagaimana sistem medis modern sering gagal menangani penuaan dan kematian dengan bermartabat, terlalu fokus memperpanjang hidup ketimbang menjaga kualitasnya. Ditulis lewat kisah pasien nyata, termasuk pengalaman pribadi Gawande dengan ayahnya sendiri.",
            takeaways: [
              "Kekurangan Medis Modern: Memperpanjang napas biologis dengan mengorbankan kualitas hidup.",
              "Martabat Di Akhir Hayat: Pentingnya mendengarkan prioritas dan keinginan pasien.",
              "Hospice & Perawatan Paliatif: Memilih kenyamanan dan hubungan daripada intervensi invasif."
            ],
            context: "Refleksi medis dan etis penuaan serta proses akhir hidup."
          },
          {
            id: "p5-s0-b3",
            type: "fiction",
            title: "The Death of Ivan Ilyich",
            author: "Leo Tolstoy",
            year: 1886,
            pages: 104,
            desc: "[Fiksi Pendamping] Novela pendek tentang pejabat biasa yang menyadari, saat sekarat, bahwa hidupnya yang tampak sukses sebenarnya kosong. Pendamping naratif sempurna untuk Being Mortal dan The Denial of Death.",
            takeaways: [
              "Kekosongan Hidup Konvensional: Menjelang ajal, status sosial terasa tak bermakna.",
              "Penyesalan Eksistensial: Kesadaran bahwa hidup tidak dijalani secara otentik.",
              "Kejujuran Di Akhir Hayat: Hanya empati sejati yang memberi kedamaian saat sekarat."
            ],
            context: "Novela klasik penggambaran penyesalan eksistensial kematian."
          },
          {
            id: "p5-s0-b4",
            type: "non-fiction",
            title: "The Myth of Sisyphus",
            author: "Albert Camus",
            year: 1942,
            pages: 212,
            desc: "Esai filosofis yang membuka dengan klaim terkenal: pertanyaan filosofis paling serius adalah apakah hidup layak dijalani. Camus mengeksplorasi 'absurd' lewat mitos Sisyphus yang dihukum mendorong batu selamanya, dan menyimpulkan kita harus membayangkan Sisyphus bahagia — menerima absurditas tanpa menyerah pada nihilisme.",
            takeaways: [
              "Konsep Absurdisme: Benturan hasrat makna manusia vs alam semesta yang acuh.",
              "Pemberontakan Eksistensial: Mengangkangi absurditas tanpa bunuh diri fisik atau filosofis.",
              "Sisyphus Bahagia: Menemukan kedamaian dan kebebasan dalam perjuangan tanpa jaminan."
            ],
            context: "Esai karya filosofis utama pemikiran Absurdisme."
          },
          {
            id: "p5-s0-b5",
            type: "fiction",
            title: "The Stranger",
            author: "Albert Camus",
            year: 1942,
            pages: 123,
            desc: "[Fiksi Pendamping] Pria menjalani hidup dengan ketidakpedulian emosional, sampai pembunuhan tanpa motif jelas mengantarnya ke pengadilan yang lebih menghukum sikapnya ketimbang tindakannya. Versi naratif langsung dari absurdisme Camus.",
            takeaways: [
              "Karakter Meursault: Penggambaran naratif individu yang hidup dalam absurdisme.",
              "Ketidakpedulian Alam Semesta: Eksekusi hukuman karena menolak kepura-puraan sosial.",
              "Penerimaan Dingin Realitas: Kejujuran emosional di hadapan vonis mati."
            ],
            context: "Novel pendamping langsung teori absurdisme Camus."
          }
        ]
      },
      {
        label: "Etika Komparatif & Filsafat Timur",
        books: [
          {
            id: "p5-s1-b0",
            type: "non-fiction",
            title: "Justice",
            author: "Michael Sandel",
            year: 2009,
            pages: 308,
            desc: "Berdasarkan kuliah paling populer di Harvard, buku ini memandu pembaca lewat dilema moral konkret (trolley problem, pajak, affirmative action) untuk membandingkan berbagai teori etika Barat — utilitarianisme, libertarianisme, Kantian, komunitarianisme. Sandel sengaja tidak memihak satu teori, mengajak pembaca berpikir sendiri.",
            takeaways: [
              "Tiga Pendekatan Keadilan: Utilitarisme, Kebebasan Kant/Rawls, dan Kebajikan Aristoteles.",
              "Dilema Moral Konkret: Menguji teori etika pada kasus dunia nyata.",
              "Pentingnya Diskusi Publik Kebajikan: Mengembalikan nilai moral ke dalam politik."
            ],
            context: "Pengantar filsafat etika dan keadilan publik paling accessible."
          },
          {
            id: "p5-s1-b1",
            type: "non-fiction",
            title: "The Analects",
            author: "Confucius",
            year: 1893,
            pages: 200,
            desc: "Kumpulan ucapan dan dialog Konfusius yang direkam murid-muridnya, berisi ajaran tentang etika, hubungan sosial, dan tata krama sebagai jalan menuju masyarakat harmonis. Berbeda dari filsafat Barat yang sistematis, gaya Konfusius lebih aforistik — representasi penting etika Timur yang menekankan relasi, bukan hak individu.",
            takeaways: [
              "Konsep Ren (Kemanusiaan/Kebajikan) & Li (Tata Krama): Pilar keharmonisan diri dan sosial.",
              "Etika Relasional Timur: Individu dipahami dalam jaringan hubungan keluarga dan masyarakat.",
              "Kepemimpinan Teladan (Junzi): Pemimpin memerintah lewat integritas moral."
            ],
            context: "Representasi teks klasik filsafat etika Timur Konfusianisme."
          },
          {
            id: "p5-s1-b2",
            type: "non-fiction",
            title: "The Tao Te Ching",
            author: "Lao Tzu",
            year: -400,
            pages: 96,
            desc: "Kitab suci Taoisme yang terdiri dari 81 puisi filosofis ringkas. Menawarkan pandangan etika dan kebijaksanaan Timur tentang keselarasan dengan alam (*Tao*), prinsip tindakan tanpa keterpaksaan (*Wu Wei*), kerendahan hati, dan keseimbangan alami.",
            takeaways: [
              "Konsep Tao (Jalan Alam): Mengalir bersama realitas alih-alih melawannya.",
              "Wu Wei (Effortless Action): Tindakan bijak yang tidak dipaksakan oleh ego.",
              "Yin & Yang: Keseimbangan dualitas dan kekuatan dalam kerendahan hati."
            ],
            context: "Teks suci filsafat kebijaksanaan Taoisme."
          },
          {
            id: "p5-s1-b3",
            type: "non-fiction",
            title: "Being and Time",
            author: "Martin Heidegger",
            year: 1927,
            pages: 589,
            desc: "Karya filsafat paling berat dan berpengaruh abad 20 ini mengeksplorasi apa artinya 'ada' lewat analisis eksistensi manusia, termasuk konsep being-toward-death — kesadaran akan kematian yang justru membuat hidup otentik. Fondasi eksistensialisme yang memengaruhi Sartre, Camus, dan banyak pemikir setelahnya.",
            takeaways: [
              "Konsep Dasein: Keberadaan manusia sebagai 'Being-in-the-world'.",
              "Being-Towards-Death: Kesadaran kematian sebagai syarat keotentikan hidup.",
              "Temporalitas & Keheningan: Waktu sebagai dimensi hakiki keberadaan manusia."
            ],
            context: "Mahakarya fenomenologi eksistensialisme abad 20."
          }
        ]
      }
    ]
  },
  {
    id: "phase-6",
    tag: "FASE 6",
    tagClass: "",
    title: "Arah ke Depan",
    note: "Teknologi, biosfer, dan risiko eksistensial yang mengubah semua lapisan.",
    sections: [
      {
        label: "Kecerdasan Buatan & Masa Depan",
        books: [
          {
            id: "p6-s0-b0",
            type: "non-fiction",
            title: "Life 3.0",
            author: "Max Tegmark",
            year: 2017,
            pages: 384,
            desc: "Fisikawan MIT ini memetakan berbagai skenario masa depan manusia berdampingan dengan kecerdasan buatan super, dari utopia sampai kepunahan, dan mengajak pembaca berpikir aktif menentukan arah mana yang diinginkan. Ditulis accessible, bagus sebagai pengantar sebelum masuk ke Superintelligence yang lebih teknis.",
            takeaways: [
              "Tahapan Kehidupan: Life 1.0 (biologis), Life 2.0 (budaya), Life 3.0 (desain hardware & software sendiri).",
              "Berbagai Skenario AI: Dari libertaria, pelindung baik hati, hingga pengambilalihan total.",
              "Pentingnya Alignment Saat Ini: Menentukan tujuan AI sebelum terjadi ledakan kecerdasan."
            ],
            context: "Panduan ilmiah prospektif era Artificial Intelligence."
          },
          {
            id: "p6-s0-b1",
            type: "non-fiction",
            title: "Superintelligence",
            author: "Nick Bostrom",
            year: 2014,
            pages: 352,
            desc: "Analisis filosofis-teknis serius soal apa yang terjadi kalau kecerdasan buatan melampaui kecerdasan manusia di segala bidang, dan kenapa mengontrolnya jauh lebih sulit dari yang dikira. Buku ini mempopulerkan banyak konsep AI safety yang sekarang jadi bidang riset serius — lebih berat dan pesimistis dibanding Life 3.0.",
            takeaways: [
              "Ledakan Kecerdasan (Intelligence Explosion): Kecepatan AI berkembang secara eksponensial.",
              "Orthogonality Thesis: Kecerdasan tinggi tidak menjamin nilai moral yang sejalan.",
              "Control Problem: Tantangan teknis mengunci AI super cerdas agar tetap aman."
            ],
            context: "Analisis risiko teknis dan filosofis AI Superintelligence."
          },
          {
            id: "p6-s0-b2",
            type: "non-fiction",
            title: "Homo Deus",
            author: "Yuval Noah Harari",
            year: 2015,
            pages: 450,
            desc: "Kelanjutan Sapiens yang menoleh ke depan — setelah manusia relatif menaklukkan kelaparan, wabah, dan perang, Harari berspekulasi ke mana ambisi manusia berikutnya: keabadian, kebahagiaan permanen, dan status ketuhanan lewat teknologi. Juga membahas bagaimana dataisme dan algoritma berpotensi menggantikan otoritas manusia.",
            takeaways: [
              "Ambisi Baru Manusia: Mengincar keabadian, kebahagiaan abadi, dan divine power.",
              "Agama Dataisme: Kepercayaan bahwa alam semesta terdiri dari aliran data.",
              "Pergeseran Otoritas: Algoritma mengenali kita lebih baik daripada kita mengenali diri sendiri."
            ],
            context: "Spekulasi sejarah masa depan kemanusiaan dan Dataisme."
          },
          {
            id: "p6-s0-b3",
            type: "fiction",
            title: "Frankenstein",
            author: "Mary Shelley",
            year: 1818,
            pages: 280,
            desc: "[Fiksi Pendamping] Cikal bakal fiksi ilmiah modern tentang ilmuwan yang menciptakan entitas hidup baru lalu kehilangan kendali atas ciptaannya. Peringatan etis naratif esensial sebelum mempelajari isu AI superintelligence.",
            takeaways: [
              "Tanggung Jawab Pencipta: Bahaya menciptakan kecerdasan tanpa memikirkan pengasuhannya.",
              "Reaksi Masyarakat Terhadap Yang Asing: Bagaimana penolakan sosial melahirkan kecenderungan destruktif.",
              "Hubungan Pencipta & Ciptaan: Tragedi ego sains yang lepas kontrol."
            ],
            context: "Cikal bakal novel peringatan etika sains dan ciptaan baru."
          }
        ]
      },
      {
        label: "Iklim & Biosfer",
        books: [
          {
            id: "p6-s1-b0",
            type: "non-fiction",
            title: "The Uninhabitable Earth",
            author: "David Wallace-Wells",
            year: 2019,
            pages: 320,
            desc: "Jurnalis David Wallace-Wells memaparkan realitas keras perubahan iklim secara mendalam dan mendesak. Melampaui isu kenaikan permukaan laut, buku ini memetakan dampak berantai iklim terhadap gelombang panas, krisis pangan, bencana ekonomi, konflik, dan geopolitik global dalam beberapa dekade mendatang.",
            takeaways: [
              "Dampak Kaskade Krisis Iklim: Gelombang panas, krisis pangan, dan migrasi massal.",
              "Bukan Sekadar Isu Lingkungan: Perubahan iklim merusak ekonomi dan stabilitas politik.",
              "Urgensi Tindakan Kolektif: Menghadapi potensi kehancuran ekosistem global."
            ],
            context: "Pemetaan mendesak risiko krisis iklim dan biosfer."
          }
        ]
      },
      {
        label: "Teknologi & Masyarakat Digital",
        books: [
          {
            id: "p6-s2-b0",
            type: "non-fiction",
            title: "The Age of Surveillance Capitalism",
            author: "Shoshana Zuboff",
            year: 2019,
            pages: 704,
            desc: "Profesor Harvard Shoshana Zuboff mengungkap kemunculan tatanan ekonomi baru: Kapitalisme Pengawasan. Menguraikan bagaimana raksasa teknologi mengklaim pengalaman pribadi manusia sebagai bahan baku gratis untuk diekstrak menjadi data perilaku dan memodifikasi perilaku manusia secara massal demi keuntungan.",
            takeaways: [
              "Surplus Perilaku (Behavioral Surplus): Ekstraksi data pribadi melampaui kebutuhan layanan.",
              "Modifikasi Perilaku Massal: Algoritma yang membentuk dan mengarahkan keputusan manusia.",
              "Ancaman Terhadap Otonomi Individu: Pergeseran kekuasaan dari demokrasi ke raksasa teknologi."
            ],
            context: "Analisis kritis tatanan ekonomi digital dan ekstrasi data."
          },
          {
            id: "p6-s2-b1",
            type: "fiction",
            title: "Brave New World",
            author: "Aldous Huxley",
            year: 1932,
            pages: 311,
            desc: "[Fiksi Pendamping] Distopia masa depan di mana kontrol sosial dilakukan bukan lewat penderitaan, melainkan lewat kenikmatan, kepuasan instan, rekayasa genetika, dan konsumerisme massal.",
            takeaways: [
              "Kontrol Lewat Kenikmatan: Menghilangkan kebebasan dengan memberikan kepuasan instan.",
              "Rekayasa Genetika & Kasta: Pengondisian sosial sejak dalam tabung reaksi.",
              "Kehilangan Kedalaman Jiwa: Menukar penderitaan dan seni demi kenyamanan dangkal."
            ],
            context: "Novel distopia kontrol sosial berbasis kenyamanan dan teknologi."
          }
        ]
      },
      {
        label: "Risiko Eksistensial",
        books: [
          {
            id: "p6-s3-b0",
            type: "non-fiction",
            title: "The Precipice",
            author: "Toby Ord",
            year: 2020,
            pages: 480,
            desc: "Ord memetakan risiko eksistensial — ancaman yang bisa memusnahkan atau melumpuhkan permanen potensi umat manusia, dari senjata nuklir sampai AI tak terkendali — dan berargumen kita hidup di masa paling berbahaya sekaligus paling menentukan dalam sejarah spesies. Penutup tepat untuk peta realitas dari asal-usul kosmos sampai masa depan manusia.",
            takeaways: [
              "Risiko Alam vs Buatan Manusia: Risiko buatan manusia (nuklir, pandemi rekayasa, AI) jauh melampaui ancaman alamiah.",
              "Tanggung Jawab Antar-Generasi: Kewajiban moral menjaga potensi masa depan peradaban.",
              "Grand Strategy Untuk Kemanusiaan: Langkah konkret mengamankan keberlangsungan spesies."
            ],
            context: "Penutup evaluasi risiko eksistensial kelangsungan peradaban manusia."
          }
        ]
      }
    ]
  },
  {
    id: "phase-lit",
    tag: "FASE SASTRA",
    tagClass: "lit",
    title: "Novel Magnum Opus — Paralel, Tidak Berurutan",
    note: "Karya sastra kelas dunia yang mendramatisasi tema tiap fase lewat cerita, bukan argumen. Selingi di antara buku nonfiksi, tidak perlu urut.",
    sections: [
      {
        label: "Sosial & Sejarah",
        books: [
          {
            id: "plit-s0-b0",
            type: "fiction",
            title: "War and Peace",
            author: "Leo Tolstoy",
            year: 1869,
            pages: 1225,
            desc: "Epik Napoleon-era Rusia yang mengikuti beberapa keluarga bangsawan lewat perang dan damai, mempertanyakan apakah sejarah digerakkan tokoh-tokoh besar atau kekuatan kolektif tak terlihat. Tolstoy menyelipkan esai panjang soal filsafat sejarah di tengah narasi — skalanya nyaris tak tertandingi dalam sastra dunia.",
            takeaways: [
              "Filsafat Sejarah Tolstoy: Penolakan teori 'Manusia Besar' sebagai penggerak sejarah.",
              "Dinamika Perang & Kedamaian: Potret kontras antara medan perang dan kehidupan keluarga bangsawan.",
              "Pencarian Makna Hidup Pierre: Perjalanan spiritual karakter utama menemukan kesederhanaan."
            ],
            context: "Mahakarya epik sejarah dan filsafat sejarah peradaban."
          },
          {
            id: "plit-s0-b1",
            type: "fiction",
            title: "One Hundred Years of Solitude",
            author: "Gabriel García Márquez",
            year: 1967,
            pages: 417,
            desc: "Kisah tujuh generasi keluarga Buendía di kota fiktif Macondo, mencampur sejarah Amerika Latin dengan hal-hal ajaib yang dianggap biasa. Karya paling ikonik realisme magis — alegori kolonialisme, perang saudara, dan kesepian sebagai warisan turun-temurun.",
            takeaways: [
              "Realisme Magis: Menghubungkan sejarah tragis dengan fantasi alami.",
              "Siklus Kesepian Berulang: Bagaimana trauma dan kesalahan sejarah mereplikasi diri lintas generasi.",
              "Alegori Amerika Latin: Dari penjajahan, perang saudara, hingga eksploitasi industri."
            ],
            context: "Puncak karya realisme magis dan alegori sejarah sosial."
          },
          {
            id: "plit-s0-b2",
            type: "fiction",
            title: "Don Quixote",
            author: "Miguel de Cervantes",
            year: 1605,
            pages: 863,
            desc: "Kisah bangsawan tua yang kehilangan akal karena kebanyakan baca novel ksatria, lalu berkelana meyakini dirinya ksatria sungguhan. Dianggap novel modern pertama, mendramatisasi benturan idealisme/ilusi dengan realitas — jembatan dari dunia mitos ke dunia modern yang skeptis.",
            takeaways: [
              "Idealisme vs Realitas Pragmatis: Benturan ilusi ksatria Don Quixote dengan kenyataan nyata Sancho Panza.",
              "Kritik Sastra & Mitos: Bagaimana narasi fiksi membentuk cara pandang dunia seseorang.",
              "Cikal Bakal Novel Modern: Eksplorasi perspektif subjektif karakter."
            ],
            context: "Novel modern pertama dalam sejarah sastra dunia."
          },
          {
            id: "plit-s0-b3",
            type: "fiction",
            title: "Beloved",
            author: "Toni Morrison",
            year: 1987,
            pages: 324,
            desc: "Kisah mantan budak yang dihantui secara harfiah oleh masa lalunya, mendramatisasi bagaimana trauma sejarah terus hidup lewat memori dan warisan. Pemenang Pulitzer, sering disebut novel Amerika terpenting pasca perang.",
            takeaways: [
              "Hantu Trauma Sejarah: Trauma perbudakan yang mewujud secara fisik.",
              "Dilema Ibu & Perbudakan: Keputusan tragis Sethe di bawah kekejaman sistemik.",
              "Memori Kolektif & Pemulihan: Mengingat kembali apa yang sengaja dilupakan."
            ],
            context: "Studi naratif mendalam trauma perbudakan dan memori kolektif."
          },
          {
            id: "plit-s0-b4",
            type: "fiction",
            title: "The Grapes of Wrath",
            author: "John Steinbeck",
            year: 1939,
            pages: 464,
            desc: "Keluarga petani miskin Oklahoma bermigrasi ke California saat Depresi Besar, menghadapi eksploitasi dan kemiskinan sistemik. Steinbeck menulis dengan kemarahan moral jelas terhadap ketimpangan ekonomi — menyambungkan ekonomi politik dengan penderitaan manusia yang sangat konkret.",
            takeaways: [
              "Ketimpangan Ekonomi Depresi Besar: Eksploitasi buruh tani oleh pemilik modal.",
              "Martabat & Solidaritas Kaum Tertindas: Daya tahan keluarga Joad di tengah penderitaan.",
              "Kritik Kapitalisme Ekstraktif: Menyambungkan ekonomi politik dengan penderitaan nyata."
            ],
            context: "Novel kritik sosial ketimpangan ekonomi dan migrasi."
          }
        ]
      },
      {
        label: "Kekuasaan & Politik",
        books: [
          {
            id: "plit-s1-b0",
            type: "fiction",
            title: "Animal Farm",
            author: "George Orwell",
            year: 1945,
            pages: 112,
            desc: "Fabel pendek tentang revolusi hewan ternak yang menggulingkan manusia, lalu perlahan pemimpinnya jadi setirani penguasa yang digulingkan. Alegori tajam soal revolusi ideal yang berujung tirani baru berwajah beda — padat dan cepat dibaca.",
            takeaways: [
              "Alegori Revolusi & Tirani Baru: Bagaimana cita-cita kesetaraan dibajak oleh babi penguasa.",
              "Manipulasi Slogan: Perubahan perlahan 7 Perintah Hewan demi melayani elite.",
              "Kepasifan Massa: Bagaimana ketidakpedulian rakyat memuluskan kediktatoran."
            ],
            context: "Fabel alegori korupsi kekuasaan dan korupsi ideologi."
          },
          {
            id: "plit-s1-b1",
            type: "fiction",
            title: "The Trial",
            author: "Franz Kafka",
            year: 1925,
            pages: 255,
            desc: "Seorang pria ditangkap dan diadili sistem pengadilan yang tak pernah menjelaskan tuduhannya, mendramatisasi kengerian birokrasi dan kekuasaan tak berwajah. 'Kafkaesque' jadi istilah tersendiri berkat buku ini.",
            takeaways: [
              "Kengerian Birokrasi Tak Berwajah: Sistem hukum yang terasing dari individu.",
              "Rasa Bersalah Tanpa Sebab: Ketidakpastian eksistensial individu di hadapan otoritas.",
              "Fenomena Kafkaesque: Perasaan terjebak dalam labirin aturan irasional."
            ],
            context: "Dramatisasi novel kengerian birokrasi dan otoritas tak berwajah."
          },
          {
            id: "plit-s1-b2",
            type: "fiction",
            title: "The Master and Margarita",
            author: "Mikhail Bulgakov",
            year: 1967,
            pages: 384,
            desc: "Setan datang ke Moskow era Soviet dan mengacaukan hidup para birokrat ateis, dijalin kisah paralel Pontius Pilatus dan Yesus. Satir liar dan filosofis, ditulis diam-diam era Stalin dan baru terbit setelah kematian penulisnya.",
            takeaways: [
              "Satir Birokrasi Soviet: Kedatangan iblis mengungkap pembungkaman seni dan hipokrisi.",
              "Garis Paralel Kebenaran: Pengadilan Pilatus vs penderitaan sang Master.",
              "Kekuatan Cinta & Kebebasan Seni: 'Manuskrip tidak bisa terbakar'."
            ],
            context: "Satir sastra terbaik terhadap penindasan ideologi negara."
          }
        ]
      },
      {
        label: "Eksistensial",
        books: [
          {
            id: "plit-s2-b0",
            type: "fiction",
            title: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            year: 1866,
            pages: 671,
            desc: "Mengikuti mahasiswa miskin yang membunuh untuk membuktikan teorinya soal manusia luar biasa, lalu tersiksa rasa bersalah yang menghancurkannya dari dalam. Salah satu studi psikologis paling intens dalam sastra, dijelajahi dari dalam kepala si pembunuh.",
            takeaways: [
              "Psikologi Rasa Bersalah: Kehancuran batin Raskolnikov pasca kejahatan.",
              "Kritik Utilitarisme Ekstrem: Bahaya merasa diri 'manusia luar biasa' di atas moral dasar.",
              "Penebusan & Kasih Sayang: Peran Sonia dalam pemulihan jiwa Raskolnikov."
            ],
            context: "Studi naratif psikologi kejahatan dan penyesalan moral terhebat."
          },
          {
            id: "plit-s2-b1",
            type: "fiction",
            title: "The Brothers Karamazov",
            author: "Fyodor Dostoevsky",
            year: 1880,
            pages: 824,
            desc: "Magnum opus Dostoevsky mengikuti tiga bersaudara dengan pandangan hidup berbeda (iman, rasionalitas, hedonisme) di tengah kematian misterius ayah mereka. Membahas problem kejahatan, kebebasan, dan keberadaan Tuhan — paling berat tapi dianggap puncak pencapaiannya.",
            takeaways: [
              "Problem Kejahatan & Penderitaan: Bab 'Grand Inquisitor' yang menguji iman dan kebebasan.",
              "Tiga Karakter Kunci: Ivan (Rasionalis), Alyosha (Spiritual), Dmitri (Emosional/Passionate).",
              "Tanggung Jawab Moral Kolektif: 'Setiap orang bertanggung jawab atas semua orang'."
            ],
            context: "Puncak mahakarya dialog filosofis eksistensialisme."
          },
          {
            id: "plit-s2-b2",
            type: "fiction",
            title: "Siddhartha",
            author: "Hermann Hesse",
            year: 1922,
            pages: 152,
            desc: "Novel puitis pemenang Nobel Hermann Hesse tentang perjalanan spiritual seorang pria India pada zaman Buddha. Menelusuri pencarian pencerahan lewat petapaan, kenikmatan duniawi, penderitaan, hingga menemukan kedamaian sejati di tepi sungai.",
            takeaways: [
              "Pencarian Pengalaman Sendiri: Pencerahan tidak bisa diajarkan lewat teori/guru saja.",
              "Siklus Kehidupan: Dari penolakan duniawi, kenikmatan materi, hingga kedamaian sejati.",
              "Simbol Sungai: Kesatuan waktu, perubahan konstan, dan keseimbangan alami."
            ],
            context: "Novel puitis pencarian makna spiritual dan pencerahan."
          },
          {
            id: "plit-s2-b3",
            type: "fiction",
            title: "Hamlet",
            author: "William Shakespeare",
            year: 1600,
            pages: 342,
            desc: "Pangeran Denmark berusaha membalas kematian ayahnya, terjebak keraguan eksistensial yang melumpuhkan tindakan. Monolog 'to be or not to be' jadi salah satu perenungan hidup-mati paling terkenal dalam sastra Barat.",
            takeaways: [
              "Kelumpuhan Akibat Ragu (Analysis Paralysis): Keraguan moral yang melumpuhkan tindakan.",
              "Perenungan Kematian & Kefanaan: Monolog 'To be or not to be'.",
              "Kepura-puraan & Kegilaan: Topeng sosial di istana yang korup."
            ],
            context: "Tragedi eksistensial Shakespeare paling berpengaruh."
          },
          {
            id: "plit-s2-b4",
            type: "fiction",
            title: "Moby-Dick",
            author: "Herman Melville",
            year: 1851,
            pages: 635,
            desc: "Kapten Ahab mengejar paus putih raksasa dengan obsesi yang perlahan menghancurkan kapal dan awaknya sendiri. Lebih dari kisah perburuan — alegori obsesi manusia mengejar makna di tengah alam semesta yang acuh.",
            takeaways: [
              "Bahaya Obsesi Absolut: Perburuan Kapten Ahab yang menghancurkan dirinya dan awaknya.",
              "Paus Putih Moby-Dick: Simbol keheningan dan kekuatan alam semesta yang tak terduga.",
              "Perspektif Ishmael: Pengamatan filosofis kehidupan pelayaran dan takdir."
            ],
            context: "Alegori epik perburuan obsesif dan alam semesta yang acuh."
          },
          {
            id: "plit-s2-b5",
            type: "fiction",
            title: "Waiting for Godot",
            author: "Samuel Beckett",
            year: 1953,
            pages: 109,
            desc: "Dua pengembara menunggu sosok bernama Godot yang tak pernah datang, mengisi waktu dengan percakapan absurd tanpa tujuan jelas. Drama absurdis paling terkenal, mendramatisasi kekosongan makna dan kebiasaan menunggu sesuatu yang mungkin tak pernah tiba.",
            takeaways: [
              "Teater Absurd: Eksplorasi kekosongan makna lewat dialog melingkar.",
              "Penantian Tanpa Akhir: Harapan palsu akan penyelamat eksternal.",
              "Kondisi Manusia: Mengisi waktu di tengah ruang eksistensial yang hampa."
            ],
            context: "Drama absurdisme penantian dan kekosongan makna."
          }
        ]
      },
      {
        label: "Masa Depan & Teknologi",
        books: [
          {
            id: "plit-s3-b0",
            type: "fiction",
            title: "Solaris",
            author: "Stanisław Lem",
            year: 1961,
            pages: 204,
            desc: "Ilmuwan di stasiun luar angkasa menghadapi planet lautan hidup yang memanifestasikan memori dan trauma terdalam mereka, mempertanyakan apakah manusia benar-benar bisa memahami kecerdasan yang benar-benar asing. Filosofis dan mengganggu, berlawanan dengan kebanyakan fiksi ilmiah optimis soal komunikasi antar spesies.",
            takeaways: [
              "Kecerdasan Yang Benar-benar Asing (Alien Intelligence): Keterbatasan antroposentrisme manusia.",
              "Manifestasi Trauma Batin: Planet lautan merefleksikan rasa bersalah ilmuwan.",
              "Batas Pengetahuan Ilmiah: Ketidakmampuan manusia memahami fenomena di luar kerangka kognitifnya."
            ],
            context: "Novel fiksi ilmiah filosofis batas pemahaman kecerdasan asing."
          }
        ]
      }
    ]
  }
];
