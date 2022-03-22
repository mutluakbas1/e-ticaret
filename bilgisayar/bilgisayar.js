var bilgisayar = {

    yukseklik: "25 cm",
    agirlik: "2000 gr.",
    isletimSistemi: "Windows10",
};


var apple = {
    fiyat: 20000,
    aciklama: "8 adet performans çekirdeği",
    imgsrc: "bilgisayar/v2-78132-3_large.jpg",
         
};

var hp = {
    fiyat: 15000,
    aciklama: "Intel® Core™ i5-6200U ile Intel® HD Grafik Kartı 520 (2,3 GHz, 2,8 GHz'e kadar, 3 MB önbellek, 2 çekirdekli)",
    imgsrc: "bilgisayar/113099-2_large.jpg",


};

var acer = {
    fiyat: 10000,
    aciklama: "Intel® Core™ i7-1165G7 işlemci Dört çekirdek 2,80 GHz",
    imgsrc:  "bilgisayar/acer-aspire-5-nxat5ey001-intel-core-i5-1135g7-5_g9hlz1_500.jpg",


}

function yazdir() {
    console.log("bilgisayar apple: " + bilgisayar.apple),
    console.log("bilgisayar hp: " + bilgisayar.hp),
    console.log("bilgisayar acer: " + bilgisayar.acer)

}

yazdir();




function applesatinal() {


    var element = document.getElementById('bilgisayardegisimi');
    element.src = apple.imgsrc;

    var aciklama = document.getElementById('mesaj1');
    aciklama.innerHTML = apple.aciklama;
    
    var fiyat = document.getElementById('fiyat1');
    fiyat.innerHTML = apple.fiyat;
}



function hpsatinal() {


    var element = document.getElementById('bilgisayardegisimi');
    element.src = hp.imgsrc;

    var aciklama = document.getElementById('mesaj1');
    aciklama.innerHTML = hp.aciklama;
    
    var fiyat = document.getElementById('fiyat1');
    fiyat.innerHTML = hp.fiyat;
}



function acersatinal() {


    var element = document.getElementById('bilgisayardegisimi');
    element.src = acer.imgsrc;

    var aciklama = document.getElementById('mesaj1');
    aciklama.innerHTML = acer.aciklama;
    
    var fiyat = document.getElementById('fiyat1');
    fiyat.innerHTML = acer.fiyat;
}