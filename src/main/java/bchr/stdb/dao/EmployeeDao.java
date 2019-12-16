package bchr.stdb.dao;

import bchr.stdb.entity.Employee;

import java.util.List;

public interface EmployeeDao extends JpaRepository<Employee, Integer>  {

    @Query(value="select * From EMPLOYEE_TABLE e Join ACCOUNT_TABLE a ON e.account_id=a.id",
            nativeQuery = true)
    List<Employee> findAllEmployeesWithAccount();

    @Query(value="SELECT * FROM EMPLOYEE_TABLE",
            nativeQuery = true)
    List<Employee> findAll();


}
