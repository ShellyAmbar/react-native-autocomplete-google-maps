import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    width: "100%",
    position: "relative",
  },
  input: {
    paddingVertical: 10,
    borderColor: "#000",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingEnd: 50,
    borderRadius: 20,
    backgroundColor: "transparent",
  },
  suggestionList: {
    backgroundColor: "transparent",
    borderColor: "#ddd",

    borderTopWidth: 0,
    borderRadius: 5,
    marginTop: 5,
  },
  suggestion: {
    padding: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  itemText: {
    color: "#FFF",
    fontSize: 14,
  },
  delete: {
    position: "absolute",
    right: 10,
    bottom: 0,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  imgDelete: {
    width: 24,
    height: 24,
  },
});

export default styles;
