# MongoDB version 6.0.5
## Setup

**1. Install MongoDB Community version**

`visit:` https://www.mongodb.com/try/download/community

`--> Download version 6.0.5 | windows | msi`

<a href="#"><img width="80%" height="auto" src="Images/1download-mongodb.png" height="100px"/></a>

`--> Install package (Complete Installation)`

<a href="#"><img width="100%" height="auto" src="Images/2complete-install.png" height="100px"/></a>

`--> Install as a Service`

<a href="#"><img width="100%" height="auto" src="Images/3run-as-service.png" height="100px"/></a>

`--> Check "Install MongoDB compass" during setup`

<a href="#"><img width="100%" height="auto" src="Images/4compass-install.png" height="100px"/></a>
`-------------------- After setup is Done ---------------------`

`--> Go to mongoDB installed files & copy bin location`

<a href="#"><img width="100%" height="auto" src="Images/5bin-location.png" height="100px"/></a>

`Search "enviroment variables" in windows`

<a href="#"><img width="80%" height="auto" src="Images/6enviroment-var.png" height="100px"/></a>

`Select "path" in "User variable for xxx" and press edit`

<a href="#"><img width="80%" height="auto" src="Images/7user-path.png" height="100px"/></a>

`click "new" and paste the copied path of bin` 

<a href="#"><img width="80%" height="auto" src="Images/8add-in-path.png" height="100px"/></a>

`press ok ok ok for save and exit`

## Use

**1. MongoDB version check** `> mongod -version`
**2. Login to mongosh terminal** `> mongosh`
**3. Check databases** `> show dbs || show databases`