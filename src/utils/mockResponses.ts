/**
 * Mock response generator for municipal office inquiries
 * 市役所問い合わせ用モック応答生成
 * 
 * This module simulates AI responses by pattern matching user questions
 * to appropriate municipal departments. In production, this should be
 * replaced with actual AI API calls (OpenAI, Claude, etc.)
 * 
 * 本番環境では、実際のAI API（OpenAI、Claude等）に置き換えてください
 */

interface Response {
  content: string;
  department: string;
  phone: string;
  hours: string;
  location: string;
}

/**
 * Get mock response based on user question
 * @param question - User's inquiry text
 * @returns Department information and guidance message
 */
export function getMockResponse(question: string): Response {
  const lowerQuestion = question.toLowerCase();

  // 住民票・戸籍関連
  if (
    lowerQuestion.includes("住民票") ||
    lowerQuestion.includes("戸籍") ||
    lowerQuestion.includes("転入") ||
    lowerQuestion.includes("転出") ||
    lowerQuestion.includes("引っ越し") ||
    lowerQuestion.includes("マイナンバー")
  ) {
    return {
      content:
        "住民票や戸籍に関するお問い合わせですね。市民課にて承っております。各種証明書の発行や転入・転出手続きなどに対応いたします。",
      department: "市民課",
      phone: "03-1234-1111",
      hours: "平日 8:30〜17:15",
      location: "本庁舎1階"
    };
  }

  // ゴミ・環境関連
  if (
    lowerQuestion.includes("ゴミ") ||
    lowerQuestion.includes("ごみ") ||
    lowerQuestion.includes("資源") ||
    lowerQuestion.includes("リサイクル") ||
    lowerQuestion.includes("粗大")
  ) {
    return {
      content:
        "ゴミの収集や分別に関するお問い合わせですね。環境課にて承っております。収集日程や出し方、粗大ゴミの申し込みなどについてご案内いたします。",
      department: "環境課",
      phone: "03-1234-2222",
      hours: "平日 8:30〜17:15",
      location: "本庁舎2階"
    };
  }

  // 税金関連
  if (
    lowerQuestion.includes("税金") ||
    lowerQuestion.includes("納税") ||
    lowerQuestion.includes("住民税") ||
    lowerQuestion.includes("固定資産税") ||
    lowerQuestion.includes("軽自動車税")
  ) {
    return {
      content:
        "税金に関するお問い合わせですね。税務課にて承っております。納税証明書の発行、納付方法、納付期限などについてご案内いたします。",
      department: "税務課",
      phone: "03-1234-3333",
      hours: "平日 8:30〜17:15",
      location: "本庁舎2階"
    };
  }

  // 子育て・福祉関連
  if (
    lowerQuestion.includes("子育て") ||
    lowerQuestion.includes("保育") ||
    lowerQuestion.includes("幼稚園") ||
    lowerQuestion.includes("児童手当") ||
    lowerQuestion.includes("子ども")
  ) {
    return {
      content:
        "子育て支援に関するお問い合わせですね。子ども家庭課にて承っております。保育園の入園手続き、児童手当、子育て相談などに対応いたします。",
      department: "子ども家庭課",
      phone: "03-1234-4444",
      hours: "平日 8:30〜17:15",
      location: "本庁舎3階"
    };
  }

  // 介護・高齢者福祉
  if (
    lowerQuestion.includes("介護") ||
    lowerQuestion.includes("高齢者") ||
    lowerQuestion.includes("年金") ||
    lowerQuestion.includes("福祉")
  ) {
    return {
      content:
        "介護や高齢者福祉に関するお問い合わせですね。高齢福祉課にて承っております。介護保険、高齢者向けサービス、各種相談などに対応いたします。",
      department: "高齢福祉課",
      phone: "03-1234-5555",
      hours: "平日 8:30〜17:15",
      location: "本庁舎3階"
    };
  }

  // 健康・医療関連
  if (
    lowerQuestion.includes("健康") ||
    lowerQuestion.includes("予防接種") ||
    lowerQuestion.includes("検診") ||
    lowerQuestion.includes("医療")
  ) {
    return {
      content:
        "健康や医療に関するお問い合わせですね。健康課にて承っております。予防接種、健康診断、健康相談などについてご案内いたします。",
      department: "健康課",
      phone: "03-1234-6666",
      hours: "平日 8:30〜17:15",
      location: "保健センター"
    };
  }

  // 道路・インフラ関連
  if (
    lowerQuestion.includes("道路") ||
    lowerQuestion.includes("街灯") ||
    lowerQuestion.includes("公園") ||
    lowerQuestion.includes("工事")
  ) {
    return {
      content:
        "道路や公共施設に関するお問い合わせですね。都市整備課にて承っております。道路の補修、街灯の修理、公園の管理などに対応いたします。",
      department: "都市整備課",
      phone: "03-1234-7777",
      hours: "平日 8:30〜17:15",
      location: "本庁舎4階"
    };
  }

  // デフォルトレスポンス
  return {
    content:
      "お問い合わせいただきありがとうございます。より詳しくご案内させていただくため、総合案内窓口へお問い合わせください。担当の者が適切な窓口をご紹介いたします。",
    department: "総合案内",
    phone: "03-1234-0000",
    hours: "平日 8:30〜17:15",
    location: "本庁舎1階 総合受付"
  };
}
