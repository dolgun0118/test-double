import * as d3 from "d3";

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

  async render(svg: SVGSVGElement): Promise<void> {
    const selection = d3.select(svg);
    this.drawChart(selection);
    this.drawLegend(selection);
  }
  private drawChart(data: DataItem[]) {
    const svg = d3.select(this.svg);
    const width = +svg.attr("width");
    const height = +svg.attr("height");

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.name))
      .range([0, width - 100]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.line1, d.line2, d.line3))!])
      .nice()
      .range([height, 30]);

    const line1 = d3
      .line<DataItem>()
      .x((d) => x(d.name)!)
      .y((d) => y(d.line1));

    const line2 = d3
      .line<DataItem>()
      .x((d) => x(d.name)!)
      .y((d) => y(d.line2));

    const line3 = d3
      .line<DataItem>()
      .x((d) => x(d.name)!)
      .y((d) => y(d.line3));

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

  private drawLegend() {
    const legendData = ["line1", "line2", "line3"];
    const legendColors = ["steelblue", "green", "red"];

    const legendItem = d3
      .select(this.legend)
      .selectAll(".legend-item")
      .data(legendData)
      .enter()
      .append("g")
      .attr("class", "legend-item")
      .attr("transform", (d, i) => `translate(0, ${i * 25})`);

    legendItem
      .append("rect")
      .attr("x", 15)
      .attr("y", 3)
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (d, i) => legendColors[i]);

    legendItem
      .append("text")
      .attr("x", 35)
      .attr("y", 10)
      .text((d) => d)
      .attr("alignment-baseline", "middle");
  }
}
