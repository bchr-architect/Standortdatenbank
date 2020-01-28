INSERT INTO GROUP_TABLE(id, active, additive, name) VALUES
    (99997,true, 'Produktionsbetriebe', 'Industrie'),
    (99998, true, 'Hochschulen, Gymnasium','Bildung'),
    (99996,true,null,'Unternehmensberatung'),
    (99995,true,null, 'Tourismus'),
    (99994,true, null,'Banken'),
    (99999, true, 'Ämter, Transport', 'Öffentliche Agenturen');


INSERT INTO ACCOUNT_TABLE(id, active, comp_name,country,EMAIL, nr_of_employees, phone, place, postcode, street, ust_id, GROUP_ID) VALUES
    (99997, true, 'Standortagentur Leonding', 'Österreich','info@leonding.at',2, '0732 6878 0', 'Leonding', '4060', 'Stadtplatz 1', 'ATU74603645', 99999),
    (99998, true, 'JKU', 'Österreich','info@jku.at',3000, '+43 732 2468 0', 'Linz', '4040', 'Altenberger Straße 69', null, 99998),
    (99991, true, 'IT-Consulting Dr. Schiffer', 'Österreich','stefan@schiffer.at',1, '+43 699 12547249', 'Vorchdorf', '4655', 'Haresauer Straße 55', null,99996),
    (99996, true, 'Hotel Kremstalerhof GmbH', 'Österreich','info@kremstalerhof.at',50, '+43 732 6712120', 'Leonding', '4060', 'Welser Str. 60', null,99995),
    (99995, true, 'TAT-TECHNOM-Antriebstechnik GmbH', 'Österreich','tat@tat.at',150, '+43 7229 648400', 'Leonding', '4060', 'Technologiering 13-17', null,99997),
    (99993, true, 'VKB Bank', 'Österreich','service@vkb-bank.at',2000, '+43 732 7637-0', 'Linz', '4010', 'Rudigierstraße 5-7', null,99994),
    (99994, true, 'Voestalpine', 'Österreich','info@voestalpine.com',52000, '+43 50304 15-0', 'Linz', '4020', 'Voestalpine-Straße 1', null,99997),
    (99999, true, 'Rosenbauer International AG', 'Österreich','office@rosenbauer.com',3500, '+43 732 6794 0', 'Leonding', '4060', 'Paschinger Straße 90', null, 99997);

INSERT INTO CONTACT_TABLE(id, Active, first_Name,last_Name,email,account1_id, FUNCTION1, image_Path,NOTES) VALUES
    (99997, true, 'Christian', 'Brandl', 'brandl.christian@jku.at',99998, 'Student','assets/img/bchr.jpg',null),
    (99998, true, 'Marlon','Boler','boler.marlon@jku.at',99998, 'Student', null,null),
    (99999, true, 'Natascha','Ayanfo', 'Ayanfo.Natascha@jku.at',99998, 'Student', null,null),
(99980, true, 'Sabrina','Naderer-Jelinek', 'bgm@leonding.at',99997, 'Aufsichtsrat', null, 'SPÖ'),
(99981, true, 'Andreas','Stangl', 'andreas.stangl@gpa-djp.at',99997, 'Aufsichtsrat', null, 'SPÖ'),
(99982, true, 'Michael','Täubel', 'michael.täubel@gmx.net',99997, 'Aufsichtsrat' ,null, 'FPÖ'),
(99983, true, 'Thomas','Neidl', 'thomas.neidl@vkb-bank.a',99997, 'Aufsichtsrat', null, 'ÖVP'),
(99984, true, 'Klaus','Gschwendtner', 'klaus.gschwendtner@voestalpine.com',99997, 'Aufsichtsrat', null, 'SPÖ'),
(99985, true, 'Harald','Kronsteiner', 'h.kronsteiner@linzag.at',99997, 'Aufsichtsrat', null, 'SPÖ'),
(99986, true, 'Peter','Hametner', 'peter.hametner@pghametner.com',99997, 'Aufsichtsrat', null, 'FPÖ'),
    (99987, true, 'Karl','Velechovsky', 'nussboeck@gmx.at',99997, 'Aufsichtsrat', null, 'ÖVP'),
    (99988, true, 'Sven','Schwerer', 'sven.schwerer@gruene.at',99997, 'Aufsichtsrat', null, 'GRÜNE'),
    (99989, true, 'Matthias','Mayer', 'mayer@tat.at',99997, 'Aufsichtsrat', null,null),
    (99990, true, 'Christian','Nopp', 'christian.nopp@daslicht.at',99997, 'Aufsichtsrat', null,null),
    (99991, true, 'Daniel','Tomaschko', 'daniel.tomaschko@rosenbauer.com',99997, 'Aufsichtsrat', null, null),
    (99992, true, 'Manuela','Weixelbaumer', 'manuela.weixelbaumer@kremstalerhof.at',99997, 'Aufsichtsrat', null, null),
    (99993, true, 'Ernst','Mairinger', 'ernst.mairinger@bmvit.gv.at',99997, 'Aufsichtsrat', null, 'NEOS'),
    (99994, true, 'Uwe','Deutschbauer', 'uwe.deutschbauer@leonding.at',99997, 'Aufsichtsrat', null, null),
    (99995, true, 'Susanne','Steckerl', 'susanne.steckerl@leonding.at',99997, 'Geschäftsführer', null, null),
    (99996, true, 'Stefan','Schiffer', 'stefan@schiffer.at',99998, 'Lektor', null, null);




