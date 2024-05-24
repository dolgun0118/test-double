// src/BarChartComponent.tsx
import { useEffect, useRef } from "react";
import { LineChart } from "./LineChart";

const LineChartComponent = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const lineChart = new LineChart([]);
      lineChart.render(svgRef.current);
    }
  }, []);

  return (
    <svg ref={svgRef} width={550} height={300}>
      <rect x={0} y={0} width={550} height={300} fill="lightgray" />
    </svg>
  );
};

export default LineChartComponent;
