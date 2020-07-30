chrome.contextMenus.create({
    "title": "Clipboard Customizer",
    "type": "normal",
    "contexts": ["all"],
    "onclick": function (info) {
        // 範囲指定したテキストの文字列を取得
        const targetText = info.selectionText;
        const clipboardText = targetText + "Hello Clipboard Customizer";

        // クリップボード用のデータを作成
        document.addEventListener('copy', function handler(clipboardEvent) {
            clipboardEvent.preventDefault();
            clipboardEvent.clipboardData.setData('text/plain', clipboardText);
            // 毎回消しておかないと他の文字列をコピーできなくなる
            document.removeEventListener('copy', handler);
        });

        // クリップボードへのコピーを実行
        document.execCommand("Copy");
    }
});