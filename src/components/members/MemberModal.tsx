"use client";
import { useState, useEffect } from "react";
import { Member, Sport } from "@/types";
import Modal from "../ui/Modal";
import MemberForm from "./MemberForm";
import sportsService from "@/services/sports";

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  editingMember?: Member | null;
}

const MemberModal: React.FC<MemberModalProps> = ({
  isOpen,
  onClose,
  editingMember = null,
}) => {
  const [sports, setSports] = useState<Sport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const sportsData = await sportsService.getSports();
        setSports(sportsData);
      } catch (error) {
        console.error("Failed to fetch sports:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchSports();
    }
  }, [isOpen]);
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
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <MemberForm
            initialData={editingMember}
            onCancel={onClose}
            sports={sports}
          />
        )}
      </div>
    </Modal>
  );
};

export default MemberModal;
