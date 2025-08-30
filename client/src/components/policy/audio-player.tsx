import { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

interface AudioPlayerProps {
  title: string;
  duration: string;
  language?: string;
}

export function AudioPlayer({ title, duration, language }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { language: currentLang } = useLanguage();

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const isHindi = currentLang === 'hindi';

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <Volume2 className="text-primary mr-2" size={20} />
        {isHindi ? "आवाज़ में सुनें (30 सेकंड)" : "Listen in Voice (30 seconds)"}
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-accent rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <Button
              variant="default"
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={handlePlay}
              data-testid="audio-play-button"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </Button>
            <div>
              <div className="font-medium">{title}</div>
              <div className="text-sm text-muted-foreground">
                {language || (isHindi ? "हिंदी में समझाया गया" : "Explained in Hindi")}
              </div>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Button 
            variant="secondary" 
            size="sm" 
            className="text-xs"
            data-testid="audio-lang-hindi"
          >
            हिंदी
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="text-xs"
            data-testid="audio-lang-english"
          >
            English
          </Button>
          <Button 
            variant="secondary" 
            size="sm" 
            className="text-xs"
            data-testid="audio-lang-telugu"
          >
            తెలుగు
          </Button>
        </div>
      </div>
    </div>
  );
}
