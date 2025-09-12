'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleOptimizeSchedule, OptimizerState } from './actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialState: OptimizerState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90">
      {pending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {pending ? 'Optimizing...' : 'Generate Optimized Schedule'}
    </Button>
  );
}

export function OptimizerForm() {
  const [state, formAction] = useFormState(handleOptimizeSchedule, initialState);
  const { toast } = useToast();
  const [optimizedScheduleData, setOptimizedScheduleData] = useState<any[]>([]);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: typeof state.error === 'string' ? state.error : 'Please check the form for errors.',
      });
    }
    if (state.result?.optimizedSchedule) {
      try {
        const parsed = JSON.parse(state.result.optimizedSchedule);
        setOptimizedScheduleData(Array.isArray(parsed) ? parsed : [parsed]);
      } catch (error) {
        console.error("Failed to parse optimized schedule JSON:", error);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'The AI returned an invalid schedule format.',
        });
        setOptimizedScheduleData([]);
      }
    }
  }, [state, toast]);

  return (
    <>
      <Card className="shadow-lg">
        <form action={formAction}>
          <CardHeader>
            <CardTitle className="font-headline">AI Schedule Optimizer</CardTitle>
            <CardDescription>
              Input historical data and current schedules to receive an AI-powered optimization plan.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="usageData">Historical Usage Data</Label>
              <Textarea id="usageData" name="usageData" placeholder="e.g., Monday 9-11 AM: 80% full, Tuesday 2-4 PM: 50% full..." required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cleaningSchedule">Current Cleaning Schedule</Label>
              <Textarea id="cleaningSchedule" name="cleaningSchedule" placeholder="e.g., Cleaned daily at 8 AM and 6 PM." required />
            </div>
             <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="roomCapacity">Room Capacity</Label>
                    <Input id="roomCapacity" name="roomCapacity" type="number" placeholder="e.g., 8" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="customerSatisfactionMetrics">Customer Satisfaction Metrics</Label>
                    <Input id="customerSatisfactionMetrics" name="customerSatisfactionMetrics" placeholder="e.g., Complaints about cleanliness: 3/week" required />
                </div>
             </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      {state.result && (
        <div className="mt-8 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Optimization Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-2">Optimized Schedule</h3>
                    {optimizedScheduleData.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                        <thead className="text-left">
                            <tr className="border-b">
                            {Object.keys(optimizedScheduleData[0]).map(key => <th key={key} className="p-2 font-medium">{key}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {optimizedScheduleData.map((row, index) => (
                            <tr key={index} className="border-b">
                                {Object.values(row).map((val, i) => <td key={i} className="p-2">{String(val)}</td>)}
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    ) : <p className="text-muted-foreground">No schedule data to display.</p>}
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Suggested Improvements</h3>
                    <Alert>
                        <AlertTitle>Recommendations</AlertTitle>
                        <AlertDescription>{state.result.suggestedImprovements}</AlertDescription>
                    </Alert>
                </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
