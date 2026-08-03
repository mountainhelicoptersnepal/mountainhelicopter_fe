import Image from "next/image";
import Reveal from "./Reveal";

const PHOTOS = [
  {
    src: "/images/everest-base-camp/everest.jpg",
    alt: "Everest range seen from the helicopter cabin",
    caption: "Everest Range",
  },
  {
    src: "/images/fleet/aircraft-1-as350.jpg",
    alt: "Lukla Tenzing-Hillary Airport runway from the air",
    caption: "Lukla Runway",
  },
  {
    src: "/images/experiences/everest-breakfast-bg.png",
    alt: "Breakfast terrace at Hotel Everest View facing Mount Everest",
    caption: "Hotel Everest View",
  },
  {
    src: "/images/experiences/kala-patthar-bg.png",
    alt: "Passengers at the Kala Patthar helicopter landing viewpoint",
    caption: "Kala Patthar",
  },
];

export default function Gallery() {
  return (
    <section className="bg-white pb-[70px]">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <Reveal className="mb-9 max-w-[700px]">
          <div className="mb-2.5 font-jetbrains-mono text-[12.5px] font-semibold uppercase tracking-[.16em] text-[#D99A00]">
            From the Cockpit
          </div>
          <h2 className="font-fraunces text-[clamp(1.55rem,3.5vw,2.3rem)] font-extrabold tracking-[-.01em] text-[#051F49]">
            Every seat is a window seat.
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {PHOTOS.map((photo) => (
            <figure
              key={photo.caption}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#F3F7FD]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(5,31,73,.85))] px-3.5 pb-2.5 pt-5 font-jetbrains-mono text-[11px] uppercase tracking-[.08em] text-white">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
