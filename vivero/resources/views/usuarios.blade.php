@extends("template/layout")

@section('scripts')
    @parent
    <script defer src="{{asset('js/usuarios.js')}}"></script>
@endsection

@section('content')
    <div id="app">
        <form class="mb-3" @submit.prevent="saveUser">
            <div class="btn-group input-group">
                <input class="form-control" v-model="newUser.document" placeholder="Cedula" type="text">
                <input class="form-control" v-model="newUser.name" placeholder="Nombre" type="text">
                <select class="form-control" v-model="newUser.rol">
                    <option value="" selected hidden>Seleccionar...</option>
                    <option value="productor">productor</option>
                    <option value="administrador">administrador</option>
                </select>
                <button class="btn btn-primary">Crear</button>
            </div>
        </form>
    
        <table class="table table-hover table-bordered table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in listUsers" :key="index">
                    <td> ${ item.document } </td>
                    <td> ${ item.name } </td>
                    <td> ${ item.rol } </td>
                </tr>
                <tr v-if="listUsers.length == 0">
                    <td colspan="3">Sin registros</td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection
