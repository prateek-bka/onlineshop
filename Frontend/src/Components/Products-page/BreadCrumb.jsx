import { Box } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

export const BreadCrumb = () => {
  const { Q } = useParams();

  const person =
    Q === "Men"
      ? "men"
      : Q === "Women"
      ? "women"
      : Q === "Boys"
      ? "boys"
      : Q === "Girls"
      ? "girls"
      : Q;

  const NewPerson =
    Q === "men"
      ? "Men"
      : Q === "women"
      ? "Women"
      : Q === "boys"
      ? "Boys"
      : Q === "girls"
      ? "Girls"
      : Q;

  return (
    <>
      <Box mb={"10px"}>
        <Breadcrumb
          fontWeight="medium"
          fontSize={{ base: "10px", sm: "13px", md: "14px", lg: "14px" }}
        >
          <BreadcrumbItem
            color={"#696d7f"}
            fontWeight={"500"}
            _hover={{ color: "black" }}
          >
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem fontWeight={"600"} textDecor={"none"}>
            <Link to={`/products/${person}`}>Myntra Fashion Store</Link>
          </BreadcrumbItem>

          <BreadcrumbItem fontWeight={"600"} textDecor={"none"} isCurrentPage>
            <Link to={`/products/${person}`}>{NewPerson}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
    </>
  );
};
