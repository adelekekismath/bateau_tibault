import React from 'react';
import { Category } from '../components/ProductsCategories';

import data from '../assets/data/categories.json'

var initCategoriesState= { categories: Array<Category>() };

initCategoriesState.categories = data;

  

const CategoriesContextWrapper = (component?: React.Component) => ({
    ...initCategoriesState,
});

type Context = ReturnType<typeof CategoriesContextWrapper>;

export const CategoriesContext = React.createContext<Context>(CategoriesContextWrapper());

interface State {
  context: Context;
}

export class CategoriesContextProvider extends React.Component<{children?: React.ReactNode;}, {}> {
  state: State = {
    context: CategoriesContextWrapper(this),
  };

  render() {
    return (
      <CategoriesContext.Provider value={this.state.context}>
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

