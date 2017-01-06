# tableViewer
Backbone.js Collection View example with CartoDB Tables


Decisions taken during the development:

- We use backbone to process all information in user browser.
- We have a model of data with information in attributes, and then render it with backbone views. The process is very fast.
- When you click on "load data" button only you get 25 registers of the entire table, and then with button "next" or "previous" you get in back 25 register more (with different offset calculated).
The reason to do this is because the number of rows in carto sql tables are very high and is not neccesary read then in only one calling.
- We use $.ajax post to call backend and read json information. 
- We use global variables to control the pagination and change the value of squery. (this is improvable).
- We use bootstrap like css.
- We have a small controlling of data to check empty inputs values in "name user" and "table name", or we have a small message with error request. ("An error has occurred, try again!")


Limitations,
- We dont have an in-depth control of errors (including cross scripting). It must neccesary.

