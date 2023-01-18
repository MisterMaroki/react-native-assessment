import React from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RetailerLoadingSkeleton = () => {
  return (
    <>
      <SkeletonPlaceholder borderRadius={4}>
        <View style={styles.placeholderContainer}>
          <View style={styles.imagePlaceholder} />
          <View style={styles.textPlaceholderContainer}>
            <View style={styles.titleTextContainer} />
            <View style={styles.locationTextContainer} />
          </View>
        </View>
      </SkeletonPlaceholder>
      <View style={styles.verticalSpace} />
    </>
  );
};

const styles = StyleSheet.create({
  placeholderContainer: { flexDirection: 'column', alignItems: 'center' },
  imagePlaceholder: {
    width: 330,
    height: 220,
    borderRadius: 5,
  },
  textPlaceholderContainer: {
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  titleTextContainer: { width: 200, height: 20, marginTop: 10 },
  locationTextContainer: { width: 120, height: 20, marginTop: 10 },
  verticalSpace: { height: 20 },
});

export default RetailerLoadingSkeleton;
