describe('select pizza controller',function(){
  var scope;
  var ctrl;

  beforeEach(module("pizzastore"));
  beforeEach(inject(function($rootScope,$controller){
    scope=$rootScope.$new();
    ctrl=$controller('selectpizzacontroller',{
      $scope:scope
    });
  }));

  describe('$scope.placeorder',function(){
    it('lets the user place an order when they select a pizza type',function(){
      scope.pizzatype=scope.choices[0];
      scope.placeorder();
      expect(scope.orderinprogress).toBe(true);
    });
    it('stops a user from placing an order when they have not selected a pizza',function(){
      scope.pizzatype='';
      scope.placeorder();
      expect(scope.orderinprogress).toBe(false);
    })

  })
});
