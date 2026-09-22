function hitungStock(stockAwal, masuk, keluar) {
    return stockAwal + masuk - keluar;
}

function statusStock(stock) {
    if (stock === 0) {
        return "KOSONG";
    } else if (stock <= 9) {
        return "HAMPIR HABIS";
    } else if (stock <= 50) {
        return "AMAN";
    } else {
        return "STOCK BANYAK";
    }
}

let stockAkhir = hitungStock(100, 50, 30);

console.log(statusStock(stockAkhir));
