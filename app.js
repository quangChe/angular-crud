let app = angular.module('crudApp', []);

app.controller('appCtrl', ['$scope', ($scope) => {
  $scope.currentView = 'listView';
  $scope.friends = [
    {
      name: "Quang Che",
      address: "El Monte, CA",
      age: 25,
      occupation: "Junior Web Developer",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Brad_Pitt_Fury_2014.jpg"
    },
    {
      name: "Thor",
      address: "Castle, Asgard",
      age: 5033,
      occupation: "God of Thunder/Guardian of Midgard",
      image: "https://heroichollywood.b-cdn.net/wp-content/uploads/2017/08/Thor_Ragnarok_Chris_Hemsworth.jpg?x42694"
    },
    {
      name: "Jennifer Lawrence",
      address: "Hollywood, CA",
      age: 27,
      occupation: "Bubbly Actress",
      image: "https://media.vanityfair.com/photos/5432e75e74ed87dd423a383a/master/h_590,c_limit/jennifer-lawrence-vanity-fair-11-november-cover-ss03.jpg"
    },
    {
      name: "Michael Scott",
      address: "1725 Slough Avenue in Scranton, PA",
      age: 53,
      occupation: "Manager, Leader, Captain, Friend",
      image: "https://vignette.wikia.nocookie.net/theoffice/images/0/02/Michael_Scott.jpg/revision/latest/scale-to-width-down/350?cb=20170701090332"
    }
];
  $scope.editIndex = '';
  $scope.deleteIndex = '';

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
