"use client";

import { useState } from "react";
import { ChartPie, TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const dataOptions = {
  populasi: {
    title: "Statistik Populasi ",
    description: "January - June 2024",
    chartData: [
      { browser: "Laki-Laki", visitors: 500, fill: "var(--color-chrome)" },
      { browser: "Perempuan", visitors: 800, fill: "var(--color-safari)" },
    ],
    total: 1300,
  },
  pekerjaan: {
    title: "Data Pekerjaan Warga",
    description: "January - June 2024",
    chartData: [
      { browser: "Petani", visitors: 400, fill: "var(--color-chrome)" },
      { browser: "Pedagang", visitors: 600, fill: "var(--color-safari)" },
    ],
    total: 1000,
  },
  pendidikan: {
    title: "Data Pendidikan Warga",
    description: "January - June 2024",
    chartData: [
      { browser: "SD", visitors: 700, fill: "var(--color-chrome)" },
      { browser: "SMP", visitors: 500, fill: "var(--color-safari)" },
    ],
    total: 1200,
  },
};

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-6))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function StatistikData() {
  const [selectedData, setSelectedData] =
    useState<keyof typeof dataOptions>("populasi");

  const { title, description, chartData, total } = dataOptions[selectedData];

  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2">
        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <ChartPie /> Data Statistik
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full h-fit gap-4">
        <Card className="flex flex-col w-full md:w-[50%] h-full  shadow-sm">
          <CardHeader className="items-center pb-0">
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                            >
                              {total}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              Visitors
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
        <div className="flex flex-col w-full md:w-[50%] border bg-card text-card-foreground rounded-lg p-4 shadow-sm">
          <div className="flex flex-col gap-3">
            {Object.keys(dataOptions).map((key) => {
              const isActive = selectedData === key;
              return (
                <div
                  key={key}
                  onClick={() =>
                    setSelectedData(key as keyof typeof dataOptions)
                  }
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition duration-300
            ${
              isActive
                ? "bg-[#7441E0] text-white shadow-md"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            }
          `}
                >
                  <ChartPie
                    className={`${
                      isActive
                        ? "text-white"
                        : "text-gray-600 dark:text-gray-300"
                    } transition duration-300`}
                  />
                  <span className="font-medium">
                    {dataOptions[key as keyof typeof dataOptions].title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
