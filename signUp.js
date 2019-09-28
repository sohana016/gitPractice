// JavaScript Document
var app = angular.module("myApp",[]);
app.controller ("myCtrl",function($scope){
	$scope.newUser ={};
	
	$scope.users =[
		{fullname:"Tawhida",email:"tawhida016@gmail.com",dob:"1996/08/14",gender:"femail", sell:"Morning",phone:"016852032314",country:"bangladesh"},
		{fullname:"Tawhida",email:"tawhida016@gmail.com",dob:"1996/08/14",gender:"femail", sell:"Morning",phone:"016852032314",country:"bangladesh"},
		{fullname:"Tawhida",email:"tawhida016@gmail.com",dob:"1996/08/14",gender:"femail", sell:"Morning",phone:"016852032314",country:"bangladesh"},
		{fullname:"Tawhida",email:"tawhida016@gmail.com",dob:"1996/08/14",gender:"femail", sell:"Morning",phone:"016852032314",country:"bangladesh"},
	];
	
	$scope.saveUser =function(){
		$scope.users.push($scope.newUser);
		$scope.newUser ={};
		
		};
	
	
	});
	
	
	