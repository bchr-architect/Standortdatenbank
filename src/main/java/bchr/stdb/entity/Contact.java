package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;
import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "CONTACT_TABLE")
@Transactional
public class Contact extends Auditable {
    @Column(name = "ID")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "LAST_NAME", nullable = false, length = 30)
    private String lastName;

    @Column(name = "FIRST_NAME", nullable = false, length = 30)
    private String firstName;

    @Column(name = "CORPORATION", length = 30)
    private String corporation;

    @Column(name = "STREET", length = 30)
    private String street;

    @Column(name = "PLACE", length = 70)
    private String place;

    @Column(name = "POSTCODE", length = 10)
    private String postCode;

    @Column(name = "COUNTRY", length = 30)
    private String country;

    @Column(name = "MAILBOX", length = 30)
    private String mailbox;

    @Column(name = "MAILBOX_PLACE", length = 70)
    private String mailboxPlace;

    @Column(name = "MAILBOX_POSTCODE", length = 10)
    private String mailboxPostcode;

    @Column(name = "MAILBOX_COUNTRY", length = 30)
    private String mailboxCountry;

    @Column(name = "PHONE", length = 30)
    private String phone;

    @Column(name = "PHONE2", length = 30)
    private String phone2;

    @Column(name = "PHONE3", length = 30)
    private String phone3;

    @Column(name = "PHONE4", length = 30)
    private String phone4;

    @Column(name = "FAX", length = 30)
    private String fax;

    @Column(name = "EMAIL", length = 70)
    private String email;

    @Column(name = "EMAIL2", length = 70)
    private String email2;

    @Column(name = "HOMEPAGE", length = 70)
    private String homepage;

    @Column(name = "BIRTHDAY", length = 30)
    private Date birthday;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "Account1_id")
    @JsonIgnoreProperties("contacts")
    public Account account1;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "Account2_id")
    @JsonIgnoreProperties("contacts")
    public Account account2;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "Account3_id")
    @JsonIgnoreProperties("contacts")
    public Account account3;

    // x Contacts -> 1 Group
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "Group_id")
    @JsonIgnoreProperties("groups")
    public Group group;

    @Column(name = "CREATOR", length = 40)
    private String creatorID;

    @Column(name = "EDITED_BY", length = 40)
    private String editedByID;

    @Column(name = "REPRESENTATIVE", length = 20)
    private String representativeID;

    @Column(name = "LANGUAGE", length = 20)
    private String languageID;

    @Column(name = "SHIPPING_ADDRESS", length = 20)
    private String shippingAddress;

    @Column(name = "REF_ADDRESS", length = 20)
    private String refAddress;

    @Column(name = "REF_ADDRESS2", length = 20)
    private String refAddress2;

    @Column(name = "ADDITIONAL", length = 80)
    private String additional;

    @Column(name = "ADDITIONAL2", length = 80)
    private String additional2;

    @Column(name = "ADDITIONAL3", length = 80)
    private String additional3;

    @Column(name = "INACTIVE")
    private Boolean inactive;

    @Column(name = "PRIVATE_PERSON")
    private Boolean privatePerson;

    @Column(name = "APPELLATION", length = 40)
    private String appellation;

    @Column(name = "TITLE", length = 40)
    private String title;

    @Column(name = "MEMO", length = 20)
    private Integer memo;

    @Column(name = "DEPARTMENT1", length = 70)
    private String department1;
    @Column(name = "DEPARTMENT2", length = 70)
    private String department2;

    @Column(name = "DEPARTMENT3", length = 70)
    private String department3;


    @Column(name = "FUNCTION1", length = 70)
    private String function1;
    @Column(name = "FUNCTION2", length = 70)
    private String function2;

    @Column(name = "FUNCTION3", length = 70)
    private String function3;


    @Column(name = "FREE_FLAG1")
    private Boolean freeFlag1;

    @Column(name = "FREE_FLAG2")
    private Boolean freeFlag2;

    @Column(name = "DISPLAY_NAME", length = 70)
    private String displayName;

    @Column(name = "TRADE_FLAG")
    private Boolean tradeFlag;

    @Column(name = "PRODUCTION_FLAG")
    private Boolean productionFlag;

    @Column(name = "SERVICE_FLAG")
    private Boolean serviceFlag;

    @Column(name = "STATUS", length = 1)
    private Integer status;

    @Column(name = "CONTACT_TYPE", length = 1)
    private Integer contactType;

    @Column(name = "DSV_FLAG")
    private Boolean dsvFlag;

    @Column(name = "DSV_SOURCE_OF_DATA")
    private String dsvSourceOfData;

    @Column(name = "DSV_NOTIFICATION")
    private Boolean dsvNotification;

    @Column(name = "DSV_DIRECT_AD_FLAG")
    private Boolean dsvDirectAdFlag;

    @Column(name = "DSV_ANONYMISED")
    private Boolean dsvAnonymised;

    @Column(name = "DSV_ANONYMISED_BY")
    private String dsvAnonymisedBy;

    @Column(name = "DSV_DATA_COLLECTION")
    private Date dsvDataCollection;

    @Column(name = "REGION", length = 70)
    private String region;

    @Column(name = "TARGET_AUDIENCE", length = 10)
    private String targetAudience;

    @Column(name = "NOTES", length = 100)
    private String notes;

    public Integer getId() {
        return id;
    }

    public String getCorporation() {
        return corporation;
    }

    public String getStreet() {
        return street;
    }

    public String getPlace() {
        return place;
    }

    public String getPostCode() {
        return postCode;
    }

    public String getCountry() {
        return country;
    }

    public String getMailbox() {
        return mailbox;
    }

    public String getMailboxPlace() {
        return mailboxPlace;
    }

    public String getMailboxPostcode() {
        return mailboxPostcode;
    }

    public String getMailboxCountry() {
        return mailboxCountry;
    }

    public String getPhone() {
        return phone;
    }

    public String getPhone2() {
        return phone2;
    }

    public String getPhone3() {
        return phone3;
    }

    public String getPhone4() {
        return phone4;
    }

    public String getFax() {
        return fax;
    }

    public String getEmail2() {
        return email2;
    }

    public String getHomepage() {
        return homepage;
    }

    public String getCreatorID() {
        return creatorID;
    }

    public String getEditedByID() {
        return editedByID;
    }

    public String getRepresentativeID() {
        return representativeID;
    }

    public String getLanguageID() {
        return languageID;
    }


    public String getShippingAddress() {
        return shippingAddress;
    }

    public String getRefAddress() {
        return refAddress;
    }

    public String getAdditional() {
        return additional;
    }

    public String getAdditional2() {
        return additional2;
    }

    public String getAdditional3() {
        return additional3;
    }

    public Boolean getInactive() {
        return inactive;
    }

    public Boolean getPrivatePerson() {
        return privatePerson;
    }

    public String getAppellation() {
        return appellation;
    }

    public String getTitle() {
        return title;
    }

    public Integer getMemo() {
        return memo;
    }


    public String getDepartment1() {
        return department1;
    }


    public String getDepartment2() {
        return department2;
    }


    public String getDepartment3() {
        return department3;
    }

    public String getFunction1() {
        return function1;
    }

    public String getFunction2() {
        return function2;
    }

    public String getFunction3() {
        return function3;
    }


    public Boolean getFreeFlag1() {
        return freeFlag1;
    }

    public Boolean getFreeFlag2() {
        return freeFlag2;
    }

    public String getDisplayName() {
        return displayName;
    }

    public Boolean getTradeFlag() {
        return tradeFlag;
    }

    public Boolean getProductionFlag() {
        return productionFlag;
    }

    public Boolean getServiceFlag() {
        return serviceFlag;
    }

    public Integer getStatus() {
        return status;
    }

    public Integer getContactType() {
        return contactType;
    }

    public Boolean getDsvFlag() {
        return dsvFlag;
    }

    public String getDsvSourceOfData() {
        return dsvSourceOfData;
    }

    public Boolean getDsvNotification() {
        return dsvNotification;
    }

    public Boolean getDsvDirectAdFlag() {
        return dsvDirectAdFlag;
    }

    public Boolean getDsvAnonymised() {
        return dsvAnonymised;
    }

    public String getRegion() {
        return region;
    }

    public String getTargetAudience() {
        return targetAudience;
    }

    public void setTargetAudience(String targetAudience) {
        this.targetAudience = targetAudience;
    }

    public void setCorporation(String corporation) {
        this.corporation = corporation;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setMailbox(String mailbox) {
        this.mailbox = mailbox;
    }

    public void setMailboxPlace(String mailboxPlace) {
        this.mailboxPlace = mailboxPlace;
    }

    public void setMailboxPostcode(String mailboxPostcode) {
        this.mailboxPostcode = mailboxPostcode;
    }

    public void setMailboxCountry(String mailboxCountry) {
        this.mailboxCountry = mailboxCountry;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }

    public void setPhone3(String phone3) {
        this.phone3 = phone3;
    }

    public void setPhone4(String phone4) {
        this.phone4 = phone4;
    }

    public void setFax(String fax) {
        this.fax = fax;
    }

    public void setEmail2(String email2) {
        this.email2 = email2;
    }

    public void setHomepage(String homepage) {
        this.homepage = homepage;
    }

    public void setCreatorID(String creatorID) {
        this.creatorID = creatorID;
    }

    public void setEditedByID(String editedByID) {
        this.editedByID = editedByID;
    }

    public void setRepresentativeID(String representativeID) {
        this.representativeID = representativeID;
    }

    public void setLanguageID(String languageID) {
        this.languageID = languageID;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public void setRefAddress(String refAddress) {
        this.refAddress = refAddress;
    }

    public void setAdditional(String additional) {
        this.additional = additional;
    }

    public void setAdditional2(String additional2) {
        this.additional2 = additional2;
    }

    public void setAdditional3(String additional3) {
        this.additional3 = additional3;
    }

    public void setInactive(Boolean inactive) {
        this.inactive = inactive;
    }

    public void setPrivatePerson(Boolean privatePerson) {
        this.privatePerson = privatePerson;
    }

    public void setAppellation(String appellation) {
        this.appellation = appellation;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setMemo(Integer memo) {
        this.memo = memo;
    }

    public void setDepartment1(String department1) {
        this.department1 = department1;
    }

    public void setDepartment2(String department2) {
        this.department2 = department2;
    }

    public void setDepartment3(String department3) {
        this.department3 = department3;
    }


    public void setFunction1(String function1) {
        this.function1 = function1;
    }


    public void setFunction2(String function2) {
        this.function2 = function2;
    }


    public void setFunction3(String function3) {
        this.function3 = function3;
    }

    public void setFreeFlag1(Boolean freeFlag1) {
        this.freeFlag1 = freeFlag1;
    }

    public void setFreeFlag2(Boolean freeFlag2) {
        this.freeFlag2 = freeFlag2;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public void setTradeFlag(Boolean tradeFlag) {
        this.tradeFlag = tradeFlag;
    }

    public void setProductionFlag(Boolean productionFlag) {
        this.productionFlag = productionFlag;
    }

    public void setServiceFlag(Boolean serviceFlag) {
        this.serviceFlag = serviceFlag;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public void setContactType(Integer contactType) {
        this.contactType = contactType;
    }

    public void setDsvFlag(Boolean dsvFlag) {
        this.dsvFlag = dsvFlag;
    }

    public void setDsvSourceOfData(String dsvSourceOfData) {
        this.dsvSourceOfData = dsvSourceOfData;
    }

    public void setDsvNotification(Boolean dsvNotification) {
        this.dsvNotification = dsvNotification;
    }

    public void setDsvDirectAdFlag(Boolean dsvDirectAdFlag) {
        this.dsvDirectAdFlag = dsvDirectAdFlag;
    }

    public void setDsvAnonymised(Boolean dsvAnonymised) {
        this.dsvAnonymised = dsvAnonymised;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Account getAccount1() {
        return account1;
    }

    public Account getAccount2() {
        return account2;
    }

    public Account getAccount3() {
        return account3;
    }

    public void setAccount1(Account account1) {
        this.account1 = account1;
        account1.getContacts().add(this);
    }

    public void setAccount2(Account account2) {
        this.account2 = account2;
    }

    public void setAccount3(Account account3) {
        this.account3 = account3;
    }


    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Date getBirthday() {
        return birthday;
    }

    public Date getDsvDataCollection() {
        return dsvDataCollection;
    }

    public String getRefAddress2() {
        return refAddress2;
    }

    public String getDsvAnonymisedBy() {
        return dsvAnonymisedBy;
    }

    public Contact() {
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public Contact(String lastName, String firstName, String email) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
    }

    public Contact(String lastName, String firstName, String email, Account account) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.account1 = account;
    }

    public Contact(String lastName, String firstName, String email, Account account, String notes) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.account1 = account;
        this.notes = notes;
    }

    @Override
    public boolean equals(Object obj) {
        if(!(obj instanceof Account)){
            return false;
        }
        Contact c= (Contact) obj;

        if(this.id != null) {
            return Objects.equals(this.id, c.id);
        }

        if (c.getLastName()!=this.getLastName() &&c.getFirstName()!=this.getFirstName() ){
            return false;
        }
        return true;
    }

    @Override
    public int hashCode() {
        if (this.id != null) {
            return id.hashCode();
        }
        return Objects.hash(lastName, firstName);
    }
}
