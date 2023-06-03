import Swal from "sweetalert2";
import axios from "axios";

//Funcion para sacar las alertas una vez se realicen X cosas.
export function show_alert(message, icono, foco = '') {
    if (foco !== '') {
        document.getElementById(foco).focus();
    }
    Swal.fire({
        title: message,
        icon: icono,
        customClass: {confirmButton: 'btn btn-primary', popup: 'animated zoomIn'},
        buttonsStyling: false
    });
}

export function confirmar(id, name) {
    var url = 'http://apimsg.com.devel/api/posts/' + id;
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger'},
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: 'Seguro de eliminar el post ' + name,
        text: 'Se perdera la informacion del post',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '<i class="fa-solid fa-check"></i>Si, eliminar',
        cancelButtonText: '<i class="fa-solid fa-ban"></i>Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            enviarSolicitud('DELETE', {id: id}, url, 'Posts eliminado');
        } else {
            show_alert('Operacion cancelada', 'info')
        }
    })
}

export function enviarSolicitud(metodo, params, url, message) {
    axios({method: metodo, url: url, data: params}).then(function (response) {
        var status = response.data[0]['status'];
        console.log(response)

        if (status === 'success') {
            show_alert(mesaje, status);
            window.setTimeout(function () {
                window.location.href = '/';
            }, 1000);
        } else {
            var listado = ''
            var errores = response.data[1]['errors'];
            Object.keys(errores).forEach(
                key => listado += errores[key][0] + '.'
            );
            show_alert(listado, 'error');
        }
    }).catch(function (error) {
        show_alert('Error en la solicitud', 'error');
    });
}