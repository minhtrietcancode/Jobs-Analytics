File structure 
- index.html
- style.css (for index.html)
- script.js (main js file for all)
- sub field.html (for the appeared screen when clicking any of the 8 fields button)
- content.html (for the appeared screen when clicking any of each 5 majors after clicking any of the 8 fields) (so the process is index.html --> sub field.html --> content.html)
- content (folder)
  + content-index.js (to link the content for 40 majors with cript.js in order to auto fill the content into content.html when clicking)
  + 8 folders for 8 fields, each folders contain 5 .js file, each of those .js file contains the content for that major (so the process is: major content's .js file --> content-index.js--> script.js) 
