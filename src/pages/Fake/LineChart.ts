import { AbstractLineChart, DataItem } from "../../AbstractLineChart";

export class LineChart extends AbstractLineChart {
  data: DataItem[];

  constructor(data: DataItem[]) {
    super();
    this.data = data;
  }

  protected async drawChart(_svg: SVGSVGElement): Promise<void> {
    throw new Error("Method not implemented.");
  }

  protected async drawLegend(_svg: SVGSVGElement): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async render(svg: SVGSVGElement): Promise<void> {
    this.drawChart(svg);
    this.drawLegend(svg);
  }
}
