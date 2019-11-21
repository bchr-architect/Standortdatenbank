package bchr.stdb.controller;

import bchr.stdb.entity.Contact;
import bchr.stdb.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {

    @Autowired
    ContactService contactService;

    @GetMapping(path = {"/all"})

    public List getAllContacts() {
        return contactService.getAllContacts();
    }


    @PostMapping(path={"/add"})
    public Contact addNewContact(@RequestBody Contact contact) {
        return this.contactService.addContact(contact);
    }
}
