package bchr.stdb.controller;

import bchr.stdb.entity.Contact;
import bchr.stdb.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class ContactController {
    @Autowired
    ContactService contactService;

    @RequestMapping(value="/all", method = RequestMethod.GET)
    public List<Contact> getAllUsers() {
        return contactService.getAllUsers();
    }

    @RequestMapping(value = "/addcustomer", method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody()
    public Contact addNewUser(@RequestBody Contact user) {
        return this.contactService.addUser(user);
    }
}
