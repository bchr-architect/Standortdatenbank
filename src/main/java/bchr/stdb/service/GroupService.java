package bchr.stdb.service;

import bchr.stdb.dao.AccountDao;
import bchr.stdb.dao.GroupDao;
import bchr.stdb.entity.Account;
import bchr.stdb.entity.Contact;
import bchr.stdb.entity.Group;

import java.util.List;

@Service
public class GroupService {

    @Autowired
    GroupDao groupDao;

    Account checkAccount = new Account();

    public List getAllGroups() {
        List groupList = this.groupDao.findAll();
        return groupList;
    }

    public Group addGroup(Group group) {
        return this.groupDao.save(group);
    }
}
