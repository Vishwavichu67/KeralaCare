'use server';

/**
 * @fileOverview Provides personalized advice on aligning health decisions with SDGs.
 *
 * - getSdgAlignmentAdvice - A function that generates SDG alignment advice based on health records.
 * - SdgAlignmentAdviceInput - The input type for the getSdgAlignmentAdvice function.
 * - SdgAlignmentAdviceOutput - The return type for the getSdgAlignmentAdvice function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SdgAlignmentAdviceInputSchema = z.object({
  healthRecords: z
    .string()
    .describe(
      'A detailed summary of the user health records, including medical history, lifestyle choices, and current health status.'
    ),
});
export type SdgAlignmentAdviceInput = z.infer<typeof SdgAlignmentAdviceInputSchema>;

const SdgAlignmentAdviceOutputSchema = z.object({
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
  return sdgAlignmentAdviceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'sdgAlignmentAdvicePrompt',
  input: {schema: SdgAlignmentAdviceInputSchema},
  output: {schema: SdgAlignmentAdviceOutputSchema},
  prompt: `You are an expert health advisor, specialized in providing advice that aligns personal health decisions with the United Nations Sustainable Development Goals (SDGs), particularly SDGs 3 (Good Health and Well-being), 8 (Decent Work and Economic Growth), 10 (Reduced Inequalities), and 16 (Peace, Justice and Strong Institutions).

  Based on the following health records, provide personalized and actionable advice on how the user can make informed decisions to improve their health and contribute to the achievement of the SDGs.

  Health Records: {{{healthRecords}}}
  `,
});

const sdgAlignmentAdviceFlow = ai.defineFlow(
  {
    name: 'sdgAlignmentAdviceFlow',
    inputSchema: SdgAlignmentAdviceInputSchema,
    outputSchema: SdgAlignmentAdviceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
