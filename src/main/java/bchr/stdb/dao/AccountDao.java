package bchr.stdb.dao;

import bchr.stdb.entity.Account;
import bchr.stdb.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountDao extends JpaRepository<Account,Long> {
    boolean existsByCompName(String compName);

    Account findByCompName(String compName);
    List<Account> findAccountByActive(boolean active);

}
