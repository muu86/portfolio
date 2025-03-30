# 포트폴리오 웹사이트

## 프레임워크, 라이브러리 

- **nextjs** 
- **zustand**
- **content-collections**
- **[react-flow](https://github.com/xyflow/xyflow)**: 소스코드 참고
    - **react-flow**는 특정 ViewPort 컨테이너 안에서 절대적인 위치값을 지정하는 방식으로 동작합니다.
    - ViewPort 안에서 다양한 컨트롤을 지원하고, **d3** 등을 활용하면 대량의 데이터를 다루기에도 효율적입니다.
    - 그러나, 기본 flex, grid 레이아웃 상에서 약간의 재미만 주고 싶은 제 목적과는 맞지 않아 **react-flow** 소스를 참고 및 수정했습니다.
    - **This project uses code from [react-flow](https://github.com/xyflow/xyflow) under the MIT License.**

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

Node마다 unique한 ID를 부여하고, edges에 target node id, edge type 등을 지정하면 svg path를 생성합니다.

원래는 아이콘, 이미지 외에도 마그다운 문서 등 DOM의 다양한 요소들을 path로 연결하고 싶었습니다.
그래서 서버에서 렌더링한 마크다운을 클라이언트 컴포넌트 children으로 전달하도록 Node 컴포넌트를 작성하기도 했습니다.

그러나, 사이트에 자주 사용된 **sticky position**과 관련된 문제로 특정 영역에서만 Node를 연결하는 것으로 수정했습니다.
스크롤 할 때마다 sticky가 적용된 Element의 위치가 재조정되면서 **SVG Path가 튀는 문제**로, Scroll Event Listener로 위치 업데이트가 되기 전에 약간의 시간차로 인해 발생했습니다.


## Markdown

[**@content-collections**](https://www.content-collections.dev/) 라이브러리 사용해서 문서를 구조화했습니다.
```
├── projects
│   ├── digital-nutrition
│   │   ├── application
│   │   │   ├── 0_nextjs.md
│   │   │   ├── 10_api.md
│   │   │   ├── 20_security.md
│   │   │   ├── 30_third-party.md
│   │   │   ├── 40_subscription.md
│   │   │   ├── 50_orm.md
│   │   │   ├── 60_test.md
│   │   │   └── 70_log.md
│   │   └── infra
│   │       ├── 0_terraform.md
│   │       ├── 10_eks.md
│   │       ├── 20_eks-environment.md
│   │       ├── 30_karpenter.md
│   │       ├── 40_alb.md
│   │       ├── 50_lambda.md
│   │       └── 60_cicd.md
│   └── uniitech
│       ├── 0_affiliation.md
│       ├── 10_spring-boot-batch.md
│       └── 20_subscription.md

```

```ts
// content-collections.tsx
// 빌드 타임에 mdx 파싱, 문서 순서 지정하고 JSON 파일 생성.
function getCollection(name: string, directory: string, root: string = "content") {
  return defineCollection({
    name,
    directory: path.join(root, directory),
    include: ["**/*.md", "**/*.mdx"],
    schema: (z) => ({
      title: z.string(),
    }),
    transform: async (document, context) => {
      const mdx = await compileMDX(context, document, {
        remarkPlugins: [],
      });

      return {
        ...document,
        mdx,
        id: path.join(directory, document._meta.path),
        order: parseInt(document._meta.fileName.split("_")[0]),
      };
    },
  });
}
```

```typescript jsx
// Server Component에서 JSON import하여 mdx 렌더링하고 Client Component children으로 전달
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

웹사이트를 방문하는 분들의 지루함을 덜고자 그림이 부족한 section에 Three.js 렌더링을 삽입했습니다.

esset들을 **blender**로 수정하고 [**maximo**의 애니메이션](https://www.mixamo.com/#/?page=1&query=typing)을 적용했습니다.

## Google Analytics, Microsoft Clarity

웹사이트에는 Google Analytics 및 Microsoft Clarity 의 **session recording**과 **heatmap** 기능이 적용되었습니다.
