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
