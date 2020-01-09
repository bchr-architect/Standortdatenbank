package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.*;
import javax.persistence.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

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

    // x Children -> 1 Mother
    @ManyToOne(fetch = FetchType.EAGER, cascade= CascadeType.ALL)
    @JoinColumn(name="MOTHER")
    public Group mother;

    // 1 Mother -> x Children
    @OneToMany(cascade = CascadeType.PERSIST, mappedBy="mother")
    @JsonIgnoreProperties("mother")
    public Set<Group> children = new HashSet<>();

    // 1 Group -> x Contacts
    @OneToMany(cascade = CascadeType.PERSIST, mappedBy = "group")
    @JsonIgnoreProperties("group")
    private Set<Contact> contacts = new HashSet<>();

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

    public Group getMother() {
        return mother;
    }

    public void setMother(Group mother) {
        this.mother = mother;
    }

    public Set<Group> getChildren() {
        return children;
    }

    public void setChildren(Set<Group> children) {
        this.children = children;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Group() {
    }

    public Group(String name, String additive) {
        this.name=name;
        this.additive = additive;
    }

    public Group(String name, String additive, Group mother, Group[] children) {
        this.name=name;
        this.additive = additive;
        this.mother = mother;
    }
}