"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, Plane, Users } from "lucide-react";
import { HeliIcon } from "./icons";

const STATS = [
  { Icon: CalendarDays, v: "EVERYDAY", k: "Departures, both ways" },
  { Icon: Clock, v: "≈ 45 MIN", k: "KTM to Lukla" },
  { Icon: Plane, v: "AS 350 B3e", k: "Airbus fleet" },
  { Icon: Users, v: "5 SEATS", k: "Per departure" },
];

export default function RouteBoard() {
  return (
    <div className="border-y border-[#D7E2F2] bg-white py-[26px]">
      <div className="mx-auto max-w-[1160px] px-[22px]">
        <div
          aria-label="Flight route Kathmandu to Lukla"
          className="grid grid-cols-[auto_1fr_auto] items-center gap-[clamp(14px,3vw,34px)]"
        >
          <div className="text-center">
            <div className="font-fraunces text-[clamp(1.7rem,4vw,2.4rem)] font-black tracking-[.02em] text-[#0C4396]">
              KTM
            </div>
            <div className="font-geist-mono text-[11px] uppercase tracking-[.1em] text-[#4A5B76]">
              Kathmandu · 1,400 m
            </div>
          </div>

          <div aria-hidden="true" className="relative h-11">
            <div className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-[#D7E2F2]" />
            <motion.div
              className="absolute top-1/2 -translate-y-[58%]"
              initial={{ left: "2%" }}
              animate={{ left: "92%" }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            >
              <HeliIcon className="h-[38px] w-[38px] -scale-x-100" />
            </motion.div>
          </div>

          <div className="text-center">
            <div className="font-fraunces text-[clamp(1.7rem,4vw,2.4rem)] font-black tracking-[.02em] text-[#0C4396]">
              LUA
            </div>
            <div className="font-geist-mono text-[11px] uppercase tracking-[.1em] text-[#4A5B76]">
              Lukla · 2,860 m
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3.5 border-t border-[#D7E2F2] pt-[18px] sm:grid-cols-4">
          {STATS.map(({ Icon, v, k }) => (
            <div key={v} className="text-center">
              <Icon className="mx-auto mb-1 h-[19px] w-[19px] text-[#D99A00]" />
              <div className="font-geist-mono text-[clamp(.95rem,2vw,1.15rem)] font-semibold text-[#0C4396]">
                {v}
              </div>
              <div className="text-xs uppercase tracking-[.08em] text-[#4A5B76]">{k}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
