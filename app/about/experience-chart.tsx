'use client';

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { skill: 'Architecture', years: 1.5 },
  { skill: 'Test', years: 3 },
  { skill: 'Full Stack', years: 5 },
  { skill: 'DevOps', years: 3 },
  { skill: 'AI', years: 2 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
  mobile: {
    label: 'Mobile',
    color: 'var(--chart-2)',
  },
} satisfies ChartConfig;

export function ExperienceChart() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Experience Chart</CardTitle>
        <CardDescription>
          A quick graph of my well-rounded experience in tech
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="skill" />
            <Radar
              dataKey="years"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          While I may not be the most experienced engineer in the room, I strive
          to be well rounded in my skillset.
        </div>
      </CardFooter>
    </Card>
  );
}
