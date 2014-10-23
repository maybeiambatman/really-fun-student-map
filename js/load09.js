function load09() {
    $("svg").remove();
    $("body").append('<svg width="960" height="600" id="statesvg"></svg>');
    function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
        "<tr><td>Students</td><td>"+(d.low)+"</td></tr>"+
        "</table>";
    }

    var numbers = {
                    "AL": 4,
                    "AK": 0,
                    "AZ": 3,
                    "AR": 3,
                    "CA": 28,
                    "CO": 2,
                    "CT": 9,
                    "DE": 1,
                    "FL": 16,
                    "GA": 13,
                    "HI": 2,
                    "ID": 1,
                    "IL": 5768,
                    "IN": 11,
                    "IA": 4,
                    "KS": 5,
                    "KY": 4,
                    "LA": 0,
                    "ME": 1,
                    "MD": 13,
                    "MA": 21,
                    "MI": 12,
                    "MN": 13,
                    "MS": 1,
                    "MO": 32,
                    "MT": 0,
                    "NE": 2,
                    "NV": 0,
                    "NH": 2,
                    "NJ": 44,
                    "NM": 3,
                    "NY": 23,
                    "NC": 4,
                    "ND": 0,
                    "OH": 36,
                    "OK": 6,
                    "OR": 5,
                    "PA": 13,
                    "RI": 1,
                    "SC": 2,
                    "SD": 0,
                    "TN": 9,
                    "TX": 23,
                    "UT": 0,
                    "VT": 0,
                    "VA": 11,
                    "WA": 6,
                    "WV": 2,
                    "WI": 19,
                    "WY": 1,
                    "TO": 6179,
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