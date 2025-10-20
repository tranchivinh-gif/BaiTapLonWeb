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
        // Giao diện dropdown cho người dùng
        userCart.innerHTML = `
            <a href="./tranggiohang.html">
                <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng
            </a>
            <div class="dropdown ms-2">
                <button class="btn btn-outline-secondary dropdown-toggle text-white" id="userMenu" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-user"></i> ${userInfo.username}
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                    <li><a class="dropdown-item" href="#" id="viewBalance"><i class="fa-solid fa-wallet"></i> Xem số dư</a></li>
                    <li><a class="dropdown-item" href="#" id="addMoney"><i class="fa-solid fa-money-bill-wave"></i> Nạp tiền</a></li>
                    <li><a class="dropdown-item" href="#" id="logout"><i class="fa-solid fa-right-from-bracket"></i> Đăng xuất</a></li>
                </ul>
            </div>
        `;

        // === Xem số dư ===
        document.getElementById('viewBalance').addEventListener('click', function () {
            const balance = userInfo.balance ? userInfo.balance.toLocaleString('vi-VN') : "0";
            alert(`💰 Số dư hiện tại của bạn là: ${balance} VNĐ`);
        });

        // === Nạp tiền ===
        document.getElementById('addMoney').addEventListener('click', function () {
            let amount = prompt("💵 Nhập số tiền bạn muốn nạp (VNĐ):");
            amount = parseInt(amount);

            if (isNaN(amount) || amount <= 0) {
                alert("❌ Số tiền không hợp lệ!");
                return;
            }

            // Cập nhật số dư cho tài khoản đang đăng nhập
            userInfo.balance = (userInfo.balance || 0) + amount;
            localStorage.setItem('dangNhap', JSON.stringify(userInfo));

            // Cập nhật luôn trong danh sách users
            let users = JSON.parse(localStorage.getItem('users')) || [];
            const index = users.findIndex(u => u.username === userInfo.username);
            if (index !== -1) {
                users[index].balance = userInfo.balance;
                localStorage.setItem('users', JSON.stringify(users));
            }

            alert(`✅ Nạp thành công ${amount.toLocaleString('vi-VN')} VNĐ!\n💰 Số dư mới: ${userInfo.balance.toLocaleString('vi-VN')} VNĐ`);
        });

        // === Đăng xuất ===
        document.getElementById('logout').addEventListener('click', function () {
            localStorage.removeItem('dangNhap');
            window.location.reload();
        });
    }
});


//  ============================ TREN LA TRANG CHU==========================
