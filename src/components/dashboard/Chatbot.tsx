"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { MessageSquare, Send } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: 'user' | 'bot', text: string }[]>([
    { from: 'bot', text: "Hello! How can I help you today? You can ask me to book an appointment or find information." }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    const newMessages = [...messages, { from: 'user' as 'user', text: inputValue }];
    setMessages(newMessages);
    setInputValue("");

    // Placeholder for chatbot response logic
    setTimeout(() => {
        setMessages([...newMessages, { from: 'bot' as 'bot', text: "I'm still learning! This is a placeholder response."}])
    }, 1000);
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
        size="icon"
      >
        <MessageSquare className="h-8 w-8" />
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>AI Assistant</SheetTitle>
          </SheetHeader>
          <div className="h-[calc(100%-120px)] overflow-y-auto my-4 pr-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2 ${msg.from === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <SheetFooter className="absolute bottom-0 right-0 w-full p-6 bg-background">
            <div className="flex w-full space-x-2">
              <Input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4"/>
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
