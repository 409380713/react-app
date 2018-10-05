import Loadable from 'react-loadable';
import MyLoadingComponent from '@compoents/MyLoadingComponent'
export default Loadable(
    {
        loader: () => import('./index.js'),
        loading: MyLoadingComponent
    }
)
