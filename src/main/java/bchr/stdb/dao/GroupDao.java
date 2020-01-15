package bchr.stdb.dao;

import bchr.stdb.entity.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface GroupDao extends JpaRepository<Group, Integer> {

    boolean existsByName(String compName);

    Group findByName(String Name);
    List<Group> findGroupByActive(boolean active);

    //Group updateGroup(String name);

}
