"use client";
import { AreaChart } from "@tremor/react";

export function AreaChartHero({ chartData }: { chartData: any }) {
  console.log("🚀  HERE>>>>>> :  : AreaChartHero : chartData:", chartData);
  return (
    <AreaChart
      className="h-80"
      data={chartData}
      index="date"
      categories={["mood"]}
      colors={["orange"]}
      yAxisWidth={20}
      onValueChange={(v) => console.log(v)}
    />
  );
}
