import * as React from 'react';
import HeaderPage from './../../components/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as HeaderActions } from './../../store/modules/Category';
import { StoreState } from './../../store/modules';

type Props = {
  result: boolean;
  HeaderActions: typeof HeaderActions;
};

class HeaderContainer extends React.Component<Props> {
  // 로딩 시작일 때
  public onLoad = () => {
    this.props.HeaderActions.load();
  };
  // 응답이 성공적일 때
  public onResponse = () => {
    this.props.HeaderActions.response();
  };
  // 응답이 성공적일 때
  public onError = () => {
    this.props.HeaderActions.error();
  };

  public render() {
    return (
      <HeaderPage
        result={this.props.result}
        onLoad={this.onLoad}
        onResponse={this.onResponse}
        onError={this.onError}
      />
    );
  }
}

export default connect(
  ({ category }: StoreState) => ({
    result: category.result
  }),
  dispatch => ({
    HeaderActions: bindActionCreators(HeaderActions, dispatch)
  })
)(HeaderContainer);
