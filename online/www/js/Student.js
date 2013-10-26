var Person = {};

(function() {

    Person.Student = function() {

        // Private variables
        var _firstName = "";
        var _lastName = "";
        var _age = "";

        // Public API
        return {

            getFirstName : function() {
                return _firstName;
            },

            setFirstName : function(firstName) {
                _firstName = firstName;
            },

            getLastName : function() {
                return _lastName;
            },

            setLastName : function(lastName) {
                _lastName = lastName;
            },

            getAge : function() {
                return _age;
            },

            setAge : function(age) {
                _age = age;
            }

        };
    };
})();