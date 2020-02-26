//三位數的整數中，153可以滿足1^3+5^3+3^3=153，這樣的數字稱之阿姆斯壯數，試著用程式找出所有三位數的阿姆斯壯數

let arr = [];
let result = [];


for (let i = 100; i <= 999; i++) {

    arr[0] = Math.floor(i / 100);
    arr[1] = Math.floor((i - Math.floor(i / 100) * 100) / 10);
    arr[2] = i % 10;

    if ((Math.pow(arr[0], 3) + Math.pow(arr[1], 3) + Math.pow(arr[2], 3)) === i) {
        result.push(i);
    }

}

//let i = 369;


console.log(result);
