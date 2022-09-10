<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEU PEDIDO</title>
</head>
<style>
    body {
        background-color: #211d19;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    main {
        background-color: #575048;
        width: 40vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 25vh;
        border-radius: 10px;
        color: bisque;
        font-size: 3vw;
        font-weight: bold;
    }

    input {
        border: none;
        border-radius: 3px;
        background-color: #211d19;
        color: bisque;
        font-size: 3vh;
        width: 5vw;
        height: 5vh;
    }

    input:hover {
        background-color: bisque;
        color: #211d19;
    }
</style>

<body>
    <main>
        <div>
            <p>TEU CÚ É MEU ?</p>
        </div>
        <div>
            <input id="btnYes" type="button" onclick="pegary()" value="SIM">
            <input id="btnNo" type="button" onclick="pegarn()" value="NÃO">
        </div>
    </main>
</body>
<script>
    function pegary(){
        alert(" ME LIGA 👌\n 11 96816-2298");
    }
    function pegarn(){
        window.close();
        window.alert("ESSE SITE NUNCA EXISTIU....");
    }
    
</script>

</html>
