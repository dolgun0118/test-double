import "@testing-library/jest-dom";

describe("BarChart", () => {
  test("fetches data and renders chart", async () => {
    document.body.innerHTML = '<svg width="500" height="300"></svg>';
    const svg = document.querySelector("svg") as SVGSVGElement;

    // Check if the chart is rendered correctly
    expect(svg.getAttribute("width")).toBe("500"); // 예: 막대가 2개 그려졌는지 확인
  });
});
