var upContent = document.querySelector('#upContent');

function getStateTitle(state) {
    for (var i = 0; i <= menuItems.length; i++) {
        if (menuItems[i].state === state) {
            return menuItems[i].Item;
        }
    };

}

function changePageState(state) {

    var upContext = { 'state': state, 'title': getStateTitle(state) };
    upContent.innerHTML = ExpApp.content(upContext);

    var statePage = document.querySelector('#' + state);
    statePage.innerHTML = ExpApp[state]();

    $('.menuLink').removeClass('menuActive');
    $('#' + state + 'Link').addClass('menuActive');

    if (state === 'phisRegister') {

        $(document).ready(function() {
            $('.datepicker').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15, // Creates a dropdown of 15 years to control year,
                today: 'Today',
                clear: 'Clear',
                close: 'Ok',
                closeOnSelect: false // Close upon selecting a date,
            });
            $('select').material_select();
            $('.modal').modal();

            // Initialize collapse button
            $('.button-collapse').sideNav();
        });

        $('#' + state + 'Link').addClass('hide');

    } else if (state === 'phisActivity') {
        $(document).ready(function() {
            $('.button-collapse').sideNav();

            $('.datepicker').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15, // Creates a dropdown of 15 years to control year,
                today: 'Today',
                clear: 'Clear',
                close: 'Ok',
                closeOnSelect: false // Close upon selecting a date,
            });
        });

        var ctx = document.getElementById('barGoal').getContext('2d');
        var barGoal = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Rendimiento', 'Meta'],
                datasets: [{
                    label: ['Km/Pasos'],
                    data: [23300, 30000],
                    backgroundColor: [
                        'rgba(255, 50, 38, 1)',
                        'rgba(73, 178, 0, 1)'
                    ],
                    borderColor: [
                        'rgba(255,0,0,1)',
                        'rgba(0, 178, 2, 1)'
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function(label, index, labels) {
                                return label / 1000 + 'k';
                            },
                            scaleLabel: {
                                display: true,
                                labelString: '1k = 1000'
                            }
                        }
                    }]
                }
            }
        });
        var ctx = document.getElementById('lineKm').getContext('2d');
        var lineKm = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['0', '25-Sep', '27-Sep', '29-Sep', '01-Oct'],
                datasets: [{
                    label: ['Km/Dia'],
                    fill: false,
                    data: [
                        { x: '0', y: '0' },
                        { x: '1', y: '5.2' },
                        { x: '2', y: '8.0' },
                        { x: '3', y: '8.5' },
                        { x: '4', y: '4.5' }
                    ],
                    backgroundColor: [
                        '#00C1FF',
                    ],
                    borderColor: [
                        '#00C1FF',
                    ],
                    borderWidth: 2
                }]
            },
            options: {
                showLines: true,
                spanGaps: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                        stacked: false
                    }]
                }
            }
        });
        //gaugeGoal | lineKm

        var tableAct = document.querySelector('#tableAct');
        var tableActVaues = [
            { 'Fecha': '25-Sep-2017', 'Duracion': '25 mins', 'Km': '5.2/4500', 'Calorias': '520' },
            { 'Fecha': '27-Sep-2017', 'Duracion': '30 mins', 'Km': '8.0/7000', 'Calorias': '950' },
            { 'Fecha': '29-Sep-2017', 'Duracion': '45 mins', 'Km': '8.5/7800', 'Calorias': '900' },
            { 'Fecha': '01-Oct-2017', 'Duracion': '24 mins', 'Km': '4.5/4000', 'Calorias': '500' }
        ];

        tableAct.innerHTML = ExpApp.tableAct({ activity: tableActVaues });

    };
};