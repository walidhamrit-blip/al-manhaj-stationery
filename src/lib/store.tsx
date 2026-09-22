import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { T, type Lang } from './content'
import type { ThemeId } from './themes'

interface AppState {
  lang: Lang
  setLang: (l: Lang) => void
  theme: ThemeId
  setTheme: (t: ThemeId) => void
  dir: 'rtl' | 'ltr'
  t: (key: keyof typeof T) => string
}

const Ctx = createContext<AppState | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem('noor.lang') as Lang) || 'ar'
  })
  const [theme, setTheme] = useState<ThemeId>(() => {
    return (localStorage.getItem('noor.theme') as ThemeId) || 'emerald'
  })

  const dir: 'rtl' | 'ltr' = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    localStorage.setItem('noor.lang', lang)
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  useEffect(() => {
    localStorage.setItem('noor.theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const value = useMemo<AppState>(
    () => ({
      lang,
      setLang,
      theme,
      setTheme,
      dir,
      t: (key) => T[key]?.[lang] ?? String(key),
    }),
    [lang, theme, dir],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
