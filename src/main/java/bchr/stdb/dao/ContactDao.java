package bchr.stdb.dao;

import bchr.stdb.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface ContactDao extends JpaRepository<Contact, Integer> {

    @Query(value="select * From CONTACT_TABLE c Join ACCOUNT_TABLE a ON c.account_id=a.id",
    nativeQuery = true)
    List<Contact> findAllContactsWithAccount();
}
