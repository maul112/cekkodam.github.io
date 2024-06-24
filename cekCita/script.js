const cita = ["Dokter", "Programer", "Tukang kubur", "Peneliti semut", "Ternak lele", "Full stack", "Naik haji", "Tukang parkir", "Musuh masyarakat", "Pilot kapal", "Nahkoda pesawat", "Kapal laut", "Ternak ayam sambel", "Sedot WC", "Masinis mobil", "Bengkel", "Turu", "Melihat dia dengan yang lain", "Backend", "Frontend", "Perawat kucing", "Turu", "Beli truk", "Kaya", "Juragan cripto", "Punya ulti nolan", "Pro player free fire", "Gamer tidak toxic", "Peneliti ayam bertelur", "Peroasting handal", "Jual beli online", "Admin pinjol", "Filsuf estetik", "Editor berkelas", "Bug hunter", "Badut", "DevOps", "Begal", "Pengukur jalan", "Satpam utm", "Rektor", "Dekan", "Presiden", "DPR", "KPK", "Panitia ospek", "Kominfo", "Jaksa agung", "Pengacara handal", "Pembangun candi", "Live shopee", "Kuli jawa", "Hair stylish", "Petani kelapa sawit", "Jual sate ikan", "Ojol", "Dukun", "Menikahi anime", "Pergi ke jepang", "Barista", "Pokoknya punya kafe"];

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
    let hasilCita = cita[ind % cita.length];
    hasil.querySelector("h2").innerHTML = input.value;
    hasil.querySelector("p").innerHTML = hasilCita;
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
    }, 300);
    nama.value = "";
});

kembali.addEventListener('click', function() {
    kembali.classList.toggle("none");
    formContainer.classList.toggle("none");
    hasil.classList.toggle("none");
});