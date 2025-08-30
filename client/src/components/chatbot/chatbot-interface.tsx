import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Bot, User, Send, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useMutation } from '@tanstack/react-query';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotInterfaceProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function ChatbotInterface({ isOpen = true, onClose }: ChatbotInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'नमस्ते! मैं आपकी बीमा संबंधी सभी जानकारी में मदद कर सकता हूं। आप क्या जानना चाहते हैं?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const { language } = useLanguage();
  
  const isHindi = language === 'hindi';

  const sendMessage = useMutation({
    mutationFn: async (question: string) => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      let answer = '';
      if (question.toLowerCase().includes('premium')) {
        answer = isHindi ? 'आप अपनी प्रीमियम भुगतान ऑनलाइन कर सकते हैं।' : 'You can pay your premium online.';
      } else if (question.toLowerCase().includes('claim')) {
        answer = isHindi ? 'क्लेम की स्थिति जानने के लिए अपनी पॉलिसी आईडी दर्ज करें।' : 'Enter your policy ID to check claim status.';
      } else if (question.toLowerCase().includes('policy')) {
        answer = isHindi ? 'यहाँ आपकी पॉलिसी का विवरण है।' : 'Here are your policy details.';
      } else if (question.toLowerCase().includes('nominee')) {
        answer = isHindi ? 'नॉमिनी बदलने के लिए फॉर्म भरें।' : 'Fill out the form to change nominee.';
      } else {
        answer = isHindi ? 'माफ़ कीजिए, कृपया अधिक स्पष्ट प्रश्न पूछें।' : 'Sorry, please ask a more specific question.';
      }
      return { answer };
    },
    onSuccess: (data) => {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: data.answer,
        isBot: true,
        timestamp: new Date()
      }]);
    }
  });

  const quickQuestions = [
    { text: isHindi ? "प्रीमियम भुगतान" : "Premium Payment", key: "premium" },
    { text: isHindi ? "क्लेम स्थिति" : "Claim Status", key: "claim" },
    { text: isHindi ? "पॉलिसी विवरण" : "Policy Details", key: "policy" },
    { text: isHindi ? "नॉमिनी बदलाव" : "Nominee Change", key: "nominee" }
  ];

  const handleSend = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        isBot: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      sendMessage.mutate(inputText);
      setInputText('');
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    handleSend();
  };

  if (!isOpen) return null;

  return (
    <Card className="w-full max-w-md">
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <Bot className="text-primary-foreground" size={20} />
          </div>
          <div>
            <h3 className="font-semibold">
              {isHindi ? "जीवन सहायक AI" : "Jeevan Assistant AI"}
            </h3>
            <p className="text-sm opacity-90">
              {isHindi ? "24×7 उपलब्ध" : "Available 24×7"}
            </p>
          </div>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-primary-foreground hover:bg-primary-foreground/20"
            data-testid="chatbot-close"
          >
            <X size={20} />
          </Button>
        )}
      </div>

      <CardContent className="p-0">
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start space-x-2 ${
                message.isBot ? '' : 'justify-end'
              }`}
            >
              {message.isBot && (
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="text-primary-foreground" size={16} />
                </div>
              )}
              <div
                className={`rounded-lg p-3 max-w-xs ${
                  message.isBot
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              {!message.isBot && (
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="text-muted-foreground" size={16} />
                </div>
              )}
            </div>
          ))}
          {sendMessage.isPending && (
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="text-primary-foreground" size={16} />
              </div>
              <div className="bg-accent rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-accent-foreground rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-accent-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-accent-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-border">
          <div className="mb-3">
            <p className="text-sm font-medium text-foreground mb-2">
              {isHindi ? "अक्सर पूछे जाने वाले प्रश्न:" : "Frequently Asked Questions:"}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {quickQuestions.map((question) => (
                <Button
                  key={question.key}
                  variant="secondary"
                  size="sm"
                  className="text-xs text-left justify-start h-auto p-2"
                  onClick={() => handleQuickQuestion(question.text)}
                  data-testid={`quick-question-${question.key}`}
                >
                  {question.text}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={isHindi ? "अपना प्रश्न लिखें..." : "Type your question..."}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              data-testid="chatbot-input"
            />
            <Button
              onClick={handleSend}
              disabled={!inputText.trim() || sendMessage.isPending}
              data-testid="chatbot-send"
            >
              <Send size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
