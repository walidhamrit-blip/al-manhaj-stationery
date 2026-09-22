import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Palette, Check, Globe } from 'lucide-react'
import { useApp } from '../lib/store'
import { LogoMark } from '../lib/Logo'
import { THEMES } from '../lib/themes'

const NAV = [
  { id: 'home', key: 'navHome' as const },
  { id: 'categories', key: 'navCategories' as const },
  { id: 'products', key: 'navProducts' as const },
  { id: 'about', key: 'navAbout' as const },
  { id: 'contact', key: 'navContact' as const },
]

function ThemeMenu() {
  const { theme, setTheme, lang, t } = useApp()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition hover:opacity-80"
        style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
        aria-label={t('themeLabel')}
      >
        <Palette size={16} style={{ color: 'var(--primary)' }} />
        <span className="hidden sm:inline">{t('themeLabel')}</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className="absolute z-50 mt-2 w-64 rounded-2xl border p-2 shadow-xl"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              insetInlineEnd: 0,
            }}
          >
            <div
              className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--muted)' }}
            >
              {t('themeLabel')}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {THEMES.map((th) => {
                const active = th.id === theme
                return (
                  <button
                    key={th.id}
                    onClick={() => {
                      setTheme(th.id)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2 rounded-xl border p-2 text-start text-sm transition hover:opacity-90"
                    style={{
                      borderColor: active ? 'var(--primary)' : 'var(--border)',
                      background: active ? 'var(--surface-2)' : 'transparent',
                    }}
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg"
                      style={{ background: th.swatch.bg }}
                    >
                      <span
                        className="h-4 w-2 rounded-sm"
                        style={{ background: th.swatch.primary }}
                      />
                      <span
                        className="h-4 w-2 rounded-sm"
                        style={{ background: th.swatch.accent }}
                      />
                    </span>
                    <span className="flex-1 truncate">
                      {lang === 'ar' ? th.nameAr : th.nameEn}
                    </span>
                    {active && (
                      <Check size={14} style={{ color: 'var(--primary)' }} />
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function LangToggle() {
  const { lang, setLang } = useApp()
  return (
    <button
      onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
      className="flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition hover:opacity-80"
      style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
      aria-label="Switch language"
    >
      <Globe size={16} style={{ color: 'var(--primary)' }} />
      <span>{lang === 'ar' ? 'EN' : 'ع'}</span>
    </button>
  )
}

export default function Header() {
  const { t } = useApp()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--surface)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <LogoMark size={38} />
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight" style={{ color: 'var(--text)' }}>
              {t('brand')}
            </div>
            <div className="text-[10px] font-medium" style={{ color: 'var(--muted)' }}>
              {t('location')}
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="rounded-full px-3.5 py-2 text-sm font-medium transition hover:bg-[var(--surface-2)]"
              style={{ color: 'var(--text)' }}
            >
              {t(n.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeMenu />
          <button
            className="rounded-full border p-2 lg:hidden"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t lg:hidden"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <div className="flex flex-col p-3">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-[var(--surface-2)]"
                  style={{ color: 'var(--text)' }}
                >
                  {t(n.key)}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
