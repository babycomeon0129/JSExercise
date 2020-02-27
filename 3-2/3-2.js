//若一隻兔子每月生一隻兔子，一個月後小兔子也開始生產。起初只有一隻兔子，一個月後有兩隻兔子，兩個月後有三隻兔子，三個月後有5隻兔子，以此類推
//每個月兔子總數為1.1.2.3.5.8.13.21.34.55.89....費式數列
//公式如下:
//fn = fn-1 +fn-2  if n > 1
//fn = n if n=0,1
//撰寫20個費式數列


let result = [];


for (let i = 0; i < 20; i++) {
    if (i == 0 || i == 1) {
        result.push(1);
    } else {

        result.push(result[i - 1] + result[i - 2]);

    }



}

console.log(result);
