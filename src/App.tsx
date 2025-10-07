/**
 * みんまご (Minmago) - Municipal Office AI Chat Prototype
 * 
 * Main application component for the chatbot interface.
 * This app helps citizens find the right municipal office department
 * by analyzing their questions and providing contact information.
 */

import { useState, useRef, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { ScrollArea } from "./components/ui/scroll-area";
import { ChatMessage } from "./components/ChatMessage";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { Send, Loader2 } from "lucide-react";
import { getMockResponse } from "./utils/mockResponses";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  department?: string;
  phone?: string;
  hours?: string;
  location?: string;
}

export default function App() {
  // State management
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Refs for DOM manipulation
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer =
        scrollAreaRef.current.querySelector(
          "[data-radix-scroll-area-viewport]",
        );
      if (scrollContainer) {
        scrollContainer.scrollTop =
          scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Handle form submission and message sending
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim() || isLoading) return;

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response (replace with real API call in production)
    // モック応答をシミュレート（本番環境では実際のAPI呼び出しに置き換えてください）
    setTimeout(() => {
      const response = getMockResponse(userMessage.content);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.content,
        department: response.department,
        phone: response.phone,
        hours: response.hours,
        location: response.location,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
      inputRef.current?.focus();
    }, 1000);
  };

  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="w-full max-w-[430px] h-full flex flex-col bg-background shadow-2xl">
        {/* ヘッダー */}
        <header className="border-b border-border/50 bg-gradient-to-r from-primary to-primary/90 px-4 py-4 shrink-0 shadow-sm">
          <h2 className="text-white text-center app-logo text-2xl">
            みんまご
          </h2>
        </header>

        {/* メインコンテンツ */}
        <div className="flex-1 overflow-hidden min-h-0">
          <ScrollArea className="h-full" ref={scrollAreaRef}>
            {messages.length === 0 ? (
              <WelcomeScreen />
            ) : (
              <div className="px-4 py-4">
                <div className="flex flex-col gap-4">
                  {messages.map((message) => (
                    <ChatMessage
                      key={message.id}
                      role={message.role}
                      content={message.content}
                      department={message.department}
                      phone={message.phone}
                      hours={message.hours}
                      location={message.location}
                    />
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="size-8 bg-primary rounded-full flex items-center justify-center shrink-0">
                        <Loader2 className="size-4 text-primary-foreground animate-spin" />
                      </div>
                      <div className="bg-muted rounded-2xl px-3 py-2">
                        <p className="text-muted-foreground text-sm">
                          回答を作成中...
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </ScrollArea>
        </div>

        {/* 入力エリア */}
        <div className="border-t border-border/50 bg-white px-4 py-4 shrink-0 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              ref={inputRef}
              type="text"
              placeholder="お困りのことを入力してください..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-input-background border-border/50 shadow-sm"
            />
            <Button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              size="icon"
              className="shrink-0 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-primary to-primary/90"
            >
              {isLoading ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                <Send className="size-5" />
              )}
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2.5 text-center">
            案内窓口を提案するアシスタントです
          </p>
        </div>
      </div>
    </div>
  );
}