<script>
  import Historial from "./Historial.svelte";
  import Cotiza from "./Cotización.svelte";

  import { getDolares } from "./detalles";
  import { transformarDate } from "./date.js";

  const url = "https://api.bluelytics.com.ar/v2/latest";
  const historial = "https://api.bluelytics.com.ar/v2/evolution.json";


  async function cotizar(url) {
    const respuesta = await fetch(url);
    const objRespuesta = await respuesta.json();
    return objRespuesta;
  }

  async function fetchHistorial(url) {
    const respuesta = await fetch(url);
    const objRespuesta = await respuesta.json();
    return objRespuesta;
  }
</script>

<h1>Dólar blue</h1>

{#await cotizar(url)}
  <div style="text-align:center">
    <div class="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
{:then respuesta}
  <p class="fecha">{transformarDate(respuesta.last_update)}</p>
  <div class="contenedor">
    <Cotiza titulo="Compra" valor={respuesta.blue.value_buy} />
    <Cotiza titulo="Venta" valor={respuesta.blue.value_sell} />
  </div>
{/await}

<h2>Historial</h2>

{#await fetchHistorial(historial)}
  <div style="text-align:center">
    <div class="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
{:then respuesta}
  <Historial dolares={getDolares(respuesta)} />
{/await}

<footer>
  Desarrollado por Laureano Neyén Chaves - 2023
</footer>
<style>
  h1 {
    margin-top: 4.5rem;
    font-size: 4.5rem;
    text-align: center;
  }

  .fecha {
    text-align: center;
    margin: 1.8rem 2rem;
  }

  .contenedor {
    display: flex;
    justify-content: center;
    gap: 5rem;
  }

  h2 {
    margin-top: 5rem;
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  footer{
    margin-top: 3rem;
    background-color: #c2bb99;
  
    padding:1rem 0;
    padding-bottom: 1rem;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
  }


  /*Spinner*/

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #21364b;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
</style>
