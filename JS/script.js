//  ============================ DUOI LA TRANG DANG NHAP==========================

//  ============================ TREN LA TRANG DANG NHAP==========================

//  ============================ TREN LA TRANG DANG KY==========================

//  ============================ TREN LA TRANG DANG KY==========================

//  ============================ TREN LA TRANG CHU==========================

// sử lý phần đăng nhập cho tất cả các trang
document.addEventListener("DOMContentLoaded", function () {
    const userInfo = JSON.parse(localStorage.getItem('dangNhap'));
    const userCart = document.querySelector('.user-cart');

    // ===== Hàm cập nhật số lượng giỏ hàng =====
    function updateCartCount() {
        const cartCountEl = document.getElementById('cart-count');
        if (!cartCountEl) return;

        if (!userInfo || !userInfo.username) {
            cartCountEl.textContent = 0;
            return;
        }

        const username = userInfo.username;
        const cartKey = `cart_${username}`;
        const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

        const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
        cartCountEl.textContent = totalQty;
    }

    if (userInfo) {
        userCart.innerHTML = `
            <a href="./tranggiohang.html">
                <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng
                <span id="cart-count" style="background:#dc3545;color:#fff;padding:2px 6px;border-radius:50%;font-size:12px;margin-left:5px;">0</span>
            </a>
            <div class="dropdown ms-2">
                <button class="btn btn-outline-secondary dropdown-toggle text-white" id="userMenu" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i> ${userInfo.username}
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                    <li><a class="dropdown-item" href="#" id="viewBalance"><i class="fa-solid fa-wallet"></i> Xem số dư</a></li>
                    <li><a class="dropdown-item" href="#" id="deposit"><i class="fa-solid fa-coins"></i> Nạp tiền</a></li>
                    <li><a class="dropdown-item" href="#" id="logout"><i class="fa-solid fa-right-from-bracket"></i> Đăng xuất</a></li>
                </ul>
            </div>`;

        // ✅ Cập nhật số lượng giỏ hàng ngay sau khi innerHTML được gán
        updateCartCount();

        // Xử lý các nút
        document.getElementById('viewBalance').addEventListener('click', function () {
            const balance = userInfo.balance ? userInfo.balance.toLocaleString('vi-VN') : "0";
            alert(`💰 Số dư hiện tại của bạn là: ${balance} VNĐ`);
        });

        document.getElementById('deposit').addEventListener('click', function () {
            const amountStr = prompt("💵 Nhập số tiền bạn muốn nạp (VNĐ):");
            const amount = parseInt(amountStr);
            if (isNaN(amount) || amount <= 0) {
                alert("❌ Số tiền không hợp lệ!");
                return;
            }
            userInfo.balance = userInfo.balance ? userInfo.balance + amount : amount;
            localStorage.setItem('dangNhap', JSON.stringify(userInfo));
            alert(`✅ Bạn đã nạp ${amount.toLocaleString('vi-VN')} VNĐ.\n💰 Số dư mới: ${userInfo.balance.toLocaleString('vi-VN')} VNĐ`);
        });

        document.getElementById('logout').addEventListener('click', function () {
            localStorage.removeItem('dangNhap');
            window.location.reload();
        });
    } else {
        // Nếu chưa đăng nhập, vẫn tạo badge số lượng
        userCart.innerHTML = `
            <a href="./tranggiohang.html">
                <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng
                <span id="cart-count" style="background:#dc3545;color:#fff;padding:2px 6px;border-radius:50%;font-size:12px;margin-left:5px;">0</span>
            </a>
            <a href="./trangdangnhap.html"><i class="fa-solid fa-user"></i> Đăng nhập</a>`;
        updateCartCount();
    }
});
window.updateCartCount = updateCartCount;
//  ============================ TREN LA TRANG CHU==========================
