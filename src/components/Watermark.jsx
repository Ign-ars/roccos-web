import logo from "../assets/logo.png";

export default function Watermark() {
  return (
    <>
      {/* Derecha */}
      <img
        src={logo}
        alt=""
        className="pointer-events-none fixed right-[-120px] top-1/2 w-[650px] -translate-y-1/2 opacity-[0.05] grayscale blur-[1px] z-0"
      />

      {/* Izquierda (más sutil para balance visual) */}
      <img
        src={logo}
        alt=""
        className="pointer-events-none fixed left-[-150px] top-[30%] w-[500px] opacity-[0.035] grayscale blur-[1.5px] z-0"
      />
    </>
  );
}