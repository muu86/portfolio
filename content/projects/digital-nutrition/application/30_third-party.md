---
title: 써드파티
---


## 써드파티

외부 업체와의 연동을 위해 **AWS API Gateway** 도메인을 공개하고, **AWS Lambda**로 요청을 백엔드 서버로 전송하는 구조로 개발했습니다.

**Lambda**에서 백엔드 서버로 요청을 전달하기 전, 고가용성을 보장하는 **Dynamodb**에 요청을 저장해서 서버 장애에 대비했습니다.

- **비타포트**: 앱과 사운드필 구독권 구매 연동
- **DB생명, Payco**: 협력업체를 통해 가입한 유저에게 무료 쿠폰 제공
- **LG XBoom**: 글로벌 유저를 대상으로 음원을 제공하기 위해 **Cloudfront**, **Lambda@Edge** 활용
