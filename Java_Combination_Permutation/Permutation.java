import java.util.ArrayList;

class Permutation {
    private final int n;
    private final int r;
    private final int[] now;
    private final ArrayList<ArrayList<Integer>> result;

    /**
     * nPr에 n과 r 이다.
     * @param n 대상의 수
     * @param r 선택할 수
     */
    public Permutation(int n, int r) {
        this.n = n;
        this.r = r;
        this.now = new int[r];
        this.result = new ArrayList<>();
    }

    public void swap(ArrayList<Integer> arr, int i, int j) {
        int temp = arr.get(i);
        arr.set(i, arr.get(j));
        arr.set(j, temp);
    }

    /**
     * swap하여 앞에서부터 하나씩 고정시켜 개수를 구함
     * @param arr 대상
     * @param depth 현재 선택된 수
     */
    public void permutation(ArrayList<Integer> arr, int depth) {
        // 원하는 개수에 도달하면 결과에 저장
        if (depth == r) {
            ArrayList<Integer> temp = new ArrayList<>();
            for (int i = 0; i < now.length; i++) {
                temp.add(now[i]);
            }
            result.add(temp);
            return;
        }

        for (int i = depth; i < n; i++) {
            swap(arr, i, depth);
            now[depth] = arr.get(depth);
            permutation(arr, depth + 1);
            swap(arr, i, depth);
        }
    }

    public ArrayList<ArrayList<Integer>> getResult() {
        return result;
    }

    public static void main(String[] args) {
        ArrayList<Integer> example = new ArrayList<>();
        int count = 300;
        for (int i = 0; i < count; i++) {
            example.add(i);
        }
        Permutation perm = new Permutation(example.size(), 3);
        long beforeTime = System.currentTimeMillis();
        perm.permutation(example, 0);
        long afterTime = System.currentTimeMillis();

        // 순열 결과 확인( 개수가 많을 경우 제대로 찍히지 않을 수 있음 )
//        ArrayList<ArrayList<Integer>> result = perm.getResult();
//        for (int i = 0; i < result.size(); i++) {
//            for (int j = 0; j < result.get(0).size(); j++) {
//                System.out.print(result.get(i).get(j));
//            }
//            System.out.println();
//        }

        // 500개중 3개 선택 -> 안나옴...
        // 300개중 3개 선택 -> 3354ms
        // 100개중 3개 선택 -> 189ms
        System.out.println((afterTime - beforeTime) + "ms");
    }
}