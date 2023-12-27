import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useLinkList } from "../states/atomLinkList";
import { getItem } from "../util/asyncStorageUtils";

const RecoilCustomPersist = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [list, setList] = useLinkList();
  const loadData = useCallback(async () => {
    const data = await getItem("MAIN_LINK_LISt");
    if (data !== null) {
      setList(data);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) return;
    loadData();
  }, []);

  return <>{isLoaded && children}</>;
};

export default RecoilCustomPersist;
