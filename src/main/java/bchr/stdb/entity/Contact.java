package bchr.stdb.entity;

import javax.persistence.*;

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

    protected Contact() {
    }
}
