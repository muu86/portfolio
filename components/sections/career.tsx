import { Separator } from "@/components/ui/separator";
import { SectionContainer } from "@/components/container/section-container";
import { Title } from "@/components/title";

const items = [
  {
    title: "디지털 뉴트리션",
    period: "2024.05. ~ 2024.12. (8개월)",
    description:
      "사운드 테라피 스타트업의 첫 백엔드 개발자로 합류하여 초기 스타트업이 빠르게 안정적인 서비스를 제공하는데 기여",
  },

  {
    title: "유니아이텍",
    period: "2021.08. ~ 2023.06. (1년 11개월)",
    description: "홈앤쇼핑(홈쇼핑) 쇼핑몰 SI 프로젝트 수행",
  },
];

export function Career() {
  return (
    <SectionContainer>
      <Title>경력</Title>

      <div className="flex flex-col justify-center gap-8 py-8">
        {items.map((item, index) => (
          <>
            <div key={item.title} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>

              <p className="text-gray-500">{item.period}</p>
              {item.description && <p className="text-gray-500">{item.description}</p>}
            </div>

            {index < items.length - 1 && <Separator />}
          </>
        ))}
      </div>
    </SectionContainer>
  );
}
