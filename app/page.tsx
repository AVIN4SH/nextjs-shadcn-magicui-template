import Meteors from "@/components/magicui/meteors";

export default function Home() {
  return (
    <main className="">
      <div className="relative bg-black flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <Meteors number={30} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-t from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Next JS
        </span>
        <span className="text-white/50 p-4">Shadcn + Magic UI</span>
      </div>
    </main>
  );
}
