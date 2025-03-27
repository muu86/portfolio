---
title: ORM 도입
---


## ORM 도입

Raw Query를 사용하는 기존 소스에서 **타입 안정성**을 강화하기 위해 ORM을 도입했습니다.

- [**Drizzle**](https://orm.drizzle.team/): Drizzle로 개발을 시작했으나 기능적인 제약을 느끼고 MicroORM으로 변경
- [**MicroORM**](https://mikro-orm.io/): **변경 추적** 및 **캐시** 기능을 제공, 객체 지향적인 개발에 적합해서 선택

데이터베이스 스키마의 변경으로 **데이터 마이그레이션**이 큰 도전 과제가 되었습니다.
- Flyway, Liquibase와 같은 마이그레이션 툴을 조사했으나, 데이터를 옮기는 것은 결국 수동 작업이 필수라고 판단
- 기존 데이터를 변환하고 삽입하는 drizzle 코드로 반자동화 작업을 수행
