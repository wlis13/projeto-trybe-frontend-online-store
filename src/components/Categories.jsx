import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

import { getCategories } from '../services/api';

class Categories extends React.Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();

    this.setState({
      categories,
    });
  }

  render() {
    const { selectedCategory, onChange } = this.props;
    const { categories } = this.state;
    return (
      <form>
        {
          categories.map((category) => (
            <Input
              key={ category.id }
              testId="category"
              id={ category.id }
              text={ category.name }
              name="selectedCategory"
              type="radio"
              value={ category.id }
              onChange={ onChange }
              checked={ selectedCategory === category.id }
            />
          ))
        }
      </form>
    );
  }
}

Categories.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Categories;
