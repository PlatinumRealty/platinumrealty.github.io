import Image from "next/image";
import house from "../../assets/house.jpeg";
import EditPropertyModal from "./EditPropertyModal";
import EditTeamModal from "./EditTeamModal";

const TeamCard = ({ member, admin, setEditModalOpen, editModalOpen }) => {
  const { name, role, image } = member;
  return (
    <div className="flex flex-col cursor-pointer justify-center items-center text-white rounded-md  hover:border-white">
      {editModalOpen && (
        <EditTeamModal setEditModalOpen={setEditModalOpen} member={member} />
      )}
      <Image
        src={image.length === 0 ? house : image}
        alt="Header"
        className="h-[160px] w-[160px] rounded-full mb-2 hover:border-2 hover:border-white"
      />
      {/* data container */}
      <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-[25px] flex items-center justify-between ">
          {name}
        </div>
        <div>
          <div className="font-bold">{role}</div>
        </div>

        {admin && (
          <div
            className=" flex justify-end text-gray-500"
            onClick={() => setEditModalOpen(true)}
          >
            {" "}
            Edit{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
