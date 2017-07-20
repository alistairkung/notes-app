var addAttributes = function(name, args) {
  for (var property in args) {
    console.log(name);
    eval(name + "." + property + " = " + "'" + args[property] + "'")  
  }  
}
