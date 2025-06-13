import React, { useEffect } from "react";
import { Route, useLocation, useMatch, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const { collectionId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const isCollectionFetching = useSelector(selectIsCollectionFetching);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      {!collectionId ? (
        <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
      ) : (
        <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} />
      )}
    </div>
  );
};

export default ShopPage;
