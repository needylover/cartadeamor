function aceitar() {
    Swal.fire({
        icon: 'success',
        title: 'VOCÊ ACEITOU OS TERMOS',
        text: 'Agora estamos namorando',
    })
}
function negar() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'OPÇÃO INVALIDA',
    })
}
function pegary() {
    window.open('test.html');
    window.close();
}
function pegarn() {
    window.close();
    window.alert("ESSE SITE NUNCA EXISTIU....");
}
