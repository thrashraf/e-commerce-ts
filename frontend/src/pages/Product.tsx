import { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { listProductById } from "../services/product/productById/productDetailActions";
import star from "../assets/star.png";
import { Spinner } from "../components/Spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../services/cart/cartAction";

type Props = {};

const Product = (props: Props) => {
  
  const [quantity, setQuantity] = useState<number>(1);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const productByIdList = useSelector((state: RootStateOrAny) => state.productDetailReducers);
  const cartDetail = useSelector((state: RootStateOrAny) => state.cartReducer);
  const userDetail = useSelector((state: RootStateOrAny) => state.loginReducer);

  const { productById } = productByIdList;
  const { cart } = cartDetail;
  const { userInfo } = userDetail;
  
  let optionValue: any = [];

  const mapOptions = () => {
    for (let index = 1; index <= productById.countInStock; index++) {
      optionValue.push(index)
    }    
  }

  useEffect(() => {
    dispatch(listProductById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  
  mapOptions()
  
  const quantityHandler = (e: any) => {
    setQuantity(parseInt(e.target.value))
  }
  
  const addItemHandler = () => {
    
    if (!userInfo) navigate('/login')

    const item = cart.findIndex((item: any) => item.id === productById.id);
    console.log(item);

    if (item >= 0) {
      cart[item].quantity += quantity;
      dispatch(addToCart(cart));
    } else {
      const cartItem = { ...productById, quantity: quantity };
      console.log(cartItem);
      cart.push(cartItem);
      dispatch(addToCart(cart));
      }
  }



  return productById.length !== 0 ? (
    <div className="grid grid-cols-2 max-w-7xl m-auto px-10 gap-20 py-10">
      <section>
        <img src={productById.image} alt="product" className="rounded-lg" />
      </section>

      <section>
        <h1 className="text-2xl">{productById.name}</h1>

        <section className="flex justify-between w-[200px] mt-2 text-gray-500 text-md">
          <aside className="flex items-center">
            <p className="text-gray-500 mr-1">{productById.rating}</p>
            <img src={star} alt="rating" className="w-4 h-4 " />
          </aside>

          <aside>
            <p>Ratings {productById.numReviews}</p>
          </aside>

          <aside>
            <p>{productById.numReviews} Sold</p>
          </aside>
        </section>

        <h3 className="text-3xl font-medium my-10">${productById.price}</h3>

        <section className="w-[200px] flex justify-between mb-10">
          <p>Quantity</p>

          <select className="w-[60px] border-gray-500 border-[1.5px] rounded-md px-2 focus:outline-none" onChange={(e) => quantityHandler(e)}>
            {optionValue.map((item:any) => <option value={item}>{item}</option>)}
          </select>
        </section>

        <section className=" max-w-[300px] flex justify-between mb-10">
          <button
            className="px-6 py-2 rounded-md bg-gray-500 text-white hover:bg-gray-400 focus:outline-none"
            onClick={addItemHandler}
          >
            Add To Cart
          </button>

          <button className="px-8 py-2 rounded-md text-white font-medium bg-blue-500 hover:bg-blue-400 focus:outline-none">
            Buy Now
          </button>
        </section>

        <span className="flex border-t border-gray-300 mt-20 max-w-sm"></span>

        <section className="mt-10">
          <h3 className="text-lg">Product Specifications</h3>

          <section className="w-[250px] flex justify-between text-gray-500 mt-5 text-sm leading-8">
            <aside>
              <p>Category</p>
              <p>Stock</p>
              <p>Brand</p>
            </aside>

            <aside>
              <p>{productById.category}</p>
              <p>{productById.countInStock}</p>
              <p>{productById.brand}</p>
            </aside>
          </section>
        </section>

        <span className="flex border-t border-gray-300 mt-10 max-w-sm"></span>

        <section className="mt-10 max-w-md ">
          <h3 className="text-lg">Product Description</h3>
          <p className="text-gray-500 text-sm mt-5 leading-7 ">
            {productById.description}
          </p>
        </section>
      </section>
    </div>
  ) : (
    <Spinner />
  );
};

export default Product;
