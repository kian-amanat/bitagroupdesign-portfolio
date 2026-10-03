export default function Marquee({ items, className = "", speed = 40, reverse = false }) {
  const row = (
    <ul className="flex shrink-0 items-center gap-10 pe-10" aria-hidden>
      {items.map((t, i) => (
        <li key={i} className="flex items-center gap-10 whitespace-nowrap">
          {t}
          <span className="inline-block h-1 w-1 rounded-full bg-current opacity-40" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`flex overflow-hidden ${className}`} dir="ltr">
      <div
        className="flex shrink-0 will-change-transform"
        style={{ animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : ""}` }}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
