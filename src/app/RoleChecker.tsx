import React from "react";
import { jwtDecode } from "jwt-decode";
// import { useAuthenticationContext } from "./AuthenticationContext";

interface RoleCheckerProps {
  defaultRole: string;
  children: React.ReactNode;
}

const RoleChecker: React.FC<RoleCheckerProps> = ({ defaultRole, children }) => {
  //   const { accessToken } = useAuthenticationContext();

  const storedAccessToken = sessionStorage.getItem("accessToken");

  const [userRoles, setUserRoles] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (storedAccessToken) {
      const decodedToken = jwtDecode(storedAccessToken);

      if (decodedToken) {
        const rolesArray = decodedToken?.resource_access?.democlient?.roles;

        console.log("decodedToken", decodedToken);
        console.log("rolesArray", rolesArray);

        if (rolesArray.length > 0) setUserRoles(rolesArray);
      }
    }
  }, [storedAccessToken]);

  console.log("userRoles", userRoles);

  // Your logic to check if the user has any of the required roles
  const hasRequiredRole = userRoles.includes(defaultRole);

  console.log("hasRequiredRole", hasRequiredRole);

  // Conditionally render the children based on the role check
  return hasRequiredRole ? <>{children}</> : null;
};

export default RoleChecker;
