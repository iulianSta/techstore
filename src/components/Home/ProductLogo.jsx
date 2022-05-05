import React from 'react'
import Logo from "../../JSON/product-logo.json"

const ProductLogo = () => {

        // Map the logo's
  const logo = Logo.map((obj) => {
    const { id, name, logo } = obj;

    return (
        <img key={id} src={process.env.PUBLIC_URL + logo} alt={name} className="logo" />
    );
  });
  return (
    <div  className="logo-container">
        {logo}
    </div>
  )
}

export default ProductLogo