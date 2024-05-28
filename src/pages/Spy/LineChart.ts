import * as d3 from "d3";

export interface DataItem {
  dimension: string;
  measure: {
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

  async drawChart(
    svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
  ): Promise<void> {
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    const data = [
      {
        dimension: "January",
        measure: { line1: 50, line2: 50, line3: 50 },
      },
      {
        dimension: "February",
        measure: { line1: 500, line2: 400, line3: 300 },
      },
    ];

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.dimension))
      .range([0, width - 100]);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, ({ measure }) =>
          Math.max(measure.line1, measure.line2, measure.line3)
        )!,
      ])
      .nice()
      .range([height, 30]);

    const line1 = d3
      .line<DataItem>()
      .x((d) => x(d.dimension)!)
      .y((d) => y(d.measure.line1));

    const line2 = d3
      .line<DataItem>()
      .x((d) => x(d.dimension)!)
      .y((d) => y(d.measure.line2));

    const line3 = d3
      .line<DataItem>()
      .x((d) => x(d.dimension)!)
      .y((d) => y(d.measure.line3));

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 3)
      .attr("d", line1);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "green")
      .attr("stroke-width", 3)
      .attr("d", line2);

    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 3)
      .attr("d", line3);
  }

  async drawLegend(
    _svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
  ): Promise<void> {
    const legend = _svg
      .append("g")
      .attr("class", "legend")
      .attr("transform", `translate(450,20)`)
      .node()!;
    const legendData = ["line1", "line2", "line3"];
    const legendColors = ["steelblue", "green", "red"];

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
