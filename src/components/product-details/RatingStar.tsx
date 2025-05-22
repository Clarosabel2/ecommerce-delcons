import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type Props = {
    rate: number;
    className?: string;
};

export default function RatingStar({ rate, className }: Props) {
    return (
        <div className={`flex ${className}`}>
            {Array.from({ length: 5 }).map((_, i) => {
                const full = i + 1 <= Math.floor(rate);
                const half = i + 0.5 <= rate && i + 1 > rate;

                return full ? (
                    <FaStar key={i} className="text-yellow-400" />
                ) : half ? (
                    <FaStarHalfAlt key={i} className="text-yellow-400" />
                ) : (
                    <FaRegStar key={i} className="text-gray-300" />
                );
            })}
        </div>
    );
}
