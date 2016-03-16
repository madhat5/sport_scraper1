# sport_scraper1

---
---
Timeline goals: (start by)

- January --x--
    - API build
    	- scraper build

- February/March --ox--
	- API build
    	- scraper build
    - App build
    	- wireframe/story
    	- user auth (passport)
    	- ideal team algorithm build
    		- hockey and basketball
	    - CRUD
	        - user teams list/sport
	        - user profile?
    - user test?

- April --o--
    - MVP
    - server launch
        - heroku to start? or aws free?
    - user test?

- May/June --o--
    - user test?
    - design
	- setup dfs API for sale?


---
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

---
---
Bugs

- scraper --ox--
	- store all data, not just last item found

---
---
REFERENCE:

- jQuery Traversing:
	- http://www.w3schools.com/jquery/jquery_ref_traversing.asp
	- https://api.jquery.com/category/traversing/
	- https://api.jquery.com/multiple-selector/

- jSON:
	- http://www.hunlock.com/blogs/Mastering_JSON_%28_JavaScript_Object_Notation_%29

- scraping
	- https://github.com/madhat5/nhl-api/blob/master/lib/nhl.js
    - http://dillonbuchanan.com/programming/html-scraping-in-nodejs-with-cheerio/
    - https://scotch.io/tutorials/scraping-the-web-with-node-js
    - http://stackoverflow.com/questions/33815807/node-js-request-for-loop-runs-twice
	- http://stackoverflow.com/questions/28243434/add-cheerio-based-search-loop-to-node-simplecrawler
