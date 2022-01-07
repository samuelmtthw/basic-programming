// 2 jenis perintah conditional: if, switch

// * if
// if(syarat){
//   statement jika benar
// } else {
//   statement jika salah
// }

// * switch case
// switch (key) {
//   case valueA:
//   case valueB:
// }

// * comparator -> untuk membandingkan
// * <, >, <=, >=, ==, ===
const angka = 1;

if (angka === 2) {
  console.log("OKE");
  console.log("angka =", angka);
} else {
  console.log("GAK OKE");
  console.log("angka =", angka);
}

const nama = "samuel";
if (nama === "Samuel") {
  console.log("namanya samuel");
} else {
  console.log("namanya bukan samuel");
}

// * Hitung luas dari bentuk yang dipilih
const radius = 7;
const pi = 22 / 7;

const sisi = 7;

const panjang = 7;
const lebar = 10;

const bentuk = "Persei"; // Lingkaran, Persegi, Persegi Panjang

// ? Tampilkan luas dari masing2 bentuk dengan if
if (bentuk === "Lingkaran") {
  console.log("Lingkaran =", pi * radius * radius);
} else if (bentuk === "Persegi") {
  console.log("Persegi =", sisi * sisi);
} else if (bentuk === "Persegi Panjang") {
  console.log("Persegi Panjang =", panjang * lebar);
} else {
  console.log("Bentuk tidak sesuai dengan pilihan yang ada, tolong perbaiki");
}

// ? Tampilkan luas dari masing2 bentuk dengan switch case
switch (bentuk) {
  case "Lingkaran": {
    console.log("Lingkaran =", pi * radius * radius);
    break;
  }

  case "Persegi": {
    console.log("Persegi =", sisi * sisi);
    break;
  }

  case "Persegi Panjang": {
    console.log("Persegi Panjang =", panjang * lebar);
    break;
  }

  default: {
    console.log("Bentuk tidak sesuai dengan pilihan yang ada, tolong perbaiki");
    break;
  }
}

// * tentukan ganjil dan genap
// ? dengan if
const angka = 999999;

if (angka % 2 === 1) {
  console.log("ganjil");
} else {
  console.log("genap");
}
