const reasons = [
  [
    "The Gosaikunda Helicopter Tour is a practical choice when time, comfort, and direct access matter more than completing a multi-day trekking itinerary. Reaching the lake on foot normally requires several days of steep walking, while a helicopter can reach the area from Kathmandu in less than half an hour under favorable conditions.",
  ],
  ["A shared seat may be requested by a solo traveler, couple, or small group."],
  [
    "A private charter may be requested by a family, pilgrimage group, photography team, or private party.",
  ],
  [
    "The tour can help travellers who cannot undertake the trek, subject to medical fitness and safe boarding requirements.",
  ],
  [
    "A brief puja or respectful contact with the lake may be possible during the landing window.",
  ],
  ["The complete journey can usually be completed in the same morning."],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why fly to Gosaikunda by helicopter?
        </h2>

        <div className="mt-12">
          {reasons.map((group, index) => (
            <article
              key={index}
              className="-mt-px rounded-[18px] border border-[#dbe5ef] bg-white px-8 py-9 md:px-9 md:py-10 mb-2"
            >
              {group.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-manrope text-base leading-8 text-[#203b58]"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
