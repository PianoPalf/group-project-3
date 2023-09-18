# Group project 3
## <i>An in-depth look at the worlds biggest databreaches since the year 2000 by industry sector.</i>

<img width="1440" alt="databreach_image" src="https://github.com/PianoPalf/group-project-3/blob/c810670637adb46ae56fe4682050bddcc366ff5b/Images/download.png">

## Dashboard
* Links to a dashboard containing several different plots to display databreach details
 


*** 
## Project Overview
 This task requires the group to work cohesively to tell a story using a rage of data visualisations and data extraction tools.

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

### Part 1 
Sam
1. Cleansed data and created dataframe and initial drop down menu
    * I did this.<br>
    * I did this.<br>
    * I did this.<br>
    * I did this.<br>
### Part 2
Hajar
 2. Created a Flask API.
    * I did this.<br>
    * I did this.<br>
    * I did this.<br>
    * I did this.<br>
    
    <img width="366" alt="image" src="https://github.com/">

### Part 3
Priya
 3. Created a bubble chart and pie chart

    * I did this.<br>
    * I did this.<br>
    * I did this.<br>
    * I did this.<br>
    
    <img width="913" alt="image" src="https://github.com/">

### Part 4
Taryn
For this section of the dashboard, the user selects an industry sector from the drop down menu and a line chart reflects  the correlation between data breaches over time by the amount of breaches. Secondary, a bar chart reflects the severity of the data breach from 1 - 5 corresponding to the following:

    1. Just email address/Online information
    2. SSN/Personal details
    3. Credit card information
    4. Health & other personal records
    5. Full details

An example of the line chart showing the decrease of data breaches over time in the app industry sector:
 <img width="321" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/984a6d2923ed84cdb03c73010ee860bf3aaa664d/Images/line_chart_deacrease.png">

 An example of the bar chart showing the severity of data sensitivity of breaches by total breaches in the health industry sector, the most breaches are '4' which correlates to 'Health & other personal records':
 <img width="321" alt="image" src="https://github.com/PianoPalf/group-project-3/blob/b9fff181cd257a31d4e5bba5139bbaa0d743b7d9/Images/health_breaches.png">

__Methodology__
To create the charts, used the countby function by year and used Lodash countby and the user-selected array. The trace was then set setting x-values as years and y for the number of breaches. We then created the line layout and set the range using Lodash.

For the bar chart we used groupby sensitivity, using ```DatasenseSum``` which adds the groupby objects together. 

***
## __Findings and Summary__

 
 <img width="321" alt="image" src="https://github.com/">
 

***
## Resources and Acknowledgements
- Reference assisted in the following code snippet
```
          example: code,
```

- Reference assisted in the following code snippet
```
    example: code,
```