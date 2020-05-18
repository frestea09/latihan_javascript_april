function sayHello(){
    var name = document.getElementById('nameMahasiswa').value;
    var hobby = document.getElementById('Hobby').value;
    for (item in hobby){
        document.writeln(hobby[item]);
    };
    document.writeln("<br/>"+name+"<br/>");
}
var objTombol = document.getElementById('formMahasiswa') ;
objTombol.addEventListener('submit',sayHello);