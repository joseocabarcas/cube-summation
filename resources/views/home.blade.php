@extends('master')

@section('content')

<section id="app">
</section>

<script>
	var exist = false;
	@if(Session::has('matriz'))
		var exist = true;
	@endif
</script>
@endsection