import "./style.css";
import SinglePhoto from "src/components/SinglePhoto";

const ProductContentAN = () => {
	return (
		<>
			<h3>ԱՆՁԵՌՈՑԻԿՆԵՌ</h3>
			<div className="an">
				<div className="products-page-continer">
					<div className="container">
						<SinglePhoto
							flag={true}
							productFone={"photos/productPhotos/productFon/svg"}
							productPhoto={"photos/productPhotos/productPhoto/svg"}
							productComponentphoto={
								"photos/productPhotos/productComponentphoto/svg"
							}
						/>
						<SinglePhoto
							flag={false}
							productFone={"photos/productPhotos/productFon/svg"}
							productPhoto={"photos/productPhotos/productPhoto/svg"}
							productComponentphoto={
								"photos/productPhotos/productComponentphoto/svg"
							}
						/>
						<SinglePhoto
							flag={false}
							productFone={"photos/productPhotos/productFon/svg"}
							productPhoto={"photos/productPhotos/productPhoto/svg"}
							productComponentphoto={
								"photos/productPhotos/productComponentphoto/svg"
							}
						/>
						<SinglePhoto
							flag={false}
							productFone={"photos/productPhotos/productFon/svg"}
							productPhoto={"photos/productPhotos/productPhoto/svg"}
							productComponentphoto={
								"photos/productPhotos/productComponentphoto/svg"
							}
						/>
						<SinglePhoto
							flag={true}
							productFone={"photos/productPhotos/productFon/svg"}
							productPhoto={"photos/productPhotos/productPhoto/svg"}
							productComponentphoto={
								"photos/productPhotos/productComponentphoto/svg"
							}
						/>
						<SinglePhoto
							flag={true}
							productFone={"photos/productPhotos/productFon/svg"}
							productPhoto={"photos/productPhotos/productPhoto/svg"}
							productComponentphoto={
								"photos/productPhotos/productComponentphoto/svg"
							}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductContentAN;
