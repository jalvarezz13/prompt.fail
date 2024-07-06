"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value)
  }

  if (!mounted) return null

  return (
    <select
      value={theme}
      onChange={handleSelectionChange}
      aria-label="Theme switcher"
      className="w-fit bg-transparent outline-none text-sm text-black dark:text-white"
      style={{ WebkitAppearance: "none", MozAppearance: "none" }}
    >
      <option className="text-sm text-black" value="system">
        System
      </option>
      <option className="text-sm text-black" value="light">
        Light
      </option>
      <option className="text-sm text-black" value="dark">
        Dark
      </option>
    </select>
  )
}

export default ThemeSwitcher
