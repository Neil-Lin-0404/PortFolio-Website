document.addEventListener('DOMContentLoaded', function () {
    // 選取所有具有 class="show" 的按鈕
    const showButtons = document.getElementsByClassName('show');

    // 使用 for...of 迴圈來遍歷 showButtons
    for (let button of showButtons) {
        button.addEventListener('click', function () {
            const menu = document.getElementById('menu');
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'block'; // 顯示
            } else {
                menu.style.display = 'none'; // 隱藏
            }
        });
    }
});

/* // for...of 迴圈範例
const array = [1, 2, 3, 4, 5];
for (let element of array) {
    console.log(element); // 依次輸出 1, 2, 3, 4, 5
}

// 傳統的 for 迴圈範例
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // 依次輸出 1, 2, 3, 4, 5
}

// for...in 迴圈範例（用於遍歷物件的屬性）
const object = { a: 1, b: 2, c: 3 };
for (let key in object) {
    console.log(key, object[key]); // 依次輸出 "a 1", "b 2", "c 3"
}
 */