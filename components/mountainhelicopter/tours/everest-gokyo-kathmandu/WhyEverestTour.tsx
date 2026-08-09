const reasons = [
  [
    "A helicopter is the fastest and most direct way to see the Everest region, and this tour combines its two defining experiences: a close aerial view of Everest and a real landing beside the turquoise Gokyo lakes, all in a single day from Kathmandu.",
  ],
  ["See Everest, Lhotse, Nuptse, and Ama Dablam at close range from the air."],
  [
    "Land at Gokyo Lake for five to ten minutes, one of the highest freshwater lake systems in the world, without the multi-day trek to reach it on foot.",
  ],
  ["Complete the entire experience in 3.5 to 4 hours, round trip from Kathmandu."],
  [
    "Every passenger gets an equal share of close-up flying time near Everest and a full landing at Gokyo Lake, with the route flown to give each traveler the same experience of the Everest skyline from the air.",
  ],
  [
    "Ideal for travelers who want the Gokyo Lake landing as the priority, with the Everest skyline as a close aerial highlight.",
  ],
];

export default function WhyEverestTour() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-28">
        <h2 className="text-center font-fraunces text-2xl font-semibold leading-none tracking-[0] text-[#061a3a] sm:text-[42px]">
          Why Fly Over Mount Everest with a Gokyo Lake Landing from Kathmandu?
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
