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

    @Column(name = "PHONE", length = 30)
    private String phone;

    @Column(name = "PHONE2", length = 30)
    private String phone2;

    @Column(name = "STREET", length = 30)
    private String street;

    @Column(name = "PLACE", length = 70)
    private String place;

    @Column(name = "POSTCODE", length = 10)
    private String postCode;

    @Column(name = "COUNTRY", length = 30)
    private String country;

    @Column(name = "UST_ID", length = 40)
    private String ustID;

    @Column(name = "CONTACT_PERSON", length = 20)
    private Integer contactID;

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhone2() {
        return phone2;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getUstID() {
        return ustID;
    }

    public void setUstID(String ustID) {
        this.ustID = ustID;
    }

    public String getHomepage() {
        return homepage;
    }

    public void setHomepage(String homepage) {
        this.homepage = homepage;
    }

    public void setContacts(Set<bchr.stdb.entity.Contact> contacts) {
        this.contacts = contacts;
    }

    @Column(name = "HOMEPAGE", length = 70)
    private String homepage;


    @Column(name = "ACTIVE")
    private Boolean active;

    @Column()

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
