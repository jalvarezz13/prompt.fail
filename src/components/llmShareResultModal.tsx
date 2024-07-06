"use client"

import { useState } from "react"

import { IconCircleDashedCheck, IconCircleDashedX } from "@tabler/icons-react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Chip, Button } from "@nextui-org/react"

import { IPrompt, ILlm } from "@/models"
import { createClient } from "@/utils/supabase/client"

const LlmShareResultModal = ({
  isOpen,
  onOpenChange,
  promptId,
  llm,
}: {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  promptId: string
  llm: ILlm
}) => {
  const supabase = createClient()
  const [optionSelected, setOptionSelected] = useState<"passed" | "failed" | undefined>(undefined)

  const handleSubmit = async () => {
    const { error } = await supabase.from("result").insert({
      llm_id: llm.id,
      prompt_id: promptId,
      result: optionSelected,
    })

    if (error) {
      // Error toast here
      console.error(error)
      return error
    }

    // Success toast here
    onOpenChange(false)
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Share your result</ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <img src={llm.icon || llm.organization_icon} alt={llm.name} className="h-10 w-10 rounded-lg" />
                  <span className="text-lg font-bold">{llm.name}</span>
                </div>

                <span className="text-center text-md">Has this prompt worked on this LLM?</span>

                <div className="flex gap-3 my-4">
                  <Chip
                    size="lg"
                    className={`cursor-pointer ${(optionSelected === "failed" || optionSelected === undefined) && "opacity-50"}`}
                    variant="bordered"
                    color="success"
                    onClick={() => setOptionSelected("passed")}
                    startContent={<IconCircleDashedCheck size={18} />}
                  >
                    Passed
                  </Chip>
                  <Chip
                    size="lg"
                    className={`cursor-pointer ${(optionSelected === "passed" || optionSelected === undefined) && "opacity-50"}`}
                    variant="bordered"
                    color="danger"
                    onClick={() => setOptionSelected("failed")}
                    startContent={<IconCircleDashedX size={18} />}
                  >
                    Failed
                  </Chip>
                </div>

                <span className="text-center text-xs font-normal text-gray-700 dark:text-gray-200">
                  Your result will be validated by the community before being displayed. Please do not share false information.
                </span>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" isDisabled={optionSelected === undefined} className="text-white" onPress={handleSubmit}>
                Send
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default LlmShareResultModal
