import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export function PosSwitch() {
  return (
    <>
      <div className="flex items-center space-x-2"><Switch /><Label htmlFor="airplane-mode">POS</Label></div>
    </>
  );
}