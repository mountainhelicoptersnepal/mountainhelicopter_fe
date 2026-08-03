"use client";

import { supabase } from "@/lib/supabase";

export type AdsLuklaBookingInput = {
  flight_type: string;
  travel_date: string;
  passengers: number;
  full_name: string;
  email: string;
  country_name: string;
  country_code: string;
  phone_number: string;
  captcha_question: string;
  captcha_answer: number;
  source?: string;
};

export async function submitAdsLuklaBooking(input: AdsLuklaBookingInput) {
  const { error } = await supabase.from("ads_inquiry").insert({
    flight_type: input.flight_type,
    travel_date: input.travel_date,
    passengers: input.passengers,
    full_name: input.full_name,
    email: input.email,
    country_name: input.country_name,
    country_code: input.country_code,
    phone_number: input.phone_number,
    phone_full: `${input.country_code} ${input.phone_number}`,
    captcha_question: input.captcha_question,
    captcha_answer: input.captcha_answer,
    status: "New",
    source: input.source ?? "Ads - Lukla Landing Page",
  });

  if (error) {
    throw error;
  }
}
