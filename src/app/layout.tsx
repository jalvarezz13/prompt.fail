import type { Metadata } from "next"
import { Readex_Pro } from "next/font/google"

import { Providers } from "./providers"
import Footer from "@components/footer"
import Header from "@components/header"

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
          <div className="mx-auto flex min-h-screen w-full max-w-[1120px] flex-col items-center justify-between gap-2 py-3 px-2.5">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
