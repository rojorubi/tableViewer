// Router is responsible for driving the application. Usually
// this means populating the necessary data into models and
// collections, and then passing those to be displayed by
// appropriate views.
var Router = Backbone.Router.extend({
  routes: {
    '': 'index'  // At first we display the index route
  },

  initialize: function(options) {
    try{
      $.ajax({ //more faster
        async: true,
        data:  '',
        url:   countrows,
        cache: true,
        type:  'post',
        success:  function (totalrows) {
          console.log(totalrows['rows'][0]['count']);
          if(totalrows['rows'][0]['count']>I_RESULT_IN_PAGE){
            //$("#btn_prev").css("display", "block");
            $("#btn_next").css("display", "block");
          }
        },
        error: function(){
        }  
      }); 
    }catch(e){
      //alert("Error: "+e);
    }
  },

  index: function() {
    // Initialize a list of table
    // In this case we provide an array, but normally you'd
    // instantiate an empty list and call table.fetch()
    // to get the data from your backend 
    var array_data = [];
    try{
      $.ajax({ //more faster
        async: true,
        data:  '',
        url:   squery,
        cache: true,
        type:  'post',
        success:  function (data) {

            $("#error_div").css("display", "none");
            //console.log("numero de rows: "+data['rows'].length);
            //console.log(data['rows']);

            var table = new models.Table([]);
            
            $("#misth").empty();
            $.each(data.fields, function(valor) {
              //console.log("columna: "+ valor);
              $("#misth").append(jQuery("<th>"+valor+"</th>"));
            });

            var rows = [];
            $.each(data.rows, function(key, val) {
              //console.log("key:"+key+" val:"+val);
              //console.log(data['rows'][key]);
              rows.push(data['rows'][key]);
            });
            //console.log(rows);
            table.add(rows);//array of object rows with columns values

            // Pass the collection of table to the view
            var view = new views.Table({
              collection: table
            });

            // And render it
            view.render();

        },
        
        error: function(){
          $("#mitbody").empty();
          $("#misth").empty();
          $("#error_div").css("display", "block");
        }
        
      });
    }catch(e){
      //alert("Error: "+e);
    }
    //we need stop de history to restart again from load data button
    Backbone.history.stop();
  }
});

//jQuery(document).ready(function() {
  // Option to display a default table
  // When the document is ready we instantiate the router
  //var router = new Router();
  // And tell Backbone to start routing
  //Backbone.history.start();
//});
