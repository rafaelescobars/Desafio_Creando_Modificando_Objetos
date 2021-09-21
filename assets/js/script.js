function Paciente(nombre, edad, rut, diagnostico) {
  var _nombre = nombre;
  var _edad = edad;
  var _rut = rut;
  var _diagnostico = diagnostico;

  Object.defineProperty(this, '_getNombre', {
    get: function () {
      return _nombre
    }
  })
  Object.defineProperty(this, '_getEdad', {
    get: function () {
      return _edad
    }
  })
  Object.defineProperty(this, '_getRut', {
    get: function () {
      return _rut
    }
  })
  Object.defineProperty(this, '_getDiagnostico', {
    get: function () {
      return _diagnostico
    }
  })

  Object.defineProperty(this, '_setNombre', {
    set: function (nombre) {
      _nombre = nombre
    }
  })
  Object.defineProperty(this, '_setEdad', {
    set: function (edad) {
      _edad = edad
    }
  })
  Object.defineProperty(this, '_setRut', {
    set: function (rut) {
      _rut = rut
    }
  })
  Object.defineProperty(this, '_setDiagnostico', {
    set: function (diagnostico) {
      _diagnostico = diagnostico
    }
  })
}

Paciente.prototype.getNombre = function () {
  return this._getNombre
}
Paciente.prototype.getEdad = function () {
  return this._getEdad
}
Paciente.prototype.getRut = function () {
  return this._getRut
}
Paciente.prototype.getDiagnostico = function () {
  return this._getDiagnostico
}

Paciente.prototype.setNombre = function (nombre) {
  this._setNombre = nombre
}
Paciente.prototype.setEdad = function (edad) {
  this._setEdad = edad
}
Paciente.prototype.setRut = function (rut) {
  this._setRut = rut
}
Paciente.prototype.setDiagnostico = function (diagnostico) {
  this._setDiagnostico = diagnostico
}

function Consultorio(nombre, paciente) {
  this.nombre = nombre;
  this.pacientes = paciente || [];
}

Consultorio.prototype.agregarPaciente = function (paciente) {
  this.pacientes.push(paciente)
}

Consultorio.prototype.mostrarPacientes = function () {
  for (i = 0; i < this.pacientes['length']; i++) {
    console.log(this.pacientes[i].getNombre());
    console.log(this.pacientes[i].getEdad());
    console.log(this.pacientes[i].getRut());
    console.log(this.pacientes[i].getDiagnostico());
  }
}

Consultorio.prototype.buscarPaciente = function (nombrePaciente) {
  for (i = 0; i < this.pacientes['length']; i++) {
    if (this.pacientes[i]._getNombre == nombrePaciente) {
      console.log(this.pacientes[i].getNombre());
      console.log(this.pacientes[i].getEdad());
      console.log(this.pacientes[i].getRut());
      console.log(this.pacientes[i].getDiagnostico());
      break
    }
  }
}

let paciente1 = new Paciente('Dwight Schrute', 33, '18506320-9', 'Dedos de salchicha');
let paciente2 = new Paciente('Jim Halpert', 30, '19512603-6', 'Ébola');
let consultorio1 = new Consultorio('Dunder Mifflin', [paciente1]);
consultorio1.agregarPaciente(paciente2);