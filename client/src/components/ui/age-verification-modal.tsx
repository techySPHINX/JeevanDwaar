
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/lib/language-context";

interface AgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (age: number) => void;
}

export function AgeVerificationModal({ isOpen, onClose, onContinue }: AgeVerificationModalProps) {
  const { language } = useLanguage();
  const isHindi = language === "hindi";
  let age = 0;

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isHindi ? "आयु सत्यापित करें" : "Verify Age"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isHindi
              ? "आगे बढ़ने के लिए कृपया अपनी आयु दर्ज करें।"
              : "Please enter your age to continue."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="age" className="text-right">
              {isHindi ? "आयु" : "Age"}
            </Label>
            <Input
              id="age"
              type="number"
              className="col-span-3"
              onChange={(e) => (age = parseInt(e.target.value))}
            />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => onContinue(age)}>
            {isHindi ? "जारी रखें" : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
