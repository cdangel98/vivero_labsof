@extends("template/layout")

@section('scripts')
    @parent
    <script defer src="{{asset('js/login.js')}}"></script>
@endsection

@section('title') Viveros @endsection

@section('content')
    <div id="app">
        <form v-if="!session" class="mt-5" @submit.prevent="login">
            <div class="row d-flex justify-content-center">
                <div class="card col-md-3">
                    <div class="card-body">
                        <h3 class="card-title mb-3">Login Vivero</h3>
                        <input class="form-control mb-3" v-model="user.name" placeholder="Cedula" type="text">
                        <input class="form-control mb-3" v-model="user.pass" placeholder="Nombre" type="text">
                        <button class="btn btn-primary mb-3">Login</button>
                    </div>
                </div>
            </div>
        </form>
        <div v-else>
            @include('template/nav')
            <div class="d-flex justify-content-center">
                <h1 class="mt-5">Inicio</h1>
            </div>
        </div>
    </div>
@endsection
