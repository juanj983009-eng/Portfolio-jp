import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 select-none">
      <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#FF4D00] mb-4 block">
        // 404 ERROR
      </span>
      <h1 className="font-sans font-black text-6xl md:text-8xl text-white uppercase tracking-tighter mb-4">
        PAGE NOT FOUND
      </h1>
      <p className="font-sans font-medium text-xs text-zinc-400 uppercase tracking-widest max-w-md mb-8">
        THE REQUESTED ROUTE DOES NOT EXIST OR HAS BEEN MOVED WITHIN THE ARCHITECTURE.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-xl bg-[#FF4D00] text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,77,0,0.4)]"
      >
        RETURN TO HOME
      </Link>
    </div>
  );
}
