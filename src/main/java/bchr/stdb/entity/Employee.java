package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;
import java.util.Date;

@Entity
@Table(name = "EMPLOYEE_TABLE")
public class Employee extends Auditable {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "FIRST_NAME", nullable = false, length = 30)
    private String firstName;

    @Column(name = "LAST_NAME", nullable = false, length = 30)
    private String lastName;

    @Column(name = "ADDITIVE", length = 30)
    private String additive;

    @Column(name = "PHONE", length = 30)
    private String phone;

    @Column(name = "EMAIL", length = 30)
    private String email;

    @Column(name = "CREATOR", length = 40)
    private String creatorID;

    @Column(name = "EDITED_BY", length = 40)
    private String editedByID;

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getAdditive() {
        return additive;
    }

    public String getPhone() {
        return phone;
    }

    public String getEmail() {
        return email;
    }

    public String getCreatorID() {
        return creatorID;
    }

    public String getEditedByID() {
        return editedByID;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAdditive(String additive) {
        this.additive = additive;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setCreatorID(String creatorID) {
        this.creatorID = creatorID;
    }

    public void setEditedByID(String editedByID) {
        this.editedByID = editedByID;
    }

    public Employee(String firstName, String lastName) {
        this.firstName=firstName;
        this.lastName = lastName;
    }

    public Employee(String firstName, String lastName, String additive, String phone, String email) {
        this.firstName=firstName;
        this.lastName = lastName;
        this.additive = additive;
        this.phone = phone;
        this.email = email;
    }
}
