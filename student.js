
  class Student{

    constructor({name = '', email = '', grades = {}}) {
    this.name = name;
    this.email = email;
    this.grades = grades;
    }

  getCorreo(){
    console.log("El correo de " + this.name + " es: " + this.email);
  }

  getName(){
    console.log("Nombre: " + this.name);
  }

  getModuleGrade(module){ //calificacion max de una materia
    return Math.max(...this.grades[module]);
  }

  getMateriaMax(module){
    console.log("La maxima es: " + this.getModuleGrade(module));
  }

  getFinalGrade(){ //promedio de todas las materias juntas
    var size = 0;
    var avg = 0;
    for(const module in this.grades){
      avg += this.getModuleGrade(module);
      size ++;
    }
    /*
    console.log(size);
    console.log(avg);
    */
    console.log("Tu calificacion final es: " + (avg/size));
    return avg/size;
  }

  //agrega conjunto de materias
  setGrades(grades){
    this.grades = grades;
  }

  //agrega materias vacias
  setMateria(materia){
    this.grades[materia] = [null];
  }

  setMateriaConCalificaciones(materia,valor1,valor2){
    this.grades[materia] = [valor1,valor2];
  }
  /*
  addModuleGrade(module, grade){
    this.grade[module].shift = grade;
  }
  */

  //metodo para agregar calificacion al final de una materia
  setCalificacionAlFinal(materia,valor){
    // condition ? expr1 : expr2
    try{
    this.grades[materia][0] != null ? this.grades[materia].push(valor) : this.grades[materia][0] = valor;
    }
    catch(err){
      console.log("No se encontro la materia");
    }
  }

  setCalificacionAlPrincipio(materia,valor){
    // condition ? expr1 : expr2
    try{
    this.grades[materia][0] != null ? this.grades[materia].unshift(valor) : this.grades[materia][0] = valor;
    }
    catch(err){
      console.log("No se encontro la materia");
    }

  }

}

var michelle = new Student({
  name: 'michellename',
  email: 'michemail@gmail.com'

});

michelle.setGrades({
  web: [89,100,72],
  math: [45,90]
});

console.log("jeje");
