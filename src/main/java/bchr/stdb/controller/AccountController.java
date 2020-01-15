package bchr.stdb.controller;

import bchr.stdb.entity.Account;
import bchr.stdb.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {

    @Autowired
    AccountService accountService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @PutMapping(path = {"/add"})
    public Account addNewAccount(@RequestBody Account account) {
        return this.accountService.addAccount(account);
    }
}

