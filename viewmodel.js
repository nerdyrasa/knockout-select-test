//  view model
var ViewModel = function (places) {
  var self = this;

  self.places = places;
  self.selectedCategory = ko.observable();
  self.categories = ["Food", "Attraction"];
  self.currentProfit = ko.observable(0);

  self.processClickOnListItem = function() {
    console.log("clicked list item");
    console.log("this is ", this);
    var place = this;
    populateInfoWindow(place.marker, largeInfoWindow, place);

  };

  // Evalutes to a positive value, so initially we apply the "profitPositive" class
  self.profitStatus = ko.pureComputed(function() {
    return this.currentProfit() < 0 ? "profitWarning" : "profitPositive";
  }, self);

  // Causes the "profitPositive" class to be removed and "profitWarning" class to be added
  self.currentProfit(-50);

  self.filteredByCategory = ko.computed(function() {


    if (largeInfoWindow){
      largeInfoWindow.setMarker = null;
      largeInfoWindow.marker = null;
    }

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

    if (results) {
      filterMap(this.places, results);
    }
    return results;

  }, self);




}