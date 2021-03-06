package bchr.stdb.controller;


import bchr.stdb.entity.Account;
import bchr.stdb.entity.Group;
import bchr.stdb.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/groups")
@CrossOrigin(origins = "http://localhost:4200")
public class GroupController {

    @Autowired
    GroupService groupService;

    @GetMapping(path = {"/all"})

    public List getAllGroups() {
        return groupService.getAllGroups();
    }

    @PutMapping(path = {"/add"})
    public Group addNewGroup(@RequestBody Group group) {
        return this.groupService.addGroup(group);
    }
}
