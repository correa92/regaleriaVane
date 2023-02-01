import Swal from "sweetalert2";

export default function Alert2(mensaje) {
  return (
    <div>
      {Swal.fire({
        title: mensaje,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      })}
    </div>
  );
}
