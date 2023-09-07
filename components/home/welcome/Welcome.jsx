import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full Time", "Part Time", "Freelance", "Internship"];

const Welcome = () => {
  const [activeJobType, setActiveJobType] = useState(jobTypes[0]);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>hello siddhartha!</Text>
        <Text style={styles.welcomeMessage}>find job for you!</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value=""
            onChange={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle = {{columnGap: SIZES.medium}}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Welcome;
