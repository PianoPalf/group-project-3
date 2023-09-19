# Group project 3
## <i>An in-depth look at the worlds biggest databreaches since the year 2000 by industry sector.</i>
​
<img width="1440" alt="databreach_image" src="https://github.com/PianoPalf/group-project-3/blob/c810670637adb46ae56fe4682050bddcc366ff5b/Images/download.png">
​
## Dashboard
* Links to a dashboard containing several different plots to display databreach details
 
​
​
*** 
## Project Overview
 This task requires the group to work cohesively to tell a story using a rage of data visualisations and data extraction tools.
​
### Requirements
    -   The visualisation is to include a Python Flask-powered API, HTML/CSS, Javascript and at least one database (SQL, MongoDB, SQLite)
    -   It should contain a combination of web scraping and Leaflet or Plotly OR a dashboard page with multiple charts that update from the same data
    -   Include a new JS library
    -   It must be powered by a dataset with at least 100 records
    -   It must include user-driven interaction
    -   It should include at least 3 views
***
## File structure
- __Images:__ contains images of the plots and background for readme file
- __Python:__ contains app_HH.py, dataframe_creation, sqlite_table_creation
- __Resources:__ Contains Chart_images
- __README.md:__ ReadMe file, you're already here
- __static:__ html. css source code
- __index.html:__ reference file for the study
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
​
### Part 1 
Sam
1. Cleansed data and created dataframe and initial drop down menu
    * I did this.<br>
    * I did this.<br>
    * I did this.<br>
    * I did this.<br>
### Part 2
Hajar
​
For this section, a Flask API was created using SQLalchemy. We imported the automap feature, Flask, jsonify.
​
    * Reflected the database into a new model
    * Set up the database
    * Reflected the tables
    * Set the session variables and then set the Flask routes
    
<img width="366" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/2774022396a63db65394b779ccdbe8d4f14657ad/Images/FlaskAPI.png">
​
### Part 3
Priya
 3. Created a bubble chart and pie chart
 ### Pie chart
​
1.Dashboard Section: Data Breach Analysis by Industry Sector
​
This section of the dashboard offers users an interactive exploration of data breaches within various industry sectors. Users have the capability to select a specific industry sector from a dropdown menu. Upon selection, the dashboard dynamically responds by providing a comprehensive analysis of data breaches unique to the chosen sector.
​
Key Features:
​
1.Industry Sector Selection:
​
Users can select a specific industry sector from the dropdown menu. This intuitive interface element serves as the gateway to exploring data breach insights tailored to their sector of interest.
​
2.Data Filtering:
The system filters and processes data, isolating the information relevant to the selected industry sector. This ensures that the subsequent visualizations and analysis are focused and pertinent.
​
3.Pie Chart Visualization:
The core of this section is a sophisticated pie chart. This chart elegantly illustrates the distribution of data breaches within the chosen industry sector.
​
4.Method of Breach Breakdown:
The pie chart is segmented into distinct slices, each representing one of the five primary breach methods: Hacked, Lost Device, Poor Security, Accident, and Inside Job.
​
5.Slice Proportions:
Slice size directly correlates to the prevalence of each breach method within the selected industry sector. Larger slices indicate a higher frequency of breaches associated with that particular method.
​
​
### Bubble chart
​
This section of the dashboard offers users an advanced analytical tool for in-depth exploration of data breaches within specific industry sectors.
​
Key Features:
​
1.Bubble Chart Visualization:
​
The centerpiece of this section is an advanced bubble chart. This visually appealing chart offers a sophisticated representation of data breach incidents within the selected industry sector.
​
2.Bubble Attributes:
​
Each bubble within the chart encapsulates a wealth of information:
1.Data Sensitivity: Bubble color is indicative of data sensitivity, allowing users to distinguish between breaches involving highly sensitive data and those of a less sensitive nature.
​
2.Year of Breach: The x-axis position of each bubble corresponds to the year in which the breach occurred, facilitating the examination of trends over time.
​
3.Records Lost: The size of each bubble is directly proportional to the number of records lost during the respective data breach. Larger bubbles represent incidents involving a significant quantity of lost records.
    
​
### Part 4
Taryn
​
For this section of the dashboard, the user selects an industry sector from the drop down menu and a line chart reflects  the correlation between data breaches over time by the amount of breaches. Secondary, a bar chart reflects the severity of the data breach from 1 - 5 corresponding to the following:
​
    1. Just email address/Online information
    2. SSN/Personal details
    3. Credit card information
    4. Health & other personal records
    5. Full details
​
An example of the line chart showing the erratic changes of data breaches over time in the government industry sector:
​
 <img width="400" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/1c017a0aa6faab3943eb950180abf3e43566b89c/Images/line_gov%20(2).png">
​
 An example of the bar chart showing the severity of data sensitivity of breaches by total breaches in the health industry sector, the most breaches are '4' which correlates to 'Health & other personal records':
​
 <img width="400" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/1c017a0aa6faab3943eb950180abf3e43566b89c/Images/bar_health.png">
​
__Methodology__
To create the charts, used the countby function by year and used Lodash countby and the user-selected array. The trace was then set setting x-values as years and y for the number of breaches. We then created the line layout and set the range using Lodash.
​
For the bar chart we used groupby sensitivity, using ```DatasenseSum``` which adds the groupby objects together. 
​
***
## __Findings and Summary__
​
 
 <img width="321" alt="image" src="https://github.com/">
 
​
***
## Resources and Acknowledgements
- Reference assisted in the following code snippet
```
          example: code,
```
​
- Reference assisted in the following code snippet
```
    example: code,
- Reference assisted in the following code snippet
```
          example: code,
```
​
- - Reference assisted in the following code snippet
```
          example: code,
```
​
- Reference assisted in the following code snippet
```
    example: code,- Reference assisted in the following code snippet
```
          example: code,
```
​
- Reference source for data set https://informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/
​
- Reference source for the data set for Dashboard https://docs.google.com/spreadsheets/d/1i0oIJJMRG-7t1GT-mr4smaTTU7988yXVz8nPlwaJ8Xk/edit#gid=2
​
- Reference source for Lodash JS library 
https://lodash.com/
​
- Reference source for Flask and MongoDB database creation  https://flask-pymongo.readthedocs.io/en/latest/
https://stackoverflow.com/questions/48236087/implementing-mongodb-search-engine-api-in-flask