import React, {memo} from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import styles from "./auto-complete-geo-location.styles";

import useAutoCompleteGeoLocation from "./hooks/useAutoCompleteGeoLocation";
import PlaceAutocompleteProps from "./interfaces";

const AutoCompleteGeoLocation = ({
  quaryData,
  placeholder = "Search",
  onPlaceSelected,
  debounceDelayInSeconds = 1,
  containerStyle,
  inputStyle,
  placeHolderColor = "#FFF",
  resultItemStyle,
  resultItemTextStyle,
  resultListStyle,
  textInputProps = {},
  onTextChanged,
  country,
  isReset,
}: PlaceAutocompleteProps) => {
  const {
    handleSelect,
    suggestions,
    query,
    setQuery,
    setisHandleSearchEnabled,
    handleDelete,
  } = useAutoCompleteGeoLocation({
    quaryData,
    onPlaceSelected,
    debounceDelayInSeconds,
    onTextChanged,
    country,
    isReset,
  });
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <View>
        {query?.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              handleDelete();
            }}
            style={[styles.delete]}
          >
            <Image
              style={styles.imgDelete}
              source={require("../assets/images/close.png")}
            />
          </TouchableOpacity>
        )}
        <TextInput
          placeholderTextColor={placeHolderColor}
          style={[styles.input, {...inputStyle}]}
          placeholder={placeholder}
          value={query}
          onChangeText={(text) => {
            setisHandleSearchEnabled(true);
            setQuery(text);
          }}
          {...textInputProps}
        />
      </View>
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => item.place_id}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleSelect(item.place_id, item.description)}
              style={[styles.suggestion, {...resultItemStyle}]}
            >
              <Text style={[styles.itemText, {...resultItemTextStyle}]}>
                {item.description}
              </Text>
            </TouchableOpacity>
          )}
          style={[styles.suggestionList, {...resultListStyle}]}
        />
      )}
    </View>
  );
};

export default memo(AutoCompleteGeoLocation);
