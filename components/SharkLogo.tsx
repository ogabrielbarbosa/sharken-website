export default function SharkLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="sharkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.78 0.22 255)" />
          <stop offset="100%" stopColor="oklch(0.45 0.26 258)" />
        </linearGradient>
      </defs>
      <path d="M24 4 L42 36 L32 36 L28 28 L20 28 L16 36 L6 36 Z" fill="url(#sharkGrad)" />
      <path d="M20 28 L24 20 L28 28 Z" fill="#05070d" />
      <circle cx="24" cy="42" r="2" fill="oklch(0.78 0.22 255)" />
    </svg>
  );
}
