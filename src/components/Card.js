import { IconCode } from "@tabler/icons-react";
import React from "react";

const Card = (props) => {
	return (
		<div>
			<div
				className="card w-96 bg-base-200 shadow-2xl hover:scale-105 duration-300 transform-gpu
            hover:bg-base-300"
				onClick={() => {
					window.open(props.link, "_blank");
				}}
			>
				{props.image ? (
					<figure className="bg-cover bg-no-repeat max-w-md max-h-44 bg-top">
						<img src={props.image} alt="Shoes" className="" />
					</figure>
				) : (
					<div className="bg-secondary w-full h-44 justify-center flex items-center rounded-2xl">
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
