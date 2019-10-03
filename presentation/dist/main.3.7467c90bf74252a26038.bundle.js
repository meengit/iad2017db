(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,t,a){a(14),a(37),e.exports=a(34)},28:function(e,t,a){var n={"./0-title.md":29,"./1-introduction.md":30,"./2-basics.md":31,"./3-normalization.md":32,"./4-datatypes.md":33};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=28},29:function(e,t,a){"use strict";a.r(t),a.d(t,"slides",(function(){return u})),a.d(t,"fusumaProps",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a.n(n),l=a(1);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=[function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h1",null,"Von der Datenbank zur Ausgabe"),Object(l.a)("p",null,"Andreas Eberhard | 28. September und 5. Oktober 2019"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Agenda 28. September 2019"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"MySQL Umgebung einrichten"),Object(l.a)("li",{parentName:"ul"},"Einführung Datenbanken"),Object(l.a)("li",{parentName:"ul"},"Datentypen"),Object(l.a)("li",{parentName:"ul"},"Beziehungen"),Object(l.a)("li",{parentName:"ul"},"Normalisierung")))}],o=[{classes:"title"},{}],s={slides:u},p="wrapper";function b(e){var t=e.components,a=i(e,["components"]);return Object(l.a)(p,c({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",null,"Von der Datenbank zur Ausgabe"),Object(l.a)("p",null,"Andreas Eberhard | 28. September und 5. Oktober 2019"),Object(l.a)("hr",null),Object(l.a)("h2",null,"Agenda 28. September 2019"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"MySQL Umgebung einrichten"),Object(l.a)("li",{parentName:"ul"},"Einführung Datenbanken"),Object(l.a)("li",{parentName:"ul"},"Datentypen"),Object(l.a)("li",{parentName:"ul"},"Beziehungen"),Object(l.a)("li",{parentName:"ul"},"Normalisierung")))}b.isMDXComponent=!0},30:function(e,t,a){"use strict";a.r(t),a.d(t,"slides",(function(){return u})),a.d(t,"fusumaProps",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a.n(n),l=a(1);function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=[function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h1",null,"MySQL Umgebung einrichten"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/docker.small.png",alt:"Docker Logo"}))),Object(l.a)("p",null,"Docker herunterladen und installieren:"),Object(l.a)("p",null,Object(l.a)("a",i({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/release-notes/"}),"https://docs.docker.com/docker-for-mac/release-notes/")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,"Git Repository klonen:"),Object(l.a)("pre",null,Object(l.a)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/meengit/iad2017db.git\n")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,"Umgebung testen (Terminal):"),Object(l.a)("pre",null,Object(l.a)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ./mysql\ndocker-compose up -d\n")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,"MySQL Workbench herunterladen: "),Object(l.a)("p",null,Object(l.a)("a",i({parentName:"p"},{href:"https://www.mysql.com/products/workbench/"}),"https://www.mysql.com/products/workbench/")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,"Sequel Pro herunterladen:"),Object(l.a)("p",null,Object(l.a)("a",i({parentName:"p"},{href:"https://www.sequelpro.com/"}),"https://www.sequelpro.com/")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,"Weitere Clients:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.heidisql.com/"}),"Heidi SQL")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.jetbrains.com/datagrip/"}),"DataGrip")),Object(l.a)("li",{parentName:"ul"},"...")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Was ist Docker?"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/docker-vm.jpg",alt:"Docker vs. VM"}))),Object(l.a)("p",null,"Quelle: ",Object(l.a)("a",i({parentName:"p"},{href:"https://www.youtube.com/watch?v=TvnZTi_gaNc"}),"https://www.youtube.com/watch?v=TvnZTi_gaNc")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Geschichte von Datenbanken"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("a",i({parentName:"p"},{href:"https://www.youtube.com/watch?v=KG-mqHoXOXY"}),"https://www.youtube.com/watch?v=KG-mqHoXOXY")))}],o=[{classes:"title",note:"Wir verwenden für die Datenbank-Umgebung Docker. Docker ermöglicht uns, im Handumdrehen lokale Datenbank-Server zu starten und wieder zu löschen"},{},{},{},{},{},{},{},{},{},{}],s={slides:u},p="wrapper";function b(e){var t=e.components,a=c(e,["components"]);return Object(l.a)(p,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",null,"MySQL Umgebung einrichten"),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/docker.small.png",alt:"Docker Logo"}))),Object(l.a)("p",null,"Docker herunterladen und installieren:"),Object(l.a)("p",null,Object(l.a)("a",i({parentName:"p"},{href:"https://docs.docker.com/docker-for-mac/release-notes/"}),"https://docs.docker.com/docker-for-mac/release-notes/")),Object(l.a)("hr",null),Object(l.a)("p",null,"Git Repository klonen:"),Object(l.a)("pre",null,Object(l.a)("code",i({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/meengit/iad2017db.git\n")),Object(l.a)("hr",null),Object(l.a)("p",null,"Umgebung testen (Terminal):"),Object(l.a)("pre",null,Object(l.a)("code",i({parentName:"pre"},{className:"language-bash"}),"cd ./mysql\ndocker-compose up -d\n")),Object(l.a)("hr",null),Object(l.a)("p",null,"MySQL Workbench herunterladen: "),Object(l.a)("p",null,Object(l.a)("a",i({parentName:"p"},{href:"https://www.mysql.com/products/workbench/"}),"https://www.mysql.com/products/workbench/")),Object(l.a)("hr",null),Object(l.a)("p",null,"Sequel Pro herunterladen:"),Object(l.a)("p",null,Object(l.a)("a",i({parentName:"p"},{href:"https://www.sequelpro.com/"}),"https://www.sequelpro.com/")),Object(l.a)("hr",null),Object(l.a)("p",null,"Weitere Clients:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.heidisql.com/"}),"Heidi SQL")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.jetbrains.com/datagrip/"}),"DataGrip")),Object(l.a)("li",{parentName:"ul"},"...")),Object(l.a)("hr",null),Object(l.a)("h2",null,"Was ist Docker?"),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/docker-vm.jpg",alt:"Docker vs. VM"}))),Object(l.a)("p",null,"Quelle: ",Object(l.a)("a",i({parentName:"p"},{href:"https://www.youtube.com/watch?v=TvnZTi_gaNc"}),"https://www.youtube.com/watch?v=TvnZTi_gaNc")),Object(l.a)("hr",null),Object(l.a)("h2",null,"Geschichte von Datenbanken"),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("a",i({parentName:"p"},{href:"https://www.youtube.com/watch?v=KG-mqHoXOXY"}),"https://www.youtube.com/watch?v=KG-mqHoXOXY")))}b.isMDXComponent=!0},31:function(e,t,a){"use strict";a.r(t),a.d(t,"slides",(function(){return u})),a.d(t,"fusumaProps",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a.n(n),l=a(1);function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=[function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Datenbanktypen"),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/db-history.png",alt:"Datenbank Typen"}))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Gruppenarbeit wichtige Datenbanktypen/Unternehmen"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.exasol.com/en/"}),"Exasol")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Spanner_(database)"}),"Google Spanner")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.ibm.com/analytics/db2"}),"IBM DB2")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.mongodb.com/"}),"MongoDB")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/MariaDB"}),"MySQL und MariaDB")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.oracle.com/database/technologies/"}),"Oracle (DB 19c)")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.postgresql.org/"}),"Postgresql")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://redis.io/"}),"Redis")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.sqlite.org/index.html?"}),"SQLite"))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"Aufgabe"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Geschichte der Datenbank"),Object(l.a)("li",{parentName:"ul"},"Datenbanktyp (SQL, NoSQL, andere)"),Object(l.a)("li",{parentName:"ul"},"Vor- und Nachteile (was wird empfohlen)")),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"ca. 60 Minuten für Recherche und kurze Präsentation")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Datenbanktypen (zusammengefasst)"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Relational_database"}),"Relational database"),Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"http://www.sqlcourse.com/intro.html"}),"SQL")))),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://cdn.ttgtmedia.com/rms/onlineImages/data_management-nosql.png"}),"NoSQL"),Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Document-oriented_database"}),"Document-oriented database")))),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/NewSQL"}),"NewSQL"))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Datenbank-Management-System (DBMS)"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/dbms.png",alt:"DBMS"}))),Object(l.a)("p",null,"Quelle: ",Object(l.a)("a",i({parentName:"p"},{href:"https://www.bmc.com/blogs/dbms-database-management-systems/"}),"https://www.bmc.com/blogs/dbms-database-management-systems/")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"SQL"),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/sqltables.png",alt:"SQL"}))),Object(l.a)("p",null,"Quelle: ",Object(l.a)("a",i({parentName:"p"},{href:"https://launchschool.com/books/sql/read/table_relationships"}),"https://launchschool.com/books/sql/read/table_relationships")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"NoSQL"),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/nosql.jpg",alt:"NoSQL Types"}))),Object(l.a)("p",null,"Quelle: ",Object(l.a)("a",i({parentName:"p"},{href:"https://www.lynda.com/NoSQL-tutorials/5-categories-NoSQL-databases/368756/387725-4.html"}),"https://www.lynda.com/NoSQL-tutorials/5-categories-NoSQL-databases/368756/387725-4.html")))}],o=[{classes:"title"},{},{},{},{},{},{},{}],s={slides:u},p="wrapper";function b(e){var t=e.components,a=c(e,["components"]);return Object(l.a)(p,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h2",null,"Datenbanktypen"),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/db-history.png",alt:"Datenbank Typen"}))),Object(l.a)("hr",null),Object(l.a)("h2",null,"Gruppenarbeit wichtige Datenbanktypen/Unternehmen"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.exasol.com/en/"}),"Exasol")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Spanner_(database)"}),"Google Spanner")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.ibm.com/analytics/db2"}),"IBM DB2")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.mongodb.com/"}),"MongoDB")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/MariaDB"}),"MySQL und MariaDB")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.oracle.com/database/technologies/"}),"Oracle (DB 19c)")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.postgresql.org/"}),"Postgresql")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://redis.io/"}),"Redis")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://www.sqlite.org/index.html?"}),"SQLite"))),Object(l.a)("hr",null),Object(l.a)("h3",null,"Aufgabe"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"Geschichte der Datenbank"),Object(l.a)("li",{parentName:"ul"},"Datenbanktyp (SQL, NoSQL, andere)"),Object(l.a)("li",{parentName:"ul"},"Vor- und Nachteile (was wird empfohlen)")),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"ca. 60 Minuten für Recherche und kurze Präsentation")),Object(l.a)("hr",null),Object(l.a)("h2",null,"Datenbanktypen (zusammengefasst)"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Relational_database"}),"Relational database"),Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"http://www.sqlcourse.com/intro.html"}),"SQL")))),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://cdn.ttgtmedia.com/rms/onlineImages/data_management-nosql.png"}),"NoSQL"),Object(l.a)("ul",{parentName:"li"},Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Document-oriented_database"}),"Document-oriented database")))),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",i({parentName:"li"},{href:"https://en.wikipedia.org/wiki/NewSQL"}),"NewSQL"))),Object(l.a)("hr",null),Object(l.a)("h2",null,"Datenbank-Management-System (DBMS)"),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/dbms.png",alt:"DBMS"}))),Object(l.a)("p",null,"Quelle: ",Object(l.a)("a",i({parentName:"p"},{href:"https://www.bmc.com/blogs/dbms-database-management-systems/"}),"https://www.bmc.com/blogs/dbms-database-management-systems/")),Object(l.a)("hr",null),Object(l.a)("h2",null,"SQL"),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/sqltables.png",alt:"SQL"}))),Object(l.a)("p",null,"Quelle: ",Object(l.a)("a",i({parentName:"p"},{href:"https://launchschool.com/books/sql/read/table_relationships"}),"https://launchschool.com/books/sql/read/table_relationships")),Object(l.a)("hr",null),Object(l.a)("h2",null,"NoSQL"),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/nosql.jpg",alt:"NoSQL Types"}))),Object(l.a)("p",null,"Quelle: ",Object(l.a)("a",i({parentName:"p"},{href:"https://www.lynda.com/NoSQL-tutorials/5-categories-NoSQL-databases/368756/387725-4.html"}),"https://www.lynda.com/NoSQL-tutorials/5-categories-NoSQL-databases/368756/387725-4.html")))}b.isMDXComponent=!0},32:function(e,t,a){"use strict";a.r(t),a.d(t,"slides",(function(){return u})),a.d(t,"fusumaProps",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a.n(n),l=a(1);function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=[function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Normalisierung"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,"Ziel: Konsistenzerhöhung durch Redundanzvermeidung"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"Normalisierung Stufe 1"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Jedes Attribut der Relation muss einen atomaren Wertebereich haben, und die Relation muss frei von Wiederholungsgruppen sein.")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-1.wrong.png",alt:"Normalisierung Stufe 1, falsch"}))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-1.ok.png",alt:"Normalisierung Stufe 1, richtig"}))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"Normalisierung Stufe 2"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Eine Relation ist genau dann in der zweiten Normalform, wenn die erste Normalform vorliegt und kein Nichtprimärattribut (Attribut, das nicht Teil eines Schlüsselkandidaten ist) funktional von einer echten Teilmenge eines Schlüsselkandidaten abhängt. ")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-2.wrong.png",alt:"Normalisierung Stufe 2, falsch"}))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-2.ok.png",alt:"Normalisierung Stufe 2, richtig"}))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"Normalisierung Stufe 3"),Object(l.a)("p",null,"Die dritte Normalform ist genau dann erreicht, wenn sich das Relationenschema in der 2NF befindet, und kein Nichtschlüsselattribut von einem Schlüsselkandidaten transitiv abhängt."))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-3.wrong.png",alt:"Normalisierung Stufe 3, falsch"}))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-3.ok.png",alt:"Normalisierung Stufe 3, richtig"}))))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h2",null,"Beziehungen"))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"1:1 – eins zu eins;"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Jeder Datensatz in Tabelle A ist genau einem Datensatz in Tabelle B zugeordnet.")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"1:n – eins zu viele;"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Der häufigste Beziehungstyp in relationalen Datenbanken; In einer 1:n-Beziehung können einem Datensatz in Tabelle A mehrere passende Datensätze in Tabelle B zugeordnet sein – aber einem Datensatz in Tabelle B ist nie mehr als ein Datensatz in Tabelle A zugeordnet.")))},function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h3",null,"m:n – viele zu viele;"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Jedem Datensatz in Tabelle A können mehrere passende Datensätze in Tabelle B zugeordnet sein und umgekehrt.")))}],o=[{classes:"title"},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],s={slides:u},p="wrapper";function b(e){var t=e.components,a=c(e,["components"]);return Object(l.a)(p,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h2",null,"Normalisierung"),Object(l.a)("hr",null),Object(l.a)("p",null,"Ziel: Konsistenzerhöhung durch Redundanzvermeidung"),Object(l.a)("hr",null),Object(l.a)("h3",null,"Normalisierung Stufe 1"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Jedes Attribut der Relation muss einen atomaren Wertebereich haben, und die Relation muss frei von Wiederholungsgruppen sein.")),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-1.wrong.png",alt:"Normalisierung Stufe 1, falsch"}))),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-1.ok.png",alt:"Normalisierung Stufe 1, richtig"}))),Object(l.a)("hr",null),Object(l.a)("h3",null,"Normalisierung Stufe 2"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Eine Relation ist genau dann in der zweiten Normalform, wenn die erste Normalform vorliegt und kein Nichtprimärattribut (Attribut, das nicht Teil eines Schlüsselkandidaten ist) funktional von einer echten Teilmenge eines Schlüsselkandidaten abhängt. ")),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-2.wrong.png",alt:"Normalisierung Stufe 2, falsch"}))),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-2.ok.png",alt:"Normalisierung Stufe 2, richtig"}))),Object(l.a)("hr",null),Object(l.a)("h3",null,"Normalisierung Stufe 3"),Object(l.a)("p",null,"Die dritte Normalform ist genau dann erreicht, wenn sich das Relationenschema in der 2NF befindet, und kein Nichtschlüsselattribut von einem Schlüsselkandidaten transitiv abhängt."),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-3.wrong.png",alt:"Normalisierung Stufe 3, falsch"}))),Object(l.a)("hr",null),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/normalization-3.ok.png",alt:"Normalisierung Stufe 3, richtig"}))),Object(l.a)("hr",null),Object(l.a)("h2",null,"Beziehungen"),Object(l.a)("hr",null),Object(l.a)("h3",null,"1:1 – eins zu eins;"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Jeder Datensatz in Tabelle A ist genau einem Datensatz in Tabelle B zugeordnet.")),Object(l.a)("hr",null),Object(l.a)("h3",null,"1:n – eins zu viele;"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Der häufigste Beziehungstyp in relationalen Datenbanken; In einer 1:n-Beziehung können einem Datensatz in Tabelle A mehrere passende Datensätze in Tabelle B zugeordnet sein – aber einem Datensatz in Tabelle B ist nie mehr als ein Datensatz in Tabelle A zugeordnet.")),Object(l.a)("hr",null),Object(l.a)("h3",null,"m:n – viele zu viele;"),Object(l.a)("p",null,Object(l.a)("em",{parentName:"p"},"Jedem Datensatz in Tabelle A können mehrere passende Datensätze in Tabelle B zugeordnet sein und umgekehrt.")))}b.isMDXComponent=!0},33:function(e,t,a){"use strict";a.r(t),a.d(t,"slides",(function(){return u})),a.d(t,"fusumaProps",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(2),r=a.n(n),l=a(1);function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=[function(e){return Object(l.a)(r.a.Fragment,null,Object(l.a)("h1",null,"MySQL Datentypen"),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/datatypes.png",alt:"Datentypen"}))))}],o=[{classes:"title"}],s={slides:u},p="wrapper";function b(e){var t=e.components,a=c(e,["components"]);return Object(l.a)(p,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("h1",null,"MySQL Datentypen"),Object(l.a)("p",null,Object(l.a)("img",i({parentName:"p"},{src:"images/datatypes.png",alt:"Datentypen"}))))}b.isMDXComponent=!0},35:function(e,t,a){var n=a(36);"string"==typeof n&&(n=[[e.i,n,""]]);var r={insert:"head",singleton:!1};a(3)(n,r);n.locals&&(e.exports=n.locals)},36:function(e,t,a){}},[[13,5,6]],[0,8]]);