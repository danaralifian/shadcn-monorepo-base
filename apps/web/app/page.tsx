import Image from "next/image";
import { Button } from "@repo/ui";


export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex justify-center w-full px-4 pt-8 pb-6 border backdrop-blur-2xl border-neutral-800 from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4">
          examples/with-tailwind -&nbsp;
          <code className="font-mono font-bold">web</code>
        </p>
        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 lg:static lg:h-auto lg:w-auto">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Vercel Logo"
              className="dark:invert"
              height={24}
              priority
              src="/vercel.svg"
              width={100}
            />
          </a>
        </div>
      </div>

      <div className="relative">
        <Button>
          Test
        </Button>
      </div>
    </main>
  );
}
