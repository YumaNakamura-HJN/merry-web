# Merry

ワンピースのゴーイングメリー号からつけた名前です。

社員が必ず立ち寄る場所という意味を込めて付けました。

便利機能を作るもよし、自分のスキル向上のためのお試しの場にしてもよし。

## ルール

どういう機能を追加するかは中村まで一報入れること。

## システム概要

社内改善のための機能を集約するシステムです。
社内システムなので技術学習のために作成し、多少不具合や障害があっても良いという思想で作って OK です。

その代わり、製造した社員は障害が社員から上がった際は修正をする事。

→ ここが大事。どのような障害が発生する可能性があるかを経験値として積むことができる。

→ 発生した障害は管理しましょう。（一旦はスプレッドシートなどでよいですがナレッジとしてためたいので障害管理台帳もシステム化予定。）

さあ！作りたいものを作ろう！

## 作成方法

作成方法は 2 種類。

1 つ目は、React でそのまま実装する。

その場合 pages 配下に作成してください。

2 つ目は、React 以外で実装する。

その場合、SPA に則らずに pages 配下にページを作成し、対象機能のページに遷移してよい。

## システム変更時にやること

- README の機能一覧修正

- お知らせ機能の変更

- Slack にて社内へ周知

## 機能一覧

※機能を追加した人はこちらに追加してください。

- トップページ

  - 機能概要

    システムのトップページ。

    システムへの変更が周知される。

  - 機能詳細

    なし。

  - 使い方

    なし。

  - 担当者

    中村

- 残業申請システム

  - 機能概要

    残業申請をシステム化。

  - 機能詳細

    ユーザーが残業申請し、上長が承認する。
    また、承認された残業時間のトータルを表示。

  - 使い方

    ※作成後追記。

  - 担当者

    中村

## コマンド

ローカル実行

```shell
npm run dev
```

## 今後追加したい機能

- High

  - 社員管理

- Middle

  - 残業申請

  - 稼働管理（帳票出力も）

  - 昇格申請

  - 休暇申請

  - 予実管理

  - 開発品質計画書

- Low

  - 擬似 EC サイト

  - デザインの PlayGround
