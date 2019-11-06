package bchr.stdb.service;

import bchr.stdb.dao.ContactDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {

    @Autowired
    ContactDao contactDao;

    public List<bchr.stdb.entity.Contact> getAllUsers() {
        return this.contactDao.findAll();
    }

    public bchr.stdb.entity.Contact addUser(bchr.stdb.entity.Contact user) {
        return this.contactDao.save(user);
    }
}
