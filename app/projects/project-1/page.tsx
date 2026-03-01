"use client"

import Image from "next/image"
import Link from "next/link"

const BLUE = "#002FA7"

const projects = [
  {
    href: "/projects/project-1",
    img: "/mock-up.jpeg",
    left: "VINYL",
    right: "ILLUSTRATIEF",
  },
  {
    href: "/projects/project-2",
    img: "/IMG_8821.jpeg",
    left: "FOTO",
    right: "SERIE",
  },
  {
    href: "/projects/project-3",
    img: "/IMG_8831.jpeg",
    left: "FOTO",
    right: "DETAIL",
  },
  {
    href: "/projects/project-1",
    img: "/IMG_8678.JPG",
    left: "MOTION",
    right: "STILL",
  },
]

export default function PortfolioProjectsGrid() {
  return (
    <main className="bg-[#fbfbf6]">
      <div className="mx-auto max-w-[1200px] px-10 py-10">
        {/* Topbar */}
        <header className="grid grid-cols-12 items-center text-[13px] tracking-[0.18em] uppercase">
          <div className="col-span-4">
            <span style={{ color: BLUE }} className="font-semibold">
              Robin Studio
            </span>
          </div>

          <div className="col-span-4 text-center">
            <button style={{ color: BLUE }} className="hover:underline underline-offset-4" type="button">
              Menu
            </button>
          </div>

          <div className="col-span-4 text-right">
            <button style={{ color: BLUE }} className="hover:underline underline-offset-4" type="button">
              Search
            </button>
          </div>
        </header>

        {/* Big title */}
        <h1
          className="mt-10 text-[92px] leading-[0.9] font-extrabold tracking-tight"
          style={{ color: BLUE }}
        >
          PROJECTS
        </h1>

        {/* Grid */}
        <section className="mt-8 grid grid-cols-12 gap-8">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              href={p.href}
              img={p.img}
              captionLeft={p.left}
              captionRight={p.right}
              col="col-span-12 md:col-span-3"
            />
          ))}
        </section>

        {/* Explore */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/projects"
            className="rounded-full border px-8 py-3 text-[13px] tracking-[0.22em] uppercase font-semibold"
            style={{ borderColor: BLUE, color: BLUE }}
          >
            Explore
          </Link>
        </div>

        {/* Bottom statement */}
        <p
          className="mt-14 text-center text-[12px] leading-5 tracking-[0.2em] uppercase max-w-[900px] mx-auto"
          style={{ color: BLUE }}
        >
          SELECTED PROJECTS — TYPOGRAPHY, IMAGE AND RHYTHM. CLEAN GRID FOR USER TESTING AND LAYOUT COMPARISON.
        </p>

        <style jsx global>{`
          @media (prefers-reduced-motion: no-preference) {
            .pcard {
              transition: transform 180ms ease;
            }
            .pcard:hover {
              transform: translateY(-2px);
            }
            .pcard .sharp {
              transition: transform 220ms ease;
            }
            .pcard:hover .sharp {
              transform: scale(1.01);
            }
          }
        `}</style>
      </div>
    </main>
  )
}

function ProjectCard({
  img,
  captionLeft,
  captionRight,
  href,
  col,
}: {
  img: string
  captionLeft: string
  captionRight: string
  href: string
  col: string
}) {
  return (
    <Link href={href} className={`${col} block pcard`}>
      {/* Vast editorial kader */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
        {/* Blur background (vult altijd mooi op) */}
        <Image
          src={img}
          alt=""
          fill
          className="object-cover scale-110 blur-2xl opacity-35"
          sizes="(min-width: 768px) 25vw, 100vw"
          priority={false}
        />

        {/* Sharp image volledig zichtbaar */}
        <Image
          src={img}
          alt={captionLeft}
          fill
          className="sharp object-contain"
          sizes="(min-width: 768px) 25vw, 100vw"
          priority={false}
        />
      </div>

      {/* Caption zoals voorbeeld */}
      <div className="mt-3 flex justify-between text-[11px] tracking-[0.18em] uppercase">
        <span style={{ color: BLUE }} className="font-semibold">
          {captionLeft}
        </span>
        <span style={{ color: BLUE }} className="font-semibold">
          {captionRight}
        </span>
      </div>
    </Link>
  )
}