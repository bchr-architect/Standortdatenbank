package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.*;
import javax.persistence.*;

@Entity
@Table(name = "GROUP_TABLE")
public class Group extends Auditable {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "ACTIVE")
    private Boolean active;

    @Column(name = "NAME", nullable = false, length = 30)
    private String name;

    @Column(name = "ADDITIVE", length = 30)
    private String additive;

    // 1 Group -> x Contacts
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "group")
    @JsonIgnoreProperties
    private Set<Contact> contacts = new HashSet<>();

    // 1 Group -> x Contacts
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "branche")
    @JsonIgnoreProperties("branche")
    private Set<Account> accounts = new HashSet<>();

    public Set<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(Set<Account> accounts) {
        this.accounts = accounts;
    }

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

    public Integer getId() {
        return id;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Group() {
    }
}
