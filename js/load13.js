function load13() {
    $("svg").remove();
    $("body").append('<svg width="960" height="600" id="statesvg"></svg>');
    function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
        "<tr><td>Students</td><td>"+(d.low)+"</td></tr>"+
        "</table>";
    }

    var numbers = {
                    "AL": 2,
                    "AK": 0,
                    "AZ": 6,
                    "AR": 2,
                    "CA": 176,
                    "CO": 10,
                    "CT": 16,
                    "DE": 1,
                    "FL": 24,
                    "GA": 15,
                    "HI": 5,
                    "ID": 1,
                    "IL": 5317,
                    "IN": 12,
                    "IA": 5,
                    "KS": 7,
                    "KY": 8,
                    "LA": 7,
                    "ME": 0,
                    "MD": 20,
                    "MA": 29,
                    "MI": 27,
                    "MN": 8,
                    "MS": 0,
                    "MO": 32,
                    "MT": 0,
                    "NE": 1,
                    "NV": 1,
                    "NH": 2,
                    "NJ": 86,
                    "NM": 1,
                    "NY": 41,
                    "NC": 7,
                    "ND": 0,
                    "OH": 34,
                    "OK": 5,
                    "OR": 6,
                    "PA": 19,
                    "RI": 0,
                    "SC": 3,
                    "SD": 0,
                    "TN": 10,
                    "TX": 32,
                    "UT": 0,
                    "VT": 0,
                    "VA": 50,
                    "WA": 16,
                    "WV": 1,
                    "WI": 9,
                    "WY": 0,
                    "TO": 6054,
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