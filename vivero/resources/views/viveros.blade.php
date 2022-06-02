@extends("template/layout")

@section('scripts')
    @parent
    <script defer src="{{asset('js/viveros.js')}}"></script>
@endsection

@section('title') Viveros @endsection

@section('content')
    <div id="app">
        <form class="mb-3" @submit.prevent="saveVivero">
            <div class="btn-group input-group">
                <input class="form-control" v-model="newVivero.nombre" placeholder="Cedula" type="text">
                <input class="form-control" v-model="newVivero.departamento" placeholder="Nombre" type="text">
                <input class="form-control" v-model="newVivero.municipio" placeholder="Nombre" type="text">
                <select class="form-control" v-model="newVivero.productor">
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
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Municipio</th>
                    <th>Productor</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in listViveros" :key="index">
                    <td> ${ item.nombre } </td>
                    <td> ${ item.departamento } </td>
                    <td> ${ item.municipio } </td>
                    <td> ${ item.productor } </td>
                </tr>
                <tr v-if="listViveros.length == 0">
                    <td colspan="3">Sin registros</td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection
