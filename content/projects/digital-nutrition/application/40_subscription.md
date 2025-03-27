---
title: 스토어 구독/결제
---


## 스토어 구독/결제

결제 이후 스토어에서 구독의 변경, 취소, 갱신 등의 알림을 처리하는 로직이 없었기 때문에, 이를 실시간으로 처리하는 모듈을 개발했습니다.

- **iOS**: App Store Server Library
- **Android**: Google Cloud Pub/Sub
- **Web**: Port One 정기결제 및 Webhook
