public class Developer {
    private String name;
    private int salary;
    private String stack;

    Developer(){

    }

    Developer(String name, int salary, String stack){
        this.name=name;
        this.salary=salary;
        this.stack=stack;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary){
        this.salary=salary;
    }

    public String getStack(){
        return stack;
    }

    public void setStack(String stack){
        this.stack=stack;
    }

    void details(){
        System.out.println("my name is "+name);
        System.out.println("my salary is "+salary);
        System.out.println("my stack is "+stack);
    }
    
}

class Main{
    public static void main(String[] args) {
        Developer a1=new Developer("Tharun",1000000,"FULL STACK DEVELOPER");
        a1.details();
    }
}


