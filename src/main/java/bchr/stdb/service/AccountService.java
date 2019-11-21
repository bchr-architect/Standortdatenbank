package bchr.stdb.service;


import bchr.stdb.dao.AccountDao;
import bchr.stdb.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    AccountDao accountDao;

    public List<Account> getAllAccounts() {
        return this.accountDao.findAll();
    }

    public Account addAccount(Account account) {
        return this.accountDao.save(account);
    }
}
