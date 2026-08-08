import Hero from "@/components/mountainhelicopter/fleet/Hero";
import Overview from "@/components/mountainhelicopter/fleet/Overview";
import Showcase from "@/components/mountainhelicopter/fleet/Showcase";
import Aircraft from "@/components/mountainhelicopter/fleet/Aircraft";

export default function FleetPage() {
  return (
    <>
      <Hero />
      <Showcase />
      <Overview />
      <Aircraft />
    </>
  );
}
