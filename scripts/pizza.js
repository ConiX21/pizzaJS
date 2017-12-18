var Pizza = (function () {
    var _idPizza = 0;
    var _name = "";
    var _priceHT = 0.0;
    var _description = "";
    var privates = {};
    var test = [];

    function Pizza(name, description, priceHT, image) {
        this._$guid = _idPizza++;
        this.image = image;
        privates[this._$guid] =
            {
                _priceHT: priceHT,
                _name: name,
                _description: description
            };
    }

    Pizza.prototype.setName = function (value) {
        privates[this._$guid]._name = value.toUpperCase();
    }

    Pizza.prototype.getName = function () {
        return privates[this._$guid]._name;
    }

    Pizza.prototype.getDescription = function () {
        return privates[this._$guid]._description;
    }

    Pizza.prototype.getPrice = function () {
        return privates[this._$guid]._priceHT;
    }

    Pizza.prototype.toJSON = function () {
        return {
            name: privates[this._$guid]._name,
            description: privates[this._$guid]._description,
            priceHT: privates[this._$guid]._priceHT,
            image: this.image,
            id: this._$guid
        }
    }

    return Pizza;

})();















//http://blog.stchur.com/2011/09/26/true-private-variables-in-javascript-with-prototype/comment-page-1/