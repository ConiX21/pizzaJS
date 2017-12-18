var PizzaRepository = (function () {
    
    var _pizzas = [
        new Pizza("Reine", "Jambon, champignon, fromage", 10, "dotnet_pizza_home.jpg").toJSON(),
        new Pizza("Saumon", "Jambon, champignon, fromage, saumon", 12.50, "dotnet_pizza_home_2.jpg").toJSON(),
        new Pizza("Kebab", "Mouton, champignon, fromage", 13, "dotnet_pizza_home_4.jpg").toJSON()
    ];
   
    function PizzaRepository() {
      
    }

    PizzaRepository.prototype.create = function (pizza) {
        //if (pizza instanceof Pizza)
            _pizzas.push(pizza);
    };

    PizzaRepository.prototype.delete = function (index) {
    
    }

    PizzaRepository.prototype.read = function () {
        return _pizzas;
    }

    PizzaRepository.prototype.readOne = function (idPizza) {
        return _pizzas;
    }

    return PizzaRepository;
})();