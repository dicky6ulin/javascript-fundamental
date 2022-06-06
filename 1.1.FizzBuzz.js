function FizzBuzz() {

    let angka = 1;

    for (i = angka; i <= 20; i++) {
        if (i % 10 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Fizz");
        } else if (i % 2 === 0) {
            console.log("Buzz");
        } else
            console.log(i);
    }
}

FizzBuzz()