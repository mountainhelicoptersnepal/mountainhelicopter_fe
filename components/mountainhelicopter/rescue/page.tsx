import Costs from "./Costs";
import EmergencyDispatch from "./EmergencyDispatch";
import FaqRescue from "./FaqRescue";
import Fleet from "./Fleet";
import Insurance from "./Insurance";
import Process from "./Process";
import Regions from "./Regions";
import RescueHero from "./RescueHero";
import WhenToCall from "./WhenToCall";

export default function RescuePage() {
  return (
    <>
      <RescueHero />
      <Regions />
      <WhenToCall />
      <Process />
      <Fleet />
      <Insurance />
      <Costs />
      <EmergencyDispatch />
      <FaqRescue />
    </>
  );
}
