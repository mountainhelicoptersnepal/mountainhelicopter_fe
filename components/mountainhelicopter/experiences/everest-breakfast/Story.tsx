export default function Story() {
  return (
    <article aria-labelledby="story-heading">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#B8860B]">
        The Experience
      </p>

      <h2
        id="story-heading"
        className="mb-8 font-fraunces text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#003366]"
      >
        One terrace on earth serves this view.
      </h2>

      <div className="space-y-6 text-[17px] leading-[1.8] text-[#0A1929]/85 md:text-[18px]">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-fraunces first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-[#003366]">
          There is one remarkable Himalayan terrace where your morning coffee
          comes with an uninterrupted view of Mount Everest. It sits high above
          Namche Bazaar at approximately 3,880 metres.
        </p>

        <p>
          Reaching the Everest region on foot normally takes several days. By
          helicopter, the journey begins at dawn in Kathmandu and follows the
          Himalayan foothills toward Lukla and the upper Khumbu.
        </p>

        <p>
          The scenery changes quickly. Hills become ridges, ridges become snow
          walls, and peaks such as Thamserku, Kangtega and Ama Dablam appear
          through the aircraft windows.
        </p>

        <p>
          After landing near Hotel Everest View, a short walk leads to the
          terrace. Breakfast is served with the mountains directly ahead while
          the aircraft and flight team prepare for the return journey.
        </p>

        <p>
          By late morning, you can be back in Kathmandu with the rest of the day
          still available.
        </p>
      </div>
    </article>
  );
}