// bài 1
/**
 * Mô hình 3 khối
 * - Đầu vào:
 *  + Nhập vào 3 số
 * - Xử lí
 *  + Sử dụng 1 biết tạm để đổi vị trí cho các biến
 * - Đầu ra:
 *  + Sắp xếp theo thứ tự tăng dần
 */
document.getElementById("xuat").onclick = function(){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var temp;

    if(number1 > number2){
        temp = number1;
        number1 = number2;
        number2 = temp;
    }else if(number1 > number3){
        temp = number1;
        number1 = number3;
        number3 = temp;
    }else if(number2 > number3){
        temp = number2;
        number2 = number3;
        number3 = temp;
    }

    //show màn hình
    document.getElementById("sapxep").innerHTML = "Sắp xếp: "+number1+" "+number2+" "+number3;
};
//bài 2
/**
 * Mô hình 3 khối
 * -Đầu vào:
 *  + Chọn người xử dụng chương trình
 * - Xử lí:
 *  + lấy value của người dùng đã chọn
 * - Đầu ra:
 *  + Trả về câu chào 
 */
document.getElementById("chao").onclick = function(){
    var nguoisd = document.getElementById("nguoisudung").value;

    //show màn hình
    document.getElementById("chaohoi").innerHTML = "Hello: "+nguoisd;
};
//bài 3
/**
 * Mô hình 3 khối
 * - Đầu vào:
 *  + Nhập vào 3 số tự nhiên
 * - Xử lí:
 *  + Kiểm tra số chẵn và số lẽ
 * - Đầu ra:
 *  + Đếm có bao nhiêu số chẵn và lẽ
 */
document.getElementById("xuatsocl").onclick = function(){
    var so1 = document.getElementById("so1").value;
    var so2 = document.getElementById("so2").value;
    var so3 = document.getElementById("so3").value;
    var sochan = 0;
    var sole =0;
    if(so1%2==0){
        sochan++;
    }else{
        sole++;
    }

    if(so2%2==0){
        sochan++;
    }else{
        sole++;
    }
    
    if(so3%2==0){
        sochan++;
    }else{
        sole++;
    }
    //show
    document.getElementById("dem").innerHTML = "Có "+sochan+ " số chẵn" + " Có "+sole+ " số lẻ";
};
/**
 * Mô hình 3 khối
 * -Đầu vào:
 *  + Nhập vào 3 cạnh của tam giác
 * - Xử lí
 *  + 2 cạnh bằng nhau -> tam giác cân
 *  + 3 cạnh bằng nhau -> tam giác đều
 *  + (a*a) + (b*b) = (c*c).... -> tam giác vuông
 */
document.getElementById("tinh").onclick = function(){
    var a = document.getElementById("canh1").value;
    var b = document.getElementById("canh2").value;
    var c = document.getElementById("canh3").value;

    if((a == b) && (b == c) && (c == a)){
        document.getElementById("tamgiac").innerHTML = "Đây là tam giác đều";
    }else if((a == b) || (b == c) || (c == a)){
        document.getElementById("tamgiac").innerHTML = "Đây là tam giác cân";
    }else if((a * a == b * b + c * c) || (b * b == a * a + c * c) || (c * c == a * a + b * b)){
        document.getElementById("tamgiac").innerHTML = "Đây là tam giác vuông";
    }else{
        document.getElementById("tamgiac").innerHTML = "Đây là tam giác thường";
    }
}
