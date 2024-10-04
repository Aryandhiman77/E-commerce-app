import React from "react";
import { Link, replace, useParams } from "react-router-dom";

const VarientImageColor = ({viewProduct,...props}) => {
  let pathname = new URL(location.href).pathname;
  pathname = pathname.replaceAll('%20',' ');
  return (
    <div
      className="colors reviews"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "3px",
        padding: "4px",
        border: "1px solid #0f6cb2",
        borderRadius: "12px",
      }}
    >
      {viewProduct.varients_ids && viewProduct.varients_ids.length > 0 ? (
        viewProduct.varients_ids.map((item, i) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              {item.color ? (
                <Link
                  to={`/product/${viewProduct.product_url_slug}/${item.varient_name}`}
                  style={{
                    background: `${item.color}`,
                    height: "45px",
                    width: "45px",
                    borderRadius: "40px",
                    border: `${pathname===`/product/${viewProduct.product_url_slug}/${item.varient_name}`?'2px solid ':''} `,
                    cursor: "pointer",
                    padding:'22px',
                    margin: "4px",
                  }}
                  title={item.varient_name}
                ></Link>
              ) : (
                <Link
                  to={`/product/${viewProduct.product_url_slug}/${item.varient_name}`}
                  style={{
                    borderRadius: "40px",
                    cursor: "pointer",
                    margin: "4px",
                    border: `${pathname===`/product/${viewProduct.product_url_slug}/${item.varient_name}`?'2px solid ':''} `,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center", 
                  }}
                  title={item.varient_name}
                >
                  <img
                    height={45}
                    width={45}
                    style={{ borderRadius: "40px" }}
                    src={props.host + item.varient_images[0]}
                    alt=""
                  />
                </Link>
              )}
            </div>
          );
        })
      ) : (
        <p>No variants available</p>
      )}
      <Link
        to={`/product/${viewProduct.product_url_slug}`}
        style={{
          cursor: "pointer",
          margin: "4px",
          borderRadius: "40px",
          border: `${pathname===`/product/${viewProduct.product_url_slug}`?'2px solid ':''} `,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        title={viewProduct.product_name}
      >
        <img
          height={45}
          width={45}
          style={{ borderRadius: "40px" }}
          src={props.host + viewProduct.image}
          alt=""
        />
      </Link>
    </div>
  );
};

export default VarientImageColor;
