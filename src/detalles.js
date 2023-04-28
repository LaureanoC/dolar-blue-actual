export function getDolares(iterable) {

    const dolares = iterable.filter(dolar => dolar.source == ('Blue'))
    return dolares

}

export function filtrarDolares(fecha, dolares) {
    const aux = dolares.filter(dolar => dolar.date <= fecha)
    return aux.slice(0, 5)

}

export function fechaActual() {

    const fechaActual = new Date();
    const day = fechaActual.getDate().toString().padStart(2, '0');
    const month = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const year = fechaActual.getFullYear();

    return `${day}-${month}-${year}`;
}