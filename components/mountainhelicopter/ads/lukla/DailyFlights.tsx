import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";
import { waLink } from "./constants";

export default function DailyFlights() {
  return (
    <section id="flights" className="py-[70px]">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="mb-9 max-w-[700px]">
          <div className="mb-2.5 font-jetbrains-mono text-[12.5px] font-semibold uppercase tracking-[.16em] text-[#D99A00]">
            Daily Flights · Everyday Departure
          </div>
          <h2 className="font-fraunces text-[clamp(1.55rem,3.5vw,2.3rem)] font-extrabold tracking-[-.01em] text-[#051F49]">
            The Everest Gateway, every direction, every single day.
          </h2>
          <p className="mt-3 text-[#4A5B76]">
            Fly in to start your trek, fly out when it ends, or fly straight home
            from Gorak Shep without walking back to Lukla.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <ServiceCard
              image="/images/everest-base-camp/everest.jpg"
              imageAlt="Helicopter approaching Lukla Tenzing-Hillary Airport from Kathmandu"
              ribbon="Everyday Departure"
              flagged
              route="KTM → LUA · One Way"
              title="Kathmandu to Lukla"
              desc="Direct from Kathmandu's domestic terminal to Tenzing-Hillary Airport. Start your trek the same morning."
              bullets={[
                "Departs every day on the morning weather window",
                "About 45 minutes in the air",
                "10 kg baggage per person, airport assistance included",
                "Free date change on weather cancellation",
              ]}
              price="USD 550"
              priceNote="/ person"
              ctaLabel="Book Flight"
              ctaHref={waLink(
                "Hi, I want to book a Kathmandu to Lukla helicopter seat.",
              )}
              ctaVariant="gold"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ServiceCard
              image="/images/fleet/aircraft-1-as350.jpg"
              imageAlt="Trekkers boarding a helicopter at Lukla for the return flight to Kathmandu"
              ribbon="Everyday Departure"
              flagged
              route="LUA → KTM · One Way"
              title="Lukla to Kathmandu"
              desc="Trek finished? Get back from Everest to Kathmandu the same day. Book ahead or message us from the trail."
              bullets={[
                "Departs every day, weather permitting",
                "Beat the fixed wing backlog after weather days",
                "Book on WhatsApp from anywhere on the trail",
                "Same rate as the outbound leg",
              ]}
              price="USD 550"
              priceNote="/ person"
              ctaLabel="Book Return"
              ctaHref={waLink(
                "Hi, I want to book a Lukla to Kathmandu helicopter seat.",
              )}
            />
          </Reveal>
          <Reveal delay={0.16}>
            <ServiceCard
              image="/images/everest-base-camp/everest-gallary1.jpg"
              imageAlt="Helicopter pickup at Gorak Shep near Everest Base Camp"
              route="GORAK SHEP → KTM · One Way"
              title="Gorak Shep to Kathmandu"
              desc="Reached Base Camp? Skip the three day walk back to Lukla. Morning pickup from Gorak Shep, lunch in Kathmandu."
              bullets={[
                "Pickup at 5,164 m, the last stop before EBC",
                "Save 3 trekking days on the return",
                "Shuttle via Pheriche or Lukla by load and weather",
                "Confirm from the trail on WhatsApp",
              ]}
              price="USD 1,200"
              priceNote="/ person"
              ctaLabel="Book Pickup"
              ctaHref={waLink(
                "Hi, I want a helicopter pickup from Gorak Shep to Kathmandu after my EBC trek.",
              )}
            />
          </Reveal>
        </div>

        <Reveal className="mt-[18px] text-[13.5px] text-[#4A5B76]">
          <p>
            Round trip bookings get priority seating on both legs. Private charter
            for the full aircraft (up to 5 passengers) available on any route.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
