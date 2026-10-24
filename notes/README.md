# Notes

各記事の原稿はプロジェクトごとのMarkdownファイルで管理しています。公開ページの一覧・翻訳・本文は `../notes-data.js` にまとめ、`notes-page.js` が言語設定に合わせて表示します。記事を追加・更新するときは、原稿と表示データの両方を更新してください。

## ファイル構成

```text
notes/
├── README.md
├── pay-id/README.md
├── medeasy/README.md
├── ontime/README.md
└── portfolio-renewal/README.md
```

各記事の冒頭には `title`、`date`、`project`、`summary`、`cover`、`tags` を記載します。日本語・韓国語・英語の公開文面は `notes-data.js` の各記事 `content` 内に同じ構成で記載します。記事内で使う画像は各記事フォルダの `images/` に置いてください。

```md
![画面イメージ](./images/01.png)
```

カバー画像には、既存のプロジェクト画像を指定しています。記事用の画像を追加する場合は `images/` フォルダを作成してください。
