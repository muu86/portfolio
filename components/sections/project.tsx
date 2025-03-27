import { Application } from "@/components/sections/application";
import { Infra } from "@/components/sections/infra";
import { Uniitech } from "@/components/sections/uniitech";
import { Separator } from "@/components/ui/separator";

export function Project() {
  return (
    <section className="mt-32">
      <Separator className="mx-auto mb-12 max-w-5xl" />

      <Application />

      <Separator className="mx-auto mb-12 max-w-5xl" />

      <Infra />

      <Separator className="mx-auto mb-12 max-w-5xl" />
      <div className="mx-auto max-w-5xl">
        <Uniitech />
      </div>
    </section>
  );
}
