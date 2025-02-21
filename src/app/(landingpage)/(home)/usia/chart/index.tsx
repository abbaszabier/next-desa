"use client";

import { LabelList, Pie, PieChart } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { UsiaTable } from "../table";
const chartData = [
  { browser: "PNS", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "Karyawan Swasta", visitors: 200, fill: "var(--color-safari)" },
  { browser: "Petani", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "Buruh", visitors: 173, fill: "var(--color-edge)" },
  { browser: "Wiraswasta", visitors: 173, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function UsiaChart() {
  return (
    <Card className="flex flex-col rounded-2xl">
      <CardContent className="flex-1 pb-0 space-y-10">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[500px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <UsiaTable />
      </CardContent>
    </Card>
  );
}
