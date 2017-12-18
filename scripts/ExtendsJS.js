var Employee = (function () {
    function Employee(){
    
    }

    return Employee;

})();

var Human = (function () {
    function Human() {

    }

    Human.prototype.toString = function () {
        return "Human";
    }

    return Human;

})();

//Employee herite de Human
Employee.prototype = new Human;
var e = new Employee();

console.log(e.toString());