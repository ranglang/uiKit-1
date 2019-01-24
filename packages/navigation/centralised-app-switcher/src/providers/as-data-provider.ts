import { Component, ReactNode } from 'react';

interface ChildrenProps<DataStructure> {
  data: null | DataStructure;
  isLoading: boolean;
  error: any;
}

export interface DataProviderProps<DataStructure> {
  children: (props: ChildrenProps<DataStructure>) => ReactNode | string;
}

export interface MapPropsToPromiseSignature<T, DataStructure> {
  (props: T): Promise<DataStructure> | DataStructure;
}

export default function<
  T extends DataProviderProps<DataStructure>,
  DataStructure
>(mapPropsToPromise: MapPropsToPromiseSignature<T, DataStructure>) {
  return class extends Component<T> {
    state = {
      isLoading: true,
      data: null,
      error: null,
    };

    componentDidMount() {
      const dataSource = mapPropsToPromise(this.props);
      if (dataSource instanceof Promise) {
        dataSource
          .then((result: DataStructure) => {
            this.setState({
              data: result,
              isLoading: false,
            });
          })
          .catch(error => {
            this.setState({
              error,
              isLoading: false,
            });
          });
      } else {
        this.setState({
          data: dataSource,
          isLoading: false,
        });
      }
    }

    render() {
      const { isLoading, data, error } = this.state;
      const { children } = this.props;

      return children({
        data,
        isLoading,
        error,
      });
    }
  };
}
