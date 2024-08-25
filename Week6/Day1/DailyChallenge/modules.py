import requests
import time

url_list = ["https://www.google.com", "https://www.imdb.com", "https://www.ynet.co.il"]

for url in url_list:
    start_time = time.time()
    response = requests.get(url)
    end_time = time.time()
    load_time = end_time - start_time
    print(f"Page {url} loaded in {load_time:.2f} seconds")