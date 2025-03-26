import { Separator } from "@/components/ui/separator";

export function Education() {
  return (
    <section className="mx-auto mt-32 mb-32 w-full max-w-7xl">
      <div className="border-t-2 border-t-black py-4">
        <h1 className="text-xl font-bold">교육</h1>
      </div>

      <div className="flex flex-col gap-8 py-8">
        <div>
          <h2 className="text-xl font-bold">비트교육센터</h2>
          <p className="mt-4 text-sm text-gray-500">20.09 - 21.03</p>
          <p className="text-sm text-gray-500">클라우드 기반 빅데이터 전문가 양성 과정(6개월)</p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-bold">한양대학교</h2>
          <p className="mt-4 text-sm text-gray-500">05.03 - 13.03</p>
          <p className="text-sm text-gray-500">법학과</p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-bold">대일외국어고등학교</h2>
          <p className="mt-4 text-sm text-gray-500">02.03 - 05.02</p>
        </div>
      </div>
    </section>
  );
}
