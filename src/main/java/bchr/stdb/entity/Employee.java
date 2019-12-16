package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "EMPLOYEE_TABLE")
public class Employee extends Auditable {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "EMPLOYEE_ID")
    private Set<Contact> contacts = new HashSet<>();

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

    public Set<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(Set<Contact> contacts) {
        this.contacts = contacts;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAdditive() {
        return additive;
    }

    public void setAdditive(String additive) {
        this.additive = additive;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Employee() {

    }

    public void addContact(Contact contact) {
        this.contacts.add(contact);
        contact.setEmployee(this);
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
