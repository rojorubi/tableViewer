
/******************************
* VALUES TO PAINT CARTO TABLES
*******************************/

//EXAMPLE 1: sQuery='https://rambo-test.cartodb.com:443/api/v2/sql?q=select * from public.mnmappluto order by cartodb_id limit 4;';
//EXAMPLE 2: sQuery='https://documentation.cartodb.com/api/v1/sql?q=select * from buildings_1854 limit 4';
var S_QUERY_cartodb =".cartodb.com/api/v1/sql?q=select * from ";
var S_QUERY_cartodb_count =".cartodb.com/api/v1/sql?q=select count(*) from ";
var S_SPROTOTOL ="https://";
var S_TEXT_TYPE_GEOJSON ="GeoJSON";

var S_FIELD_GEOM ="the_geom";
var S_FIELD_GEOM_MERCATOR ="the_geom_mercator";

var I_RESULT_IN_PAGE =25;//num results in a page.


//We can describe de error messages here and develop a system of errors more complex
