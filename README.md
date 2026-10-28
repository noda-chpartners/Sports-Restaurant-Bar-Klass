# Sports Restaurant&Bar Klass LP

Astro / SCSS / GSAP / Lenis で構築した1ページのランディングページです。

## 起動方法

```bash
npm install
npm run dev
```

本番ビルドは次のコマンドです。

```bash
npm run build
```

Windowsでフォルダ名に `&` が含まれていてもnpmスクリプトが動くよう、`scripts/astro.mjs` を経由してAstroを起動します。

## 更新箇所

- 店舗情報・メニュー・ナビゲーション: `src/data/siteContent.ts`
- ページ構成: `src/pages/index.astro`
- 共通スタイル: `src/styles/global.css`
- セクション別スタイル: `src/styles/main.scss`
- 最適化対象画像: `src/assets/images/`
- favicon・OGP: `public/`

## Googleカレンダー連携

イベント表示用のカレンダーIDは `src/data/siteContent.ts`、予約ページURLは環境変数で設定します。

### 1. イベント表示用カレンダー

表示対象は、Googleカレンダーの「Klass Schedule」です。`src/data/siteContent.ts` の `site.googleCalendarId` に、このカレンダーのIDを設定しています。

Googleカレンダーで予定を追加・編集するときは、保存先に「Klass Schedule」を選択してください。個人用の「Johnny Klass」とは別のカレンダーです。

表示先を変更する場合は、対象カレンダーの「設定と共有」→「カレンダーの統合」にある「カレンダーID」を `site.googleCalendarId` に設定し、サイトを再ビルド・再公開します。一般の訪問者にも表示するには、対象カレンダーを一般公開し、イベント告知用の予定の詳細を表示できる設定にしてください。

以前使用していた環境変数 `PUBLIC_GOOGLE_CALENDAR_ID` は参照しません。公開先に古い値が残っていても、ソースに設定した「Klass Schedule」を表示します。

通常の予定の追加・編集では、サイトの再ビルドは不要です。サイトを再読み込みすると、Google側の更新を表示できます。

### 2. 訪問者の予約受付

公開カレンダー自体への書き込み権限を訪問者へ渡すことは避け、Googleカレンダーの「予約スケジュール」を利用します。

1. パソコン版Googleカレンダーで「作成」→「予約スケジュール」を選択する
2. 予約枠の長さ、予約可能な曜日・時間、受付期限、準備時間、1日あたりの上限を設定する
3. 予約先カレンダーを選び、「カレンダーで空き情報を確認する」を有効にする
4. 場所は必要に応じて「対面会議」を選択する
5. 予約フォームでは迷惑予約対策として「メール確認を必須にする」を推奨
6. 保存後、「予約ページ」から共有リンクをコピーする
7. `.env` に次の値を設定する

```env
PUBLIC_GOOGLE_APPOINTMENT_URL=取得した予約ページURL
```

この値を設定すると、イベントセクションに「空き日程から予約する」ボタンが自動表示されます。予約者が登録した内容はGoogleカレンダーへ追加され、設定したカレンダーの既存予定と重なる時間帯は予約不可になります。

### 3. 公開URL

canonical URLとOGP画像URLを絶対URLにするため、公開時に次の値も設定します。

```env
PUBLIC_SITE_URL=https://公開ドメイン
```

環境変数を追加・変更した場合は、サイトを再ビルドしてください。
