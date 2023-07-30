import { IconCode } from "@tabler/icons-react";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";

const Card = (props) => {
	const { theme } = React.useContext(ThemeContext);
	return (
		<div>
			<div
				className={`card w-96 ${
					theme === "light"
						? "bg-base-300 hover:bg-gray-300"
						: "bg-base-200"
				} shadow-2xl hover:scale-105 duration-300 transform-gpu
            hover:bg-base-300 xl:w-[30rem] xl:min-h-[45vh]`}
				onClick={() => {
					window.open(props.link, "_blank");
				}}
			>
				{props.image ? (
					<div className="bg-contain bg-no-repeat max-w-md max-h-44 xl:max-h-60 xl:max-w-full bg-left-top rounded-2xl mb-4 xl:h-60 overflow-clip">
						<img src={props.image} alt="Shoes" className="bg-top rounded-2xl" />
					</div>
				) : (
					<div className="bg-secondary w-full h-44 justify-center flex items-center rounded-2xl xl:h-60">
						<IconCode className="w-24 h-24 text-primary-content" />
					</div>
				)}
				<div className="card-body">
					<div className="card-title text-2xl">
						{props.title}
						{props.new ? (
							<div className="badge badge-secondary">NEW</div>
						) : null}
					</div>
					<p className="text-2xl">{props.description}</p>
					<div className="card-actions justify-end">
						{props.tags
							? props.tags.map((tag) => {
									return (
										<div className="badge badge-outline badge-lg">
											{tag}
										</div>
									);
							  })
							: null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
