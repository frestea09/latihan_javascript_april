function KerangkaOperasi(){
    var bilanganPertama = 0;
    var bilanganKedua = 0;
    this.setBilanganPertama = function(variabelInput){
        bilanganPertama = Number(variabelInput);
    }
    this.getBilanganPertama = function(){
        return bilanganPertama;
    }
    this.setBilanganKedua = function(variableInput){
        bilanganKedua = Number(variableInput);
    }
    this.getBilangganKedua = function(){
        return bilanganKedua;
    }
}
function Operasi(){}
Operasi.prototype = new KerangkaOperasi();
Operasi.prototype.constructor = KerangkaOperasi;
Operasi.prototype.jumlah = function(){
    // var hasil = Operasi.getBilanganPertama() + Operasi.getBilangganKedua();
    // return hasil;
    alert( Operasi.getBilanganPertama() );
}
Operasi.prototype.kurang = function(){
    var hasil = Operasi.bilanganPertama - Operasi.bilanganKedua;
    return hasil;
}
Operasi.prototype.kali = function(){
    var hasil = Operasi.bilanganPertama * Operasi.bilanganKedua;
    return hasil;
}
Operasi.prototype.bagi = function(){
    var hasil = Operasi.bilanganPertama / Operasi.bilanganKedua;
    return hasil;
}
function operasiAritamti(){
    var objOperasi = new Operasi;
    var objBilanganPertama = document.getElementById("bilanganPertama").value;
    var objBilanganKedua = document.getElementById("bilanganKedua").value;
    objOperasi.setBilanganPertama(objBilanganPertama);
    objOperasi.setBilanganKedua(objBilanganKedua);
    var objOperator = document.getElementById("operasiHitung").value;
    if(objOperator=="tambah"){
        var hasil = objOperasi.getBilanganPertama()+objOperasi.getBilangganKedua();
        console.log(hasil);
    }else if(objOperator=="kurang"){
        var hasil = objOperasi.getBilanganPertama()-objOperasi.getBilangganKedua();
    }else if(objOperator=="kali"){
        var hasil = objOperasi.getBilanganPertama()*objOperasi.getBilangganKedua();
    }else if(objOperator=="bagi"){
        var hasil = objOperasi.getBilanganPertama()/objOperasi.getBilangganKedua();
    }
    document.getElementById("hasil").value = hasil;
}
var objPertma = document.getElementById("bilanganPertama");
objPertma.addEventListener('keyup',operasiAritamti);
var objKedua = document.getElementById("bilanganKedua");
objKedua.addEventListener('keyup',operasiAritamti);