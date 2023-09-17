#################################################
# Data Breaches API
#################################################

# Import dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, text
from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################

# Create engine
engine = create_engine("sqlite:///../Resources/data_breaches.sqlite")

# Reflect an existing database into a new model
Base = automap_base()
# Reflect tables
Base.prepare(engine, reflect=True)

# Save reference to tables
Table = Base.classes.data_breaches


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

# Default landing page of webserver
@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/data_breaches<br/>"
        # f"/api/v1.0/data_breach_visualisation<br/>"
    )

#################################################

@app.route("/api/v1.0/data_breaches")
def data_breaches():
    # Create session (link) from Python to the DB
    session = Session(engine)

    """Return data breaches"""
    
    # Query all data
    all_data_query = text(f"SELECT * FROM data_breaches;")
    data = engine.execute(all_data_query)

    # Close session
    session.close()

    # Transform query result into List of Dictionaries for JSONification
    data_list = []
    for row in data:
        data_dict = {
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
            'coordinates': row.coordinates,
            'date': row.date
        }
        # Append dictionaries to List
        data_list.append(data_dict)

    # Bypass Cors security error
    response = jsonify(data_list)
    response.headers.add('Access-Control-Allow-Origin', '*')
    
    # JSONify the data and return it
    return response

#################################################

# @app.route("/api/v1.0/data_breach_visualisation")
# def data_breach_visualisation():
#     return render_template("index.html")

#################################################

if __name__ == '__main__':
    app.run(debug=True)
