import { GrainyBlobGradient } from "../grainy-blob"

export function Hero() {
  return (
    <div className="w-full relative bg-[#FFF] h-[80vh] overflow-hidden">
      <GrainyBlobGradient />
      <div className="absolute max-w-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-800 font-bold space-y-4 dark:text-gray-200">
        <h1>안녕하세요.</h1>
        <h1>풀스택 개발자 김민제입니다.</h1>
      </div>
    </div>
  )
}
