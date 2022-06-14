import java.util.ArrayList;

public class Combination {
    private final int n;
    private final int r;
    private final int[] now;
    private final ArrayList<ArrayList<Integer>> result;


    /**
     * nCr에 n과 r 이다.
     * @param n 대상 수
     * @param r 선택할 수
     */
    public Combination(int n, int r) {
        this.n = n;
        this.r = r;
        this.now = new int[r];
        this.result = new ArrayList<>();
    }


    /**
     * 앞에서부터 순서대로 해당 index의 값을 포함하거나 포함하지 않는 방식으로 구한다.
     * @param arr 원하는 값
     * @param depth 현재 세어진 개수(무조건 0 넣기)
     * @param index 현재까지 도달한 index
     * @param target 앞에서부터 진행된 수(더이상 값이 없는 끝에 도달하면 멈추기 위함)
     */
    public void combination(ArrayList<Integer> arr, int depth, int index, int target) {
        // nCr에서 r에 도달하면 원하는 결과이므로 추가
        if (depth == r) {
            ArrayList<Integer> temp = new ArrayList<>();
            for (int i = 0; i < now.length; i++) {
                temp.add(arr.get(now[i]));
            }
            result.add(temp);
            return;
        }
        // 끝까지 도달하면 그냥 리턴
        if (target == n) {
            return;
        }
        now[index] = target;
        // 해당 인덱스를 포함하는 조합
        combination(arr, depth + 1, index + 1, target + 1);
        // 해당 인덱스를 포함하지 않는 조합
        combination(arr, depth, index, target + 1);
    }

    public ArrayList<ArrayList<Integer>> getResult() {
        return result;
    }

    public static void main(String[] args) {
        ArrayList<Integer> example = new ArrayList<>();
        int count = 100;
        for (int i = 0; i < count; i++) {
            example.add(i);
        }
        Combination comb = new Combination(example.size(), 3);
        long beforeTime = System.currentTimeMillis();
        comb.combination(example, 0, 0, 0);
        long afterTime = System.currentTimeMillis();

        // 조합 결과 확인( 개수가 많을 경우 제대로 찍히지 않을 수 있음 )
//        ArrayList<ArrayList<Integer>> result = comb.getResult();
//        for (int i = 0; i < result.size(); i++) {
//            for (int j = 0; j < result.get(0).size(); j++) {
//                System.out.print(result.get(i).get(j));
//            }
//            System.out.println();
//        }

        // 500개중 3개 선택 -> 1810ms
        // 100개중 3개 선택 -> 34ms
        System.out.println((afterTime - beforeTime) + "ms");
    }

}
