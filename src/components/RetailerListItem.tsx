import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import useSelectedRetailer from '../../store';
import { Retailer } from '../../types/Retailer';

const RetailerListItem = ({
  retailer,
  navigation,
  disabled = false,
}: {
  retailer: Retailer;
  navigation: any;
  disabled?: boolean;
}) => {
  const { setSelectedRetailer } = useSelectedRetailer();
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed ? styles.containerPressed : null,
      ]}
      onPress={() => {
        setSelectedRetailer(retailer.name);
        navigation.navigate('Retailer', {
          id: retailer.id,
        });
      }}
      disabled={disabled}>
      <Image
        source={{
          uri: retailer.image,
        }}
        style={styles.image}
      />
      <Text style={styles.nameText}>{retailer.name}</Text>
      <Text style={styles.locationText}>{retailer.location}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'rgba(52, 52, 52, 0.2)',
    shadowColor: 'rgba(52, 52, 52, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameText: {
    marginTop: 10,
    marginBottom: 2,
    fontSize: 22,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 16,
  },
  containerPressed: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
  },
  image: {
    height: 180,
    width: '100%',
    resizeMode: 'contain',
  },
});

export default RetailerListItem;
