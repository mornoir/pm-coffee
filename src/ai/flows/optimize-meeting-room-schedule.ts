'use server';

/**
 * @fileOverview Optimizes meeting room schedules using AI to ensure efficient utilization and cleaning.
 *
 * - optimizeMeetingRoomSchedule - A function that optimizes the meeting room schedule.
 * - OptimizeMeetingRoomScheduleInput - The input type for the optimizeMeetingRoomSchedule function.
 * - OptimizeMeetingRoomScheduleOutput - The return type for the optimizeMeetingRoomSchedule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeMeetingRoomScheduleInputSchema = z.object({
  usageData: z
    .string()
    .describe(
      'Historical data of meeting room usage, including booking times, durations, and occupancy rates.'
    ),
  cleaningSchedule: z
    .string()
    .describe(
      'The current cleaning schedule for the meeting rooms, including times and frequency.'
    ),
  roomCapacity: z
    .number()
    .describe('The maximum capacity of the meeting room being scheduled.'),
  customerSatisfactionMetrics: z
    .string()
    .describe(
      'Customer satisfaction feedback related to meeting room cleanliness and availability.'
    ),
});
export type OptimizeMeetingRoomScheduleInput = z.infer<
  typeof OptimizeMeetingRoomScheduleInputSchema
>;

const OptimizeMeetingRoomScheduleOutputSchema = z.object({
  optimizedSchedule: z
    .string()
    .describe(
      'An optimized schedule that maximizes room utilization while ensuring adequate cleaning time, formatted as a JSON string.'
    ),
  suggestedImprovements: z
    .string()
    .describe(
      'Suggestions for improvements to the cleaning process or room setup to enhance customer satisfaction.'
    ),
});
export type OptimizeMeetingRoomScheduleOutput = z.infer<
  typeof OptimizeMeetingRoomScheduleOutputSchema
>;

export async function optimizeMeetingRoomSchedule(
  input: OptimizeMeetingRoomScheduleInput
): Promise<OptimizeMeetingRoomScheduleOutput> {
  return optimizeMeetingRoomScheduleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeMeetingRoomSchedulePrompt',
  input: {schema: OptimizeMeetingRoomScheduleInputSchema},
  output: {schema: OptimizeMeetingRoomScheduleOutputSchema},
  prompt: `You are an AI assistant specialized in optimizing meeting room schedules for co-working spaces. Analyze the provided data to create an efficient and customer-satisfying schedule. Ensure that the room utilization is maximized while keeping it clean and available.

Analyze the following data:

Usage Data: {{{usageData}}}
Cleaning Schedule: {{{cleaningSchedule}}}
Room Capacity: {{{roomCapacity}}}
Customer Satisfaction Metrics: {{{customerSatisfactionMetrics}}}

Provide an optimized meeting room schedule in JSON format and suggest improvements to the cleaning process or room setup. Return schedule as JSON string.
`,
});

const optimizeMeetingRoomScheduleFlow = ai.defineFlow(
  {
    name: 'optimizeMeetingRoomScheduleFlow',
    inputSchema: OptimizeMeetingRoomScheduleInputSchema,
    outputSchema: OptimizeMeetingRoomScheduleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
