import { Application } from "@/app/components/application";
import { Infra } from "@/app/components/infra";
import { Uniitech } from "@/app/components/uniitech";

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
