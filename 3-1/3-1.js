//三位數的整數中，153可以滿足1^3+5^3+3^3=153，這樣的數字稱之阿姆斯壯數，試著用程式找出所有三位數的阿姆斯壯數

let result = [];


for (let i = 100; i <= 999; i++) {

    let arr = i.toString().split("");

    if ((Math.pow(arr[0], 3) + Math.pow(arr[1], 3) + Math.pow(arr[2], 3)) === i) {
        result.push(i);
    }

}


console.log(result);
