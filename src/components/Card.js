import React from "react";

const Card = (props) => {
	return (
		<div>
			<div
				className="card w-96 bg-base-200 shadow-2xl hover:scale-105 duration-200 transform-gpu
            hover:bg-base-300"
				onClick={() => {
					window.open(props.link, "_blank");
				}}
			>
				<figure className="bg-cover bg-no-repeat max-w-md max-h-44 bg-top">
					<img src={props.image} alt="Shoes" className="" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">
						{props.title}
						{props.new ? (
							<div className="badge badge-secondary">NEW</div>
						) : null}
					</h2>
					<p>{props.description}</p>
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
