const nama1 = document.getElementById('nama1');
const nama2 = document.getElementById('nama2');
const btn = document.getElementById('btn');
const hasil = document.getElementById('hasil');
btn.addEventListener('click', function() {
    let percentage = Math.ceil(Math.random() * 100);
    if(oke(nama1,nama2)) {
        percentage = 0;
    }
    if(nama1.value === "" || nama2.value === "") {
        alert("Nama tidak boleh kosong");
        return;
    }
    const container = document.createElement('div');
    container.classList.add('subhasil');
    const image = document.createElement('img');
    if(percentage >= 90) {
        image.src = '../img/90.png';
    } else if(percentage >= 80) {
        image.src = '../img/80.png';
    } else if(percentage >= 65) {
        image.src = '../img/65.png';
    } else if(percentage >= 40) {
        image.src = '../img/40.png';
    } else if(percentage >= 20) {
        image.src = '../img/20.png';
    } else {
        image.src = '../img/0.png';
    };
    image.alt = "meme";
    const detail = document.createElement('div');
    detail.classList.add('detail');
    let teks = `<h2>${nama1.value.toUpperCase()}</h2><h2>${percentage}%</h2><h2>${nama2.value.toUpperCase()}</h2>`;
    detail.innerHTML = teks;
    container.appendChild(image);
    container.appendChild(detail);
    hasil.appendChild(container);
    nama1.value = "";
    nama2.value = "";
})












































































function oke(nama1,nama2) {
    if(nama1.value === "aku" && nama2.value === "dia") {
        return true
    } else {
        return false
    } 
}