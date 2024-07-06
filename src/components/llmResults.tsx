import { IPrompt } from "@models/index"
import LlmResultItem from "@components/llmResultItem"

const LlmResults = ({ promptSelected }: { promptSelected: IPrompt }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-1.5 md:gap-2.5">
      {Object.keys(promptSelected.results).map((llmId: string) => (
        <LlmResultItem key={llmId} llmId={llmId} llmValue={promptSelected.results[llmId]} promptId={promptSelected.id} />
      ))}
    </div>
  )
}

export default LlmResults
