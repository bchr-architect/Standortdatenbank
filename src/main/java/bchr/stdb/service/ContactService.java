package bchr.stdb.service;

import bchr.stdb.dao.AccountDao;
import bchr.stdb.dao.ContactDao;
import bchr.stdb.entity.Account;
import bchr.stdb.entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    ContactDao contactDao;

    @Autowired
    AccountDao accountDao;

    Account checkAccount = new Account();


    public List getAllContacts() {
        List contactList = this.contactDao.findAll();
        return contactList;
    }

    public Contact addContact(Contact contact) {
        if (contact.account!=null) {
            if (this.accountDao.existsByCompName(contact.account.getCompName())) {
                contact.setAccount(accountDao.findByCompName(contact.account.getCompName()));
            }
        }

        return this.contactDao.save(contact);
    }

    public List<Contact> getAllContactsWithAccounts() {

        List<Contact> contactList = this.contactDao.findAllContactsWithAccount();
        return contactList;
    }
}
