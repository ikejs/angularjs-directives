app.filter('capitalizeEachWord', () => (inputStr) => {
  const words = inputStr.split(" ");

  return words.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
});