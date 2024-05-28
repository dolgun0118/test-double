```typescript
import * as d3 from "d3";

const data = [
  {
    x: "January",
    y: { line1: 50, line2: 50, line3: 50 },
  },
  {
    x: "February",
    y: { line1: 500, line2: 400, line3: 300 },
  },
];

const legendData = ["line1", "line2", "line3"];
const legendColors = ["steelblue", "green", "red"];

export interface SVGSelection
  extends d3.Selection<SVGSVGElement, unknown, null, undefined> {}

export interface DataItem {
  x: string;
  y: {
    line1: number;
    line2: number;
    line3: number;
  };
}

export class LineChart {
  data: DataItem[];

  constructor(data: DataItem[]) {
    this.data = data;
  }

  private async drawChart(selection: SVGSelection): Promise<void> {
    const width = +selection.attr("width");
    const height = +selection.attr("height");

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.x))
      .range([0, width - 100]);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, ({ y }) => Math.max(y.line1, y.line2, y.line3))!,
      ])
      .nice()
      .range([height, 30]);

    const line1 = d3
      .line<DataItem>()
      .x((d) => x(d.x)!)
      .y((d) => y(d.y.line1));
    const line2 = d3
      .line<DataItem>()
      .x((d) => x(d.x)!)
      .y((d) => y(d.y.line2));

    const line3 = d3
      .line<DataItem>()
      .x((d) => x(d.x)!)
      .y((d) => y(d.y.line3));

    selection
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 3)
      .attr("d", line1);

    selection
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 3)
      .attr("d", line2);

    selection
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 3)
      .attr("d", line3);
  }

  private async drawLegend(selection: SVGSelection): Promise<void> {
    const legend = selection
      .append("g")
      .attr("class", "legend")
      .attr("transform", `translate(450,20)`)
      .node()!;

    const legendItem = d3
      .select(legend)
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (_, i) => `translate(0, ${i * 25})`);

    legendItem
      .append("rect")
      .attr("x", 15)
      .attr("y", 3)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (_, i) => legendColors[i]);

    legendItem
      .append("text")
      .attr("x", 35)
      .attr("y", 10)
      .text((d) => d)
      .attr("alignment-baseline", "middle");
  }

  async render(svg: SVGSVGElement): Promise<void> {
    const selection = d3.select(svg);
    this.drawChart(selection);
    this.drawLegend(selection);
  }
}
```
