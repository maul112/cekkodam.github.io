const aura = ["Merah menyala", "Ungu janda", "Cian", "Kuning emas", "Emas kuning", "Biru teknik", "Hijau tua", "Ungu indigo", "Oren senja", "Oren skrinsut", "Biru laut", "Hijau rumput laut", "Merah terbakar", "Coklat kayu", "Putih bening", "Hitam suram", "Abu-abu burik", "Tembaga", "Pink suka-suka", "Merah ong", "Hitam negro", "Coklat kopi", "Kuning minyak", "Ungu ubi", "Ungu pendidikan", "Oren pisib", "Hijau pertanian"];

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
    let hasilAura = aura[ind % aura.length];
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerHTML = input.value;
    p.innerHTML = hasilAura;
    div.appendChild(h2);
    div.appendChild(p);
    div.classList.add('subhasil');
    hasil.appendChild(div);
    nama.value = "";
});