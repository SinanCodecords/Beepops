import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

// Signup is wired up in Step 9.
export function FooterNewsletter() {
  return (
    <div>
      <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase">
        Stay in the loop
      </p>
      <p className="text-sm text-white/75">
        Get wholesome clean-eating tips, recipes &amp; exclusive product launch offers.
      </p>
      <InputGroup className="mt-5 h-12 border-white/15 bg-white/5 pr-1">
        <InputGroupAddon>
          <HugeiconsIcon icon={Mail01Icon} size={16} className="text-white/70" />
        </InputGroupAddon>
        <InputGroupInput
          type="email"
          aria-label="Email address"
          placeholder="Your email address"
          className="text-white placeholder:text-white/60"
        />
        <Button className="h-10 bg-white px-5 text-forest hover:bg-white/90">Join</Button>
      </InputGroup>
    </div>
  );
}
