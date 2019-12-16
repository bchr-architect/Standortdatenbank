package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

@Entity
@Table(name = "GROUP_TABLE")
public class Group extends Auditable {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "GROUP_ID")
    private Set<Contact> contacts = new HashSet<>();

    @Column(name = "NAME", nullable = false, length = 30)
    private String name;

    @Column(name = "ADDITIVE", length = 30)
    private String additive;

    @Column(name = "MOTHER_ID", length = 10)
    private Integer motherID;

    public Set<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(Set<Contact> contacts) {
        this.contacts = contacts;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAdditive() {
        return additive;
    }

    public void setAdditive(String additive) {
        this.additive = additive;
    }

    public Integer getMotherID() {
        return motherID;
    }

    public void setMotherID(Integer motherID) {
        this.motherID = motherID;
    }

    public Group() {
    }

    public void addContact(Contact contact) {
        this.contacts.add(contact);
        contact.setGroup(this);
    }

    public Group(String name, String addtive) {
        this.name=name;
        this.additive = addtive;
    }

    public Group(String name, String addtive, Integer motherID) {
        this.name=name;
        this.additive = addtive;
        this.motherID = motherID;
    }
}
