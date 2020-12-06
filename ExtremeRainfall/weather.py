import pandas as pd
cities = pd.read_csv("res.csv")

cities.to_html("comparison.html")