import swal from "sweetalert";

export const ConfirmAlert = ({ title, text, isSuccess, deleteProductAPI, id, setData, data }) => {
  swal({
    title: title,
    text: text,
    icon: "warning",
    buttons: true,
    dangerMode: true
  }).then((willDelete) => {
    if (willDelete) {
      deleteProductAPI(id);
      setData(data.filter((i) => i.id !== id));

      swal(isSuccess, {
        icon: "success"
      });
    } else {
      swal("Delete canceled");
    }
  });
};
