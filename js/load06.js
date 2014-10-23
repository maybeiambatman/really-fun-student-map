function load06() {
    $("svg").remove();
    $("body").append('<svg width="960" height="600" id="statesvg"></svg>');
    function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
      return "<h4>"+n+"</h4><table>"+
        "<tr><td>Students</td><td>"+(d.low)+"</td></tr>"+
        "</table>";
    }

    var numbers = {
                    "AL": 1,
                    "AK": 0,
                    "AZ": 8,
                    "AR": 2,
                    "CA": 40,
                    "CO": 11,
                    "CT": 3,
                    "DE": 3,
                    "FL": 6,
                    "GA": 6,
                    "HI": 1,
                    "ID": 1,
                    "IL": 6323,
                    "IN": 17,
                    "IA": 7,
                    "KS": 9,
                    "KY": 7,
                    "LA": 2,
                    "ME": 0,
                    "MD": 17,
                    "MA": 9,
                    "MI": 17,
                    "MN": 9,
                    "MS": 0,
                    "MO": 44,
                    "MT": 0,
                    "NE": 7,
                    "NV": 3,
                    "NH": 4,
                    "NJ": 37,
                    "NM": 1,
                    "NY": 14,
                    "NC": 5,
                    "ND": 0,
                    "OH": 37,
                    "OK": 5,
                    "OR": 3,
                    "PA": 6,
                    "RI": 0,
                    "SC": 2,
                    "SD": 0,
                    "TN": 4,
                    "TX": 21,
                    "UT": 0,
                    "VT": 1,
                    "VA": 13,
                    "WA": 11,
                    "WV": 3,
                    "WI": 13,
                    "WY": 0,
                    "TO": 6733,
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