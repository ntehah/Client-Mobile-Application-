import React, { useReducer } from "react";
export const VolunteerInscription = React.createContext();

export function ProviderVolunteerInscription(props) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "INFORMATION":
          return {
            ...prevState,
            Email: action.email,
            Numero: action.numero,
            Adresse: action.adresse,
            DateDeNaissance: action.date,
            Name:action.Name,
          };
        case "CALENDRIER":
          return {
            ...prevState,
            Calendrier: action.calendrier,
          };
        case "QUALIFICATION":
          return {
            ...prevState,
            Qualification: action.qualification,
          };
          case "PHOTO":
          return {
            ...prevState,
            Photo: action.photo,
          };
      }
    },
    {
      Email: "",
      Name: "",
      Numero: "",
      Adresse: "",
      DateDeNaissance: "",
      Calendrier: "",
      Qualification: "",
      Photo:null,
    },
  );
  const InscriptionContext = React.useMemo(
    () => ({
      Information: async (data) => {
        dispatch({
          type: "INFORMATION",
          email: data.Email,
          numero: data.numero,
          adresse: data.adresse,
          date: data.date,
          Name:data.Name
        });
      },
      Calendrier: async (data) => {
        dispatch({ type: "CALENDRIER" ,calendrier:data});
      },
      ProfilPhoto: async (data) => {
        dispatch({ type: "PHOTO" ,photo:data});
      },
      Qualification: async (data) => {
        dispatch({ type: "QUALIFICATION", qualification: data });
      },
    }),
    [],
  );
  return (
    <VolunteerInscription.Provider value={[state,InscriptionContext]}>
      {props.children}
    </VolunteerInscription.Provider>
  );
}
