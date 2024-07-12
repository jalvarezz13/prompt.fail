import Link from "next/link"
import { Pacifico } from "next/font/google"

const pacifico = Pacifico({ subsets: ["latin"], weight: "400" })

const MaintenanceBanner = () => {
  return (
    <div className="mt-auto flex gap-3 flex-col justify-center items-center py-2">
      <Link href="/">
        <h1 className="text-5xl font-bold text-center" style={pacifico.style}>
          prompt.fail
        </h1>
      </Link>
      <span className="text-sm italic text-center mt-4 font-medium">Big things start small. Stay tuned! 🚀</span>
    </div>
  )
}

export default MaintenanceBanner
