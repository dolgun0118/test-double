## Dummy Test

```typescript
import { LineChart } from "./LineChart";

describe("LineChart", () => {
  test("render method should call drawChart and drawLegend", async () => {
    document.body.innerHTML =
      '<svg id="line_chart_spy" width="500" height="300"></svg>';
    const svg = document.querySelector("svg")!;

    const chart = new LineChart([]);

    // Spy on drawChart and drawLegend methods
    const drawChartSpy = jest.spyOn(chart, "drawChart");
    const drawLegendSpy = jest.spyOn(chart, "drawLegend");
    const renderSpy = jest.spyOn(chart, "render");

    await chart.render(svg);

    // Check if drawChart and drawLegend are called
    expect(drawChartSpy).toHaveBeenCalled();
    expect(drawLegendSpy).toHaveBeenCalled();

    // Check if drawChart and drawLegend are called with arg
    expect(renderSpy).toHaveBeenCalledWith(svg);

    const renderArgs = renderSpy.mock.calls[0];
    const svgArg = renderArgs[0];
    expect(svgArg.id).toBe("line_chart_spy");
  });
});
```
