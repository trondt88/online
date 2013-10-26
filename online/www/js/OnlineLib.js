var OnlineLib = {

    eventType : "",
    schoolArray : new Array(),
    ntnu : null,
    bi : null,
    chosenSchool : null,

    init : function() {
        OnlineLib.eventType = (window.chrome) ? "click" : "touchend";
        OnlineLib.bindUIActions();
        
        OnlineLib.createSchools();
        OnlineLib.fillSchoolSelect();
        OnlineLib.createStudents();
    },

    bindUIActions : function() {
        $(".header").on(OnlineLib.eventType, function() {
            alert(OnlineLib.eventType);
        });

        $(".schoolSelect").on("change", function() {

            // Set h2 skolenavn
            $(".school").html($(this).val());

            OnlineLib.chosenSchool = OnlineLib.getSchoolByName($(this).val());

            // Vis studenter til skolen
            if(OnlineLib.chosenSchool != null) {
                $(".students").html("");
                var studentsForSchool = OnlineLib.chosenSchool.getStudents();

                for(var i = 0; i < studentsForSchool.length; i++) {
                    $(".students").append('<li>' + studentsForSchool[i].getFirstName() + " " + studentsForSchool[i].getLastName() + '</li>');
                }
            } else {
                $(".students").append('<li>Ingen studenter</li>');
            }
        });
    },

    getSchoolByName : function(name) {
        for(var i = 0; i < OnlineLib.schoolArray.length; i++) {
            if(OnlineLib.schoolArray[i].getName() == name) {
                OnlineLib.chosenSchool = OnlineLib.schoolArray[i];
                return OnlineLib.chosenSchool;
            }
        }
    },

    createSchools : function() {
        OnlineLib.ntnu = new Education.School();
        OnlineLib.ntnu.setName("NTNU");
        OnlineLib.ntnu.setTown("Trondheim");
        OnlineLib.schoolArray.push(OnlineLib.ntnu);

        OnlineLib.bi = new Education.School();
        OnlineLib.bi.setName("BI");
        OnlineLib.bi.setTown("Oslo");
        OnlineLib.schoolArray.push(OnlineLib.bi);
    },

    fillSchoolSelect : function() {
        for(var i = 0; i < OnlineLib.schoolArray.length; i++) {
            $(".schoolSelect").append('<option value="' + OnlineLib.schoolArray[i].getName() + '">' + OnlineLib.schoolArray[i].getName() + '</option>');
        }
    },

    createStudents : function() {
        var jon = new Person.Student();
        jon.setFirstName("Jon");
        jon.setLastName("Freberg");
        jon.setAge("27");
        OnlineLib.ntnu.addStudent(jon);


        var alf = new Person.Student();
        alf.setFirstName("Alf");
        alf.setLastName("Alfsen");
        alf.setAge("22");
        OnlineLib.ntnu.addStudent(alf);

        var nils = new Person.Student();
        nils.setFirstName("Nils");
        nils.setLastName("Nilsen");
        nils.setAge("24");
        OnlineLib.ntnu.addStudent(nils);

        var trine = new Person.Student();
        trine.setFirstName("Trine");
        trine.setLastName("Trinesen");
        trine.setAge("18");
        OnlineLib.bi.addStudent(trine);

        var lise = new Person.Student();
        lise.setFirstName("Lise");
        lise.setLastName("Lisesen");
        lise.setAge("21");
        OnlineLib.bi.addStudent(lise);

    }
};

$(window).load(function () {
    OnlineLib.init();
});