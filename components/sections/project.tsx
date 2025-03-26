import { Application } from "@/components/sections/application";
import { Infra } from "@/components/sections/infra";
import { Uniitech } from "@/components/sections/uniitech";
import { Separator } from "@/components/ui/separator";

export function Project() {
  return (
    <section className="mt-32 overflow-x-visible">
      {/*<div className="mx-auto max-w-5xl">*/}
      {/*  <div className="w-full border-t-2 border-t-black py-4">*/}
      {/*    <h1 className="text-xl font-bold">프로젝트</h1>*/}
      {/*  </div>*/}
      {/*</div>*/}

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
