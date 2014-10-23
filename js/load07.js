function load07() {
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
                    "AZ": 2,
                    "AR": 1,
                    "CA": 35,
                    "CO": 3,
                    "CT": 4,
                    "DE": 2,
                    "FL": 14,
                    "GA": 0,
                    "HI": 2,
                    "ID": 1,
                    "IL": 6059,
                    "IN": 12,
                    "IA": 4,
                    "KS": 11,
                    "KY": 3,
                    "LA": 1,
                    "ME": 0,
                    "MD": 17,
                    "MA": 20,
                    "MI": 9,
                    "MN": 12,
                    "MS": 0,
                    "MO": 32,
                    "MT": 1,
                    "NE": 0,
                    "NV": 3,
                    "NH": 2,
                    "NJ": 34,
                    "NM": 1,
                    "NY": 23,
                    "NC": 3,
                    "ND": 1,
                    "OH": 25,
                    "OK": 1,
                    "OR": 0,
                    "PA": 6,
                    "RI": 1,
                    "SC": 1,
                    "SD": 0,
                    "TN": 4,
                    "TX": 24,
                    "UT": 0,
                    "VT": 1,
                    "VA": 17,
                    "WA": 4,
                    "WV": 0,
                    "WI": 11,
                    "WY": 1,
                    "TO": 6412,
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