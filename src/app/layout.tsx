import Link from "next/link"
import type { Metadata } from "next"
import { Readex_Pro } from "next/font/google"

import { Providers } from "./providers"
import Footer from "@components/footer"
import Header from "@components/header"
import MaintenanceBanner from "@/components/maintenanceBanner"

import "@styles/globals.css"

const readexPro = Readex_Pro({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "prompt.fail",
  description:
    "Explore prompt injection techniques in large language models (LLMs), providing examples to improve LLM security and robustness.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={readexPro.className} suppressHydrationWarning={true}>
        <Providers>
          {/* <div className="mx-auto flex min-h-screen w-full max-w-[1120px] flex-col items-center justify-between gap-2 py-3 px-2.5">
            <Header />
            {children}
            <Footer />
          </div> */}
          <div className="mx-auto flex min-h-screen w-full max-w-[1120px] flex-col items-center justify-center gap-2 py-3 px-2.5">
            <MaintenanceBanner />
            <span className="mt-auto mb-2 text-center text-xs font-normal text-gray-700 dark:text-gray-200">
              Made with ❤️ by{" "}
              <Link
                className="text-xs text-primary"
                href="https://www.linkedin.com/in/jalvarezz13/"
                target="_blank"
                rel="noopener noreferrer"
              >
                jalvarezz13
              </Link>
            </span>
          </div>
        </Providers>
      </body>
    </html>
  )
}
