import { Member } from "@/types";
import MemberRow from "./MemberRow";

interface MemberTableProps {
  members: Member[];
  onEditMember?: (member: Member) => void;
}

const MemberTable = ({
  members,
  onEditMember,
}: MemberTableProps) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                E-mail
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Sports
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-card divide-y divide-gray-200 dark:divide-gray-700">
            {members.map((member: Member) => (
              <MemberRow
                key={member.id}
                member={member}
                onEditMember={onEditMember}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MemberTable;
