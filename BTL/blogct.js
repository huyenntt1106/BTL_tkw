function kiemTraDangKyblog() {
    var hoTen = document.getElementById('usename').value;
    var email = document.getElementById('mail').value;
    var binhluan = document.getElementById('comment').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (hoTen === '' || email === '' || binhluan === '') {
        alert('Vui lòng điền đủ thông tin đăng ký trước khi gửi.');
        return false;
    } else if (!emailPattern.test(email)) {
        alert('Email không hợp lệ. Vui lòng nhập địa chỉ email đúng.');
        return false;
    } else {
        // Gửi thông tin đăng ký đến server hoặc xử lý theo nhu cầu của bạn
        alert('Thông tin đăng ký đã được gửi thành công!');  
    }
}
document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide-blog');
    
    showSlide(currentSlide);
  
    function showSlide(n) {
      // Ẩn tất cả các slide
      slides.forEach(slide => slide.style.display = 'none');
      // Hiển thị slide hiện tại
      slides[n].style.display = 'block';
    }
  
    function changeSlide(n) {
      currentSlide += n;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    }
  });
  


