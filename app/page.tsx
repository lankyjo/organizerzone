"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation/Nav";
import useAppContext from "@/components/utils/hooks/useAppContext";
import useFormatEventData from "@/components/utils/hooks/useFormatEvent";
import useGetter from "@/components/utils/hooks/useGetter";
import { useEffect } from "react";
import Artist from "@/components/Artist/Artist";
import TicketsSection from "@/components/Ticket-section/TicketsSection";
import CountDown from "@/components/CountDown/CountDown";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const { setEvents, setOrganizer } = useAppContext();
  const { data: eventData } = useGetter(
    `event/user-events/${process.env.NEXT_PUBLIC_USER_ID}`
  );
  const events = useFormatEventData(eventData?.data);
  const { data: user } = useGetter(
    `user/public?usernameSlug=${process.env.NEXT_PUBLIC_USER_NAME}`
  );

  useEffect(() => {
    if (events?.length) {
      setEvents(events);
    }
    if (user?.data) {
      setOrganizer(user?.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, user?.data]);

  return (
    <>
      <main className="min-h-[2000px]">
        <Nav />
        <Hero />
        <div className="bg-black  w-full">
          <section className="  w-full max-w-[1440px] mx-auto ">
            <Artist />
            <TicketsSection />
            <CountDown />
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}
