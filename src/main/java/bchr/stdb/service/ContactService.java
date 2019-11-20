package bchr.stdb.service;

import bchr.stdb.dao.ContactDao;
import bchr.stdb.entity.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    ContactDao contactDao;

    public List getAllContacts() {
        List contactList = this.contactDao.findAll();
        return contactList;
    }

    public Contact addContact(Contact contact) {
        return this.contactDao.save(contact);
    }

    public List<Contact> getAllContactsWithAccounts() {

        List<Contact> contactList= this.contactDao.findAllContactsWithAccount();
        return contactList;
    }
}
