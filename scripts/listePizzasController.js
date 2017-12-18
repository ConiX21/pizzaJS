var ListePizzasController = (function () {

    function ListePizzasController() {
        createTemplateTable();

        events();
    }

    function createTemplateTable() {
        $("<table></table>")
            .addClass("table table-striped")
            .append("<thead></thead>")
            .find("thead")
            .append("<tr></tr>")
            .find("tr")
            .append("<th></th>")
            .append("<th></th>")
            .append("<th></th>")
            .append("<th></th>")
            .append("<th></th>")
            .append("<th></th>")
            .children("th:eq(1)")
            .text("IdPizza")
            .end()
            .children("th:eq(2)")
            .text("Nom")
            .end()
            .children("th:eq(3)")
            .text("Description")
            .end()
            .children("th:eq(4)")
            .text("Prix")
            .parents("table")
            .append("<tbody></tbody>")
            .append("<tfoot></tfoot>")
            .find("tfoot")
            .append("<tr></tr>")
            .find("tr")
            .append("<td></td>")
            .find("td")
            .attr("colspan", "6")
            .addClass("text-right")
            .append("<label></label>")
            .append("<label></label>")
            .end()
            .find("label:first")
            .text("Pizzas : ")
            .parents("table")
            .appendTo("div.col-md-6");
    }

    function createRow(data) {
        $("<tr></tr>")
            .append("<td></td>")
            .append("<td></td>")
            .append("<td></td>")
            .append("<td></td>")
            .append("<td></td>")
            .append("<td></td>")
            .find("td:eq(0)")
            .append("<img>")
            .find("img")
            .attr("src", "/assets/" + data.image).addClass("img-responsive").parents("tr")
            .find("td:eq(1)").text(data.id).parents("tr")
            .find("td:eq(2)").text(data.name).parents("tr")
            .find("td:eq(3)").text(data.description).parents("tr")
            .find("td:eq(4)").text(data.priceHT).parents("tr")
            .find("td:eq(5)")
            .append("<button></button>")
            .find("button")
            .attr("data-id", data.id)
            .addClass("btn btn-warning")
            .append("<span></span>")
            .find("span")
            .addClass("glyphicon glyphicon-eye-open")
            .parents("tr")
            .appendTo("table tbody");


    }

    function readDataJSON() {
        return $.get("/data/pizzas.json");
    }

    function countPizzas(cpt) {
        $("tfoot label:last").text(cpt);
    }

    function events() {
        $("tbody").on("click", "button.btn.btn-warning", function (evt) {
            console.log(this.dataset.id);
        });

        $(".load").click(function () {
            $("tbody").empty();
            $('#loader').modal("show");
            readDataJSON().done(function (data) {
                setTimeout(function () {
                    for (p in data) {
                        createRow(data[p]);
                    }
                    countPizzas(data.length);
                    $('#loader').modal("hide");

                }, 1500)
            })
        })
    }

    return ListePizzasController;
})();

$(document).ready(function () {
    var listePizzasController = new ListePizzasController();
});