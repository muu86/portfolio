---
title: Karpenter를 통한 Node AutoScaling 
---

## Karpenter를 통한 Node AutoScaling

우리 서비스는 부하가 크지 않으나 타 업체(**비타포트**, **DB생명**, **LG XBoom**)와 협업으로 **특정 기간** 동안 많은 사용자의 요청을 처리해야했습니다.

- AWS가 제공하는 [**Karpenter**](https://karpenter.sh/) 솔루션
- Cloudwatch 기반으로 동작하는 기존 AWS Autoscailing Group에 비해 클러스터 내에서 동작하는 Karpenter의 Node 프로비저닝 **속도**가 더 빠르므로 선택
- HPA(Horozontal Pod Autoscaling)가 리소스 부족을 감지하고 **2분 ~ 3분** 내외로 Node(EC2)를 프로비저닝하고 **5분** 내 Pod를 구동
- Node.js 부하 테스트 프레임워크인 [**Artillery**](https://www.artillery.io/)로 오토스케일링 테스트
