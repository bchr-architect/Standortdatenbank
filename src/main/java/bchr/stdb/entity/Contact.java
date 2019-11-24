package bchr.stdb.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "CONTACT_TABLE")
public class Contact {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "LAST_NAME", nullable = false, length = 30)
    private String lastName;

    @Column(name = "FIRST_NAME", nullable = false, length = 30)
    private String firstName;

    @Column(name = "EMAIL", length = 70)
    private String email;

    @Column(name = "PHONE", length = 30)
    private String phoneNr;

    @Column(name = "STREET", length = 60)
    private String street;

    @Column(name = "PLACE", length = 60)
    private String place;

    @Column(name = "POSTCODE", length = 10)
    private String postcode;

    @Column(name = "COUNTRY", length = 60)
    private String country;

    @Column(name = "HOMEPAGE", length = 100)
    private String homepage;

    @Column(name = "GROUP", length = 30)
    private Integer contactGrp;

    @Column(name = "UIDNr", length = 30)
    private String uidNr;

    @Column(name = "INACTIVE", nullable = false)
    private boolean inactive;

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {return this.lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNr() {
        return phoneNr;
    }

    public void setPhoneNr(String phoneNr) {
        this.phoneNr = phoneNr;
    }

    public Integer getContactGrp() {
        return contactGrp;
    }

    public void setContactGrp(Integer contactGrp) {
        this.contactGrp = contactGrp;
    }

    public String getUidNr() {
        return uidNr;
    }

    public void setUidNr(String uidNr) {
        this.uidNr = uidNr;
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

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getHomepage() {
        return homepage;
    }

    public void setHomepage(String homepage) {
        this.homepage = homepage;
    }

    public boolean isInactive() {
        return inactive;
    }

    public void setInactive(boolean inactive) {
        this.inactive = inactive;
    }

    public Contact() {
    }

    public Contact(String lastName, String firstName, String email, String phoneNr, Integer contactGrp, String uidNr, String country, String place, String street, String postcode, String homepage ) {
        this.lastName=lastName;
        this.firstName=firstName;
        this.email=email;
        this.phoneNr=phoneNr;
        this.contactGrp = contactGrp;
        this.uidNr = uidNr;
        this.country = country;
        this.place = place;
        this.street = street;
        this.postcode = postcode;
        this.homepage = homepage;
        this.inactive = false;
    }
}
