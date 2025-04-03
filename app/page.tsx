"use client";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation/Nav";
import useAppContext from "@/components/utils/hooks/useAppContext";
import useFormatEventData from "@/components/utils/hooks/useFormatEvent";
import useGetter from "@/components/utils/hooks/useGetter";
import { useEffect } from "react";
import Artist from "@/components/Artist/Artist";
// import TicketsSection from "@/components/Ticket-section/TicketsSection";
import CountDown from "@/components/CountDown/CountDown";
import Footer from "@/components/Footer/Footer";
import Sponsors from "@/components/Sponsors/Sponsors";
import Moments from "@/components/Moments/Moments";
import { classifyEvents } from "@/components/utils/contextAPI/helperFunctions";
import TicketsSection from "@/components/Ticket-section/TicketsSection";

export default function Home() {
  const { setEvents, setOrganizer, setClassyFieldEVents } = useAppContext();
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
      const classifieldEvents = classifyEvents(events);
      setClassyFieldEVents(classifieldEvents);
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
        <Artist />
        {/* <Moments/> */}
        <TicketsSection />
        <Sponsors />
        <CountDown />
        <Footer />
      </main>
    </>
  );
}
