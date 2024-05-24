import { Selection } from "d3";

export interface DataItem {
  dimension: string;
  measure: {
    line1: number;
    line2: number;
    line3: number;
  };
}

export abstract class AbstractLineChart {
  // 보호된 속성으로 정의하여 상속받는 클래스에서 접근 가능하도록 합니다.
  abstract data: DataItem[];

  // 추상 메서드 정의
  protected abstract drawChart(
    svg: Selection<SVGSVGElement, unknown, null, undefined>
  ): Promise<void>;
  protected abstract drawLegend(
    svg: Selection<SVGSVGElement, unknown, null, undefined>
  ): Promise<void>;

  // 렌더링 메서드는 public으로 유지
  abstract render(svg: SVGSVGElement): Promise<void>;
}
