import { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = ({ onSubmit, onCancel, totalPrice }) => {
  const [formData, setFormData] = useState({
    name: {
      name: "",
      error: "",
    },
    email: {
      email: "",
      error: "",
    },
    number: {
      number: "",
      error: "",
    },
    address: {
      address: "",
      error: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    const hasErrors = Object.values(formData).some(
      (field) => field.error !== ""
    );
    e.preventDefault();
    if (!hasErrors) {
      onSubmit();
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    let errorMessage = {
      name: "",
      email: "",
      number: "",
      address: "",
    };
    if (name === "name") {
      errorMessage.name =
        value.trim().length < 3
          ? "Name must be at least 3 characters long."
          : "";
    } else if (name === "email") {
      errorMessage.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Please enter a valid email address.";
    } else if (name === "number") {
      errorMessage.number = /^\d{10}$/.test(value)
        ? ""
        : "Phone number must be 10 digits long.";
    } else if (name === "address") {
      errorMessage.address =
        value.trim().length < 5
          ? "Address must be at least 5 characters long."
          : "";
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: {
        ...prevData[name],
        error: errorMessage[name],
      },
    }));
  };

  return (
    <div className={styles.formOverlay}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Enter Your Details</h2>
        <div className={styles.checkout}>
          <h2>Checkout</h2>
          <p>Total Price = {totalPrice}</p>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          {formData.name.error && (
            <p className={styles.errorMessage}>{formData.name.error}</p>
          )}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formData.number.name ? styles.invalid : ""}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          {formData.email.error && (
            <p className={styles.errorMessage}>{formData.email.error}</p>
          )}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formData.email.error ? styles.invalid : ""}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="number">Phone Number</label>
          {formData.number.error && (
            <p className={styles.errorMessage}>{formData.number.error}</p>
          )}
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number.number}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formData.number.error ? styles.invalid : ""}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          {formData.address.error && (
            <p className={styles.errorMessage}>{formData.address.error}</p>
          )}
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={formData.number.address ? styles.invalid : ""}
            required
          />
        </div>
        <div className={styles.formActions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
