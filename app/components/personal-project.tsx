import Link from "next/link";

export function PersonalProject() {
  return (
    <section className="mx-auto mt-32 mb-32 w-full max-w-7xl">
      <div className="border-t-2 border-t-black py-4">
        <h1 className="text-xl font-bold">개인 프로젝트</h1>
      </div>

      <div className="flex flex-col gap-8 py-8">
        <div>
          <h2 className="text-xl font-bold">포트폴리오 웹사이트</h2>
          <Link href="https://github.com/muu86/portfolio" target="_blank" className="inline-block font-bold underline">
            https://github.com/muu86/portfolio
          </Link>
          <p className="mt-4 text-sm text-gray-500">Next.js, Vercel, Tailwind, Shadcn, MDX</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">동네 육아맘 찾기</h2>
          <Link
            href="https://github.com/muu86/mysns-springboot"
            target="_blank"
            className="inline-block font-bold underline"
          >
            https://github.com/muu86/mysns-springboot
          </Link>

          <p className="mt-4 text-sm text-gray-500">SpringBoot, PostgreSQL, GraphQL</p>
          <p className="mt-4 text-sm text-gray-500">데이터베이스의 Spatial Query를 이용해서 위치 기반 SNS를 구현</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">골프 스윙 분석 AI</h2>
          <Link
            href="https://github.com/muu86/golfriend-front-update2"
            target="_blank"
            className="inline-block font-bold underline"
          >
            https://github.com/muu86/golfriend-front-update2
          </Link>
          <p className="mt-4 text-sm text-gray-500">Python, Flask, LSTM, Yolo</p>

          <p className="mt-4 text-sm text-gray-500">
            골프 스윙 분석을 위해서 스윙 동영상을 8개의 구분 동작 이미지로 분류하는 RNN 모델
          </p>
        </div>
      </div>
    </section>
  );
}
