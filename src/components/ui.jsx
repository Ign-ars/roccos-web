export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[2rem] border border-slate-100 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-2xl px-6 py-3 font-semibold transition-all duration-300 active:scale-[0.97] hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Input({ className = "", ...props }) {
  return (
    <input
      className={`h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-slate-900 outline-none transition focus:border-red-400 focus:ring-4 focus:ring-red-100 ${className}`}
      {...props}
    />
  );
}

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full rounded-2xl border border-slate-200 bg-white p-4 text-slate-900 outline-none transition focus:border-red-400 focus:ring-4 focus:ring-red-100 ${className}`}
      {...props}
    />
  );
}