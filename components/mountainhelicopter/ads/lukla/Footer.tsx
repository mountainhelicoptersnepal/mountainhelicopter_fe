import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1a2d] pb-[90px] pt-11 text-[14.5px] text-[#A9C2E8] md:pb-11">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-[26px] px-[22px]">
        <div>
          <div className="inline-block">
            <Image
              src="/images/logo/mountainheli-logo.svg"
              alt="Mountain Helicopters Logo"
              width={192}
              height={64}
              className="h-[46px] w-auto"
            />
          </div>
          <div className="mt-2.5 font-manrope text-[11.5px] uppercase tracking-[.1em]">
            CAAN Certified · NTB Registered · Since 2009
          </div>
        </div>
        <div>
          &copy; {new Date().getFullYear()} Mountain Helicopters Pvt. Ltd.
          <br />
          Old Sinamangal, Pepsicola, Kathmandu, Nepal ·{" "}
          <a
            href="mailto:info@mountainhelicoptersnepal.com"
            className="text-[#F2B632]"
          >
            info@mountainhelicoptersnepal.com
          </a>
        </div>
      </div>
    </footer>
  );
}
