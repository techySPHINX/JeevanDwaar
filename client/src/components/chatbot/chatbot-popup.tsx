
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';
import { ChatbotInterface } from './chatbot-interface';

export function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-background border border-border rounded-lg shadow-lg">
          <ChatbotInterface isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      ) : (
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <Bot size={32} />
        </Button>
      )}
    </div>
  );
}
