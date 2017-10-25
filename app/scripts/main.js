/*
var cardsImage = document.querySelectorAll('.cardImage');

cardsImage.forEach(function(card, index) {
    var i = index + 1;
    var context = { title: 'Tarjeta de Prueba', content: 'Weee Por fin lo hice yo solo', image: 'images/image_' + i + '.jpg', action: 'Llevame alla' };
    var html = ExpApp.test(context);
    card.innerHTML = html;
}, this);
*/
Handlebars.registerHelper('switch', function(value, option) {
    this._switch_value_ = value;
    var html = option.fn(this);
    delete this._switch_value_;
    return html;
});

Handlebars.registerHelper('case', function(value, option) {
    if (value == this._switch_value_) {
        return option.fn(this);
    }
});

changePageState('phisActivity');

// Initialize collapse button
//$('.button-collapse').sideNav();