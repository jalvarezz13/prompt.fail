import { Chip, useDisclosure } from "@nextui-org/react"
import { IconCircleDashedCheck, IconCircleDashedX, IconCircleDashed } from "@tabler/icons-react"

import llms from "@data/llm.json"
import { ILlm } from "@models/index"
import LlmShareResultModal from "./llmShareResultModal"

const LlmResultItem = ({ llmId, llmValue, promptId }: { llmId: string; llmValue: string; promptId: string }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const llmSelected: ILlm | undefined = llms.find((llm: ILlm) => llm.id === llmId)

  const colorByValue: { [key: string]: "default" | "success" | "danger" } = {
    not_tested: "default",
    passed: "success",
    failed: "danger",
  }

  const textByValue: { [key: string]: string } = {
    not_tested: "Maybe",
    passed: "Passed",
    failed: "Failed",
  }

  const getIconByValue = (value: string) => {
    switch (value) {
      case "not_tested":
        return <IconCircleDashed size={16} />
      case "passed":
        return <IconCircleDashedCheck size={18} />
      case "failed":
        return <IconCircleDashedX size={18} />
      default:
        return <IconCircleDashed size={16} />
    }
  }

  if (!llmSelected) return null

  return (
    <>
      <button
        className="flex h-14 flex-row items-center justify-center gap-2 rounded-xl border-1.5 px-1.5 transition-all hover:scale-105 hover:border-2 hover:border-primary hover:shadow-md md:hover:scale-110"
        onClick={onOpen}
      >
        <img src={llmSelected.icon || llmSelected.organization_icon} alt={llmSelected.name} className="h-10 w-10 rounded-lg" />
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold">{llmSelected.name}</span>
          <Chip size="sm" variant="bordered" color={colorByValue[llmValue]} startContent={getIconByValue(llmValue)}>
            {textByValue[llmValue]}
          </Chip>
        </div>
      </button>
      <LlmShareResultModal isOpen={isOpen} onOpenChange={onOpenChange} promptId={promptId} llm={llmSelected} />
    </>
  )
}

export default LlmResultItem
