import * as Yup from "yup"

export const BILLING_FIELDS = [
  {
    inputId: "firstName",
    label: "First name"
  },
  {
    inputId: "lastName",
    label: "Last name"
  },
  {
    inputId: "address1",
    label: "Address"
  },
  {
    inputId: "postcode",
    label: "Postcode"
  },
  {
    inputId: "city",
    label: "City"
  },
  {
    inputId: "email",
    label: "Email"
  },
  {
    inputId: "phone",
    label: "Phone"
  }
]

export const BILLING_SCHEMA = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address1: Yup.string().required(),
  postcode: Yup.number().moreThan(1111),
  city: Yup.string().required(),
  email: Yup.string().email(),
  phone: Yup.number().required().moreThan(11111111)
})
