import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The view from the terrace made the entire trip worthwhile. The flight team was organised and explained every stage clearly.",
    name: "Eleanor Vance",
    location: "United States",
    experience: "Everest Breakfast",
    accent: "gold",
  },
  {
    quote:
      "My father had visited the Everest region many years ago. Returning together as three generations was unforgettable.",
    name: "Rohan Adhikari",
    location: "Nepal / Australia",
    experience: "Family Flight",
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
        From the Terrace
      </p>

      <h2
        id="reviews-heading"
        className="mb-8 font-fraunces text-[clamp(1.8rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Guests who experienced this morning.
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

            <blockquote className="mb-6 font-fraunces text-[17px] italic leading-[1.75] text-[#0A1929]/85">
              “{testimonial.quote}”
            </blockquote>

            <figcaption className="border-t border-[#E2E8F0] pt-4">
              <p className="font-bold text-[#003366]">{testimonial.name}</p>

              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#B8860B]">
                {testimonial.location} · {testimonial.experience}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}