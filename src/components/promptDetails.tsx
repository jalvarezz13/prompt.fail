"use client"

import { useState } from "react"

import { useTheme } from "next-themes"
import { Link, Button, Tooltip, Textarea } from "@heroui/react"
import { IconArrowsShuffle, IconCopy, IconCopyCheck } from "@tabler/icons-react"

import { IPrompt } from "@models/index"

const PromptDetails = ({
  promptSelected,
  handleChange,
}: {
  promptSelected: IPrompt
  handleChange: (isRandomnessEnabled: boolean) => void
}) => {
  const { theme } = useTheme()

  const [isRandomnessEnabled, setIsRandomnessEnabled] = useState(true)
  const [isRecentlyCopied, setIsRecentlyCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(promptSelected.prompt)
    setIsRecentlyCopied(true)
    setTimeout(() => setIsRecentlyCopied(false), 2000)
  }

  return (
    <div className="relative w-full flex flex-col gap-2">
      <Tooltip
        className="text-gray-700 dark:bg-gray-200 bg-gray-200 dark:text-gray-700"
        content="Copied!"
        placement="left"
        isOpen={isRecentlyCopied}
      >
        <Button isIconOnly color="primary" variant="solid" className="absolute top-[270px] right-[10px] z-10" onClick={() => handleCopy()}>
          {isRecentlyCopied ? <IconCopyCheck color="white" size={20} /> : <IconCopy color="white" size={20} />}
        </Button>
      </Tooltip>
      <Textarea isReadOnly value={promptSelected.prompt} minRows={15} maxRows={15} cacheMeasurements={true} variant="bordered" />
      <div className="flex items-top justify-between">
        <span className="text-xs text-gray-700 dark:text-gray-200">
          {promptSelected.name} by{" "}
          <Link href={promptSelected.contributor.url} className="text-xs" target="_blank" rel="noopener noreferrer">
            {promptSelected.contributor.name}
          </Link>
        </span>
        <div className="flex items-center gap-2">
          <Tooltip
            className="text-gray-700 dark:bg-gray-200 bg-gray-200 dark:text-gray-700"
            content={isRandomnessEnabled ? "Disable randomnes" : "Enable randomness"}
            placement="left"
          >
            <button onClick={() => setIsRandomnessEnabled(!isRandomnessEnabled)}>
              <IconArrowsShuffle
                size={25}
                color={isRandomnessEnabled ? (theme === "dark" ? "#729FCF" : "#3465A4") : theme === "dark" ? "#FFFFFF" : "gray"}
              />
            </button>
          </Tooltip>
          <Button color="primary" className="text-white" onClick={() => handleChange(isRandomnessEnabled)}>
            GENERATE
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PromptDetails
