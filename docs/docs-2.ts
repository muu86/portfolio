import { ReactElement } from "react";

export type DocProjectType = {
  title: string;
  doc: string;
};

export type ArchitectureProjectType = DocProjectType & {
  id: string;
};

export type ParsedDocProjectType = {
  title: string;
  doc: ReactElement;
};

export type ParsedArchitectureProjectType = ParsedDocProjectType & {
  id: string;
};

export const applicationDocs: ArchitectureProjectType[] = [
  {
    id: "application-nestjs",
    title: "NestJS 전환",
    doc: `## NestJS 전환
    
**Express.js** 애플리케이션을 **NestJS**로 전환.

- **모듈화된 아키텍쳐의 필요성**: NestJS의 **의존성 주입**, **모듈화된 아키텍처**를 기반으로 개발 패턴을 단순화
- **부가 기능 제공**: 프레임워크 차원에서 제공하는 **요청 검증**, **예외 처리**, **자동화 테스트** 등을 활용하여 생산성
  향상
- **타입 안전성**: NestJS와 **ORM** 도입으로 타입 안전성 확보

- 기존 시스템의 백엔드를 새로 구축해야 하는 부담이 있었으나, 장기적인 서비스 안정성과 확장성을 고려했을 때, 초기 단계에서 체계를 확립하는 것이 중요하다고 판단했습니다.
`,
  },

  {
    id: "application-api",
    title: "API 문서화와 객체 변환, 검증",
    doc: `## API 문서화와 객체 변환, 검증

- NestJS의 **Swagger 모듈**을 사용하여 Typescript **Decorator** 기반으로 API 문서 자동 생성
- **class-validator** 라이브러리를 활용해 유효성 검증
- **class-transformer** 라이브러리로 API Payload 클래스와 DTO 클래스 간의 전환을 개선
`,
  },

  {
    id: "application-security",
    title: "보안",
    doc: `## 보안

- NestJS의 **Guard** 컴포넌트를 활용하여 **OAuth**와 **JWT** 기반의 **역할기반 인증**을 구현 
- 무료와 유료 회원을 Controller에서 동적으로 구분

- **Google**, **Apple**, **Facebook**, **Naver**, **Kakao**와 OAuth 연동`,
  },

  {
    id: "application-third-party",
    title: "써드파티",
    doc: `## 써드파티
    
외부 업체와의 연동을 위해 **AWS API Gateway** 도메인을 공개하고, **AWS Lambda**로 요청을 백엔드 서버로 전송하는 구조로 개발했습니다.

**Lambda**에서 백엔드 서버로 요청을 전달하기 전, 고가용성을 보장하는 **Dynamodb**에 요청을 저장해서 서버 장애에 대비했습니다.
    
- **비타포트**: 앱과 사운드필 구독권 구매 연동
- **DB생명, Payco**: 협력업체를 통해 가입한 유저에게 무료 쿠폰 제공
- **LG XBoom**: 글로벌 유저를 대상으로 음원을 제공하기 위해 **Cloudfront**, **Lambda@Edge** 활용`,
  },

  {
    id: "application-subscription",
    title: "구독/결제",
    doc: `## 스토어 구독/결제
결제 이후 스토어에서 구독의 변경, 취소, 갱신 등의 알림을 처리하는 로직이 없었기 때문에, 이를 실시간으로 처리하는 모듈을 개발했습니다.

- **iOS**: App Store Server Library
- **Android**: Google Cloud Pub/Sub
- **Web**: Port One 정기결제 및 Webhook
`,
  },

  {
    id: "application-orm",
    title: "ORM 도입",
    doc: `## ORM 도입

Raw Query를 사용하는 기존 소스에서 **타입 안정성**을 강화하기 위해 ORM을 도입했습니다. 

- [**Drizzle**](https://orm.drizzle.team/): Drizzle로 개발을 시작했으나 기능적인 제약을 느끼고 MicroORM으로 변경 
- [**MicroORM**](https://mikro-orm.io/): **변경 추적** 및 **캐시** 기능을 제공, 객체 지향적인 개발에 적합해서 선택

데이터베이스 스키마의 변경으로 **데이터 마이그레이션**이 큰 도전 과제가 되었습니다. 
- Flyway, Liquibase와 같은 마이그레이션 툴을 조사했으나, 데이터를 옮기는 것은 결국 수동 작업이 필수라고 판단
- 기존 데이터를 변환하고 삽입하는 drizzle 코드로 반자동화 작업을 수행`,
  },

  {
    id: "application-test",
    title: "테스트 자동화",
    doc: `## 테스트 자동화

별도의 QA 팀이 없는 작은 조직일 수록 자동화된 테스트가 필수적이라고 생각합니다. 그러나 시간 제약으로 모든 기능에 대한
테스트 코드를 작성하는 것은 어려웠습니다.

**구독/결제 파트**만큼은 테스트 코드가 반드시 필요하다고 생각해서 **Jest**, **Test Container** 로 단위 테스트, 통합
테스트를 자동화했습니다.`,
  },

  {
    id: "application-outbound",
    title: "로그 및 메신저 알림",
    doc: `## 로그 및 메신저 알림
- **AWS Container Insights**를 통해 **Cloudwatch**로 로그
- 서버 오류 및 유저 문의를 사내 메신저인 **Google Chat** 과 Webhook 연동
- 오류 전송을 비지니스 로직과 분리하기 위해 NestJS **Event Emitter** 활용`,
  },
];

export const infraDocs: ArchitectureProjectType[] = [
  {
    id: "infra-terraform",
    title: "Terraform 도입",
    doc: `## Terraform 도입 
- **명확한 인프라 정의**: 인프라 구성을 코드로 명시하여, 팀원 누구나 전체 아키텍처를 한눈에 파악

- **모듈화된 재사용성**: Terraform **Module**을 활용하여, 여러 환경(개발, 스테이징, 프로덕션 등)에 동일한 AWS
  리소스를 일관되게 프로비저닝`,
  },

  {
    id: "infra-eks",
    title: "AWS EKS 도입",
    doc: `## AWS EKS 도입
    
기존 백엔드는 Docker Swarm 환경에서 운영되고 있었으나, Docker Swarm은 기본적으로 오토스케일링 기능을 제공하지 않아, 
특히 우리 서비스보다 훨씬 높은 트래픽을 처리하는 협력 기업들과 API 연동을 해야하는 상황에서 **확장성**에 대한 우려가
제기되었습니다. 이에 따라, Docker 컨테이너 환경에서 오토스케일링을 구현하기 위해 ECS Fargate와 EKS를 검토했습니다.

- **ECS Fargate**: 운영이 간편하지만, EC2 기반 인프라에 비해 ECS의 요금이 다소 높게 책정되므로 인스턴스가 늘어날 수록 비용 부담이 커짐

- **EKS**: 클러스터 관리에 필요한 **고정 비용**만으로 운영이 가능해, 장기적으로 볼 때 비용 효율성을 기대할 수
  있어 선택
`,
  },

  {
    id: "infra-alb",
    title: "AWS Load Balancer Controller",
    doc: `## AWS Load Balancer Controller
    
- [**AWS Load Balancer Controller**](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/): EKS Ingress 리소스를 AWS 리소스에 프로비저닝

- **WAF(AWS 관리형 방화벽)**: 퍼블릭에 노출되는 로드 밸런서 보안 강화
`,
  },

  {
    id: "infra-karpenter",
    title: "Karpenter로 오토스케일링 해결",
    doc: `### Karpenter로 오토스케일링 해결
    
우리 서비스는 부하가 크지 않으나 타 업체(**비타포트**, **DB생명**, **LG XBoom**)와 협업으로 **특정 기간** 동안 많은 사용자의 요청을 처리해야했습니다. 

- AWS가 제공하는 [**Karpenter**](https://karpenter.sh/) 솔루션
- Cloudwatch 기반으로 동작하는 기존 AWS Autoscailing Group에 비해 클러스터 내에서 동작하는 Karpenter의 Node 프로비저닝 **속도**가 더 빠르므로 선택
- HPA(Horozontal Pod Autoscaling)가 리소스 부족을 감지하고 **2분 ~ 3분** 내외로 Node(EC2)를 프로비저닝하고 **5분** 내 Pod를 구동
- Node.js 부하 테스트 프레임워크인 [**Artillery**](https://www.artillery.io/)로 오토스케일링 테스트`,
  },

  {
    id: "infra-lambda",
    title: "Lambda로 AI 서버 연결",
    doc: `## Lambda로 AI 서버 연결
   
Flask AI 서버를 컨테이너 기반 **Lambda**로 배포하고 **API Gateway**로 backend 서버와 연결했습니다.
`,
  },

  {
    id: "infra-cicd",
    title: "CI/CD 자동화",
    doc: `## CI/CD 자동화
    
빌드 서버에서 수동으로 이루어지던 빌드/배포 프로세스를 **Github Action**으로 자동화했습니다.

- [WyriHaximus/github-action-helm3](https://github.com/WyriHaximus/github-action-helm3): Github Action 내에서 **Helm** 릴리즈
`,
  },
];

export const uniitechDocs: ArchitectureProjectType[] = [
  {
    id: "uniitech-batch",
    title: "SpringBoot Batch",
    doc: `## Oracle 프로시저를 SpringBoot Batch로 이전 프로젝트

- 회사의 모든 **DB 프로시저**를 **SpringBoot Batch**로 이전하는 프로젝트에 참여
- 모든 개발 인력이 참여한 대규모 프로젝트였기 때문에 기여도는 크지 않으나, 회사에서 사용되는 DB 프로시저를 파악하고
**커머스 전반에 걸친 프로세스**를 학습
`,
  },

  {
    id: "uniitech-affiliation",
    title: "타업체 제휴 프로젝트",
    doc: `## 타업체 제휴 프로젝트

업체 간 상품 및 주문 연동 프로젝트

- **API 연동**: 제공된 REST API 명세에 따라 상품 데이터 연동
- **자동화된 데이터 업데이트**: **Spring Scheduler**로 데이터베이스 업데이트
- **오류 처리 및 재시도 로직**: DB 플래그 값으로 실패 재시도 로직 구현`,
  },

  {
    id: "uniitech-subscription",
    title: "정기 배송 프로젝트",
    doc: `## 정기 배송 프로젝트 (건강 보조 식품)

회사의 첫 정기 배송 프로젝트로 건강 보조 식품의 정기 배송 시스템을 구축
- 기존 상품과 정기 배송 상품을 구분, PG사 정기결제 서비스를 연동
- 유저에게 건강 설문을 시행하고, 설문 결과에 따라 맞춤형 건강 식품을 추천하는 시스템을 구축하는 업무를 맡았습니다.
- 백오피스 시스템 개발: **Spring**, **Extjs**, **JQuery**를 활용하여 고객 설문을 생성하고 수정하는 프로그램을
  개발했습니다. 설문 답변마다 점수를 부여하고, 고객 설문 결과에 따라 적합한 건강 식품을 추천하는 로직을 구현했습니다.`,
  },
];
