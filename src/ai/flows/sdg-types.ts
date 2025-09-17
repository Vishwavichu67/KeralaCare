import { z } from 'zod';

/**
 * @fileOverview Type definitions for the SDG alignment advice flow.
 *
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
export type SdgAlignmentAdviceInput = z.infer<
  typeof SdgAlignmentAdviceInputSchema
>;

export const SdgAlignmentAdviceOutputSchema = z.object({
  advice: z
    .string()
    .describe(
      'Personalized advice on how the user health decisions can better align with SDGs 3, 8, 10, and 16.'
    ),
});
export type SdgAlignmentAdviceOutput = z.infer<
  typeof SdgAlignmentAdviceOutputSchema
>;
