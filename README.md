# Clipboard Customizer

Webサイト閲覧時に、任意の文字列を指定の形式に変換して、クリッポボードに登録できるChrome拡張機能です

## 動作環境

* Google Chrome バージョン42 以降

## 設定＆Chrome拡張機能への登録方法

1. このリポジトリをPCの任意のディレクトリにダウンロード
1. `background.js` の `clipboardText` という変数に、クリップドードに貼り付けたい文字列を代入するするように修正
1. Google Chromeを開き、URL欄に `chrome://extensions` と入力
1. 「デベロッパーモード」をONにする
1. 「パケージ化されていない拡張機能を読み込む」から、ダウンロードしたリポジトリのディレクトリを指定

## 使い方

1. 任意のWebページの文字列を範囲指定して右クリック
1. 「Clipboard Customizer」をクリック
1. 指定の形式に変換された文字列がクリップボードにコピーされます

## Lisence

MIT