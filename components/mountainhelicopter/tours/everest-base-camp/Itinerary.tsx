const itineraryItems = [
  {
    number: "01",
    title: "Hotel Pickup in Kathmandu",
    description: [
      "We will pick you up from your Kathmandu hotel in a private vehicle and confirm your pickup time and hotel address the evening before the flight.",
      "If your hotel is located in Thamel, Lazimpat or central Kathmandu then pickup takes 15-20 minutes to reach the Tribhuban International Airport.",
    ],
  },
  {
    number: "02",
    title: "Arrival at Tribhuvan International Airport (Domestic Terminal)",
    description: [
      "After the pickup you are directly taken to the Tribhuvan International Airport. There at the airport our ground team will have already processed your permit documentation the previous day, and at the helipad you will undergo weight checking of luggage and passenger.",
    ],
  },
  {
    number: "03",
    title: "Departure From Kathmandu",
    description: [
      "The helicopter will lift from Kathmandu heading northeast and immediately you will be seeing the open view of Kathmandu valley, the city, temples etc. Within 10 minutes there will be a view of Himalayan foothills and the first line of middle hills. Our pilot provides live commentary, identifying landmarks and peaks as they appear.",
    ],
  },
  {
    number: "04",
    title: "Refueling Stop at Lukla, Tenzing-Hillary Airport(2,860m)",
    description: [
      "The helicopter will lift from Kathmandu heading northeast and immediately you will be seeing the open view of Kathmandu valley, the city, temples etc. Within 10 minutes there will be a view of Himalayan foothills and the first line of middle hills. Our pilot provides live commentary, identifying landmarks and peaks as they appear.",
    ],
  },
  {
    number: "05",
    title: "Flyover at Namche Bazaar (3,440m)",
    description: [
      "Namche Bazaar is a cool place that is shaped like a horseshoe. It is the start of the Khumbu and also the way into the Khumbu. On Saturdays the market in Namche Bazaar is a lot of fun. You can see the market place. There are bakeries and teahouses everywhere. All the terraces in Namche Bazaar will be full of people on Saturdays. This is where all trekkers spend their mandatory first rest day.",
    ],
  },
  {
    number: "06",
    title: "Flyover at Tengboche Monastery (3,860m)",
    description: [
      "A most holy site for the Buddhists in the region, located on the edge of a steep cliff ridge in between Imja and Dudh Kosi valley. It is the most famous Buddhist monastery in the Khumbu region. This monastery was built in 1916 and was destroyed by the 1934 earthquake, it was rebuilt but again burned in a fire in 1989 and then restored again in 1993. On clear autumn days, the sound of monks praying echoes in the valley.",
    ],
  },
  {
    number: "07",
    title: "Landing at Periche (4,240m)",
    description: [
      "The helicopter lands at Pheriche, the high-altitude village at 4,240m that serves as the shuttle base point for the onward journey to Everest Base Camp. There is a medical clinic run by the Himalayan Rescue Association specifically for altitude sickness. When the group consists of 4 or 5 passengers, the helicopter conducts 2 shuttle runs from Pheriche to Everest Base Camp. The first group of passengers is flown up to Everest Base Camp and lands for a few minutes on the ground, allowing passengers to step out, take photographs, and take in the raw scale of the Khumbu Glacier, the Khumbu Icefall, and the expedition tents surrounding them, before being flown back to Pheriche. The helicopter then takes the second group of passengers for the same experience. Once both shuttle runs are complete, all passengers are reunited at Pheriche and board the helicopter together for the combined return flight to Kathmandu.",
    ],
  },
  {
    number: "08",
    title: "Return Flight to Kathmandu from Pheriche",
    description: [
      "Once both shuttle groups have completed their Everest Base Camp landing, all passengers are gathered at Pheriche for a combined return flight to Kathmandu. We follow our route back down through the Khumbu Valley, past Tengboche, across Namche, over the Dudh Koshi gorge, with a possible fuel stop in Lukla, and then south over the foothills back to Kathmandu. This is a short 45-55 minute flight. We pick you up from the airport and drop you off right at your hotel in Kathmandu. By before mid-morning you are back and all afternoon is yours.",
    ],
  },
];

const itineraryBackgroundImage =
  "https://plus.unsplash.com/premium_photo-1697729961187-c70c5f520227?h=1200&w=2000&crop=faces,edges&auto=format&fit=crop&q=80&ixlib=rb-4.1.0";

export default function Itinerary() {
  return (
    <section
      id="itinerary"
      className="relative scroll-mt-36 overflow-hidden bg-[#002347]"
    >
      <img
        src={itineraryBackgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 bg-[#002347]/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Know Your Destination
          </p>

          <h2 className="mt-4 font-fraunces text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            Your Journey,
            <br />
            <span className="text-[#f0ad1f]">Step by Step.</span>
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1120px] md:mt-20">
          <div className="absolute bottom-0 left-[20px] top-0 w-px bg-[#e0a321] md:left-[23px]" />

          <div className="space-y-10 md:space-y-14">
            {itineraryItems.map((item, index) => (
              <article
                key={item.number}
                className="relative grid grid-cols-[42px_minmax(0,1fr)] gap-5 md:grid-cols-[48px_minmax(0,1fr)] md:gap-7"
              >
                <div
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-manrope text-[12px] font-bold md:h-[42px] md:w-[42px] ${
                    index === 0
                      ? "border-[#004d93] bg-[#005da8] text-[#f0ad1f] shadow-[0_0_0_4px_rgba(0,93,168,0.25)]"
                      : "border-[#d9e4ee] bg-white text-[#7b92a9]"
                  }`}
                >
                  {item.number}
                </div>

                <div className="pb-1 pt-1">
                  <h3 className="font-fraunces text-lg font-semibold leading-7 text-white md:text-xl">
                    {item.title}
                  </h3>

                  <div className="mt-3 space-y-1 font-manrope text-sm font-medium leading-7 text-white/90">
                    {item.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
