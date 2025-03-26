import { Application } from "@/components/sections/application";
import { Infra } from "@/components/sections/infra";
import { Uniitech } from "@/components/sections/uniitech";

export function Project() {
  return (
    <section className="mt-32 overflow-x-visible">
      <div className="mx-auto max-w-7xl">
        <div className="w-full border-t-2 border-t-black py-4">
          <h1 className="text-xl font-bold">프로젝트</h1>
        </div>
      </div>

      <Application />

      <Infra />

      <Uniitech />
    </section>
  );
}
