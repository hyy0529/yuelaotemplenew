
//首頁跑馬燈

let currentIndex = 0;

function moveSlide(step) {
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;

    currentIndex = (currentIndex + step + totalImages) % totalImages;  // Ensure index stays within bounds

    const offset = -currentIndex * 100;
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    moveSlide(1);  // Automatically move to the next slide every 3 seconds
}, 3000);




// 獲取 modal 和 modal2 元素

var modal2 = document.getElementById("modal2");
var openModal2Btn = document.getElementById("openModal2");
var closeModal2Btn = document.getElementById("closeModal2");



// 顯示 modal2 的邏輯
openModal2Btn.onclick = function() {
    modal2.style.display = "block";  // 顯示 modal2
}

// 當用戶點擊關閉按鈕時，隱藏 modal2
closeModal2Btn.onclick = function() {
    modal2.style.display = "none";
}

// 當用戶點擊 modal2 以外的區域時，也隱藏 modal2
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};





//客服對話框
// 當頁面加載後執行
window.onload = function() {
    // 呼叫顯示對話框函數
    showDialog();
}

// 顯示對話框
function showDialog() {
    // 獲取圖示的位置和大小
    const iconRect = document.getElementById('showDialog').getBoundingClientRect();
    const dialog = document.getElementById('dialog');

    // 設定對話框的位置，使其顯示在圖示的右側並垂直居中
    dialog.style.left = `${iconRect.left + iconRect.width + 10}px`;  // 讓對話框顯示在圖示的右邊
    dialog.style.top = `${iconRect.top + (iconRect.height / 2) - (dialog.offsetHeight / 2)}px`;  // 讓對話框垂直居中於圖示
}

// 關閉對話框
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
};


