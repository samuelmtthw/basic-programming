// * output
console.log("Hello world 1");
console.log("Hello world 2");
console.log("Hello world 3");

// * variabel
// 1. var
// 2. const -> constant (gak bisa diubah)
// 3. let -> bisa diubah

// syarat bikin variabel:
// 1. harus diawali dengan huruf

// kalo di C++, tipe datanya kita tentuin
// contoh: int (angka bilangan bulat), float (bilangan desimal), char (karakter)

// kalo di javascript, tipe datanya gak kita tentuin
// tipe data di javascript:
// 1. number
// 2. string
// 3. boolean

// * variabel konstan
const sisiKonstan = 3;
console.log("Nilai variabel sisiKonstan adalah:", sisiKonstan);

// * reassign variabel let
let sisi = 3;
console.log("sisi lama: ", sisi);
sisi = 6;
console.log("sisi baru: ", sisi);

// * operator
// tambah +
// kurang -
// kali *
// bagi /
// modulo / sisa hasil bagi %

// * operasi tambah pada number
const panjang = 4;
const lebar = 3;

const kelilingTambah = panjang + panjang + lebar + lebar;
console.log("kelilingTambah:", kelilingTambah);

const kelilingKali = panjang * 2 + lebar * 2;
console.log("kelilingKali:", kelilingKali);

// * operasi tambah pada string
const firstName = "Samantha";
const lastName = "Michelle";
const fullName = firstName + " " + lastName;

console.log("fullName:", firstName + " " + lastName);
console.log("fullName:", fullName);

// * operasi modulo
const angka = 5;
const pembagi = 3;
const hasil = angka / pembagi;
const sisaHasil = angka % pembagi;
console.log("hasil", hasil);
console.log("sisaHasil", sisaHasil);
