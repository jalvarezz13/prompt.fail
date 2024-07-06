"use client"

import { useRouter } from "next/navigation"

import { NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <NextThemesProvider attribute="class" storageKey="theme">
      <NextUIProvider navigate={router.push}>{children}</NextUIProvider>
    </NextThemesProvider>
  )
}
