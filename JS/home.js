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
        description: "Dế Mèn Phiêu Lưu Ký kể về hành trình trưởng thành của Dế Mèn từ một chú dế trẻ con, kiêu ngạo, ích kỷ, qua những chuyến phiêu lưu đầy thử thách, Mèn học được các bài học sâu sắc về tình bạn, lòng dũng cảm, sự bao dung và lẽ sống, trở thành một người tốt, biết yêu thương và trân trọng cuộc sống, qua đó tác giả Tô Hoài gửi gắm thông điệp về cái thiện, cái ác và ước mơ về một thế giới đại đồng.",
    },
    {
        id: 2,
        title: "Tuổi Thơ Dữ Dội",
        category: "Novel",
        author: "Phùng Quán",
        country: "Vietnam",
        image: "https://product.hstatic.net/200000343865/product/tuoi-tho-du-doi_tap-1---tb-2023_37610d8b4cd0453aa96ab4f7873defee.png",
        description: "Tuổi thơ dữ dội kể về những thiếu niên 13-14 tuổi gia nhập Đội Thiếu niên Trinh sát, chiến đấu anh dũng trong kháng chiến chống Pháp, khắc họa sự hy sinh, tình bạn, lòng yêu nước và những trò nghịch ngợm hồn nhiên giữa bom đạn, qua các nhân vật Lượm, Mừng, Quỳnh Sơn Ca, Vịnh Sưa, Tư Dát.",
    },
    {
        id: 3,
        title: "Tắt Đèn",
        category: "Novel",
        author: "Ngô Tất Tố",
        country: "Vietnam",
        image: "https://cdn1.fahasa.com/media/flashmagazine/images/page_images/tat_den___ngo_tat_to_tb2023/2023_08_31_15_58_29_1-390x510.jpg",
        description: "Tắt đèn kể về số phận bi kịch của gia đình chị Dậu, một nông dân nghèo ở làng Đoài, dưới ách áp bức của thực dân phong kiến đầu thế kỷ 20: bị sưu thuế, bóc lột đến cùng cực, phải bán con, bán tài sản, và chị Dậu phải vùng lên phản kháng mạnh mẽ trước bọn cường hào, quan lại, thể hiện tinh thần kiên cường bất khuất dù cuối cùng phải lẩn trốn trong đêm tối, với cái kết đầy u ám, tượng trưng cho số phận bế tắc của người nông dân Việt Nam. ",
    },
    {
        id: 4,
        title: "Số Đỏ",
        category: "Novel",
        author: "Vũ Trọng Phụng",
        country: "Vietnam",
        image: "https://bizweb.dktcdn.net/100/370/339/products/so-do-minh-thang.jpg?v=1589963152457",
        description: "Truyện Số Đỏ là một tiểu thuyết trào phúng phê phán mạnh mẽ xã hội Việt Nam nửa phong kiến, nửa thực dân những năm 1930 qua câu chuyện thăng tiến \"từ đáy xã hội\" của Xuân Tóc Đỏ, một kẻ cơ hội, vô học nhưng nhờ sự Âu hóa kệch cỡm và các mưu mẹo, lừa lọc, hắn vô tình trở thành \"anh hùng cứu quốc\", một nhân vật thượng lưu, vạch trần sự giả dối, đạo đức suy đồi và những thói hư tật xấu (như mê tín, sùng bái Tây hóa, tệ nạn xã hội) của tầng lớp tư sản thành thị.",
    },
    {
        id: 5,
        title: "Lão Hạc",
        category: "Novel",
        author: "Nam Cao",
        country: "Vietnam",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTVYvQWmu7wNO3AGszAkwNDvNo9sSHVrEvA&s",
        description: "Truyện Lão Hạc kể về cuộc đời bi thương, nghèo khổ của người nông dân Lão Hạc, sống cô độc với con chó Vàng sau khi con trai bỏ đi; lão giữ nhân phẩm cao quý, quyết không bán đi tài sản cuối cùng (mảnh vườn) và tự kết liễu đời mình bằng bả chó để không làm gánh nặng cho ai, để dành lại tất cả cho con, qua đó thể hiện số phận người nông dân Việt Nam trước Cách mạng tháng Tám và phẩm giá cao đẹp của họ.",
    },
    {
        id: 6,
        title: "Những Ngôi Sao Xa Xôi",
        category: "Novel",
        author: "Lê Minh Khuê",
        country: "Vietnam",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1507465920i/36374632.jpg",
        description: "Nội dung chính là ca ngợi vẻ đẹp tâm hồn, sự dũng cảm, lạc quan, yêu đời và tình đồng đội thiêng liêng của ba nữ thanh niên xung phong (Phương Định, Thao, Nho) trên tuyến đường Trường Sơn thời kháng chiến chống Mỹ, qua công việc trinh sát mặt đường đầy gian khổ và nguy hiểm, làm nổi bật phẩm chất anh hùng, kiên cường của tuổi trẻ Việt Nam, những \"ngôi sao\" sáng giữa khói lửa chiến tranh",
    },

    // ================= KHOA HỌC =================
    {
        id: 7,
        title: "Bên Rặng Tuyết Sơn",
        category: "Science",
        author: "Nguyễn Phong",
        country: "Vietnam",
        image: "https://cdn1.fahasa.com/media/catalog/product/8/9/8935086854433_1.jpg",
        description: "Truyện Bên Rặng Tuyết Sơn kể về hành trình tâm linh của chàng trai Satyakam đến dãy Himalaya để tầm sư học đạo, được vị đạo sư thông thái hướng dẫn vượt qua thử thách \"quên đi thời gian\" và lắng nghe âm thanh vũ trụ, qua đó khám phá sự kết nối sâu sắc với thiên nhiên, sự vĩ đại của tâm linh và sức mạnh nội tại, nhấn mạnh lòng trung thực, bao dung, trí tuệ, và tình yêu thương, soi sáng con đường làm chủ số phận và tìm kiếm chân lý.",
    },
    // ================= LỊCH SỬ =================
    {
        id: 8,
        title: "Việt Nam Sử Lược",
        category: "History",
        author: "Trần Trọng Kim",
        country: "Vietnam",
        image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1632034796i/11632236.jpg",
        description: "Nội dung của Việt Nam Sử Lược (Trần Trọng Kim) là một bộ sử Việt Nam viết bằng chữ Quốc ngữ theo phương pháp hiện đại, bao quát toàn bộ lịch sử từ thời Hồng Bàng đến đầu thế kỷ 20, chia thành 5 thời kỳ lớn (Thượng Cổ, Bắc thuộc, Tự chủ, Nam Bắc phân tranh, Cận kim), không chỉ ghi chép sự kiện mà còn phân tích sâu sắc chính trị, kinh tế, xã hội, phong tục, tập quán, làm nền tảng cho việc học lịch sử dân tộc.",
    },
    {
        id: 9,
        title: "Đại Việt Sử Ký Toàn Thư",
        category: "History",
        author: "Ngô Sĩ Liên",
        country: "Vietnam",
        image: "https://product.hstatic.net/200000922131/product/1_b526312bc413402f9924d0cfb3d457a5_master.jpg",
        description: "Nội dung của Đại Việt Sử Ký Toàn Thư là bộ quốc sử đồ sộ của Việt Nam, ghi chép lịch sử dân tộc từ thời Hùng Vương đến năm 1675, bao gồm các sự kiện chính trị, quân sự, kinh tế, văn hóa, xã hội, và cả những yếu tố tâm linh, dã sử, với những lời bình luận sâu sắc từ các sử thần, đặc biệt là Ngô Sĩ Liên, giúp tái hiện chân thực quá trình dựng nước và giữ nước, truyền thống anh hùng và hiếu học của dân tộc.",
    },
    {
        id: 10,
        title: "Lịch Sử Quân Sự Việt Nam Tập 1",
        category: "History",
        author: "Viện Lịch Sử Quân Sự",
        country: "Vietnam",
        image: "https://www.nxbctqg.org.vn/img_data/images/863618810741_1.jpg",
        description: "Buổi Đầu Giữ Nước Thời Hùng Vương - An Dương Vương là tập đầu tiên trong bộ sách sử quân sự 14 tập, tường thuật về các hoạt động quân sự sơ khai từ thời Hùng Vương đến An Dương Vương, bao gồm nền văn minh sông Hồng, sự hình thành Văn Lang - Âu Lạc, và hai cuộc kháng chiến đầu tiên chống quân Tần và Triệu Đà, phác họa tổ chức quân sự, vũ khí thời kỳ này dựa trên tài liệu khảo cổ, dân tộc học, sử liệu cổ. ",
    },

    // ================= VĂN HỌC =================
    {
        id: 11,
        title: "Truyện Kiều",
        category: "Literature",
        author: "Nguyễn Du",
        country: "Vietnam",
        image: "https://product.hstatic.net/1000237375/product/bia_900x900_dbb77079df0641a5a3c1e4a8064fa6ab.jpg",
        description: "Nội dung Truyện Kiều kể về cuộc đời bi kịch của Thúy Kiều, người con gái tài sắc vẹn toàn, phải trải qua 15 năm lưu lạc, chìm nổi vì gia đình gặp tai biến, bán mình chuộc cha, rơi vào lầu xanh, bị lừa gạt, hành hạ, gặp anh hùng Từ Hải rồi mất tất cả, cuối cùng đoàn tụ gia đình nhưng tình duyên dang dở, thể hiện số phận con người bất hạnh trong xã hội phong kiến bất công, đồng thời đề cao vẻ đẹp, nhân phẩm và khát vọng tự do của con người, đặc biệt là người phụ nữ. ",
    },
    {
        id: 12,
        title: "Chí Phèo",
        category: "Literature",
        author: "Nam Cao",
        country: "Vietnam",
        image: "https://book.sachgiai.com/uploads/book/truyen-ngan-chi-pheo/truyen-ngan-chi-pheo-nam-cao.jpg",
        description: "Nội dung tác phẩm \"Chí Phèo\" của Nam Cao kể về bi kịch của người nông dân lương thiện bị xã hội phong kiến đẩy vào con đường tha hóa, lưu manh hóa: từ đứa trẻ mồ côi, Chí Phèo trở thành kẻ say rượu, quậy phá làng Vũ Đại, nhưng khi gặp Thị Nở và được bát cháo hành sưởi ấm tình người, hắn khao khát lương thiện trở lại; cuối cùng, vì bị xã hội (qua bà cô Thị Nở) từ chối, Chí Phèo tuyệt vọng, đâm chết Bá Kiến rồi tự tử, để lại tiếng kêu bi thảm về số phận con người bị cướp mất nhân tính.",
    },
    {
        id: 13,
        title: "Vợ Nhặt",
        category: "Literature",
        author: "Kim Lân",
        country: "Vietnam",
        image: "https://product.hstatic.net/1000237375/product/thiet_ke_chua_co_ten__81__51d105537c8544b8945d7e1eb59d57fb.png",
        description: "Truyện kể về anh Tràng, một người kéo xe bò nghèo khổ ở xóm ngụ cư trong nạn đói năm 1945, đã bất ngờ \"nhặt\" được một người vợ chỉ qua vài câu đùa và hai bát bánh đúc, từ đó xây dựng nên một mái ấm tình thương, nhen nhóm niềm tin vào tương lai tươi sáng giữa cảnh đời khốn cùng, thể hiện sức sống mãnh liệt và khát vọng hạnh phúc của con người Việt Nam trong hoàn cảnh bi thảm.",
    },
    {
        id: 14,
        title: "Hai Đứa Trẻ",
        category: "Literature",
        author: "Thạch Lam",
        country: "Vietnam",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy1GoPrSwncFl4D_MAB2m6au3OLBN9Sx9nlw&s",
        description: "Truyện kể về bức tranh về cuộc sống nghèo khổ, tù đọng, tăm tối nơi phố huyện trước Cách mạng tháng Tám, qua đó thể hiện lòng xót thương sâu sắc của nhà văn đối với số phận con người và ca ngợi những khát vọng, ước mơ giản dị, mãnh liệt về một cuộc sống tốt đẹp hơn, được thắp lên qua hình ảnh chuyến tàu đêm từ Hà Nội mang theo ánh sáng và âm thanh, theo dõi nhân vật Liên và An và những người dân xung quanh. ",
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
    let keyword = this.value.trim().toLowerCase();

    if (keyword === "") {
        displayBooks(books);
        return;
    }

    const filtered = books.filter(book =>
        book.title.toLowerCase().startsWith(keyword)
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
    document.getElementById("modalDescription").innerText = book.description;

    const modal = new bootstrap.Modal(document.getElementById("bookModal"));
    modal.show();
}