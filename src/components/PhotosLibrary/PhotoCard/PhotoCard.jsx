
const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card-wrapper">
      <div className="photo-card relative">
        {photo.isDimond && (
          <div className="badge absolute top-4 right-4 z-30 rounded-[86px]">
            <img src="Images/PhotosLibrary/Dimond.svg" />
          </div>
        )}
        <img
          className="h-48 w-48 rounded-2xl border border-[#E5E5E4]"
          src={`${photo.photo}`}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default PhotoCard;
