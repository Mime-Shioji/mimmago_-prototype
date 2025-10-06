import { Avatar } from "./ui/avatar";
import { Bot, User, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
  department?: string;
  phone?: string;
  hours?: string;
  location?: string;
}

export function ChatMessage({ role, content, department, phone, hours, location }: ChatMessageProps) {
  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const confirmed = window.confirm(`${phone}\nに発信しますか？`);
    if (confirmed && phone) {
      window.location.href = `tel:${phone}`;
    }
  };

  return (
    <div className={`flex gap-3 ${role === "user" ? "justify-end" : "justify-start"}`}>
      {role === "assistant" && (
        <Avatar className="size-8 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shrink-0 shadow-sm">
          <Bot className="size-4 text-primary-foreground" />
        </Avatar>
      )}

      <div className={`flex flex-col gap-3 max-w-[75%] ${role === "user" ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-4 py-2.5 ${
            role === "user"
              ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-md"
              : "bg-white text-foreground shadow-sm border border-border/50"
          }`}
        >
          <p className="whitespace-pre-wrap text-sm leading-relaxed">{content}</p>
        </div>
        
        {role === "assistant" && department && phone && (
          <div className="bg-gradient-to-br from-white to-secondary/20 border border-border/50 rounded-2xl p-4 w-full shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="pb-2 border-b border-border/50">
                <p className="text-xs text-muted-foreground mb-1">担当窓口</p>
                <p className="font-medium text-primary">{department}</p>
              </div>
              
              <div className="flex flex-col gap-2.5">
                <a
                  href={`tel:${phone}`}
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 p-3 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors active:scale-[0.98] cursor-pointer"
                >
                  <div className="size-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="size-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground">電話番号</p>
                    <p className="text-sm font-medium text-primary">{phone}</p>
                  </div>
                </a>
                
                {hours && (
                  <div className="flex items-center gap-2 px-3">
                    <Clock className="size-4 text-muted-foreground shrink-0" />
                    <p className="text-xs text-muted-foreground">{hours}</p>
                  </div>
                )}
                
                {location && (
                  <div className="flex items-center gap-2 px-3">
                    <MapPin className="size-4 text-muted-foreground shrink-0" />
                    <p className="text-xs text-muted-foreground">{location}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {role === "user" && (
        <Avatar className="size-8 bg-gradient-to-br from-secondary/80 to-secondary flex items-center justify-center shrink-0 shadow-sm">
          <User className="size-4 text-secondary-foreground" />
        </Avatar>
      )}
    </div>
  );
}
