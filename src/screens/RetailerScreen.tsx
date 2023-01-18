import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useQuery } from 'react-query';
import fetchRetailer from '../../utils/fetchRetailer';
import RetailerListItem from '../components/RetailerListItem';

const RetailerScreen = ({ navigation, route }) => {
  const {
    isLoading,
    error,
    data: retailer,
  } = useQuery('retailerData', () => fetchRetailer(route?.params?.id));

  return (
    <SafeAreaView>
      {error ? (
        <Text>
          Oops, we're having some difficulties locating our retailers! Please
          try again later...
        </Text>
      ) : isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <RetailerListItem
          retailer={retailer!}
          navigation={navigation}
          key={retailer?.id || route?.params?.id}
          disabled={true}
        />
      )}
    </SafeAreaView>
  );
};

export default RetailerScreen;
