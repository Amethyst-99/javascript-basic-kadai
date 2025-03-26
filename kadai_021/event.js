// ボタン、テキストの要素を取得
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときにイベント処理を実行
btn.addEventListener('click', () => {

  setTimeout(() => {
    // 2秒後にテキストの内容を変更
    text.textContent = "ボタンをクリックしました";
  }, 2000);
  
});