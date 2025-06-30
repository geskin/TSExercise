// Part 1
// Write the Movie type alias to make the following two variables properly typed
// 
// 1. Make sure that "originalTitle" key/value is optional 
// and 
// 2. Make sure that the "title" key/value is readonly
// The keys should be as following:
// <title:string> <originalTitle:string> <director:string> <releaseYear:number> <boxOffice:object>
// Within the NESTED <Movie.boxOffice> object the keys should be the following:
// <budget:number> <grossUS:number> <grossWorldwide:number>

interface Movie {

};

const dune: Movie = {
  // instantiate and declare this object here with any values you'd like //
};

const cats: Movie = {
   // instantiate and declare this object here with any values you'd like //
};

// Part 2

// Write a function called getProfit that accepts a single Movie object
// It should return the movie's worldwide gross minus its budget

// For example...
// getProfit(cats) => -21166652 // yes it was not successful...

// HINTS: //
// What type should the function's parameters be? //
// What type should the function return ? //
function getProfit() {
  
}

/**
 * fill in some mock data in the <dune> and <cats> object above or feel free to name them whatever youd like
 * then simply test the output with console functions 
 * console.log(getProfit(dune));
 * console.log(getProfit(cats));
*/