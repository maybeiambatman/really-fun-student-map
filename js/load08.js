function load08() {
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
                    "AZ": 6,
                    "AR": 0,
                    "CA": 40,
                    "CO": 6,
                    "CT": 12,
                    "DE": 0,
                    "FL": 17,
                    "GA": 10,
                    "HI": 1,
                    "ID": 0,
                    "IL": 5969,
                    "IN": 21,
                    "IA": 11,
                    "KS": 11,
                    "KY": 5,
                    "LA": 0,
                    "ME": 1,
                    "MD": 20,
                    "MA": 24,
                    "MI": 21,
                    "MN": 11,
                    "MS": 1,
                    "MO": 33,
                    "MT": 0,
                    "NE": 4,
                    "NV": 3,
                    "NH": 2,
                    "NJ": 61,
                    "NM": 1,
                    "NY": 20,
                    "NC": 10,
                    "ND": 0,
                    "OH": 32,
                    "OK": 0,
                    "OR": 3,
                    "PA": 18,
                    "RI": 1,
                    "SC": 1,
                    "SD": 1,
                    "TN": 9,
                    "TX": 24,
                    "UT": 2,
                    "VT": 0,
                    "VA": 15,
                    "WA": 2,
                    "WV": 1,
                    "WI": 12,
                    "WY": 0,
                    "TO": 6446,
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