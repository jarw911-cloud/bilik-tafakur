// File: src/data/fikih.js

export const daftarFikih = [
    {
        judul: "Tata Cara Wudhu",
        slug: "tata-cara-wudhu",
        arab: "نَوَيْتُ الْوُضُوءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلَّهِ تَعَالَى",
        latin: "Nawaitul whudu-a liraf'il hadatsil ashghari fardhal lillaahi ta'aalaa.",
        arti: "Aku niat berwudhu untuk menghilangkan hadats kecil fardhu karena Allah Ta'ala.",
        riwayat: "QS. Al-Ma'idah ayat 6 dan Hadits Muttafaq 'Alaih.",
        narasi: `
            <p class="mb-4">Wudhu bukan sekadar rutinitas membasuh air ke kulit, melainkan ritual penyucian fisik sekaligus mental. Dalam ilmu Fikih, tata cara wudhu dibagi menjadi dua: <strong>Rukun (Wajib)</strong> dan <strong>Sunnah (Dianjurkan)</strong>.</p>
            
            <p class="mb-4">Mengingat Fikih adalah hasil pemahaman ulama terhadap dalil, sangat wajar jika terjadi perbedaan pendapat (<em>ikhtilaf</em>). Di Indonesia, mayoritas umat Islam berpegang pada <strong>Madzhab Syafi'i</strong> (Imam Asy-Syafi'i rahimahullah).</p>

            <h3 class="text-xl font-bold text-emerald-800 dark:text-emerald-400 mt-8 mb-4">6 Rukun Wudhu (Menurut Madzhab Syafi'i)</h3>
            <p class="mb-4">Rukun adalah hal pokok yang jika ditinggalkan, maka wudhunya tidak sah. Menurut Imam Syafi'i, rukun wudhu ada 6:</p>
            <ol class="list-decimal pl-5 space-y-3 mb-6">
                <li><strong>Niat:</strong> Dihadirkan di dalam hati tepat saat air pertama kali menyentuh sebagian wajah. (Mengucapkan niat di lisan hukumnya sunnah untuk membantu hati).</li>
                <li><strong>Membasuh Wajah:</strong> Seluruh area wajah dari batas tumbuhnya rambut kepala hingga bawah dagu, dan dari pangkal telinga kanan ke kiri.</li>
                <li><strong>Membasuh Kedua Tangan:</strong> Dimulai dari ujung jari hingga melebihi kedua siku.</li>
                <li><strong>Mengusap Sebagian Kepala:</strong> Cukup mengusap sebagian rambut atau kulit kepala.</li>
                <li><strong>Membasuh Kedua Kaki:</strong> Membasuh kaki hingga menutupi kedua mata kaki.</li>
                <li><strong>Tertib:</strong> Dilakukan secara berurutan dari nomor 1 hingga 5, tidak boleh dibolak-balik.</li>
            </ol>

            <div class="my-6 p-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-800/30">
                <h4 class="font-bold text-amber-800 dark:text-amber-500 mb-2">Contoh Ikhtilaf (Perbedaan Pendapat Ulama)</h4>
                <p class="text-slate-700 dark:text-slate-300 mb-3">Terkait rukun ke-4 (Mengusap Kepala), para Imam Madzhab memiliki pandangan berbeda saat menafsirkan QS. Al-Ma'idah ayat 6:</p>
                <ul class="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-400">
                    <li><strong>Imam Syafi'i:</strong> Sah meskipun hanya mengusap satu helai rambut (sebagian kecil kepala).</li>
                    <li><strong>Imam Maliki & Imam Hambali:</strong> Wajib mengusap <strong>seluruh</strong> bagian kepala.</li>
                    <li><strong>Imam Abu Hanifah:</strong> Wajib mengusap minimal seperempat (1/4) bagian kepala.</li>
                </ul>
                <p class="text-slate-700 dark:text-slate-300 mt-3 italic text-sm">Semua pendapat di atas memiliki dalil yang kuat. Perbedaan ini adalah <strong>rahmat</strong> yang memberikan kelapangan bagi umat Islam sesuai dengan kondisi dan keyakinannya.</p>
            </div>

            <h3 class="text-xl font-bold text-emerald-800 dark:text-emerald-400 mt-8 mb-4">Sunnah-Sunnah Wudhu</h3>
            <p class="mb-4">Untuk menyempurnakan wudhu dan menambah pahala (namun tidak membatalkan wudhu jika ditinggalkan), sangat dianjurkan untuk melakukan:</p>
            <ul class="list-disc pl-5 space-y-2 mb-6">
                <li>Membaca <em>Bismillah</em> di awal.</li>
                <li>Membasuh kedua telapak tangan 3 kali sebelum memulai.</li>
                <li>Berkumur-kumur (<em>Madhmadhoh</em>) dan menghirup air ke hidung (<em>Istinsyaq</em>).</li>
                <li>Mengusap kedua telinga bagian luar dan dalam.</li>
                <li>Membasuh setiap anggota tubuh sebanyak tiga kali (<em>Tatslits</em>).</li>
                <li>Mendahulukan anggota tubuh bagian kanan daripada kiri (<em>Tayamun</em>).</li>
                <li>Membaca doa setelah wudhu sambil menghadap kiblat.</li>
            </ul>
        `
    },
    { 
        judul: "Mandi Wajib (Junub)", 
        slug: "mandi-wajib",
        arab: "نَوَيْتُ الْغُسْلَ لِرَفْعِ الْحَدَثِ الأَكْبَرِ مِنَ الجِنَابَةِ فَرْضًا لِلَّهِ تَعَالَى", 
        latin: "Nawaitul ghusla liraf'il hadatsil akbari minal janabati fardhal lillaahi ta'aalaa.", 
        arti: "Aku niat mandi untuk menghilangkan hadats besar dari janabah, fardhu karena Allah Ta'ala.", 
        riwayat: "QS. Al-Baqarah ayat 222 dan Praktik Nabi dalam HR. Bukhari no. 248 & Muslim.", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Mandi wajib mengingatkan kita bahwa fitrah manusia itu pada dasarnya suci. Ini adalah momentum 'reset' spiritual dan fisik untuk kembali menghadap-Nya tanpa hijab kotoran."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">2 Rukun Mandi Wajib:</h3>
            <ol class="list-decimal pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
                <li><strong>Niat.</strong> Membaca niat di dalam hati bersamaan dengan air pertama yang disiramkan ke tubuh.</li>
                <li><strong>Meratakan Air.</strong> Memastikan air mengalir dan membasahi seluruh bagian luar tubuh, termasuk lipatan-lipatan kulit dan pangkal rambut/bulu.</li>
            </ol>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara Sesuai Sunnah Rasulullah:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Mencuci kedua tangan sebanyak 3 kali untuk menghilangkan najis.</li>
                <li>Membersihkan kemaluan dan kotoran yang menempel menggunakan tangan kiri.</li>
                <li>Mencuci tangan kembali dengan sabun atau tanah.</li>
                <li><strong>Berwudhu dengan sempurna</strong> sebagaimana wudhu untuk shalat.</li>
                <li>Menyela-nyela pangkal rambut dengan jari-jari yang basah hingga merata.</li>
                <li>Mengguyur kepala dengan air sebanyak 3 kali.</li>
                <li>Mengguyur seluruh badan, dimulai dari sisi kanan 3 kali, lalu sisi kiri 3 kali.</li>
                <li>Memastikan area lipatan (ketiak, pusar, belakang lutut) terkena air.</li>
                <li>Bergeser sedikit dari tempat mandi semula, lalu membasuh kedua telapak kaki.</li>
            </ul>
        `
    },
    { 
        judul: "Panduan Shalat Dhuha", 
        slug: "shalat-dhuha",
        arab: "أُصَلِّيْ سُنَّةَ الضُّحَى رَكْعَتَيْنِ لِلَّهِ تَعَالَى", 
        latin: "Ushalli sunnatadh dhuhaa rak'ataini lillaahi ta'aalaa.", 
        arti: "Aku niat shalat sunnah Dhuha dua rakaat karena Allah Ta'ala.", 
        riwayat: "Hadits Abu Hurairah (HR. Bukhari no. 1981) dan HR. Muslim tentang sedekah persendian tubuh.", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Shalat Dhuha adalah wujud rasa syukur atas datangnya pagi. Kita menyicil rezeki bukan hanya dengan keringat (ikhtiar bumi), tetapi juga dengan ketundukan doa (ikhtiar langit)."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">Waktu & Ketentuan:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li><strong>Waktu:</strong> Dikerjakan setelah matahari terbit (sekitar 15 menit setelah <em>syuruq</em>) hingga 15 menit sebelum waktu Dzuhur. Waktu terbaik adalah perempat siang saat matahari mulai terik.</li>
                <li><strong>Jumlah Rakaat:</strong> Minimal dikerjakan 2 rakaat. Bisa dikerjakan 4, 6, 8, hingga 12 rakaat (dengan salam setiap 2 rakaat).</li>
            </ul>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara:</h3>
            <ol class="list-decimal pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Membaca niat shalat Dhuha.</li>
                <li>Takbiratul Ihram dilanjutkan membaca Surah Al-Fatihah.</li>
                <li><strong>Rakaat Pertama:</strong> Disunnahkan membaca Surah As-Syams (Wasy-syamsi wa dhuhaha) atau Surah Al-Kafirun.</li>
                <li><strong>Rakaat Kedua:</strong> Disunnahkan membaca Surah Ad-Dhuha (Wadh-dhuha) atau Surah Al-Ikhlas.</li>
                <li>Ruku', sujud, dan tahiyatul akhir seperti shalat biasa.</li>
                <li>Salam, lalu dilanjutkan berdoa memohon kemudahan rezeki.</li>
            </ol>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Doa Shalat Dhuha:</h3>
            <div class="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 md:p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/30 text-center shadow-inner">
                <p class="font-serif text-2xl md:text-3xl mb-5 leading-loose text-slate-800 dark:text-slate-100">اللَّهُمَّ إِنَّ الضُّحَاءَ ضُحَاؤُكَ، وَالْبَهَاءَ بَهَاؤُكَ، وَالْجَمَالَ جَمَالُكَ، وَالْقُوَّةَ قُوَّتُكَ، وَالْقُدْرَةَ قُدْرَتُكَ، وَالْعِصْمَةَ عِصْمَتُكَ</p>
                <p class="text-sm md:text-base italic text-emerald-700 dark:text-emerald-400 font-medium mb-3">"Allahumma innadh dhuha-a dhuha-uka, wal bahaa-a bahaa-uka, wal jamaala jamaaluka, wal quwwata quwwatuka, wal qudrata qudratuka, wal 'ishmata 'ishmatuka."</p>
                <div class="w-12 h-px bg-emerald-200 dark:bg-emerald-800/50 mx-auto mb-3"></div>
                <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">"Ya Allah, sesungguhnya waktu dhuha adalah waktu dhuha-Mu, keagungan adalah keagungan-Mu, keindahan adalah keindahan-Mu, kekuatan adalah kekuatan-Mu, penjagaan adalah penjagaan-Mu."</p>
            </div>
        `
    },
    { 
        judul: "Panduan Shalat Tahajud", 
        slug: "shalat-tahajud",
        arab: "أُصَلِّيْ سُنَّةَ التَّهَجُّدِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", 
        latin: "Ushalli sunnatat tahajjudi rak'ataini lillaahi ta'aalaa.", 
        arti: "Aku niat shalat sunnah Tahajud dua rakaat karena Allah Ta'ala.", 
        riwayat: "Perintah langsung dalam QS. Al-Isra ayat 79 dan jaminan kemustajaban doa di sepertiga malam.", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Waktu malam adalah waktu yang paling jernih untuk menerapkan Nalar Teras. Saat orang lain terlelap, kita bangun merancang hari esok dan berdialog dengan Dzat Yang Tidak Pernah Tidur."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">Waktu & Syarat Utama:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li><strong>Syarat:</strong> Diwajibkan tidur terlebih dahulu, walaupun hanya sejenak (tidur ayam). Jika belum tidur, maka dihitung sebagai shalat sunnah mutlaq (Qiyamul Lail biasa).</li>
                <li><strong>Waktu Terbaik:</strong> Sepertiga malam terakhir (sekitar pukul 02.00 dini hari hingga menjelang adzan Subuh). Waktu ini disebut waktu mustajab turunnya rahmat Allah.</li>
                <li><strong>Rakaat:</strong> Minimal 2 rakaat. Tidak ada batasan maksimal, namun disunnahkan tidak memberatkan diri. Diakhiri dengan shalat Witir ganjil.</li>
            </ul>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara:</h3>
            <ol class="list-decimal pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Membaca niat shalat Tahajud.</li>
                <li>Dianjurkan membaca doa Iftitah.</li>
                <li>Membaca Al-Fatihah dilanjutkan surat dari Al-Quran yang dihafal. Dianjurkan memanjangkan ruku' dan sujud untuk merenung.</li>
                <li>Salam setiap 2 rakaat.</li>
                <li>Setelah selesai Tahajud, tutuplah ibadah malam dengan shalat Witir (1 atau 3 rakaat).</li>
                <li>Dianjurkan memperbanyak istighfar menunggu waktu Subuh.</li>
            </ol>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Doa Shalat Tahajud:</h3>
            <div class="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 md:p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/30 text-center shadow-inner">
                <p class="font-serif text-xl md:text-2xl mb-5 leading-loose text-slate-800 dark:text-slate-100">اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ لَكَ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</p>
                <p class="text-sm md:text-base italic text-emerald-700 dark:text-emerald-400 font-medium mb-3">"Allahumma lakal hamdu anta qayyimus samaawaati wal ardhi wa man fiihinna, wa lakal hamdu laka mulkus samaawaati wal ardhi wa man fiihinna, wa lakal hamdu anta nuurus samaawaati wal ardhi..."</p>
                <div class="w-12 h-px bg-emerald-200 dark:bg-emerald-800/50 mx-auto mb-3"></div>
                <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">"Ya Allah, bagi-Mu segala puji, Engkau penegak langit, bumi, dan apa yang ada di dalamnya. Bagi-Mu segala puji, milik-Mu kerajaan langit, bumi, dan apa yang ada di dalamnya. Bagi-Mu segala puji, Engkau cahaya langit dan bumi..."</p>
            </div>
        `
    },
    { 
        judul: "Panduan Shalat Taubat", 
        slug: "shalat-taubat",
        arab: "أُصَلِّيْ سُنَّةَ التَّوْبَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", 
        latin: "Ushalli sunnatat taubati rak'ataini lillaahi ta'aalaa.", 
        arti: "Aku niat shalat sunnah Taubat dua rakaat karena Allah Ta'ala.", 
        riwayat: "Hadits riwayat Abu Dawud no. 1521 tentang keutamaan berwudhu dan memohon ampunan dari dosa.", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Shalat Taubat adalah terapi psikologis paling ampuh. Kita mengakui secara rasional bahwa kita manusia lemah yang sering keliru, lalu membuang rasa bersalah itu dengan memohon ampunan-Nya agar batin kembali tenteram."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">Waktu & Syarat:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li><strong>Waktu:</strong> Bisa dikerjakan kapan saja segera setelah menyadari kesalahan atau perbuatan dosa, kecuali pada waktu terlarang shalat (saat terbit/tenggelam matahari). Sangat baik jika dikerjakan di sepertiga malam terakhir.</li>
                <li><strong>Syarat Taubat Nasuha:</strong> Menyesali perbuatan, berhenti seketika dari dosa tersebut, dan berjanji kuat tidak akan mengulanginya.</li>
            </ul>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara:</h3>
            <ol class="list-decimal pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Mandi taubat (opsional namun sangat dianjurkan) lalu berwudhu dengan sempurna.</li>
                <li>Niat shalat sunnah taubat.</li>
                <li>Dikerjakan 2 rakaat. Dianjurkan membaca Surah Al-Kafirun pada rakaat pertama dan Al-Ikhlas pada rakaat kedua.</li>
                <li>Sujud terakhir sebelum salam, perbanyak doa pengakuan dosa di dalam hati.</li>
                <li>Setelah salam, jangan langsung beranjak. Perbanyak dzikir dan istighfar (minimal 100 kali) hingga hati merasa lapang.</li>
            </ol>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Sayyidul Istighfar (Raja Istighfar):</h3>
            <div class="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 md:p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/30 text-center shadow-inner">
                <p class="font-serif text-xl md:text-2xl mb-5 leading-loose text-slate-800 dark:text-slate-100">اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ</p>
                <p class="text-sm md:text-base italic text-emerald-700 dark:text-emerald-400 font-medium mb-3">"Allahumma anta rabbii laa ilaaha illaa anta, khalaqtanii wa anaa 'abduka wa anaa 'alaa 'ahdika wa wa'dika mastatha'tu, a'uudzu bika min syarri maa shana'tu, abuu-u laka bini'matika 'alayya wa abuu-u laka bidzanbii faghfir lii fa-innahu laa yaghfirudz dzunuuba illaa anta."</p>
            </div>
        `
    },
    { 
        judul: "Tata Cara Tayammum", 
        slug: "tayammum",
        arab: "نَوَيْتُ التَّيَمُّمَ لِاسْتِبَاحَةِ الصَّلَاةِ فَرْضًا لِلَّهِ تَعَالَى", 
        latin: "Nawaitut tayammuma listibaahatish shalaati fardhal lillaahi ta'aalaa.", 
        arti: "Aku niat bertayammum untuk dapat mengerjakan shalat, fardhu karena Allah Ta'ala.", 
        riwayat: "Rukhshah dari QS. Al-Ma'idah ayat 6 dan Praktik Ammar bin Yasir dalam HR. Bukhari.", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Tayammum adalah bukti fleksibilitas syariat (Rukhshah). Nalar Teras mengajarkan kita untuk fokus pada apa yang bisa dilakukan dengan fasilitas yang ada, bukan mengeluhkan keadaan di luar kendali."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">Syarat Boleh Bertayammum:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Benar-benar tidak ditemukan air setelah berusaha mencari.</li>
                <li>Kondisi sakit berat, di mana jika terkena air penyakitnya akan bertambah parah (berdasarkan petunjuk dokter/ahli).</li>
                <li>Terdapat debu atau tanah yang suci (tidak terkena najis).</li>
                <li>Sudah masuk waktu shalat. Tayammum hanya berlaku untuk satu kali shalat fardhu.</li>
            </ul>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara Tayammum:</h3>
            <ol class="list-decimal pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Menghadap kiblat, membaca Basmalah dan melafalkan niat.</li>
                <li>Menepukkan/meletakkan kedua telapak tangan secara lembut ke permukaan debu (dinding, meja, atau tanah kering).</li>
                <li>Meniup tipis debu yang menempel di telapak tangan agar tidak terlalu tebal.</li>
                <li><strong>Mengusapkan kedua telapak tangan ke seluruh bagian wajah</strong> secara merata (cukup 1 kali usapan).</li>
                <li>Melepaskan cincin/jam tangan. Menepukkan kembali kedua tangan ke permukaan debu (di tempat yang berbeda dari tepukan pertama).</li>
                <li><strong>Mengusapkan telapak tangan kiri ke punggung tangan kanan</strong> hingga pergelangan (atau hingga siku menurut sebagian mazhab).</li>
                <li><strong>Mengusapkan telapak tangan kanan ke punggung tangan kiri</strong> (1 kali usapan).</li>
                <li>Selesai. Doa setelah tayammum sama dengan doa setelah wudhu.</li>
            </ol>
        `
    },
    { 
        judul: "Panduan Shalat Istikharah", 
        slug: "shalat-istikharah",
        arab: "أُصَلِّيْ سُنَّةَ الاِسْتِخَارَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", 
        latin: "Ushalli sunnatal istikhaarati rak'ataini lillaahi ta'aalaa.", 
        arti: "Aku niat shalat sunnah Istikharah dua rakaat karena Allah Ta'ala.", 
        riwayat: "Hadits Jabir bin Abdullah (HR. Bukhari no. 1162) tentang memohon pilihan urusan penting.", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Istikharah adalah puncak dari Nalar Teras (Stoikisme Islami). Kita sudah lelah berikhtiar membedah pilihan dengan akal budi, maka keputusan akhir kita pasrahkan kepada Sang Maha Tahu. Kita bersiap menerima apa pun hasilnya dengan lapang dada (Amor Fati)."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">Ketentuan:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Bisa dilakukan kapan saja, namun sangat dianjurkan saat sepertiga malam agar hati lebih tenang dan fokus.</li>
                <li>Jangan melakukan Istikharah jika hati sudah condong secara emosional pada satu pilihan. Kosongkan hati, netralkan pilihan.</li>
                <li>Jawaban Istikharah tidak selalu lewat mimpi. Seringkali berupa kemantapan hati secara tiba-tiba, dimudahkannya satu jalan, atau ditutupnya jalan yang lain.</li>
            </ul>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara & Doa:</h3>
            <ol class="list-decimal pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Niat shalat sunnah Istikharah.</li>
                <li>Dikerjakan 2 rakaat. Dianjurkan rakaat pertama membaca Al-Kafirun, rakaat kedua membaca Al-Ikhlas.</li>
                <li>Setelah salam, disunnahkan memuji Allah dan bershalawat.</li>
                <li>Membaca <strong>Doa Istikharah</strong> dengan penuh penghayatan, menyebutkan urusannya.</li>
            </ol>

            <div class="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 md:p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/30 text-center shadow-inner">
                <p class="text-sm md:text-base italic text-emerald-700 dark:text-emerald-400 font-medium mb-3">"Allahumma inni astakhiruka bi'ilmika, wa astaqdiruka biqudratika, wa as-aluka min fadhlika al-'azhim, fa-innaka taqdiru wa la aqdiru, wa ta'lamu wa la a'lamu, wa anta 'allaamul ghuyub..."</p>
                <div class="w-12 h-px bg-emerald-200 dark:bg-emerald-800/50 mx-auto mb-3"></div>
                <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">"Ya Allah, aku memohon petunjuk pilihan yang benar kepada-Mu dengan ilmu-Mu, memohon kemampuan dengan kodrat-Mu, dan memohon karunia-Mu yang agung... (sebutkan urusannya). Jika ini baik bagiku, agama, dan akhiratku, takdirkanlah. Jika buruk, palingkanlah dariku."</p>
            </div>
        `
    },
    { 
        judul: "Panduan Shalat Hajat", 
        slug: "shalat-hajat",
        arab: "أُصَلِّيْ سُنَّةَ الْحَاجَةِ رَكْعَتَيْنِ لِلَّهِ تَعَالَى", 
        latin: "Ushalli sunnatal haajati rak'ataini lillaahi ta'aalaa.", 
        arti: "Aku niat shalat sunnah Hajat dua rakaat karena Allah Ta'ala.", 
        riwayat: "Berdasarkan riwayat Abdullah bin Aufa (HR. Tirmidzi no. 479) untuk memohon kebutuhan mendesak.", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Shalat Hajat ibarat menyerahkan proposal langsung ke 'Pusat'. Daripada mengemis pertolongan manusia yang asring nguciwani, jauh lebih elegan dan menenangkan jika kita meminta kepada Dzat Yang Kekayaan-Nya tanpa batas."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">Kapan Dilakukan?</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Saat menghadapi ujian, kesulitan rezeki, hutang, atau jalan buntu.</li>
                <li>Saat memiliki cita-cita atau target besar yang ingin diraih.</li>
                <li>Dianjurkan mengerjakannya pada malam hari secara berturut-turut (misal 3 atau 7 malam).</li>
            </ul>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara:</h3>
            <ol class="list-decimal pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Berwudhu dengan sempurna dan khusyuk.</li>
                <li>Mengerjakan shalat sunnah Hajat minimal 2 rakaat (maksimal 12 rakaat).</li>
                <li>Disunnahkan membaca Ayat Kursi di rakaat pertama, dan Al-Ikhlas di rakaat kedua.</li>
                <li>Setelah salam, sujud kembali dan bacalah tasbih (Subhanallah walhamdulillah wala ilaha illallah wallahu akbar) serta shalawat Nabi.</li>
                <li>Sambil masih sujud, sampaikan hajat/keinginan di dalam hati secara spesifik.</li>
                <li>Duduk dan baca Doa Hajat.</li>
            </ol>

            <div class="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 md:p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/30 text-center shadow-inner">
                <p class="font-serif text-xl md:text-2xl mb-5 leading-loose text-slate-800 dark:text-slate-100">لَا إِلَهَ إِلَّا اللَّهُ الْحَلِيمُ الْكَرِيمُ سُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ الْعَظِيمِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</p>
                <p class="text-sm md:text-base italic text-emerald-700 dark:text-emerald-400 font-medium mb-3">"Laa ilaha illallahul haliimul kariim. Subhanallahi rabbil 'arsyil 'azhiim. Alhamdulillahi rabbil 'aalamiin..."</p>
                <div class="w-12 h-px bg-emerald-200 dark:bg-emerald-800/50 mx-auto mb-3"></div>
                <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">"Tidak ada Tuhan selain Allah Yang Maha Penyantun lagi Maha Mulia. Maha Suci Allah Tuhan 'Arsy yang agung. Segala puji bagi Allah Tuhan semesta alam..."</p>
            </div>
        `
    },
    { 
        judul: "Panduan Shalat Witir", 
        slug: "shalat-witir",
        arab: "أُصَلِّيْ سُنَّةَ الْوِتْرِ رَكْعَتَيْنِ / رَكْعَةً لِلَّهِ تَعَالَى", 
        latin: "Ushalli sunnatal witri rak'ataini / rak'atan lillaahi ta'aalaa.", 
        arti: "Aku niat shalat sunnah Witir dua rakaat / satu rakaat karena Allah Ta'ala.", 
        riwayat: "Hadits riwayat Bukhari, Muslim, dan Abu Dawud: 'Sesungguhnya Allah itu Witir (Ganjil) dan menyukai yang ganjil.'", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Shalat Witir menjadi stempel penutup ibadah malam kita. Ini adalah wujud kedisiplinan batin, menyerahkan seluruh hasil hari ini kepada Sang Ganjil sebelum kita berserah dalam lelapnya tidur."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">Ketentuan Witir:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li><strong>Waktu:</strong> Dikerjakan setelah shalat Isya hingga menjelang fajar (adzan Subuh).</li>
                <li>Bisa dilakukan sebelum tidur (bagi yang khawatir tidak bangun malam) atau dijadikan penutup setelah shalat Tahajud.</li>
                <li><strong>Rakaat:</strong> Harus ganjil. Boleh 1, 3, 5, 7, 9, atau 11 rakaat.</li>
                <li>Jika memilih 3 rakaat, paling utama dikerjakan dengan 2 rakaat salam, ditambah 1 rakaat salam.</li>
            </ul>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara 3 Rakaat (2 Salam):</h3>
            <ol class="list-decimal pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li>Niat Witir 2 rakaat: <em>Ushalli sunnatal witri rak'ataini lillahi ta'aalaa.</em></li>
                <li>Rakaat pertama baca Al-A'la, rakaat kedua Al-Kafirun. Salam.</li>
                <li>Niat Witir 1 rakaat: <em>Ushalli sunnatal witri rak'atan lillahi ta'aalaa.</em></li>
                <li>Rakaat tunggal ini dianjurkan membaca Al-Ikhlas, Al-Falaq, dan An-Nas. Salam.</li>
                <li>Disunnahkan membaca dzikir Witir setelah salam sebanyak 3 kali.</li>
            </ol>

            <div class="bg-emerald-50/50 dark:bg-emerald-900/10 p-5 md:p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/30 text-center shadow-inner">
                <p class="font-serif text-2xl md:text-3xl mb-5 leading-loose text-slate-800 dark:text-slate-100">سُبْحَانَ الْمَلِكِ الْقُدُّوْسِ</p>
                <p class="text-sm md:text-base italic text-emerald-700 dark:text-emerald-400 font-medium mb-3">"Subhaanal malikil qudduus" (Dibaca 3x, suara dikeraskan pada bacaan ketiga).</p>
                <div class="w-12 h-px bg-emerald-200 dark:bg-emerald-800/50 mx-auto mb-3"></div>
                <p class="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed">"Maha Suci Engkau Penguasa Yang Maha Suci."</p>
            </div>
        `
    },
    { 
        judul: "Tata Cara Shalat Jenazah", 
        slug: "shalat-jenazah",
        arab: "أُصَلِّي عَلَى هَذَا الْمَيِّتِ أَرْبَعَ تَكْبِيرَاتٍ فَرْضَ كِفَايَةٍ لِلَّهِ تَعَالَى", 
        latin: "Ushalli 'alaa haadzal mayyiti (pria) / haadzihil mayyitati (wanita) arba'a takbiiraatin fardha kifaayatin lillaahi ta'aalaa.", 
        arti: "Aku niat shalat atas jenazah ini empat kali takbir fardhu kifayah karena Allah Ta'ala.", 
        riwayat: "Fardhu Kifayah berdasarkan HR. Bukhari (1333). Pahala menyalatinya sebesar satu gunung Uhud.", 
        narasi: `
            <p class="mb-5 text-slate-600 dark:text-slate-400 italic border-l-2 border-emerald-400 pl-4">"Sebagai Kasi Pemerintahan dan warga masyarakat, kita akan sering takziyah. Shalat jenazah adalah *Memento Mori* (Pengingat Kematian). Saat kita berdiri mendoakan yang telah wafat, kita sadar bahwa tak lama lagi kitalah yang akan terbaring kaku di depan jamaah."</p>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mt-6 mb-3">Posisi Imam & Niat:</h3>
            <ul class="list-disc pl-5 space-y-2 mb-8 text-slate-700 dark:text-slate-300">
                <li><strong>Jenazah Laki-laki:</strong> Posisi imam berdiri sejajar dengan kepala jenazah. Niat: <em>... 'alaa haadzal mayyiti ...</em></li>
                <li><strong>Jenazah Perempuan:</strong> Posisi imam berdiri sejajar dengan pusar/perut jenazah. Niat: <em>... 'alaa haadzihil mayyitati ...</em></li>
            </ul>

            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-400 mb-3">Tata Cara 4 Takbir (Dikerjakan Tanpa Ruku' & Sujud):</h3>
            <ol class="list-decimal pl-5 space-y-3 mb-8 text-slate-700 dark:text-slate-300">
                <li><strong>Takbir Pertama:</strong> Niat di dalam hati dan membaca <strong>Surah Al-Fatihah</strong>.</li>
                <li><strong>Takbir Kedua:</strong> Membaca <strong>Shalawat Nabi</strong>. (Minimal: <em>Allahumma shalli 'alaa Muhammad</em>. Lebih utama shalawat Ibrahimiyah seperti dalam Tahiyat).</li>
                <li><strong>Takbir Ketiga:</strong> Mendoakan mayit secara khusus.<br/>
                <em class="text-emerald-600 dark:text-emerald-400">(Pria: Allahummaghfirlahu warhamhu wa 'aafihi wa'fu 'anhu)</em><br/>
                <em class="text-emerald-600 dark:text-emerald-400">(Wanita: Allahummaghfirlaha warhamha wa 'aafiha wa'fu 'anha)</em></li>
                <li><strong>Takbir Keempat:</strong> Membaca doa penutup: <br/>
                <em>Allahumma laa tahrimnaa ajrahu (ajraha) walaa taftinna ba'dahu (ba'daha) waghfirlanaa walahu (walaha).</em></li>
                <li><strong>Salam:</strong> Menoleh ke kanan dan ke kiri seperti shalat biasa.</li>
            </ol>
        `
    },
];