"use client"

import { TabsList } from "@radix-ui/react-tabs"
import { Tabs, TabsContent, TabsTrigger } from "./ui/tabs"
import { Badge } from "./ui/badge"
import { SimpleIcon } from "./simple-icon"
import type { Tech } from "@/data/tech-stack"

type Props = {
  used: Tech[][]
  personalUsed: Tech[][]
}

export function TechTabs({ used, personalUsed }: Props) {
  return (
    <Tabs defaultValue="used" className="w-full min-h-[500px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="used">다루는 기술</TabsTrigger>
        <TabsTrigger value="personalUsed">공부하는 기술</TabsTrigger>
      </TabsList>
      <TabsContent value="used" className="mt-8 ">
        <div className="my-1">
          {used.map((techChunk, i) => (
            <div key={i} className="*:m-1">
              {techChunk.map((tech) => (
                <Badge
                  variant="outline"
                  asChild
                  key={tech.slug}
                  className="text-foreground h-full align-middle"
                >
                  <div>
                    {tech.slug && (
                      <SimpleIcon slug={tech.slug} className="size-4" />
                    )}
                    <span className="text-base">{tech.name}</span>
                  </div>
                </Badge>
              ))}
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="personalUsed" className="mt-8">
        <div className="my-1">
          {personalUsed.map((techChunk, i) => (
            <div key={i} className="*:m-1">
              {techChunk.map((tech) => (
                <Badge
                  variant="outline"
                  asChild
                  key={tech.slug}
                  className="text-foreground h-full align-middle"
                >
                  <div>
                    {tech.slug && (
                      <SimpleIcon slug={tech.slug} className="size-4" />
                    )}
                    <span className="text-base">{tech.name}</span>
                  </div>
                </Badge>
              ))}
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
