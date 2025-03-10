import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dataBaseConfig from '../../../config/dataBase.config';
import path from 'path';

import * as fs from 'fs';


class DataSourceSingle  extends DataSource{
  private static instance: DataSourceSingle;

  private constructor(){
    super({
      type: 'mysql',
      host: dataBaseConfig.MYSQL_HOST,
      port: dataBaseConfig.MYSQL_PORT,
      username: dataBaseConfig.MYSQL_USER,
      password:   dataBaseConfig.MYSQL_PASSWORD,
      database: dataBaseConfig.MYSQL_DATABASE,
      entities: ['src/infrastructure/models/*.ts'],
      synchronize: true,
    });
  }
 

  public static  getInstance(): DataSourceSingle {
    if(!DataSourceSingle.instance){
      DataSourceSingle.instance = new DataSourceSingle();
    }
    return DataSourceSingle.instance;
  }

  public async restartData(filePath: string): Promise<void> {
    try {
      
        // Inicializa la conexión a la base de datos
        if (!DataSourceSingle.getInstance().isInitialized) {
            await DataSourceSingle.getInstance().initialize();
        }

        // Lee el contenido del archivo SQL
        const sqlFilePath = path.resolve(__dirname, filePath);
        const deleteUsers = `DELETE FROM users`;
        const deleteProducts = `DELETE FROM products`;
        const deleteCategories = `DELETE FROM categories`;
        
        const categories = `INSERT INTO categories VALUES (1,'Clothes','https://i.imgur.com/QkIa5tT.jpeg','2025-01-10 18:05:49.794000','2025-01-10 18:05:49.794000'),(2,'Zapatillas','https://i.imgur.com/sC0ztOB.jpeg','2025-01-10 19:15:21.261000','2025-01-10 19:15:21.261000')`;
        const products = `INSERT INTO products (id,title,price,images,created_at,updated_at,categoria_id,description) VALUES 
        (1,'pantalones',10000,'https://i.imgur.com/mp3rUty.jpeg,https://i.imgur.com/JQRGIc2.jpeg','2025-01-10 19:30:44.547000','2025-01-10 19:30:44.547000',2,''),
        (2,'Classic Navy Blue Baseball Cap',61,'https://i.imgur.com/R3iobJA.jpeg,https://i.imgur.com/Wv2KTsf.jpeg,https://i.imgur.com/76HAxcA.jpeg','2025-01-18 18:02:44.224000','2025-01-18 18:02:44.224000',1,''),
        (3,'Classic Red Baseball Cap',35,'https://i.imgur.com/cBuLvBi.jpeg,https://i.imgur.com/N1GkCIR.jpeg,https://i.imgur.com/kKc9A5p.jpeg','2025-01-18 18:08:33.395000','2025-01-18 18:08:33.395000',1,''),
        (4,'Classic Black Baseball Cap',58,'https://i.imgur.com/KeqG6r4.jpeg,https://i.imgur.com/xGQOw3p.jpeg,https://i.imgur.com/oO5OUjb.jpeg','2025-01-18 18:09:04.449000','2025-01-18 18:09:04.449000',1,''),
        (5,'Classic Olive Chino Shorts',84,'https://i.imgur.com/UsFIvYs.jpeg,https://i.imgur.com/YIq57b6.jpeg','2025-01-18 18:09:28.806000','2025-01-18 18:09:28.806000',1,''),
        (6,'Classic High-Waisted Athletic Shorts',43,'https://i.imgur.com/eGOUveI.jpeg,https://i.imgur.com/UcsGO7E.jpeg,https://i.imgur.com/NLn4e7S.jpeg','2025-01-18 18:09:53.559000','2025-01-18 18:09:53.559000',1,'')
  `

        const users = `
        INSERT INTO users (id,name,last_name,email,phone,avatar,gender,country,state,city,username,password,created_at,updated_at,role) VALUES 
        (1,'Gianluca','Fagherazzi','fagherazzigianluca@gmail.com','015-47943689','https://media.licdn.com/dms/image/v2/D4D03AQHu4e_ySIVVSg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731527319600?e=1738195200&v=beta&t=VmYw7TNOHN891d64dydK7CQ0_UbjlJUXfoXfO17kk2Q','male','Argentina','Buenos aires','Bahia Blanca','user','$2a$10$4fuypBkjXs5mbchXAwiWierL6ZUS/tDHlk3ZRQtvVSM3LYhD2eb2y','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (2,'Sergio','Antozzi','santozzi@gmail.com','(955)-510-3719','https://media.licdn.com/dms/image/v2/D4D35AQFtDJSicQnVwg/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1730237340327?e=1737648000&v=beta&t=UKdVf17tBlkg4bKkAO6KarWSYIrEA65hSoxw9QhZFrw','male','Turkey','Samsun','Van','admin','$2a$10$OLtGQLn2L8RSIN3x3WA3xemEzM37gQeE.OzKdKYRlyiF2NRhyvaOS','2024-12-06 00:09:27.000000','2025-01-16 15:34:14.000000',''),
        (3,'Erhan','Van Berkel','erhan.vanberkel@example.com','(097) 3640790','https://randomuser.me/api/portraits/men/67.jpg','male','Netherlands','Limburg','Wolvega','silverpanda487','$2a$10$EUYmtgnvIrVzWL4LsqpOh.JXFQTbpH4HCW/0ae.GQWFj5uc/zRpge','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (4,'Frosina','Bucenko','frosina.bucenko@example.com','(096) W44-1679','https://randomuser.me/api/portraits/women/21.jpg','female','Ukraine','Zhitomirska','Kropivnickiy','yellowduck670','$2a$10$foRonGFRH1YIP97OZWmNdeo38.8PMQofm6OKhcKyzMUnYXEjnjZoW','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (5,'Aditya','Manjunath','aditya.manjunath@example.com','9549347850','https://randomuser.me/api/portraits/men/38.jpg','male','India','Uttar Pradesh','Sagar','whitelion555','$2a$10$aOf0zI0rFCBwhXZyvv5ShO8iJvhTD8gPB.q2lTdmbsWuIxUTV0.VG','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (6,'Ece','Yıldızoğlu','ece.yildizoglu@example.com','(570)-086-9634','https://randomuser.me/api/portraits/women/15.jpg','female','Turkey','Afyonkarahisar','Tunceli','sadswan317','$2a$10$VOTfPcK9AkkhHJ7Fy58kOeapq1oBzEz0UTzmeD6p5f7gvqfky3HHK','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (7,'Godelieve','Wester','godelieve.wester@example.com','(0891) 781453','https://randomuser.me/api/portraits/women/92.jpg','female','Netherlands','Noord-Holland','Haarle gem Tubbergen','smallladybug492','$2a$10$OSZW1fi9qVCEGmbqWpVZ8OOgdKyvLCMVZuAiLb4OZSNoUCoTdooU6','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (8,'Joel','Haataja','joel.haataja@example.com','07-516-050','https://randomuser.me/api/portraits/men/61.jpg','male','Finland','Kymenlaakso','Alajärvi','angrygorilla826','$2a$10$eSYhRLyr1vrXEkHRV1WWw.1X4JY0yOAo7e/br/dJ9y2S6NxOvTehi','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (9,'Wade','Brooks','wade.brooks@example.com','017684 39061','https://randomuser.me/api/portraits/men/3.jpg','male','United Kingdom','South Glamorgan','Westminster','purplecat672','$2a$10$qxOgFUcoKgNlI6Ko7fAaQelMSN.yTkFpU9WvZEXgynbukYpFRk4Bm','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (10,'Jordan','Obrien','jordan.obrien@example.com','(389) 955-0733','https://randomuser.me/api/portraits/men/78.jpg','male','United States','New Mexico','Killeen','goldenmeercat177','$2a$10$cweauS0Ds1o0Oj0ajHuLquJWwEBeLaBJnK9i83.ura.6pwV3WNlzm','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (11,'Vadim','Boldt','vadim.boldt@example.com','0975-0907453','https://randomuser.me/api/portraits/men/75.jpg','male','Germany','Bayern','Gehrden','biggorilla937','$2a$10$Xzom54L049/Lm3i0IT/eru3oV97P.Ui2dUy/t.eYSpYgBDOwm9QLC','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (12,'Josefine','Pedersen','josefine.pedersen@example.com','38650121','https://randomuser.me/api/portraits/women/74.jpg','female','Denmark','Syddanmark','Assens','goldencat705','$2a$10$X85rwxU3VFBDeWuUrZae1O1GFJANtP.aYFxL0x50GRMBm7WeCymXy','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (13,'Ceyhan','Erkekli','ceyhan.erkekli@example.com','(582)-949-8725','https://randomuser.me/api/portraits/women/15.jpg','female','Turkey','Diyarbakır','Kastamonu','heavyduck827','$2a$10$EOfTObVzYtAdGR2ykywW7evtxK88WnWZONV4yAcO3grivdb/sx28y','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (14,'Blanca','Riojas','blanca.riojas@example.com','(610) 055 8304','https://randomuser.me/api/portraits/women/41.jpg','female','Mexico','Nayarit','Coroneo','smallgoose154','$2a$10$xwb9qaOZeaVzocGugDzINufitEw9Eu5JJPEAAmiRnsRcdOZx3AOxq','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (15,'Clifford','Hansen','clifford.hansen@example.com','051-711-0116','https://randomuser.me/api/portraits/men/79.jpg','male','Ireland','Laois','Kildare','purplekoala378','$2a$10$U.O3sQRjtzXWEPlzUPWh7OSG.ebt5KZBlhvNmrf4GI3bphU5BFVAO','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (16,'Pilar','Peña','pilar.pena@example.com','994-182-101','https://randomuser.me/api/portraits/women/1.jpg','female','Spain','País Vasco','Torrente','redtiger347','$2a$10$56CcMx4jE4NcgAOe.rwojen/9Yv3mal9AMi0WifMbaBrfw391IgGi','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (17,'Theo','Sjo','theo.sjo@example.com','63338651','https://randomuser.me/api/portraits/men/91.jpg','male','Norway','Møre og Romsdal','Torvik','heavykoala545','$2a$10$w3d02yyXay0cgYSYoFEaL.2r2/.ezif6PUH8wq/25L7B2w/zwRR42','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (18,'Fernando','Rubio','fernando.rubio@example.com','917-006-300','https://randomuser.me/api/portraits/men/87.jpg','male','Spain','Castilla la Mancha','La Palma','smallmeercat173','$2a$10$jEzGLR2dI2.vypZtAn/7Ku2AUQdwI2lDU3q54l5bEAiubkMkHVboy','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (19,'José Luis','Marrero','joseluis.marrero@example.com','(645) 012 4872','https://randomuser.me/api/portraits/men/14.jpg','male','Mexico','Baja California','Teotitlán del Valle','purplegoose828','$2a$10$1awDLrOMx/2SeyyJi9DY7.Nmv1LPV5GnyeZOaz1PZ5XjRin5WycTK','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (20,'Afet','Körmükçü','afet.kormukcu@example.com','(721)-878-0544','https://randomuser.me/api/portraits/women/31.jpg','female','Turkey','Mersin','Gaziantep','blackzebra323','$2a$10$gfrL9CRkUtbcisbX/KZXoe/rSLyZqE/I9gGu4VzxLE02ghkhmR7mi','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (21,'Luisa','Prieto','luisa.prieto@example.com','928-010-289','https://randomuser.me/api/portraits/women/44.jpg','female','Spain','Islas Baleares','Almería','bluecat550','$2a$10$C30dnZzjbsQ2UnUM.UcKiOQJXnqfVgD23JlThjQqjVlZL4GfhaXpK','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (22,'Ella','King','ella.king@example.com','(830)-920-5895','https://randomuser.me/api/portraits/women/24.jpg','female','New Zealand','Otago','Hastings','crazybear515','$2a$10$PSqo3ga71Ayn07lhlPLHaOExPPUiEbda9zp8zYePS1QupEfvJOMTq','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (23,'Rushali','Kulkarni','rushali.kulkarni@example.com','8595552596','https://randomuser.me/api/portraits/women/80.jpg','female','India','Lakshadweep','Mau','yellowladybug859','$2a$10$DFg3I5qiHrrxY3b9sNZlZuAZqSfyRCXYmbUD7BW117o0KWdYSjaCe','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (24,'Ashley','Berry','ashley.berry@example.com','(856) 881-9068','https://randomuser.me/api/portraits/women/54.jpg','female','United States','Louisiana','Vancouver','whitebird693','$2a$10$6Qt/NrAWMwGE5tfWtukxguaJFbzwwYiQJm1mA.SVyTPJG4u4x23ra','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (25,'Andrijana','Terzić','andrijana.terzic@example.com','028-7470-978','https://randomuser.me/api/portraits/women/23.jpg','female','Serbia','Pirot','Medveđa','greenfish530','$2a$10$jxGhHkxrwZSMhhDi1X3cPuqC8.HaLdhXaaraACey8CVvx50DwiqIq','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (26,'الینا','رضایی','lyn.rdyy@example.com','017-90876497','https://randomuser.me/api/portraits/women/33.jpg','female','Iran','خراسان شمالی','زنجان','silverbird724','$2a$10$RqsGdVx17.BOJ5goy5bsZerBedOI9rLGbtknre3kExt49O2Xbiu06','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (27,'Katie','Willis','katie.willis@example.com','021-739-4023','https://randomuser.me/api/portraits/women/53.jpg','female','Ireland','Waterford','Thurles','silverelephant704','$2a$10$ZxpyEXUxgN.Xr9be5pEr7u6s4UUoYj5aWxeZKbs/DVlVvSCiidsvS','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (28,'Silva','Holtz','silva.holtz@example.com','0080-8381492','https://randomuser.me/api/portraits/women/51.jpg','female','Germany','Mecklenburg-Vorpommern','Laichingen','redsnake417','$2a$10$rgh.vGKkH10FndjOnBgXI.ueu6.ZGocAgf9XhYLiOvPBOfepwZ9Ie','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (29,'Elias','Rolón','elias.rolon@example.com','(636) 037 9198','https://randomuser.me/api/portraits/men/8.jpg','male','Mexico','Guerrero','Anacleto Canabal 1a. Sección','crazymouse479','$2a$10$/h9gttX99/35rYxInV33jOb0bmspkA8.31nFegwPY1eu.WZz0dmTu','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (30,'Veronica','Freeman','veronica.freeman@example.com','01-9700-9952','https://randomuser.me/api/portraits/women/90.jpg','female','Australia','Northern Territory','Dubbo','heavygorilla703','$2a$10$6m0SsLswnTevUz18D0sdxePPOJAeGOzSneJfh1qOY.c8sHJz/RL5q','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (31,'Lucy','Morris','lucy.morris@example.com','(901) 835-2654','https://randomuser.me/api/portraits/women/42.jpg','female','United States','Mississippi','Greensboro','redduck598','$2a$10$RYOwqBZj3JI0h72Kj//3PO4uNS8m3uYtVxTnpSigSQN2lZRtCgHXm','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (32,'Alfredo','Valverde','alfredo.valverde@example.com','(643) 076 0457','https://randomuser.me/api/portraits/men/43.jpg','male','Mexico','Campeche','Santiago Yeche','silverleopard780','$2a$10$ZPqk/WkmsT1CPiu.HKmg/Oj38fzQIYNk6nDgqK3y9pv4uTJzLaUdK','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (33,'Sophie','Harris','sophie.harris@example.com','011-390-2567','https://randomuser.me/api/portraits/women/26.jpg','female','Ireland','Monaghan','Carrick-on-Suir','organicbird208','$2a$10$ubx40L2Jhilqa.951GwLYuntDWdOlpgw9rvXLt5il0RAUw/yELvsy','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (34,'Mishka','Gupta','mishka.gupta@example.com','9817781012','https://randomuser.me/api/portraits/women/45.jpg','female','India','Uttarakhand','Dehradun','silvergorilla256','$2a$10$dWhxD6m1BXV66BVw8LT9d.vfPCU9qrxsPBMl01GJEN4yGjEz5.amy','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (35,'Gema','Santos','gema.santos@example.com','957-730-210','https://randomuser.me/api/portraits/women/75.jpg','female','Spain','Asturias','Mérida','greenzebra253','$2a$10$PrSsPOGdNsrx1UhnnOISjeax72CiEkDYVSB1Oho8Yp40o2ZaCz.E2','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (36,'Simon','Bergeron','simon.bergeron@example.com','H35 L28-8775','https://randomuser.me/api/portraits/men/36.jpg','male','Canada','British Columbia','Stratford','beautifullion528','$2a$10$wt20bevg4qszJgwXMbHjG.iAPLPCnsmYjQYKbzdplKvcBFBzJfowy','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (37,'Swathi','Adiga','swathi.adiga@example.com','7179482179','https://randomuser.me/api/portraits/women/84.jpg','female','India','Andhra Pradesh','Sikar','tinydog511','$2a$10$pQQa/jTX1mt1T/oO8/RdRO5Hshm8qhDlfOWsIkLEHySbE3alOXUie','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (38,'Rozhden','Slyuzar','rozhden.slyuzar@example.com','(096) F66-9691','https://randomuser.me/api/portraits/men/91.jpg','male','Ukraine','Harkivska','Luck','angrybear323','$2a$10$bHEdUCct.7rffpNWl372tesOBwQdcrs643W1u/r6xmkCAZ.5HQU.y','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (39,'Joelci','Nascimento','joelci.nascimento@example.com','(46) 7367-1044','https://randomuser.me/api/portraits/women/26.jpg','female','Brazil','Rio de Janeiro','Almirante Tamandaré','whiteladybug801','$2a$10$cem5FXifxKNktjZNJJoMj.PQ21G3zEmtWA2mQsXY90DD/HW6SII4a','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (40,'Minea','Harju','minea.harju@example.com','02-151-725','https://randomuser.me/api/portraits/women/96.jpg','female','Finland','Tavastia Proper','Vihanti','blacktiger737','$2a$10$Xb9/IAa0ZdqoYjXBJ8jkHead/Nljnca3gsEjerVz2ZxhbVwrRihz6','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (41,'Karina','Aguirre','karina.aguirre@example.com','(626) 882 5224','https://randomuser.me/api/portraits/women/55.jpg','female','Mexico','Tlaxcala','Caleras de Ameche','heavybird171','$2a$10$j4CTPrtJiXj.vQas15l0yu6tVlXmnQFzZPvYZJ2LzbeBAGbeXUPK6','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (42,'Tanveer','Sheikh','tanveer.sheikh@example.com','7754975826','https://randomuser.me/api/portraits/men/84.jpg','male','India','Rajasthan','Erode','whitepeacock608','$2a$10$ST54/ou7e2KNeLb11lWa2.Flz/2cguxIZ3x9FImiLdMC5vfHEtShO','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (43,'Lily','Moore','lily.moore@example.com','(119)-419-2008','https://randomuser.me/api/portraits/women/18.jpg','female','New Zealand','Gisborne','Rotorua','organicswan902','$2a$10$F59DOxwlwswTKiMv3VP2eOXEMJIhx5XLo0hAWEof89R8bLEQQavsm','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (44,'Ignacio','Reyes','ignacio.reyes@example.com','919-909-900','https://randomuser.me/api/portraits/men/84.jpg','male','Spain','Cantabria','Jerez de la Frontera','purplegorilla250','$2a$10$Pu3zA0GTS6ABZt6qRKAyPeT/EJ9jvx7mx781RrvRlAmg.dAIjYHaW','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (45,'Victoria','Wilson','victoria.wilson@example.com','013873 23863','https://randomuser.me/api/portraits/women/57.jpg','female','United Kingdom','Hertfordshire','Leeds','angrypeacock189','$2a$10$sW9OQfwhsAcVYbydZFYWu.byl1uvQU31qN6nPnuT/PhtaYks681iS','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (46,'Andrea','Vargas','andrea.vargas@example.com','934-710-997','https://randomuser.me/api/portraits/women/76.jpg','female','Spain','Islas Baleares','La Coruña','happyostrich614','$2a$10$cm2dtXhAHBnMnY7XENeLU./.q0cg1nU2R2zMPic.CH2hqKbvHypMe','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (47,'Salvador','Méndez','salvador.mendez@example.com','933-403-153','https://randomuser.me/api/portraits/men/44.jpg','male','Spain','País Vasco','Vigo','yellowtiger886','$2a$10$iJuiWqJK330WlYLTfL/HjuIFWkYM3bIwvBfuAVxMFiWA4wOXIm38q','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (48,'Chislaine','Spanjersberg','chislaine.spanjersberg@example.com','(070) 6236561','https://randomuser.me/api/portraits/women/62.jpg','female','Netherlands','Gelderland','Lekkerkerk','goldentiger748','$2a$10$Q5.Acz6SoQrC7MzMpNZCk.zemJbCILCBf.zhjf94sMPjVdjAzMVp6','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (49,'Yara','Zomerdijk','yara.zomerdijk@example.com','(0866) 107796','https://randomuser.me/api/portraits/women/40.jpg','female','Netherlands','Gelderland','Peest','angryostrich419','$2a$10$igQI8aRfXk7L5Jr/U/.AneovaNoCwdw8gY76HOkBzR09maiwde9b2','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (50,'Theodore','Sanders','theodore.sanders@example.com','(904) 414-1987','https://randomuser.me/api/portraits/men/52.jpg','male','United States','Louisiana','Norfolk','bluewolf836','$2a$10$qwYIiCtGDxaadVhDy2gHGuND9lusINPiwuy2fnHLuEt8AIdj6RTGa','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (51,'Craig','Stevens','craig.stevens@example.com','(527) 601-5839','https://randomuser.me/api/portraits/men/61.jpg','male','United States','North Dakota','South Bend','silverpeacock681','$2a$10$TBjWfoz.KO6Ld9n2IfCZr.g/ilxYsrKxv3OG0mJt262UP0ueFpGpS','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (52,'Pihla','Waara','pihla.waara@example.com','06-150-930','https://randomuser.me/api/portraits/women/48.jpg','female','Finland','Southern Ostrobothnia','Pieksämäki','ticklishbear816','$2a$10$.bF7MUY5OXfob9dRxhp3VuId8ZEJA7.RObTwp5lPLL6aJFIhAnSCi','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (53,'Aaliyah','Taylor','aaliyah.taylor@example.com','(943)-471-3335','https://randomuser.me/api/portraits/women/76.jpg','female','New Zealand','Southland','Wellington','orangeelephant704','$2a$10$mf.KiQgVxqKg0TW7BrAkw.JSKMPNcw4H9AUAHKX.plJR56uCeoWsu','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (54,'Cristine','da Mata','cristine.damata@example.com','(76) 3474-0384','https://randomuser.me/api/portraits/women/3.jpg','female','Brazil','Mato Grosso','Três Lagoas','lazytiger896','$2a$10$hOgV..y7hgIAzuG50S9rZO2b0CUuDhiUz9dLs6fAT0ABHfaBxIIGW','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (55,'Ludovic','Moreau','ludovic.moreau@example.com','077 789 42 68','https://randomuser.me/api/portraits/men/49.jpg','male','Switzerland','Appenzell Ausserrhoden','Confignon','sadladybug223','$2a$10$9vGbAEAwb/8eeLknEsskwO/tvQwp3DoJlq2wvjtUk.KjF61h4L29e','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (56,'Nicolas','Blanc','nicolas.blanc@example.com','04-05-71-26-34','https://randomuser.me/api/portraits/men/27.jpg','male','France','Cher','Rennes','bigbutterfly483','$2a$10$ivi9ybhVQ/xrtT6IwG2s/.U98itPxfgVw0sZV3/jhBG3aDuU3r57q','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (57,'Melissa','Vargas','melissa.vargas@example.com','(691) 505-3414','https://randomuser.me/api/portraits/women/66.jpg','female','United States','Colorado','Addison','orangeladybug606','$2a$10$3YYmdmdn8U5oO0saxdOas.7frtoVrecxoAC2.yLbsFybggDI1n1Ii','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (58,'Friedrich-Karl','Vogl','friedrich-karl.vogl@example.com','0144-3382337','https://randomuser.me/api/portraits/men/82.jpg','male','Germany','Baden-Württemberg','Mittenwalde','angrymeercat682','$2a$10$cy/YL5Lobs6ZKjiySWImfeAWzk.BFpfc4e86LfvyErOUXLxCSVDbO','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (59,'Maeva','Pelletier','maeva.pelletier@example.com','V01 A19-5543','https://randomuser.me/api/portraits/women/79.jpg','female','Canada','British Columbia','Keswick','organicgoose100','$2a$10$ER8bAtgh5blCVLyO5GhqO.9J6tmv/HZXTc9Ov4hVdA0mFrG.HEOmu','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (60,'Ron','Cook','ron.cook@example.com','09-1477-6523','https://randomuser.me/api/portraits/men/2.jpg','male','Australia','New South Wales','Gladstone','redduck266','$2a$10$VKA.HPUha19vDU5WNUjV3evL8cwiNhlp7X9KH2asZO8Rx5R8JI64q','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (61,'Boguslav','Shpek','boguslav.shpek@example.com','(066) P05-4756','https://randomuser.me/api/portraits/men/93.jpg','male','Ukraine','Poltavska','Vishneve','orangegoose696','$2a$10$OxYDsJXSHiTu4EeBI32g1eepql.UZLmK80S7aqyA6/k8aXyLJEsSG','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (62,'Daniela','Báez','daniela.baez@example.com','(643) 225 0225','https://randomuser.me/api/portraits/women/52.jpg','female','Mexico','Guerrero','San Luis Acatlán','yellowzebra112','$2a$10$67Qm57vtzoxF.xzmmFdLR.bhGl1chxvHxPYuTM4IwbXrlbbyaLSWy','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (63,'Okan','Kuzucu','okan.kuzucu@example.com','(705)-120-0080','https://randomuser.me/api/portraits/men/15.jpg','male','Turkey','İstanbul','Denizli','angryostrich425','$2a$10$QRpg2RSn/asHJzHfG5FbfuhqAicobyp3EXJ.LDrhaZeMJcVqAEvnC','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (64,'سوگند','کامروا','swgnd.khmrw@example.com','018-47004823','https://randomuser.me/api/portraits/women/4.jpg','female','Iran','اصفهان','رشت','goldenzebra492','$2a$10$pRAAaMFvCqclOWLKhkcxs.27d1VPkqAPWoZY8u8EKK9B1JwASJbZi','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (65,'Andrés','Calvo','andres.calvo@example.com','966-873-784','https://randomuser.me/api/portraits/men/62.jpg','male','Spain','Comunidad de Madrid','Valladolid','organicfrog962','$2a$10$iSGJvMeg7oKph1V4p8GTnObCJBvCZWM/hJ7ZLZcN2id5TJkYhyHw6','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (66,'Vladana','Danilović','vladana.danilovic@example.com','017-3140-504','https://randomuser.me/api/portraits/women/4.jpg','female','Serbia','Kolubara','Nova Varoš','browngoose867','$2a$10$kv5B9xYOeJfwSzEVKVwKFeLPNh6mrfrIWxlL2UITa6PUqvAdbSDuG','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (67,'Snizhinka','Gladilovich','snizhinka.gladilovich@example.com','(096) R34-4290','https://randomuser.me/api/portraits/women/38.jpg','female','Ukraine','Ternopilska','Veliki Mosti','whitefish496','$2a$10$7IRnqZfFO8ql5f6Hj1P8o.IoqDY9KYEzZUP6lIQIjy9YeePgcQA3y','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (68,'ثنا','حیدری','thn.hydry@example.com','056-07983354','https://randomuser.me/api/portraits/women/87.jpg','female','Iran','سیستان و بلوچستان','خرم‌آباد','beautifulpanda184','$2a$10$AUguwPoawPCJv4Lxfu1m4.ASqaoGqDiou6ewOErvRJXhPpl9lEHEu','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (69,'Candice','Brewer','candice.brewer@example.com','(458) 457-8879','https://randomuser.me/api/portraits/women/95.jpg','female','United States','Delaware','Clarksville','beautifulpeacock584','$2a$10$QCpomRH87GHJ2PXzVWoSlODYVYHmmzrx/0fkUBoIVyFeTJjQ9gLf2','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (70,'Marlouk','Noordegraaf','marlouk.noordegraaf@example.com','(0315) 559654','https://randomuser.me/api/portraits/women/12.jpg','female','Netherlands','Overijssel','Nieuweroord','bluesnake175','$2a$10$5DT5egtLfhzTjp21fohMYet.JaCxAPPn7hdY4V667LrlRJWhl2pTq','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (71,'Jordan','Nicolas','jordan.nicolas@example.com','04-27-72-47-80','https://randomuser.me/api/portraits/men/32.jpg','male','France','Hautes-Alpes','Le Mans','crazyostrich506','$2a$10$ZRY8Oq6ubl5b6QZiS/kq0uir4IprSRZl4V6gLHKH.ENPk.vAs4W2G','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (72,'Ömür','Sandalcı','omur.sandalci@example.com','(450)-518-0294','https://randomuser.me/api/portraits/women/9.jpg','female','Turkey','Adıyaman','Ankara','yellowelephant898','$2a$10$kVyT5u0yBREeqdqpcqFpvu7Xq4eiYCiUjLZSzGdcb7MauV1TUVX8u','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (73,'Maha','Kaptein','maha.kaptein@example.com','(0296) 744457','https://randomuser.me/api/portraits/women/55.jpg','female','Netherlands','Noord-Brabant','Rijswijk Gld','bigmeercat225','$2a$10$jQ89gyDoszNTc3HlFEkGu.dougfP1/BJecuu14FlWAtxHcRWtQ0AC','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (74,'Dean','Bishop','dean.bishop@example.com','061-648-2081','https://randomuser.me/api/portraits/men/89.jpg','male','Ireland','Dublin City','Newbridge','bluefrog238','$2a$10$mHmbFVCutjzJLkJBWYrbweweaWhTycOZaVEjc8v821pyo3oNpbzJ2','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (75,'Naja','Larsen','naja.larsen@example.com','83087563','https://randomuser.me/api/portraits/women/3.jpg','female','Denmark','Midtjylland','Kongsvinger','happyladybug238','$2a$10$5gMpO8sTU7Geubqx99UEMeOb5BI/SvNCu8fH2ynLVFWFlvY7dHYfS','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (76,'Avtonom','Yushchuk','avtonom.yushchuk@example.com','(066) S20-2470','https://randomuser.me/api/portraits/men/74.jpg','male','Ukraine','Vinnicka','Terebovlya','greenrabbit623','$2a$10$Xn7ShIW5FaT.YLq1KJ1gBuIjw/DJnWSnLSSNgwWby7zyOIF8zzxmG','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (77,'Carlos','Sánchez','carlos.sanchez@example.com','916-043-814','https://randomuser.me/api/portraits/men/60.jpg','male','Spain','Canarias','Sevilla','happyduck696','$2a$10$YkKwhOJTpFDZIZJ4oiO7N.fMnKTT39kz7NX3Ogg4qYB0WAaYo6uwa','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (78,'Amanda','Bjørnstad','amanda.bjornstad@example.com','89056757','https://randomuser.me/api/portraits/women/50.jpg','female','Norway','Bergen','Holmestrand','heavycat159','$2a$10$.RXbjO9Rr3J/9yfvJv8zP.l5GJu3Om4ma5e44zRjen.3vNJtOz15.','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (79,'Magdalena','Bjune','magdalena.bjune@example.com','20337034','https://randomuser.me/api/portraits/women/34.jpg','female','Norway','Buskerud','Krossen','purpleleopard972','$2a$10$3IxhdM4DTbep1Vw4.frvVOZ4jjpIEwbUOxAhFPsu8D42oEAs0ZxRi','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (80,'Noemie','Gerard','noemie.gerard@example.com','02-91-76-38-29','https://randomuser.me/api/portraits/women/75.jpg','female','France','Cher','Mulhouse','organicduck439','$2a$10$qjc8XTF.NTGTmiMl/rYZruP0TA0g4CceVaSunlbzfZs.xvNQx2Uga','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (81,'Judy','Mckinney','judy.mckinney@example.com','017683 57254','https://randomuser.me/api/portraits/women/18.jpg','female','United Kingdom','Central','Sheffield','beautifulfish997','$2a$10$N1eQecdcjDzFGj6yhfUtTeFMksT0mQREcVNo1psuhHVDVDV5Kqf6m','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (82,'Orlando','Thomas','orlando.thomas@example.com','078 028 22 17','https://randomuser.me/api/portraits/men/63.jpg','male','Switzerland','Aargau','Brütten','lazymeercat883','$2a$10$f/M9lwL0K5Jr/PGHvvHqauUo7.uYozkXrK4IL6lKropQ7gPISCBt6','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (83,'Raúl','Aguirre','raul.aguirre@example.com','(622) 993 9939','https://randomuser.me/api/portraits/men/9.jpg','male','Mexico','Tamaulipas','Rancho Nuevo','blueleopard263','$2a$10$9pmK2ntqBKjfBDbj8Pl/Ru1/1F4FpptsRdUswNG2LztECup4n.FzK','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (84,'Carla','Enke','carla.enke@example.com','0951-2552934','https://randomuser.me/api/portraits/women/85.jpg','female','Germany','Brandenburg','Hörstel','purplebutterfly279','$2a$10$jyghhXSS2Z79KFKQQPEzNONkHa6hpsFBIzvNLaXEL9N1dO7METYDS','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (85,'نیایش','سالاری','nyysh.slry@example.com','037-48038802','https://randomuser.me/api/portraits/women/16.jpg','female','Iran','گلستان','بوشهر','organicelephant328','$2a$10$QwshJl.sfvhh.I34fuqmd.GE8DUgyrhUnUXRv1wFpLdr1Q3TdNGPS','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (86,'Charlie','Gill','charlie.gill@example.com','Q81 U86-4300','https://randomuser.me/api/portraits/women/53.jpg','female','Canada','Prince Edward Island','Inwood','ticklishwolf644','$2a$10$bhyF3f8.3ZfQ946Ul1G2EuCFBsKlY8RFeeDD/VxRa.lI9ClQSdvj2','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (87,'Bruno','Bendel','bruno.bendel@example.com','0637-8979325','https://randomuser.me/api/portraits/men/85.jpg','male','Germany','Mecklenburg-Vorpommern','Erbendorf','greentiger815','$2a$10$npSsvHf8r8CHJe34Pzc6Fu9m.ZNx0UuIfIyqZW4sntq8tVEYT7/.a','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (88,'Max','Peterson','max.peterson@example.com','(977) 696-0827','https://randomuser.me/api/portraits/men/37.jpg','male','United States','South Carolina','Lowell','greenswan825','$2a$10$H/vvy7O8fKua1VgiMcCVnefBzRD1oMBPcORy3xvK3Ow6JuTvwuzci','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (89,'Berit','Wiedemann','berit.wiedemann@example.com','0377-4573511','https://randomuser.me/api/portraits/women/53.jpg','female','Germany','Sachsen','Neustadt an der Weinstraße','crazybird646','$2a$10$aeiHtUS7CU6NtLBVs7cv2OKbUSCKVnEECofSF1DEzOn8UKGjzQkWa','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (90,'Albina','Roussel','albina.roussel@example.com','078 842 59 05','https://randomuser.me/api/portraits/women/64.jpg','female','Switzerland','Uri','Rain','blackpeacock504','$2a$10$HXbQMj3j//elVPgOONsOEuZiXh9G9slJNkuhM7XCIs4NmUdutjpMK','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (91,'Leo','Brar','leo.brar@example.com','E50 X22-8522','https://randomuser.me/api/portraits/men/74.jpg','male','Canada','Nova Scotia','Russell','smallfrog211','$2a$10$ePmEIreWkfMm4uu86rvkoObjkdl3H6ZpoGHTFpJoz2DZhSc8rl8/G','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (92,'Angel','Hayes','angel.hayes@example.com','051-975-7479','https://randomuser.me/api/portraits/men/44.jpg','male','Ireland','Limerick','Portmarnock','heavyelephant862','$2a$10$NDLEui872eoMW2I6lU4bieoGY9GOxHDz2NOoV.ZJQ1duCxZRbpf32','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (93,'Alexander','Williams','alexander.williams@example.com','(924)-811-9183','https://randomuser.me/api/portraits/men/94.jpg','male','New Zealand','Hawke S Bay','Timaru','sadpanda113','$2a$10$SzHk/D3fOACCo3eOQ4epBejNRLDAV7mO1/vhjXV51Pbc9FadMaRQm','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (94,'Everett','Wilson','everett.wilson@example.com','04-9847-7032','https://randomuser.me/api/portraits/men/23.jpg','male','Australia','Tasmania','Mildura','heavysnake596','$2a$10$MKpatwbjFUMZTEaSRwdl0u18o2I6ZbIiYfTn.KGWgjAEQ/9C.h0yW','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (95,'Tara','Ulstein','tara.ulstein@example.com','37074598','https://randomuser.me/api/portraits/women/68.jpg','female','Norway','Akershus','Frommereid','beautifulbird358','$2a$10$ko1BYNx3izIxfRl8NnnmZOl2wHpo6GDHV6MsiYpBTi6CvNtoK4USq','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (96,'Matias','Saari','matias.saari@example.com','08-495-952','https://randomuser.me/api/portraits/men/68.jpg','male','Finland','North Karelia','Pertunmaa','crazyfish960','$2a$10$o.4Zi/FsNaAQ6QjPl3tUj.JaX2ta5EKIu/f7WwhTIStN63BG.bHku','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (97,'Alexej','Neubert','alexej.neubert@example.com','0892-0412554','https://randomuser.me/api/portraits/men/49.jpg','male','Germany','Niedersachsen','Hattingen','smallelephant445','$2a$10$UmZKGV07kuSdta6tzVJtWOeKw34cOIveu.45sA/fDUFnjfy4tO6AO','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (98,'Theodore','Stenberg','theodore.stenberg@example.com','33242454','https://randomuser.me/api/portraits/men/82.jpg','male','Norway','Description','Løding','angryduck731','$2a$10$2AGNJhKBd1y7iE1tQwxaKeVe/tiiClBVEgHXCnFUdLZywvm.1aqmi','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (99,'Séléna','Gaillard','selena.gaillard@example.com','05-81-37-41-37','https://randomuser.me/api/portraits/women/86.jpg','female','France','Pyrénées-Orientales','Dijon','heavyleopard544','$2a$10$JY9MWE5bZDdXbfnSiVNV8uBwrIZGxy0RKdK.6RBIFEzimTbSPY0fq','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000',''),
        (100,'Luisa','Ibáñez','luisa.ibanez@example.com','902-861-766','https://randomuser.me/api/portraits/women/17.jpg','female','Spain','Ceuta','Santander','purplegoose696','$2a$10$.Aiw.UKa41Or1tlXPxYp/.DR8jUKb/hvbwxLsEuAZwjA1fLRit4Bq','2024-12-06 00:09:27.000000','2024-12-06 00:09:27.000000','')
        `;

        // Ejecuta las consultas SQL
      
        await DataSourceSingle.getInstance().query(deleteUsers);
        await DataSourceSingle.getInstance().query(deleteProducts);
        await DataSourceSingle.getInstance().query(deleteCategories);
        await DataSourceSingle.getInstance().query(categories);
        await DataSourceSingle.getInstance().query(products);
        await DataSourceSingle.getInstance().query(users);

       console.log('Archivo .sql ejecutado exitosamente.');
    } catch (error) {
        console.error('Error al ejecutar el archivo .sql:', error);
    } 
}

}
 
export default DataSourceSingle;




