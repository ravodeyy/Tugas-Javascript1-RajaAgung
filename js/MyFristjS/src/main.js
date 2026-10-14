//Javascript --> Programming Language
/*
programing Language
1. input and output
2. variable and Data Type
3. condition (if, else)
4. looping (perulanggan)
5. function
*/

//output in JavaScipt 
//1. console.log()
console.log("Hello World")
console.log("Welcome In SMA ABBS Surakarta")
//2. using alert()
//alert("Welcome Ravodeyy");
//3. using innerHTML
document.getElementById("name").innerHTML="Welcome Ravo"
//using document.write();

//variable --> to store data
//variable = let, var, const

//using let
let nama = "ravo"; //nilai di variable bisa di ganti
nama = "ravo";
console.log(nama);
const address ="Sragen"; //nilai di variable tidak bisa di ganti
const address1 ="Solo";
console.log(address);

//operator
/*1. operator aritmatika
- penjumlahan (+)
- pengurangan (-)
- perkalian (*)
- pembagian (/)
- perpangkatan (**)
- modulus (%)
*/

let a = 50;
let b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(a%b);
console.log(a, "+", b, "=", a+b);

let c = 32;
let d = 22;
console.log(c-d);

let e = 21;
let f = 44;
console.log(e*f);

let g = 100;
let h = 32;
console.log(g/h);

let i = 23;
let j = 56;
console.log(i**j);

let k = 300;
let l = 123;
console.log(k%l);

//rumus luas persegi panjang 
// luas = panjang * lebar
let panjang = 100;
let lebar = 70;
let luas = panjang * lebar;
console.log("panjang = ", panjang);
console.log("lebar = ", lebar);
console.log("Luas Persegi panjang adalah ", luas, "cm");



//Menghitung BMI
//BMI = BB/(TB**2)--> jika tinggi badan dalam Meter
//BMI = BB/(TB**2)*10000 --> jika tinggi badan cm

let bb = 80;
let tb = 189;
let bmi = bb/(tb**2)*10000;
console.log("Tinggi Badan = ", tb, "cm");
console.log("Berat Badan = ", bb, "kg");
console.log("BMI = ", bmi);

//Luas lingkaran

let r = 7;
let phi = 3.14;
let D = phi * (r ** 2);
console.log("Jari-jari = ", r, "cm");
console.log("Luas Lingkaran = ", D);


//comparison operator
/*
1. equal (==)
2. not equal (!=)
3. greater then (>)
4. greater then or equal (>=)
5. less then (<)
6. less then or equal (<=)
*/

let x = 5;
console.log(x == 5); //true
console.log(x >= 10); //false 
console.log(x > 5); //false
console.log(x <= 5); //true
console.log(x != 5); //false
console.log(x < 5); //false
console.log(x == 5);

//logical operator 
/*
1. AND (&&)
2. NOT (||)
3. NOT (!)
*/


//condition (if else)
/* 1 condition 
if (condition){
    action
}
*/

let y = 5;
if (y == 5){
    console.log("Good Moarning");
}

/*2 conditions 
if (condition){
    action;
}
else{
    action 2
}
 */

let m = 10;
if (m >= 10){
    console.log("Good Moarning");
}
else{
    console.log("Good Bye");
}

//jika hari ini hujan, maka membawa payung 
//jika hari ini tidak hujan, maka tidak membawa payung

let hariIni = false;
if (hariIni == true) {
  console.log("Membawa payung");
} else {
  console.log("Tidak membawa payung");
}

//jika nilai >75, maka lulus 
//jika nilai <75 maka tidak lulus

let nilai = 80;
if (nilai > 75) {
  console.log("Lulus");
} else {
  console.log("Tidak lulus");
}