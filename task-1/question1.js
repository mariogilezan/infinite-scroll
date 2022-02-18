/**
 * Question 1:
 * What are the issues in the page, how would you fix it?
 */
import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';

// 2. Solution: import files from different folder or create them in this file
import People from 'example-folder';
import House from 'example-folder';

const mapCompaniesIntoPeople = (people, companies) => {
  /* Map Company names into each person that they work for */
};

const mapPeopleIntoHouses = (houses, people) => {
  /* Map people into house who live in the house */
};

class App extends React.Component {
  render() {
    this.props.fetchPeople();
    return (
      // 1. Problem: passed styles object in View is not been declared
      <View style={styles.container}>
        {/* 2. Problem: People and House components are not created/imported in this file */}
        <People data={this.props.people} />
        <House data={this.props.houses} />
      </View>
    );
  }
}

// 1. Solution: Create styles object using imported StyleSheet
const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    maxWidth: 920,
    margin: '0 auto',
  },
});

const mapStateToProps = (state) => {
  // 3. Solution: change the variable name
  const {
    people: { data },
    companies,
    houses: housesChanged,
  } = state;
  const people = mapCompaniesIntoPeople(data, companies);
  // 3. Problem: houses variable is already been declared on line 48
  const houses = mapPeopleIntoHouses(housesChanged, data);
  return {
    people,
    houses,
  };
};

// 4. Solution: this action function needs to be created on separate folder where we deal with redux specific functionalities
const fetchPeople = () => {
  return {
    type: 'FETCH_PEOPLE',
  };
};

const mapDispatchToProps = (dispatch) => ({
  // 4. Problem: we need to create fetchPeople function that returns action type and data with people
  fetchPeople: () => dispatch(fetchPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
