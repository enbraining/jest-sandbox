import { sum } from './toBe';

// 테스트_케이스_이름: string, () => {}: 예상되는_결과
test("sum 함수는 1과 2를 더해서 3을 반환한다.", () => {
    expect(sum(1, 2)).toBe(3);
})
