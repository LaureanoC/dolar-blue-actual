export function transformarDate(date) {

    const object = new Date(date)
    const day = object.getDate();
    const month = object.getMonth() + 1;
    const year = object.getFullYear();
    const hours = object.getHours();
    const minutes = object.getMinutes();


    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} a las ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`


}


export function fechaActual() {

    const fechaActual = new Date();
    const day = fechaActual.getDate().toString().padStart(2, '0');
    const month = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const year = fechaActual.getFullYear();

    return `${day}-${month}-${year}`;
}