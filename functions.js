var squery;
var countrows;
var page=1;//init page
var g_user="";
var g_table="";
function checkData(){
  //get values of user and table name to load de values from carto sql api
  //var viewform = new views.MiForm({ el: $('#button_load') });
  var user = $('input[id=user_input]').val();
  var table = $('input[id=tablename_input]').val();
  page=1;
  g_user=user; g_table=table;

  if (typeof user !== 'string' || user=="") {
      $('input[id=user_input]').attr("placeholder", "Write an user!!");
      $('input[id=user_input]').focus();
  }else if (typeof table !== 'string' || table=="") {
      $('input[id=tablename_input]').attr("placeholder", "Write a table name!!");
      $('input[id=tablename_input]').focus();
  }else{
      squery = S_SPROTOTOL+user+S_QUERY_cartodb+table+" limit "+I_RESULT_IN_PAGE;
      countrows = S_SPROTOTOL+user+S_QUERY_cartodb_count+table;
      //console.log("user: "+user+" table: "+table);
      console.log("query: "+squery);
     
      var router = new Router();
      //Tell Backbone to start routing
      Backbone.history.start();
  }
}

function nextPage(){
  page+=1;
  $("#btn_prev").css("display", "block");
  var varOffset = page*I_RESULT_IN_PAGE;
  var varOffsetPageAnterior = (page-1)*I_RESULT_IN_PAGE;
  //if(varOffset<=countrows){
    console.log("nextPage="+page);
    squery = S_SPROTOTOL+g_user+S_QUERY_cartodb+g_table+" limit "+I_RESULT_IN_PAGE+"offset "+varOffset;
    $("#page_info").css("display", "block");
    $("#page_info").text("Page "+page+" ("+varOffsetPageAnterior+" - "+varOffset+")");
    Backbone.history.start();
  //}
}

function prevPage(){
  page-=1;
  console.log("prevPage="+page);
  if(page>=1){
    var varOffset = page*I_RESULT_IN_PAGE;
    var varOffsetPageAnterior = (page-1)*I_RESULT_IN_PAGE;
    squery = S_SPROTOTOL+g_user+S_QUERY_cartodb+g_table+" limit "+I_RESULT_IN_PAGE+"offset "+varOffset;
    $("#page_info").css("display", "block");
    $("#page_info").text("Page "+page+" ("+varOffsetPageAnterior+" - "+varOffset+")");
    Backbone.history.start();
    if(page==1){
      $("#btn_prev").css("display", "none");
    }
  }
}



