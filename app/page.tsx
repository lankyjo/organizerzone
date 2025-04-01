"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation/Nav";
import Artist from '@/components/Artist/Artist'
import TicketsSection from "@/components/Ticket-section/TicketsSection";
import CountDown from "@/components/CountDown/CountDown";

export default function Home() {
  return (
    <>
      <main className="min-h-[2000px]">
        <Nav />
        <section className=" max-w-[1440px] w-full mx-auto">
          <Hero />
          <Artist/>
          <TicketsSection/>
          <CountDown/>
        </section>
      </main>
    </>
  );
}
