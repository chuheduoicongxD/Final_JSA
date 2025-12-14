// 📌 DATABASE SÁCH
const books = [
    // ================= TIỂU THUYẾT =================
    {
        id: 1,
        title: "Dế Mèn Phiêu Lưu Ký",
        category: "Novel",
        author: "Tô Hoài",
        country: "Vietnam",
        image: "https://bavi.edu.vn/upload/21768/fck/files/150800018_3868030666550251_8375198552020103317_n.jpg",
    },
    {
        id: 2,
        title: "Tuổi Thơ Dữ Dội",
        category: "Novel",
        author: "Phùng Quán",
        country: "Vietnam",
        image: "https://product.hstatic.net/200000343865/product/tuoi-tho-du-doi_tap-1---tb-2023_37610d8b4cd0453aa96ab4f7873defee.png",
    },
    {
        id: 3,
        title: "Tắt Đèn",
        category: "Novel",
        author: "Ngô Tất Tố",
        country: "Vietnam",
        image: "https://cdn1.fahasa.com/media/flashmagazine/images/page_images/tat_den___ngo_tat_to_tb2023/2023_08_31_15_58_29_1-390x510.jpg",
    },
    {
        id: 4,
        title: "Số Đỏ",
        category: "Novel",
        author: "Vũ Trọng Phụng",
        country: "Vietnam",
        image: "https://bizweb.dktcdn.net/100/370/339/products/so-do-minh-thang.jpg?v=1589963152457",
    },
    {
        id: 5,
        title: "Lão Hạc",
        category: "Novel",
        author: "Nam Cao",
        country: "Vietnam",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTVYvQWmu7wNO3AGszAkwNDvNo9sSHVrEvA&s",
    },
    {
        id: 6,
        title: "Những Ngôi Sao Xa Xôi",
        category: "Novel",
        author: "Lê Minh Khuê",
        country: "Vietnam",
        image: "https://yduoctonthattung.vn/Content/Uploads/images/TinTuc/nhung%20ngoi%20sao%20xa%20xoi%203.jpg",
    },

    // ================= KHOA HỌC =================
    {
        id: 7,
        title: "Bên Rặng Tuyết Sơn",
        category: "Science",
        author: "Nguyễn Phong",
        country: "Vietnam",
        image: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935086854433_1.jpg",
    },
    // ================= LỊCH SỬ =================
    {
        id: 8,
        title: "Việt Nam Sử Lược",
        category: "History",
        author: "Trần Trọng Kim",
        country: "Vietnam",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1632034796i/11632236.jpg",
    },
    {
        id: 9,
        title: "Đại Việt Sử Ký Toàn Thư",
        category: "History",
        author: "Ngô Sĩ Liên",
        country: "Vietnam",
        image: "https://product.hstatic.net/200000922131/product/1_b526312bc413402f9924d0cfb3d457a5_master.jpg",
    },
    {
        id: 10,
        title: "Lịch Sử Quân Sự Việt Nam",
        category: "History",
        author: "Viện Lịch Sử Quân Sự",
        country: "Vietnam",
        image: "https://www.nxbctqg.org.vn/img_data/images/863618810741_1.jpg",
    },

    // ================= VĂN HỌC =================
    {
        id: 11,
        title: "Truyện Kiều",
        category: "Literature",
        author: "Nguyễn Du",
        country: "Vietnam",
        image: "https://product.hstatic.net/1000237375/product/bia_900x900_dbb77079df0641a5a3c1e4a8064fa6ab.jpg",
    },
    {
        id: 12,
        title: "Chí Phèo",
        category: "Literature",
        author: "Nam Cao",
        country: "Vietnam",
        image: "https://book.sachgiai.com/uploads/book/truyen-ngan-chi-pheo/truyen-ngan-chi-pheo-nam-cao.jpg",
    },
    {
        id: 13,
        title: "Vợ Nhặt",
        category: "Literature",
        author: "Kim Lân",
        country: "Vietnam",
        image: "https://product.hstatic.net/1000237375/product/thiet_ke_chua_co_ten__81__51d105537c8544b8945d7e1eb59d57fb.png",
    },
    {
        id: 14,
        title: "Hai Đứa Trẻ",
        category: "Literature",
        author: "Thạch Lam",
        country: "Vietnam",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1GoPrSwncFl4D_MAB2m6au3OLBN9Sx9nlw&s",
    },
];

// 📌 HIỂN THỊ SÁCH
function displayBooks(list) {
    const container = document.getElementById("bookContainer");
    container.innerHTML = "";

    list.forEach(book => {
        container.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card book-card shadow-sm" onclick="showBook(${book.id})" style="cursor:pointer;">
                    <img src="${book.image}" class="card-img-top book-img">
                    <div class="card-body">
                        <h5>${book.title}</h5>
                        <p class="text-muted">${book.author}</p>
                    </div>
                </div>
            </div>
        `;
    });
}
// 📌 LỌC THEO DANH MỤC
function filterCategory(cat) {
    if (cat === "all") {
        displayBooks(books);
    } else {
        const filtered = books.filter(b => b.category === cat);
        displayBooks(filtered);
    }
}
// 📌 TÌM KIẾM
document.getElementById("searchInput").addEventListener("keyup", function () {
    let keyword = this.value.toLowerCase();
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(keyword) ||
        book.author.toLowerCase().includes(keyword)
    );
    displayBooks(filtered);
});

// Load mặc định
displayBooks(books);

function showBook(id) {
    const book = books.find(b => b.id === id);

    document.getElementById("modalTitle").innerText = book.title;
    document.getElementById("modalAuthor").innerText = book.author;
    document.getElementById("modalCountry").innerText = book.country;
    document.getElementById("modalCategory").innerText = book.category;
    document.getElementById("modalImage").src = book.image;

    const modal = new bootstrap.Modal(document.getElementById("bookModal"));
    modal.show();
}