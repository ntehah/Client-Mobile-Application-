import React, { useReducer } from "react";
export const OrganizationInscription = React.createContext();

export function ProviderOrganizationInscription(props) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "INSCRIPTION":
          return {
            ...prevState,
            Email: action.email,
            Description: action.numero,
            Photo: action.adresse,
          };
      }
    },
    {
      Email: "",
      Description: "",
      Photo: null,
    },
  );
  const Context = React.useMemo(
    () => ({
      aboutOrganization: async (data) => {
        dispatch({
          type: "INSCRIPTION",
          Email: data.email,
          Description: data.description,
          Photo: data.photo,
        });
      },
    }),
    [],
  );
  return (
    <OrganizationInscription.Provider value={[state,Context]}>
      {props.children}
    </OrganizationInscription.Provider>
  );
}
