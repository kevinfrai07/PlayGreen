import { styles } from '../styles/styles';

export default function Loader() {
  const {DivLoader, Loader} = styles
  
  return(
    <DivLoader className="text-primary text-center">
      <Loader className="spinner-border" role="status">
       <span className="visually-hidden">Loading...</span>
      </Loader>
    </DivLoader>
    )
  }
  
  