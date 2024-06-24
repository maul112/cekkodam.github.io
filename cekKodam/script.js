const kodam1 = ["Kulkas dua pintu", "Kuntilanak", "Pocong jalan", "Macan nyengir", "Sayur bayam", "Duyung Afrika", "Bagas dribel", "Kecoak salto Belakang", "Samsuddin", "Tuyul mullet", "Mejikom", "Siluman Kadal", "Semut pincang", "Nenek peot", "Uni bakwan", "Buaya sumbing", "Cicak Salto", "Ayam Jantan", "Tutup termos", "Mbah wedok", "Megachan", "Belum ada", "Piring salto", "ikan tongkol", "Kosong", "Rawarontek", "Beat karbu", "Hiu pargoy", "Domba Garut", "Ember terbang", "Ebu Gebrek", "Ular Amazon", "Babi mullet", "Sapi terbang", "Sendal jepit", "Singa laut", "Ular kasur", "Mobil Salto", "Saber roam", "Mayat Idup", "Singa Merah", "Pintu lipat", "Panda sipit", "Pocong pargoy", "Jerapah nyengir", "bebek tobrut", "Serigala Tobat", "Ular bolong", "Garuda emas", "Bantal sumbing", "Kuda nyengir", "Roti sepique", "Semut putih", "Satria fu", "Mclaren flu batuk", "Kuyang pargoy", "Remot Ac", "Boger Taser", "Monyet nyengir", "kompor curhat", "Gajah duduk","Ironman pincang", "Sundel bolong", "Kecoa telang", "Hiu malas", "Ulat mullet", "Naga emas", "Ubur ubur", "Kera putih", "Tikus got", "Kangkung", "Gagak bermata satu", "Jincuriki", "Keris emas", "Merak hitam", "Roti seppique", "Anak kucing", "Rektor", "Wadek", "Ular berkaki 2", "Ikan berkepala lele", "Plato", "Marcus", "Atan", "Kalajengking berkaki ayam", "Ayam goreng", "Kecambah", "Kacang ijo", "Kelapa merah", "Ikmal kopling", "Honda beat", "Honda vario", "Kos harian", "Begal timur kampus", "Kosong", "Belum ada", "Bayi naga", "Tahu kering", "Nasi uduk", "Harimau oren", "Nasi pecel", "Kursi angkot", "Telur ayam", "Beat karbo", "Kelinci", "Kudanil albino", "Kecoa terbang", "Harimau kena azab", "Buku sido", "Kelinci banyuangi", "Bakwan", "Batako", "Marmut mulet", "Harimau kuning", "Bayi kucing", "Bakwan jagung", "Singa paddle pop", "Martabak coklat pisang", "Ular berkepala ikan", "Ikan sepat", "Panggangan roti bakar", "Marmut pink", "Sedotan mixue", "Sumpit gacoan", "Dimsum gacoan", "Naga udara", "Kecoa melayang", "Pensil inul", "Macan tutul", "Layangan", "Alok", "Sariroti", "Kabel charger", "Sendal jepit", "Jiwa yang bersedih", "Naga emas", "Ikan lohan", "Anjing terbang", "Kapal laut", "Kapal selam", "Gerobak bakso", "Lele darat", "Garpu", "Ganjar", "Asbak", "Surya 12", "Tuyul teknik", "Jupiter X", "Tiang listrik", "Cicak terbang", "Gajah baru", "Jantung pisang", "HTML", "Kaleng besi", "Koka kola", "CSS", "JavaScript", "Ayam suwir", "Ukulele", "Uranium", "Gantungan kunci", "Kotak sepatu", "Dus HP", "Ikat rambut"];
const kodam2 = ["Lisa blackping", "Pepaya goreng", "Sisir patah", "Casing HP", "Stop kontak", "Taperwer", "Celana formal", "Kopiko", "Biskuit tanggo", "Kresek merah", "Karpet ijo", "Tas ransel", "Handbody marina", "Jepit rambut", "Baterai HP kembung", "Motor supra", "Singa kayang", "Kosong", "Belum ada", "Charger type C", "Dasi SD", "Swallow", "Anak sapi", "Pohon pisang", "Ubur ubur", "Bintang laut", "Lintah berair", "Nyamuk merah", "Tikus hijau", "Katak sawah", "Katak acumalaka", "Cicak resink", "Lele gondrong", "Soto madura", "Sate madura", "Ular terbang", "Kalkulator", "Kura-kura ninja", "Tutup golda", "Kopi hitam", "Biawak alaska", "Sapu lidi", "Tol cipali", "Pitik kepala sapi"];

const kodam = [kodam1, kodam2];

const btn = document.getElementById('btn');
const input = document.getElementById('nama');
const hasil = document.getElementById('hasil');
const loading = document.querySelector(".loading");
const formContainer = document.querySelector(".formContainer");
const kembali = document.querySelector(".kembali");

let count = 0;
const progress = document.getElementById("progres");
progress.innerHTML = count;

btn.addEventListener('click', function() {
    if(input.value === "") {
        alert("Nama tidak boleh kosong");
        input.focus();
        return;
    }
    let ind = Math.ceil(Math.random() * 1000);
    let whichKodam = kodam[ind % kodam.length];
    let hasilKodam = whichKodam[ind % whichKodam.length];
    hasil.querySelector("h2").innerHTML = input.value;
    hasil.querySelector("p").innerHTML = hasilKodam;
    formContainer.classList.toggle("none");
    loading.classList.toggle("none");
    let interval = setInterval(function() {
        count += 10;
        progress.innerHTML = count;
        if(count === 100) {
            loading.classList.toggle("none");
            hasil.classList.toggle("none");
            kembali.classList.toggle("none");
            count = 0;
            progress.innerHTML = 0;
            input.value = "";
            clearInterval(interval);
        }
    }, 500);
});

kembali.addEventListener('click', function() {
    kembali.classList.toggle("none");
    formContainer.classList.toggle("none");
    hasil.classList.toggle("none");
});