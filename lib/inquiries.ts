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
  const { error } = await supabase.from("inquiries").insert({
    full_name: input.full_name,
    email: input.email,
    phone: input.phone,
    group_size:
      typeof input.group_size === "string"
        ? Number(input.group_size)
        : input.group_size,
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
