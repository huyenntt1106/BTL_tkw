let showPassword = document.getElementById('showPassword');
let inputpassword =document.getElementById('password');
showPassword.onclick = function(){
    if(inputpassword.type == 'password'){
        inputpassword.type = 'text';
    }else{
        inputpassword.type = 'password';
    }
}

//js cho đăng kí

function register() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var errorMessage = document.getElementById("errorMessage");

     var errors = [];

        if(username.value.trim() === ""){
            errors.push("Hãy nhập tên")
        }
        if(email.value.trim() === ""){
            errors.push("Hãy nhập email")
        }else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email.value)) {
                errors.push("Email không hợp lệ");
            }
        }
        if(password.value.length < 4){
            errors.push("Nhập Password có ít nhất 4 kí tự ")
        }
        if(errors.length > 0){
            
            errorMessage.toggleAttribute('hidden');
            errorMessage.innerHTML = errors.join(', ');
        }else {
            alert('Đăng kí tài khoản thành công');
            window.location.href = 'dangnhap.html';
        }
    }


/*js cho đăng nhập*/

function kiemTradangnhap() {
    var email = document.getElementById('email').value;
    var matkhau = document.getElementById('password').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || matkhau === '') {
        alert('Vui lòng điền đủ thông tin đăng ký trước khi gửi.');
        return false;
    } else if (!emailPattern.test(email)) {
        alert('Email không hợp lệ. Vui lòng nhập địa chỉ email đúng.');
        return false;
    } else {
        // Gửi thông tin đăng ký đến server hoặc xử lý theo nhu cầu của bạn
        alert('Thông tin đăng nhập đã chính xác');
        window.location.href = 'home.html';
    }
}
