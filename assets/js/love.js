document.addEventListener('DOMContentLoaded', function () {
    const favoriteListContainer = document.getElementById('fList');
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList')) || [];

    function renderFavoriteItems() {
        favoriteListContainer.innerHTML = '';

        if (favoriteList.length === 0) {
            favoriteListContainer.innerHTML = '<p style="font-size: 17px;">Danh sách yêu thích trống, hãy thêm sản phẩm vào danh sách yêu thích nhé</p>';
            return;
        }

        favoriteList.forEach((item, index) => {
            const itemRow = document.createElement('div');
            itemRow.classList.add('row', 'favorite-item');

            itemRow.innerHTML = `
                <div class="col-2">
                    <img src="${item.image}" alt="Product Image" style="max-width: 100%; height: auto;">
                </div>
                <div class="col-10">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="mb-0" style="font-size: 15px">${item.name}</h5>
                            <button class="btn btn-link text-danger btn-remove" data-index="${index}"><i class="fa fa-trash btn-remove" style="font-size: 20px"></i></button>
                    </div>
                    <p class="mb-0" style="font-size: 14px">Phân loại: ${item.variant}</p>
                    <p class="mb-0" style="font-size: 14px">Đơn giá: ${formatCurrency(item.price)}</p>
                    <hr>
                </div>
            `;

            favoriteListContainer.appendChild(itemRow);
        });
    }

    function formatCurrency(value) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }

    renderFavoriteItems();

    // Xử lý sự kiện xóa sản phẩm
    favoriteListContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn-remove')) {
            const index = event.target.getAttribute('data-index');
            favoriteList.splice(index, 1);
            localStorage.setItem('favoriteList', JSON.stringify(favoriteList));
            renderFavoriteItems();
        }
    });
});
