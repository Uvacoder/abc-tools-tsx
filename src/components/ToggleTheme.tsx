'use client'

import cn from 'classnames'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonStarIcon } from '../icons/MoonStarIcon'
import { SunIcon } from '../icons/SunIcon'

type ToggleThemeProps = {
  className?: string
}

export default function ToggleTheme(props: ToggleThemeProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    document.documentElement.classList.toggle('dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <button
      className={cn(props.className, 'flex items-center justify-center text-xl group')}
      onClick={handleThemeToggle}
    >
      {theme === 'light' && <MoonStarIcon className="group-hover:text-amber-300" />}
      {theme !== 'light' && <SunIcon className="group-hover:text-amber-300" />}
    </button>
  )
}
