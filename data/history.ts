import { ReactNode } from "react"

export type TimelineSize = "sm" | "md" | "lg"
export type TimelineStatus = "completed" | "in-progress" | "pending"
export type TimelineColor =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "destructive"

export interface TimelineElement {
  id: number
  date: string
  title: string
  description: ReactNode
  icon?: ReactNode | (() => ReactNode)
  status?: TimelineStatus
  color?: TimelineColor
  size?: TimelineSize
  loading?: boolean
  error?: string
}

export interface TimelineProps {
  items: TimelineElement[]
  size?: TimelineSize
  animate?: boolean
  iconColor?: TimelineColor
  connectorColor?: TimelineColor
  className?: string
}

type HistoryType = Omit<TimelineElement, "description" | "icon"> & {
  description: string
  icon: string
}

export const itemsDN: HistoryType[] = [
  {
    id: 1,
    status: "completed",
    title: "CI/CD",
    color: undefined,
    date: "2024-05",
    description: `* **GitHub Workflows**로 EC2 및 S3, CloudFront CI/CD 파이프라인 구축.`,
    icon: "githubactions",
  },

  {
    id: 2,
    status: "completed",
    title: "클라우드 아키텍트",
    color: undefined,
    date: "2024-08",
    description: `* **Terraform** 도입.
* **AWS EKS**: **Karpenter**를 활용한 노드 오토스케일링 환경 구축.
* **Helm** 차트 릴리즈, **AWS CloudInsights** 로그 환경 구축.
* **AWS Lambda**, **AWS API Gateway**를 활용한 ThirdParty API 연동 및 AI 서버 연동.
`,
    icon: "kubernetes",
  },
  {
    id: 3,
    status: "completed",
    title: "백엔드 개발",
    color: undefined,
    date: "2024-08",
    description: `* 개발 생산성 향상을 위해 Express.js에서 **NestJS**로 마이그레이션.
* NestJS **Guard**, **OAuth** 기반 역할 기반 인증 구현.
* Typescript Decorator 기반 API 문서(**Swagger**) 생성.
* **Class Validator**, **Class Transformer**.
* ORM 도입(**MikroORM**): 변경 추적, 캐시를 제공하므로 도메인 주도 설계 구현에 용이하므로 선택.
* 테스트: 구독/결제 파트 등 테스트 커버리지가 반드시 필요한 모듈에 **Jest**, **Test Container**로 단위테스트, 통합테스트 자동화.
`,
    icon: "nestjs",
  },
]

export const itemsUni: HistoryType[] = [
  {
    id: 1,
    status: "completed",
    title: "정기배송",
    color: undefined,
    date: "2024-01-01",
    description: `* 건강 설문, 건강 식품 추천 시스템 개발.
* **Spring**, **ExtJS**, **JQuery**.
`,
    icon: "spring",
  },
  {
    id: 2,
    status: "completed",
    title: "업체제휴",
    color: undefined,
    date: "2024-01-01",
    description: `* 업체 간 상품, 주문 데이터 연동.
* **Spring Scheduler**, **REST API**.
`,
    icon: "spring",
  },
  {
    id: 1,
    status: "completed",
    title: "홈앤쇼핑 영업시스템 프레임워크 개선",
    color: undefined,
    date: "2024-01-01",
    description: `* Oracle 프로시저 SpringBoot Batch로 마이그레이션.
`,
    icon: "springboot",
  },
]

export const itemsEdu: HistoryType[] = [
  {
    id: 1,
    status: "completed",
    title: "대일 외국어 고등학교 졸업",
    color: undefined,
    date: "2005-02",
    description: "",
    icon: "graduation-cap",
  },
  {
    id: 2,
    status: "completed",
    title: "한양대학교 법학과 졸업",
    color: undefined,
    date: "2014-02",
    description: "",
    icon: "graduation-cap",
  },
  {
    id: 2,
    status: "completed",
    title: "비트교육센터 수료",
    color: undefined,
    date: "2021-03",
    description: `* Java, Python, Oracle, MongoDB, Redis.
* 필수 기본 수학(선형대수, 통계).
* 파이썬을 활용한 데이터 수집 / 분석 / 시각화.
* 리눅스 서버 구축 실무 - CentOS.
* Hadoop 활용 및 빅데이터 처리.
* Scikit-learn, TensorFlow를 활용한 머신러닝, 딥러닝.
* AWS 활용한 빅데이터 분석.
`,
    icon: "graduation-cap",
  },
]
