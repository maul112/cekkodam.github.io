const aura = ["Merah menyala", "Ungu janda", "Cian", "Kuning emas", "Emas kuning", "Biru teknik", "Hijau tua", "Ungu indigo", "Oren senja", "Oren skrinsut", "Biru laut", "Hijau rumput laut", "Merah terbakar", "Coklat kayu", "Putih bening", "Hitam suram", "Abu-abu burik", "Tembaga", "Pink suka-suka", "Merah ong", "Hitam negro", "Coklat kopi", "Kuning minyak", "Ungu ubi", "Ungu pendidikan", "Oren pisib", "Hijau pertanian"];

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
    let hasilAura = aura[ind % aura.length];
    hasil.querySelector("h2").innerHTML = input.value;
    hasil.querySelector("p").innerHTML = hasilAura;
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
    }, 200);
    nama.value = "";
});

kembali.addEventListener('click', function() {
    kembali.classList.toggle("none");
    formContainer.classList.toggle("none");
    hasil.classList.toggle("none");
});