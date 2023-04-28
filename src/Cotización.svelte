<script>
    export let titulo;
    export let valor;
</script>

<div class="contenedor">
    <p>{titulo}</p>
    <p class="valor"> {valor}</p>
</div>

<style>
   
    .valor{
        text-align: center;
        font-size: 3rem;
    }

    p{
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .valor::before{
        color:#4D9599;
        content:"$ ";
    }

    
</style>