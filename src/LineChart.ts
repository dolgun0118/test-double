import { Selection } from "d3";

export interface DataItem {
  dimension: string;
  measure: {
    line1: number;
    line2: number;
    line3: number;
  };
}

export interface LineChart {
  // 보호된 속성으로 정의하여 상속받는 클래스에서 접근 가능하도록 합니다.
  data: DataItem[];
  // 추상 메서드 정의
  drawChart(
    svg: Selection<SVGSVGElement, unknown, null, undefined>
  ): Promise<void>;
  drawLegend(
    svg: Selection<SVGSVGElement, unknown, null, undefined>
  ): Promise<void>;
  // 렌더링 메서드는 public으로 유지
  render(svg: SVGSVGElement): Promise<void>;
}
