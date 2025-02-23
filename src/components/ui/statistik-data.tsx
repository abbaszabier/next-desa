"use client";

import { useState } from "react";
import { ChartPie } from "lucide-react";
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
    title: "Data Populasi",
    description: "January - June 2024",
    chartData: [
      { browser: "Laki-Laki", visitors: 1293, fill: "var(--color-chrome)" },
      { browser: "Perempuan", visitors: 4922, fill: "var(--color-safari)" },
    ],
    total: 6215,
  },
  pekerjaan: {
    title: "Data Pekerjaan",
    description: "January - June 2024",
    chartData: [
      { browser: "Petani", visitors: 400, fill: "var(--color-chrome)" },
      { browser: "Pedagang", visitors: 600, fill: "var(--color-safari)" },
    ],
    total: 1000,
  },
  pendidikan: {
    title: "Data Pendidikan",
    description: "January - June 2024",
    chartData: [
      { browser: "SD", visitors: 700, fill: "var(--color-chrome)" },
      { browser: "SMP", visitors: 500, fill: "var(--color-safari)" },
    ],
    total: 1200,
  },
  perkawinan: {
    title: "Data Perkawinan",
    description: "January - June 2024",
    chartData: [
      { browser: "Belum Kawin", visitors: 800, fill: "var(--color-chrome)" },
      { browser: "Sudah Kawin", visitors: 500, fill: "var(--color-safari)" },
    ],
    total: 1300,
  },
  usia: {
    title: "Data Usia",
    description: "January - June 2024",
    chartData: [
      { browser: "Dibawah 20", visitors: 500, fill: "var(--color-chrome)" },
      { browser: "Diatas 20", visitors: 800, fill: "var(--color-safari)" },
    ],
    total: 1300,
  },
  daftarPemilihTetap: {
    title: "Data Daftar Pemilih Tetap",
    description: "January - June 2024",
    chartData: [
      { browser: "Belum Daftar", visitors: 500, fill: "var(--color-chrome)" },
      { browser: "Sudah Daftar", visitors: 800, fill: "var(--color-safari)" },
    ],
    total: 1300,
  },
};

const chartConfig = {
  visitors: {
    label: "Total",
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

const colorMapping: { [key: string]: string } = {
  "var(--color-chrome)": "bg-primary",
  "var(--color-safari)": "bg-chart-2",
};

export function StatistikData() {
  const [selectedData, setSelectedData] =
    useState<keyof typeof dataOptions>("populasi");

  const { title, description, chartData, total } = dataOptions[selectedData];

  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-100 p-4 rounded-lg justify-between items-center mb-2 dark:bg-gray-900 dark:ring-gray-100">
        <h2 className="flex items-center gap-2 text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">
          <ChartPie /> Data Statistik
        </h2>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full h-fit gap-4">
        <Card className="flex flex-col w-full lg:w-[50%] h-full  shadow-sm">
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
          <div className="flex flex-row justify-center text-sm flex-wrap gap-2">
            {dataOptions[selectedData].chartData.map((entry, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-1 rounded-md"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    colorMapping[entry.fill as string]
                  }`}
                ></div>
                <span>{entry.browser}</span>
              </div>
            ))}
          </div>
          <CardFooter className="flex-col gap-2 text-sm mt-2">
            <div className="leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
        <div className="hidden lg:flex flex-col w-full lg:w-[50%] border bg-card text-card-foreground rounded-lg p-4 shadow-sm">
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
                ? "bg-primary text-white shadow-md font-bold"
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
