//for

var nBaris;
var baris, kolom;

function buatBaris() {
    document.getElementById("result").innerHTML = "";
    
    nBaris = document.getElementById("baris").value;
    //format : for(nilai awal variabel patokan; syarat yang mesti dipenuhi agar pengulangan fornya; aturan pertambahan/pengurangan nilai, misal tiap fornya selesai dijalankan bertambah 1)
    for(baris = 1; baris <= nBaris; baris++) {
        for(kolom = 1; kolom <= nBaris; kolom++){
            document.getElementById("result").innerHTML += "*";
        }
        document.getElementById("result").innerHTML += "<br>";
    }
}

//do-while

var num;

function ulangTerus() {
    document.getElementById("hasil").innerHTML = "";

    //nomer barisnya
    num = document.getElementById("col").value;
    var i = 1; //baris keberapanya
    var belumTigaBaris = true;

    do {
        document.getElementById("hasil").innerHTML += "Kelas RPL 2 : baris ke-" + num + "<br>";
        if(i == 3) {
            belumTigaBaris = false;
        } else {
            i++;
        }
        num++;
    } while(belumTigaBaris); //kalau di do-while, hanya ada syarat saja.
}