window.onload = function () {

  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light2", // "light1", "light2", "dark1"
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Top Visitors"
    },
    axisX: {
      margin: 10,
      labelPlacement: "inside",
      tickPlacement: "inside"
    },
    axisY2: {
      title: "Views (in billion)",
      titleFontSize: 14,
      includeZero: true,
      suffix: "bn"
    },
    data: [{
      type: "bar",
      axisYType: "secondary",
      yValueFormatString: "#,###.##bn",
      indexLabel: "{y}",
      dataPoints: [
        { label: "Sugar - Maroon 5", y: 3.25 },
        { label: "Sorry - Justin Bieber", y: 3.32 },
        { label: "Johny Johny Yes Papa", y: 3.63 },
        { label: "Gangnam Style", y: 3.72 },
        { label: "Uptown Funk", y: 3.90 },
        { label: "Masha and the Bear", y: 4.32 },
        { label: "See You Again", y: 4.66 },
        { label: "Shape of You", y: 4.91 },
        { label: "Baby Shark Dance", y: 6.13 },
        { label: "Despacito", y: 6.88 }
      ]
    }]
  });

  setTimeout(function() {
    chart.render();
  }, 1000);
    
  }