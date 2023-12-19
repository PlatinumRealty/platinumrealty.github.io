import Image from "next/image";
import house from "../../assets/house.jpeg";
import EditPropertyModal from "./EditPropertyModal";

const PropertyCard = ({ property, admin, setEditModalOpen, editModalOpen }) => {
  const { price, description, location, image } = property;

  function formatPrice(price) {
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return USDollar.format(price);
  }

  const formattedPrice = formatPrice(price);

  return (
    <div className="flex flex-col cursor-pointer md:w-[300px] h-[300px] w-full p-4 justify-center items-center bg-[#222222] rounded-md hover:border-2 hover:border-white">
      {editModalOpen && (
        <EditPropertyModal
          setEditModalOpen={setEditModalOpen}
          property={property}
        />
      )}
      <Image
        src={image.length === 0 ? house : image}
        alt="Header"
        className="md:h-[160px] md:w-[260px] rounded-md mb-2 w-[400px]"
      />
      {/* data container */}
      <div className=" md:w-[260px] w-full ">
        <div className="font-bold text-[16px] flex items-center justify-between ">
          {formattedPrice}
          <span className=" text-[12px]">+ Buyer Fee</span>
        </div>
        <div>
          <div className="font-bold">{location}</div>
          <div>{description}</div>
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

export default PropertyCard;
