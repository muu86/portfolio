import { Application } from "@/app/components/application";
import { Infra } from "@/app/components/infra";
import { Uniitech } from "@/app/components/uniitech";
import { Collapsible } from "@/components/collapse/collapsible";

export function Project() {
  return (
    <section className="mt-10 overflow-x-visible">
      <div className="mx-auto max-w-4xl border-t-2 border-t-black py-4">
        <h1 className="text-xl font-bold">프로젝트</h1>
      </div>
      <div className="flex flex-col">
        <Collapsible>
          <Application />
        </Collapsible>

        <Collapsible>
          <Infra />
        </Collapsible>

        <Collapsible>
          <Uniitech />
        </Collapsible>
      </div>
    </section>
  );
}
