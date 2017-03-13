function rot13(data_id) {
  var node   = document.getElementById(data_id);
  var str    = node.value; 
  var input  = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var output = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  var result = "";

  for ( pos in str ) {	  
     if ( input.indexOf( str[pos] ) !== -1 ) {
        result += output[ input.indexOf( str[pos] ) ];
    } else {
		result += str[pos];
    }
  }
  node.value = result;
}