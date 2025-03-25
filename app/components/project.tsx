import { Application } from "@/app/components/application";
import { Infra } from "@/app/components/infra";
import { Uniitech } from "@/app/components/uniitech";

export function Project() {
  return (
    <section id="project" className="mt-10 overflow-x-visible">
      <div className="mx-auto max-w-4xl border-t-2 border-t-black py-4">
        <h1 className="text-xl font-bold">프로젝트</h1>
      </div>
      <div className="flex flex-col">
        <Application />

        <Infra />

        <Uniitech />
      </div>
    </section>
  );
}
