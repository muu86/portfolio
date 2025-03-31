# 포트폴리오 웹사이트

## 프레임워크, 라이브러리 

- **nextjs**, **vercel** 배포 
- **zustand**
- **content-collections**
- **[react-flow](https://github.com/xyflow/xyflow)**: 소스코드 참고
    - **react-flow**는 특정 ViewPort 컨테이너 안에서 절대적인 위치값을 지정하는 방식으로 동작합니다.
    - 그러나, 기본 flex, grid 레이아웃 상에서 약간의 재미만 주고 싶은 제 목적과는 맞지 않아 **react-flow** 소스를 참고 및 수정했습니다.
    - **This project uses code from [react-flow](https://github.com/xyflow/xyflow) under the MIT License.**
- **three.js**: 3D 모델링은 관심만 가지고 있는 단계지만, 웹사이트를 방문하는 사람들의 지루함을 덜고자 그림이 부족한 영역에 적용했습니다.

## SVG

```typescript jsx
<Node
  id="application-app-store"
position={Position.Right}
edges={[{ id: "application-api-gateway" }]}
>
  <Image src="/misc/app-store.svg" alt={"app-store-icon"} width={32} height={32} />
</Node>
```

[소스](lib/flow)

Node마다 unique한 ID를 부여하고, edges에 target node id, edge type 등을 지정하면 svg path를 생성합니다. 아이콘, 이미지 외에도 마그다운 문서 등 DOM의 다양한 요소들을 path로 연결하고 싶었습니다.
그래서 서버에서 렌더링한 마크다운을 Client Component children으로 전달하도록 Node 컴포넌트를 작성했습니다. 

### Scroll 할 때 SVG가 튀는 문제

사이트에 자주 사용된 **sticky position**과 관련된 문제를 마주했습니다.
스크롤 할 때마다 sticky가 적용된 Element의 위치가 재조정되면서 **SVG Path가 튀는 문제**가 발생했습니다.
Scroll Event Listener에서 이루어지는 위치 업데이트의 시간차를 해결하지 못 했습니다. 

결국, 전체 DOM에 Path를 적용한다는 원래 목적은 이루지 못 하고 특정 영역에서만 SVG를 적용하는 것으로 타협했습니다.

## Scroll

IntersectionObserver API를 사용했습니다.

### 엣지 하이라이트

특정 문서가 스크롤 혹은 선택되면, 엣지 하이라이트를 적용했습니다.

- 스크롤 모듈과 엣지 모듈을 분리하고, [브릿지 컴포넌트](components/flow-selector.tsx)를 두었습니다.

- 엣지와 스크롤 아이템 간의 연결 정보는 [하드코딩](config/id-to-edges.ts)했습니다.


## 마크다운

[**@content-collections**](https://www.content-collections.dev/) 라이브러리 사용해서 문서를 [구조화](content/projects/digital-nutrition/application)했습니다.


빌드 타임에 content-collections가 [마크다운을 파싱](content-collections.ts)하고 생성한 JSON을 서버 렌더링했습니다.

```typescript jsx
export async function Application() {
  const docs = allDigitalNutritionApplications.sort((a, b) => a.order - b.order);
  
  return (
    // ...

    {docs.map((doc) => (
      <ScrollItem key={doc.id} id={doc.id}>
        <ArchitectureDoc id={doc.id}>
          <MDXContent code={doc.mdx} components={myComponents} />
        </ArchitectureDoc>
      </ScrollItem>
      ))}
    
    // ...
  )
}
```

## Three.js

기존 asset들을 **blender**로 수정해서 사용했습니다.

asset
- [캐릭터](https://poly.pizza/m/6jUuCHmQ1I)
- [가구](https://assetstore.unity.com/packages/3d/props/interior/interior-low-poly-3d-models-pack-193487)
- [기타](https://market.pmnd.rs)

animation
- [**Mixamo** 애니메이션](https://www.mixamo.com/#/?page=1&query=typing)을 적용했습니다.
