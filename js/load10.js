function load10() {
    $("svg").remove();
    $("body").append('<svg width="960" height="600" id="statesvg"></svg>');
    function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
        "<tr><td>Students</td><td>"+(d.low)+"</td></tr>"+
        "</table>";
    }

    var numbers = {
                    "AL": 3,
                    "AK": 3,
                    "AZ": 5,
                    "AR": 4,
                    "CA": 63,
                    "CO": 13,
                    "CT": 10,
                    "DE": 0,
                    "FL": 14,
                    "GA": 9,
                    "HI": 1,
                    "ID": 1,
                    "IL": 5433,
                    "IN": 11,
                    "IA": 10,
                    "KS": 6,
                    "KY": 5,
                    "LA": 4,
                    "ME": 0,
                    "MD": 17,
                    "MA": 24,
                    "MI": 13,
                    "MN": 12,
                    "MS": 0,
                    "MO": 4,
                    "MT": 0,
                    "NE": 4,
                    "NV": 2,
                    "NH": 2,
                    "NJ": 34,
                    "NM": 1,
                    "NY": 29,
                    "NC": 6,
                    "ND": 0,
                    "OH": 26,
                    "OK": 3,
                    "OR": 4,
                    "PA": 12,
                    "RI": 0,
                    "SC": 0,
                    "SD": 0,
                    "TN": 6,
                    "TX": 22,
                    "UT": 0,
                    "VT": 0,
                    "VA": 19,
                    "WA": 7,
                    "WV": 0,
                    "WI": 15,
                    "WY": 0,
                    "TO": 5857,
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
            if (numbers[d] === 0){
              sampleData[d] = {low: numbers[d], color:"#ffffff"};
            }
            else {
              sampleData[d] = {low: numbers[d], color:d3.interpolate("#ccffff", "#006699")(numbers[d]/300)};
            }
          }
      });

    /* draw states on id #statesvg */ 
    uStates.draw("#statesvg", sampleData, tooltipHtml);
}