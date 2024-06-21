
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử cần thiết
    const addToCartBtn = document.querySelector('.add-to-cart');
    const favoriteBtn = document.querySelector('.buy-now');
    const productName = 'Trà Hoa Đậu Biếc & Cỏ Ngọt'; 

    // thêm
    addToCartBtn.addEventListener('click', function() {
        // Lấy phân loại và số lượng được chọn
        const variantSelect = document.getElementById('variant');
        const selectedVariant = variantSelect.options[variantSelect.selectedIndex].text;
        const quantity = document.getElementById('quantity').valueAsNumber;

        // Chuẩn bị thông tin sản phẩm để thêm vào giỏ hàng
        const item = {
            name: productName,
            variant: selectedVariant,
            quantity: quantity,
            price: 200000,
            image: 'assets/images/tra5.png'
        };

        // Lấy danh sách sản phẩm đã có từ localStorage (nếu có)
        let cartList = JSON.parse(localStorage.getItem('cartList')) || [];

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingItem = cartList.find(cartItem => (
            cartItem.name === item.name && cartItem.variant === item.variant
        ));

        if (existingItem) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng lên
            existingItem.quantity += item.quantity;
        } else {
            // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào danh sách
            cartList.push(item);
        }

        // Lưu danh sách sản phẩm vào localStorage
        localStorage.setItem('cartList', JSON.stringify(cartList));

        // Thông báo cho người dùng sản phẩm đã được thêm vào giỏ hàng
        if (confirm('Đã thêm sản phẩm vào giỏ hàng thành công! Bạn có muốn xem giỏ hàng ngay bây giờ không?')) {
            window.location.href = 'cart.html';
        }        
    });
    favoriteBtn.addEventListener('click', function() {
        const variantSelect = document.getElementById('variant');
        const selectedVariant = variantSelect.options[variantSelect.selectedIndex].text;
        const quantity = document.getElementById('quantity').valueAsNumber;
        // Chuẩn bị thông tin sản phẩm để thêm vào danh sách yêu thích
        const favoriteItem = {
            name: productName,
            variant: selectedVariant,
            quantity: quantity,
            price: 200000, // Giá sản phẩm
            image: 'assets/images/tra5.png'
        };

        // Lấy danh sách sản phẩm yêu thích đã có từ localStorage (nếu có)
        let favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];

        // Kiểm tra xem sản phẩm đã tồn tại trong danh sách yêu thích chưa
        const existingFavoriteItem = favoriteList.find(favItem => (
            favItem.name === favoriteItem.name && favItem.variant === favoriteItem.variant
        ));

        if (!existingFavoriteItem) {
            // Nếu sản phẩm chưa tồn tại trong danh sách yêu thích, thêm vào danh sách
            favoriteList.push(favoriteItem);

            // Lưu danh sách yêu thích vào localStorage
            localStorage.setItem('favoriteList', JSON.stringify(favoriteList));

            // Thông báo cho người dùng sản phẩm đã được thêm vào danh sách yêu thích
            alert('Đã thêm sản phẩm vào danh sách yêu thích thành công!');
        } else {
            // Nếu sản phẩm đã tồn tại trong danh sách yêu thích
            alert('Sản phẩm này đã có trong danh sách yêu thích!');
        }
    });
});
