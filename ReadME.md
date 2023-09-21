# Group Project 3
## <i>An in-depth look at the largest Data Breaches since 2005 by Industry/Sector.</i>

<img width="366" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/69887cfbff8880017cdc93576da3c9088165d1fc/Images/Dashboard%20Images/download.png"><br>


## Dashboard

A SQLite Database, containing approximately 400 of the largest and most significant Data Breaches in history, pushes data via a Python/Flask API to an Interactive Dashboard created using JavaScript, Lodash (JS library) and Plotly.

![dashboard](Dashboard%20Images/dashboard_screenshot.png)


***
## Project Overview
 This task requires the group to work cohesively to tell a story using a range of data extraction and visualisation tools.


### Requirements
    -   The visualisation is to include a Python Flask-powered API, HTML/CSS, Javascript and at least one database (SQL, MongoDB, SQLite)
    -   It should contain a combination of web scraping and Leaflet or Plotly OR a dashboard page with multiple charts that update from the same data
    -   Include a new JS library
    -   It must be powered by a dataset with at least 100 records
    -   It must include user-driven interaction
    -   It should include at least 3 views

## File structure
- __Images:__ contains images of the plots and background for readme file.
- __Python:__ contains app_HH.py, dataframe_creation_&_clean.ipynb, sqlite_table_creation.ipnyb.
- __Resources:__ Contains raw data, cleaned CSV data file (complete_data_breaches.csv) and SQLite Database.
- __README.md:__ README file, you're already here!
- __static:__ contains app.js and style.css files.
- __index.html:__ Interactive Dashboard file.
***
## Tools
- Python
- Pandas
- Flask API
- MongoDB
- SQLite
- D3 Library
- Javascript
- HTML/CSS
- Lodash (new JS library for the challenge)
***
## Project details

### Part 1 
## Sam
#### 1. Data cleaning and DataFrame creation:
* Raw data read into Python as Pandas DataFrame.
* DataFrame was cleaned:
	* stripped white space from column headers and values.
  * created new and unique ‘id’ column.
  * dropped rows based on NaNs.
  * removed non-numeric characters from integer & float columns.
  * mapped three-letter month name to month number eg. ‘Mar’: 3.
  * concatenated month numbers with year column to create datetime column for plotting purposes.
#### 2. Exploratory Analysis:
* Created various exploratory charts using Pandas plot, Matplotlib and Pivot Table functions to guide project direction.
#### 3. Created JavaScript Dashboard Backbone:
* Populated Dropdown Menu.
* Populated Sector Summary Box.
* Imported and implemented Lodash JavaScript library to facilitate GroupBy, Count, Sum and other related functions essential for plotting charts.
***

### Part 2
## Hajar<br>

For this section, a Flask API was created using SQLalchemy. We imported the automap feature, Flask, jsonify.<br><br>

* Reflected the database into a new model<br>
* Set up the database<br>
* Reflected the tables<br>
* Set the session variables and then set the Flask routes
  

<img width="366" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/2774022396a63db65394b779ccdbe8d4f14657ad/Images/FlaskAPI.png"><br>


### Part 3
## Priya<br>

Created a bubble chart and pie chart<br>
## Pie chart

#### 1. Dashboard Section: Data Breach Analysis by Industry Sector

* This section of the dashboard offers users an interactive exploration of data breaches within various industry sectors. Users have the capability to select a specific industry sector from a dropdown menu. Upon selection, the dashboard dynamically responds by providing a comprehensive analysis of data breaches unique to the chosen sector.<br>

* Industry Sector Selection:
  * Users can select a specific industry sector from the dropdown menu. This intuitive interface element serves as the gateway to exploring data breach insights tailored to their sector of interest.


#### 2. Data Filtering:

* The system filters and processes data, isolating the information relevant to the selected industry sector. This ensures that the subsequent visualizations and analysis are focused and pertinent.

#### 3. Pie Chart Visualization:

* The core of this section is a sophisticated pie chart. This chart elegantly illustrates the distribution of data breaches within the chosen industry sector.

#### 4. Method of Breach Breakdown:

* The pie chart is segmented into distinct slices, each representing one of the five primary breach methods: Hacked, Lost Device, Poor Security, Accident, and Inside Job.

#### 5. Slice Proportions:

* Slice size directly correlates to the prevalence of each breach method within the selected industry sector. Larger slices indicate a higher frequency of breaches associated with that particular method.


## Bubble chart

This section of the dashboard offers users an advanced analytical tool for in-depth exploration of data breaches within specific industry sectors.

#### 1. Bubble Chart Visualization:
* The centerpiece of this section is an advanced bubble chart. This visually appealing chart offers a sophisticated representation of data breach incidents within the selected industry sector.<br>

#### 2. Bubble Attributes:
* Each bubble within the chart encapsulates a wealth of information:
	1. 	Data Sensitivity: Bubble color is indicative of data sensitivity, allowing users to distinguish between breaches involving highly sensitive data and those of a less sensitive nature.
	2. 	Year of Breach: The x-axis position of each bubble corresponds to the year in which the breach occurred, facilitating the examination of trends over time.
	3.  Records Lost: The size of each bubble is directly proportional to the number of records lost during the respective data breach. Larger bubbles represent incidents involving a significant quantity of lost records.


### Part 4
## Taryn<br>

For this section of the dashboard, the user selects an industry sector from the drop down menu and a line chart reflects  the correlation between data breaches over time by the amount of breaches. Secondary, a bar chart reflects the severity of the data breach from 1 - 5 corresponding to the following:<br>
​
    1. Just email address/Online information<br>
        2. SSN/Personal details<br>
        3. Credit card information<br>
        4. Health & other personal records<br>
        5. Full details<br>
            ​
            An example of the line chart showing the erratic changes of data breaches over time in the government industry sector:<br>

 <img width="400" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/1c017a0aa6faab3943eb950180abf3e43566b89c/Images/line_gov%20(2).png"><br>
​
 An example of the bar chart showing the severity of data sensitivity of breaches by total breaches in the health industry sector, the most breaches are '4' which correlates to 'Health & other personal records':<br>
​
 <img width="400" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/1c017a0aa6faab3943eb950180abf3e43566b89c/Images/bar_health.png"><br>
​
__Methodology__<br>
To create the charts, used the countby function by year and used Lodash countby and the user-selected array. The trace was then set setting x-values as years and y for the number of breaches. We then created the line layout and set the range using Lodash.<br>
​
For the bar chart we used groupby sensitivity, using ```DatasenseSum``` which adds the groupby objects together. <br>
​

***
## __Findings and Summary__

•	The complete dashboard tells a story, created through a thorough data cleansing process, it gives a wholistic view of the biggest databreaches across the globe in the past 2 decades.<br><br>

•	_Which industry sectors have been most vulnerable to data breaches?_ Where technology impacts nearly every area of our life, it clear that web, tech and healthcare have the most severe and far reaching breaches across the industry sectors.<br><br>
•	_What are the most common type of data breaches?_ The most common data breaches across the last decade was overwhelmingly by hacking, prior to that lost devices were most common however with organisations increase device security restriction measures, this is less common. Interestingly, in the health sector personal device was the greatest type of data breach.<br><br>

•	_What types of data (data sensitivity) were breached in each sector?_ Each sectors largest data sensitivity breaches involved personal information which corresponded to the industry such as personal health details within the health industry and credit card information in the financial industry and email addresses for tech companies like LinkedIn. <br><br>

•	_How have the method of data breaches changed over time?_ Databreaches have largely moved away from personal devices and hardware to cloud and web based breaches in the last decade, we can see that databreaches due to poor security and inside job are actually much less common than external hacking and lost devices. This indicates a need for increased awareness and security in the web, financial, government and health sectors.<br><br>

These findings can assist in creating areas of focus for data security for organizations and assist in forecasting which security measures to invest in, moving forward. One of the most active markets in data breaches is blackmail so now, more than ever, protecting data and and proactively defending breaches and having a plan B is imperative.




***
## Resources and Acknowledgements
- ChatGPT: [OpenAI's ChatGPT Repository](https://github.com/openai/gpt-3.5) (Model Version: GPT-3.5 - September 2023)
  - Creating Summary Object from Object containing unwanted Keys:
```javascript
// Iterate over Object to create Summary Object that contains Keys and all Values
// Code adapted from ChatGPT
_.forEach(groupedObjects, (group, keys) => {
    const keyArray = keys.split(','); 
     _.forEach(keyArray, (key) => {
      if (!combinedObject[key]) {
        combinedObject[key] = [];
      }
      combinedObject[key] = _.concat(combinedObject[key], _.map(group, key));});
});
```

- ChatGPT: [OpenAI's ChatGPT Repository](https://github.com/openai/gpt-3.5) (Model Version: GPT-3.5 - September 2023)
  - Mapping Colors to specific Y-axis values in Horizontal Bar and Bubble Charts:

```javascript
// Create Array of Colors based Data Sensitivity Values
// Code adapted from ChatGPT
let barColors = barLabels.map(value => {
  // Loop through colors to assign color based on value
  for (let i = 0; i < dSensColors.length; i++) {
      if (value <= dSensColors[i][0]) {
          return dSensColors[i][1];}}
});
```
- Source of dataset: 
  - https://informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/
    ​
- Link to Google Doc Spreadsheet Raw Data:
  -  https://docs.google.com/spreadsheets/d/1i0oIJJMRG-7t1GT-mr4smaTTU7988yXVz8nPlwaJ8Xk/edit#gid=2
    ​
- Lodash JS Library: 
  - https://lodash.com/
    ​
- Flask and MongoDB database creation:
  - https://flask-pymongo.readthedocs.io/en/latest/
  - https://stackoverflow.com/questions/48236087/implementing-mongodb-search-engine-api-in-flask
