"use client"

import { Pacifico } from "next/font/google"
import { useState, useEffect } from "react"

import { IconBulb } from "@tabler/icons-react"

import { IPrompt } from "@models/index"
import prompts from "@data/prompts.json"
import CountUpBanner from "@components/countUpBanner"
import LlmResults from "@components/llmResults"
import PromptDetails from "@components/promptDetails"

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" })

export default function Home() {
  const [promptSelected, setPromptSelected] = useState<IPrompt | null>(null)

  useEffect(() => {
    setPromptSelected(prompts[Math.floor(Math.random() * prompts.length)])
  }, [])

  const handleChange = (isRandomnessEnabled: boolean) => {
    if (!promptSelected) return

    let nextPromptIndex = -1
    const currentPromptIndex = prompts.findIndex((prompt) => prompt === promptSelected)

    if (isRandomnessEnabled) {
      nextPromptIndex = Math.floor(Math.random() * prompts.length)
      while (nextPromptIndex === currentPromptIndex) {
        nextPromptIndex = Math.floor(Math.random() * prompts.length)
      }
    } else {
      nextPromptIndex = currentPromptIndex === prompts.length - 1 ? 0 : currentPromptIndex + 1
    }

    setPromptSelected(prompts[nextPromptIndex])
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mb-auto gap-4">
      <div className="me-auto flex flex-col gap-1 rounded-xl border-2 border-primary bg-primary p-2 text-white">
        <div className="flex items-center gap-2">
          <IconBulb size={24} />
          <h2 className="text-lg font-bold">
            What is{" "}
            <span className="text-xl" style={pacifico.style}>
              prompt.fail
            </span>
          </h2>
        </div>
        <p className="text-sm">
          <span className="font-bold">prompt.fail</span> is a project dedicated to exploring and documenting techniques for prompt injection
          in large language models (LLMs). Our mission is to enhance the security and robustness of LLMs by identifying and understanding
          how malicious prompts can manipulate these models. By sharing and analyzing these techniques, we aim to build a community that
          contributes to the development of more resilient AI systems.
        </p>
      </div>
      {promptSelected && (
        <>
          <PromptDetails promptSelected={promptSelected} handleChange={handleChange} />
          <LlmResults promptSelected={promptSelected} />
        </>
      )}
      <CountUpBanner />
    </div>
  )
}
