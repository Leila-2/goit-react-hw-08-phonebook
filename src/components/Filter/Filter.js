import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";

import { Section } from "../Section/Section";
const Filter = ({ value, onChange }) => (
  <Section title="Ищите контакт в один клик!">
    <label htmlFor="search">
      <p>Введите имя вашго контакта</p>
      <input id="search" type="text" value={value} onChange={onChange}></input>
    </label>
  </Section>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = (state) => ({ value: state.contacts.filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
