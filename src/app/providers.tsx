"use client"

import { useRouter } from "next/navigation"

import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <NextThemesProvider attribute="class" storageKey="theme">
      <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>
    </NextThemesProvider>
  )
}
