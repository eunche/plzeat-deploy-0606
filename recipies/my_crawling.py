from bs4 import BeautifulSoup
from urllib.request import urlopen
import urllib.parse


def gogogo(recipe_name):
    change = urllib.parse.quote_plus(recipe_name)
    response = urlopen(
        f'https://www.youtube.com/results?search_query={change}+%EB%A0%88%EC%8B%9C%ED%94%BC')
    soup = BeautifulSoup(response, 'html.parser')
    links = []
    result_links = []
    for anchor in soup.find_all('a'):
        if 'watch?v' in anchor.get('href', '/'):
            links.append(anchor.get('href', '/'))
        if len(links) == 6:
            break

    for link in links:
        result_links.append(link.split('=')[1])
    count = 0
    real_result = []
    for x in result_links:
        if (count == 0 or count == 2 or count == 4):
            real_result.append(x)
        count = count + 1
        if count == 5:
            break
    print(real_result)
    return real_result