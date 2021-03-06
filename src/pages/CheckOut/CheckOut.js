import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useServices from "../../hooks/useServices";
const initialValue = {
  name: "",
  email: "",
  country: "",
  city: "",
  postCode: "",
  phone: "",
};

const CheckOut = () => {
  const [services] = useServices();
  const [item, setItem] = useState("");
  const [userData, setUserData] = useState(initialValue);
  const { name, email, country, city, postCode, phone } = userData;
  const { id } = useParams();
  useEffect(() => {
    const selectitem = services.find((s) => s.id === parseInt(id));
    setItem(selectitem);
  }, [id, services]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    console.log(userData);
    console.log("hello world");
    toast("Thank you for the booking");
  };

  return (
    <div className="container my-5">
      <ToastContainer />
      <div className="row">
        <div className="col-md-7 col-lg-7 col-xl-6 mb-4 mb-md-0">
          <form onSubmit={handleCheckOut}>
            <h3>Billing Details</h3>
            <div className="form-floating mb-3">
              <input
                onChange={handleChange}
                value={name}
                name="name"
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Enter your Name"
                required
              />
              <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
              onChange={handleChange}
              value={email}
                name="email"
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating  mb-3">
              <input
              onChange={handleChange}
              value={country}
                name="country"
                type="text"
                className="form-control"
                id="country"
                placeholder="Country/Region"
                required
              />
              <label htmlFor="country">Country/Region</label>
            </div>
            <div className="form-floating mb-3">
              <input
              onChange={handleChange}
              value={city}
                name="city"
                type="text"
                className="form-control"
                id="city"
                placeholder="City"
                required
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="form-floating mb-3">
              <input
              onChange={handleChange}
              value={postCode}
                name="postCode"
                type="text"
                className="form-control"
                id="city"
                placeholder="postCode"
                required
              />
              <label htmlFor="postCode">Post Code</label>
            </div>
            <div className="form-floating mb-3">
              <input
              onChange={handleChange}
              value={phone}
                name="phone"
                type="text"
                className="form-control"
                id="city"
                placeholder="phone"
                required
              />
              <label htmlFor="phone">Phone Number</label>
            </div>
            <button type="submit" className="btn btn-primary my-3">
              Proced To CheckOut
            </button>
          </form>
        </div>
        <div className="col-md-5 col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
          <div className="p-3">
            <span className="fw-bold">Your Order</span>
            <div className="d-flex justify-content-between mt-2">
              <span>Price</span> <span>${item?.price}</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Amount Deductible</span> <span>$0.0</span>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <span>Tax(10%)</span> <span>+ ${item?.price * 0.1}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span className="lh-sm">Hotel Rent per Day</span>
              <span>${item?.price - 50}</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-2">
              <span>Total </span>{" "}
              <span className="text-success">
                ${item?.price + item?.price * 0.1 + (item?.price - 50)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
