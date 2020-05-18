// function printHello(){
//     var nama = document.getElementById('nameMahasiswa').value;
//     alert(nama);
// }
function haihai(){
    var bilanganPertama = document.getElementById('bilanganSatu').value;
    var bialnganKedua = document.getElementById('bilanganDua').value;
    var hasil = Number(bilanganPertama) + Number(bialnganKedua);
    document.getElementById('Hasil').value = hasil;
}
const pertama = document.querySelector('#bilanganSatu');
pertama.addEventListener('keyup',haihai);
const kedua = document.querySelector('#bilanganDua');
kedua.addEventListener('keyup',haihai);
