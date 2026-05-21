import java.util.ArrayList;

class Employee{
    public void work(){}
}

class FrontendDev extends Employee{
    public void work(){
        System.out.println("BUILDING UI");
    }
}

class BackendDev extends  Employee{
    public void work(){
        System.out.println("BUILDING API's ");
    }
}



public class Main {
    public static void main(String[] args) {
        ArrayList<Employee> employees=new ArrayList<>();
        FrontendDev user1=new FrontendDev();
        BackendDev user2 = new BackendDev();
        employees.add(user1);
        employees.add(user2);

        for(Employee emp: employees){
            emp.work();
        }
    }
    
}



