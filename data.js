const nama = "angel";
let yourIQ = 250;

let kepintaran = document.getElementById('nilai');

function generateNilai(){
    let hasil;

    if(yourIQ > 200){
        hasil = "wow, you are so genius, like a sheldon!"
    }
    else if(yourIQ <= 200 && yourIQ >= 100){
        hasil = "oke kamu rata-rata"
    }
    else{
        hasil = "you are like georgie"
    }

    return kepintaran.innerHTML = hasil;
}

generateNilai()

