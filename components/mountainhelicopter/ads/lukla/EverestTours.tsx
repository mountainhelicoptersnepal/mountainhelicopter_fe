import Reveal from "./Reveal";
import ServiceCard from "./ServiceCard";
import { waLink } from "./constants";

export default function EverestTours() {
  return (
    <section id="tours" className="pb-[70px]">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="mb-9 max-w-[700px]">
          <div className="mb-2.5 font-manrope text-[12.5px] font-semibold uppercase tracking-[.16em] text-[#C49A3C]">
            Everest Helicopter Tours
          </div>
          <h2 className="font-fraunces text-[clamp(1.55rem,3.5vw,2.3rem)] font-extrabold tracking-[-.01em] text-[#0d1a2d]">
            See Everest by air. Back in Kathmandu by lunch.
          </h2>
          <p className="mt-3 text-[#4A5B76]">
            No trekking required. Fly over the highest mountains on Earth, land in
            the heart of the Khumbu, and have breakfast facing Everest.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <ServiceCard
              image="/images/experiences/kala-patthar-bg.png"
              imageAlt="Everest helicopter tour landing at Kala Patthar with Mount Everest behind"
              ribbon="Signature Tour"
              flagged
              route="KTM → Lukla → Kala Patthar → HEV → KTM"
              title="Everest Heli Tour with Kala Patthar Landing"
              desc="The complete Everest morning. Mountain overfly across the Khumbu, a landing at Kala Patthar with Everest face to face, then breakfast at Hotel Everest View."
              bullets={[
                "Mountain overfly past Ama Dablam, Nuptse, and Everest",
                "Landing at Kala Patthar (5,545 m), the closest viewpoint of Everest",
                "Breakfast at Hotel Everest View (3,880 m), one of the highest hotels in the world",
                "Roughly 4 hours door to door from Kathmandu",
              ]}
              price="USD 1,150"
              priceNote="/ person"
              ctaLabel="Book Everest Tour"
              ctaHref={waLink(
                "Hi, I want to book the Everest Heli Tour with Kala Patthar landing and breakfast at Hotel Everest View.",
              )}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ServiceCard
              image="/images/home-section/gokyo-valley.jpg"
              imageAlt="Aerial view of the turquoise Gokyo Lakes from a helicopter"
              route="KTM → Gokyo → Overfly → KTM"
              title="Gokyo Lake + Mountain Overfly"
              desc="The quieter side of the Khumbu. Fly over the turquoise Gokyo Lakes beneath Cho Oyu, with the full Everest range on your window."
              bullets={[
                "Overfly the sacred Gokyo Lakes at around 4,750 m",
                "Views of Cho Oyu, Everest, Lhotse, and Makalu",
                "Photo landing subject to weather and permits",
                "Ideal for photographers and repeat visitors",
              ]}
              price="USD 1,150"
              priceNote="/ person"
              ctaLabel="Book Gokyo Tour"
              ctaHref={waLink(
                "Hi, I want to book the Gokyo Lake and mountain overfly helicopter tour.",
              )}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
