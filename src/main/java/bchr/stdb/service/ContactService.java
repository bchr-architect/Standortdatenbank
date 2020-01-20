package bchr.stdb.service;

import bchr.stdb.dao.AccountDao;
import bchr.stdb.dao.ContactDao;
import bchr.stdb.dao.GroupDao;
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

    @Autowired
    GroupDao groupDao;

    Account checkAccount = new Account();


    public List getAllContacts() {
        List contactList = this.contactDao.findContactByInactive(false);
        return contactList;
    }

    public Contact addContact(Contact contact) {
        if (contact.account1!=null) {
            if (this.accountDao.existsByCompName(contact.account1.getCompName())) {
                contact.setAccount1(accountDao.findByCompName(contact.account1.getCompName()));
            }
        }

        return this.contactDao.save(contact);
    }

    public Contact addContactToGroup(Contact contact) {
        if (contact.group!=null) {
            if (this.groupDao.existsByName(contact.group.getName())) {
                contact.setGroup(groupDao.findByName(contact.group.getName()));
            }
        }

        return this.contactDao.save(contact);
    }

    public List<Contact> getAllContactsWithAccounts() {

        List<Contact> contactList = this.contactDao.findAllContactsWithAccount();
        return contactList;
    }
}
