import { BrowserRouter, Switch } from 'react-router-dom';

export const RouterMock = (props: any): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>{props.children}</Switch>
    </BrowserRouter>
  );
};
