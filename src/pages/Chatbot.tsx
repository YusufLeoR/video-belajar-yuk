import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Saya asisten AI Navigo yang siap membantu masalah hukum UMKM dan ekonomi kreatif. Saya bisa membantu pertanyaan tentang hak cipta, merek dagang, kontrak bisnis, dan sengketa UMKM. Ada yang bisa saya bantu?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Terima kasih atas pertanyaan Anda. Untuk memberikan jawaban yang lebih akurat, saya perlu informasi lebih lanjut. Bisakah Anda menjelaskan situasi Anda dengan lebih detail?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const quickQuestions = [
    "Bagaimana cara mendaftarkan merek dagang UMKM?",
    "Apa itu hak cipta dan bagaimana melindunginya?",
    "Bagaimana membuat kontrak kerja sama yang aman?",
    "Bagaimana menangani sengketa dengan supplier?",
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Konsultasi AI untuk UMKM</h1>
          <p className="text-muted-foreground">
            Dapatkan jawaban cepat seputar hak cipta, merek dagang, kontrak, dan masalah hukum UMKM lainnya
          </p>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-6">
          {/* Chat Area */}
          <Card className="flex-1 flex flex-col">
            <CardHeader className="border-b">
              <div className="flex items-center gap-3">
                <Avatar className="bg-primary text-primary-foreground">
                  <AvatarFallback>
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Navigo AI Assistant</CardTitle>
                  <CardDescription>Online - Siap membantu</CardDescription>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <Avatar
                    className={
                      message.sender === "bot"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }
                  >
                    <AvatarFallback>
                      {message.sender === "bot" ? (
                        <Bot className="h-5 w-5" />
                      ) : (
                        <User className="h-5 w-5" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`flex flex-col ${
                      message.sender === "user" ? "items-end" : "items-start"
                    } max-w-[70%]`}
                  >
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <Avatar className="bg-primary text-primary-foreground">
                    <AvatarFallback>
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-secondary rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </CardContent>

            {/* Input */}
            <CardContent className="border-t p-4">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Ketik pertanyaan Anda..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sidebar */}
          <Card className="lg:w-80">
            <CardHeader>
              <CardTitle>Pertanyaan Cepat</CardTitle>
              <CardDescription>
                Klik untuk mengirim pertanyaan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4"
                  onClick={() => {
                    setInputMessage(question);
                  }}
                >
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <Card className="mt-6 bg-accent border-primary/20">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              <strong>Catatan:</strong> AI assistant ini memberikan panduan awal seputar hukum UMKM dan ekonomi kreatif.
              Untuk kasus yang lebih kompleks atau memerlukan penanganan legal formal, silakan konsultasikan dengan
              pengacara spesialis melalui fitur Cari Pengacara.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;
