function cekStock(stockAwal, masuk, keluar) {
    let hasil  = stockAwal + masuk - keluar;

    if (hasil < 0) {
        return 0;
      }

       return hasil;
}

let hasil = cekStock(100, 50, 30);

console.log(hasil);
