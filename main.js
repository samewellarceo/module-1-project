//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich health tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

let newsSearchResults = newsList;
let re = /[^a-z0-9\s]/g;

export function search(test_input) {
  // inputValue is the variable that contains the search string
  const inputValue = document.getElementById("search-input").value;
  // const inputValue = test_input; // Use this for automated testing.

  //Write your code here for the search function
  newsSearchResults = [];
  let lowRegNewsList = new Array();
  let lowRegInputValue = inputValue.toLowerCase().replace(re, "").split(' ');
  let searchFrequencyAndIndex = new Array(); // Stores the index and the number of times the keyword appeared in the title.
  
  newsList.forEach(title => { // Set titles to lowercase and remove regular expressions.
    title = title.toLowerCase().replace(re, "").split(' ');
    title = title.filter(value => value.length > 0); // Remove empty strings.
    lowRegNewsList.push(title);
  });
  
  lowRegNewsList.forEach((title, index) => { 
    title = title.filter(title_word => { // Remove the title with no words that matched the keyword.
      for(let input_word of lowRegInputValue) {
        if(input_word === title_word) { return true; }
      }
    });

    if(title.length > 0) // Push the index and the number of times the keyword appeared in the title.
      searchFrequencyAndIndex.push([title.length, index]); 
  });

  // Sort the result based on the frequency. Highest frequency will be on top.
  searchFrequencyAndIndex.sort((a,b) => b[0] - a[0]); 

  searchFrequencyAndIndex.forEach(value => { // Push the final result.
    newsSearchResults.push(newsList[value[1]]);
  });
  
  if (inputValue.length > 0) {
    return newsSearchResults;
  } else {
    newsSearchResults = newsList;
    return newsList;
  }
}

export function sort(type) {
  if (type == "ascending") {
    //Write your code here for sorting (ascending)    
    newsSearchResults.sort(function(a, b){
      if (a.toLowerCase().replace(re, "") < b.toLowerCase().replace(re, "")) {return -1;}
      if (a.toLowerCase().replace(re, "") > b.toLowerCase().replace(re, "")) {return 1;}
    });
  } else {
    //Write your code here for sorting (descending)
    newsSearchResults.sort(function(a, b){
      if (b.toLowerCase().replace(re, "") < a.toLowerCase().replace(re, "")) {return -1;}
      if (b.toLowerCase().replace(re, "") > a.toLowerCase().replace(re, "")) {return 1;}
    });
  }
  
  return newsSearchResults;
}