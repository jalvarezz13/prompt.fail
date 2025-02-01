import { Link } from "@heroui/react"

import ThemeSwitcher from "@components/themeSwitcher"

const Footer = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center w-full gap-2">
        <Link className="text-sm" href={"/credits"}>
          Credits
        </Link>
        <span className="text-4xl">·</span>
        <Link className="text-sm" href={"https://github.com/jalvarezz13/prompt.fail"} target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        <span className="text-4xl">·</span>
        <ThemeSwitcher />
      </div>
      <span className="mb-2 text-center text-xs font-normal text-gray-700 dark:text-gray-200">
        Made with ❤️ by{" "}
        <Link className="text-xs" href="https://www.linkedin.com/in/jalvarezz13/" target="_blank" rel="noopener noreferrer">
          jalvarezz13
        </Link>
      </span>
    </div>
  )
}

export default Footer
