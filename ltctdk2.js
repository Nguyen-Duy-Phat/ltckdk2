//B1 Chuyển đổi độ C sang độ F
function convert() {
    let c = document.getElementById('c').value;
    let result =  parseFloat(((c * 9)/5) + 32);
    alert(c + ' độ C sẽ = : ' + result + ' độ F');
}
// B2 Chuyển từ Mét sang Feet
let cv = document.getElementById('convert1');
cv.addEventListener('click',btconvert1);
function btconvert1() {
    let a = parseFloat(document.getElementById('m').value);
    let result1 = a * 3.2808;
    alert(result1 + ' Feet');
}
// B3 Tính diện tích hình vuông khi biết cạnh a
let tt = document.getElementById('convert2');
tt.addEventListener('click',btconvert2);
function btconvert2() {
    let v = parseFloat(document.getElementById('hv').value);
    let result2 = v ** 2;
    alert('Diện tích hình vuông = ' + result2);
}
// B4 Tính diện tích hình chữ nhật khi biết 2 cạnh kề a,b
function convert3() {
    let o = document.getElementById('a').value;
    let p = document.getElementById('b').value;
    let dthcn = o*p;
    alert('Diện tích hình chữ nhật là : '+ dthcn);
}
//Bài 5 Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
function convert4() {
    let a = document.getElementById('q').value;
    let b = document.getElementById('w').value;
    let dttgv = parseFloat((0.5 * a) * b);
    alert('Diện tích tam giác vuông là là : '+ dttgv);
}
//Bài 6 Giải phương trình bậc 1.
function myFunction1() {
    let e = parseFloat(document.getElementById('e').value);
    if(e===0) {
        confirm('Giá trị của a phải khác 0.Are you understand ?');
    }
}
function convert5() {
    let e = parseInt(document.getElementById('e').value);
    let r = parseInt(document.getElementById('r').value);
    if(e===0) {
        if(r===0) {
            document.getElementById('resu').innerHTML = 'PT có vô số nghiệm';
        }else {
            document.getElementById('resu').innerHTML = 'PT có vô nghiệm';
        }
    }else {
        let t = -e/r;
        document.getElementById('resu').innerHTML = 'PT có nghiệm duy nhất x = -b/a : ' + t;
    }
}
//Bài 7 Giải phương trình bậc 2.
function myFunction() {
    let y = parseFloat(document.getElementById('y').value);
    if(y===0) {
        confirm('Giá trị của a phải khác 0.Are you understand ?');
    }
}

let qq = document.getElementById('convert6');
qq.addEventListener('click',btgpt);
function btgpt(){
    let y = parseFloat(document.getElementById('y').value);//a
    let u = parseFloat(document.getElementById('u').value);//b
    let i = parseFloat(document.getElementById('i').value);//c
    let delta =parseFloat(u**2 - 4*y*i);
    if(y+u+i === 0) {
        let s = i/y;
        alert('x1 = 1 ' + 'x2 = ' + s);
        return;
    }
    if(y-u+i === 0) {
        let s1 = -i/y;
        alert('x1 = -1 ' + 'x2 = ' + s1);
        return;
    }
     if(delta < 0) {
        document.getElementById('resul').innerHTML = 'Vô sinh';
        }else if(delta==0) {
         let f = parseFloat(-u/(2*y));
            document.getElementById('resul').innerHTML = 'Con một x1=x2= :' + f ;
            }else if(delta > 0) {
                let x1 =( -u + Math.sqrt(delta))/(2*y);
                let x2 =( -u - Math.sqrt(delta))/(2*y);
                 document.getElementById('resul').innerHTML = 'Sinh đôi x1 = ' + x1 + ', x2 = ' + x2 ;
               }
}

//Bài 8 Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
    //Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.
function age2() {
    let g = document.getElementById('age1').value;
    if(g <= 120 && g > 0) {
        alert(g +' là tuổi của con người')
    }else {
        alert(g + ' không phải là tuổi của con người')
    }
}
//Bài 9 Kiểm tra xem 3 số thực (a,b,c) nhập vào có phải là cạnh của một tam giác.
        //Điều kiện để a,b,c là cạnh của một tam giác là:
        //a,b,c > 0
        //a + b > c
        //b + c > a
        //a + c > b
function but12() {
    let a = +document.getElementById('h').value;
    console.log(typeof a);
    let b = +document.getElementById('j').value;
    let c = +document.getElementById('k').value;
    let l = a + b;
    console.log(l);
    let l1 = b + c;
    let l2 = a + c;
    if(a > 0 && b > 0 && c > 0) {
        if(l > c) {
            if(l1 > a) {
                if(l2 > b) {
                    document.getElementById('re12').innerHTML = 'a,b,c là cạnh của 1 tam giác';
                }else{
                    document.getElementById('re12').innerHTML = 'a,b,c không là cạnh của 1 tam giác';
                }
            }
        }
    }
}

//Bài 10 Viết chương trình tính giá điện
    let b = 0;
function btkw() {
    let a = parseFloat(document.getElementById('kwOld').value);
    let used = a-b;
    console.log(used);
    let total = 0;
    const electric = 1000;
    if(used > 200) {
        total = (((used - 200) * 900) + (100 * 700) + (50 * 480) + (50 * 230) + electric);
        alert('Số tiền phải trả là : ' + total);
    }else if(used > 100 && used <= 200) {
        total = (((used - 100) * 700) + (50 * 480) + (50 * 230) + electric);
        alert('Số tiền phải trả là : ' + total); 
    }else if(used >50 && used <=100) {
        total = ((used - 50) * 480) + (50 * 230) + electric;
        alert('Số tiền phải trả là : ' + total);  
    }else {
        total = (used * 230) +electric;
        alert('Số tiền phải trả là : ' + total);
    }
    b=a;
    
}

//Bài 11 Viết chương trình tính thuế thu nhập cá nhân

let tt1 = document.getElementById('tax');
tt1.addEventListener('click',bttax);
function bttax() {
    let a = parseInt(document.getElementById('salary').value);
    if(a > 84000000) {
        let taxMoney = (a*0.35);
        let salaryAfterTax = (a - taxMoney);
        document.getElementById('result').innerHTML = "Tiền thuế bạn phải đóng là : " + taxMoney
         + ' VND' + ' Số tiền bạn nhận đc sau thuế là : ' + salaryAfterTax + 'VND';
    }else if(a > 44000000 && a <= 84000000) {
        let taxMoney = (a*0.3);
        let salaryAfterTax = (a - taxMoney);
        document.getElementById('result').innerHTML = "Tiền thuế bạn phải đóng là : " + taxMoney
         + ' VND' + ' Số tiền bạn nhận đc sau thuế là : ' + salaryAfterTax + 'VND';
    }else if(a > 24000000 && a <= 44000000) {
        let taxMoney = (a*0.25);
        let salaryAfterTax = (a - taxMoney);
        document.getElementById('result').innerHTML = "Tiền thuế bạn phải đóng là : " + taxMoney
         + ' VND' + ' Số tiền bạn nhận đc sau thuế là : ' + salaryAfterTax + 'VND';
    }else if(a > 14000000 && a <=24000000) {
        let taxMoney = (a*0.2);
        let salaryAfterTax = (a - taxMoney);
        document.getElementById('result').innerHTML = "Tiền thuế bạn phải đóng là : " + taxMoney
         + ' VND' + ' Số tiền bạn nhận đc sau thuế là : ' + salaryAfterTax + 'VND';
    }else if(a > 9000000 && a <= 14000000) {
        let taxMoney = (a*0.15);
        let salaryAfterTax = (a - taxMoney);
        document.getElementById('result').innerHTML = "Tiền thuế bạn phải đóng là : " + taxMoney
         + ' VND' + ' Số tiền bạn nhận đc sau thuế là : ' + salaryAfterTax + 'VND';
    }else if(a > 6000000 && a <= 9000000) {
        let taxMoney = (a*0.1);
        let salaryAfterTax = (a - taxMoney);
        document.getElementById('result').innerHTML = "Tiền thuế bạn phải đóng là : " + taxMoney
         + ' VND' + ' Số tiền bạn nhận đc sau thuế là : ' + salaryAfterTax + 'VND';
    }else if(a > 4000000 && a < 6000000) {
        let taxMoney = (a*0.05);
        let salaryAfterTax = (a - taxMoney);
        document.getElementById('result').innerHTML = "Tiền thuế bạn phải đóng là : " + taxMoney
         + ' VND' + ' Số tiền bạn nhận đc sau thuế là : ' + salaryAfterTax + 'VND';
    }else {
        alert('Bạn được miễn thuế');
    }
}

//Bài 12 Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con) khi biết số tiền ban đầu,
        //số tháng cho vay và lãi xuất hàng tháng.

let aq = document.getElementById('result5');
aq.addEventListener('click',btkt);
function btkt() {
    let interestRate = parseFloat((document.getElementById('interestRate').value) / 100);
    let money = parseInt(document.getElementById('money').value);
    let month = parseInt(document.getElementById('month').value);
    // Cách 1
    /*
    let newMoney =  money * Math.pow((1 + interestRate),month);
    newMoney = newMoney.toFixed(3);
    alert('Total' + newMoney);
    */
   for(i=1;i<=month;) {
       let newMoney = money + ((1 * interestRate)**month);
       i++;
       console.log(newMoney);
   }
}
