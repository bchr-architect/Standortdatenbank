package bchr.stdb.service;

import bchr.stdb.dao.GroupDao;
import bchr.stdb.entity.Account;
import bchr.stdb.entity.Group;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    GroupDao groupDao;

    public List getAllGroups() { return this.groupDao.findAll(); }

    // hier evtl die übergebene Gruppe als Child der Mother definieren
    public Group addGroup(Group group) { return this.groupDao.save(group); }
}
