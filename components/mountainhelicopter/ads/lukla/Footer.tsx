import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#051F49] pb-[90px] pt-11 text-[14.5px] text-[#A9C2E8] md:pb-11">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-[26px] px-[22px]">
        <div>
          <div className="inline-block rounded-xl bg-white p-[12px_18px]">
            <Image
              src="/images/navbar-logo-clear.png"
              alt="Mountain Helicopters Pvt. Ltd."
              width={140}
              height={46}
              className="h-[46px] w-auto"
            />
          </div>
          <div className="mt-2.5 font-jetbrains-mono text-[11.5px] uppercase tracking-[.1em]">
            CAAN Certified · NTB Registered · Since 2009
          </div>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Mountain Helicopters Pvt. Ltd.
          <br />
          Old Sinamangal, Pepsicola, Kathmandu, Nepal ·{" "}
          <a
            href="mailto:info@mountainhelicoptersnepal.com"
            className="text-[#F5AF00]"
          >
            info@mountainhelicoptersnepal.com
          </a>
        </div>
      </div>
    </footer>
  );
}
