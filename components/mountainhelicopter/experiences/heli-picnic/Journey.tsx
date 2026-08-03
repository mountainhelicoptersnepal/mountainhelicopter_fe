const journey = [
  {
    time: "09:30",
    title: "Kathmandu pickup",
    description:
      "Our driver collects you at a comfortable hour. Sunset picnics can begin later in the afternoon.",
  },
  {
    time: "10:00",
    title: "Lift-off over the terraces",
    description:
      "Fly out of the valley above rice terraces, forested hills and silver rivers. The ground team prepares the picnic site before your arrival.",
  },
  {
    time: "10:30",
    title: "Landing at your private ridge",
    description:
      "The table is already set. Cushions are placed, the meal is prepared, and optional champagne is waiting on ice.",
    highlighted: true,
  },
  {
    time: "10:30–13:00",
    title: "Your picnic. Your pace. Your mountain.",
    description:
      "Eat slowly, walk along the ridge, watch the clouds and enjoy the silence. The crew remains available while giving your party privacy.",
    highlighted: true,
  },
  {
    time: "13:00",
    title: "The gentle pack-down",
    description:
      "Take one final walk while the crew removes the setup and leaves the ridge exactly as it was found.",
  },
  {
    time: "13:30",
    title: "Return by a different valley",
    description:
      "When conditions permit, the pilot follows a different scenic route back toward Kathmandu.",
  },
  {
    time: "14:00",
    title: "Kathmandu drop-off",
    description:
      "Return to your hotel after several hours without traffic, crowds or phone notifications.",
  },
];

export default function Journey() {
  return (
    <article aria-labelledby="journey-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        The Journey
      </p>

      <h2
        id="journey-heading"
        className="mb-10 font-fraunces text-[clamp(1.75rem,3.4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        Your day, unhurried by design.
      </h2>

      <ol>
        {journey.map((item, index) => (
          <li key={`${item.time}-${item.title}`} className="relative flex gap-5">
            {index !== journey.length - 1 && (
              <span className="absolute bottom-0 left-[27px] top-14 w-[2px] bg-gradient-to-b from-[#F2B632]/70 to-[#F2B632]/10" />
            )}

            <span
              className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl px-1 text-center text-[10px] font-bold leading-tight ${
                item.highlighted
                  ? "bg-[#F2B632] text-[#003366]"
                  : "bg-[#003366] text-white"
              }`}
            >
              {item.time}
            </span>

            <div className="pb-8 pt-2">
              <h3 className="mb-1 font-bold text-[#0A1929]">{item.title}</h3>

              <p className="text-sm leading-[1.75] text-[#475569]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}