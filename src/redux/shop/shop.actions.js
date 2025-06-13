import { collection, getDocs } from "firebase/firestore";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

// Action creators
export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

// Thunk async action
export const fetchCollectionsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionsStart());

    try {
      const collectionRef = collection(firestore, "collections");
      const snapshot = await getDocs(collectionRef);
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
      console.log("error: ", error);
      dispatch(fetchCollectionsFailure(error.message));
    }
  };
};
