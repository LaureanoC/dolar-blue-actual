<script>
    import Detalle from "./Detalle.svelte";
    import { fechaActual } from "./date.js";
    import { filtrarDolares } from "./detalles";

    export let dolares;

    let hoy = fechaActual();
    let fechaElegida = hoy;
    let filtrados = [...dolares.slice(0, 5)];

    function manejarCambioFecha(e) {
        filtrados = filtrarDolares(fechaElegida, dolares);
    }
</script>

<div class="contenedor">
    <div class="detalles">
        <div class="cont-input">
            <input
                type="date"
                bind:value={fechaElegida}
                on:change={manejarCambioFecha}
            />
        </div>
        <div class="compra-venta">
            <h3>Compra</h3>
            <h3>Venta</h3>
        </div>

        <div class="contenedor-detalle">
            {#each filtrados as dolar}
                <Detalle
                    compra={dolar.value_buy}
                    venta={dolar.value_sell}
                    fechahora={dolar.date}
                />
            {/each}
        </div>
    </div>
</div>

<style>
    .contenedor {
        flex-direction: column;
        margin-top: 3rem;
        margin-bottom: 5rem;
    }

    .cont-input {
        text-align: center;
        margin-bottom: 1rem;
    }

    

    input {
        
        background-color: #c2bb99;
        border-radius: 2.5rem;
        padding: 0.5rem;
        border:0;
        font-family: 'Pacifico', sans-serif;
        color:#21364B;
        font-size: 1rem;
        text-align: center;
    }

    h3 {
        font-size: 1rem;
    }

    .compra-venta {
        display: flex;
        font-size: 1.125rem;
        gap: 11.4rem;
        justify-content: center;
    }

    .contenedor-detalle {
        margin-top: 1.7rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .detalles {
        display: flex;
        flex-direction: column;
    }
</style>
