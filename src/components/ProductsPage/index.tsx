import SinglePhoto from "src/components/SinglePhoto";
import "./style.css";

const ProductsPage = () => {
	return (
		<div className="productsPage-container">
			<span className={"productsPage-header"}>ԱՐՏԱԴՐԱՆՔ</span>
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
			<button className={"showMore-btn"}>ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ</button>
		</div>
	);
};

export default ProductsPage;
