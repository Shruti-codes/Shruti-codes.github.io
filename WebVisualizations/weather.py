import pandas as pd
cities = pd.read_csv("cities.csv")

cities.to_html("cities.html")