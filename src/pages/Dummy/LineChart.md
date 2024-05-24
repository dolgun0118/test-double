```typescript
import * as d3 from "d3";
import { AbstractLineChart, DataItem } from "../../AbstractLineChart";

export class LineChart extends AbstractLineChart {
  data: DataItem[];

  constructor(data: DataItem[]) {
    super();
    this.data = data;
  }

  protected drawChart(
    _svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  protected async drawLegend(
    _svg: d3.Selection<SVGSVGElement, unknown, null, undefined>
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async render(svg: SVGSVGElement): Promise<void> {
    const selection = d3.select(svg);

    this.drawChart(selection);
    this.drawLegend(selection);
  }
}
```
