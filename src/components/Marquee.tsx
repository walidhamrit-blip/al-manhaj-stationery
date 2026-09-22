import { Sparkles } from 'lucide-react'
import { useApp } from '../lib/store'

export default function Marquee() {
  const { t } = useApp()
  const items = [
    t('marquee1'),
    t('marquee2'),
    t('marquee3'),
    t('marquee4'),
    t('marquee5'),
  ]
  // duplicate for a seamless -50% loop
  const loop = [...items, ...items]

  return (
    <div
      className="marquee-mask relative overflow-hidden border-y py-3 text-sm font-semibold"
      style={{
        borderColor: 'var(--border)',
        color: 'var(--primary-fg)',
        backgroundImage: 'linear-gradient(100deg, var(--primary), var(--accent), var(--accent-2))',
        backgroundSize: '200% 100%',
        animation: 'gradient-pan 12s ease infinite',
      }}
    >
      <div className="marquee-track">
        {loop.map((text, i) => (
          <span key={i} className="mx-6 inline-flex items-center gap-2">
            <Sparkles size={15} className="opacity-90" />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
