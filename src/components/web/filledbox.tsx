

const FilledBox = ({ title, description, imageSrc }: { title: string, description: string, imageSrc: string }) => {
	return (
		<div className="bg-white p-4 shadow-md rounded-md">
			<img src={imageSrc} alt={title} className="w-full h-40 object-cover mb-4 rounded-md" />
			<h2 className="text-xl font-semibold mb-2">{title}</h2>
			<p className="text-gray-600">{description}</p>
		</div>
	);
};


export default FilledBox;
