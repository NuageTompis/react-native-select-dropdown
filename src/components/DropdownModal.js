import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Portal } from 'react-native-paper';

const DropdownModal = ({ visible, onRequestClose, children }) => {
  if (!visible) return null;

  return (
    <Portal>
      <TouchableWithoutFeedback onPress={onRequestClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.dropdownContainer}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Portal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 9999,
  },
  dropdownContainer: {
    height: '100%',
    width: '100%',
  },
});

export default DropdownModal;
