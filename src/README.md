# みんまご (Minmago)

市役所向けAIチャットボットプロトタイプ - お問い合わせ内容から適切な窓口をご案内

## 📱 概要

「みんまご」は、市役所などの公共機関を訪れる市民の方々が、簡単に適切な問い合わせ窓口を見つけられるようにするためのAIチャットボットプロトタイプです。ログイン不要で、スマートフォンからも快適に利用できます。

### 主な特徴

- 🎯 **シンプルで直感的なUI** - 老若男女誰でも使いやすいデザイン
- 📱 **モバイルファースト** - スマートフォンでの利用を想定した設計
- 🔒 **プライバシー重視** - ログイン不要、個人情報の入力も不要
- ⚡ **高速レスポンス** - フロントエンドのみで動作する軽量設計
- 📞 **ワンタップ発信** - 案内された窓口へ直接電話をかけられる

## 🛠️ 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Vite** - 高速ビルドツール
- **Tailwind CSS v4** - モダンなスタイリング
- **Radix UI** - アクセシブルなUIコンポーネント
- **Lucide React** - アイコンライブラリ

## 🚀 セットアップ

### 必要な環境

- Node.js 18.x 以上
- npm または yarn

### インストール手順

1. リポジトリをクローン

```bash
git clone https://github.com/yourusername/minmago.git
cd minmago
```

2. 依存関係をインストール

```bash
npm install
```

3. 開発サーバーを起動

```bash
npm run dev
```

4. ブラウザで http://localhost:5173 を開く

## 📦 ビルド

プロダクション用にビルドする場合：

```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに出力されます。

## 🌐 デプロイ

### Vercel へのデプロイ（推奨）

1. [Vercel](https://vercel.com) にアクセスしてアカウント作成（無料）
2. プロジェクトをGitHubにプッシュ
3. Vercelで「New Project」→ リポジトリを選択
4. 自動的にビルド・デプロイが開始されます

または、Vercel CLIを使用：

```bash
npx vercel
```

### Netlify へのデプロイ

1. [Netlify](https://www.netlify.com) にアクセスしてアカウント作成（無料）
2. プロジェクトをGitHubにプッシュ
3. Netlifyで「Add new site」→ リポジトリを選択
4. ビルド設定が自動検出されてデプロイされます

または、Netlify Drop を使用：

```bash
npm run build
```

その後、`dist` フォルダを [Netlify Drop](https://app.netlify.com/drop) にドラッグ&ドロップ

## 🎨 カスタマイズ

### メインカラーの変更

`/styles/globals.css` の `--primary` 変数を変更：

```css
:root {
  --primary: #1EADAC; /* お好みの色に変更 */
}
```

### 窓口情報の編集

`/utils/mockResponses.ts` で各窓口の情報をカスタマイズできます：

```typescript
return {
  content: "案内メッセージ",
  department: "窓口名",
  phone: "電話番号",
  hours: "受付時間",
  location: "場所"
};
```

### ロゴフォントの変更

`/styles/globals.css` の `.app-logo` クラスを編集：

```css
.app-logo {
  font-family: 'M PLUS Rounded 1c', sans-serif; /* お好みのフォントに変更 */
  font-weight: 800;
}
```

## 📁 プロジェクト構造

```
minmago/
├── App.tsx                      # メインアプリケーションコンポーネント
├── components/
│   ├── ChatMessage.tsx          # チャットメッセージコンポーネント
│   ├── WelcomeScreen.tsx        # 初期画面コンポーネント
│   └── ui/                      # Shadcn UIコンポーネント
├── utils/
│   └── mockResponses.ts         # 窓口案内ロジック
├── styles/
│   └── globals.css              # グローバルスタイル
└── src/
    └── main.tsx                 # エントリーポイント
```

## 🔮 今後の拡張案

- [ ] 実際のAI APIとの連携（OpenAI、Claude等）
- [ ] チャット履歴の保存機能
- [ ] 多言語対応（英語、中国語等）
- [ ] 音声入力対応
- [ ] よくある質問のクイック選択
- [ ] 窓口の混雑状況表示
- [ ] オンライン予約システムとの連携

## 📄 ライセンス

MIT License

## 🤝 コントリビューション

プルリクエストを歓迎します！大きな変更の場合は、まずissueを開いて変更内容を議論してください。

## 📧 お問い合わせ

プロジェクトに関する質問や提案は、GitHubのIssuesでお願いします。

---

Built with ❤️ using React + TypeScript + Tailwind CSS
