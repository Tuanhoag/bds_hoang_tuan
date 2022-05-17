//Bai3
console.log("in ra mang arr1 cac phan tu le");
const data = [3, 2, 4, "5", 1, 8, 7, "9"];
let arr1 = [];
let arr2 = [];

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 == 1) {
    arr1.push(data[i]);
  }
}
console.log(arr1);

console.log("in ra mang arr2 dao nguoc cua data");
for (let i = data.length - 1; i >= 0; i--) {
  arr2.push(data[i]);
}

console.log(arr2);

//Bai 4
var array4 = [1, 9, 3, 7, 6, 4, 5, 2];
let max = array4[0];
for (let i = 0; i < array4.length; i++) {
  if (array4[i] > max) {
    max = array4[i];
  }
}
console.log(max);

let min = 0;
for (let i = 0; i < array4.length; i++) {
  if (array4[i] % 2 == 0) min = array4[i];
  break;
}
for (let i = 0; i < array4.length; i++) {
  if (array4[i] < min && array4[i] % 2 == 0) {
    min = array4[i];
  }
}
console.log(min);

//bai5
var sanPham = [
  {
    ten: "áo somi",
    soLuong: 100,
  },
  {
    ten: "áo khoác",
    soLuong: 50,
  },
  {
    ten: "áo phông",
    soLuong: 200,
  },
];

console.log("tong so luong san pham:");
for (let i = 0; i < sanPham.length; i++) {
  tong += sanPham[i].soLuong;
}
console.log(tong);

//Bai6

console.log("sap xep theo chieu tang dan");
var data6 = [3, 2, 4, 1, 8, 7];
let i = 0;
while (data6[i] > data6[i + 1]) {
  i++;
  temp = data6[i];
  data6[i] = data6[i + 1];
  data6[i + 1] = temp;
}

console.log("sap xep theo chieu giam dan");
let j = 0;
while (data6[j] < data6[j + 1]) {
  i++;
  temp = data6[j];
  data6[j] = data6[j + 1];
  data6[j + 1] = temp;
}