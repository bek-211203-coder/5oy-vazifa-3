// masala 1 
// Sizga n soni beriladi. Uning eng kichik juft karralisini toping. Kirish faylida 1000 dan oshmaydigan natural son beriladi.
// let n =+prompt('son kiriting');
// function  func(arg){
//     if (arg % 2 === 0){
//         return arg
//     } else{
//         return arg * 2
//     }
// }
// console.log(func(n));

// masala 2
// Sizga to'g'ri to'rtburchakning tomonlari a va b beriladi, siz uning yuzasi va perametrini topib quyidagi shartga tekshirishingiz kerak bo'ladi.
// Agar yuzasi perimetridan katta bo'lsa yuzasini aks holda peremetrini chiqaring
// let A = 12 ;
// let B = 8;
// function  func(a,b){
//     let yuzasi = a * b;
//     let perametri = 2 * (a + b);
//     if(yuzasi > perametri){
//         return yuzasi
//     }else {
//         return perametri
//     }
// }
// console.log(func(A,B));

// masala 3
// RoboBoyning poyezdi soat t da ketishi kerak edi, ammo u T soatga kechikdi. Uni poyezdi nechchada ketishini topuvchi dastur tuzing.

// let t = 5; // ketish vohti 
// let T = 3; // kechikish vohti 
// function func (t , T ){
//     let res = t + T;  // kechiktirilgan poyezdning ketish vohti
//     return res;
// }
// console.log(func(t,T));


// masala 4 
// tushunmadi  masala shartiga 

// masala 5
// function isInteresting(N) {
//     let kub = 0;
//     for (let i = 1; i <= N; i++) {
//         kub += i ** 3;
//     }
//     let bolSoni = [];
//     for (let j = 1; j <= kub; j++) {
//         if (kub % j === 0) {
//             bolSoni.push(j);
//         }
//     }
//     if (bolSoni.length % 2 === 1) {
//         return 'Qiziqarli';
//     } else {
//         return 'Qiziqarli emas';
//     }
// }
// let N = 5;
// console.log(isInteresting(N));


// masala 6
// // Tizimda jarima hisoblash
// function func(arg1, arg2) {
//     const variable = 5;
//     let sum1 = arg1 * variable;
//     sum1 += arg2;
//     return sum1;
// }
// let jarimaBall = 7;
// let togriJavob = 36;
// let res = func(jarimaBall, togriJavob);
// console.log(res);


// masala 7 
// tenglama
// function func(arg){
//     let res = []
//     for (let a = 1; a <= n; a++ ){
//         for (let b = 1; b<= n; b++){
//             for(let c = 1; c <=n; c++){
//                 if(a*b*c == n){
//                     res.push({a, b, c});
//                 }
//             }
//         }
//     }
//     if(res.length > 0){
//         return res
//     } else{
//         return 'Qiymatlar aniqlanmadi'
//     }
// }
// let n = 78
// console.log(func(n));

// masala 8
// harorat
// function func(arg){
//     let Kelvin = arg +273.15;
//     let Fahrenheit = arg * 1.80 +32.00;
//     return [{Kelvin, Fahrenheit}]
// }
// let Celsius = 25;
// console.log(func(Celsius));
////////////////////
// Kelvin=Celsius+273.15
// Fahrenheit=Celsius×1.80+32.00

// masala 9
// g'aroyib yig'indi
// function func(n1, n2){
//     if(n1 < n2){
//         let res = 0
//         for(let i = n1; i <= n2; i++ ){
//             if(i % 3==0 && i % 7!==0){
//                 res += i;
//             }
//         }
//         if(res   > 0){
//             return res
//         } else {
//             return 'qiymatlar aniqlanmadi '
//         }
//     }else{
//         return 'siz kiritfgan son shartga togri kelmadi';
//     }
// }
// let n1 = 2;
// let n2 = 55;
// console.log(func(n1, n2));

// masala 10
// a#b
// function func(n) {
//     function hash(a, b) {
//         return (a + b) / (a * b + 4);
//     }

//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//         result = hash(result, i);
//     }

//     return result;
// }

// let n = 3; 
// console.log(func(n));



// masala 11
// qiziqarli topshiriq 
