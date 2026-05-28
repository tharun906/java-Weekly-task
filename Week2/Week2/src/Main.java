import java.util.*;

public class Main  {
    public static void main(String[] args) {
//        Task 1: The "Smart Warehouse" System
//              - Create a class Product with id, name, and price.
//              - Use an ArrayList<Product> to store 5 different products.
//              - Write a loop to find the most expensive product in the list and print its name.
//
//        Task 2: The "Employee Directory" (HashMap)
//              - Create a HashMap<Integer, String> where the Key is the EmployeeID and the Value is the Name.
//              - Add 3 employees to the map.
//              - Write a program where the user can enter an ID, and it prints: "Employee found: [Name]" or "Employee not found."

//       Task 1
        List<Product> product= Arrays.asList(
                new Product(1,"naga",999),
                new Product(2,"tharun",10),
                new Product(3,"vignesh",1000),
                new Product(4,"hari",120),
                new Product(5,"krishna",500)
        );

        Product expensive = product.get(0);

        for(Product p : product){
            if(p.getPrice()> expensive.getPrice()){
                expensive=p;
            }
        }
        System.out.println("expensive :" +expensive.getName());




//       Task 2
        Scanner sc= new Scanner(System.in);
        int id=sc.nextInt();

        HashMap<Integer,String>  map= new HashMap<>();
        map.put(1,"Nags");
        map.put(2,"thaun");
        map.put(3,"vig");

      String name= map.get(id);
      if(name ==null){
          System.out.println("Employee Not Found");
      }
      else{
          System.out.println("Employee Name : "+name);
      }
    }
}

