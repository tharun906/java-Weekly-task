public class App {
    public static void main(String[] args) throws Exception {
        A a =new  B();
        System.out.println(a.age);

    }
}


class A{

    int age =10;
        void are(){
        System.out.println("Area of rectangle");
    }

}

class B extends A{

        void are(){
        System.out.println("Area of rhhhhhhhhhhhhhhhhhhhhhhhhhectangle");
    }

}

