const surahData = [
{arabic:"عَمَّ يَتَسَآءَلُونَ", translation:"Tentang apakah mereka saling bertanya-tanya?"},
{arabic:"عَنِ النَّبَإِ الْعَظِيمِ", translation:"Tentang berita yang besar,"},
{arabic:"الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ", translation:"yang mereka perselisihkan tentang itu."},
{arabic:"كَلَّا سَيَعْلَمُونَ", translation:"Sekali-kali tidak; kelak mereka akan mengetahui,"},
{arabic:"ثُمَّ كَلَّا سَيَعْلَمُونَ", translation:"kemudian sekali-kali tidak; kelak mereka akan mengetahui."},
{arabic:"أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا", translation:"Bukankah Kami telah menjadikan bumi itu sebagai hamparan?"},
{arabic:"وَالْجِبَالَ أَوْتَادًا", translation:"Dan gunung-gunung sebagai pasak?"},
{arabic:"وَخَلَقْنَاكُمْ أَزْوَاجًا", translation:"Dan Kami menciptakan kamu berpasang-pasangan,"},
{arabic:"وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا", translation:"Dan Kami jadikan tidurmu untuk istirahat,"},
{arabic:"وَجَعَلْنَا اللَّيْلَ لِبَاسًا", translation:"Dan Kami jadikan malam sebagai pakaian (penutup),"},
{arabic:"وَجَعَلْنَا النَّهَارَ مَعَاشًا", translation:"Dan Kami jadikan siang untuk mencari penghidupan,"},
{arabic:"وَبَنَيْنَا فَوْقَكُمْ سَبْعًا شِدَادًا", translation:"Dan Kami bangun di atas kamu tujuh (langit) yang kokoh,"},
{arabic:"وَجَعَلْنَا سِرَاجًا وَهَّاجًا", translation:"Dan Kami jadikan pelita yang amat terang (matahari)."},
{arabic:"وَأَنزَلْنَا مِنَ الْمُعْصِرَاتِ مَاءً ثَجَّاجًا", translation:"Dan Kami turunkan dari awan air yang tercurah dengan deras,"},
{arabic:"لِّنُخْرِجَ بِهِ حَبًّا وَنَبَاتًا", translation:"Agar Kami tumbuhkan dengan air itu biji-bijian dan tanam-tanaman,"},
{arabic:"وَجَنَّاتٍ أَلْفَافًا", translation:"Dan kebun-kebun yang lebat."},
{arabic:"إِنَّ يَوْمَ الْفَصْلِ كَانَ مِيقَاتًا", translation:"Sesungguhnya hari keputusan adalah suatu waktu yang telah ditetapkan,"},
{arabic:"يَوْمَ يُنفَخُ فِي الصُّورِ فَتَأْتُونَ أَفْوَاجًا", translation:"Yaitu pada hari ditiup sangkakala lalu kamu datang berkelompok-kelompok,"},
{arabic:"وَفُتِحَتِ السَّمَاءُ فَكَانَتْ أَبْوَابًا", translation:"Dan dibukalah langit, maka menjadi beberapa pintu,"},
{arabic:"وَسُيِّرَتِ الْجِبَالُ فَكَانَتْ سَرَابًا", translation:"Dan gunung-gunung pun dijalankan sehingga menjadi fatamorgana."},
{arabic:"إِنَّ جَهَنَّمَ كَانَتْ مِرْصَادًا", translation:"Sesungguhnya neraka Jahannam itu (sebagai) tempat mengintai,"},
{arabic:"لِّلطَّاغِينَ مَآبًا", translation:"Sebagai tempat kembali bagi orang-orang yang melampaui batas."},
{arabic:"لَابِثِينَ فِيهَا أَحْقَابًا", translation:"Mereka tinggal di dalamnya berabad-abad lamanya."},
{arabic:"لَا يَذُوقُونَ فِيهَا بَرْدًا وَلَا شَرَابًا", translation:"Mereka tidak merasakan kesejukan di dalamnya dan tidak (pula mendapat) minuman,"},
{arabic:"إِلَّا حَمِيمًا وَغَسَّاقًا", translation:"Selain air yang mendidih dan nanah,"},
{arabic:"جَزَاءً وِفَاقًا", translation:"Sebagai pembalasan yang setimpal."},
{arabic:"إِنَّهُمْ كَانُوا لَا يَرْجُونَ حِسَابًا", translation:"Sesungguhnya mereka dahulu tidak mengharapkan (takut) akan perhitungan,"},
{arabic:"وَكَذَّبُوا بِآيَاتِنَا كِذَّابًا", translation:"Dan mereka mendustakan ayat-ayat Kami dengan sesungguh-sungguhnya."},
{arabic:"وَكُلَّ شَيْءٍ أَحْصَيْنَاهُ كِتَابًا", translation:"Dan segala sesuatu telah Kami catat dalam suatu kitab."},
{arabic:"فَذُوقُوا فَلَن نَّزِيدَكُمْ إِلَّا عَذَابًا", translation:"Maka rasakanlah! Kami tidak akan menambah kepadamu selain azab."},
{arabic:"إِنَّ لِلْمُتَّقِينَ مَفَازًا", translation:"Sesungguhnya bagi orang-orang yang bertakwa ada kemenangan,"},
{arabic:"حَدَائِقَ وَأَعْنَابًا", translation:"(Yaitu) kebun-kebun dan buah anggur,"},
{arabic:"وَكَوَاعِبَ أَتْرَابًا", translation:"Dan gadis-gadis remaja yang sebaya,"},
{arabic:"وَكَأْسًا دِهَاقًا", translation:"Dan gelas-gelas yang penuh (berisi minuman)."},
{arabic:"لَا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا كِذَّابًا", translation:"Di dalamnya mereka tidak mendengar perkataan yang sia-sia dan dusta."},
{arabic:"جَزَاءً مِّن رَّبِّكَ عَطَاءً حِسَابًا", translation:"Sebagai balasan dari Tuhanmu, pemberian yang cukup banyak,"},
{arabic:"رَّبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الرَّحْمَـٰنِ لَا يَمْلِكُونَ مِنْهُ خِطَابًا", translation:"(Yaitu) Tuhan yang memelihara langit dan bumi dan apa yang ada di antara keduanya, Yang Maha Pemurah, mereka tidak dapat berbicara dengan-Nya."},
{arabic:"يَوْمَ يَقُومُ الرُّوحُ وَالْمَلَائِكَةُ صَفًّا لَّا يَتَكَلَّمُونَ إِلَّا مَنْ أَذِنَ لَهُ الرَّحْمَـٰنُ وَقَالَ صَوَابًا", translation:"Pada hari ketika Ruh dan para malaikat berdiri bersaf-saf, mereka tidak berkata-kata kecuali yang telah diberi izin oleh Tuhan Yang Maha Pemurah, dan ia berkata benar."},
{arabic:"ذَٰلِكَ الْيَوْمُ الْحَقُّ ۖ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ مَآبًا", translation:"Itulah hari yang pasti terjadi. Maka barang siapa menghendaki, niscaya ia menempuh jalan kembali kepada Tuhannya."},
{arabic:"إِنَّا أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا ۖ يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا", translation:"Sesungguhnya Kami telah memperingatkan kepadamu azab yang dekat, pada hari manusia melihat apa yang telah diperbuat oleh kedua tangannya; dan orang kafir berkata: 'Alangkah baiknya sekiranya aku dahulu menjadi tanah'."}
];

const container = document.getElementById('surah-container');

surahData.forEach((ayat, i) => {
  const div = document.createElement('div');
  div.className = 'ayat';
  div.style.animationDelay = `${i * 0.15}s`; // efek fade-in bertahap
  div.innerHTML = `
    <div class="arabic">${ayat.arabic}</div>
    <div class="translation"><b>Ayat ${i + 1}:</b> ${ayat.translation}</div>
  `;
  container.appendChild(div);
});

// Tombol scroll ke atas
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});