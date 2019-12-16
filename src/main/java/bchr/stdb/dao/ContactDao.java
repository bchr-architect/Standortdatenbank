package bchr.stdb.dao;

import bchr.stdb.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Set;

public interface ContactDao extends JpaRepository<Contact, Integer> {

    boolean existsByName(Integer ID);

    @Query(value="select * From CONTACT_TABLE c Join GROUP_TABLE g ON c.GROUP_ID=g.ID",
    nativeQuery = true)
    List<Contact> findAllContactsWithGroup();

    @Query(value="select * From CONTACT_TABLE",
            nativeQuery = true)
    List<Contact> findAll();
}
