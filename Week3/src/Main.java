import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class Employee {
    private String name;
    private String department;
    private int salary;
    private int experienceYears;

    Employee(String name, String department, int salary,int experienceYears){
        this.name=name;
        this.department=department;
        this.salary=salary;
        this.experienceYears=experienceYears;
    }

    public String getName() {return name;}

    public String getDepartment() {return department;}

    public double getSalary() {return salary;}

    public int getExperienceYears() {return experienceYears;}
}

public class Main{
    public static void main(String[] args) {
        List<Employee> emp = Arrays.asList(
                new Employee("tharun", "ece" ,100, 1),
                new Employee("vignesh", "ece" ,200, 2),
                new Employee("naga", "cse" ,200, 1),
                new Employee("Ashkay", "ece" ,100, 3),
                new Employee("krishna", "ece" ,100, 5),
                new Employee("praveen", "ece" ,100, 2)
        );

        List<String>  details= emp.stream()
                .filter(employee -> employee.getExperienceYears() <=2)
                .map(employee -> employee.getName().toUpperCase())
                .collect(Collectors.toList());

        System.out.println(details);

//        List<String> a = new ArrayList<>();
//        while(true){
//            a.add("hi");
//        }
//        java.lang.OutOfMemoryError because heap is full
    }
}
