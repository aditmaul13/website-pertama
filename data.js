const nama = "Adit";
let usia = 15;

let biodata = document.getElementById('biodata')
console.log(biodata);

 function generateBiodata() {
    let generasi;

    if(usia > 10 && usia <18){
         generasi = "Generasi Muda";
    } else if (usia >18 && usia <30) {
       
        generasi = "Generasi Remaja";

    } else if(usia > 30){
        generasi = "Generasi Tua";
    } 
    else{
        console.log("Anda Bukan Manusia")
    }
        return biodata.innerHTML = generasi; 
 }

 console.log(nama);
 console.log(usia);
 generateBiodata();