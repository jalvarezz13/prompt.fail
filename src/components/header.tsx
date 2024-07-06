import Link from "next/link"
import { Pacifico } from "next/font/google"

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" })

const Header = () => {
  return (
    <div className="flex justify-center items-center py-2 pb-5 md:py-4 md:pb-8">
      <Link href="/">
        <h1 className="text-4xl md:text-5xl font-bold text-center" style={pacifico.style}>
          prompt.fail
        </h1>
      </Link>
    </div>
  )
}

export default Header
