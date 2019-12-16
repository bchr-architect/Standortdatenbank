package bchr.stdb.service;

import bchr.stdb.dao.AccountDao;
import bchr.stdb.dao.EmployeeDao;
import bchr.stdb.entity.Account;
import bchr.stdb.entity.Employee;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeDao employeeDao;

    @Autowired
    AccountDao accountDao;

    Account checkAccount = new Account();

    public List getAllEmployees() {
        List employeeList = this.employeeDao.findAll();
        return employeeList;
    }

    public Employee addEmployee(Employee employee) {
        return this.employeeDao.save(employee);
    }

    public List<Employee> getAllEmployeesWithContacts() {
        List<Employee> employeeList = this.employeeDao.findAllEmployeesWithAccount();
        return employeeList;
    }
}
