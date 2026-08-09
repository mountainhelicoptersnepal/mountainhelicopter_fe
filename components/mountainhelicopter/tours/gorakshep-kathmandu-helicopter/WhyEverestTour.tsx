const reasons = [
  [
    "This route is ideal for trekkers who value time, convenience, and certainty over the lower cost of a two-stage Gorakshep-Lukla-Kathmandu journey. Instead of retracing the trail to Lukla or coordinating additional flights and transfers, you'll fly directly from Gorakshep to Kathmandu, saving days of walking and eliminating unnecessary connections.",
  ],
  ["Reach Kathmandu directly, with no fixed-wing ticket or Ramechhap transfer to arrange separately."],
  ["Skip the risk of a Lukla plane connection being delayed or canceled by weather elsewhere in the system."],
  ["Complete the entire journey from high-altitude Gorakshep to Kathmandu in a single day."],
  ["Move personal gear and essential climbing equipment within your confirmed payload, without a second baggage transfer."],
  ["Share the cost with other passengers on a group-joining seat, or book a private charter for full control over timing."],
  ["Land directly at Kathmandu's Tribhuvan International Airport."],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why Fly from Gorakshep to Kathmandu by Helicopter?
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
