import Swal from "sweetalert2";

export default function Alert(mensaje,estado) {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
  return (
    <div>
      {Toast.fire({
        icon: estado,
        title: mensaje,
      })}
    </div>
  );
}
