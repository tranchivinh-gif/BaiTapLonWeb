//  ============================ DUOI LA TRANG DANG NHAP==========================

//  ============================ TREN LA TRANG DANG NHAP==========================

//  ============================ TREN LA TRANG DANG KY==========================

//  ============================ TREN LA TRANG DANG KY==========================

//  ============================ TREN LA TRANG CHU==========================

// sử lý phần đăng nhập cho tất cả các trang
document.addEventListener("DOMContentLoaded", function () {
    const userInfo = JSON.parse(localStorage.getItem('dangNhap'));
    const userCart = document.querySelector('.user-cart');

    if (userInfo) {
        // Giao diện dropdown cho tên người dùng
        userCart.innerHTML = `
            <a href="./tranggiohang.html">
                <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng
            </a>
            <div class="dropdown ms-2">
                <button class="btn btn-outline-secondary dropdown-toggle text-white" id="userMenu" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i> ${userInfo.username}
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                    <li id = "chinhsua"><a class="dropdown-item" href="#" id="logout"><i class="fa-solid fa-right-from-bracket"></i> Đăng xuất</a></li>
                </ul>
            </div>
        `;

        // Xử lý nút đăng xuất
        document.getElementById('logout').addEventListener('click', function () {
            localStorage.removeItem('dangNhap');
            window.location.reload(); // Tải lại trang
        });
    }
});
//  ============================ TREN LA TRANG CHU==========================
