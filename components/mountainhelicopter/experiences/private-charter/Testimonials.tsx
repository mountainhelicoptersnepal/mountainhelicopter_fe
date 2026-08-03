import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We shared an old family map and a district name. The team researched the route, discussed the likely area and built the flight around our family's history.",
    name: "Deepak Rana",
    experience: "Family Homecoming",
    location: "United Kingdom and Nepal",
    accent: "gold",
  },
  {
    quote:
      "Our multi-day journey connected mountain regions, lakes and private lodges without forcing us into a fixed group itinerary.",
    name: "Amara and Lukas Reinhardt",
    experience: "Private Multi-Day Charter",
    location: "Switzerland",
    accent: "blue",
  },
];

function Rating() {
  return (
    <div className="mb-4 flex gap-1" aria-label="Five out of five stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className="fill-[#F2B632] text-[#F2B632]"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <article aria-labelledby="reviews-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        From the Blank Map
      </p>

      <h2
        id="reviews-heading"
        className="mb-8 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Guests who designed their own journey.
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className={`rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-[0_8px_24px_rgba(0,51,102,0.1)] ${
              testimonial.accent === "gold"
                ? "border-t-4 border-t-[#F2B632]"
                : "border-t-4 border-t-[#003366]"
            }`}
          >
            <Rating />

            <blockquote className="mb-5 font-fraunces text-[17px] italic leading-[1.75] text-[#0A1929]/85">
              “{testimonial.quote}”
            </blockquote>

            <figcaption className="border-t border-[#E2E8F0] pt-4">
              <p className="font-bold text-[#003366]">{testimonial.name}</p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#B8860B]">
                {testimonial.experience} · {testimonial.location}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}