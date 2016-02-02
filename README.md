# sport_scraper1

Deployment flow:

- Create development branch
    - from master
        - git checkout -b development       
- Pull @ beginning of day
    - from development
        - git pull origin master
        - (npm install) if needed
- Create 1 branch per file feature
    - from development
        - git checkout -b file_feature
- By end of day 
    - from branch
        - git add .
        - git commit -m "update details"
        - git push origin file_feature
        - (gitHub
            - Pull request)
        - OR
        - (git push origin development)
        - git checkout development
    - from development
    - (gitHub
        - Pull request)
    - OR
    - (git push origin master)



-- 
REFERENCE:

- jQuery Traversing:
	- http://www.w3schools.com/jquery/jquery_ref_traversing.asp
	- https://api.jquery.com/category/traversing/
	- https://api.jquery.com/multiple-selector/

- jSON:
	- http://www.hunlock.com/blogs/Mastering_JSON_%28_JavaScript_Object_Notation_%29

- scraping
	- http://stackoverflow.com/questions/33815807/node-js-request-for-loop-runs-twice
	- http://stackoverflow.com/questions/28243434/add-cheerio-based-search-loop-to-node-simplecrawler
