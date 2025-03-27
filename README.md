# 포트폴리오 웹사이트

This project uses code from [react-flow](https://github.com/xyflow/xyflow) under the MIT License.  

[**react-flow**](https://github.com/xyflow/xyflow)의 소스코드를 참고했습니다.

## SVG

**react-flow**는 특정 ViewPort 컨테이너 안에서 절대적인 위치값을 지정하는 방식으로 동작합니다. 혹은 **d3** 라이브러리를 통한 레이아웃을 자동 적용할 수도 있습니다.
```ts
const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 }, 
  },
]
```
ViewPort 안에서 Panning, Zoom in/out 등의 컨트롤이 가능하고, 대량 데이터를 효율적으로 처리합니다.

그러나, 저는 flex, grid 기본 레이아웃 아래에서 약간의 재미만 주고 싶어서 **react-flow**를 조금 수정했습니다.

