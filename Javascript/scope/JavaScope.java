class JavaScope {
    public static void main(String[] args) {
        if(true){
            int a = 4;
            System.out.println(a);
        }
        System.out.println(a); // java: cannot find symbol
    }

    static void test(){
        int a = 4;
        System.out.println(a); // 4
    }
}