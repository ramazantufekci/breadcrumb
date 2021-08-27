$(document).ready(function(){
      var urlList = window.location.pathname.split("/");
      $(".breadcrumb li").each(function(index,element){
        if(urlList[index].length==0)
        {
          $(this).children().attr("href","/");
        }else if((urlList.length-1)==index){
          $(this).children().attr("href","#");
        }else{
          var cUrl = "";
          for(let numb=1;numb<=index;numb++){
              cUrl +="/"+urlList[numb];
          }
          
          $(this).children().attr("href",cUrl);
        }
        
      });
    });
