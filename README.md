How this site works: Week 1
When the site is deployed on github pages, the file layout is very important. The index.html must be located within the root folder, as this is the first thing that is read when deploying. 
You could automatically redirect from this index.html to another page as soon as it loads, but it must both exist and be located within the root folder. 
The deployment also does not keep the exact same file structure as what is found in your github folder, and so if you reference things absolutely (Especially if it's in your own file system), you will end up with many broken file paths.
