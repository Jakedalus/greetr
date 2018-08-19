

var g = G$('John', 'Doe');

// g.greet().setLang('es').greet(true).log();

$('#lang').change(function() {
    var selectedLang = $('#lang option:selected')[0].value;

    if (selectedLang === 'en') {
        g.setLang('en').log();
    } else if (selectedLang === 'es') {
        g.setLang('es').log();
    }
});

$('#login').click(function() {
    $('#logindiv').hide();
    g.HTMLGreeting('#greeting', true).log();
});

