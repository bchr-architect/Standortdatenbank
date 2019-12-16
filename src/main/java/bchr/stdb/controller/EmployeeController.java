package bchr.stdb.controller;


import bchr.stdb.entity.Employee;
import bchr.stdb.service.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping(path = {"/all"})

    public List getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping(path={"/add"})
    public Employee addNewEmployee(@RequestBody Employee employee) {
        return this.employeeService.addEmployee(employee);
    }
}
