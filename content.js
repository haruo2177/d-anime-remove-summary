window.onload = function () {
  const backInfoTxt4 = document.getElementsByClassName("backInfoTxt4");
  while (backInfoTxt4.length) {
    backInfoTxt4.item(0).remove();
  }
};

// 観察対象の要素を取得
const targetNode = document.body; // ページ全体を対象にする場合、document.bodyを使用

// 変更があったときに呼び出されるコールバック関数
const callback = function (mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      // 子要素が追加された場合
      for (const node of mutation.addedNodes) {
        // クラスがmodalDialogで、かつIDがmodalInformation4の要素が追加された場合
        if (node.classList && node.classList.contains("modalDialog")) {
          const modalInformation4Element = node.querySelector("#modalInformation4");
          if (modalInformation4Element) {
            const firstPTag = modalInformation4Element.querySelector("p");
            if (firstPTag) {
              firstPTag.remove();
            }
          }
        }
      }
    }
  }
};

// MutationObserverのインスタンスを作成し、観察対象の要素とコールバック関数を指定
const observer = new MutationObserver(callback);

// 観察対象の設定
const config = { childList: true, subtree: true };

// MutationObserverを開始
observer.observe(targetNode, config);
