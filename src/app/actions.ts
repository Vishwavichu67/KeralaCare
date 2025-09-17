
'use server';

import { SdgAlignmentAdviceOutput } from "@/ai/flows/sdg-types";
import { getSdgAlignmentAdvice } from "@/ai/flows/sdg-alignment-advice";
import { redirect } from "next/navigation";

export async function getAdviceAction(healthRecords: string): Promise<SdgAlignmentAdviceOutput> {
    return await getSdgAlignmentAdvice({ healthRecords });
}

export async function registerAction(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  console.log("Registering user:", name);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  redirect('/workers');
}

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    console.log("Logging in user:", email);
    await new Promise(resolve => setTimeout(resolve, 1000));

    redirect('/workers');
}
