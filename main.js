//BÁI 1: IN SỐ NGUYÊN DƯƠNG LẺ/CHẴN NHỎ HƠN 100

// LỆNH WHILE
var i=0;
var soChan="";
var soLe="";
while(i<100){
    if (i%2==0){
    soChan=soChan+" "+ i;  
    }else{
    soLe=soLe+" "+i;
    }
    i++;
}
console.log("Số chẵn là: "+soChan);
console.log("Số lẻ là: "+soLe);

//LỆNH FOR
var j=0;
var soChan="";
var soLe="";
for(var j=0;j<100;j++){
    if (j%2==0){
        soChan=soChan+" "+ j;  
    }else{
        soLe=soLe+" "+j;
}
}
console.log("Số chẵn là: "+soChan);
console.log("Số lẻ là: "+soLe);


//BÁI 2: SỐ CHIA HẾT CHO 3 TỪ 0-1000
// LỆNH WHILE
var i=0;
var count=0;
while(i<1000){
    if(i%3==0)
    count++;
    i++;
}
console.log(count);

//LỆNH FOR
var count=0;
for(var i=0;i<1000;i++){
        if(i%3==0)
        count++;
    }
    console.log(count);

/**
 * Bài 3. Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 10000
 */

 for (var i = 1; i < 10000; i++) {
    if (i * (i + 1) / 2 > 10000) {
        console.log("So do la: " + i);
        break;
    }
}


/**
 * Bài 4. Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2 + x^3 +
... + x^n
 */

function total() {
    var x = parseFloat(document.getElementById("inputNumX4").value);
    var n = parseFloat(document.getElementById("inputNumN4").value);
    var sum4 = 0;
    for (i = 1; i <= n; i++) {
        sum4 = sum4 + Math.pow(x, i);
        console.log("Tổng bài 4 là: " + sum4);
    }
    document.getElementById("txtResult4").innerHTML = sum4;
}
document.getElementById("btnLoop4").onclick = total;


/**
 * Bài 5. Nhập vào n. Tính giai thừa 1*2*...n
 */
function factorial() {
    var n = parseFloat(document.getElementById("inputNumN5").value);
    var fac = 1;
    for (i = 1; i <= n; i++) {
        fac = fac * i;
    }
    console.log("Giai thừa 5 là: " + fac);
    document.getElementById("txtResult5").innerHTML = fac;
}
document.getElementById("btnLoop5").onclick = factorial;

/**
 * Bài 6. Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div nào
vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.
 */

document.getElementById("btnLoop6").onclick = addElement;

function addElement() {
    content = "";
    var menu = document.querySelector("#bai6");

    for (var i = 1; i <= 10; i++) {
        // create a new div element
        var newDiv = document.createElement("div");
        //newDiv.id = ("div" +i);

        if (i%2==0) {
            newDiv.style.backgroundColor = "red";
            newDiv.style.color = "white";
        }else{
            newDiv.style.backgroundColor = "blue";
            newDiv.style.color = "white";
        }

        // and give it some content
        // textContent = innerHTML
        newDiv.innerHTML = "Hi div" +i;

        menu.appendChild(newDiv);
    }
}



/**
 * Bài 7. Viết chương trình có một ô input, một button. Khi click vào button thì in ra
các số nguyên tố từ 1 tới giá trị của ô input
*/
function check(x) {
    // check7 = 1 la so nguyen so
    var check7 = 1;
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            check7 = 0;
            break;
        }
    }

    return check7;
}

function prime() {
    var n = parseFloat(document.getElementById("inputNumN7").value);
    console.log("So n la: " + n);
    var content = "";
    for (var i = 2; i <= n; i++) {
        if (check(i)) {
            content += i + " ";
        }
    }
    console.log("Danh sách số nguyên tố là: " + content);
    document.getElementById("txtResult7").innerHTML = content;
}

document.getElementById("btnLoop7").onclick = prime;
