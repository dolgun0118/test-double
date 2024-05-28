```typescript
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
    console.group("drawChart is called");
    console.log(selection);
    console.groupEnd();
  }

  private async drawLegend(selection: SVGSelection): Promise<void> {
    console.group("drawLegend is called");
    console.log(selection);
    console.groupEnd();
  }

  async render(svg?: SVGSVGElement): Promise<void> {
    console.group("render is called");
    console.log(svg);
    console.groupEnd();

    if (svg) {
      const selection = d3.select(svg);
      this.drawChart(selection);
      this.drawLegend(selection);
    }
  }
}
```
