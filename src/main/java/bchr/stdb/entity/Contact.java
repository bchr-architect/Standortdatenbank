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

    @ManyToOne
    @JoinColumn(name="ACCOUNT")
    private Account account;

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

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Contact() {
    }

    public Contact(String lastName, String firstName, String email) {
        this.lastName=lastName;
        this.firstName=firstName;
        this.email=email;
    }
}
