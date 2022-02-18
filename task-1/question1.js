/**
 * Question 1:
 * What are the issues in the page, how would you fix it?
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

// 3. Solution: import components from different folder or create them in this file
import People from './example-folder/People';
import House from './example-folder/House';

// 5. Solution: import fetchPeople action method
import { fetchPeople } from './actions/peopleActions';

const mapCompaniesIntoPeople = (people, companies) => {
  /* Map Company names into each person that they work for */
};

const mapPeopleIntoHouses = (houses, people) => {
  /* Map people into house who live in the house */
};

class App extends React.Component {
  // 1. Solution: call fetch people in this lifecycle method if we want to call it once
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    // 1. Problem: this method will be called every time something changes in render lifecycle
    // this.props.fetchPeople();
    return (
      // 2. Problem: passed styles object in View is not been declared
      <View style={styles.container}>
        {/* 3. Problem: People and House components are not created/imported in this file */}
        <People data={this.props.people} />
        <House data={this.props.houses} />
      </View>
    );
  }
}

// 2. Solution: Create styles object using imported StyleSheet
const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    maxWidth: 920,
    margin: '0 auto',
  },
});

const mapStateToProps = (state) => {
  // 4. Solution: change the variable name
  const {
    people: { data },
    companies,
    houses: housesChanged,
  } = state;
  const people = mapCompaniesIntoPeople(data, companies);
  // 4. Problem: houses variable is already been declared on line 58
  const houses = mapPeopleIntoHouses(housesChanged, data);
  return {
    people,
    houses,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // 5. Problem: fetchPeople is not defined
  fetchPeople: () => dispatch(fetchPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
