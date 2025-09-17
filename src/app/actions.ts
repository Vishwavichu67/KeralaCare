
'use server';

import { SdgAlignmentAdviceOutput } from "@/ai/flows/sdg-alignment-advice";
import { redirect } from "next/navigation";

export async function getAdviceAction(healthRecords: string): Promise<SdgAlignmentAdviceOutput> {
    console.log("Health records received:", healthRecords);
    // Simulate AI advice generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
        advice: "Based on your records, consider incorporating more green vegetables into your diet to align with SDG 3 (Good Health). Reducing processed food intake can also contribute to more sustainable consumption patterns (SDG 12)."
    };
}

export async function registerAction(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  console.log("Registering user:", name);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  redirect('/dashboard');
}

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    console.log("Logging in user:", email);
    await new Promise(resolve => setTimeout(resolve, 1000));

    redirect('/dashboard');
}
