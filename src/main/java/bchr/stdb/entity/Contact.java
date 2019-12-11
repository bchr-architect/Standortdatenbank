package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;
import com.fasterxml.jackson.annotation.*;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.Date;

@Entity
@Table(name = "CONTACT_TABLE")
@Transactional
public class Contact extends Auditable {
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Account_id")
    @JsonIgnoreProperties("contacts")
    public Account account;

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
    public Contact(String lastName, String firstName, String email, Account account) {
        this.lastName=lastName;
        this.firstName=firstName;
        this.email=email;
        this.account=account;
    }
}
