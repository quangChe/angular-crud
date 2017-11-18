const app = angular.module('crudApp', []);


app.controller('appCtrl', ['$scope', ($scope) => {
  $scope.currentView = 'listView';
  $scope.editIndex = '';
  $scope.deleteIndex = '';
  $scope.friends = data;

  $scope.changeView = (val) => {
    $scope.currentView = val;
  };

  $scope.addFriend = (person) => {
    if (person) {
      let newPerson = {
        name: person.name.value,
        address: person.address.value,
        age: Number(person.age.value),
        occupation: person.occupation.value,
        image: person.image.value
      };
      $scope.friends.push(newPerson);
      $scope.changeView('listView');
    }
    else {
      alert("Form incomplete! Please fill out all relevant information before submitting.")
    }

  };

  $scope.editFriend = (index) => {
    $scope.edit = $scope.friends[index];
    $scope.editIndex = index;
    $scope.changeView('editView');
  }

  $scope.submitEdit = (person) => {
    if (person) {
      let editPerson = {
        name: person.name.value,
        address: person.address.value,
        age: Number(person.age.value),
        occupation: person.occupation.value,
        image: person.image.value
      };
      $scope.friends[$scope.editIndex] = editPerson;
      $scope.changeView('listView');
    }
    else {
      alert("Form incomplete! Please fill out all relevant information before submitting.")
    }
  };

  $scope.deleteFriend = (index) => {
    $scope.delete = $scope.friends[index];
    $scope.deleteIndex = index;
    $scope.changeView('deleteView');
  };

  $scope.submitDelete = () => {
    let index = $scope.deleteIndex;
    $scope.friends.splice(index, 1);
    $scope.changeView('listView');
  };

}]);
