export type BlogSection =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "table";
      columns: string[];
      rows: string[][];
    };

export type BlogPost = {
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  internalLinks: { label: string; href: string }[];
  content: BlogSection[];
  faqs: { question: string; answer: string }[];
  cta: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "helicopter-tour-nepal-cost-2026",
    image: "/images/blogs/blog-bg.jpg",
    imageAlt: "Mountain helicopter flying above Himalayan ridgelines",
    category: "Price Guide",
    title: "How Much Does a Helicopter Tour in Nepal Cost in 2026?",
    excerpt:
      "See 2026 prices for Everest, Annapurna, Muktinath, Langtang, and Kathmandu Valley helicopter tours, with group and private charter guidance.",
    date: "3 August 2026",
    dateTime: "2026-08-03",
    readTime: "7 min read",
    metaTitle: "Helicopter Tour Cost in Nepal 2026: Full Price Guide",
    metaDescription:
      "How much does a helicopter tour in Nepal cost? See 2026 prices for Everest, Annapurna, and Muktinath, group vs private rates, and what is included.",
    focusKeyword: "helicopter tour nepal cost",
    secondaryKeywords: [
      "helicopter tour nepal price",
      "how much does helicopter tour cost in nepal",
      "cheapest helicopter tour nepal",
    ],
    internalLinks: [
      { label: "Everest Base Camp tour", href: "/tours/everest-base-camp" },
      { label: "Muktinath pilgrimage", href: "/tours/muktinath-pilgrimage" },
      { label: "Book a flight", href: "/contact" },
    ],
    content: [
      {
        type: "paragraph",
        text: "A helicopter tour in Nepal costs between USD 300 and USD 1,400 per person in 2026, depending on the route, the season, and whether you join a group or book the whole aircraft. Everest flights sit at the top of that range. Shorter flights around Kathmandu Valley sit at the bottom.",
      },
      {
        type: "paragraph",
        text: "Prices rose across the market in early 2026 after aviation fuel costs jumped, so quotes older than a year are no longer reliable. The longer answer is more useful, because two people can pay very different prices for the same view.",
      },
      { type: "heading", text: "Helicopter Tour Prices by Route" },
      {
        type: "table",
        columns: ["Route", "Price per person", "Duration"],
        rows: [
          ["Everest Base Camp with landing", "USD 1,250 to 1,400", "About 4 hours"],
          ["Annapurna Base Camp from Pokhara", "USD 500 to 600", "2 to 3 hours"],
          ["Muktinath from Kathmandu", "USD 1,100 to 1,200", "4 to 5 hours"],
          ["Muktinath from Pokhara", "USD 650 to 800", "2 to 3 hours"],
          ["Langtang Valley", "USD 400 to 500", "2 hours"],
          ["Kathmandu Valley", "USD 300 to 400", "1 hour"],
        ],
      },
      {
        type: "paragraph",
        text: "Private charters cost more in total but can be cheaper per seat if you fill the aircraft. A private Everest charter runs between USD 5,500 and 6,500 for up to five passengers in 2026. A private Muktinath charter from Kathmandu costs around USD 5,400, and from Pokhara around USD 3,000.",
      },
      { type: "heading", text: "What the Price Includes" },
      {
        type: "list",
        items: [
          "Hotel pickup and drop in Kathmandu",
          "All flight permits and airport taxes",
          "The landing stop, where the route includes one",
          "A window-view seat; every seat has a clear view",
          "Oxygen on board for high-altitude routes",
        ],
      },
      {
        type: "paragraph",
        text: "Two extras catch travellers by surprise on Everest flights. Breakfast at Everest View Hotel is usually an add-on of USD 30 to 40 per person. Nepal's park and airport taxes for the Everest route, about NPR 7,000 per person, are payable in cash before departure.",
      },
      { type: "heading", text: "How to Pay Less Without Cutting Corners" },
      {
        type: "list",
        items: [
          "Join a group flight instead of chartering.",
          "Fly in shoulder season, early October or late April, when rates soften.",
          "Book as a full group of five and ask for the charter rate split per seat.",
          "Avoid third-party resellers who add a margin on top of the operator price.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a helicopter tour cost in Nepal?",
        answer:
          "A helicopter tour in Nepal costs from about USD 300 per person for a one-hour Kathmandu Valley flight to about USD 1,250 to 1,400 per person for the Everest Base Camp tour with a landing.",
      },
      {
        question: "What is the cheapest helicopter tour in Nepal?",
        answer:
          "The cheapest helicopter tour in Nepal is usually the one-hour Kathmandu Valley heritage flight, from around USD 300 per person. Among mountain routes, Langtang Valley is usually the most affordable.",
      },
      {
        question: "Is it cheaper to book a helicopter tour in advance?",
        answer:
          "Prices are mostly fixed, but booking early gets you confirmed seats on group flights, which sell out in October and November.",
      },
    ],
    cta: "Ready to check dates? See current availability or message the team on WhatsApp for tomorrow's departures.",
  },
  {
    slug: "everest-base-camp-helicopter-tour-experience",
    image: "/images/everest-base-camp/everest-base-camp.jpg",
    imageAlt: "Everest Base Camp helicopter route over the Khumbu",
    category: "Everest",
    title: "Everest Base Camp by Helicopter: What the 4-Hour Tour Is Really Like",
    excerpt:
      "A minute-by-minute account of the Everest Base Camp helicopter tour, from the 5:30 AM pickup to standing at 5,545 metres.",
    date: "3 August 2026",
    dateTime: "2026-08-03",
    readTime: "8 min read",
    metaTitle: "Everest Base Camp by Helicopter: What the Tour Is Really Like",
    metaDescription:
      "A minute-by-minute account of the Everest Base Camp helicopter tour, from the 5:30 AM pickup to standing at 5,545 metres. Read this before you book.",
    focusKeyword: "everest base camp by helicopter",
    secondaryKeywords: ["everest helicopter tour experience", "is everest helicopter tour worth it"],
    internalLinks: [
      { label: "Everest Base Camp tour", href: "/tours/everest-base-camp" },
      { label: "Kala Patthar experience", href: "/experiences/kala-patthar" },
      { label: "Helicopter tour cost guide", href: "/blog/helicopter-tour-nepal-cost-2026" },
    ],
    content: [
      {
        type: "paragraph",
        text: "At 5:30 in the morning, Kathmandu is still quiet. By 8:00, you are standing at 5,545 metres, looking straight at the summit of Everest. By 10:00, you are back in the city, ordering a second coffee.",
      },
      { type: "heading", text: "5:30 AM: The Pickup" },
      {
        type: "paragraph",
        text: "A driver collects you from your hotel while the streets are empty. Himalayan winds build by late morning, so every flight in Nepal leaves early. At the domestic terminal you meet your pilot, get a short safety briefing, and weigh in.",
      },
      { type: "heading", text: "6:15 AM: Wheels Up" },
      {
        type: "paragraph",
        text: "The first twenty minutes cross green foothills and terraced ridges. Around 7:00 the helicopter touches down at Lukla to refuel, then passes the trekking route in the next thirty minutes.",
      },
      { type: "heading", text: "7:20 AM: Into the Khumbu" },
      {
        type: "paragraph",
        text: "The helicopter follows the valley past Namche Bazaar and Tengboche. Ama Dablam stands on the right, the trees stop, the glacier begins, and Everest appears.",
      },
      { type: "heading", text: "7:45 AM: Ten Minutes at the Top of the World" },
      {
        type: "paragraph",
        text: "The landing is at Kala Patthar, the viewpoint above Base Camp, at 5,545 metres. Ground time is short because your body has had no time to adjust. Breathing is a little harder, movements a little slower, and oxygen is kept on board.",
      },
      {
        type: "paragraph",
        text: "Under updated Civil Aviation Authority of Nepal rules, larger groups are shuttled to the high landing in smaller batches above 4,500 metres. It adds a few minutes and exists purely for safety at altitude.",
      },
      { type: "heading", text: "So, Is It Worth It?" },
      {
        type: "table",
        columns: ["", "Helicopter tour", "Classic trek"],
        rows: [
          ["Time needed", "4 hours", "12 to 14 days"],
          ["Fitness needed", "None", "High"],
          ["Cost per person", "USD 1,250 to 1,400", "USD 1,200 to 1,800 all-in"],
          ["Highest point", "5,545 m Kala Patthar", "5,545 m Kala Patthar"],
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Everest helicopter tour worth it?",
        answer:
          "For travellers without two weeks to trek, yes. The tour reaches Kala Patthar at 5,545 metres in a single morning for USD 1,250 to 1,400 per person.",
      },
      {
        question: "Do you feel altitude sickness on the helicopter tour?",
        answer:
          "Most passengers feel mild effects such as faster breathing or slight lightheadedness. Ground time is limited and oxygen is carried on board.",
      },
      {
        question: "What should I wear for the Everest helicopter tour?",
        answer:
          "Dress in layers. A warm jacket, sunglasses, sunscreen, and comfortable shoes with grip are essential at the high landing.",
      },
    ],
    cta: "See the full itinerary, dates, and prices on the Everest Base Camp tour page, or ask about tomorrow's seats on WhatsApp.",
  },
  {
    slug: "best-time-helicopter-tour-nepal",
    image: "/images/tour/hero-bg.jpg",
    imageAlt: "Clear Himalayan morning for a Nepal helicopter tour",
    category: "Weather",
    title: "Best Time for a Helicopter Tour in Nepal: A Month by Month Guide",
    excerpt:
      "October and November offer the clearest skies, but every month has a story. Compare visibility, weather windows, and cancellation risk.",
    date: "3 August 2026",
    dateTime: "2026-08-03",
    readTime: "6 min read",
    metaTitle: "Best Time for a Helicopter Tour in Nepal: Month by Month",
    metaDescription:
      "October and November offer the clearest skies for helicopter tours in Nepal. See the full month-by-month guide with visibility and cancellation odds.",
    focusKeyword: "best time helicopter tour nepal",
    secondaryKeywords: ["helicopter tour nepal autumn", "helicopter tour nepal monsoon", "helicopter tour nepal winter"],
    internalLinks: [
      { label: "Everest tours", href: "/tours/everest-base-camp" },
      { label: "Book a flight", href: "/contact" },
    ],
    content: [
      {
        type: "paragraph",
        text: "The best time for a helicopter tour in Nepal is October to November, when the monsoon has washed the sky clean and the mountains stand sharp against deep blue. March to April is the second-best window.",
      },
      { type: "heading", text: "The Year at a Glance" },
      {
        type: "table",
        columns: ["Months", "Flying conditions", "What to expect"],
        rows: [
          ["October to November", "Excellent", "Clearest skies of the year; peak demand; book 2 to 4 weeks ahead"],
          ["December to February", "Very good", "Cold but crystal clear; fewer tourists; occasional winter storms"],
          ["March to April", "Good", "Warm and stable; light haze builds by late April; rhododendrons bloom below"],
          ["May", "Fair", "Pre-monsoon haze; morning flights still work"],
          ["June to September", "Limited", "Monsoon; flights run only in weather windows; expect reschedules"],
        ],
      },
      { type: "heading", text: "Autumn: The Gold Standard" },
      {
        type: "paragraph",
        text: "After the monsoon ends in late September, dust and haze are gone. Visibility in October can exceed 100 kilometres, and group flights fill fast.",
      },
      { type: "heading", text: "Winter: The Secret Season" },
      {
        type: "paragraph",
        text: "December and January skies can be as clear as autumn, the light is softer, and the mountains carry their heaviest snow. It is cold at landing sites, but ground time is short.",
      },
      { type: "heading", text: "Monsoon: Possible, With Patience" },
      {
        type: "paragraph",
        text: "From June to September, flights operate whenever a weather window opens, usually at dawn. Only plan a monsoon flight if your schedule has a spare day for rescheduling.",
      },
    ],
    faqs: [
      {
        question: "What is the best month for a helicopter tour in Nepal?",
        answer:
          "October and November are the best months. March and April come second, while winter is underrated for clear skies and fewer travellers.",
      },
      {
        question: "Do helicopter tours run during monsoon in Nepal?",
        answer:
          "Yes, but only when a weather window opens, usually in the early morning. Cancellations and reschedules are common.",
      },
      {
        question: "Are helicopter tours cancelled often in autumn?",
        answer:
          "Cancellations in October and November are rare. Delays are usually short morning holds for valley fog.",
      },
    ],
    cta: "Pick your month, then check live dates. Weather-cancelled flights always reschedule free or refund in full.",
  },
  {
    slug: "helicopter-vs-trekking-everest-base-camp",
    image: "/images/everest-base-camp/everest.jpg",
    imageAlt: "Everest region seen from a helicopter flight",
    category: "Comparison",
    title: "Helicopter or Trek to Everest Base Camp? An Honest Comparison",
    excerpt:
      "Twelve days on foot or four hours in the air? Compare cost, fitness, altitude risk, and experience before choosing your Everest plan.",
    date: "3 August 2026",
    dateTime: "2026-08-03",
    readTime: "6 min read",
    metaTitle: "Helicopter vs Trekking to Everest Base Camp: Honest Comparison",
    metaDescription:
      "Twelve days on foot or four hours in the air? Compare cost, fitness, altitude risk, and experience to choose the right way to reach Everest Base Camp.",
    focusKeyword: "helicopter vs trekking nepal",
    secondaryKeywords: ["everest helicopter tour vs trek", "is helicopter tour worth it nepal"],
    internalLinks: [
      { label: "Everest Base Camp helicopter tour", href: "/tours/everest-base-camp" },
      { label: "Lukla transfer", href: "/ads/lukla" },
    ],
    content: [
      {
        type: "paragraph",
        text: "There are two ways to stand above Everest Base Camp. One takes twelve days, a pair of strong legs, and a backpack. The other takes four hours and a window seat. Neither is wrong.",
      },
      { type: "heading", text: "The Numbers, Side by Side" },
      {
        type: "table",
        columns: ["", "Trek", "Helicopter"],
        rows: [
          ["Total time", "12 to 14 days", "4 hours"],
          ["Cost per person", "USD 1,200 to 1,800", "USD 1,250 to 1,400"],
          ["Fitness required", "High", "None"],
          ["Altitude adjustment", "Gradual, 8 to 10 days", "None, rapid ascent"],
          ["Highest point", "5,545 m", "5,545 m"],
          ["Best for", "The journey", "The view"],
        ],
      },
      { type: "heading", text: "Choose the Trek If" },
      {
        type: "list",
        items: [
          "You have two weeks and want to earn the view step by step.",
          "Sherpa villages, monasteries, and teahouse evenings matter as much as the mountain.",
          "You are fit enough for six-hour walking days at altitude.",
        ],
      },
      { type: "heading", text: "Choose the Helicopter If" },
      {
        type: "list",
        items: [
          "You have one free morning, not two free weeks.",
          "Knees, health, or age make a 130-kilometre round trip walk unrealistic.",
          "You are travelling with family members of very different fitness levels.",
        ],
      },
      {
        type: "paragraph",
        text: "You can also combine them: trek up over about eight days, then fly back by helicopter from Gorakshep or Lukla in one morning.",
      },
    ],
    faqs: [
      {
        question: "Should I trek or take a helicopter to Everest Base Camp?",
        answer:
          "Trek if you want the full journey and have two weeks. Take the helicopter if you have one morning, limited mobility, or a mixed group.",
      },
      {
        question: "Can I trek up and fly back by helicopter?",
        answer:
          "Yes. Many trekkers walk up and return by helicopter from Gorakshep or Lukla, cutting three to four days of downhill walking.",
      },
      {
        question: "Is the helicopter safer than trekking?",
        answer:
          "They carry different risks. Trekkers face longer altitude exposure; helicopter passengers face a brief ascent managed with short ground time and onboard oxygen.",
      },
    ],
    cta: "Decided? See the Everest Base Camp helicopter itinerary, or ask about one-way trek pickup on WhatsApp.",
  },
  {
    slug: "helicopter-rescue-nepal-how-it-works",
    image: "/images/rescue/section/emergency-medical-evacuation.jpg",
    imageAlt: "Emergency helicopter evacuation in Nepal",
    category: "Rescue",
    title: "Helicopter Rescue in Nepal: How It Works and Who Pays",
    excerpt:
      "What happens when a trekker calls for helicopter rescue in Nepal? The process, typical costs, and how travel insurance pays.",
    date: "3 August 2026",
    dateTime: "2026-08-03",
    readTime: "7 min read",
    metaTitle: "Helicopter Rescue in Nepal: How It Works and Who Pays",
    metaDescription:
      "What happens when a trekker calls for helicopter rescue in Nepal? The full process, typical costs, and how travel insurance actually pays, explained simply.",
    focusKeyword: "helicopter rescue nepal",
    secondaryKeywords: ["helicopter rescue nepal cost", "helicopter evacuation nepal", "trekking insurance helicopter nepal"],
    internalLinks: [
      { label: "Rescue services", href: "/rescue" },
      { label: "Everest rescue", href: "/rescue/everest-rescue" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Every trekking season, hundreds of trekkers in Nepal need a helicopter to bring them down. If you need a rescue right now, call the 24-hour hotline: +977-1-4111051.",
      },
      { type: "heading", text: "Step by Step: What Happens in a Rescue" },
      {
        type: "list",
        items: [
          "The call: you, your guide, or a teahouse owner gives your location, condition, and insurance details.",
          "Insurance check: the operations desk contacts your insurer for a guarantee of payment.",
          "The flight: a helicopter launches as soon as weather allows.",
          "The handover: you fly directly to a hospital in Kathmandu.",
        ],
      },
      { type: "heading", text: "What a Rescue Costs" },
      {
        type: "paragraph",
        text: "Helicopter rescue in Nepal typically costs between USD 2,000 and USD 8,000, depending on the region and altitude of the pickup. Rescue flying is billed by flight hour.",
      },
      {
        type: "table",
        columns: ["Pickup region", "Typical cost range"],
        rows: [
          ["Everest region Khumbu", "USD 4,000 to 8,000"],
          ["Annapurna region", "USD 2,500 to 5,000"],
          ["Langtang region", "USD 2,000 to 4,000"],
        ],
      },
      { type: "heading", text: "Who Actually Pays" },
      {
        type: "list",
        items: [
          "Your policy must cover trekking at your maximum altitude.",
          "Your policy must cover emergency helicopter evacuation specifically.",
          "Carry your insurance certificate and passport copy in your daypack.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does a helicopter rescue cost in Nepal?",
        answer:
          "A helicopter rescue in Nepal typically costs between USD 2,000 and USD 8,000, depending on pickup altitude and region.",
      },
      {
        question: "Does travel insurance cover helicopter rescue in Nepal?",
        answer:
          "Most dedicated trekking insurance policies cover helicopter rescue, but only up to the altitude stated in the policy.",
      },
      {
        question: "How do I call a helicopter rescue in Nepal?",
        answer:
          "Call +977-1-4111051, or ask your guide or nearest teahouse to call. Give your exact location, condition, and insurance company name.",
      },
    ],
    cta: "Trekking soon? Save the hotline before you go: +977-1-4111051.",
  },
  {
    slug: "muktinath-darshan-helicopter-same-day",
    image: "/images/tour-section/muktinath.jpg",
    imageAlt: "Muktinath helicopter pilgrimage route in Mustang",
    category: "Pilgrimage",
    title: "Muktinath Darshan by Helicopter: The Same-Day Pilgrimage Guide",
    excerpt:
      "Complete Muktinath darshan from Kathmandu in one day by helicopter, including route, temple time, what to carry, and family planning tips.",
    date: "3 August 2026",
    dateTime: "2026-08-03",
    readTime: "7 min read",
    metaTitle: "Muktinath Darshan by Helicopter: Same-Day Pilgrimage Guide",
    metaDescription:
      "Complete Muktinath darshan from Kathmandu in one day by helicopter. Route, temple time, what to carry, and why elderly pilgrims choose to fly.",
    focusKeyword: "muktinath yatra by helicopter",
    secondaryKeywords: ["muktinath darshan by helicopter", "helicopter to muktinath temple"],
    internalLinks: [
      { label: "Muktinath pilgrimage tour", href: "/tours/muktinath-pilgrimage" },
      { label: "Pilgrimage experiences", href: "/experiences/pilgrimage" },
    ],
    content: [
      {
        type: "paragraph",
        text: "For centuries, reaching Muktinath meant weeks of walking through the mountains of Mustang. Today, a pilgrim can leave Kathmandu after breakfast, complete darshan, bathe under the 108 water spouts, and be home before evening.",
      },
      { type: "heading", text: "Why Muktinath Matters" },
      {
        type: "paragraph",
        text: "Muktinath, the place of liberation, stands at 3,800 metres in Mustang. It is sacred to both Hindus and Buddhists, and for Hindus it is one of the 108 Divya Desams of Lord Vishnu.",
      },
      { type: "heading", text: "The Same-Day Route from Kathmandu" },
      {
        type: "table",
        columns: ["Time", "What happens"],
        rows: [
          ["06:30", "Pickup from your Kathmandu hotel"],
          ["07:30", "Take off toward Pokhara"],
          ["08:15", "Short refuelling stop in Pokhara"],
          ["09:00", "Land at Muktinath helipad, weather permitting"],
          ["09:15", "Darshan, the 108 water spouts, and Jwala Mai"],
          ["11:00", "Return flight through the Kali Gandaki gorge"],
          ["12:30", "Land in Kathmandu"],
        ],
      },
      { type: "heading", text: "What the Yatra Costs" },
      {
        type: "paragraph",
        text: "From Kathmandu, a seat on a shared flight costs USD 1,100 to 1,200 per person, and a private charter for up to five pilgrims costs around USD 5,400. From Pokhara, shared seats cost USD 650 to 800.",
      },
      { type: "heading", text: "What to Carry and What to Know" },
      {
        type: "list",
        items: [
          "Warm layers for the cold 3,800-metre temple morning.",
          "Comfortable shoes for the short walk from the helipad.",
          "A towel and change of clothes if you plan to bathe under the 108 spouts.",
          "Your usual medicines, with any heart or lung condition shared with the crew in advance.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does Muktinath darshan take by helicopter from Kathmandu?",
        answer:
          "The complete yatra takes about five to six hours door to door, including a refuelling stop in Pokhara and about one to one and a half hours at the temple.",
      },
      {
        question: "Can elderly people do the Muktinath helicopter yatra?",
        answer:
          "Yes. The helicopter removes the long road journey, and pony rides can cover the walk from the helipad.",
      },
      {
        question: "Is bathing at the 108 water spouts included in the helicopter tour?",
        answer:
          "Yes. Time at the 108 water spouts is part of the temple visit. Carry a towel and change of clothes because the water is extremely cold.",
      },
    ],
    cta: "Plan your yatra: see dates and prices for the Muktinath helicopter tour, or message the team on WhatsApp for family and group rates.",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
