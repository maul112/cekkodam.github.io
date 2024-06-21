const cita = ["Dokter", "Programer", "Tukang kubur", "Peneliti semut", "Ternak lele", "Full stack", "Naik haji", "Tukang parkir", "Musuh masyarakat", "Pilot kapal", "Nahkoda pesawat", "Kapal laut", "Ternak ayam sambel", "Sedot WC", "Masinis mobil", "Bengkel", "Turu", "Melihat dia dengan yang lain", "Backend", "Frontend", "Perawat kucing", "Turu", "Beli truk", "Kaya", "Juragan cripto", "Punya ulti nolan", "Pro player free fire", "Gamer tidak toxic", "Peneliti ayam bertelur", "Peroasting handal", "Jual beli online", "Admin pinjol", "Filsuf estetik", "Editor berkelas", "Bug hunter", "Badut", "DevOps", "Begal", "Pengukur jalan", "Satpam utm", "Rektor", "Dekan", "Presiden", "DPR", "KPK", "Panitia ospek", "Kominfo", "Jaksa agung", "Pengacara handal", "Pembangun candi", "Live shopee", "Kuli jawa", "Hair stylish", "Petani kelapa sawit", "Jual sate ikan", "Ojol", "Dukun", "Menikahi anime", "Pergi ke jepang", "Barista", "Pokoknya punya kafe"];

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
    let hasilCita = cita[ind % cita.length];
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    h2.innerHTML = input.value;
    p.innerHTML = hasilCita;
    div.appendChild(h2);
    div.appendChild(p);
    div.classList.add('subhasil');
    hasil.appendChild(div);
    nama.value = "";
});