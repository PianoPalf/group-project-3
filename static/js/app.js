//################ DATA BREACHES DASHBOARD ###################
//############################################################

//###### Explores a Dataset with Interactive Charts ##########

// Set URL for Data Import
const url = "http://127.0.0.1:5000//api/v1.0/data_breaches";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ",dataPromise); 

// Set Global Variable
let user_choice;

////////// FETCH JSON DATA & PLOT INTERACTIVE CHARTS /////////
//////////////////////////////////////////////////////////////
d3.json(url).then(function(data) {
    
    // Check Data in Console
    console.log("Data: ", data);
      
    // Make Object of Metadata for Easy Access (not required because same format as data variable)
    let Object = data.map(row =>({
        'id': row.id,
        'organisation': row.organisation,
        'records_lost': row.records_lost,
        'month': row.month,
        'year': row.year,
        'sector': row.sector,
        'method': row.method,
        'data_sensitivity': row.data_sensitivity,
        'source_name': row.source_name,
        'city': row.city,
        'country': row.country,
        'latitude': row.latitude,
        'longitude': row.longitude,
        'coordinates': row.coordinates
    }));
    
    // Check metadata
    console.log('Data Object: ', Object);

    // Call Dropdown Menu Function
    makeMenu()

    // Dropdown Menu Selection & Call getData Function
    d3.selectAll("#selDataset").on("change", getData);
    

    //////////////////////// FUNCTIONS ///////////////////////////

    ////////////// FUNCTION: Populate Dropdown Menu //////////////
    //////////////////////////////////////////////////////////////
    function makeMenu(){
        
        // Get reference to the Dropdown select element
        let dropdownMenu = d3.select("#selDataset");
        
        // Need to extract these values from the data instead of making custom array
        let method_list = ['<select method>', 'hacked', 'accident', 'inside job',
        'poor security', 'lost device'];
        
        // Use the Array of Methods to populate the menu options
        let methods = method_list;
      
        // Append Method Array to Dropdown Menu
        methods.forEach((method) => {
        dropdownMenu
          .append("option")
          .text(method)
          .property("value", method);
    })};
    
    ///////////FUNCTION: DOM Changes & Plot Charts ////////////////
    ///////////////////////////////////////////////////////////////
    function getData(){
      
      // Select Dropdown Menu using D3
      let dropdownMenu = d3.select("#selDataset");
      
      // Assign the chosen method to a variable
      user_choice = dropdownMenu.property("value");
      
      // Print the chosen method to the console
      console.log("User Choice: ", user_choice);
      
      // Create variables for filtered data
      let methodData = Object.find(field => Object.method == user_choice);
      
      // Check to see how data can be accessed
      console.log("Object_organisation: ",Object[0].organisation)
      
      /////////////////// METHOD INFO BOX //////////////////////
      // Select Method Info Box
      let methodInfo = document.getElementById("sample-metadata");
      
      // Populate Method Info
      let demoText = `<b>Total Breaches:</b> ${Object[0].organisation}<br>\
                      <b>Records Lost:</b> ${Object[0].organisation}<br>\
                      <b>Avg. Records Lost:</b> ${Object[0].organisation}<br>\
                      <b>Avg. Data Sensitivity:</b> ${Object[0].organisation}<br>\
                      <b>Worst Breach:</b> ${Object[0].organisation}<br>`
      
      // Print Method Info to Method Info Box
      methodInfo.innerHTML = demoText;
      

    // Note for plots below: uncomment code and update to suit new dataset
    //   /////////////////// HORIZONTAL BAR CHART //////////////////////
    //   // Set Trace for Horizontal Bar Chart 
    //   let traceBar = {
    //     x: chartData.values.slice(0,10).reverse(),
    //     y: chartData.otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
    //     text: chartData.labels.slice(0,10).reverse(),
    //     type: "bar",
    //     orientation: "h",
    //     marker: {
    //       color: '#f09664'
    //     }
    //   };
  
    //   // Set Bar Chart Data to Trace
    //   let barData = [traceBar];

    //   // Set Bar Chart Layout Parameters
    //   let barLayout = {
    //     title: `<b>Belly Button Flora</b> - Subject ${demographicData.id}`,
    //     font: {size: 14},
    //     margin: {pad: 5},
    //   };
  
    //   // Plot Horizontal Bar Chart
    //   Plotly.newPlot("bar", barData, barLayout);

    //   //////////////////////// BUBBLE CHART /////////////////////////
    //   // Set Trace for Bubble Chart
    //   let traceBubble = {
    //     type: "scatter",
    //     mode: 'markers',
    //     x: chartData.otu_ids,
    //     y: chartData.values,
    //     text: chartData.labels,
    //     marker: {
    //       color: chartData.otu_ids,      
    //       size: chartData.values,
    //       showscale: true
    //     }
    //   };
      
    //   // Set Bubble Chart Data to Trace
    //   let bubbleData = [traceBubble];
      
    //   // Set Bubble Chart Layout Parameters
    //   var bubbleLayout = {
    //     title: `<b>Microbial Diversity</b> - Subject ${demographicData.id}`,
    //     font: {size: 14},
    //     showlegend: false,
    //     height: 600,
    //     width: 1150,
    //     xaxis: {title: {text: "OTU IDs"}},
    //     yaxis: {title: {text: "Sample Values"}}
    //   };
      
    //   // Plot Bubble Chart
    //   Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    //   //////////////////////// GAUGE CHART //////////////////////////
    //   // Set Trace for Gauge Chart
    //   let traceGauge = {
    //       domain: { x: [0, 1], y: [0, 1] },
    //       value: demographicData.wfreq,
    //       title: { text: `<b>Belly Button Washing Frequency</b> <br>Scrubs Per Week`},
    //       type: "indicator",
    //       mode: "gauge+number",
    //       gauge: { 
    //         axis: { range: [null, 9] },
    //         bar: { color: "#ffffff" },
    //         steps: [
    //           { range: [0, 1], color: '#ebceb7' },
    //           { range: [1, 2], color: '#f6bf96' },
    //           { range: [2, 3], color: '#f6ab7a' },
    //           { range: [3, 4], color: '#f09664' },
    //           { range: [4, 5], color: '#e57d57' },
    //           { range: [5, 6], color: '#d7634a' },
    //           { range: [6, 7], color: '#cd4b3a' },
    //           { range: [7, 8], color: '#c02f2c' },
    //           { range: [8, 9], color: '#b20d1c' },
    //         ]}
    //     };
      
    //   // Set Gauge Chart Data to Trace
    //   let gaugeData = [traceGauge];

    //   // Set Gauge Chart Layout Parameters
    //   let gaugeLayout = { 
    //     width: 515, 
    //     height: 500, 
    //     margin: { t: 0, b: 0} 
    //   };
        
    //   // Plot Gauge Chart
    //   Plotly.newPlot('gauge', gaugeData, gaugeLayout);
    // };
}});