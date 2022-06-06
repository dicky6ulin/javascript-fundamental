class Car {
    constructor(nopol, pemilik) {
        this.nopol = nopol;
        this.pemilik = pemilik;
    }
}

class ParkingLot {
    constructor(capacity) {
        this.capacity = capacity;
        this.remaining = capacity;
        this.cars = [];
    }
}

function enigmaPark(capacity, actions) {

    const parkingLot = new ParkingLot(capacity);

    const park = (car, callback) => {
        setTimeout(() => {
            if (parkingLot.remaining <= 0) {
                callback(`Mohon maaf tempat parkir sudah penuh`)
            } else if (!parkingLot.cars.some((parkedCar) => car.nopol === parkedCar.nopol)) {
                parkingLot.cars.push(car);
                parkingLot.remaining--;
                callback(`Mobil ${car.pemilik} dengan nopol ${car.nopol} berhasil parkir`)
            } else {
                callback(`Mobil ${car.pemilik} dengan nopol ${car.nopol} sudah parkir`)
            }
        }, 3000)
    }

    const leave = (nopol, callback) => {
        setTimeout(() => {
            const car = parkingLot.cars.find((car) => car.nopol === nopol);

            if (car) {
                const parkNumber = parkingLot.cars.findIndex((car) => car.nopol === nopol);
                parkingLot.car = parkingLot.cars.splice(parkNumber, 1);
                parkingLot.remaining++;
                callback(`Mobil ${car.pemilik} dengan nopol ${car.nopol} sudah keluar`);
            } else {
                callback(`Mobil dengan nopol ${nopol} tidak ada`);
            }
        }, 1500)
    }

    const check = (callback) => {
        setTimeout(() => {
            callback(parkingLot);
        }, 500)
    }

    setTimeout(() => {
        actions(park, leave, check);
    }, 5000);
}

enigmaPark(3, (park, leave, check) => {
    check((cek) => {
        console.log(cek);

        let car = new Car("B 001 A", "Dicky");
        park(car, (output) => {
            console.log(output);
            // check((cek) => {
            //     console.log(cek);

                let car2 = new Car("B 002 A", "Satria");
                park(car2, (output) => {
                    console.log(output);
                    // check((cek) => {
                    //     console.log(cek);

                        let car3 = new Car("B 003 A", "Danu");
                        park(car3, (output) => {
                            console.log(output);
                            // check((cek) => {
                            //     console.log(cek);

                                leave("B 001 A", (output) => {
                                    console.log(output);
                                    check((cek) => {
                                        console.log(cek);
                                    })
                                })
                            // })
                        })
                    // })
                })
            // })
        })
    })
})