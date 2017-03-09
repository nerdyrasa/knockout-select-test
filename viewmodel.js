//  view model
var ViewModel = function (places) {
  var self = this;
  self.places = places;
  self.selectedCategory = ko.observable();
  self.categories = ["Food", "Attraction"];
  self.processClickOnListItem = function () {
    console.log("clicked list item");
    console.log("this is ", this);
    var place = this;
    populateInfoWindow(place.marker, largeInfoWindow, place);

  };
  self.filteredByCategory = ko.computed(function () {

    if (largeInfoWindow) {
      largeInfoWindow.setMarker = null;
      largeInfoWindow.marker = null;
    }

    var results = this.places;
    var filterCategory = this.selectedCategory();

    if (filterCategory) {

      results = ko.utils.arrayFilter(results, function (place) {
        //console.log("category = , filter category = " + place.category  + " " + filterCategory);
        console.dir(place);

        return place.category === filterCategory;
      });
    }

    if (results) {
      filterMap(this.places, results);
    }
    return results;

  }, self);

  console.log("Places are ", self.places);

}