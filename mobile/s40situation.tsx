import React, { useState, useEffect } from 'react';
import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

export default function template() {
  function startRecording() {
    alert('recording')
  }


  return (
    <View>
      <Text> JustReform </Text>
      <button> My Situations </button>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
