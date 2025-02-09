// ContactMeSection.js
// ContactMeSection.js
// import React, { useEffect } from "react";
// import { useFormik } from "formik";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormErrorMessage,
//   FormLabel,
//   Heading,
//   Input,
//   Select,
//   Textarea,
//   VStack,
// } from "@chakra-ui/react";
// import * as Yup from "yup";
// import FullScreenSection from "./FullScreenSection";
// import useSubmit from "../hooks/useSubmit";
// import { useAlertContext } from "../context/alertContext";

// const ContactMeSection = () => {
//   const { isLoading, response, submit } = useSubmit();
//   const { onOpen } = useAlertContext();

//   // Formik setup
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       email: "",
//       type: "hireMe",
//       comment: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string().required("Name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       type: Yup.string().required("Please select a type of enquiry"),
//       comment: Yup.string()
//         .min(10, "Message must be at least 10 characters")
//         .required("Message is required"),
//     }),
//     onSubmit: async (values, { resetForm }) => {
//       await submit("/api/submit", values); // Updated to include the URL parameter
//     },
//   });

//   // Show success or error alert based on response
//   useEffect(() => {
//     if (response) {
//       onOpen(response.type, response.message); // Show alert based on response
//       if (response.type === "success") {
//         formik.resetForm(); // Reset form on successful submission
//       }
//     }
//   }, [response, onOpen, formik]);

//   return (
//     <FullScreenSection
//       isDarkBackground
//       backgroundColor="#512DA8"
//       py={16}
//       spacing={8}
//     >
//       <VStack w="1024px" p={32} alignItems="flex-start">
//         <Heading as="h1" id="contactme-section">
//           Contact me
//         </Heading>
//         <Box p={6} rounded="md" w="100%">
//           <form onSubmit={formik.handleSubmit}>
//             <VStack spacing={4}>
//               {/* Name Field */}
//               <FormControl
//                 isInvalid={formik.touched.firstName && formik.errors.firstName}
//               >
//                 <FormLabel htmlFor="firstName">Name</FormLabel>
//                 <Input
//                   id="firstName"
//                   name="firstName"
//                   {...formik.getFieldProps("firstName")}
//                 />
//                 <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
//               </FormControl>

//               {/* Email Field */}
//               <FormControl
//                 isInvalid={formik.touched.email && formik.errors.email}
//               >
//                 <FormLabel htmlFor="email">Email Address</FormLabel>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   {...formik.getFieldProps("email")}
//                 />
//                 <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
//               </FormControl>

//               {/* Type of Enquiry */}
//               <FormControl>
//                 <FormLabel htmlFor="type">Type of enquiry</FormLabel>
//                 <Select id="type" name="type" {...formik.getFieldProps("type")}>
//                   <option value="hireMe">Freelance project proposal</option>
//                   <option value="openSource">
//                     Open source consultancy session
//                   </option>
//                   <option value="other">Other</option>
//                 </Select>
//               </FormControl>

//               {/* Message Field */}
//               <FormControl
//                 isInvalid={formik.touched.comment && formik.errors.comment}
//               >
//                 <FormLabel htmlFor="comment">Your message</FormLabel>
//                 <Textarea
//                   id="comment"
//                   name="comment"
//                   height={250}
//                   {...formik.getFieldProps("comment")}
//                 />
//                 <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
//               </FormControl>

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 colorScheme="purple"
//                 width="full"
//                 isLoading={isLoading}
//                 loadingText="Submitting..."
//               >
//                 Submit
//               </Button>
//             </VStack>
//           </form>
//         </Box>
//       </VStack>
//     </FullScreenSection>
//   );
// };

// export default ContactMeSection;
