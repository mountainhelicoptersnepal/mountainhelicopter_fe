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
        The pilot becomes part of the camera team.
      </h2>

      <div className="space-y-6 text-[17px] leading-[1.8] text-[#0A1929]/85 md:text-lg">
        <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-fraunces first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-[#003366]">
          Aerial photography in the Himalayas depends on more than reaching the
          right mountain. The aircraft must arrive at the correct position while
          the light, cloud, wind and visibility are working together.
        </p>

        <p>
          Before departure, the pilot reviews your shot list, equipment,
          preferred sun angle, focal length, filming direction and expected
          flight time.
        </p>

        <p>
          During the flight, communication continues through the headset. You
          can request a change of altitude, a wider orbit, a different angle or
          another pass while the pilot maintains safe operating margins.
        </p>

        <p>
          The flight may focus on Everest, Ama Dablam, Gokyo, the Khumbu
          Glacier, terraced valleys, high-altitude settlements or a completely
          customized commercial route.
        </p>

        <p>
          You bring the camera and creative direction. The flight team provides
          the aircraft, route planning and aerial positioning needed to place
          your lens where the shot exists.
        </p>
      </div>
    </article>
  );
}