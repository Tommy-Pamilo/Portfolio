type ProjectCardProps = {
  title: string;
  description: string;
  isSelected?: boolean;
  imageUrl?: string;
  onZoom?: () => void; // lisätty callback
};

export default function ProjectCard({
  title,
  description,
  isSelected = false,
  imageUrl,
  onZoom,
}: ProjectCardProps) {
  if (!isSelected) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 w-full cursor-pointer">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-2xl rounded-lg p-6 w-full sm:w-96 cursor-pointer select-none">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md mb-4 cursor-zoom-in"
          onClick={(e) => {
            e.stopPropagation();
            if (onZoom) onZoom();
          }}
        />
      ) : (
        <div className="bg-gray-300 w-full h-48 rounded-md flex items-center justify-center text-gray-500 mb-4">
          picture coming soon
        </div>
      )}

      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-md text-gray-800">{description}</p>
      </div>
    </div>
  );
}
