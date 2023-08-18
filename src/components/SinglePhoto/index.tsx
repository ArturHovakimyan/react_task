import "./style.css";

const SinglePhoto = () => {
	return (
		<div className="single-photo-container">
			<div className="single-photo-fone">
				<img src="photos/productPhoto/productFon\svg" alt="productFon" />
			</div>
			<div className="single-photo-up-right-side">
				<img
					src="photos/productPhoto/productPhotoFirst/svg"
					alt="productPhotoFirst"
				/>
			</div>
			<div className="single-photo-product">
				<img src="photos/productPhoto/svg" alt="productPhoto" />
			</div>
		</div>
	);
};

export default SinglePhoto;
