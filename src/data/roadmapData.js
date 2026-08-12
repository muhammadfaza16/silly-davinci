export const ROADMAP_DATA = [
  {
    id: "phase-0",
    tag: "FASE 0",
    tagClass: "comm",
    title: "Komunikasi & Kejernihan Berpikir",
    note: "Disiplin logika, presisi bahasa, dan seni penyampaian gagasan.",
    sections: [
      {
        label: "Kejernihan Berpikir & Logika",
        books: [
          {
            id: "p0-s0-b0",
            type: "non-fiction",
            title: "The Pyramid Principle",
            author: "Barbara Minto",
            year: 1987,
            pages: 176,
            desc: "Metode berpikir dan menulis ala McKinsey: mulai dari kesimpulan (Answer First), lalu susun argumen pendukung dalam kelompok logis berbentuk piramida.",
            takeaways: [
              "Prinsip Answer First: Sampaikan kesimpulan utama di awal.",
              "Kerangka SCQA: Situation, Complication, Question, Answer.",
              "Prinsip MECE: Mutually Exclusive, Collectively Exhaustive."
            ],
            context: "Fondasi utama untuk mengeliminasi penyampaian yang berbelit-belit."
          },
          {
            id: "p0-s0-b1",
            type: "non-fiction",
            title: "A Rulebook for Arguments",
            author: "Anthony Weston",
            year: 2008,
            pages: 120,
            desc: "Buku pegangan praktis menyusun argumen yang valid dan mengenali kesesatan berpikir (logical fallacies).",
            takeaways: [
              "Konstruksi Argumen Deduktif & Induktif.",
              "Identifikasi Logical Fallacies (Ad Hominem, Straw Man, False Dilemma).",
              "Penggunaan Contoh & Analogi yang Valid."
            ],
            context: "Panduan kritis untuk menguji keabsahan logika argumen."
          },
          {
            id: "p0-s0-b2",
            type: "non-fiction",
            title: "Clear Thinking",
            author: "Shane Parrish",
            year: 2023,
            pages: 304,
            desc: "Memetakan 'default' mental (ego, emosi, inersia) dan memberikan sistem konkret menciptakan jeda sebelum bereaksi.",
            takeaways: [
              "Mengenali Default Mental (Ego, Emosi, Posisi Sosial).",
              "Kekuatan Ordinary Moments dalam keputusan jangka panjang.",
              "Menciptakan Jeda (Margin of Safety)."
            ],
            context: "Menjaga disiplin mental dan emosional saat mengolah gagasan."
          }
        ]
      },
      {
        label: "Presisi Bahasa & Persuasi",
        books: [
          {
            id: "p0-s1-b0",
            type: "non-fiction",
            title: "Politics and the English Language (Esai)",
            author: "George Orwell",
            year: 1946,
            pages: 14,
            desc: "Esai klasik Orwell yang membongkar bagaimana bahasa kabur dan klise dipakai menyembunyikan pikiran kabur dan propaganda politik.",
            takeaways: [
              "Bahasa Kabur Sebagai Cermin Pikiran Kabur.",
              "6 Aturan Emas Orwell untuk Penulisan Jernih.",
              "Ketahanan Terhadap Propaganda Politik."
            ],
            context: "Melatih kepekaan terhadap manipulasi istilah dan klise dalam wacana publik."
          },
          {
            id: "p0-s1-b1",
            type: "non-fiction",
            title: "Thank You for Arguing",
            author: "Jay Heinrichs",
            year: 2007,
            pages: 368,
            desc: "Pengantar retorika klasik Aristoteles — ethos, pathos, logos — dikemas dalam panduan modern untuk persuasi beretika.",
            takeaways: [
              "Tiga Pilar Retorika: Ethos, Pathos, Logos.",
              "Retorika Deliberatif: Mengarahkan argumen ke solusi masa depan.",
              "Kairos: Memilih timing persuasi yang tepat."
            ],
            context: "Memahami seni persuasi dan negosiasi beretika."
          }
        ]
      }
    ]
  },
  {
    id: "phase-1",
    tag: "FASE 1",
    tagClass: "",
    title: "What Are We? — Evolusi, Biologi, & Arsitektur Kognitif",
    note: "Fondasi substrat: memahami Homo sapiens sebagai spesies biologis — evolusi, perilaku, bias kognitif, dan psikologi moral.",
    sections: [
      {
        label: "Evolusi Manusia & Antropologi",
        books: [
          {
            id: "p1-s0-b0",
            type: "non-fiction",
            title: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            year: 2011,
            pages: 443,
            desc: "Makro-narasi evolusi Homo sapiens — dari spesies marjinal ke penguasa planet. Konsep imagined orders (fiksi kolektif seperti uang, negara, hak asasi) sebagai fondasi peradaban dan kerja sama massal.",
            takeaways: [
              "Imagined Orders: Uang, negara, dan HAM adalah fiksi kolektif yang memungkinkan kooperasi skala besar.",
              "Revolusi Kognitif: Kemampuan berpikir abstrak dan bergosip sebagai keunggulan evolusioner.",
              "Revolusi Pertanian: Bukan manusia yang mendomestikasi gandum — gandum yang mendomestikasi manusia."
            ],
            context: "Entry point ideal yang meletakkan macro-frame untuk seluruh domain."
          },
          {
            id: "p1-s0-b1",
            type: "non-fiction",
            title: "The Third Chimpanzee",
            author: "Jared Diamond",
            year: 1991,
            pages: 407,
            desc: "Kenapa manusia berbeda dari primata lain padahal DNA kita 98.4% sama? Diamond menelusuri evolusi bahasa, seni, agriculture, penuaan, dan self-destructive behavior dari perspektif biologi komparatif.",
            takeaways: [
              "Great Leap Forward: Lonjakan kapabilitas kognitif ~50.000 tahun lalu.",
              "Seks & Seleksi Seksual: Peran seleksi seksual dalam evolusi perilaku manusia.",
              "Genocide & Ecocide: Kecenderungan destruktif manusia bukan anomali modern — ini pola evolusioner."
            ],
            context: "Lensa biologis-komparatif terhadap keunikan dan kerentanan spesies kita."
          },
          {
            id: "p1-s0-b2",
            type: "non-fiction",
            title: "Behave: The Biology of Humans at Our Best and Worst",
            author: "Robert Sapolsky",
            year: 2017,
            pages: 790,
            desc: "Magnum opus domain ini. Stanford primatologist menelusuri setiap perilaku manusia dari detik sebelumnya (neurotransmitter) sampai jutaan tahun sebelumnya (evolusi). Setelah buku ini, lo tidak bisa lagi bilang 'manusia pada dasarnya baik/jahat' — karena jawabannya depends on which timescale you're looking at.",
            takeaways: [
              "Multi-Timescale Analysis: Perilaku ditentukan oleh interaksi neurokimia, hormon, pengalaman masa kecil, budaya, dan evolusi sekaligus.",
              "Us vs Them: Otak manusia di-hardwire untuk tribalism — tapi batas 'them' bisa digeser.",
              "Free Will Illusion: Semakin lo memahami biologi, semakin sulit mempertahankan konsep kehendak bebas tradisional."
            ],
            context: "Analisis komprehensif biologi perilaku manusia dari neuron ke masyarakat."
          },
          {
            id: "p1-s0-b3",
            type: "non-fiction",
            title: "The Secret of Our Success",
            author: "Joseph Henrich",
            year: 2016,
            pages: 464,
            desc: "Manusia sukses bukan karena otak individual yang besar, tapi karena cultural evolution — kemampuan belajar dari orang lain secara kumulatif. Individu manusia sebenarnya bodoh; yang pintar adalah budaya kumulatif kita.",
            takeaways: [
              "Cultural Evolution > Individual Intelligence: Kita pintar karena belajar dari orang lain, bukan karena mikir sendiri.",
              "Prestige Bias: Kita meniru orang yang kita anggap sukses — mekanisme evolusi budaya.",
              "Kenapa Tradisi Punya Fungsi: Norma dan ritual sering punya 'wisdom' evolusioner yang tidak disadari pelakunya."
            ],
            context: "Mengubah cara pandang terhadap tradisi, norma sosial, dan institusi."
          },
          {
            id: "p1-s0-b4",
            type: "non-fiction",
            title: "Guns, Germs, and Steel",
            author: "Jared Diamond",
            year: 1997,
            pages: 480,
            desc: "Kenapa Eurasia mendominasi? Bukan karena ras superior — karena geografi, domestikasi tanaman/hewan, dan orientasi axis kontinental. Diamond membongkar mitos superioritas rasial lewat argumen biogeografis.",
            takeaways: [
              "Determinisme Geografis: Ketersediaan domestikable species menentukan jalur peradaban.",
              "Axis Kontinental: Eurasia horizontal (iklim serupa) vs Afrika/Amerika vertikal (iklim bervariasi).",
              "Penyakit sebagai Senjata: Kekebalan terhadap penyakit dari hewan ternak sebagai 'keuntungan' tak disengaja."
            ],
            context: "Membongkar mitos superioritas rasial lewat determinisme biogeografis."
          }
        ]
      },
      {
        label: "Psikologi Kognitif & Evolusioner",
        books: [
          {
            id: "p1-s1-b0",
            type: "non-fiction",
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            year: 2011,
            pages: 499,
            desc: "System 1 (cepat, intuitif, error-prone) vs System 2 (lambat, deliberatif, malas). Nobel laureate membongkar asumsi bahwa manusia rational agents.",
            takeaways: [
              "Sistem 1 vs Sistem 2: Otak malas dan mengandalkan heuristik.",
              "Prospect Theory & Loss Aversion: Manusia lebih takut rugi daripada suka untung.",
              "WYSIATI: Kecenderungan melompat ke kesimpulan dari data parsial."
            ],
            context: "Foundation wajib untuk memahami bias kognitif sistematis."
          },
          {
            id: "p1-s1-b1",
            type: "non-fiction",
            title: "The Righteous Mind",
            author: "Jonathan Haidt",
            year: 2012,
            pages: 419,
            desc: "Kenapa orang baik terpecah oleh politik dan agama. Moral reasoning itu post-hoc rationalization — kita decide secara emosional dulu, baru construct argumen. 6 moral taste buds menjelaskan kenapa liberal dan konservatif melihat dunia yang berbeda.",
            takeaways: [
              "Moral Intuitions Precede Moral Reasoning: Gajah (emosi) mengendalikan, pengendara (rasio) hanya merasionalisasi.",
              "6 Moral Foundations: Care, Fairness, Loyalty, Authority, Sanctity, Liberty.",
              "Groupish Righteousness: Manusia bukan sekadar selfish — kita juga groupish (tribalistik)."
            ],
            context: "Bridge krusial antara psikologi evolusioner dan polarisasi politik."
          },
          {
            id: "p1-s1-b2",
            type: "non-fiction",
            title: "The Blank Slate",
            author: "Steven Pinker",
            year: 2002,
            pages: 509,
            desc: "Pinker membongkar tiga noble lies ilmu sosial abad 20: manusia lahir blank slate (Locke), manusia pada dasarnya mulia (Rousseau), pikiran terpisah dari tubuh (Descartes).",
            takeaways: [
              "Nature AND Nurture: Genetika dan lingkungan saling berinteraksi, bukan salah satu.",
              "Evolved Psychological Mechanisms: Kecemburuan, agresi, dan nepotisme punya akar evolusioner.",
              "Political Implications: Baik kiri maupun kanan selectively deny human nature sesuai agenda."
            ],
            context: "Membongkar mitos-mitos tentang sifat dasar manusia di ilmu sosial."
          },
          {
            id: "p1-s1-b3",
            type: "non-fiction",
            title: "Influence: The Psychology of Persuasion",
            author: "Robert Cialdini",
            year: 1984,
            pages: 320,
            desc: "6 prinsip persuasi yang bekerja di bawah kesadaran: reciprocity, commitment, social proof, authority, liking, scarcity. Field research psikologi sosial, bukan self-help.",
            takeaways: [
              "6 Weapons of Influence: Reciprocity, Commitment, Social Proof, Authority, Liking, Scarcity.",
              "Click-Whirr Responses: Respons otomatis yang bisa di-trigger oleh manipulator.",
              "Defense Against Dark Arts: Mengenali kapan lo sedang di-influence."
            ],
            context: "Memahami mekanisme persuasi dan manipulasi yang biasanya invisible."
          },
          {
            id: "p1-s1-b4",
            type: "non-fiction",
            title: "Man's Search for Meaning",
            author: "Viktor Frankl",
            year: 1946,
            pages: 184,
            desc: "Psikiater yang survive Auschwitz menulis tentang bagaimana manusia bisa menemukan makna bahkan di penderitaan paling ekstrem. 'He who has a why to live can bear almost any how.'",
            takeaways: [
              "Logotherapy: Dorongan utama manusia bukan pleasure (Freud) atau power (Adler) — tapi meaning.",
              "Last Human Freedom: Memilih sikap terhadap penderitaan yang tak bisa dihindari.",
              "Meaning Through Suffering: Penderitaan tanpa makna tak tertahankan; penderitaan dengan makna bisa ditanggung."
            ],
            context: "Bridge antara psikologi klinis dan eksistensialisme — dari pengalaman langsung, bukan teori."
          }
        ]
      }
    ]
  },
  {
    id: "phase-2",
    tag: "FASE 2",
    tagClass: "",
    title: "How Do We Organize? — Politik, Ekonomi, & Struktur Sosial",
    note: "Bagaimana perilaku evolusioner manusia mengkristal ke dalam sistem kekuasaan, pasar, dan institusi sosial.",
    sections: [
      {
        label: "Filsafat Politik & Teori Kekuasaan",
        books: [
          {
            id: "p2-s0-b0",
            type: "non-fiction",
            title: "The Republic",
            author: "Plato",
            year: -375,
            pages: 416,
            desc: "Foundational text filsafat Barat dan teori politik. Dialektika Sokratik membongkar asumsi lewat pertanyaan terstruktur. Alegori Gua, Philosopher-King, dan konsep keadilan.",
            takeaways: [
              "Metode Sokratik: Membongkar argumen lewat pertanyaan mendasar.",
              "Alegori Gua: Persepsi bayangan vs kebenaran hakiki.",
              "Konsep Keadilan & Negara Ideal."
            ],
            context: "Fondasi metode inkuiri dialektis dan filsafat politik."
          },
          {
            id: "p2-s0-b1",
            type: "non-fiction",
            title: "The Prince",
            author: "Niccolò Machiavelli",
            year: 1532,
            pages: 140,
            desc: "Dissection dingin mekanisme kekuasaan nyata. Memisahkan moralitas pribadi dari efektivitas politik.",
            takeaways: [
              "Virtù vs Fortuna: Mengendalikan takdir lewat tindakan tegas.",
              "Pemisahan Moralitas & Politik: Mengamati kekuasaan secara empiris.",
              "Kekuasaan sebagai Mekanisme, Bukan Moralitas."
            ],
            context: "Mengikis naivitas politik dan melatih analisis kekuasaan objektif."
          },
          {
            id: "p2-s0-b2",
            type: "non-fiction",
            title: "Leviathan (Part I & II)",
            author: "Thomas Hobbes",
            year: 1651,
            pages: 250,
            desc: "'Life is nasty, brutish, and short.' Tanpa negara, manusia dalam perang semua melawan semua. Negara = necessary monster. Seluruh filsafat politik modern adalah respons terhadap Hobbes.",
            takeaways: [
              "State of Nature: Kondisi pre-political manusia sebagai perang semua lawan semua.",
              "Social Contract: Penyerahan kebebasan demi keamanan kepada sovereign.",
              "Kenapa Negara Ada: Bukan karena baik — karena alternatifnya lebih buruk."
            ],
            context: "Argumen foundational tentang kenapa negara ada dan legitimasi kekuasaan."
          },
          {
            id: "p2-s0-b3",
            type: "non-fiction",
            title: "The Communist Manifesto",
            author: "Karl Marx & Friedrich Engels",
            year: 1848,
            pages: 80,
            desc: "Bukan untuk menjadi Marxis — untuk memahami kerangka analisis kelas. Sejarah sebagai sejarah konflik antara pemilik dan pekerja. Hanya 80 halaman, tapi tanpa memahami Marx, lo tidak bisa memahami setengah dari debat politik abad 20-21.",
            takeaways: [
              "Class Struggle: Sejarah = konflik antara kelas pemilik modal dan kelas pekerja.",
              "Base & Superstructure: Ekonomi (base) menentukan politik, hukum, dan budaya (superstructure).",
              "Historical Materialism: Perubahan sosial didorong oleh perubahan mode produksi."
            ],
            context: "Kerangka analisis kelas yang wajib dipahami untuk membaca politik modern."
          },
          {
            id: "p2-s0-b4",
            type: "non-fiction",
            title: "The Origins of Political Order",
            author: "Francis Fukuyama",
            year: 2011,
            pages: 585,
            desc: "Fukuyama menelusuri bagaimana state, rule of law, dan accountability berkembang dari China, India, dunia Islam, sampai Eropa. Comparative political development terbaik untuk pembaca umum.",
            takeaways: [
              "Three Pillars of Political Order: Strong state, rule of law, democratic accountability.",
              "Getting to Denmark Problem: Kenapa sebagian masyarakat punya institusi baik dan lainnya tidak.",
              "Patrimonialism: Kecenderungan alami penguasa untuk membajak negara demi keluarga/klien."
            ],
            context: "Analisis komparatif evolusi institusi politik lintas peradaban."
          },
          {
            id: "p2-s0-b5",
            type: "fiction",
            title: "Nineteen Eighty-Four",
            author: "George Orwell",
            year: 1949,
            pages: 328,
            desc: "Diagnostik totalitarianisme: kontrol bahasa (Newspeak), manipulasi sejarah dan realitas (Doublethink), dan penundukan pikiran.",
            takeaways: [
              "Siapa Mengontrol Bahasa, Mengontrol Pikiran (Newspeak).",
              "Doublethink & Reality Control.",
              "Totalitarianisme Sistemik: Kekuasaan demi kekuasaan itu sendiri."
            ],
            context: "Manual diagnostik mengenali rekayasa realitas dan otoritarianisme."
          },
          {
            id: "p2-s0-b6",
            type: "non-fiction",
            title: "The Origins of Totalitarianism",
            author: "Hannah Arendt",
            year: 1951,
            pages: 576,
            desc: "Studi komprehensif bagaimana totalitarianisme muncul — dari antisemitisme dan imperialisme sampai teror sebagai instrumen pemerintahan.",
            takeaways: [
              "Loneliness & Atomization: Totalitarianisme tumbuh di masyarakat yang kehilangan solidaritas.",
              "Ideologi Total: Sistem pikiran yang mengklaim menjelaskan segala hal.",
              "Teror Sebagai Instrumen Pemerintahan."
            ],
            context: "Genesis totalitarianisme abad 20 secara historis dan filosofis."
          },
          {
            id: "p2-s0-b7",
            type: "non-fiction",
            title: "Democracy in America (Vol I)",
            author: "Alexis de Tocqueville",
            year: 1835,
            pages: 300,
            desc: "Aristokrat Prancis menganalisis demokrasi Amerika dengan akurasi yang masih berlaku 190 tahun kemudian. Kekuatan DAN bahaya demokrasi — termasuk tyranny of the majority.",
            takeaways: [
              "Tyranny of the Majority: Demokrasi bisa menindas minoritas secara legal dan sosial.",
              "Civil Associations: Kekuatan demokrasi ada di asosiasi sipil, bukan di pemerintah.",
              "Equality vs Liberty: Demokratisasi menaikkan equality tapi bisa menggerus liberty."
            ],
            context: "Diagnosis paling tajam tentang kekuatan dan kerentanan demokrasi."
          }
        ]
      },
      {
        label: "Ekonomi Politik",
        books: [
          {
            id: "p2-s1-b0",
            type: "non-fiction",
            title: "Why Nations Fail",
            author: "Daron Acemoglu & James Robinson",
            year: 2012,
            pages: 529,
            desc: "Kemakmuran ditentukan oleh institusi (inclusive vs extractive), bukan geografi, budaya, atau iklim. Counterpoint langsung terhadap Diamond's Guns, Germs, and Steel.",
            takeaways: [
              "Inclusive vs Extractive Institutions: Institusi inklusif mendorong inovasi; ekstraktif menghisap.",
              "Critical Junctures: Momen historis yang membelokkan jalur institusi.",
              "Kenapa Inequality Bertahan: Elite punya insentif mempertahankan institusi ekstraktif."
            ],
            context: "Menjelaskan kenapa sebagian negara kaya dan lainnya miskin lewat teori institusional."
          },
          {
            id: "p2-s1-b1",
            type: "non-fiction",
            title: "Capital in the Twenty-First Century",
            author: "Thomas Piketty",
            year: 2013,
            pages: 696,
            desc: "Dengan 200 tahun data historis, Piketty menunjukkan bahwa r > g — return on capital selalu lebih tinggi dari pertumbuhan ekonomi — sehingga ketimpangan secara natural meningkat.",
            takeaways: [
              "r > g: Return on capital > economic growth = ketimpangan meningkat secara alami.",
              "Patrimonial Capitalism: Kekayaan warisan mendominasi kekayaan kerja.",
              "200 Tahun Data: Argumen empiris, bukan ideologis."
            ],
            context: "Buku yang mengubah debat global tentang inequality."
          },
          {
            id: "p2-s1-b2",
            type: "non-fiction",
            title: "23 Things They Don't Tell You About Capitalism",
            author: "Ha-Joon Chang",
            year: 2010,
            pages: 286,
            desc: "Economist Cambridge membongkar mitos neoliberal: 'free market' itu tidak ada, proteksionisme historically worked, dan setiap negara maju pernah 'curang.'",
            takeaways: [
              "Free Market Is a Myth: Semua pasar diatur — pertanyaannya siapa yang diuntungkan.",
              "Kicking Away the Ladder: Negara maju proteksionis saat berkembang, lalu minta negara miskin liberalisasi.",
              "Washing Machine > Internet: Teknologi lama sering lebih transformatif dari yang baru."
            ],
            context: "Antidote terhadap simplifikasi 'free market good, government bad.'"
          },
          {
            id: "p2-s1-b3",
            type: "non-fiction",
            title: "The Wealth of Nations (Book I)",
            author: "Adam Smith",
            year: 1776,
            pages: 200,
            desc: "Original argument tentang division of labor, invisible hand, dan kenapa pasar bisa efisien. Smith sendiri jauh lebih nuanced dari yang diklaim fans-nya.",
            takeaways: [
              "Division of Labor: Spesialisasi meningkatkan produktivitas eksponensial.",
              "Invisible Hand: Self-interest individual bisa menghasilkan public good — tapi tidak selalu.",
              "Smith Bukan Libertarian: Dia juga mengkritik monopoli, rent-seeking, dan greed."
            ],
            context: "Memahami original argument kapitalisme — dan batasannya."
          }
        ]
      },
      {
        label: "Sosiologi & Teori Sosial",
        books: [
          {
            id: "p2-s2-b0",
            type: "non-fiction",
            title: "Discipline and Punish",
            author: "Michel Foucault",
            year: 1975,
            pages: 333,
            desc: "Evolusi kekuasaan modern: dari eksekusi publik ke institusi disiplin (penjara, sekolah, rumah sakit). Konsep Panopticon — pengawasan yang memaksa self-discipline.",
            takeaways: [
              "Panopticon: Pengawasan tak terlihat memaksa individu mendisiplinkan diri.",
              "Biopower: Kekuasaan bekerja lewat norma dan institusi harian.",
              "Tubuh yang Terdisiplinkan: Pembentukan warganegara penurut lewat latihan rutin."
            ],
            context: "Mekanisme halus kontrol institusional di era modern."
          },
          {
            id: "p2-s2-b1",
            type: "non-fiction",
            title: "The Protestant Ethic and the Spirit of Capitalism",
            author: "Max Weber",
            year: 1905,
            pages: 200,
            desc: "Calvinisme secara tidak sengaja menciptakan etos yang memungkinkan kapitalisme. Thesis bisa diperdebatkan, tapi method-nya — bagaimana IDEAS shape INSTITUTIONS — adalah foundational untuk sosiologi.",
            takeaways: [
              "Elective Affinity: Ide-ide religius dan sistem ekonomi bisa saling memperkuat.",
              "Rationalization: Modernitas = disenchantment dunia dan birokratisasi hidup.",
              "Iron Cage: Kapitalisme akhirnya memerangkap bahkan yang tidak percaya etos aslinya."
            ],
            context: "Bagaimana gagasan kultural bisa membentuk sistem ekonomi."
          },
          {
            id: "p2-s2-b2",
            type: "non-fiction",
            title: "The Presentation of Self in Everyday Life",
            author: "Erving Goffman",
            year: 1956,
            pages: 255,
            desc: "'All the world's a stage' — literally. Seluruh interaksi sosial adalah performance. Lo punya front stage (persona publik) dan back stage (diri sebenarnya).",
            takeaways: [
              "Dramaturgical Approach: Interaksi sosial = performance di atas panggung.",
              "Front Stage vs Back Stage: Persona publik vs diri privat.",
              "Impression Management: Kita semua aktif mengelola persepsi orang lain."
            ],
            context: "Mengubah cara melihat setiap interaksi sosial."
          },
          {
            id: "p2-s2-b3",
            type: "non-fiction",
            title: "The Second Sex",
            author: "Simone de Beauvoir",
            year: 1949,
            pages: 832,
            desc: "'One is not born, but rather becomes, a woman.' De Beauvoir menerapkan eksistensialisme ke analisis gender — mungkin aplikasi filsafat ke masalah sosial yang paling influential sepanjang sejarah.",
            takeaways: [
              "Becoming Woman: Gender bukan given biologis — gender dikonstruksi sosial.",
              "The Other: Perempuan didefinisikan sebagai 'yang lain' dari norma laki-laki.",
              "Eksistensialisme Terapan: Bad faith dan freedom applied ke pengalaman perempuan."
            ],
            context: "Aplikasi eksistensialisme ke analisis gender dan struktur sosial."
          }
        ]
      }
    ]
  },
  {
    id: "phase-3",
    tag: "FASE 3",
    tagClass: "",
    title: "How Do We Know? — Epistemologi, Filsafat, & Filsafat Sains",
    note: "Meta-discipline: cara berpikir tentang berpikir, batas pengetahuan, dan cara mengevaluasi kebenaran.",
    sections: [
      {
        label: "Filsafat & Epistemologi",
        books: [
          {
            id: "p3-s0-b0",
            type: "non-fiction",
            title: "The Demon-Haunted World",
            author: "Carl Sagan",
            year: 1995,
            pages: 457,
            desc: "Epistemic hygiene dan Baloney Detection Kit. Foundation berpikir kritis untuk membedakan sains dari pseudosains.",
            takeaways: [
              "Baloney Detection Kit: 9 aturan menguji klaim dan argumen.",
              "Skepticisme Ilmiah Sebagai Alat Demokrasi.",
              "Sains Sebagai Candle in the Dark."
            ],
            context: "Fondasi berpikir kritis sebelum masuk domain apapun."
          },
          {
            id: "p3-s0-b1",
            type: "non-fiction",
            title: "The Structure of Scientific Revolutions",
            author: "Thomas Kuhn",
            year: 1962,
            pages: 264,
            desc: "Paradigm Shift — sains bergerak lewat revolusi, bukan penumpukan fakta linear. Komunitas ilmiah mempertahankan dogma sampai bukti baru menghancurkannya.",
            takeaways: [
              "Paradigm Shift: Perubahan radikal kerangka berpikir komunitas ilmiah.",
              "Normal Science vs Revolutionary Science.",
              "Inkomensurabilitas: Dua paradigma tidak bisa saling mengukur."
            ],
            context: "Filsafat sains yang mengubah cara memahami pengetahuan itu sendiri."
          },
          {
            id: "p3-s0-b2",
            type: "non-fiction",
            title: "On the Genealogy of Morality",
            author: "Friedrich Nietzsche",
            year: 1887,
            pages: 192,
            desc: "Nietzsche paling argumentatif: tiga esai yang menelusuri asal-usul sejarah moralitas 'baik/jahat,' ressentiment, dan ideal-ideal askesis.",
            takeaways: [
              "Master vs Slave Morality: Asal-usul moralitas kekuatan vs pengorbanan.",
              "Ressentiment: Dengki kolektif sebagai pembalik nilai-nilai sejarah.",
              "Kritik Ascetic Ideals: Pembongkaran fondasi moral tradisional."
            ],
            context: "Dekonstruksi historis terhadap nilai moral yang dianggap 'terberi'."
          },
          {
            id: "p3-s0-b3",
            type: "non-fiction",
            title: "The Black Swan",
            author: "Nassim Nicholas Taleb",
            year: 2007,
            pages: 400,
            desc: "Epistemologi ketidakpastian: peristiwa langka berdampak masif (Black Swans), Narrative Fallacy, dan keterbatasan model prediktif.",
            takeaways: [
              "Black Swan Events: Extremistan vs Mediocristan.",
              "Narrative Fallacy: Reka ulang narasi palsu seolah masa lalu bisa diprediksi.",
              "Ludic Fallacy: Realitas tidak mengikuti aturan game/model."
            ],
            context: "Penghancur ilusi kepastian dalam sains sosial dan prediksi."
          },
          {
            id: "p3-s0-b4",
            type: "non-fiction",
            title: "Antifragile: Things That Gain from Disorder",
            author: "Nassim Nicholas Taleb",
            year: 2012,
            pages: 544,
            desc: "Beyond Black Swan. Bukan cuma bertahan di ketidakpastian — tapi gaining from disorder. Konsep antifragility applicable ke kesehatan, karir, politik, dan epistemologi.",
            takeaways: [
              "Antifragile ≠ Robust: Yang antifragile bukan sekadar bertahan — dia MEMBAIK dari tekanan.",
              "Via Negativa: Kemajuan lebih sering dari menghilangkan hal buruk daripada menambah hal baru.",
              "Skin in the Game: Risiko tanpa konsekuensi personal = sistem fragile."
            ],
            context: "Taleb's most systematic book — framework untuk hidup di dunia yang unpredictable."
          },
          {
            id: "p3-s0-b5",
            type: "non-fiction",
            title: "Meditations",
            author: "Marcus Aurelius",
            year: 180,
            pages: 256,
            desc: "Catatan pribadi kaisar Roma tentang Stoikisme praktis. Bukan teori — ini lived philosophy. Counter-balance terhadap eksistensialisme yang bisa terlalu angst.",
            takeaways: [
              "Dikotomi Kendali: Hanya kendalikan yang bisa dikendalikan.",
              "Memento Mori: Kesadaran kematian sebagai motivasi hidup bermakna.",
              "Perspective Kosmik: Semua masalah kecil dalam skala alam semesta."
            ],
            context: "Filsafat praktis Stoikisme sebagai penyeimbang angst eksistensial."
          }
        ]
      }
    ]
  },
  {
    id: "phase-4",
    tag: "FASE 4",
    tagClass: "",
    title: "What Does It Mean? — Eksistensialisme, Sastra, & Sejarah",
    note: "Dimensi inward-looking: konfrontasi dengan absurditas, meaning, dan pola-pola sejarah perilaku manusia lintas milenium.",
    sections: [
      {
        label: "Eksistensialisme & Sastra Filosofis",
        books: [
          {
            id: "p4-s0-b0",
            type: "fiction",
            title: "Notes from Underground",
            author: "Fyodor Dostoevsky",
            year: 1864,
            pages: 144,
            desc: "Proto-existentialist manifesto. Manusia bawah tanah menolak rasionalisme murni dan determinisme utilitarian, menegaskan irasionalitas kehendak bebas.",
            takeaways: [
              "Kritik Rasionalisme Utilitarian: Manusia bukan kalkulator kenikmatan.",
              "Unreliable Narrator sebagai instrumen kritik sosial.",
              "Dilema Kehendak Bebas: Penderitaan sebagai bukti kebebasan."
            ],
            context: "Entry point ke eksistensialisme lewat sastra psikologis."
          },
          {
            id: "p4-s0-b1",
            type: "fiction",
            title: "Crime and Punishment",
            author: "Fyodor Dostoevsky",
            year: 1866,
            pages: 671,
            desc: "Raskolnikov menguji apakah manusia luar biasa berhak melanggar moralitas — dan menanggung konsekuensi psikologis ketika teori bertemu realitas.",
            takeaways: [
              "Bahaya Ideologi Tanpa Moral: Prekursor Übermensch.",
              "Penebusan Lewat Penderitaan.",
              "Menguji teori abstrak di dunia nyata."
            ],
            context: "Thought experiment moralitas individu di hadapan hukum universal."
          },
          {
            id: "p4-s0-b2",
            type: "fiction",
            title: "The Brothers Karamazov",
            author: "Fyodor Dostoevsky",
            year: 1880,
            pages: 824,
            desc: "Puncak novel dialektis Dostoevsky. The Grand Inquisitor: kebebasan nurani vs jaminan keamanan. If God does not exist, is everything permitted?",
            takeaways: [
              "Grand Inquisitor: Dialektika kebebasan vs beban tanggung jawab.",
              "Jika Tuhan Tidak Ada, Apakah Semua Boleh?",
              "Kasih Eksistensial Alyosha: Moral di atas skeptisisme."
            ],
            context: "Puncak dialog dialektis iman, rasionalisme, dan politik kebebasan."
          },
          {
            id: "p4-s0-b3",
            type: "non-fiction",
            title: "The Myth of Sisyphus",
            author: "Albert Camus",
            year: 1942,
            pages: 160,
            desc: "Formulasi Absurditas — konfrontasi pencarian makna manusia vs keheningan semesta. 'One must imagine Sisyphus happy.'",
            takeaways: [
              "Tiga Pilihan: Bunuh diri, lompatan iman, atau pemberontakan.",
              "Pemberontakan Eksistensial: Hidup sepenuhnya tanpa ilusi.",
              "Menemukan makna dalam perjuangan itu sendiri."
            ],
            context: "Fondasi Absurdisme Camus."
          },
          {
            id: "p4-s0-b4",
            type: "non-fiction",
            title: "The Rebel",
            author: "Albert Camus",
            year: 1951,
            pages: 320,
            desc: "Sejarah pemberontakan metafisik dan politik. Revolusi mutlak selalu melahirkan tirani. 'I rebel, therefore we are.'",
            takeaways: [
              "Pemberontakan sebagai solidaritas manusia.",
              "Batas Revolusi: Mencegah perlawanan menjadi teror baru.",
              "Menjaga ukuran kemanusiaan tanpa absolutisme."
            ],
            context: "Integrasi eksistensialisme dengan analisis politik sejarah."
          },
          {
            id: "p4-s0-b5",
            type: "fiction",
            title: "The Plague",
            author: "Albert Camus",
            year: 1947,
            pages: 308,
            desc: "Wabah menimpa Oran. Dr. Rieux merespons absurditas dengan perlawanan tanpa ilusi dan solidaritas kemanusiaan.",
            takeaways: [
              "Lucid Resistance: Bertindak benar tanpa janji kemenangan.",
              "Solidaritas dalam Absurditas.",
              "Dr. Rieux sebagai Sisyphus modern."
            ],
            context: "Penutup ideal: integritas dan solidaritas tanpa cynicism."
          },
          {
            id: "p4-s0-b6",
            type: "fiction",
            title: "Nausea",
            author: "Jean-Paul Sartre",
            year: 1938,
            pages: 178,
            desc: "Roquentin menghadapi kontingensi eksistensi. 'Existence precedes essence.' Novel manifes eksistensialisme ateistik.",
            takeaways: [
              "Existence Precedes Essence.",
              "Kontingensi Murni: Dunia tanpa rancangan tersembunyi.",
              "Bad Faith: Menipu diri demi menghindari kebebasan radikal."
            ],
            context: "Karya fiksi filosofis utama eksistensialisme ateistik."
          },
          {
            id: "p4-s0-b7",
            type: "non-fiction",
            title: "Fear and Trembling",
            author: "Søren Kierkegaard",
            year: 1843,
            pages: 160,
            desc: "Pengorbanan Abraham: Teleological Suspension of the Ethical. Leap of Faith sebagai batas rasionalisme murni.",
            takeaways: [
              "Teleological Suspension of the Ethical.",
              "Leap of Faith: Keputusan eksistensial di tengah ketidakpastian.",
              "Knight of Faith vs Tragic Hero."
            ],
            context: "Penyeimbang rasionalisme & fondasi eksistensialisme religius."
          },
          {
            id: "p4-s0-b8",
            type: "fiction",
            title: "The Master and Margarita",
            author: "Mikhail Bulgakov",
            year: 1967,
            pages: 384,
            desc: "Iblis mengunjungi Moscow Stalinis dan mengekspos kemunafikan birokrasi totaliter. Salah satu novel terbesar abad ke-20.",
            takeaways: [
              "Kritik totalitarianisme lewat absurditas supernatural.",
              "Manuscripts Don't Burn: Keabadian kebenaran seni.",
              "Penakut Adalah Dosa Terbesar."
            ],
            context: "Sintesis sastra tinggi yang membongkar dogma totalitarianisme."
          },
          {
            id: "p4-s0-b9",
            type: "fiction",
            title: "The Trial",
            author: "Franz Kafka",
            year: 1925,
            pages: 255,
            desc: "Joseph K. ditangkap tanpa tahu kejahatannya dan tidak pernah bisa menghadapi penuduhnya. Alienasi birokrasi dan ketidakberdayaan individu di dalam sistem yang absurd — tapi tetap berjalan.",
            takeaways: [
              "Alienasi Birokrasi: Sistem yang tidak masuk akal tapi tetap beroperasi.",
              "Guilt Without Crime: Perasaan bersalah yang muncul tanpa alasan rasional.",
              "Kafkaesque: Ketidakberdayaan individu di hadapan mesin institusional."
            ],
            context: "Dramatisasi alienasi modern — bridge ke Foucault dan Arendt."
          },
          {
            id: "p4-s0-b10",
            type: "fiction",
            title: "Brave New World",
            author: "Aldous Huxley",
            year: 1932,
            pages: 268,
            desc: "Dystopia pleasure: kontrol lewat kenikmatan (soma), rekayasa biologi, entertainment. Komplementer 1984 — Orwell feared tyranny, Huxley feared irrelevance.",
            takeaways: [
              "Kontrol Lewat Kenikmatan vs Ketakutan.",
              "Komodifikasi Kebahagiaan mengeliminasi kedalaman.",
              "Teknologi Rekayasa Sosial."
            ],
            context: "Diagnostik komplementer terhadap 1984."
          },
          {
            id: "p4-s0-b11",
            type: "fiction",
            title: "Animal Farm",
            author: "George Orwell",
            year: 1945,
            pages: 112,
            desc: "Political allegory: bagaimana revolusi berubah menjadi tirani yang persis sama dengan yang ditumbangkan. 'All animals are equal, but some are more equal than others.'",
            takeaways: [
              "Revolusi yang Corrupt: Pembebas menjadi penindas baru.",
              "Manipulasi Bahasa: Mengubah sejarah secara bertahap.",
              "Apatis Massa: Kekuasaan bertahan karena yang dikuasai menyerah."
            ],
            context: "Allegory revolusi Soviet — feel before analysis."
          }
        ]
      },
      {
        label: "Sejarah sebagai Laboratorium Perilaku Manusia",
        books: [
          {
            id: "p4-s1-b0",
            type: "non-fiction",
            title: "History of the Peloponnesian War",
            author: "Thucydides",
            year: -400,
            pages: 600,
            desc: "Buku sejarah analitis pertama. Melian Dialogue: 'the strong do what they can and the weak suffer what they must.' 2,400 tahun dan masih persis relevan.",
            takeaways: [
              "Melian Dialogue: Benturan moralitas dengan realpolitik.",
              "Thucydides Trap: Kenaikan hegemoni baru memicu perang.",
              "Sifat Manusia & Perang: Ketakutan, kehormatan, kepentingan."
            ],
            context: "Cermin perilaku manusia yang tidak berubah selama ribuan tahun."
          },
          {
            id: "p4-s1-b1",
            type: "non-fiction",
            title: "Muqaddimah",
            author: "Ibn Khaldun",
            year: 1377,
            pages: 512,
            desc: "Mahakarya filsafat sejarah non-Barat. Konsep Asabiyyah (solidaritas sosial) dan siklus naik-turun peradaban. Menunjukkan tradisi analisis historis non-Eropa yang sama kuatnya.",
            takeaways: [
              "Asabiyyah: Solidaritas sosial sebagai perekat dan penggerak kekuasaan.",
              "Siklus Peradaban: Pertumbuhan, kemewahan, dekadensi, keruntuhan.",
              "Sosiologi & Ekonomi Sejarah avant la lettre."
            ],
            context: "Filsafat sejarah non-Western — menganalis pola peradaban."
          },
          {
            id: "p4-s1-b2",
            type: "non-fiction",
            title: "A People's History of the United States",
            author: "Howard Zinn",
            year: 1980,
            pages: 729,
            desc: "Sejarah dari perspektif yang dikalahkan — Native Americans, budak, buruh, imigran. Menunjukkan bahwa semua sejarah adalah narasi dengan sudut pandang.",
            takeaways: [
              "History from Below: Perspektif korban, bukan pemenang.",
              "Semua Sejarah Punya Sudut Pandang.",
              "Counter-narrative sebagai alat kritis."
            ],
            context: "Counter-narrative yang melatih critical reading terhadap sejarah apapun."
          },
          {
            id: "p4-s1-b3",
            type: "non-fiction",
            title: "The Lessons of History",
            author: "Will & Ariel Durant",
            year: 1968,
            pages: 128,
            desc: "128 halaman dari pasangan yang menulis 11-volume The Story of Civilization. Pola-pola sejarah tentang biologi, moral, agama, ekonomi, pemerintahan, dan perang. Ultra-dense.",
            takeaways: [
              "Biology is the Foundation: Kompetisi, seleksi, dan reproduksi mendasari semua sejarah.",
              "Inequality is Natural, Redistribution is Periodic: Ketimpangan terakumulasi lalu di-reset.",
              "War is a Constant: Perdamaian adalah anomali, bukan norma."
            ],
            context: "Distilasi pola-pola perilaku manusia dari 5.000 tahun sejarah."
          },
          {
            id: "p4-s1-b4",
            type: "non-fiction",
            title: "Homo Deus",
            author: "Yuval Noah Harari",
            year: 2015,
            pages: 450,
            desc: "Companion Sapiens. Jika Sapiens tentang bagaimana kita sampai sini, Homo Deus tentang ke mana kita menuju — dataism, AI, bioteknologi, dan apa yang terjadi ketika Homo sapiens mencoba menjadi Homo deus.",
            takeaways: [
              "Dataism: Data sebagai agama baru abad 21.",
              "Decoupling of Intelligence & Consciousness: AI bisa cerdas tanpa sadar.",
              "Useless Class: Apa yang terjadi ketika manusia tidak lagi bernilai ekonomis."
            ],
            context: "Proyeksi masa depan evolusi perilaku manusia."
          }
        ]
      }
    ]
  }
];
