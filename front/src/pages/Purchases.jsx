import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PurchaseItem from "../components/PurchaseItem";
import { getPurchasesThunk } from "../store/slices/purchases.slice";

const Purchases = () => {
  const dispatch = useDispatch();
  const purchases = useSelector((state) => state.purchases);
  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);
  return (
    <div>
      <ul>
        {purchases.map((purchase,index) => (
          <PurchaseItem purchase={purchase} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Purchases;
