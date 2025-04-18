import Link from "next/link";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const DoctorCard = ({ doctor }) => {
    const { id, name, category, gender, imageLink, rating, experience } = doctor;
    return (
        <Link href={`/alldoctor/${id}`}>
            <div className="border-2 p-2 rounded-2xl border-[#00BDE0] flex flex-col gap-1.5 hover:scale-100 group transition-all">
                {/* Image */}
                <div className="relative mb-3 overflow-hidden rounded-2xl transition-all">
                    <img className="rounded-2xl group-hover:scale-105 overflow-hidden transition-all" src={imageLink} alt="" />
                    <div className="absolute bottom-5 left-5 bg-[#00BDE0] px-4 py-1 rounded-xs">
                        <h1 className="text-white font-semibold">{category}</h1>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex flex-row gap-5 justify-start items-center">
                    <div className="text-yellow-500 flex flex-row gap-2 text-xl">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                    </div>
                    <p>{rating}</p>
                    {/* <Rating /> */}
                </div>

                {/* Doctor Info */}
                <div className="">
                    <div className="">
                        <h1 className="text-2xl font-bold">{name}</h1>
                    </div>
                    <p className="text-gray-600">{experience}</p>
                </div>

                {/* Location */}
                <div className="flex flex-row gap-1 justify-start items-center mb-5">
                    {/* Icon */}
                    <div className="font-bold text-xl">
                        <IoLocationOutline />
                    </div>
                    {/* Location Text */}
                    <div className="text-gray-600">
                        <h1 className="text-base">{gender}</h1>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default DoctorCard;