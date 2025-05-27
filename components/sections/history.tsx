import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { TimelineLayout } from "../timeline/timeline-layout"
import { itemsDN, itemsEdu, itemsUni } from "@/data/history"
import { SimpleIcon } from "../simple-icon"
import { GraduationCap } from "lucide-react"

function HistoryMarkdown({ content }: { content: string }) {
  return <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
}

export function History() {
  return (
    <section
      id="history"
      className="mt-24 flex flex-col items-center px-2 md:px-0 scroll-m-24"
    >
      <div>
        <h2 className="font-semibold text-xl">디지털 뉴트리션</h2>
        <p className="text-muted-foreground">사운드 테라피 서비스</p>
        <TimelineLayout
          animate
          className="grow w-full max-w-4xl mx-auto p-8 flex items-center justify-center"
          connectorColor="primary"
          iconColor="primary"
          items={itemsDN.map((d) => ({
            ...d,
            description: <HistoryMarkdown content={d.description} />,
            icon: <SimpleIcon slug={d.icon} />,
          }))}
          size="md"
        />
      </div>

      <div className="mt-16">
        <h2 className="font-semibold text-xl">유니아이텍</h2>
        <p className="text-muted-foreground">커머스 SI 프로젝트</p>
        <TimelineLayout
          animate
          className="grow w-full max-w-4xl mx-auto p-8 flex items-center justify-center"
          connectorColor="primary"
          iconColor="primary"
          items={itemsUni.map((d) => ({
            ...d,
            description: <HistoryMarkdown content={d.description} />,
            icon: <SimpleIcon slug={d.icon} />,
          }))}
          size="md"
        />
      </div>

      <div className="mt-16">
        <h2 className="font-semibold text-xl">교육</h2>
        <TimelineLayout
          animate
          className="grow w-full max-w-4xl mx-auto p-8 flex items-center justify-center"
          connectorColor="primary"
          iconColor="primary"
          items={itemsEdu.map((d) => ({
            ...d,
            description: <HistoryMarkdown content={d.description} />,
            icon: <GraduationCap />,
          }))}
          size="md"
        />
      </div>
    </section>
  )
}
