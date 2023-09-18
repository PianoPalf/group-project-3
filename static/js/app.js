//################ DATA BREACHES DASHBOARD ###################
//############################################################

//###### Explores a Dataset with Interactive Charts ##########

// Set URL for Data Import
const url = "http://127.0.0.1:5000//api/v1.0/data_breaches";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ",dataPromise); 

// Set Global Variables
let user_choice;
//let color = ['#440154', '#482677','#404788','#33638d','#287d8e','#1f968b','#29af7f','#55c667','#73d055']
//let color= ['#a50026','#d73027','#f46d43','#fdae61','#fee090','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695']
//let color = ['#29066b','#7d3ac1','#af4bce','#db4cb2','#eb548c','#ea7369','#f0a58f','#fceae6']
let color = ['#142459','#176ba0','#19aade','#1ac9e6','#18d4d4','#1de4bd','#6dfdd2','#c7f9ee'];
const font = {family: 'Helvetica, sans-serif', weight: 'light',
              size: 16, color: '#5f5f5f'}


////////// FETCH JSON DATA & PLOT INTERACTIVE CHARTS /////////
//////////////////////////////////////////////////////////////
d3.json(url).then(function(data) {
    
    // Check Data in Console
    console.log("Data: ", data);

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
         
    // Create an Array containing each sector (unique values)
    let uniqueSectors = _.uniqBy(data, 'sector').map(key => key.sector);
    // Print Unique Sectors to console
    console.log('Unique Sectors: ', uniqueSectors);

    // Add <select sector> element to beginning of Array for Dropdown Menu
    uniqueSectors.unshift('<select sector>')

    // Use the Array of Methods to populate the menu options
    let sectors = uniqueSectors;
      
    // Append Method Array to Dropdown Menu
    sectors.forEach((sector) => {
    dropdownMenu
        .append("option")
        .text(sector)
        .property("value", sector);
})};

    
///////////FUNCTION: DOM Changes & Plot Charts ////////////////
///////////////////////////////////////////////////////////////
function getData(){
      
    // Select Dropdown Menu using D3
    let dropdownMenu = d3.select("#selDataset");
      
    // Assign the chosen sector to a variable
    user_choice = dropdownMenu.property("value");
      
    // Print the chosen sector to the console
    console.log("User Choice: ", user_choice);
      
    // Filter for Selected sector
    let selectedSector = _.filter(data, object => object.sector == user_choice);
    // Print the Selected sector Array of Objects to the console
    console.log("Selected Sector: ", selectedSector)


    /////////////////// METHOD INFO BOX //////////////////////
    // Select Sector Info Box
    let sectorInfo = document.getElementById("sample-metadata");
      
    // Calculations for Sector Info Box
    let totalBreaches = _.size(selectedSector)
    let recordsLost = _.sumBy(selectedSector, 'records_lost')
    let avgRecordsLost = (recordsLost/totalBreaches)
    let totalDataSens = _.sumBy(selectedSector, 'data_sensitivity')
    let avgDataSens = (totalDataSens/totalBreaches)
    let worstBreach = _.sortBy(selectedSector, 'records_lost').reverse().slice(0,1);
    // Print the Worst Breach of Selected sector to the console
    console.log("Worst Breach: ", worstBreach[0].organisation)
    
    // Populate Sector Info
    let demoText = `<b>Total Breaches:</b> ${totalBreaches}<br><br>\
                    <b>Records Lost:</b> ${recordsLost.toLocaleString()}<br><br>\
                    <b>Avg. Records Lost:</b> ${avgRecordsLost.toLocaleString()}<br><br>\
                    <b>Avg. Data Sensitivity:</b> ${avgDataSens.toFixed(2)}<br><br>\
                    <b>Worst Breach:</b> ${worstBreach[0].organisation}<br>${worstBreach[0].month}, ${worstBreach[0].year}`
      
    // Print Sector Info to Method Info Box
    sectorInfo.innerHTML = demoText;

    
    ////////////////////// PIE CHART /////////////////////////
    // Count Method Values
    let methodCount = _.countBy(selectedSector, 'method');
    // Print Method Count to console
    console.log('Method Count: ', methodCount)

    // Set Variables for Pie Chart Labels and Values
    let pie_labels = Object.keys(methodCount)
    let pie_values = Object.values(methodCount)
    
    // Set up Pie Chart
    let pieData = [{
        labels: pie_labels,
        values: pie_values,
        type: 'pie',
        marker: {
          colors: color.slice(0,5)
        },
      }];
    
    // Set Pie Chart Layout  
    let pieLayout = {
        title: 'Method of Data Breaches',
        font: font
    };
    
    // Plot Pie Chart
    Plotly.newPlot('pieChart', pieData, pieLayout);

    
    ///////////////////// LINE CHART //////////////////////// 
    // Count Data Breaches per Year
    let yearCount = _.countBy(selectedSector, 'year');
    // Print Year Count to console
    console.log('Year Count: ', yearCount)

    // Set Variables for Line Chart Labels and Values 
    let line_labels = Object.keys(yearCount)
    let line_values = Object.values(yearCount)

    // Set Trace for Line Chart
    let trace = {
        x: line_labels,
        y: line_values,
        mode: 'lines',
        type: 'scatter',
        marker: {
          color: color[2]
        },
        line: {
          shape: 'linear'
        }
      };
      
    // Set Data for Line Chart
    let lineData = [trace];
      
    // Set Line Chart Layout 
    let lineLayout = {
        title: 'Data Breaches Over Time',
        font: font,
        xaxis: {title: 'year'},
        yaxis: {title: 'breaches', range: [0, 20]},
        margin: {pad: 5}
      };
      
    // Plot Line Chart
    Plotly.newPlot('lineChart', lineData, lineLayout);


    ////////////////// HORIZONTAL BAR CHART //////////////////
    // Groupby Data Sensitivity
    let dataSensGrouped = _.groupBy(selectedSector, 'data_sensitivity');
    // Print Data Sensitivity Grouped data
    console.log('Grouped Data Sensitivities: ', dataSensGrouped)

    // Sum each Data Sensitivty Key in Groupby Variable
    let dataSensSum = _.mapValues(dataSensGrouped, dataSens => _.sumBy(dataSens, 'data_sensitivity'));
    // Print records lost per Data Sensivity key
    console.log('Records Lost: ', dataSensSum)

    // Set Variables for Bar Chart Labels and Values 
    let barLabels = Object.keys(dataSensSum)
    let barValues = Object.values(dataSensSum)
    
    // Set Trace for Bar Chart
    let traceBar = {
        x: barValues.reverse(),
        y: barLabels.reverse(),
        //text: chartData.labels.slice(0,10).reverse(),
        type: "bar",
        orientation: "h",
        marker: {color: color.slice(0,5)}
    };
      
    // Set Bar Chart Data to Trace
    let barData = [traceBar];
    
    // Set Bar Chart Layout Parameters
    let barLayout = {
        title: `Total Breaches by Data Sensitivity`,
        font: font,
        xaxis: {title: 'total breaches'},
        yaxis: {title: 'data sensitivity', automargin: true, autotick: false},
        margin: {pad: -10}
    };
      
    // Plot Horizontal Bar Chart
    Plotly.newPlot("barChart", barData, barLayout);


    //////////////////////// BUBBLE CHART /////////////////////////
    // Sort data by 'records_lost' in descending order and extract Top 10
    let sortedRecordsLost = _.sortBy(selectedSector, 'records_lost').reverse().slice(0,8);
    // Print Top Data Breaches per sector by records lost
    console.log("Sorted Data: ", sortedRecordsLost)
      
    // Create Empty Object to Append to
    let combinedObject = {};
      
    // Group Objects by Keys
    let groupedObjects = _.groupBy(sortedRecordsLost, (obj) => _.keys(obj).join(','));
      
    // Iterate over each group
    // From ChatGPT
    _.forEach(groupedObjects, (group, keys) => {
        const keyArray = keys.split(','); 
         _.forEach(keyArray, (key) => {
          if (!combinedObject[key]) {
            combinedObject[key] = [];
          }
          combinedObject[key] = _.concat(combinedObject[key], _.map(group, key));
        });
    });
    
    // Check Combined Object for Plotting
    console.log('Combined Object for Plotting: ',combinedObject);

    // Create DateTime of 'date' array
    let dateArray = combinedObject.date.map(dateString => new Date(dateString));
    // Print 'date' array to console
    console.log('Date Array: ', dateArray)

    // Set Trace for Bubble Chart
    let traceBubble = {
        type: "scatter",
        mode: 'markers',
        x: dateArray,
        y: combinedObject.data_sensitivity,
        text: combinedObject.story,
        marker: {
          color: color,
          size: combinedObject.records_lost,
          showscale: false,
          sizeref: 4000000
        },
        hovertemplate: "<b>%{customdata}</b><br>%{text}<extra></extra>",
        customdata: combinedObject.organisation
      };
      
      // Set Bubble Chart Data to Trace
      let bubbleData = [traceBubble];
      
      // Set Bubble Chart Layout Parameters
      var bubbleLayout = {
        title: `Top Data Breaches`,
        font: font,
        showlegend: false,
        height: 600,
        width: 1140,
        xaxis: {title: {text: "year"}},
        yaxis: {title: {text: "data sensitivity"}}
      };
      
      // Plot Bubble Chart
      Plotly.newPlot("bubbleChart", bubbleData, bubbleLayout);

}});