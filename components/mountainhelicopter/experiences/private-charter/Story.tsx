export default function Story() {
  return (
    <article aria-labelledby="story-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        The Experience
      </p>

      <h2
        id="story-heading"
        className="mb-8 font-fraunces text-[clamp(1.9rem,3.8vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        It started with a napkin.
      </h2>

      <div className="space-y-6 text-[17px] leading-[1.8] text-[#0A1929]/85 md:text-lg">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-fraunces first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-[#003366]">
          Some guests arrive with a complete plan. Others arrive with a feeling,
          a name, an old photograph or a sketch passed down through their
          family.
        </p>

        <p>
          One traveller brought a paper napkin showing a village from his
          grandfather&apos;s memory: a river bend, a shrine and three terraced
          hills. The sketch was placed beside the aeronautical charts and used
          as the beginning of a search.
        </p>

        <p>
          That is the purpose of a private helicopter charter. There is no fixed
          route and no shared schedule. The journey begins with what matters to
          you and develops into a practical flight plan.
        </p>

        <p>
          A flight designer discusses your destinations, timing, passengers,
          landing requirements, meals, ground arrangements and preferred pace.
          The operations team then assesses what is possible according to
          weather, permits and aircraft performance.
        </p>

        <p>
          One aircraft. One day or several. A private itinerary shaped around
          your people, your priorities and the parts of Nepal you want to see.
        </p>
      </div>
    </article>
  );
}