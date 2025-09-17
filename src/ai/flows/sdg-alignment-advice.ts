'use server';

import {
  SdgAlignmentAdviceInput,
  SdgAlignmentAdviceOutput,
} from './sdg-types';

/**
 * @fileOverview Provides personalized advice on aligning health decisions with SDGs.
 *
 * - getSdgAlignmentAdvice - A function that generates SDG alignment advice based on health records.
 */

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
