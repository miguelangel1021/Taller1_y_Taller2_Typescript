import { Course } from './course.js';
import { student } from './dataCourses.js';
import { Student } from './student.js';

let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const btnfilterByRange: HTMLElement = document.getElementById("button-filterByRange")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box")!;
const inputSearchBoxRangeIn: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-in")!;
const inputSearchBoxRangeFin: HTMLInputElement = <HTMLInputElement> document.getElementById("search-box-fin")!;
const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;
const name: HTMLElement = document.getElementById("name")!;
const codigo: HTMLElement = document.getElementById("codigo")!;
const cedula: HTMLElement = document.getElementById("cedula")!;
const direccion: HTMLElement = document.getElementById("direccion")!;
const edad: HTMLElement = document.getElementById("edad")!;
const telefono: HTMLElement = document.getElementById("telefono")!;

btnfilterByName.onclick = () => applyFilterByName();
btnfilterByRange.onclick = () => applyFilterByRange(student.cursos);
renderCoursesInTable(student.cursos);

totalCreditElm.innerHTML = `${getTotalCredits(student.cursos)}`
name.innerHTML = `${student.name}`
codigo.innerHTML = `${student.codigo}`
cedula.innerHTML = `${student.cedula}`
direccion.innerHTML = `${student.direccion}`
edad.innerHTML = `${student.edad}`
telefono.innerHTML = `${student.telefono}`

function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}
 

 

function applyFilterByName() { 
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, student.cursos);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? student.cursos : courses.filter( c => 
    c.name.match(nameKey));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}



function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);
     
    }
  }
}

function applyFilterByRange(courses: Course[]) {
    let range1 = inputSearchBoxRangeIn.value;
    let range2 = inputSearchBoxRangeFin.value;
    range1 = (range1 == null) ? '' : range1;
    range2 = (range2 == null) ? '' : range2;
    let range1num : number = parseInt(range1);
    let range2num : number = parseInt(range2);
    clearCoursesInTable()
    let coursesFiltered: Course[] = [];
    courses.forEach((course) => {
        if(range1num  <= course.credits && range2num >= course.credits){
            coursesFiltered.push(course)
         }
    });
    renderCoursesInTable(coursesFiltered);

}
