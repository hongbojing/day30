(function () {
  var app = angular.module("gemStore", []);
  var test={name:'test-name'};
  app.controller("StoreController",function(){
    this.products=gems;
  });
  app.controller('TabController',function(){
    this.tab=1;
    this.setTab=function(tab){
      this.tab=tab;
    };

    this.isSet=function(tab){
      return this.tab===tab;
    };
  });
  app.controller("GalleryController",function(){

    this.current=0;


    this.setCurrent=function(curVal){
      if(curVal===null){
        this.current=0;
      }else{
        this.current=curVal;
      }
    };
  });
  //01-Create a new controller called ReviewController.
  //02-Set our review variable to an empty object when the ReviewController is created.
  //03-Create an empty function named addReview in your ReviewController.
  //04-We'll pass in the product we want to review to our addReview function. Edit your function declaration to accept a product parameter.
  //05-When addReview is called with a product, it should add the review from the controller to the passed-in product's reviews array. Implement this functionality in the addReview method.
  //06-Reset the review to an empty object after it's been added to product.reviews.
  app.controller('ReviewController',function(){//-01
    this.review={};//-02
    this.addReview=function(product){//-03-04
      this.review.createdOn=new Date();
      product.reviews.push(this.review);//-05
      this.review={};//-06

    };
  });
  //0001Create an Element Directive for our Description div
  //that includes the product-description.html.
  app.directive("productDescription",function(){
    return{
      restrict:'E',
      //product-description NOT product.description
      templateUrl:'product-description.html'
    };
  });


  //001-On review save, we're running the addReview function in our app.js JavaScript file. Before the review is pushed onto the array, add a new key to the review named createdOn and value Date.now().

  var gems = [{
    name: 'black-gem',
    description: "black-gemblack-gemblack-gemblack-gemblack-gemblack-gemblack-gemblack-gemblack-gemblack-gem.",
    shine: 81,
    price: 1120.50,
    rarity: 71,
    color: '#CCC',
    faces: 134,
    images: [
      "img/black-gem-main.jpg",
      "img/black-gem-sub-1.jpg",
      "img/black-gem-sub-2.jpg",
      "img/black-gem-sub-3.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "I love this black-gemblack-gemblack-gem!",
      author: "joe@exblack-gemample.org",
      createdOn: 1397490980837
    }, {
      stars: 12,
      body: "This black-gem sucks.",
      author: "tim@exblack-gemample.org",
      createdOn: 1397490980837
    }]
  }, {
    name: 'blue-gem',
    description: "blue-gem is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 19,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 122,
    images: [
      "img/blue-gem-main.jpg",
      "img/blue-gem-sub-1.jpg",
      "img/blue-gem-sub-2.jpg",
      "img/blue-gem-sub-3.jpg"
    ],
    reviews: [{
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
    }, {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@example.org",
      createdOn: 1397490980837
    }]
  }, {
    name: 'green-gem',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "img/green-gem-main.jpg",
      "img/green-gem-sub-1.jpg",
      "img/green-gem-sub-2.jpg",
      "img/green-gem-sub-3.jpg"
    ],
    reviews: [{
      stars: 1,
      body: "This gem is WAY too expensive for its rarity value.",
      author: "turtleguyy@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "BBW: High Shine != High Quality.",
      author: "LouisW407@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "Don't waste your rubles!",
      author: "nat@example.org",
      createdOn: 1397490980837
    }]
  },{
    name: 'purple-gem',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "img/pueple-gem-main.jpg",
      "img/purple-gem-sub-1.jpg",
      "img/purple-gem-sub-2.jpg",
      "img/purple-gem-sub-3.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@example.org",
      createdOn: 1397490980837
    }]
  },{
    name: 'red-gem',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "img/red-gem-main.jpg",
      "img/red-gem-sub-1.jpg",
      "img/red-gem-sub-2.jpg",
      "img/red-gem-sub-3.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@example.org",
      createdOn: 1397490980837
    }]
  },{
    name: 'yellow-gem',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "img/yellow-gem-main.jpg",
      "img/yellow-gem-sub-1.jpg",
      "img/yellow-gem-sub-2.jpg",
      "img/yellow-gem-sub-3.jpg"
    ],
    reviews: [{
      stars: 5,
      body: "I love this gem!",
      author: "joe@example.org",
      createdOn: 1397490980837
    }, {
      stars: 1,
      body: "This gem sucks.",
      author: "tim@example.org",
      createdOn: 1397490980837
    }]
  }

             ];

})();
