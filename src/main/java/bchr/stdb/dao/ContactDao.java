package bchr.stdb.dao;

import bchr.stdb.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactDao extends JpaRepository<Contact, Integer> {
}
