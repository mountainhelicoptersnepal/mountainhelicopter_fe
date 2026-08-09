const reasons = [
  [
    "When a scheduled flight is delayed or canceled, waiting for the next available departure can mean losing several hours or even a full day. In this situation, a helicopter offers a practical alternative, helping travelers reach Lukla sooner and continue with their trekking, accommodation, and guide arrangements as planned.",
  ],
  ["A delayed or canceled fixed-wing booking can be replaced when a safe helicopter movement is available."],
  [
    "Passengers who have already traveled from Kathmandu to Ramechhap can continue from Ramechhap rather than return by road.",
  ],
  [
    "This flight helps to protect a trekking, expedition, work, or accommodation schedule in the Everest region.",
  ],
  [
    "Shared seats allow solo travelers and couples to split the cost of the helicopter.",
  ],
  [
    "A private charter keeps a family, group, or project team together.",
  ],
  ["Essential baggage can be carried within the confirmed payload."],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why Fly from Ramechhap to Lukla by Helicopter?
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
