import { Separator } from "@/components/ui/separator";

export function Career() {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="border-t-2 border-t-black py-4">
        <h1 className="text-xl font-bold">경력</h1>
      </div>

      <div className="flex flex-col gap-8 py-8">
        <div>
          <h2 className="text-xl font-bold">디지털 뉴트리션</h2>
          <p className="mt-4 text-sm text-gray-500">2024.05. ~ 2024.12. (8개월)</p>
          <p className="text-sm text-gray-500">
            회사의 첫 백엔드 개발자로 합류하여 초기 스타트업이 빠르게 안정적인 서비스를 제공하는데 기여
          </p>
        </div>

        <Separator />

        <div>
          <h2 className="text-xl font-bold">유니아이텍</h2>
          <p className="mt-4 text-sm text-gray-500">2021.08. ~ 2023.06. (1년 11개월)</p>
          <p className="text-sm text-gray-500">홈앤쇼핑(홈쇼핑) 쇼핑몰 SI 프로젝트 수행</p>
        </div>
      </div>
    </section>
  );
}
