"use client";

import { supabase } from "@/lib/supabase";

export type InquiryInput = {
  full_name: string;
  email: string;
  phone: string;
  group_size: number | string;
  service_type: string;
  preferred_date?: string | null;
  message: string;
};

export async function submitInquiry(input: InquiryInput) {
  const groupSize =
    typeof input.group_size === "string"
      ? Number(input.group_size)
      : input.group_size;

  if (!Number.isFinite(groupSize)) {
    throw new Error("Please choose a valid group size.");
  }

  const { error } = await supabase.from("inquiries").insert({
    full_name: input.full_name,
    email: input.email,
    phone: input.phone,
    group_size: groupSize,
    service_type: input.service_type,
    preferred_date: input.preferred_date || null,
    message: input.message,
    status: "New",
    source: "Website",
  });

  if (error) {
    throw error;
  }
}
