function load14() {
    $("svg").remove();
    $("body").append('<svg width="960" height="600" id="statesvg"></svg>');
    function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
        "<tr><td>Students</td><td>"+(d.low)+"</td></tr>"+
        "</table>";
    }

    var numbers = {
                    "AL": 5,
                    "AK": 2,
                    "AZ": 10,
                    "AR": 6,
                    "CA": 220,
                    "CO": 17,
                    "CT": 8,
                    "DE": 2,
                    "FL": 25,
                    "GA": 20,
                    "HI": 0,
                    "ID": 3,
                    "IL": 4927,
                    "IN": 21,
                    "IA": 10,
                    "KS": 5,
                    "KY": 12,
                    "LA": 2,
                    "ME": 0,
                    "MD": 14,
                    "MA": 22,
                    "MI": 22,
                    "MN": 23,
                    "MS": 1,
                    "MO": 33,
                    "MT": 0,
                    "NE": 3,
                    "NV": 2,
                    "NH": 1,
                    "NJ": 79,
                    "NM": 4,
                    "NY": 63,
                    "NC": 6,
                    "ND": 0,
                    "OH": 33,
                    "OK": 0,
                    "OR": 6,
                    "PA": 19,
                    "RI": 2,
                    "SC": 2,
                    "SD": 2,
                    "TN": 10,
                    "TX": 35,
                    "UT": 4,
                    "VT": 0,
                    "VA": 36,
                    "WA": 22,
                    "WV": 0,
                    "WI": 16,
                    "WY": 0,
                    "TO": 5755,
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