
document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            id: 1,
            link: "tra1.html",
            imgSrc: "assets/images/tra1.png",
            altText: "tra1",
            title: "Trà đào chanh dây Mộc Hương",
            price: 360000,
            type: "Hộp 15 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Thảo Mộc"
        },
        {
            id: 2,
            link: "tra2.html",
            imgSrc: "assets/images/tra2.png",
            altText: "tra2",
            title: "Trà Hoa Hồng Xí Muội Mộc Hương",
            price: 180000,
            type: "Hộp 15 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Hoa"
        },
        {
            id: 3,
            link: "#",
            imgSrc: "assets/images/tra3.png",
            altText: "tra3",
            title: "Trà Mộc Liên Hảo Hạng Mộc Hương",
            price: 400000,
            type: "Hộp 10 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Sen"
        },
        
        {
            id: 4,
            link: "#",
            imgSrc: "assets/images/tra4.png",
            altText: "tra4",
            title: "Trà Chanh Dây Kim Quất Thanh Nhiệt",
            price: 180000,
            type: "Hộp 10 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Thảo Mộc"
        },
        {
            id: 5,
            link: "tra5.html",
            imgSrc: "assets/images/tra5.png",
            altText: "tra5",
            title: "Trà Hoa Đậu Biếc & Cỏ Ngọt",
            price: 200000,
            type: "Hộp 13 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Hoa"
        },
        
        {
            id: 6,
            link: "#",
            imgSrc: "assets/images/tra6.png",
            altText: "tra6",
            title: "Trà Đông Trùng Hạ Thảo Tứ Vị",
            price: 400000,
            type: "Hộp 20 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Thảo Mộc"
        },
        
        {
            id: 7,
            link: "#",
            imgSrc: "assets/images/tra7.png",
            altText: "tra7",
            title: "Bột Cần Tây Sấy Lạnh Hữu Cơ",
            price: 100000,
            type: "Hộp 100 gram",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Bột Sấy Lạnh"
        },
        {
            id: 8,
            link: "#",
            imgSrc: "assets/images/tra8.png",
            altText: "tra8",
            title: "Trà Tâm Sen Hảo Hạng Mộc Hương",
            price: 200000,
            type: "Hộp 10 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Sen"
        },
        {
            id: 9,
            link: "tra9.html",
            imgSrc: "assets/images/tra9.png",
            altText: "tra9",
            title: "Trà Hoa Mẫu Đơn Sấy Ngũ Vị",
            price: 180000,
            type: "Hộp 15 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Hoa"
        },
        {
            id: 10,
            link: "#",
            imgSrc: "assets/images/tra14.png",
            altText: "tra14",
            title: "Trà Đường Nâu Cam Quế Tự Nhiên",
            price: 200000,
            type: "Hộp 15 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Hoa"
        },
        {
            id: 11,
            link: "#",
            imgSrc: "assets/images/tra11.png",
            altText: "tra11",
            title: "Bột Cỏ Lúa Mỳ Sấy Lạnh Hữu Cơ",
            price: 130000,
            type: "Hộp 100 gram",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Bột Sấy Lạnh"
        },
        {
            id: 12,
            link: "#",
            imgSrc: "assets/images/tra12.png",
            altText: "tra12",
            title: "Bột Củ Sen Mix Hạt Organic",
            price: 140000,
            type: "Hộp 150 gram",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Bột Sấy Lạnh"
        },
        {
            id: 13,
            link: "#",
            imgSrc: "assets/images/tra13.png",
            altText: "tra13",
            title: "Bột Rau Má Sấy Lạnh Hữu Cơ",
            price: 110000,
            type: "Hộp 100 gram",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Bột Sấy Lạnh"
        },
        {
            id: 14,
            link: "#",
            imgSrc: "assets/images/tra15.png",
            altText: "tra15",
            title: "Trà Dưỡng Tâm An Thần Mộc Hương",
            price: 210000,
            type: "Hộp 10 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Sen"
        },
        {
            id: 15,
            link: "#",
            imgSrc: "assets/images/tra17.png",
            altText: "tra17",
            title: "Trà Cúc Chi Sấy Lạnh Organic",
            price: 200000,
            type: "Hộp 15 gói",
            additionalImgSrc: "https://www.tiemtraannhien.vn/wp-content/uploads/2023/04/vien.png",
            category: "Trà Hoa"
        }
    ];
    const slidesContainer = document.getElementById('slides-container');
    const slidesContainer1 = document.getElementById('slides-container1');
    const slidesContainer2 = document.getElementById('slides-container2');
    const slidesContainer3 = document.getElementById('slides-container3');
    
    const prevButton = document.getElementById('slide-arrow-prev');
    const nextButton = document.getElementById('slide-arrow-next');
    
    let currentIndex1 = 0; // Index cho mục Trà Hoa
    let currentIndex2 = 0; // Index cho mục Trà Thảo Mộc
    let currentIndex3 = 0; // Index cho mục Bột Sấy Lạnh
    let currentIndex4 = 0; // Index cho mục Trà Sen

    // hàm để show sản phẩm 
    function showProducts(container, index, category) {
        container.innerHTML = '';
        const productsToShow = products.filter(product => product.category === category);
        const numProducts = productsToShow.length;
        
        for (let i = index; i < index + 3; i++) {
            if (i >= numProducts) break;
            const product = productsToShow[i];
            const li = document.createElement('li');
            li.classList.add('slide', 'slide-crosell');

            li.innerHTML = `
                <div class="product-small box product-crosell">
                    <div class="box-image">
                        <div class="image-fade_in_back">
                            <a href="${product.link}" aria-label="${product.title}">
                                <img loading="lazy" decoding="async" src="${product.imgSrc}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail cross-sell-image" alt="${product.altText}" />
                            </a>
                        </div>
                    </div>
                    <div class="box-text box-text-products" style="height: 129.734px;">
                        <div class="title-wrapper">
                            <p class="name product-title-home">
                                <a href="${product.link}" class="a-product-name-home">${product.title}</a>
                            </p>
                        </div>
                        <div class="price-wrapper" style="height: 17.6406px;">
                            <span class="price"><bdi>${product.price.toLocaleString('vi-VN')} ₫</bdi></span>
                        </div>
                        <hr class="hr-home-product" />
                        <div class="home-product-type">
                            <b>Phân loại</b>
                            <p>${product.type}</p>
                        </div>
                    </div>
                    <div class="add-to-cart-button-home" style="height: 0px;">
                        <a href="${product.link}" aria-label="Lựa chọn cho “${product.title}”" rel="nofollow">
                            <i class="fa fa-cart-plus"></i>
                        </a>
                    </div>
                    <div class="image-after-product">
                        <img src="${product.additionalImgSrc}" alt="">
                    </div>
                </div>
            `;
            container.appendChild(li);
        }
    }

    // Hiển thị sản phẩm ban đầu cho mỗi mục
    showProducts(slidesContainer, currentIndex1, 'Trà Hoa');
    showProducts(slidesContainer1, currentIndex2, 'Trà Thảo Mộc');
    showProducts(slidesContainer2, currentIndex3, 'Bột Sấy Lạnh');
    showProducts(slidesContainer3, currentIndex4, 'Trà Sen');

    // Xử lý sự kiện khi ấn vào nút Previous cho mục Trà Hoa
    prevButton.addEventListener('click', function() {
        if (currentIndex1 > 0) {
            currentIndex1--;
            showProducts(slidesContainer, currentIndex1, 'Trà Hoa');
        }
    });
    // Xử lý sự kiện khi ấn vào nút Next cho mục Trà Hoa
    nextButton.addEventListener('click', function() {
        const numProducts = products.filter(product => product.category === 'Trà Hoa').length;
        if (currentIndex1 + 3 < numProducts) {
            currentIndex1++;
            showProducts(slidesContainer, currentIndex1, 'Trà Hoa');
        }
    });

    document.getElementById('search-button').addEventListener('click', function() {
        const searchTerm = document.getElementById('search-input-header').value.toLowerCase();
        searchProducts(searchTerm);
    });

    function searchProducts(searchTerm) {
        const searchResults = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );

        slidesContainer.innerHTML = '';
        slidesContainer1.innerHTML = '';
        slidesContainer2.innerHTML = '';
        slidesContainer3.innerHTML = '';

        searchResults.forEach(product => {
            const li = document.createElement('li');
            li.classList.add('slide', 'slide-crosell');

            li.innerHTML = `
                <div class="product-small box product-crosell">
                    <div class="box-image">
                        <div class="image-fade_in_back">
                            <a href="${product.link}" aria-label="${product.title}">
                                <img loading="lazy" decoding="async" src="${product.imgSrc}" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail cross-sell-image" alt="${product.altText}" />
                            </a>
                        </div>
                    </div>
                    <div class="box-text box-text-products" style="height: 129.734px;">
                        <div class="title-wrapper">
                            <p class="name product-title-home">
                                <a href="${product.link}" class="a-product-name-home">${product.title}</a>
                            </p>
                        </div>
                        <div class="price-wrapper" style="height: 17.6406px;">
                            <span class="price"><bdi>${product.price.toLocaleString('vi-VN')} ₫</bdi></span>
                        </div>
                        <hr class="hr-home-product" />
                        <div class="home-product-type">
                            <b>Phân loại</b>
                            <p>${product.type}</p>
                        </div>
                    </div>
                    <div class="add-to-cart-button-home" style="height: 0px;">
                        <a href="${product.link}" aria-label="Lựa chọn cho “${product.title}”" rel="nofollow">
                            <i class="fa fa-cart-plus"></i>
                        </a>
                    </div>
                    <div class="image-after-product">
                        <img src="${product.additionalImgSrc}" alt="">
                    </div>
                </div>
            `;

            if (product.category === 'Trà Hoa') {
                slidesContainer.appendChild(li);
            } else if (product.category === 'Trà Thảo Mộc') {
                slidesContainer1.appendChild(li);
            } else if (product.category === 'Bột Sấy Lạnh') {
                slidesContainer2.appendChild(li);
            } else if (product.category === 'Trà Sen') {
                slidesContainer3.appendChild(li);
            }
        });
    }
    

// Gọi lại hàm hiển thị sản phẩm ban đầu cho từng mục
showProducts(slidesContainer, currentIndex1, 'Trà Hoa');
showProducts(slidesContainer1, currentIndex2, 'Trà Thảo Mộc');
showProducts(slidesContainer2, currentIndex3, 'Bột Sấy Lạnh');
showProducts(slidesContainer3, currentIndex4, 'Trà Sen');
});


