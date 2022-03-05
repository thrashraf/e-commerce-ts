type Props = {
  item: any;
  index: number;
 
};

function PurchaseItem(props: Props) {
  return (
    <div
      className="flex w-full bg-gray-50 p-3 rounded-lg mb-3"
      key={props.index}
    >
      <img
        src={props.item.image}
        alt={props.item.name}
        className="object-cover h-[100px] w-[100px] rounded-lg mr-10"
      />
      <section className="text-xs flex flex-col justify-around w-full">
        <p>{props.item.name}</p>
        <section className="flex justify-between text-gray-500">
          <p>variation</p>
          <p>Quantity: {props.item.quantity}</p>
        </section>
        <p className="font-medium">
          ${(props.item.price * props.item.quantity).toFixed(2)}
        </p>
      </section>

      
    </div>
  );
}

export default PurchaseItem;
