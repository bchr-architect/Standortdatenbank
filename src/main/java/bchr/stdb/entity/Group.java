package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;

@Entity
@Table(name = "GROUP_TABLE")
public class Group extends Auditable {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "NAME", nullable = false, length = 30)
    private String name;

    @Column(name = "ADDITIVE", length = 30)
    private String additive;

    @Column(name = "MOTHER_ID", length = 10)
    private Integer motherID;

   @Column(name = "CREATOR", length = 40)
    private String creatorID;

    @Column(name = "EDITED_BY", length = 40)
    private String editedByID;

    public String getName() {
        return name;
    }

    public String getAdditive() {
        return additive;
    }

    public Integer getMotherID() {
        return motherID;
    }

    public String getCreatorID() {
        return creatorID;
    }

    public String getEditedByID() {
        return editedByID;
    }

    public Group(String name) {
        this.name=name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAdditive(String additive) {
        this.additive = additive;
    }

    public void setMotherID(Integer motherID) {
        this.motherID = motherID;
    }

    public void setCreatorID(String creatorID) {
        this.creatorID = creatorID;
    }

    public void setEditedByID(String editedByID) {
        this.editedByID = editedByID;
    }

    public Group(String name, String addtive) {
        this.name=name;
        this.additive = addtive;
    }

    public Group(String name, String addtive, Integer motherID) {
        this.name=name;
        this.additive = addtive;
        this.motherID = motherID;
    }
}
