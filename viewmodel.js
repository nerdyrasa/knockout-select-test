//  view model
var ViewModel = function (places) {
  var self = this;

  self.places = places;
  self.selectedCategory = ko.observable();
  self.categories = ["Food", "Attraction"];

  self.processClickOnListItem = function() {
    console.log("clicked list item");
  };

  self.filteredByCategory = ko.computed(function() {

    var results = this.places;

    var  filterCategory = this.selectedCategory();


   //console.log ("results = ", results);
   // console.log("filterCategory = ", filterCategory);


    if (filterCategory) {

      results = ko.utils.arrayFilter(results, function (place) {
        //console.log("category = , filter category = " + place.category  + " " + filterCategory);
        console.dir(place);

        return place.category === filterCategory;
      });
    }

// if results are empty, ju


    return results;

  }, self);




}