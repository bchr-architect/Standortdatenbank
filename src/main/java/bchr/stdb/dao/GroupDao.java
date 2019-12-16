package bchr.stdb.dao;

import bchr.stdb.entity.Group;

import java.util.List;


public interface GroupDao extends JpaRepository<Group, Integer> {

    boolean existsByName(String compName);

    @Query(value="select * From GROUP_TABLE g Join ACCOUNT_TABLE a ON g.account_id=a.id",
            nativeQuery = true)
    List<Group> findAllGroupsWithGroup();

    @Query(value="SELECT * FROM GROUP_TABLE",
            nativeQuery = true)
    List<Group> findAll();

    Group findByName(String Name);
}
