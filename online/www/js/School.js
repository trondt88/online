var Education = {};

(function() {

    Education.School = function() {

        // Private variables & methods
        var _name = "";
        var _town = "";
        var _students = new Array();

        // Public API
        return {

            getName : function() {
                return _name;
            },

            setName : function(name) {
                _name = name;
            },

            getTown : function() {
                return _town;
            },

            setTown : function(town) {
                _town = town;
            },

            getStudents : function() {
                return _students;
            },

            addStudent : function(student) {
                _students.push(student);
            }

        };

    };

})();