"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation/Nav";

export default function Home() {
  return (
    <>
      <main className="min-h-[2000px]">
        <Nav />
        <section className=" max-w-[1440px] w-full mx-auto">
          <Hero />
        </section>
      </main>
    </>
  );
}
