'use server';

import { z } from 'zod';

/**
 * @fileOverview Provides personalized advice on aligning health decisions with SDGs.
 *
 * - getSdgAlignmentAdvice - A function that generates SDG alignment advice based on health records.
 * - SdgAlignmentAdviceInput - The input type for the getSdgAlignmentAdvice function.
 * - SdgAlignmentAdviceOutput - The return type for the getSdgAlignmentAdvice function.
 */

export const SdgAlignmentAdviceInputSchema = z.object({
  healthRecords: z
    .string()
    .describe(
      'A detailed summary of the user health records, including medical history, lifestyle choices, and current health status.'
    ),
});
export type SdgAlignmentAdviceInput = z.infer<typeof SdgAlignmentAdviceInputSchema>;

export const SdgAlignmentAdviceOutputSchema = z.object({
  advice: z
    .string()
    .describe(
      'Personalized advice on how the user health decisions can better align with SDGs 3, 8, 10, and 16.'
    ),
});
export type SdgAlignmentAdviceOutput = z.infer<typeof SdgAlignmentAdviceOutputSchema>;

export async function getSdgAlignmentAdvice(
  input: SdgAlignmentAdviceInput
): Promise<SdgAlignmentAdviceOutput> {
  console.log("Health records received:", input.healthRecords);
  // Simulate AI advice generation
  await new Promise(resolve => setTimeout(resolve, 1500));
  return {
      advice: "Based on your records, consider incorporating more green vegetables into your diet to align with SDG 3 (Good Health). Reducing processed food intake can also contribute to more sustainable consumption patterns (SDG 12)."
  };
}
