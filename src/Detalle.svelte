<script>
    export let compra;
    export let venta;
    export let fechahora;
</script>

<div class="contenedor">
    <p>{compra}</p>
    <p>{fechahora}</p>
    <p>{venta}</p>
</div>

<style>
    .contenedor {
        display: flex;
        gap: 4rem;
        justify-content: center;
    }
</style>
