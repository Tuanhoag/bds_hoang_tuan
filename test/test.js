var data = [3, 2, 4, 1, 8, 7, 1, 10, 1, 2];
let dem = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] == 1) {
    console.log("vi tri so 1 dau tien:" + i);
    break;
  }
}

for (let i = data.length - 1; i >= 0; i--) {
  if (data[i] == 1) {
    console.log("vi tri so 1 cuoi cung:" + i);
    break;
  }
}
