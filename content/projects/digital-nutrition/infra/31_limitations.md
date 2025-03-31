---
title: 한계
---

## 한계

- **모니터링**: Prometheus, Grafana를 적용하고 싶었으나, 개발 기간에 쫓겨 적용하지 못하고, **AWS Container Insights** 및 CLI를 통해 대체했습니다.
- **CI/CD**: GitHub Actions로 Helm Chart를 릴리즈했으나, 깃허브 서버에서 클러스터에 접근하므로 **보안 문제**가 있다는 것을 알고 있습니다. **Argo CD** 등의 솔루션이 있으나, **개발 기간** 및 **오버 엔지니어링**을 고려하여 적용하지 않았습니다.
- **기술 부채**: 기존 EC2 AutoScaling으로 전환하는 것을 제안하기도 했으나, 팀원들이 Kubernetes를 유지하기 원하여, 상세한 **인수인계 문서**를 작성했습니다. 퇴사 전, Karpenter 1.0.0 버전이 릴리즈되어 Kubernetes 및 Karpenter **버전 업데이트**를 완료했습니다.
