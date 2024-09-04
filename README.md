- react-native-google-maps-autocomplete is A dynamic auto complete text input that fetches from google maps api and show the results in a drop down.

- It comes with a built-in TypeScript typings and is compatible with all popular JavaScript frameworks. You can use it directly or leverage well-maintained wrapper packages that allow for a more native integration with your frameworks of choice.

# Installation:

```
npm i react-native-google-maps-autocomplete

```

```ruby
yarn add react-native-google-maps-autocomplete

```

# Usage:

```
import AutoCompleteGeoLocation from 'react-native-google-maps-autocomplete';


    <AutoCompleteGeoLocation
            textInputProps={{cursorColor: '#FFF'}}
            inputStyle={styles.input}
            placeholder={'Search city'}
            onPlaceSelected={(placeId, description) => {
              setCity(description);
            }}
            quaryData={{
              key: GOOGLE_API_KEY,
              types: ['city_hall'],
            }}
          />
```

# Example:

![ ](./assets/videos/1.gif)

> **Dataset Properties**

| Name                    | Type                                           |
| ----------------------- | ---------------------------------------------- |
| quaryData               | {key: string; types: string[]}                 |
| placeholder?            | string                                         |
| onPlaceSelected         | (placeId: string, description: string) => void |
| debounceDelayInSeconds? | number                                         |
| containerStyle?         | ViewStyle                                      |
| inputStyle?             | ViewStyle                                      |
| placeHolderColor?       | string                                         |
| resultItemTextStyle?    | TextStyle                                      |
| resultItemStyle?        | ViewStyle                                      |
| resultListStyle?        | ViewStyle                                      |
| textInputProps?         | TextInputProps                                 |
| onTextChanged?          | (text: string) => void                         |
