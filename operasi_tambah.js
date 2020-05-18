function tambah(){
    var bilanganPertama = document.getElementById('bilanganPertama').value;
    var bilanganKedua = document.getElementById('bilanganKedua').value;
    var hasil = parseInt(bilanganPertama)+ parseInt(bilanganKedua);
    if(!isNaN(hasil)){
        document.getElementById('hasil').value = hasil;
    }
}
var perubahP = document.getElementsByTagName('p');
var perubahClass = document.getElementsByClassName('hijau');
perubahClass[0].style.background = 'red';

