/**
 * Created by Davis on 3/31/2015.
 */
$(document).ready(function() {
   function getRelatedKeywords () {
       var feed = 'http://www.google.com/trends/fetchComponent?hl=en-US&q=html5,jquery&geo=US&cid=RISING_QUERIES_0_0';
       var feed1 = 'http://hawttrends.appspot.com/api/terms/';
       //$.get(feed1, function (data) {
       //        alert('data = ' + data);
       //    }
       //);

       $.ajax({
           url: feed1,
           data: '',
           type: 'GET',
           crossDomain: true,
           dataType: 'json',
           success: function(data) { alert("Success " + data); },
           error: function() { alert('Failed!'); }
           //beforeSend: setHeader
       });

   }


  //getRelatedKeywords();



});