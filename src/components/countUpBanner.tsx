import Link from "next/link"

import CountUp from "react-countup"

import prompts from "@data/prompts.json"
import llms from "@data/llm.json"

const CountUpBanner = () => {
  return (
    <div className="flex flex-col items-center my-5">
      <h3 className="mb-4 text-center text-2xl font-bold">
        <Link
          className="underline underline-offset-4"
          href={"https://github.com/jalvarezz13/prompt.fail"}
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTRIBUTE
        </Link>{" "}
        TO INCREASE THESE NUMBERS!
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col items-center justify-center">
          <CountUp className="text-primary text-6xl font-bold" end={prompts.length} enableScrollSpy={true} scrollSpyDelay={1} />
          <span className="text-xl font-bold">prompts</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <CountUp className="text-primary text-6xl font-bold" end={llms.length} enableScrollSpy={true} scrollSpyDelay={1} />
          <span className="text-xl font-bold">LLMs</span>
        </div>
      </div>
    </div>
  )
}

export default CountUpBanner
