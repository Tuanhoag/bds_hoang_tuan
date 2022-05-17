//Bai1
var array = [1,6,8,7,6,9]
console.log('array tren co' + array.length + 'phan tu')

console.log('phan tu dau tien:' + array[0] + 'phan tu cuoi cung:' + array[array.length-1])

array.push(5)
console.log('array sau khi them 5')
console.log(array)

array[0] = 10
array[array.length] = 10

//Bai2
var user = {
	ten: 'tung', 
	tuoi: 20
}

console.log(user.ten)
console.log(user.tuoi)

user.ho = 'nguyen'
user.tuoi = 30

//Bai3
var user = {
	ten: 'tung',
	tuoi: 20,
	banBe: ['vy','tung','tuan'],
	diaChi:{
    tinh: 'HCM',
    quan:'Q1'
}
}

console.log(user.banBe)

console.log(user.banBe[banBe.length-1])

console.log(user.diaChi)

console.log('ten toi la:' + user.ten + ',toi' + user.tuoi + 'tuoi' + ',toi o' + user.diaChi.quan + 'tinh' + user.diaChi.tinh)

user.diaChi.duong = 'nguyen tuan'

user.banBe.push('thai')

//Bai4
var age = 20
var name = 'tung'
let greet = ''
console.log('xin chao, toi la' + name + 'toi ' + age + 'tuoi' )
console.log('ten ban la gi?')
//Bai5

