const entries = [
  {
    title: "비트교육센터",
    description: ["클라우드 기반 빅데이터 전문가 양성 과정(6개월)"],
    period: "20.09 - 21.03",
  },
  {
    title: "한양대학교(법학과)",
    description: [],
    period: "05.03 - 13.03",
  },
  {
    title: "대일외국어고등학교",
    description: [],
    period: "02.03 - 05.02",
  },
];

export function Education() {
  return (
    <section className="mt-20">
      <h1 className="border-b-2 border-b-black p-4 text-xl font-bold">교육</h1>
      <div className="flex flex-col">
        <div className="my-4 flex flex-col">
          {entries &&
            entries.map((entry, index) => (
              <Entry key={index} title={entry.title} descriptions={entry.description} period={entry.period} />
            ))}
        </div>
      </div>
    </section>
  );
}

type ArticleProps = {
  title: string;
  descriptions: string[];
  period: string;
};

function Entry({ title, descriptions, period }: ArticleProps) {
  return (
    <article className="relative grid h-full grid-cols-12 divide-x-2 divide-black">
      <div className="col-span-2 h-full py-4">
        <time className="items -center flex justify-center text-sm" dateTime="2022-09-05">
          {period}
        </time>
      </div>
      <div className="col-span-10 col-start-3 h-full py-4 pl-4">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">{title}</h2>

        {descriptions.length > 0 && (
          <ul className="list-disc">
            {descriptions.map((description, index) => (
              <li key={index} className="mt-2 ml-4 text-sm text-wrap text-zinc-600 dark:text-zinc-400">
                {description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
