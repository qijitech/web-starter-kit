<!DOCTYPE html>
<html ng-app="app">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- Page title set in pageTitle directive -->
	<title page-title></title>
	<link href="{!! asset('css/vendor.css') !!}" rel="stylesheet">
	<link href="{!! asset('css/app.css') !!}" rel="stylesheet">
</head>

<!-- ControllerAs syntax -->
<!-- Main controller with serveral data used in Inspinia theme on diferent view -->
<body class="@{{$state.current.data.specialClass}}" landing-scrollspy id="page-top">

<!-- Main view  -->
<div ui-view></div>

<script src="{!! asset('js/vendor.js') !!}"></script>
<script src="{!! asset('js/app.js') !!}"></script>

</body>
</html>