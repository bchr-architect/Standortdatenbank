package bchr.stdb.entity;

import bchr.stdb.misc.Auditable;
import com.fasterxml.jackson.annotation.*;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.util.Date;

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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Account_id")
    @JsonIgnoreProperties("contacts")
    public Account account;

    @Column(name = "CREATOR", length = 40)
    private String creatorID;

    @Column(name = "EDITED_BY", length = 40)
    private String editedByID;

    @Column(name = "GROUP", length = 20)
    private Integer grpID;

    @Column(name = "REPRESENTATIVE", length = 20)
    private Integer representativeID;

    @Column(name = "LANGUAGE", length = 20)
    private Integer languageID;

    @Column(name = "UST_ID", length = 40)
    private String ustID;

    @Column(name = "CONTACT_PERSON", length = 20)
    private Integer contactID;

    @Column(name = "SHIPPING_ADDRESS", length = 20)
    private Integer shippingAddress;

    @Column(name = "REF_ADDRESS", length = 20)
    private Integer refAddress;

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

    @Column(name = "CESSION")
    private Boolean cession;

    @Column(name = "CESSION_NOTE", length = 80)
    private String cessionNote;

    @Column(name = "APPELLATION", length = 40)
    private String appellation;

    @Column(name = "LETTER_APPELATION", length = 40)
    private String letterAppellation;

    @Column(name = "TITLE", length = 40)
    private String title;

    @Column(name = "POSTPOSITIVE_TITLE", length = 40)
    private String postpositiveTitle;

    @Column(name = "MEMO", length = 20)
    private Integer memo;

    @Column(name = "DEPARTMENT", length = 70)
    private String department;

    @Column(name = "FUNCTION", length = 70)
    private String function;

    @Column(name = "PRIORITY", length = 1)
    private Integer priority;

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

    @Column(name = "FOUNDING_DATE", length = 40)
    private Date foundingDate;

    @Column(name = "STATUS", length = 1)
    private Integer status;

    @Column(name = "CONTACT_TYPE", length = 1)
    private Integer contactType;

    @Column(name = "DSV_FLAG")
    private Boolean dsvFlag;

    @Column(name = "DSV_SOURCE_OF_DATA")
    private Boolean dsvSourceOfData;

    @Column(name = "DSV_NOTIFICATION")
    private Boolean dsvNotification;

    @Column(name = "DSV_DIRECT_AD_FLAG")
    private Boolean dsvDirectAdFlag;

    @Column(name = "DSV_ANONYMISED")
    private Boolean dsvAnonymised;

    @Column(name = "REGION", length = 70)
    private String region;

    @Column(name = "TARGET_AUDIENCE", length = 10)
    private Integer targetAudience;

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

    public Integer getGrpID() {
        return grpID;
    }

    public Integer getRepresentativeID() {
        return representativeID;
    }

    public Integer getLanguageID() {
        return languageID;
    }

    public String getUstID() {
        return ustID;
    }

    public Integer getContactID() {
        return contactID;
    }

    public Integer getShippingAddress() {
        return shippingAddress;
    }

    public Integer getRefAddress() {
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

    public Boolean getCession() {
        return cession;
    }

    public String getCessionNote() {
        return cessionNote;
    }

    public String getAppellation() {
        return appellation;
    }

    public String getLetterAppellation() {
        return letterAppellation;
    }

    public String getTitle() {
        return title;
    }

    public String getPostpositiveTitle() {
        return postpositiveTitle;
    }

    public Integer getMemo() {
        return memo;
    }

    public String getDepartment() {
        return department;
    }

    public String getFunction() {
        return function;
    }

    public Integer getPriority() {
        return priority;
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

    public Date getFoundingDate() {
        return foundingDate;
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

    public Boolean getDsvSourceOfData() {
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

    public Integer getTargetAudience() {
        return targetAudience;
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

    public void setGrpID(Integer grpID) {
        this.grpID = grpID;
    }

    public void setRepresentativeID(Integer representativeID) {
        this.representativeID = representativeID;
    }

    public void setLanguageID(Integer languageID) {
        this.languageID = languageID;
    }

    public void setUstID(String ustID) {
        this.ustID = ustID;
    }

    public void setContactID(Integer contactID) {
        this.contactID = contactID;
    }

    public void setShippingAddress(Integer shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public void setRefAddress(Integer refAddress) {
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

    public void setCession(Boolean cession) {
        this.cession = cession;
    }

    public void setCessionNote(String cessionNote) {
        this.cessionNote = cessionNote;
    }

    public void setAppellation(String appellation) {
        this.appellation = appellation;
    }

    public void setLetterAppellation(String letterAppellation) {
        this.letterAppellation = letterAppellation;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPostpositiveTitle(String postpositiveTitle) {
        this.postpositiveTitle = postpositiveTitle;
    }

    public void setMemo(Integer memo) {
        this.memo = memo;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setFunction(String function) {
        this.function = function;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
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

    public void setFoundingDate(Date foundingDate) {
        this.foundingDate = foundingDate;
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

    public void setDsvSourceOfData(Boolean dsvSourceOfData) {
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

    public void setTargetAudience(Integer targetAudience) {
        this.targetAudience = targetAudience;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getLastName() {return this.lastName;
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

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Contact() {
    }

    public Contact(String lastName, String firstName, String email) {
        this.lastName=lastName;
        this.firstName=firstName;
        this.email=email;
    }
    public Contact(String lastName, String firstName, String email, Account account) {
        this.lastName=lastName;
        this.firstName=firstName;
        this.email=email;
        this.account=account;
    }
}
