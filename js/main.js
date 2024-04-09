const ctx = document.getElementById("myChart");

let data = {
    labels: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
    datasets: [{
    label:"KwH",
    data: [8, 9, 6, 9, 11, 6, 9],
    backgroundColor: [
        "#4ecda2",
        "#4ecda2",
        "#4ecda2",
        "#4ecda2",
        "#4ecda2"
        ],
        borderwidth: 0,
        offset: 20,
        hoverOffset: 60
    }]
}

let config = {
    type: "bar",
    data: data,
    options:{
        maintainAspectRatio: false,
        scales: {
            y: {
                suggestedMin: 0,
                suggestedMax: 15
            },
            x: {
                suggestedMin: 0,
                suggestedMax: 15
            }
        }
    }
}

let myChart = new Chart(ctx, config);