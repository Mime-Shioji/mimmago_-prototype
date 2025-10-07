# コントリビューションガイド / Contributing Guide

「みんまご」プロジェクトへの貢献に興味を持っていただき、ありがとうございます！

Thank you for your interest in contributing to the Minmago project!

## 🌟 貢献方法 / How to Contribute

### バグ報告 / Bug Reports

バグを見つけた場合は、以下の情報を含めてIssueを作成してください：

- バグの詳細な説明
- 再現手順
- 期待される動作
- 実際の動作
- スクリーンショット（該当する場合）
- 使用環境（ブラウザ、OS等）

### 機能提案 / Feature Requests

新機能の提案は大歓迎です！Issueで以下を説明してください：

- 機能の概要
- なぜその機能が必要か
- 使用例やユースケース

### プルリクエスト / Pull Requests

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📝 コーディング規約 / Coding Standards

- TypeScriptの型定義を活用する
- コンポーネントは機能ごとに分割する
- 意味のある変数名・関数名を使用する
- 必要に応じてコメントを記載する（日本語・英語どちらでも可）
- Prettier/ESLintの設定に従う

## 🧪 テスト / Testing

プルリクエストを送る前に：

1. ビルドが成功することを確認 (`npm run build`)
2. 開発サーバーで動作確認 (`npm run dev`)
3. 型チェックを実行 (`npm run lint`)

## 📄 ライセンス / License

コントリビューションは、プロジェクトと同じMITライセンスの下で公開されます。

All contributions will be licensed under the project's MIT License.

## 💬 質問 / Questions

質問がある場合は、遠慮なくIssueで聞いてください！

If you have any questions, feel free to ask in an Issue!
