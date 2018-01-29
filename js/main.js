
function getTeams() {

  $.getJSON( "json/teams.json", function( data ) {
    var length = data.teams.length;
    $.each( data.teams, function(i) {
      var teamNumber = data.teams[i].number;
      $("#element_"+teamNumber).addClass("team");

      var x = parseInt($("#element_"+teamNumber).attr("data-x"));
      var y = parseInt($("#element_"+teamNumber).attr("data-y"));

      if(x <= 540){
      var newElement = "<div class='detail left'><h1>"+data.teams[i].name+"</h1><hr/><h2>Description &amp; Mission</h2><p>"+data.teams[i].desc+"</p><hr/><h2>KPIs</h2><p>"+data.teams[i].kpis.join(', ')+"</p><hr/><h2>Lead</h2><p>"+data.teams[i].lead+"</p><hr/><h2>Members</h2><p>"+data.teams[i].members.join(', ')+"</p></div>";
      }
      if(x >= 540){
      var newElement = "<div class='detail right'><h1>"+data.teams[i].name+"</h1><hr/><h2>Description &amp; Mission</h2><p>"+data.teams[i].desc+"</p><hr/><h2>KPIs</h2><p>"+data.teams[i].kpis.join(', ')+"</p><hr/><h2>Lead</h2><p>"+data.teams[i].lead+"</p><hr/><h2>Members</h2><p>"+data.teams[i].members.join(', ')+"</p></div>";
      }


      $("#element_"+teamNumber).append(newElement);



    });
  });
}

$(document).ready(function(){

  $.getJSON( "json/elements.json", function( data ) {
    var length = data.elements.length;
    $.each( data.elements, function(i) {

      var elNumber = data.elements[i].number;
      var elSymbol = data.elements[i].symbol;
      var elName = data.elements[i].name;
      var elWeight = data.elements[i].atomic_mass;
      var left = (data.elements[i].xpos - 1) * 60;
      var top = (data.elements[i].ypos - 1) * 65;
      var newElement = "<div class='element' data-x="+left+" data-y="+top+" id='element_"+elNumber+"'><span class='number'>"+elNumber+"</span><span class='symbol'>"+elSymbol+"</span><span class='name'>"+elName+"</span><span class='weight'>"+elWeight+"</span></div>";

      $(".table").append(newElement);
      $("#element_"+elNumber).css("transform","translate("+left+"px,"+top+"px)").css("opacity",1);

      length--;
      if(length === 0) {
        getTeams();
      }
    });
  });
});
