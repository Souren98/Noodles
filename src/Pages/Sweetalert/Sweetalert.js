import SweetAlert from "react-bootstrap-sweetalert";

function SweetAlertComponent({ onConfirm, cancel, title, subtitle, type }) {
  return (
    <SweetAlert
      style={{
        zIndex: "1000",
        backgroundColor: "#fdf2e9",
        color: "#333",
        borderRadius: "8px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        padding: "30px",
        width: "90%",
        maxWidth: "500px",
      }}
      title={<span style={{ color: "#d9534f", fontWeight: "bold", fontSize: "1.5rem" }}>{title}</span>}
      onConfirm={onConfirm}
      type={type || "danger"}
      showCancel={true}
      confirmBtnText="Confirm"
      confirmBtnStyle={{
        backgroundColor: "#28a745",
        color: "#fff",
        borderRadius: "4px",
        padding: "10px 20px",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
      cancelBtnText="Cancel"
      cancelBtnStyle={{
        backgroundColor: "#d9534f",
        color: "#fff",
        borderRadius: "4px",
        padding: "10px 20px",
        fontWeight: "bold",
        fontSize: "1rem",
      }}
      onCancel={cancel}
    >
      <h5 style={{
        fontSize: "1.125rem",
        color: "#5a5a5a",
        fontWeight: "500",
        textAlign: "center",
        marginBottom: "10px",
      }}>
        {subtitle}
      </h5>
    </SweetAlert>
  );
}

export default SweetAlertComponent;

