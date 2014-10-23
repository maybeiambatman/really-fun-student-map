function load11() {
    $("svg").remove();
    $("body").append('<svg width="960" height="600" id="statesvg"></svg>');
    function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
        "<tr><td>Students</td><td>"+(d.low)+"</td></tr>"+
        "</table>";
    }

    var numbers = {
                    "AL": 3,
                    "AK": 1,
                    "AZ": 3,
                    "AR": 2,
                    "CA": 112,
                    "CO": 7,
                    "CT": 10,
                    "DE": 0,
                    "FL": 19,
                    "GA": 18,
                    "HI": 1,
                    "ID": 2,
                    "IL": 5569,
                    "IN": 14,
                    "IA": 9,
                    "KS": 7,
                    "KY": 11,
                    "LA": 1,
                    "ME": 1,
                    "MD": 22,
                    "MA": 27,
                    "MI": 15,
                    "MN": 18,
                    "MS": 1,
                    "MO": 34,
                    "MT": 0,
                    "NE": 5,
                    "NV": 4,
                    "NH": 2,
                    "NJ": 73,
                    "NM": 1,
                    "NY": 27,
                    "NC": 5,
                    "ND": 0,
                    "OH": 31,
                    "OK": 2,
                    "OR": 3,
                    "PA": 17,
                    "RI": 1,
                    "SC": 2,
                    "SD": 3,
                    "TN": 12,
                    "TX": 36,
                    "UT": 1,
                    "VT": 1,
                    "VA": 21,
                    "WA": 8,
                    "WV": 0,
                    "WI": 22,
                    "WY": 0,
                    "TO": 6184,
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