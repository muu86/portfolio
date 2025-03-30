import { Application } from "@/components/views/application";
import { Infra } from "@/components/views/infra";
import { Uniitech } from "@/components/views/uniitech";
import { Separator } from "@/components/ui/separator";

export function Project() {
  return (
    <section className="mt-32">
      <Separator className="mx-auto mb-12 max-w-5xl" />

      <Application />

      <Separator className="mx-auto mb-12 max-w-5xl" />

      <Infra />

      <Separator className="mx-auto mb-12 max-w-5xl" />

      <Uniitech />
    </section>
  );
}
