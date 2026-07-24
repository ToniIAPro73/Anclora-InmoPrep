export function ProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div
      className="h-2 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--color-line)_60%,transparent)]"
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-emerald to-harbor transition-[width] duration-500 ease-premium"
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
