INSERT INTO GROUP_TABLE(id, active, additive, name) VALUES
    (99997,true, 'Produktionsbetriebe', 'Industrie'),
    (99998, true, 'Hochschulen, Gymnasium','Bildung'),
    (99999, true, 'Ämter, Transport', 'öffentlicher Bereich');


INSERT INTO ACCOUNT_TABLE(id, active, comp_name,country,EMAIL, nr_of_employees, phone, place, postcode, street, ust_id, GROUP_ID) VALUES
    (99997, true, 'Standortagentur Leonding', 'Österreich',null,2, '0732 6878 0', 'Leonding', '4060', 'Stadtplatz 1', 'ATU74603645', null),
    (99998, true, 'JKU', 'Österreich','info@jku.at',3000, '+43 732 2468 0', 'Linz', '4040', 'Altenberger Straße 69', null, 99998),
    (99999, true, 'Rosenbauer International AG', 'Österreich','office@rosenbauer.com',3500, '+43 732 6794 0', 'Leonding', '4060', 'Paschinger Straße 90', null, 99997);

INSERT INTO CONTACT_TABLE(id, Active, first_Name,last_Name,email,account1_id, image_Path) VALUES
    (99997, true, 'Christian', 'Brandl', 'brandl.christian@jku.at',99998,'assets/img/bchr.jpg'),
    (99998, true, 'Marlon','Boler','boler.marlon@jku.at',99998, null),
    (99999, true, 'Natascha','Ayanfo', 'ayanfo.natascha@jku.at',99998, null);



