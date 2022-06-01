@extends("template/layout")

@section('scripts')
    @parent
    <script defer src="{{asset('js/usuarios.js')}}"></script>
@endsection

@section('content')
    <div id="app">
        <form @submit.prevent="saveUser">
            <input v-model="newUser.document" placeholder="Cedula" type="text">
            <input v-model="newUser.name" placeholder="Nombre" type="text">
            <select v-model="newUser.rol">
                <option value="" selected hidden>Seleccionar...</option>
                <option value="productor">productor</option>
                <option value="administrador">administrador</option>
            </select>
            <button>Crear</button>
        </form>
    
        <table>
            <thead>
                <tr>
                    <th>Cedula</th>
                    <th>Nombre</th>
                    <th>Rol</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in listUsers" :key="index">
                    <th> ${ item.document } </th>
                    <th> ${ item.name } </th>
                    <th> ${ item.rol } </th>
                </tr>
            </tbody>
        </table>
    </div>
@endsection
