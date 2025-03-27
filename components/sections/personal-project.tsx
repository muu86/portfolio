import { SectionContainer } from "@/components/sections/section-container";
import { Title } from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { Fragment } from "react";

const items = [
  {
    title: "포트폴리오 웹사이트",
    link: "https://github.com/muu86/portfolio",
    tech: "Next.js, Vercel, Zustand, Tailwind, Shadcn, MDX",
  },

  {
    title: "동네 육아맘 찾기",
    link: "https://github.com/muu86/mysns-springboot",
    tech: "SpringBoot, PostgreSQL, GraphQL",
    description: "데이터베이스의 Spatial Query를 이용해서 위치 기반 SNS를 구현",
  },
  {
    title: "골프 스윙 분석 AI",
    link: "https://github.com/muu86/golfriend-front-update2",
    stack: "Python, Flask, LSTM, Yolo",
    description: "골프 스윙 분석을 위해서 스윙 동영상을 8개의 구분 동작 이미지로 분류하는 RNN 모델",
  },
];

export function PersonalProject() {
  return (
    <SectionContainer className="my-32">
      <Title>개인 프로젝트</Title>

      <div className="flex flex-col justify-center gap-8 py-8">
        {items.map((item, index) => (
          <Fragment key={item.title}>
            <div key={item.title} className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold underline"
              >
                {item.link}
              </a>
              <p className="text-gray-500">{item.tech}</p>
              {item.description && <p className="text-gray-500">{item.description}</p>}
            </div>

            {index < items.length - 1 && <Separator />}
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
