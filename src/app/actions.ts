
'use server';

import { getSdgAlignmentAdvice, SdgAlignmentAdviceOutput } from "@/ai/flows/sdg-alignment-advice";
import { redirect } from "next/navigation";

export async function getAdviceAction(healthRecords: string): Promise<SdgAlignmentAdviceOutput> {
  try {
    const output = await getSdgAlignmentAdvice({ healthRecords });
    return output;
  } catch (error) {
    console.error("Error getting SDG alignment advice:", error);
    // In a real application, you might want to return a more structured error
    return { advice: 'Failed to generate advice due to an internal error.' };
  }
}

export async function registerAction(prevState: any, formData: FormData) {
  // In a real app, you would create the user account here.
  // This is a server action.
  redirect('/dashboard');
}
