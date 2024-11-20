// src/context/CarContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const carRespone = await axios.get("http://localhost:8386/cars");
      setCars(carRespone.data);
      const userRespone = await axios.get("http://localhost:8386/users");
      setUsers(userRespone.data);
    };
    fetchData();
  }, []);
  const addUsers = async (user) => {
    const response = await axios.post("http://localhost:9999/users", {
      ...user,
      id: users.length + 1,
    });
    setUsers([...users, response.data]);
  };

  // const getDepartmentName = (departmentId) => {
  //   const department = cars.find((dept) => dept.id == departmentId);
  //   return department ? department.name : "Unknown";
  // };

  // const addEmployeeToTeam = (user, quantity) => {
  //   const existingMember = team.find((member) => member.id == user.id);
  //   if (existingMember) {
  //     setTeam(
  //       team.map((member) =>
  //         member.id == user.id
  //           ? { ...member, quantity: member.quantity + quantity }
  //           : member
  //       )
  //     );
  //   } else {
  //     setTeam([...team, { ...user, quantity }]);
  //   }
  // };

  // const increaseQuantity = (id) => {
  //   setTeam(
  //     team.map((member) =>
  //       member.id == id ? { ...member, quantity: member.quantity + 1 } : member
  //     )
  //   );
  // };

  // const decreaseQuantity = (id) => {
  //   setTeam(
  //     team
  //       .map((member) => {
  //         if (member.id == id) {
  //           if (member.quantity > 1) {
  //             return { ...member, quantity: member.quantity - 1 };
  //           } else {
  //             return null; // Đánh dấu để xóa
  //           }
  //         }
  //         return member;
  //       })
  //       .filter((member) => member !== null)
  //   );
  // };

  // const removeEmployeeFromTeam = (id) => {
  //   setTeam(team.filter((member) => member.id != id));
  // };

  // const updateQuantity = (id, quantity) => {
  //   setTeam(
  //     team.map((member) => (member.id == id ? { ...member, quantity } : member))
  //   );
  // };
  return (
    <CarContext.Provider
      value={{
        cars,
        users,
        setUsers,
        searchTerm,
        setSearchTerm,
        addUsers,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarProvider;
