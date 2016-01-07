(function () {
	"use strict";

	angular.module('app.controllers').controller('LoginCtrl', ["$scope", "$http", function () {
		var vm = $scope.vm = {
			htmlSource        : "",
			showErrorType     : 1,
			showDynamicElement: true
		};

		vm.saveEntity = function (form) {
			//do somethings for bz
			alert("Save Successfully!!!");
		};

		//每个表单的配置，如果不设置，默认和全局配置相同
		vm.validateOptions = {
			blurTrig: true
		};

		vm.changeShowType = function () {
			if (vm.showErrorType == 2) {
				vm.validateOptions.showError = false;
				vm.validateOptions.removeError = false;
			} else {
				vm.validateOptions.showError = true;
				vm.validateOptions.removeError = true;
			}
		};

		vm.types = [
			{
				value: 1,
				text : "选择框"
			},
			{
				value: 2,
				text : "输入框"
			}
		];

		$http.get("index.js").success(function (result) {
			vm.jsSource = result;
		});
		$http.get("validate.form.html").success(function (result) {
			vm.htmlSource = result;
		});
		$http.get("validate.form.html").success(function (result) {
			vm.htmlSource = result;
		});

		$http.get("css/style.less").success(function (result) {
			vm.lessSource = result;
		});

	}]);

})();
