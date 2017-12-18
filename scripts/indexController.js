var IndexController = (function () {

    var pizzaRepository = new PizzaRepository();

    function IndexController() {
        var pizzas = pizzaRepository.read();

        console.log( JSON.stringify(pizzas));
       

        var template = $("#pizzaTemplate").html();
        var render = Mustache.render(template, { "pizzas": pizzas });
        $("div.pizzas").html(render);

        events();
    }

    function events() {
        document.querySelector("button.btn.btn-success")
            .addEventListener("click", function () {

                //var pizza = new Pizza("Chorizo", "Chorizo,champignon, olive", 12.50, "dotnet_pizza_home.jpg");
                //pizzaRepository.create(pizza.toJSON())

                //var template = $("#pizzaTemplate").html();
                //var render = Mustache.render(template, { "pizzas": pizzas });
                //$("section.container").append(render);

                //var pizzas = pizzaRepository.read();

                //for (var i = 0; i < pizzas.length; i++) {
                //    console.log(pizzas[i].name + " " + pizzas[i].description);
                //}

                
                $("#pizzaModal").modal("show");

            });

            
        $("div.form-group button.btn.btn-default").click(function () {
            var name = $("form.form-horizontal input[type=text]:first-child").val();
            var description = $("textarea").val();
            var price = $("input[type=number]").val();

            console.log(name, description, price);

            //Creer une pizza
            var pizza = new Pizza(name, description, price, "dotnet_pizza_home.jpg");

            //Ajout de la pizza
            pizzaRepository.create(pizza.toJSON())

            //Remonter la liste des pizzas
            var pizzas = pizzaRepository.read();

            var template = $("#pizzaTemplate").html();
            var render = Mustache.render(template, { "pizzas": pizzas });
            //$("section.container").append(render);
            $("div.pizzas").html(render);

            //console.log($("form.form-horizontal").serialize());

        });
        
        $("div.pizzas").on("click", ".btn.btn-warning.details", function (evt) {
                console.log("Details pizza...");
        });


    }
        
   return IndexController;

})();

document.addEventListener("DOMContentLoaded", function () {
    var indexController = new IndexController();
})


//document.addEventListener("DOMContentLoaded", IndexController);


