function tagihanRestoran(bills) {

    totalPrice = 0;
    tips = 0;
    grandTotal = 0;

    bills.forEach(restaurant => {
        totalPrice = totalPrice + restaurant;

        if (restaurant < 250000) {
            tips = tips + restaurant*0.20;
        } else if (restaurant >= 250000 && restaurant <= 500000) {
            tips = tips + restaurant*0.15;
        } else {
            tips = tips + restaurant*0.10;
        }
    });

    grandTotal = totalPrice + tips;
    console.log(`Total Tagihan : ${totalPrice}`);
    console.log(`Total Tips : ${tips}`);
    console.log(`Total tagihan dan tips : ${grandTotal}`);
}

let restaurant = [250000,710000,125000]
tagihanRestoran(restaurant)