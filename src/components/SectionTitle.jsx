export default function SectionTitle({ eyebrow, title, text, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "max-w-2xl";

  return (
    <div className={`${alignment} space-y-4`}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-600 md:text-sm">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-600 md:text-lg">{text}</p>
    </div>
  );
}