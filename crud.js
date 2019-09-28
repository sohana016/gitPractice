// JavaScript Document
var app = angular.module("myApp", []);
app.controller("myCtrl",function($scope){
		console.log("djfhdjfh");
		
		$scope.newUser ={};
		$scope.clickedUser ={};
		$scope.messege = "";
		
		$scope.users = [
			{username: "tawhida",fullname:"tawhida Shorif", email:"tawhida016@"},
			{username: "tawhida",fullname:"tawhida Shorif", email:"tawhida016@"},
			{username: "tawhida",fullname:"tawhida Shorif", email:"tawhida016@"}	
		
		];
		$scope.saveUser = function(){
				console.log($scope.newUser);
				
			$scope.users.push($scope.newUser);	
			$scope.newUser ={};
			$scope.messege = "New User Added Successfull";
			
			};
			$scope.selectUser = function(user){
				console.log(user);
				$scope.clickedUser = user;
				};
			$scope.updateUser = function(){
				$scope.messege = "User Updated Successfull";
				
				};
				
				$scope.deleteUser = function(){
					$scope.users.splice($scope.users.indexOf($scope.clickedUser),1);
					$scope.messege = "User Deleted Successfull";
					};	
			$scope.clearMessege = function(){
					$scope.messege = "";
				};		
	});