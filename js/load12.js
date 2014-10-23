function load12() {
    $("svg").remove();
    $("body").append('<svg width="960" height="600" id="statesvg"></svg>');
    function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
        "<tr><td>Students</td><td>"+(d.low)+"</td></tr>"+
        "</table>";
    }

    var numbers = {
                    "AL": 0,
                    "AK": 1,
                    "AZ": 8,
                    "AR": 2,
                    "CA": 157,
                    "CO": 18,
                    "CT": 4,
                    "DE": 3,
                    "FL": 30,
                    "GA": 10,
                    "HI": 1,
                    "ID": 1,
                    "IL": 5219,
                    "IN": 17,
                    "IA": 3,
                    "KS": 3,
                    "KY": 4,
                    "LA": 3,
                    "ME": 3,
                    "MD": 16,
                    "MA": 31,
                    "MI": 15,
                    "MN": 16,
                    "MS": 3,
                    "MO": 40,
                    "MT": 0,
                    "NE": 3,
                    "NV": 2,
                    "NH": 4,
                    "NJ": 68,
                    "NM": 1,
                    "NY": 41,
                    "NC": 8,
                    "ND": 0,
                    "OH": 34,
                    "OK": 4,
                    "OR": 7,
                    "PA": 15,
                    "RI": 0,
                    "SC": 1,
                    "SD": 0,
                    "TN": 9,
                    "TX": 34,
                    "UT": 1,
                    "VT": 1,
                    "VA": 29,
                    "WA": 10,
                    "WV": 4,
                    "WI": 16,
                    "WY": 0,
                    "TO": 5900,
}

    var sampleData ={}; /* Sample random data. */ 
    ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
    "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
    "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
    "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
    "WI", "MO", "AR", "OK", "KS", "VA", "LA"]
      .forEach(function(d){
          if (d === "IL"){
            sampleData[d] = {low: numbers[d], color:"#006699"};
          }
          else{
            sampleData[d] = {low: numbers[d], color:d3.interpolate("#ccffff", "#006699")(numbers[d]/300)};
          }
      });

    /* draw states on id #statesvg */ 
    uStates.draw("#statesvg", sampleData, tooltipHtml);
}