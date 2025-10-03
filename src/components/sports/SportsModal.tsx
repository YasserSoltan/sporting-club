import { Sport } from "@/types";
import Modal from "../ui/Modal";
import SportsForm from "./SportsForm";

interface SportModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingSport?: Sport | null;
  showCloseButton?: boolean;
}

const SportsModal: React.FC<SportModalProps> = ({
  isOpen,
  onClose,
  editingSport = null,
  showCloseButton = true,
}) => {
  const modalTitle = editingSport ? "Edit Sport" : "Add Sport";

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={modalTitle}
      size="xl"
      ariaLabel={modalTitle}
      ariaDescribedBy="sports-form"
      showCloseButton={showCloseButton}
    >
      <div id="menu-item-form">
        <SportsForm
          initialData={editingSport}
          onCancel={onClose}
        />
      </div>
    </Modal>
  );
};

export default SportsModal;
