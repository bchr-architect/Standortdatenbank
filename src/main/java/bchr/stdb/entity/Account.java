package bchr.stdb.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="ACCOUNT_TABLE")
public class Account {


    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "COMP_NAME", nullable = false, length = 30)
    private String compName;


    @Column(name = "EMAIL", length = 70)
    private String email;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    @JsonManagedReference
    private Set<Contact> contacts = new HashSet<>();

    public Account() {

    }

    public Account(String name) {
        this.compName=name;
    }

    public Account(String name, Contact[] contacts) {
        this.compName=name;
    }

    public String getCompName() {
        return compName;
    }

    public void setCompName(String compName) {
        this.compName = compName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(Set<Contact> contacts) {
        this.contacts = contacts;
    }

    public void addContact(Contact contact) {
        this.contacts.add(contact);
        contact.setAccount(this);
    }
}
