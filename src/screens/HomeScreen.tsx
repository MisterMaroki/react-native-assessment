import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import { useQuery } from 'react-query';
import fetchRetailers from '../../utils/fetchRetailers';
import RetailerListItem from '../components/RetailerListItem';
import RetailerLoadingSkeleton from '../components/RetailerLoadingSkeleton';

const HomeScreen = ({ navigation }) => {
  const {
    isLoading,
    error,
    data: retailers,
  } = useQuery('retailersData', fetchRetailers);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text style={styles.titleStyle}>Our Retailers</Text>
        {error ? (
          <Text>
            Oops, we're having some difficulties locating our retailers! Please
            try again later...
          </Text>
        ) : isLoading ? (
          new Array(2)
            .fill(0)
            .map((_, i) => <RetailerLoadingSkeleton key={i + 10} />)
        ) : (
          retailers?.map(retailer => (
            <RetailerListItem
              retailer={retailer}
              navigation={navigation}
              key={retailer.id}
            />
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 25,
  },
  scrollView: {},
});

export default HomeScreen;
