export default function FloatingWhatsApp() {
  const PHONE = "56956674596";

  const handleWhatsApp = () => {
    const message =
      "Hola, me gustaría obtener más información sobre sus servicios.";
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      aria-label="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-white shadow-2xl shadow-green-300/40 transition duration-300 hover:scale-105 hover:bg-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 fill-white"
      >
        <path d="M16 .4C7.3.4.4 7.3.4 16c0 2.8.7 5.5 2 7.9L.2 32l8.3-2.1c2.3 1.2 4.9 1.8 7.5 1.8 8.7 0 15.6-6.9 15.6-15.6S24.7.4 16 .4zm0 28.7c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.2 1.3-4.7-.3-.5c-1.3-2-2-4.3-2-6.8C2.9 8.5 8.5 2.9 16 2.9S29.1 8.5 29.1 16 23.5 29.1 16 29.1zm7.4-10.8c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-2.3-1.1-3.8-2-5.3-4.5-.4-.6.4-.6 1.1-2 .1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.5s1.5 4.1 1.7 4.4c.2.3 3 4.6 7.2 6.4 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z" />
      </svg>

      <span className="hidden sm:inline text-sm font-semibold">
        WhatsApp
      </span>
    </button>
  );
}