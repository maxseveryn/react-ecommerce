import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "black",
  color: "white",
  border: "2px solid white",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

export default function BasicModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          The account has been created
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Activation instructions have been sent to the specified email
        </Typography>
        <Link to="/">
          <Button variant="contained">To Homepage</Button>
        </Link>
      </Box>
    </Modal>
  );
}
