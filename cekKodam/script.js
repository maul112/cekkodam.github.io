const kodam = ["Kulkas dua pintu", "Kuntilanak", "Pocong jalan", "Macan nyengir", "Sayur bayam", "Duyung Afrika", "Bagas dribel", "Kecoak salto Belakang", "Samsuddin", "Tuyul mullet", "Mejikom", "Siluman Kadal", "Semut pincang", "Nenek peot", "Uni bakwan", "Buaya sumbing", "Cicak Salto", "Ayam Jantan", "Tutup termos", "Mbah wedok", "Megachan", "Belum ada", "Piring salto", "ikan tongkol", "Kosong", "Rawarontek", "Beat karbu", "Hiu pargoy", "Domba Garut", "Ember terbang", "Ebu Gebrek", "Ular Amazon", "Babi mullet", "Sapi terbang", "Sendal jepit", "Singa laut", "Ular kasur", "Mobil Salto", "Saber roam", "Mayat Idup", "Singa Merah", "Pintu lipat", "Panda sipit", "Pocong pargoy", "Jerapah nyengir", "bebek tobrut", "Serigala Tobat", "Ular bolong", "Garuda emas", "Bantal sumbing", "Kuda nyengir", "Roti sepique", "Semut putih", "Satria fu", "Mclaren flu batuk", "Kuyang pargoy", "Remot Ac", "Boger Taser", "Monyet nyengir", "kompor curhat", "Gajah duduk","Ironman pincang", "Sundel bolong", "Kecoa telang", "Hiu malas", "Ulat mullet", "Naga emas", "Ubur ubur", "Kera putih", "Tikus got", "Kangkung", "Gagak bermata satu", "Jincuriki", "Keris emas", "Merak hitam", "Roti seppique", "Anak kucing", "Rektor", "Wadek", "Ular berkaki 2", "Ikan berkepala lele", "Plato", "Marcus", "Atan", "Kalajengking berkaki ayam", "Ayam goreng", "Kecambah", "Kacang ijo", "Kelapa merah", "Ikmal kopling", "Honda beat", "Honda vario", "Kos harian", "Begal timur kampus", "Kosong", "Belum ada", "Bayi naga", "Tahu kering", "Nasi uduk", "Harimau oren", "Nasi pecel", "Kursi angkot", "Telur ayam", "Beat karbo", "Kelinci", "Kudanil albino", "Kecoa terbang", "Harimau kena azab", "Buku sido", "Kelinci banyuangi", "Bakwan", "Batako", "Marmut mulet", "Harimau kuning", "Bayi kucing", "Bakwan jagung", "Singa paddle pop", "Martabak coklat pisang", "Ular berkepala ikan", "Ikan sepat", "Panggangan roti bakar", "Marmut pink", "Sedotan mixue", "Sumpit gacoan", "Dimsum gacoan", "Naga udara", "Kecoa melayang", "Pensil inul", "Macan tutul", "Layangan", "Alok", "Sariroti", "Kabel charger", "Sendal jepit", "Jiwa yang bersedih", "Naga emas", "Ikan lohan", "Anjing terbang", "Kapal laut", "Kapal selam", "Gerobak bakso", "Lele darat", "Garpu", "Ganjar", "Asbak", "Surya 12", "Tuyul teknik", "Jupiter X", "Tiang listrik", "Cicak terbang", "Gajah baru", "Jantung pisang", "HTML", "Kaleng besi", "Koka kola", "CSS", "JavaScript", "Ayam suwir", "Ukulele", "Uranium", "Gantungan kunci", "Kotak sepatu", "Dus HP", "Ikat rambut"];
const kodam2 = ["Lisa blackping", "Pepaya goreng", "Sisir patah", "Casing HP", "Stop kontak", "Taperwer", "Celana formal", "Kopiko", "Biskuit tanggo", "Kresek merah", "Karpet ijo", "Tas ransel", "Handbody marina", "Jepit rambut", "Baterai HP kembung", "Motor supra", "Singa kayang", "Kosong", "Belum ada", "Charger type C", "Dasi SD", "Swallow", "Anak sapi", "Pohon pisang", "Ubur ubur", "Bintang laut", "Lintah berair", "Nyamuk merah", "Tikus hijau", "Katak sawah", "Katak acumalaka", "Cicak resink", "Lele gondrong", "Soto madura", "Sate madura", "Ular terbang", "Kalkulator", "Kura-kura ninja", "Tutup golda", "Kopi hitam", "Biawak alaska", "Sapu lidi", ""];

const btn = document.getElementById('btn');
const input = document.getElementById('nama');
const hasil = document.getElementById('hasil');
btn.addEventListener('click', function() {
    if(input.value === "") {
        alert("Nama tidak boleh kosong");
        input.focus();
        return;
    }
    let ind = Math.ceil(Math.random() * 1000);
    let whichKodam = Math.ceil(Math.random() * 100);
    let hasilKodam;
    if(whichKodam %  2 === 0) {
        hasilKodam = kodam[ind%kodam.length];
    } else {
        hasilKodam = kodam2[ind%kodam2.length];
    }
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerHTML = input.value;
    p.innerHTML = hasilKodam;
    div.appendChild(h2);
    div.appendChild(p);
    div.classList.add('subhasil');
    hasil.appendChild(div);
    nama.value = "";
});