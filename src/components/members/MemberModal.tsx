import Modal from "../ui/Modal";
import MemberForm from "./MemberForm";
import { Member } from "@/types/member";
import { Sport } from "@/types/sport";

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingMember?: Member | null;
  sports: Sport[];
}

const MemberModal: React.FC<MemberModalProps> = ({
  isOpen,
  onClose,
  editingMember = null,
  sports,
}) => {

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Member"
      size="xl"
      ariaLabel={"Add Member Member"}
      ariaDescribedBy="member-form"
    >
      <div id="member-form">
        <MemberForm
          initialData={editingMember}
          onCancel={onClose}
          sports={sports}
        />
      </div>
    </Modal>
  );
};

export default MemberModal;
