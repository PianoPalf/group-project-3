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
//let color = ['#440154', '#482677','#404788','#33638d','#287d8e','#1f968b','#29af7f','#55c667','#73d055']
//let color= ['#a50026','#d73027','#f46d43','#fdae61','#fee090','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695']
//let color = ['#29066b','#7d3ac1','#af4bce','#db4cb2','#eb548c','#ea7369','#f0a58f','#fceae6']
let color = ['#142459','#176ba0','#19aade','#1ac9e6','#18d4d4','#1de4bd','#6dfdd2','#c7f9ee']


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
        
    // Need to extract these values from the data instead of making custom array
    let method_list = ['<select sector>', 'web', 'tech', 'financial', 'government', 'retail', 'NGO', 'misc',
    'transport', 'legal', 'gaming', 'health', 'telecoms', 'app',
    'finance', 'academic', 'military'];
        
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
      
    // Filter for Selected method
    let selectedMethod = _.filter(data, object => object.sector == user_choice);
    console.log("Selected Sector: ", selectedMethod)


    /////////////////// METHOD INFO BOX //////////////////////
    // Select Method Info Box
    let methodInfo = document.getElementById("sample-metadata");
      
    // Calculations for Method Info Box
    let totalBreaches = _.size(selectedMethod)
    let recordsLost = _.sumBy(selectedMethod, 'records_lost')
    let avgRecordsLost = (recordsLost/totalBreaches)
    let totalDataSens = _.sumBy(selectedMethod, 'data_sensitivity')
    let avgDataSens = (totalDataSens/totalBreaches)
    let worstBreach = _.sortBy(selectedMethod, 'records_lost').reverse().slice(0,1);
    console.log("Worst Breach: ", worstBreach.organisation)
    
    // Populate Method Info
    let demoText = `<b>Total Breaches:</b> ${totalBreaches}<br><br>\
                    <b>Records Lost:</b> ${recordsLost.toLocaleString()}<br><br>\
                    <b>Avg. Records Lost:</b> ${avgRecordsLost.toLocaleString()}<br><br>\
                    <b>Avg. Data Sensitivity:</b> ${avgDataSens.toFixed(3)}<br><br>\
                    <b>Worst Breach:</b> ${worstBreach[0].organisation}<br>${worstBreach[0].month}, ${worstBreach[0].year}`
      
    // Print Method Info to Method Info Box
    methodInfo.innerHTML = demoText;

    
    ////////////////////// PIE CHART /////////////////////////
    
    
    // Plot Pie Chart
    // Plotly.newPlot('pieChart', pieData, pieLayout);

    
    ///////////////////// LINE CHART //////////////////////// 
    
      
    // Plot Line Chart
    // Plotly.newPlot('lineChart', lineData, lineLayout);


    ////////////////// HORIZONTAL BAR CHART //////////////////
    
      
    // Plot Horizontal Bar Chart
    // Plotly.newPlot("barChart", barData, barLayout);


    //////////////////////// BUBBLE CHART /////////////////////////
    
      
      // Plot Bubble Chart
      // Plotly.newPlot("bubbleChart", bubbleData, bubbleLayout);
    
}});