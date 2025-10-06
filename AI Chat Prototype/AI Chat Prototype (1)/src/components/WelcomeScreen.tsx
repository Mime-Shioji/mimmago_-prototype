import { MessageSquare, Clock, Shield, Bot } from "lucide-react";

export function WelcomeScreen() {
  const features = [
    {
      icon: MessageSquare,
      title: "簡単な質問入力",
      description: "お困りのことを自然な言葉で入力",
      color: "from-blue-500/10 to-blue-500/5"
    },
    {
      icon: Clock,
      title: "24時間対応",
      description: "いつでも窓口をご案内",
      color: "from-purple-500/10 to-purple-500/5"
    },
    {
      icon: Shield,
      title: "安心・安全",
      description: "個人情報の入力は不要",
      color: "from-green-500/10 to-green-500/5"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-start gap-6 py-8 px-4">
      <div className="flex items-center justify-center size-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full shadow-lg">
        <Bot className="size-16 text-primary" />
      </div>
      
      <div className="text-center space-y-2.5">
        <p className="text-muted-foreground text-sm leading-relaxed">
          お困りのことをお聞かせください。<br />適切な担当窓口をご案内いたします。
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 bg-gradient-to-br ${feature.color} border border-border/50 rounded-2xl shadow-sm`}
            >
              <div className="size-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <Icon className="size-5 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="text-sm">{feature.title}</h4>
                <p className="text-muted-foreground text-xs">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-br from-accent/60 to-accent/30 rounded-2xl p-4 w-full shadow-sm border border-border/30">
        <h4 className="mb-3 text-sm flex items-center gap-2">
          <span className="size-1.5 bg-primary rounded-full"></span>
          よくあるお問い合わせ例
        </h4>
        <ul className="space-y-2.5 text-muted-foreground text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>住民票の取得方法を知りたい</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>ゴミの出し方について教えてほしい</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>子育て支援について相談したい</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span>
            <span>税金の納付について確認したい</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
