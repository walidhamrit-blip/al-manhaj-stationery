export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Noor logo"
    >
      <rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="var(--primary)" />
      {/* open book */}
      <path
        d="M24 14.5c-2.8-1.9-6.1-2.6-9.6-2.2-.8.1-1.4.8-1.4 1.6v16.3c0 .9.8 1.6 1.7 1.5 3-.3 5.9.3 8.3 1.9.6.4 1.4.4 2 0 2.4-1.6 5.3-2.2 8.3-1.9.9.1 1.7-.6 1.7-1.5V13.9c0-.8-.6-1.5-1.4-1.6-3.5-.4-6.8.3-9.6 2.2Z"
        fill="var(--primary-fg)"
      />
      <path
        d="M24 15.5v18.6"
        stroke="var(--primary)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* pen nib accent */}
      <path
        d="M33.5 30.5l3.7 3.7-1.4 3.6-3.6 1.4-3.7-3.7 5-5Z"
        fill="var(--accent)"
      />
      <circle cx="30.6" cy="36.4" r="1" fill="var(--primary)" />
      {/* chip nodes */}
      <circle cx="15.5" cy="35.5" r="1.4" fill="var(--accent)" />
      <circle cx="20" cy="35.5" r="1.4" fill="var(--accent)" opacity="0.6" />
    </svg>
  )
}
