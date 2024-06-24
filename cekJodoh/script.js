const nama1 = document.getElementById('nama1');
const nama2 = document.getElementById('nama2');
const btn = document.getElementById('btn');
const hasil = document.getElementById('hasil');
const formContainer = document.querySelector(".formContainer");
const loading = document.querySelector(".loading");
const kembali = document.querySelector(".kembali");
const progress = document.getElementById("progres");
let count = 0;
progress.innerHTML = count;
btn.addEventListener('click', function() {
    let percentage = Math.ceil(Math.random() * 100);
    if(oke(nama1,nama2)) {
        percentage = 0;
    }
    if(nama1.value === "" || nama2.value === "") {
        alert("Nama tidak boleh kosong");
        return;
    }
    const image = document.getElementById("image");
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
    formContainer.classList.toggle("none");
    loading.classList.toggle("none");
    let interval = setInterval(function() {
        progress.innerHTML = count;
        count += 5;
        if(count === 100) {
            loading.classList.toggle("none");
            hasil.classList.toggle("none");
            kembali.classList.toggle("none");
            count = 0;
            progress.innerHTML = 0;
            nama1.value = "";
            nama2.value = "";
            clearInterval(interval);
        }
    }, 1000);
    let detail = document.querySelector(".detail");
    let teks = `<h2>${nama1.value.toUpperCase()}</h2><h2 class='percentage'>${percentage}%<img src='../img/love.png' alt='love'></h2><h2>${nama2.value.toUpperCase()}</h2>`;
    detail.innerHTML = teks;
});

kembali.addEventListener('click', function() {
    kembali.classList.toggle("none");
    hasil.classList.toggle("none");
    formContainer.classList.toggle("none");
})












































































function oke(nama1,nama2) {
    if(nama1.value === "aku" && nama2.value === "dia") {
        return true
    } else {
        return false
    } 
}