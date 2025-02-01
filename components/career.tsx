export function Career() {
  return (
    <section className="sm:px-8 mt-24 md:mt-28">
      <div className="w-full max-w-7xl mx-auto lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <h1>디지털 뉴트리션</h1>
            <div className="mx-auto max-w-2xl gap-y-20">
              <div className="flex flex-col gap-16">
                <Project
                  title="Express.js 서버를 NestJS로 전환"
                  description="
                    기존의 Express.js 기반 백엔드 아키텍처를 NestJS 프레임워크를 활용한 모던하고 구조적인 아키텍처로 재구성하였습니다.
                    이를 통해 애플리케이션의 확장성과 유지보수성을 획기적으로 향상시키고,
                    TypeScript 기반의 정적 타입 검사 및 의존성 주입(Dependency Injection) 등의 기능을 활용하여 더욱 견고하고 확장 가능한 시스템을 구축하였습니다.
                  "
                  period="2024.08 - 2024.10"
                />
                <Project
                  title="AWS 아키텍처 재구성 및 Terraform 도입"
                  description="
                    AWS Elastic Kubernetes Service (EKS)와 Karpenter를 활용하여 자동화된 확장성을 지원하는
                    고도화된 Kubernetes 클러스터 아키텍처를 설계 및 구축하였습니다. 이를 통해 클라우드 인프라의 효율성을 극대화하고,
                    서비스의 부하에 따라 자동으로 스케일링 가능한 유연한 환경을 구현했습니다. 특히, Karpenter를 사용하여
                    노드 자동화와 리소스 최적화를 실현, 운영 비용 절감 및 성능 향상을 도모했습니다.
                  "
                  period="2024.08 - 2024.10"
                />
                <Project
                  title="CI/CD 파이프라인 구축 및 자동화"
                  description="
                    기존의 수동 빌드 및 배포 프로세스를 개선하기 위해, Github Actions와 CI/CD 파이프라인을 도입하여 빌드와 배포 과정을 완전 자동화했습니다.
                    이를 통해 코드 변경 사항에 대한 자동화된 빌드, 테스트, 배포가 이루어지며, 개발 주기의 효율성을 획기적으로 향상시켰습니다.
                    또한, 자동화된 워크플로우를 통해 품질 보증과 배포 안정성을 강화하고, 개발팀의 반복적인 작업을 최소화했습니다.
                  "
                  period="2024.05 - 2024.06"
                />
                <Project
                  title="협력 프로젝트 - 살루스케어"
                  description="
                    살루스케어에서 런칭한 비타포트 앱에서 사운드필의 구독권을 쿠폰 형식으로 구매할 수 있도록 API 연동
                  "
                  period="2024.05 - 2024.11"
                />
                <Project
                  title="협력 프로젝트 - DB생명"
                  description="
                    Payco, DB생명과 제휴 서비스 연동, AI 설문 리포트를 위한 Flask 서버를 AWS Lambda를 통해 연결
                  "
                  period="2024.07 - 2024.10"
                />
                <Project
                  title="협력 프로젝트 - LG엑스붐"
                  description="
                    LG 엑스붐 앱에 사운드필 트랙 제휴, AWS Lambda@Edge를 통해 엣지 서버에서 글로벌 고객을 대상으로 인증 처리, 음원 서비스
                  "
                  period="2024.06 - 2024.12"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  description: string;
  period: string;
};

function Project({ title, description, period }: ProjectProps) {
  return (
    <article className="group relative flex flex-col items-start">
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
        <a href="/articles/crafting-a-design-system-for-a-multiplanetary-future">
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
          <span className="relative z-10">{title}</span>
        </a>
      </h2>
      <time
        className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
        dateTime="2022-09-05"
      >
        <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
        {period}
      </time>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-700">
        자세히
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
          <path
            d="M6.75 5.75 9.25 8l-2.5 2.25"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </article>
  );
}
