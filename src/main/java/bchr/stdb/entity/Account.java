package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;
import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="ACCOUNT_TABLE")
public class Account extends Auditable {


    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "COMP_NAME", nullable = false, length = 30)
    private String compName;

    @Column(name = "EMAIL", length = 70)
    private String email;

    @Column(name = "ACTIVE")
    private Boolean active;

    // 1 Account -> x Contacts
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "account")
    @JsonIgnoreProperties("account")
    private Set<Contact> contacts = new HashSet<>();

    public Account() {

    }

    public Integer getID() {
        return id;
    }

    public void setID(Integer ID) {
        this.id = ID;
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

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
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

    public String toString() {
        return this.compName;
    }
}
