import { Header } from "@/components/header";
import Link from "next/link";
import { Footer } from "@/components/footer";
import ImageCard from "@/components/imageCard";
import  Event  from "@/components/event";


export default function Home() {
  return (
    <>
      <Header/>

    <section className="events-section">
      <h1>Volunteer Opportunities</h1>

  <div className="events-grid">

        <Event/>
  </div>
   </section>

      <Footer/>
    </>
  );
}