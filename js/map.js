var election = new Datamap({
  scope: 'usa',
  element: document.getElementById('usa-map'),
  geographyConfig: {
    highlightBorderColor: '#999999',
    highlightFillColor: '#ffffff',
    popupTemplate: function(geography, data) {
      return '<div class="hoverinfo mx-auto">' + geography.properties.name + '<br/>Pieces of Available Data:' + data.dataPoints + ' '
    },
    highlightBorderWidth: 1
  },

  fills: {
    'Three': '#4AB739',
    'Two': '#A9B500',
    'One': '#FFB500',
    'Zero': '#FF3800',
    defaultFill: '#D1D1D1'
  },
  data: {
    "AZ": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "CO": {
      "fillKey": "Two",
      "dataPoints": 2
    },
    "DE": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "FL": {
      "fillKey": "Three",
      "dataPoints": 3
    },
    "GA": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "HI": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "ID": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "IL": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "IN": {
      "fillKey": "Two",
      "dataPoints": 2
    },
    "IA": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "KS": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "KY": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "LA": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "MD": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "ME": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "MA": {
      "fillKey": "Three",
      "dataPoints": 3
    },
    "MN": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "MI": {
      "fillKey": "Three",
      "dataPoints": 3
    },
    "MS": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "MO": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "MT": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "NC": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "NE": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "NV": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "NH": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "NJ": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "NY": {
      "fillKey": "Three",
      "dataPoints": 3
    },
    "ND": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "NM": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "OH": {
      "fillKey": "Two",
      "dataPoints": 2
    },
    "OK": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "OR": {
      "fillKey": "Three",
      "dataPoints": 3
    },
    "PA": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "RI": {
      "fillKey": "Three",
      "dataPoints": 3
    },
    "SC": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "SD": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "TN": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "TX": {
      "fillKey": "Three",
      "dataPoints": 3
    },
    "UT": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "WI": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "VA": {
      "fillKey": "Two",
      "dataPoints": 2
    },
    "VT": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "WA": {
      "fillKey": "Two",
      "dataPoints": 2
    },
    "WV": {
      "fillKey": "Three",
      "dataPoints": 3
    },
    "WY": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "CA": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "CT": {
      "fillKey": "Two",
      "dataPoints": 2
    },
    "AK": {
      "fillKey": "Zero",
      "dataPoints": 0
    },
    "AR": {
      "fillKey": "One",
      "dataPoints": 1
    },
    "AL": {
      "fillKey": "Zero",
      "dataPoints": 0
    }
  }
});
election.labels();
