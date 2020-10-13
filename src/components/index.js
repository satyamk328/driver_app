import React, { Component } from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {
    FetchPage
} from "./../actions/UserAction";


class App extends Component {

  incrementCount() {
    this.props.FetchPage();
  }
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <View styles={styles.container}>
        <Button
          title="Get Employee"
          onPress={() => this.incrementCount()}
        />
        {users.map((employee) => (
          <Text style={styles.textCenter}>{employee.employee_name}</Text>
        ))}


      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter: {
    textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
  let {
    UserReducer: { pending, error, pagination, users }
  } = state;

  return {
      pending: pending,
      error: error,
      users: users,
      pagination: pagination
  };
};

App.propTypes = {
  FetchPage: PropTypes.func,
  history: PropTypes.object,
  pending: PropTypes.bool,
  error: PropTypes.object,
};

export default connect(mapStateToProps, {
  FetchPage,
})(App);
