import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Package,
  Truck,
  ShieldCheck,
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react'
import { AppProvider, useApp } from './lib/store'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Marquee from './components/Marquee'
import { LogoMark } from './lib/Logo'
import {
  CATEGORIES,
  PRODUCTS,
  WHATSAPP_DISPLAY,
  EMAIL,
  buildWhatsAppLink,
  type CategoryId,
} from './lib/content'

const WhatsAppGlyph = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.437-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
  </svg>
)

function DirArrow({ size = 16 }: { size?: number }) {
  const { dir } = useApp()
  return dir === 'rtl' ? <ArrowLeft size={size} /> : <ArrowRight size={size} />
}

function Hero() {
  const { t, dir } = useApp()
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="anim-blob absolute -top-32 h-80 w-80 rounded-full blur-3xl"
          style={{ background: 'var(--primary)', opacity: 0.18, insetInlineStart: '-4rem' }}
        />
        <div
          className="anim-blob absolute top-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: 'var(--accent)', opacity: 0.16, insetInlineEnd: '-3rem', animationDelay: '-5s' }}
        />
        <div
          className="anim-blob absolute bottom-0 left-1/2 h-64 w-64 rounded-full blur-3xl"
          style={{ background: 'var(--accent-2)', opacity: 0.14, animationDelay: '-9s' }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold"
            style={{ borderColor: 'var(--border)', color: 'var(--primary)', background: 'var(--surface)' }}
          >
            <MapPin size={13} /> {t('heroKicker')}
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl">
            <span className="text-gradient">{t('heroTitle')}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--muted)' }}>
            {t('heroSub')}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundImage: 'linear-gradient(100deg, var(--primary), var(--accent))' }}
            >
              {t('heroCta1')} <DirArrow />
            </a>
            <a
              href={buildWhatsAppLink(t('brandFull'), 'ar')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition hover:bg-[var(--surface-2)]"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              <WhatsAppGlyph size={18} /> {t('heroCta2')}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold" style={{ color: 'var(--muted)' }}>
            <span>{t('wholesaleRetail')}</span>
            <span className="h-1 w-1 rounded-full" style={{ background: 'var(--muted)' }} />
            <span>{t('tagline')}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div
            className="anim-float overflow-hidden rounded-3xl border shadow-2xl"
            style={{ borderColor: 'var(--border)' }}
          >
            <img src="/hero.jpg" alt="Store" className="h-[420px] w-full object-cover" />
          </div>
          <div
            className="anim-float-slow absolute bottom-4 flex items-center gap-3 rounded-2xl border p-3 shadow-xl"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
              insetInlineStart: dir === 'rtl' ? 'auto' : '-1rem',
              insetInlineEnd: dir === 'rtl' ? '-1rem' : 'auto',
            }}
          >
            <LogoMark size={44} />
            <div className="leading-tight">
              <div className="text-sm font-extrabold" style={{ color: 'var(--text)' }}>
                {t('brandFull')}
              </div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>
                {t('location')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features() {
  const { t } = useApp()
  const items = [
    { icon: Package, tt: 'featWholesaleT', dd: 'featWholesaleD', c: 'var(--primary)' },
    { icon: Truck, tt: 'featDeliveryT', dd: 'featDeliveryD', c: 'var(--accent)' },
    { icon: ShieldCheck, tt: 'featWarrantyT', dd: 'featWarrantyD', c: 'var(--accent-2)' },
    { icon: MessageCircle, tt: 'featSupportT', dd: 'featSupportD', c: 'var(--primary)' },
  ] as const

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => {
          const Icon = it.icon
          return (
            <motion.div
              key={it.tt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border p-5"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)', borderTop: `3px solid ${it.c}` }}
            >
              <span
                className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md"
                style={{ backgroundImage: `linear-gradient(135deg, ${it.c}, color-mix(in srgb, ${it.c} 55%, var(--accent)))` }}
              >
                <Icon size={20} />
              </span>
              <h3 className="text-sm font-bold" style={{ color: 'var(--text)' }}>
                {t(it.tt)}
              </h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {t(it.dd)}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

function SectionHead({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {kicker && (
        <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>
          {kicker}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mt-3 text-base" style={{ color: 'var(--muted)' }}>{sub}</p>}
    </div>
  )
}

function Categories({ onSelect }: { onSelect: (c: CategoryId) => void }) {
  const { lang, t } = useApp()
  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
      <SectionHead title={t('catTitle')} sub={t('catSub')} />
      <div className="grid gap-5 md:grid-cols-3">
        {CATEGORIES.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => onSelect(c.id)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border text-start"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="relative aspect-[5/4] overflow-hidden">
              <img
                src={c.image}
                alt={lang === 'ar' ? c.nameAr : c.nameEn}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-xl font-extrabold text-white">
                  {lang === 'ar' ? c.nameAr : c.nameEn}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-white/80">
                  {lang === 'ar' ? c.descAr : c.descEn}
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold"
                  style={{ background: 'var(--primary)', color: 'var(--primary-fg)' }}
                >
                  {t('catView')} <DirArrow size={13} />
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}

function Products({ filter, setFilter }: { filter: CategoryId | 'all'; setFilter: (f: CategoryId | 'all') => void }) {
  const { lang, t } = useApp()
  const tabs: { id: CategoryId | 'all'; label: string }[] = [
    { id: 'all', label: t('filterAll') },
    ...CATEGORIES.map((c) => ({ id: c.id, label: lang === 'ar' ? c.nameAr : c.nameEn })),
  ]
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)

  return (
    <section id="products" className="border-y py-16 sm:py-20" style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead kicker={t('brand')} title={t('prodTitle')} sub={t('prodSub')} />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const active = filter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className="rounded-full border px-4 py-2 text-sm font-semibold transition"
                style={{
                  borderColor: active ? 'var(--primary)' : 'var(--border)',
                  background: active ? 'var(--primary)' : 'var(--surface)',
                  color: active ? 'var(--primary-fg)' : 'var(--text)',
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  const { t } = useApp()
  const stats = [
    { v: 'stat1', l: 'stat1L' },
    { v: 'stat2', l: 'stat2L' },
    { v: 'stat3', l: 'stat3L' },
  ] as const
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>
            {t('aboutKicker')}
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: 'var(--text)' }}>
            {t('aboutTitle')}
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {t('aboutBody')}
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.v} className="rounded-2xl border p-4 text-center" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                <div className="text-2xl font-extrabold" style={{ color: 'var(--primary)' }}>{t(s.v)}</div>
                <div className="mt-1 text-xs font-medium" style={{ color: 'var(--muted)' }}>{t(s.l)}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          <img src="/products/textbooks.jpg" alt="" className="anim-float h-52 w-full rounded-2xl border object-cover" style={{ borderColor: 'var(--border)' }} />
          <img src="/products/laptop.jpg" alt="" className="anim-float-slow mt-8 h-52 w-full rounded-2xl border object-cover" style={{ borderColor: 'var(--border)', animationDelay: '-2s' }} />
          <img src="/products/pens.jpg" alt="" className="anim-float-slow h-52 w-full rounded-2xl border object-cover" style={{ borderColor: 'var(--border)', animationDelay: '-4s' }} />
          <img src="/products/childrenbooks.jpg" alt="" className="anim-float mt-[-1rem] h-52 w-full rounded-2xl border object-cover" style={{ borderColor: 'var(--border)', animationDelay: '-3s' }} />
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  const { t, lang } = useApp()
  const rows = [
    { icon: MapPin, l: t('contactAddress'), v: t('contactAddressV') },
    { icon: Phone, l: t('contactPhone'), v: WHATSAPP_DISPLAY },
    { icon: Clock, l: t('contactHours'), v: t('contactHoursV') },
    { icon: Mail, l: t('contactEmail'), v: EMAIL },
  ]
  return (
    <section id="contact" className="border-t py-16 sm:py-20" style={{ borderColor: 'var(--border)', background: 'var(--surface-2)' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead kicker={t('contactKicker')} title={t('contactTitle')} />
        <div className="grid gap-5 md:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {rows.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.l} className="rounded-2xl border p-5" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                  <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: 'var(--surface-2)', color: 'var(--primary)' }}>
                    <Icon size={18} />
                  </span>
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>{r.l}</div>
                  <div className="mt-1 text-sm font-semibold" style={{ color: 'var(--text)' }} dir="ltr">{r.v}</div>
                </div>
              )
            })}
          </div>

          <div
            className="flex flex-col justify-center rounded-3xl border p-8 text-center"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <div className="mx-auto mb-4">
              <LogoMark size={56} />
            </div>
            <h3 className="text-xl font-extrabold" style={{ color: 'var(--text)' }}>{t('brandFull')}</h3>
            <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{t('tagline')}</p>
            <a
              href={buildWhatsAppLink(t('brandFull'), lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition hover:opacity-90 active:scale-[0.98]"
              style={{ background: '#25D366', color: '#052e16' }}
            >
              <WhatsAppGlyph size={20} /> {t('contactWaBtn')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useApp()
  return (
    <footer className="py-10" style={{ background: 'var(--bg)' }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-start sm:px-6">
        <div className="flex items-center gap-2.5">
          <LogoMark size={34} />
          <div className="text-sm font-bold" style={{ color: 'var(--text)' }}>{t('brandFull')}</div>
        </div>
        <div className="text-xs" style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} {t('brand')} — {t('footerRights')} · {t('footerMade')}
        </div>
      </div>
    </footer>
  )
}

function FloatingWhatsApp() {
  const { t, dir } = useApp()
  return (
    <a
      href={buildWhatsAppLink(t('brandFull'), 'ar')}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition hover:scale-105 active:scale-95"
      style={{ background: '#25D366', insetInlineEnd: '1.25rem' }}
      aria-label="WhatsApp"
    >
      <WhatsAppGlyph size={28} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ background: '#25D366', animationDuration: dir ? '2.5s' : '2.5s' }} />
    </a>
  )
}

function Site() {
  const [filter, setFilter] = useState<CategoryId | 'all'>('all')
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Categories
          onSelect={(c) => {
            setFilter(c)
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
        <Products filter={filter} setFilter={setFilter} />
        <About />
        <Marquee />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Site />
    </AppProvider>
  )
}
