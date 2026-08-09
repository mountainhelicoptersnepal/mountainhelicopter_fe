const reasons = [
  [
    "A helicopter is selected when direct access, time, and flexibility are more important than obtaining the lowest transport price.",
  ],
  [
    "You will fly directly from Kathmandu, skipping the long drive to Ramechhap and reaching Lukla in just 40-45 minutes, saving valuable travel time.",
  ],
  [
    "You can enjoy breathtaking Himalayan views throughout the flight and book a private charter for your family, trekking group, or expedition team.",
  ],
  [
    "You can request a helicopter if your scheduled Lukla flight is canceled or delayed, and carry trekking baggage within the permitted weight allowance.",
  ],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why fly from Kathmandu to Lukla by helicopter?
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
