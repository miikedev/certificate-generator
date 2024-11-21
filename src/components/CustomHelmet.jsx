import { Helmet } from "react-helmet"
import PropTypes from "prop-types";
const CustomHelmet = ({title,description,keywords}) => {
  return (
    <Helmet>  
      <title>{title}</title>  
      <meta name="description" content={description} />  
      <meta name="keywords" content={keywords} />  
      {/* You can add more meta tags here as needed */}  
    </Helmet>  
  )
}
CustomHelmet.propTypes = {  
    title: PropTypes.string,  
    description: PropTypes.string,  
    keywords: PropTypes.string,  
}; 

export default CustomHelmet