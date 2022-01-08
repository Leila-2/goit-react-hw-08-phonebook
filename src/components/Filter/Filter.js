import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  changeFilter,
  clearFilter,
} from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import { Section } from "../Section/Section";

const Filter = ({ value, onChange, onClear }) => (
  <Section title="Ищите контакт в один клик!">
    <label htmlFor="search">
      <p>Введите имя вашго контакта</p>
      <input id="search" type="text" value={value} onChange={onChange}></input>
      <button className="clear-btn" onClick={onClear}>
        Очистить
      </button>
    </label>
  </Section>
);
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = (state) => ({ value: getFilter(state) });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
  onClear: (e) => dispatch(clearFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
