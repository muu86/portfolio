export function PersonalProject() {
  return (
    <section className="mx-auto mt-32 mb-32 w-full max-w-4xl">
      <div className="border-t-2 border-t-black py-4">
        <h1 className="text-xl font-bold">개인 프로젝트</h1>
      </div>

      <div className="flex flex-col gap-8 py-8">
        <div>
          <h2 className="text-xl font-bold">포트폴리오 웹사이트</h2>
          <p className="mt-4 text-sm text-gray-500">nextjs, vercel</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">동네 육아맘 찾기</h2>
          <p className="mt-4 text-sm text-gray-500">springboot, postgresql</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">골프 스윙 분석 AI</h2>
          <p className="mt-4 text-sm text-gray-500">lstm, yolo, python, flask</p>
        </div>
      </div>
    </section>
  );
}
