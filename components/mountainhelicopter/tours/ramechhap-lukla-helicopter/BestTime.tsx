import { Star } from "lucide-react";

const seasons = [
  {
    name: "Spring",
    months: "March-May",
    completion: "92%",
    visibility: "Excellent",
    status: "Highly Recommended",
    statusClass: "bg-[#2f7f52]",
    rating: 5,
  },
  {
    name: "Autumn",
    months: "Late Sep-Nov",
    completion: "95%",
    visibility: "Excellent",
    status: "Highly Recommended",
    statusClass: "bg-[#2f7f52]",
    rating: 5,
  },
  {
    name: "Winter",
    months: "December-February",
    completion: "68%",
    visibility: "Medium",
    status: "With Caution",
    statusClass: "bg-[#e37928]",
    rating: 3,
  },
  {
    name: "Monsoon",
    months: "June-September",
    completion: "34%",
    visibility: "Low",
    status: "With Caution",
    statusClass: "bg-[#e37928]",
    rating: 2,
  },
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={18}
          fill="currentColor"
          strokeWidth={0}
          className={index < rating ? "text-[#f2ad22]" : "text-[#6e7d8c]"}
        />
      ))}
    </span>
  );
}

export default function BestTime() {
  return (
    <section className="relative overflow-hidden bg-[#0a3158]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/everest-base-camp/everest-base-camp.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#0a3158]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a3158]/45 via-[#0a3158]/68 to-[#061e37]/82" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.32em] text-[#f2ad22]">
            <span className="h-px w-8 bg-[#f2ad22]" />
            Seasons
          </p>

          <h2 className="mx-auto mt-8 max-w-6xl font-fraunces text-4xl font-semibold leading-tight tracking-[0] text-white/90 md:text-5xl">
            Best Time for a Ramechhap-to-Lukla{" "}
            <span className="text-[#f2ad22]">Helicopter Flight.</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-7 md:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
          {seasons.map((season) => (
            <article
              key={season.name}
              className="rounded-md bg-white px-8 py-7 shadow-[0_18px_42px_rgba(3,20,37,0.16)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-fraunces text-xl font-semibold leading-none text-[#00508e]">
                    {season.name}
                  </h3>
                  <RatingStars rating={season.rating} />
                </div>

                <span
                  className={`rounded-sm px-4 py-1.5 font-manrope text-[10px] font-bold uppercase tracking-[0.16em] text-white ${season.statusClass}`}
                >
                  {season.status}
                </span>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-manrope text-xs font-medium uppercase tracking-[0.14em] text-[#18263a]">
                    Months
                  </p>
                  <p className="mt-2 font-manrope text-base text-[#15243a]">
                    {season.months}
                  </p>
                </div>

                <div>
                  <p className="font-manrope text-xs font-medium uppercase tracking-[0.14em] text-[#18263a]">
                    Completion
                  </p>
                  <p className="mt-2 font-manrope text-base text-[#15243a]">
                    {season.completion}
                  </p>
                </div>

                <div>
                  <p className="font-manrope text-xs font-medium uppercase tracking-[0.14em] text-[#18263a]">
                    Visibility
                  </p>
                  <p className="mt-2 font-manrope text-base text-[#15243a]">
                    {season.visibility}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
