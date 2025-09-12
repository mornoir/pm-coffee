'use server';

import { z } from 'zod';
import { optimizeMeetingRoomSchedule } from '@/ai/flows/optimize-meeting-room-schedule';

const OptimizerSchema = z.object({
  usageData: z.string().min(10, 'Usage data is too short.'),
  cleaningSchedule: z.string().min(10, 'Cleaning schedule is too short.'),
  roomCapacity: z.coerce.number().min(1, 'Room capacity must be at least 1.'),
  customerSatisfactionMetrics: z.string().min(10, 'Customer satisfaction metrics are too short.'),
});

export type OptimizerState = {
  result?: {
    optimizedSchedule: string;
    suggestedImprovements: string;
  };
  error?: string;
  message?: string;
};

export async function handleOptimizeSchedule(
  prevState: OptimizerState,
  formData: FormData,
): Promise<OptimizerState> {
  const validatedFields = OptimizerSchema.safeParse({
    usageData: formData.get('usageData'),
    cleaningSchedule: formData.get('cleaningSchedule'),
    roomCapacity: formData.get('roomCapacity'),
    customerSatisfactionMetrics: formData.get('customerSatisfactionMetrics'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await optimizeMeetingRoomSchedule(validatedFields.data);
    return { result };
  } catch (error) {
    console.error(error);
    return {
      error: 'Failed to generate optimization. Please try again.',
    };
  }
}
