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
        Your brain will refuse the scale of it.
      </h2>

      <div className="space-y-6 text-[17px] leading-[1.8] text-[#0A1929]/85 md:text-lg">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-fraunces first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-[#003366]">
          There is a moment, stepping out of the helicopter at Kala Patthar,
          when your brain refuses the scale of what it is seeing. Everest is no
          longer a photograph or a shape on the horizon — it is a wall of black
          rock and blue ice filling half the sky, close enough that you can
          watch the wind tear snow off the summit ridge.
        </p>

        <p>
          You land just after dawn, when the light is still amber and the air is
          glass. The rotor slows, the door opens, and the cold arrives first —
          sharp, mineral, absolutely clean. Then the sound arrives, which is to
          say: none.
        </p>

        <p>
          At 5,545 metres there is no birdsong, no wind in trees, no distant
          road. There is your own breath, coming quicker than it should, and the
          faint crack of the Khumbu Glacier shifting somewhere below your boots.
        </p>

        <p>
          The dark rocks under your feet —{" "}
          <em className="font-medium text-[#B8860B]">
            kala patthar
          </em>{" "}
          means “black rock” in Nepali — are frosted silver, and the first sun
          is running like liquid gold down the face of Pumori above you.
        </p>

        <p>
          Trekkers spend twelve days walking to this ridge. They arrive
          exhausted, oxygen-starved, and stay twenty minutes. You will arrive at
          dawn with fresh legs, a thermos of hot tea, and the same twenty
          minutes — except yours come with a helicopter waiting and a pilot
          watching the weather so you do not have to.
        </p>

        <p>
          Fifteen minutes is short. It is also, our guests keep telling us, the
          fifteen minutes they measure the rest of their travels against.
        </p>
      </div>
    </article>
  );
}