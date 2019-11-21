package bchr.stdb.dao;

import bchr.stdb.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountDao extends JpaRepository<Account,Integer> {

}
