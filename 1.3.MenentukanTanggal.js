let tanggal = 29;
let bulan = 2;
let tahun = 2021;

switch (bulan) {
    case 1:
        bulan = "Januari";
        break;
    case 2:
        bulan = "Februari";
        break;
    case 3:
        bulan = "Maret";
        break;
    case 4:
        bulan = "April";
        break;
    case 5:
        bulan = "Mei";
        break;
    case 6:
        bulan = "Juni";
        break;
    case 7:
        bulan = "Juli";
        break;
    case 8:
        bulan = "Agustus";
        break;
    case 9:
        bulan = "September";
        break;
    case 10:
        bulan = "Oktober";
        break;
    case 11:
        bulan = "November";
        break;
    case 12:
        bulan = "Desember";
        break;
    default:
        bulan = "Bulan Tidak Ada";
}

if (bulan == "Februari") {
    if ((tahun % 4 == 0) && (tahun % 100 != 0) || (tahun % 400 == 0)) {
        if (tanggal >= 30) {
            console.log((`${bulan} tahun ${tahun} hanya ada tanggal 1 sampai 29`));
        } else {
            console.log(`${tanggal} ${bulan} ${tahun}`);
        } 
    } else {
        if (tanggal > 28) {
            console.log((`${bulan} tahun ${tahun} hanya ada tanggal 1 sampai 28`));
        } else if (tanggal <= 29 ) {
            console.log(`Tahun kabisat tidak terjadi pada ${tahun}`);
        } else {
            console.log(`${tanggal} ${bulan} ${tahun}`);
        }
    } 
} else if (bulan == "Januari" || bulan == "Maret" || bulan == "Mei" || bulan == "Juli" || bulan == "Agustus" || bulan == "Oktober" || bulan == "Desember") {
    if (tanggal >= 32) {
        console.log(`${bulan} hanya ada tanggal 1 sampai 31`);
    } else {
        console.log(`${tanggal} ${bulan} ${tahun}`);
    }
} else if (bulan == "April" || bulan == "Juni" || bulan == "September" || bulan == "November") {
    if (tanggal >= 31) {
        console.log(`${bulan} hanya ada tanggal 1 sampai 30`);
    } else {
        console.log(`${tanggal} ${bulan} ${tahun}`);
    }
}