<!-- resources/views/users/index.blade.php -->

@extends('layouts.app')

@section('content')
    <div id="app"></div> <!-- Ce div est utilisé pour monter l'application React -->

    <script src="{{ mix('js/app.jsx') }}"></script> <!-- Charger le fichier JS compilé -->
@endsection