const reasons = [
  ["A helicopter is the only way to combine a real Kala Patthar landing, close views of the Everest skyline, and a proper breakfast stop at Hotel Everest View in a single day."],
  ["Land at Kala Patthar (5,545m), matching the altitude and view that Everest Base Camp trekkers walk more than a week to reach."],
  ["See Everest, Lhotse, Nuptse, and Ama Dablam at close range in a single day."],
  ["Enjoy a genuine 15- to 20-minute sit-down breakfast at Hotel Everest View, the world's highest-placed hotel."],
  ["Complete the entire experience in 4 to 5 hours, round trip from Kathmandu."],
  ["No trekking fitness, altitude acclimatisation schedule, or multi-day itinerary required."],
  ["Ideal for travellers with limited time in Nepal who still want the signature Everest view and experience."],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why Fly the Everest Mountain Overfly with Kala Patthar Landing and Breakfast at HEV?
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
