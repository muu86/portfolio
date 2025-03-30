import { Separator } from "@/components/ui/separator";
import { Title } from "@/components/title";
import { Fragment } from "react";
import { SectionContainer } from "@/components/views/section-container";

const items = [
  {
    title: "비트교육센터",
    period: "20.09 - 21.03",
    description: "클라우드 기반 빅데이터 전문가 양성 과정(6개월)",
  },

  {
    title: "한양대학교",
    period: "05.03 - 13.03",
    description: "법학과",
  },

  {
    title: "대일외국어고등학교",
    period: "02.03 - 05.03",
  },
];

export function Education() {
  return (
    <SectionContainer className="my-32">
      <Title>교육</Title>

      <div className="flex flex-col justify-center gap-8 py-8">
        {items.map((item, index) => (
          <Fragment key={item.title}>
            <div key={item.title} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>

              <p className="text-gray-500">{item.period}</p>
              {item.description && <p className="text-gray-500">{item.description}</p>}
            </div>

            {index < items.length - 1 && <Separator />}
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
