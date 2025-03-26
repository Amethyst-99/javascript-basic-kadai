// ボタン、テキストの要素を取得
const clickBtn = document.getElementById('btn');
const txt = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行する
clickBtn.addEventListener('click', () => {
  txt.textContent = "ボタンをクリックしました";
});