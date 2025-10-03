import { useState, useEffect } from "react";
import { Member, Sport } from "@/types";
import Modal from "../ui/Modal";
import MemberForm from "./MemberForm";
import sportsService from "@/services/sports";

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
