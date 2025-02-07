'use client';

import Image from "next/image";
import TypewriterLoop from "./typeloop";
import Navbar from "./NavBars";

export default function FrontPage() {
  return (
    <section
      id="home"
    >

    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gradient animate-fadeIn">
              HELL - DIVERS
            </h1>
          <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              <TypewriterLoop />
            </li>
            <li>WE KNOW YOU, AND WE WILL FIND YOU!.</li>
          </ol>

          <a
            href="/contato"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 right-0 m-4 rounded-full flex items-center justify-center text-sm sm:text-base"
            title="Entrar em contato"
            >
          </a>

          <div className="flex flex-col items-center">
            <div className="flex gap-2">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/builds"
                rel="noopener noreferrer"
                >
                <Image
                  className="dark"
                  src="/website.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                  />
                Our Builds?
              </a>
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="/quem-somos"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark"
                  src="/person.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                  />
                What we are?
              </a>
            </div>
            <a
              className="mt-2 rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://discord.gg/EEdJPfTuma"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image
                className="dark"
                src="/curriculum.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
                />
              Discord
            </a>
          </div>
        </main>

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
    </div>
              </section>
  );
}
