# Notes

記事はプロジェクトごとのMarkdownファイルで管理します。Webサイトへ接続する際は、各記事のFront Matterから一覧情報を読み込み、本文をMarkdownとして表示する想定です。

## ファイル構成

```text
notes/
├── README.md
├── pay-id/README.md
├── medeasy/README.md
├── ontime/README.md
└── portfolio-renewal/README.md
```

各記事の冒頭には `title`、`date`、`project`、`summary`、`cover`、`tags` を記載します。記事内で使う画像は各記事フォルダの `images/` に置き、本文から相対パスで参照します。

```md
![画面イメージ](./images/01.png)
```

カバー画像には、既存のプロジェクト画像を指定しています。記事用の画像を追加する場合は `images/` フォルダを作成してください。
